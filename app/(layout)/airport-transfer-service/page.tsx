export const dynamic = "force-dynamic";

import SEO from "@/app/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import AirportsWeServe from "@/app/components/sections/AirpportsWeServe";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import TriStateAreaSection from "@/app/components/sections/TriStateAreaSection";
import ProcessStepsSection from "@/app/components/sections/ProcessStepsSection";
import CallToActionSection from "@/app/components/sections/CallToActionSection";
import FAQSection from "@/app/components/sections/FAQSection";
import CounterSection from "@/app/components/sections/CounterSection";
import { Clock, Shield, DollarSign } from "lucide-react";

const airportFeatures = [
  {
    icon: Clock,
    title: "Always On Time",
    description: "We track your flight status to ensure your private car pickup is waiting the moment you land.",
  },
  {
    icon: Shield,
    title: "Luxury Fleet",
    description: "Choose from premium sedans, SUVs, and Sprinters to fit your luggage and group size.",
  },
  {
    icon: DollarSign,
    title: "Fixed Rates",
    description: "Enjoy transparent pricing with our flat-rate airport limo service, avoiding surge pricing surprises.",
  },
];

const whyChooseAirportBenefits = [
  {
    icon: Clock,
    title: "Always On Time",
    text: "We track your flight status to ensure your private car pickup is waiting the moment you land.",
  },
  {
    icon: Shield,
    title: "Luxury Fleet",
    text: "Choose from premium sedans, SUVs, and Sprinters to fit your luggage and group size.",
  },
  {
    icon: DollarSign,
    title: "Fixed Rates",
    text: "Enjoy transparent pricing with our flat-rate airport limo service, avoiding surge pricing surprises.",
  },
];

const triStateData = [
  {
    state: "New Jersey",
    description: "We offer daily limo service from NJ to JFK and EWR to NYC transfers.",
  },
  {
    state: "Connecticut",
    description: "Book our CT to NYC private car for smooth rides from Greenwich, Stamford, and beyond.",
  },
  {
    state: "Pennsylvania",
    description: "Reliable long-distance chauffeur service connecting Philadelphia and PA suburbs to New York airports.",
  },
];

const airportProcessSteps = [
  {
    number: "01",
    title: "Booking",
    description: "Reserve your ride online or via phone.",
  },
  {
    number: "02",
    title: "Tracking",
    description: "We monitor your flight. If you land 20 minutes early, we are already there.",
  },
  {
    number: "03",
    title: "Communication",
    description: "Upon landing, you will receive a text from your chauffeur with their location and vehicle details.",
  },
  {
    number: "04",
    title: "Departure",
    description: "Whether you choose curbside pickup or an indoor meet and greet, your driver will assist with luggage and get you to your destination efficiently.",
  },
];

const airportImages = [
  { name: "JOHN F. KENNEDY AIRPORT (JFK)", image: "/airport-images/jfk.png", href: "/jfk-airport-service" },
  { name: "LAGUARDIA AIRPORT (LGA)", image: "/airport-images/lga.png", href: "/laguardia-airport-service" },
  { name: "NEWARK LIBERTY AIRPORT (EWR)", image: "/airport-images/ewr.jpg", href: "/newark-airport-service" },
  { name: "TETERBORO AIRPORT (TEB)", image: "/airport-images/teterboro.jpg", href: "/teterboro-airport-service" },
  { name: "WESTCHESTER COUNTY (HPN)", image: "/airport-images/westchester.png", href: "/westchester-airport-service" },
];

const airportAdditionalFAQData = [
  {
    question: "Do you offer Meet and Greet services inside the airport?",
    answer: "Yes, we offer Meet and Greet services inside the airport terminal. For an additional fee, your chauffeur will meet you at your gate or baggage claim area with a personalized sign, assist with your luggage, and escort you directly to your waiting vehicle. This service is especially convenient for first-time visitors or those traveling with heavy luggage.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer: "We actively monitor your flight status in real-time, so if your flight is delayed, we automatically adjust your pickup time at no additional charge. Our system tracks flight arrivals and ensures your driver is ready when you actually land, not when your flight was originally scheduled. You don't need to worry about contacting us—we handle it automatically.",
  },
  {
    question: "Can you provide car seats for children?",
    answer: "Yes, we can provide car seats for children. Please inform us when booking about the age and number of children requiring car seats. We offer rear-facing infant seats, forward-facing toddler seats, and booster seats. There is a small additional fee per car seat to ensure proper installation and safety compliance with New York State regulations.",
  },
  {
    question: "How much luggage fits in your vehicles?",
    answer: "Our vehicles can accommodate different amounts of luggage depending on the vehicle type. Sedans typically fit 2-3 standard suitcases, Mid SUVs can handle 3-4 suitcases, Full SUVs accommodate 4-6 suitcases, and our Sprinter vans can fit 8-10 suitcases plus carry-on bags. If you have excessive luggage, please let us know when booking so we can recommend the appropriate vehicle size.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy is flexible and customer-friendly. You can cancel or modify your booking up to 24 hours before your scheduled pickup time for a full refund. Cancellations made within 24 hours may be subject to a cancellation fee. For same-day cancellations or no-shows, the full booking amount may be charged. We understand that travel plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
  },
];

export default function AirportTransferService() {
  return (
    <>
      <SEO 
        title={seoConfig.airportTransfer.title}
        description={seoConfig.airportTransfer.description}
        url={seoConfig.airportTransfer.url}
      />
    <main>
      <NewHeroSection 
        title="Premier Airport Car Service in New York City" 
        image="/hero-main-image.jpg"
        imageAlt="Airport transfer service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Premier Airport Car Service in New York City"
        introDescription="Arrive on time and in style with DSL Limo's luxury airport transportation. Whether you are flying into Manhattan for a business meeting or heading out for a family vacation, our NYC black car service removes the stress of travel. We specialize in seamless, point-to-point airport transfers for travelers who value punctuality, comfort, and safety."
        subHeading="Why Choose Our Private Airport Transfer?"
        explanationText="Navigating New York traffic is stressful; your ride to the airport shouldn't be. Unlike rideshare apps, our executive chauffeur service offers guaranteed pricing and professional drivers who know the fastest routes."
        features={airportFeatures}
      />
      <AirportsWeServe 
        description="We provide dedicated luxury car service to all major airports in the New York metropolitan area. Click below to view details for your specific terminal."
        airports={airportImages}
      />
      <WhyChooseUsSection
        title="Why Choose Our Private Airport Transfer?"
        description="Navigating New York traffic is stressful; your ride to the airport shouldn't be. Unlike rideshare apps, our executive chauffeur service offers guaranteed pricing and professional drivers who know the fastest routes."
        benefits={whyChooseAirportBenefits}
        image="/why-choose-images/airpot-main-page.png"
        imageAlt="Professional airport transfer service"
      />
      <TriStateAreaSection states={triStateData} />
      <CounterSection
        stats={[
          { value: "500+", label: "Happy Customers" },
          { value: "25", label: "Luxury Fleets" },
          { value: "30k", label: "Miles in year" },
          { value: "30", label: "Qualified Chauffeurs" },
        ]}
      />
      <ProcessStepsSection
        title="How Our Airport Pickup Process Works"
        subtitle="We have streamlined our pickup procedure to ensure you are on the road within minutes of landing."
        steps={airportProcessSteps}
      />
      <CallToActionSection
        title="Book Your NYC Airport Ride Today"
        subtitle="Experience the best VIP airport shuttle service New York has to offer"
        primaryButtonText="Get Instant Quote"
        primaryButtonLink="/"
        secondaryButtonText="Book Your Ride"
        secondaryButtonLink="/"
      />
      <FAQSection faqs={airportAdditionalFAQData} />

    </main>
    </>
  );
}

