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
import { Home, DollarSign, Clock, Users, MapPin, UserCheck } from "lucide-react";

const jfkFeatures = [
  {
    icon: Home,
    title: "Door-to-Door Service",
    description: "Direct luxury sedan service to Times Square, Wall Street, Central Park, or any address in the five boroughs.",
  },
  {
    icon: DollarSign,
    title: "Flat-Rate Pricing",
    description: "Predictable costs, affordable JFK limo service, and transparent pricing without ticking meters in traffic.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "JFK chauffeur service is available around the clock for red-eye flights or early morning departures.",
  },
  {
    icon: Users,
    title: "Group Transfers",
    description: "JFK sprinter van service for large families or teams, offering comfortable travel and cost savings compared to multiple taxis.",
  },
];

const whyChooseJFKBenefits = [
  {
    icon: Home,
    title: "Door-to-Door Service",
    text: "Direct luxury sedan service to Times Square, Wall Street, Central Park, or any address in the five boroughs.",
  },
  {
    icon: DollarSign,
    title: "Flat-Rate Pricing",
    text: "Predictable costs, affordable JFK limo service, and transparent pricing without ticking meters in traffic.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    text: "JFK chauffeur service is available around the clock for red-eye flights or early morning departures.",
  },
  {
    icon: Users,
    title: "Group Transfers",
    text: "JFK sprinter van service for large families or teams, offering comfortable travel and cost savings compared to multiple taxis.",
  },
];

const terminalServices = [
  {
    state: "Curbside Pickup",
    description: "For the fastest exit, communicate with your driver via mobile. They will pull up to the passenger pick-up area the moment you step outside.",
    icon: MapPin,
  },
  {
    state: "Meet and Greet",
    description: "Highly recommended for international arrivals. Your private driver will park and meet you inside the Arrivals Hall with a name sign, assisting you with luggage to the vehicle.",
    icon: UserCheck,
  },
];

const longDistanceTransfers = [
  {
    title: "JFK to New Jersey",
    description: "Avoid the train transfer hassle. We offer direct limo service from JFK to Newark, Jersey City, and Hoboken.",
  },
  {
    title: "JFK to Connecticut",
    description: "Relax in a luxury SUV for the long ride home to Stamford, Greenwich, or New Haven.",
  },
  {
    title: "JFK to Philadelphia",
    description: "We provide reliable inter-city chauffeur services for those connecting to Pennsylvania.",
  },
];

const jfkFAQData = [
  {
    question: "How long does it take to get from JFK to Manhattan?",
    answer: "The travel time from JFK to Manhattan typically ranges from 45 minutes to 1.5 hours, depending on traffic conditions and your specific destination in Manhattan. During peak hours (rush hour, typically 7-9 AM and 4-7 PM), travel times can be longer. We monitor traffic in real-time and use the most efficient routes to minimize your travel time. For destinations in Midtown or Downtown Manhattan, expect approximately 50-60 minutes under normal conditions.",
  },
  {
    question: "Where will my driver meet me at JFK?",
    answer: "Your driver will meet you based on your selected service option. For curbside pickup, your driver will wait at the passenger pick-up area of your terminal and will contact you via phone or text when you're ready. For Meet and Greet service, your driver will park and meet you inside the Arrivals Hall with a personalized sign displaying your name. They'll assist with your luggage and escort you directly to the vehicle. We'll send you detailed instructions and your driver's contact information before your arrival.",
  },
  {
    question: "Are tolls included in the price?",
    answer: "Tolls are not included in the base price for JFK transfers. Any tolls incurred during your trip (such as the Van Wyck Expressway tolls or Queens Midtown Tunnel toll) will be added to your final bill. This ensures transparency and allows you to see exactly what you're paying for. All toll charges are clearly itemized on your receipt, so there are no surprises.",
  },
  {
    question: "Do you track flights at JFK?",
    answer: "Yes, we actively monitor your flight status in real-time. If your flight is delayed, we automatically adjust your pickup time at no additional charge. Our system tracks flight arrivals and ensures your driver is ready when you actually land, not when your flight was originally scheduled. You don't need to worry about contacting us—we handle flight tracking automatically. If your flight arrives early, we'll do our best to have your driver ready, though we recommend keeping us updated for very early arrivals.",
  },
];

export default function JFKAirportService() {
  return (
    <main>
      <NewHeroSection 
        title="Premium JFK Airport Car Service & Luxury Transfers" 
        image="/hero-main-image.jpg"
        imageAlt="JFK Airport car service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Premium JFK Airport Car Service & Luxury Transfers"
        introDescription="Arrive stress-free with DSL Limo's top-tier JFK airport transportation. Whether you're a business executive heading to Manhattan, a family starting your vacation, or a solo traveler seeking comfort, our JFK car service ensures you arrive on time and in style. Skip the taxi lines and crowded shuttles—choose a VIP airport transfer that prioritizes your comfort and schedule."
        features={[]}
      />
      <WhyChooseUsSection
        title="The Best Way to Travel from JFK to Manhattan"
        description="Traveling between JFK and New York City can be challenging, especially during peak hours. Our JFK car service eliminates the stress by monitoring real-time traffic patterns along the Van Wyck Expressway and through the Queens Midtown Tunnel, ensuring you reach your destination efficiently without delay."
        benefits={whyChooseJFKBenefits}
        image="/why-choose-images/jfk-airport.jpg"
        imageAlt="Professional JFK airport transfer service"
      />
      <CounterSection
        stats={[
          { value: "9000", label: "HAPPY CUSTOMERS" },
          { value: "12", label: "LUXURY FLEETS" },
          { value: "900000", label: "MILES" },
          { value: "30", label: "QUALIFIED CHAUFFEURS" },
        ]}
      />
      <TriStateAreaSection
        title="Serving All JFK Terminals"
        description="JFK is a massive complex. We are experts at navigating it. We provide seamless pickups and drop-offs at all active terminals (including Terminal 1, 4, 5, 7, and 8)."
        states={terminalServices}
      />
      <UseCasesSection
        title="Long-Distance Transfers from JFK"
        description="While we specialize in New York City transfers, many of our clients need to go further. We offer comfortable long-distance rides directly from the airport."
        useCases={longDistanceTransfers}
      />
      <OurFleet />
      <FAQSection faqs={jfkFAQData} />
    </main>
  );
}

