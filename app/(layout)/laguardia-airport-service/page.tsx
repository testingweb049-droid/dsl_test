export const dynamic = "force-dynamic";

import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import TriStateAreaSection from "@/app/components/sections/TriStateAreaSection";
import UseCasesSection from "@/app/components/sections/UseCasesSection";
import CounterSection from "@/app/components/sections/CounterSection";
import OurFleet from "@/app/components/sections/OurfleetSection";
import FAQSection from "@/app/components/sections/FAQSection";
import { MapPin, Home } from "lucide-react";

const lgaTerminals = [
  {
    state: "Terminal B",
    description: "Terminal B (The New Central Terminal): For many flights, passengers must use the designated loading zones on Level 2 of the Parking Garage. Your driver will text you the exact aisle number to ensure you find the vehicle instantly.",
    icon: MapPin,
  },
  {
    state: "Terminal C",
    description: "Terminal C (Delta): We provide seamless pickups at the designated arrivals pick-up area, ensuring you aren't left wandering with your luggage.",
    icon: MapPin,
  },
  {
    state: "Marine Air Terminal",
    description: "Marine Air Terminal (Terminal A): Flying Spirit Airlines? We offer convenient curbside access at this historic terminal. (Note: JetBlue flyers should head to Terminal B).",
    icon: MapPin,
  },
];

const airportToAirportTransfers = [
  {
    title: "LGA to JFK",
    description: "The Van Wyck Expressway is notorious for traffic. Our LaGuardia to JFK limo service uses the smartest routes to get you to your international gate on time.",
  },
  {
    title: "LGA to Newark",
    description: "Crossing state lines is easy with our LGA to EWR car service, providing a comfortable ride from Queens to New Jersey.",
  },
];

const lgaFAQData = [
  {
    question: "Where do I meet my driver at LaGuardia?",
    answer: "Your meeting location depends on which terminal you're arriving at. For Terminal B, your driver will meet you at the designated loading zones on Level 2 of the Parking Garage and will text you the exact aisle number. For Terminal C (Delta), your driver will meet you at the designated arrivals pick-up area. For the Marine Air Terminal (Terminal A), we provide convenient curbside access. We'll send you detailed instructions and your driver's contact information before your arrival, so you know exactly where to go.",
  },
  {
    question: "How long is the ride from LaGuardia to Times Square?",
    answer: "Travel time from LaGuardia Airport (LGA) to Times Square typically ranges from 20 to 45 minutes, depending on traffic conditions. Since LaGuardia is the closest airport to Manhattan, travel times are generally shorter than from JFK or Newark. During peak hours (rush hour, typically 7-9 AM and 4-7 PM), travel times can be longer. We monitor traffic in real-time and use the most efficient routes to minimize your travel time. Under normal conditions, expect approximately 25-35 minutes.",
  },
  {
    question: "Are tolls included in the LGA transfer price?",
    answer: "Tolls are not included in the base price for LaGuardia transfers. Any tolls incurred during your trip (such as bridge or tunnel tolls) will be added to your final bill. This ensures transparency and allows you to see exactly what you're paying for. All toll charges are clearly itemized on your receipt, so there are no surprises.",
  },
  {
    question: "Do you track flights at LaGuardia?",
    answer: "Yes, we actively monitor your flight status in real-time. If your flight is delayed, we automatically adjust your pickup time at no additional charge. Our system tracks flight arrivals and ensures your driver is ready when you actually land, not when your flight was originally scheduled. You don't need to worry about contacting us—we handle flight tracking automatically. If your flight arrives early, we'll do our best to have your driver ready, though we recommend keeping us updated for very early arrivals.",
  },
];

export default function LaGuardiaAirportService() {
  return (
    <main>
      <NewHeroSection 
        title="LaGuardia Airport Car Service (LGA)" 
        image="/hero-main-image.jpg"
        imageAlt="LaGuardia Airport car service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Premier LaGuardia Airport Car Service (LGA)"
        introDescription="Avoid the chaos of rideshare apps and confusing parking garages. DSL Limo provides professional LaGuardia Airport transportation for travelers who need reliability. Located in Queens, LGA is the domestic hub for New York City, and our private car service to LaGuardia ensures you navigate its busy terminals with ease. Whether you are flying for business or leisure, our LGA chauffeur service guarantees a timely and comfortable arrival."
        features={[]}
      />
      <CounterSection
        stats={[
          { value: "9000", label: "HAPPY CUSTOMERS" },
          { value: "12", label: "LUXURY FLEETS" },
          { value: "900000", label: "MILES" },
          { value: "30", label: "QUALIFIED CHAUFFEURS" },
        ]}
      />
      <UseCasesSection
        title="Connecting Flights & Inter-Airport Transfers"
        description="Need to catch an international flight elsewhere? We specialize in rapid airport-to-airport transfers to ensure you don't miss your connection."
        useCases={airportToAirportTransfers}
      />
      <TriStateAreaSection
        title="Navigating the New LaGuardia (Terminals A, B, & C)"
        description="LaGuardia has undergone massive renovations. Pickup procedures vary by terminal, but our drivers are experts at the new layout."
        states={lgaTerminals}
      />
      <OurFleet />
      <FAQSection faqs={lgaFAQData} />
    </main>
  );
}

