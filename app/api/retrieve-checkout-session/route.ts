import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2025-08-27.basil", 
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: "Session ID is required" },
        { status: 400 }
      )
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    // Verify payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, error: "Payment not completed" },
        { status: 400 }
      )
    }

    if (!session.payment_intent) {
      return NextResponse.json(
        { success: false, error: "Payment intent not found" },
        { status: 400 }
      )
    }

    // Get payment intent ID (it can be a string or PaymentIntent object)
    const paymentIntentId = typeof session.payment_intent === 'string' 
      ? session.payment_intent 
      : session.payment_intent.id

    // Reconstruct form data from metadata
    let formData = null
    if (session.metadata) {
      if (session.metadata.formData) {
        // Single chunk
        try {
          formData = JSON.parse(session.metadata.formData)
          console.log('✅ Form data retrieved from single metadata chunk')
        } catch (e) {
          console.error('❌ Error parsing formData from metadata:', e)
        }
      } else if (session.metadata.formDataChunks) {
        // Multiple chunks - reconstruct
        const chunks = parseInt(session.metadata.formDataChunks)
        let formDataJson = ''
        for (let i = 0; i < chunks; i++) {
          const chunk = session.metadata[`formData_${i}`] || ''
          formDataJson += chunk
        }
        try {
          formData = JSON.parse(formDataJson)
          console.log(`✅ Form data retrieved from ${chunks} metadata chunks`)
        } catch (e) {
          console.error('❌ Error parsing formData from chunks:', e, 'Chunks:', chunks, 'Length:', formDataJson.length)
        }
      } else {
        console.warn('⚠️ No formData found in session metadata. Available keys:', Object.keys(session.metadata))
      }
    } else {
      console.warn('⚠️ No metadata found in session')
    }

    // 🔹 Fallback: Try to get form data from payment intent metadata if session metadata is empty
    if (!formData && paymentIntentId) {
      try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
        if (paymentIntent.metadata) {
          if (paymentIntent.metadata.formData) {
            try {
              formData = JSON.parse(paymentIntent.metadata.formData)
              console.log('✅ Form data retrieved from payment intent metadata (fallback)')
            } catch (e) {
              console.error('❌ Error parsing formData from payment intent metadata:', e)
            }
          } else if (paymentIntent.metadata.formDataChunks) {
            const chunks = parseInt(paymentIntent.metadata.formDataChunks)
            let formDataJson = ''
            for (let i = 0; i < chunks; i++) {
              formDataJson += paymentIntent.metadata[`formData_${i}`] || ''
            }
            try {
              formData = JSON.parse(formDataJson)
              console.log(`✅ Form data retrieved from payment intent metadata chunks (fallback)`)
            } catch (e) {
              console.error('❌ Error parsing formData from payment intent chunks:', e)
            }
          }
        }
      } catch (error) {
        console.error('❌ Error retrieving payment intent for fallback:', error)
      }
    }

    return NextResponse.json({
      success: true,
      paymentIntentId,
      sessionStatus: session.payment_status,
      formData: formData, // Return the stored form data
    })
  } catch (error) {
    console.error("Error retrieving checkout session:", error)
    return NextResponse.json(
      { success: false, error: "Error retrieving checkout session" },
      { status: 500 }
    )
  }
}

