'use client'
import useFormStore from '@/stores/FormStore'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Loader } from 'lucide-react'
import { MdDone } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { fleets } from '../CarList'

function PaymentSuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { formData, setFormData, changeStep, formLoading, formError, changeCategory, bookingSent, isOrderDone, id, category } = useFormStore()
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [countdown, setCountdown] = useState(10)
  const hasProcessed = useRef(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  // Prepare locations for display
  const { fromLocation, toLocation, stops, duration } = formData;
  const locations = [
    fromLocation,
    ...stops,
  ].filter(Boolean);

  if(category === 'hourly'){
    locations.push({...duration, value:duration.value + " Hours"})
  } else {
    locations.push(toLocation)
  }

  const selectedFleet = fleets.find((item)=>item.name===formData.car.value);

  const formatTime = (time?: string | null): string => {
    if (!time) return "N/A"
    try {
      const [hours24, minutes] = time.split(":")
      const hours24Int = parseInt(hours24)
      
      if (isNaN(hours24Int) || isNaN(parseInt(minutes))) {
        return time // Return original if parsing fails
      }
      
      let hours12: number
      let period: string
      
      if (hours24Int === 0) {
        hours12 = 12
        period = "AM"
      } else if (hours24Int === 12) {
        hours12 = 12
        period = "PM"
      } else if (hours24Int > 12) {
        hours12 = hours24Int - 12
        period = "PM"
      } else {
        hours12 = hours24Int
        period = "AM"
      }
      
      return `${hours12}:${minutes.padStart(2, "0")} ${period}`
    } catch {
      return time || "N/A"
    }
  }

  // 🔹 Scroll to top when success page is shown
  useEffect(() => {
    if (isSuccess && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isSuccess])

  // 🔹 Countdown timer
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isSuccess, countdown])

  // 🔹 Redirect when countdown reaches 0
  useEffect(() => {
    if (isSuccess && countdown === 0) {
      router.push('/')
    }
  }, [isSuccess, countdown, router])

  useEffect(() => {
    // Prevent multiple executions
    if (hasProcessed.current) return
    
    // 🔹 Check if booking was already sent - show success page
    if (bookingSent || isOrderDone || id) {
      console.log("⚠️ Booking already sent, showing success page");
      setIsProcessing(false)
      setIsSuccess(true)
      return
    }
    
    hasProcessed.current = true

    const processPayment = async () => {
      const sessionId = searchParams.get('session_id')

      if (!sessionId) {
        setError('No session ID found. Please contact support if payment was completed.')
        setIsProcessing(false)
        return
      }

      try {
        // Retrieve the checkout session from Stripe
        const response = await fetch(`/api/retrieve-checkout-session?session_id=${sessionId}`)
        const data = await response.json()

        console.log('Checkout session data:', data)

        if (!data.success || !data.paymentIntentId) {
          const errorMsg = data.error || 'Failed to retrieve payment information'
          console.error('Failed to retrieve payment:', errorMsg)
          setError(errorMsg)
          setIsProcessing(false)
          return
        }

        // Restore form data from Stripe metadata if available
        if (data.formData) {
          console.log('Restoring form data from Stripe metadata...', data.formData)
          const restoredData = data.formData
          
          // Restore all form fields - batch updates
          if (restoredData.name) setFormData('name', restoredData.name)
          if (restoredData.email) setFormData('email', restoredData.email)
          if (restoredData.phone) setFormData('phone', restoredData.phone)
          if (restoredData.fromLocation) setFormData('fromLocation', restoredData.fromLocation)
          if (restoredData.toLocation) setFormData('toLocation', restoredData.toLocation)
          if (restoredData.date) setFormData('date', restoredData.date)
          if (restoredData.time) setFormData('time', restoredData.time)
          if (restoredData.returnDate) setFormData('returnDate', restoredData.returnDate)
          if (restoredData.returnTime) setFormData('returnTime', restoredData.returnTime)
          if (restoredData.passengers) setFormData('passengers', restoredData.passengers)
          if (restoredData.bags) setFormData('bags', restoredData.bags)
          if (restoredData.flightName) setFormData('flightName', restoredData.flightName)
          if (restoredData.flightNumber) setFormData('flightNumber', restoredData.flightNumber)
          if (restoredData.car) setFormData('car', restoredData.car)
          if (restoredData.rearSeat !== undefined) setFormData('rearSeat', restoredData.rearSeat)
          if (restoredData.boosterSeat !== undefined) setFormData('boosterSeat', restoredData.boosterSeat)
          if (restoredData.infantSeat !== undefined) setFormData('infantSeat', restoredData.infantSeat)
          if (restoredData.returnRearSeat !== undefined) setFormData('returnRearSeat', restoredData.returnRearSeat)
          if (restoredData.returnBoosterSeat !== undefined) setFormData('returnBoosterSeat', restoredData.returnBoosterSeat)
          if (restoredData.returnInfantSeat !== undefined) setFormData('returnInfantSeat', restoredData.returnInfantSeat)
          if (restoredData.isAirportPickup !== undefined) setFormData('isAirportPickup', restoredData.isAirportPickup)
          if (restoredData.isMeetGreet !== undefined) setFormData('isMeetGreet', restoredData.isMeetGreet)
          if (restoredData.isReturnMeetGreet !== undefined) setFormData('isReturnMeetGreet', restoredData.isReturnMeetGreet)
          if (restoredData.isReturn !== undefined) setFormData('isReturn', restoredData.isReturn)
          if (restoredData.basePrice !== undefined) setFormData('basePrice', restoredData.basePrice)
          if (restoredData.graduatiy !== undefined) setFormData('graduatiy', restoredData.graduatiy)
          if (restoredData.tax !== undefined) setFormData('tax', restoredData.tax)
          if (restoredData.discount !== undefined) setFormData('discount', restoredData.discount)
          if (restoredData.isAirportPickupPrice !== undefined) setFormData('isAirportPickupPrice', restoredData.isAirportPickupPrice)
          if (restoredData.isMeetGreetPrice !== undefined) setFormData('isMeetGreetPrice', restoredData.isMeetGreetPrice)
          if (restoredData.rearSeatPrice !== undefined) setFormData('rearSeatPrice', restoredData.rearSeatPrice)
          if (restoredData.infantSeatPrice !== undefined) setFormData('infantSeatPrice', restoredData.infantSeatPrice)
          if (restoredData.boosterSeatPrice !== undefined) setFormData('boosterSeatPrice', restoredData.boosterSeatPrice)
          if (restoredData.returnPrice !== undefined) setFormData('returnPrice', restoredData.returnPrice)
          if (restoredData.isReturnMeetGreetPrice !== undefined) setFormData('isReturnMeetGreetPrice', restoredData.isReturnMeetGreetPrice)
          if (restoredData.returnRearSeatPrice !== undefined) setFormData('returnRearSeatPrice', restoredData.returnRearSeatPrice)
          if (restoredData.returnInfantSeatPrice !== undefined) setFormData('returnInfantSeatPrice', restoredData.returnInfantSeatPrice)
          if (restoredData.returnBoosterSeatPrice !== undefined) setFormData('returnBoosterSeatPrice', restoredData.returnBoosterSeatPrice)
          if (restoredData.stopsPrice !== undefined) setFormData('stopsPrice', restoredData.stopsPrice)
          if (restoredData.totalPrice !== undefined) setFormData('totalPrice', restoredData.totalPrice)
          if (restoredData.distance !== undefined) setFormData('distance', restoredData.distance)
          if (restoredData.duration) setFormData('duration', restoredData.duration)
          
          // Restore category if available
          if (restoredData.category && changeCategory) {
            changeCategory(restoredData.category as "trip" | "hourly")
          }
          
          // Restore stops
          if (Array.isArray(restoredData.stops)) {
            restoredData.stops.forEach((stop: string, index: number) => {
              if (stop) {
                setFormData('stops', stop, '', index)
              }
            })
          }
          
          console.log('Form data restored from metadata')
        } else {
          console.warn('⚠️ No form data found in Stripe metadata')
        }

        // Store payment ID in form data
        setFormData('paymentId', data.paymentIntentId)
        console.log('Payment ID set:', data.paymentIntentId)

        // Wait for state updates to complete - increased wait time
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Get fresh formData from store with retries
        let store = useFormStore.getState()
        let currentFormData = store.formData
        let attempts = 0
        const maxAttempts = 3
        
        // Retry if required fields are missing
        while (attempts < maxAttempts && (!currentFormData.name.value || !currentFormData.email.value || !currentFormData.car.value)) {
          attempts++
          console.log(`Waiting for form data to be restored... attempt ${attempts}/${maxAttempts}`)
          await new Promise(resolve => setTimeout(resolve, 300))
          store = useFormStore.getState()
          currentFormData = store.formData
        }

        // Verify required form data is present
        if (!currentFormData.name.value || !currentFormData.email.value || !currentFormData.car.value) {
          console.error('Missing required form data after restoration:', {
            name: currentFormData.name.value,
            email: currentFormData.email.value,
            car: currentFormData.car.value,
            paymentId: currentFormData.paymentId.value,
            hasFormDataFromMetadata: !!data.formData,
            formDataKeys: data.formData ? Object.keys(data.formData) : [],
            restoredName: data.formData?.name,
            restoredEmail: data.formData?.email,
            restoredCar: data.formData?.car
          })
          
          setError('Missing required booking information. Your payment was successful, but we need your booking details. Please contact support with your payment ID: ' + data.paymentIntentId)
          setIsProcessing(false)
          return
        }

        console.log('Form data verified. Proceeding with booking...')

        // 🔹 Double-check bookingSent flag before proceeding
        const currentStore = useFormStore.getState()
        if (currentStore.bookingSent || currentStore.isOrderDone || currentStore.id) {
          console.log("⚠️ Booking already sent, showing success page");
          setIsProcessing(false)
          setIsSuccess(true)
          return
        }

        // Complete the booking by calling changeStep
        console.log('Calling changeStep to complete booking...')
        const isOk = await changeStep(true, 4)
        
        console.log('changeStep result:', isOk)
        
        // Wait a moment for state to update
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // Check if booking was sent successfully
        const finalStore = useFormStore.getState()
        const bookingWasSent = finalStore.bookingSent || finalStore.isOrderDone || finalStore.id
        
        if (isOk || bookingWasSent) {
          console.log('Booking successful!', {
            isOk,
            bookingSent: finalStore.bookingSent,
            isOrderDone: finalStore.isOrderDone,
            orderId: finalStore.id
          })
          
          // Show success page instead of redirecting immediately
          setIsProcessing(false)
          setIsSuccess(true)
        } else {
          // Wait a moment for formError to be set, then check it
          await new Promise(resolve => setTimeout(resolve, 200))
          const currentStore = useFormStore.getState()
          const currentFormError = currentStore.formError
          // Use formError from store if available, otherwise use generic message
          const errorMessage = currentFormError || formError || 'Failed to complete booking'
          console.error('Booking failed:', errorMessage, 'Form error:', currentFormError)
          setError(errorMessage)
          setIsProcessing(false)
        }
      } catch (err) {
        console.error('Error processing payment:', err)
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while processing your payment'
        setError(errorMessage)
        setIsProcessing(false)
      }
    }

    processPayment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (isProcessing || formLoading) {
    return (
      <div className='w-full bg-slate-50 flex flex-col min-h-[50vh] items-center justify-center py-16'>
        <div className='flex flex-col items-center gap-4'>
          <Loader className="animate-spin" size={40} />
          <div className='text-xl font-semibold'>Processing your payment...</div>
          <div className='text-gray-600'>Please wait while we confirm your payment and complete your booking.</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='w-full bg-slate-50 flex flex-col min-h-[50vh] items-center justify-center py-16 px-4'>
        <div className='flex flex-col items-center gap-4 max-w-md text-center'>
          <div className='text-red-600 text-xl font-semibold'>Payment Processing Error</div>
          <div className='text-gray-600'>{error}</div>
          <button
            onClick={() => router.push('/book-ride/passenger-details')}
            className='mt-4 px-6 py-2 bg-brand text-black font-semibold rounded-lg hover:bg-[#0294a4] transition-colors'
          >
            Go Back to Payment
          </button>
        </div>
      </div>
    )
  }

  // Success page with booking details
  if (isSuccess) {
    return (
      <div className='w-full bg-slate-100 flex flex-col min-h-[50vh]'>
        <div ref={headerRef} className='h-24 w-full bg-black'></div>

        <div className='max-w-5xl mx-auto py-16 lg:py-24 w-full flex items-center justify-center flex-col gap-6 lg:gap-12 text-center p-3'>
            
            <div className='w-full flex items-center justify-center flex-col gap-3 lg:gap-5'>
                <MdDone className='p-2 text-white bg-green-500 rounded-full ' size={45} />
            <div className='text-gray-800 '>Great choice, {formData.name.value}</div>
            <div className='text-black text-2xl lg:text-4xl font-bold'>YOUR RESERVATION IS CONFIRMED</div>
            <div className='text-gray-800'>We&apos;ve sent a confirmation email to {formData.email.value}</div>
            <div className='text-gray-600 text-sm lg:text-base mt-2'>
              Redirecting to home page in <span className='font-bold text-brand'>{countdown}</span> {countdown === 1 ? 'second' : 'seconds'}...
            </div>
            </div>

         <div className='w-full grid md:grid-cols-3 lg:gap-5'>
            <div className='lg:col-span-2 w-full  bg-white max-lg:rounded-b-xl max-lg:order-2 lg:rounded-l-xl border-2 border-gray-400 py-6 px-4 gap-8 flex flex-col justify-center text-start'>
              
              <div className='text-xl lg:text-2xl font-bold'>
                Your itinerary
              </div>

              <div className='flex  gap-3 w-full'>
                <div className='w-1 h-full py-2'>
                  <div className='w-full h-full bg-gray-600 rounded-full'></div>
                </div>
              <div className='flex flex-col gap-3 w-full'>
              {locations.map((item, index)=>{
                  return <div key={`${item.value}-${index}`} className='flex items-start gap-3 md:gap-5'>
                    <div className='max-lg:text-sm' >{item.value}</div>
                </div>
              })}
              </div>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='text-gray-500' >Pickup Date & Time</div>
                <div>{formData.date.value} {formatTime(formData.time.value)}</div>
              </div>

              <div className='flex items-center justify-end w-full'>
                <div className='flex items-center gap-5'>
                {id && (
                  <Link className='bg-brand px-3 py-2 text-black font-semibold w-fit rounded-md' href={`/order/${id}`} >View Order Details</Link>
                )}
                </div>
              </div>

            </div>
            {selectedFleet && <div className='max-lg:rounded-t-xl lg:rounded-r-xl border-2 border-gray-400 p-4 gap-5 flex flex-col items-center justify-center bg-gray-200 max-lg:order-1 '>
               <Image src={selectedFleet.image} width={350} height={350} alt={selectedFleet.name} className='w-full object-contain' />
               <div className='font-bold'>{selectedFleet.name}</div>
            </div>}
         </div>

        </div>
      </div>
    )
  }

  return null
}

function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className='w-full bg-slate-50 flex flex-col min-h-[50vh] items-center justify-center py-16'>
        <div className='flex flex-col items-center gap-4'>
          <Loader className="animate-spin" size={40} />
          <div className='text-xl font-semibold'>Loading...</div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}

export default PaymentSuccessPage

