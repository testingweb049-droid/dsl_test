export const dynamic = "force-dynamic";

import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import CarouselSection from "@/app/components/sections/CarouselSection";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import CounterSection from "@/app/components/sections/CounterSection";
import FAQSection from "@/app/components/sections/FAQSection";
import { ShieldCheck, Clock, Car, DollarSign, Shield } from "lucide-react";

const occasions = [
  { 
    name: "BUSINESS MEETINGS", 
    image: "/image---.JPG", 
    href: "#" 
  },
  { 
    name: "DINNER & EVENTS", 
    image: "/image---.JPG", 
    href: "#" 
  },
  { 
    name: "CITY-TO-CITY TRANSFERS", 
    image: "/image---.JPG", 
    href: "#" 
  },
  { 
    name: "MEDICAL APPOINTMENTS", 
    image: "/image---.JPG", 
    href: "#" 
  },
];

const pointToPointFeatures = [
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    description: "Unlike hourly charters, our flat-rate car service gives you a guaranteed price upfront. No ticking meters, no traffic surcharges.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Your driver follows the most direct route using real-time GPS navigation to ensure you arrive on time.",
  },
  {
    icon: Shield,
    title: "Total Comfort",
    description: "Relax in a clean, private vehicle with a professional chauffeur who handles your luggage and opens your door.",
  },
];

const whyChooseBenefits = [
  {
    icon: ShieldCheck,
    title: "Safety & vetting",
    text: "Every DSL chauffeur is fully background-checked, licensed, and trained. You know exactly who is driving you.",
  },
  {
    icon: Clock,
    title: "Guaranteed Availability",
    text: "When you pre-book your private transfer, your car is guaranteed to show up. No 'no cars available' messages during rush hour.",
  },
  {
    icon: Car,
    title: "Luxury Fleet",
    text: "Choose from our executive sedans, luxury SUVs, or Sprinter vans depending on your group size.",
  },
];

const faqData = [
  {
    question: "Is there a minimum distance for point-to-point trips?",
    answer: "No, there is no minimum distance requirement for our point-to-point service. Whether you need a short ride across town or a longer journey, we provide reliable transportation for trips of any length. Our fixed pricing ensures you know the cost upfront, regardless of distance.",
  },
  {
    question: "Are tolls included in the fixed price?",
    answer: "Tolls are not included in the base fixed price. Any tolls incurred during your trip will be added to your final bill. This ensures transparency and allows you to see exactly what you're paying for. All toll charges are clearly itemized on your receipt.",
  },
  {
    question: "Can I make stops along the way?",
    answer: "Yes, you can make stops along your route. Additional stops can be added to your booking for an extra fee of $20 per stop. Simply let us know when booking, and we'll accommodate your needs. This flexibility makes our point-to-point service perfect for running errands or making multiple appointments.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-4 hours in advance to ensure availability, especially during peak hours or busy periods. However, we also accept same-day bookings subject to availability. For guaranteed service during rush hours, weekends, or special events, booking 24-48 hours in advance is ideal.",
  },
];

export default function PointToPointCarService() {
  return (
    <main>
      <NewHeroSection />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Premium Point-to-Point Car Service in NYC"
        introDescription="Experience the ultimate in convenience with DSL Limo's point-to-point transportation. Whether you are heading from a hotel to a business meeting, traveling between cities, or just need a reliable ride home after dinner, our private car service offers a superior alternative to taxis and rideshare apps. We provide safe, efficient, and luxurious door-to-door car service across New York City, New Jersey, and Connecticut."
        subHeading="What is Point-to-Point Transfer?"
        explanationText="Point-to-point service is the simplest way to travel. You book a pickup at Location A and a drop-off at Location B."
        features={pointToPointFeatures}
      />
      <CarouselSection
        title="PERFECT FOR ANY OCCASION"
        description="Our NYC black car service isn't just for airports. It is perfect for any single-trip requirement:"
        items={occasions}
        backgroundColor="bg-[#138fa2]/90"
      />
      <WhyChooseUsSection
        title="Why Choose DSL Limo Over Rideshare?"
        description="Pre-book your private transfer for guaranteed availability, professional vetted drivers, and luxury fleet options. No surge pricing, no guessing."
        benefits={whyChooseBenefits}
        image="/why-choose-us.png"
        imageAlt="Professional chauffeur opening car door"
      />
      <CounterSection
        stats={[
          { value: "500+", label: "Happy Customers" },
          { value: "25", label: "Luxury Fleets" },
          { value: "30k", label: "Miles in year" },
          { value: "30", label: "Qualified Chauffeurs" },
        ]}
      />
      <FAQSection faqs={faqData} />
    </main>
  );
}

