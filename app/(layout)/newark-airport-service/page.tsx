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
import { MapPin, DollarSign, Clock, Building } from "lucide-react";

const whyChooseNewarkBenefits = [
  {
    icon: MapPin,
    title: "Manhattan Transfers",
    text: "We provide direct luxury sedan service to Midtown, the Financial District, and Tribeca.",
  },
  {
    icon: Building,
    title: "Corporate Travel",
    text: "Trusted by business professionals for punctual executive airport transfers to major corporate HQs in Jersey City and Manhattan.",
  },
  {
    icon: DollarSign,
    title: "No Surge Pricing",
    text: "Rideshare apps at Newark often charge double during peak hours. With DSL Limo, our flat-rate EWR car service is locked in. You pay the price you were quoted, regardless of traffic or demand.",
  },
];

const newarkServiceAreas = [
  {
    state: "New Jersey Locals",
    description: "Reliable local airport taxi alternative for residents in Hoboken, Princeton, Short Hills, and the Jersey Shore.",
    icon: MapPin,
  },
  {
    state: "EWR to Philadelphia",
    description: "We offer comfortable long-distance car service connecting Newark Airport to Philadelphia and its suburbs.",
    icon: MapPin,
  },
  {
    state: "EWR to Connecticut",
    description: "Skip the stress of driving through the city with our direct Connecticut to Newark airport private rides.",
    icon: MapPin,
  },
];

const airportToAirportTransfers = [
  {
    title: "Newark to JFK",
    description: "The shuttle can take hours. Our EWR to JFK limo service is the fastest way to connect between international flights.",
  },
  {
    title: "Newark to LaGuardia",
    description: "A direct, private ride ensures you make your domestic connection with time to spare.",
  },
];

const newarkFAQData = [
  {
    question: "How long does it take to get from Newark Airport to Manhattan?",
    answer: "Travel time from Newark Airport (EWR) to Manhattan typically ranges from 30 to 60 minutes, depending on traffic conditions and your specific destination. During peak hours (rush hour, typically 7-9 AM and 4-7 PM), travel times can be longer. We monitor traffic in real-time and use the most efficient routes—whether via the Holland Tunnel, Lincoln Tunnel, or George Washington Bridge—to minimize your travel time. For destinations in Midtown or Downtown Manhattan, expect approximately 35-45 minutes under normal conditions.",
  },
  {
    question: "Where is the pickup area at Newark Airport?",
    answer: "Your driver will meet you based on your selected service option. For curbside pickup, your driver will wait at the passenger pick-up area of your terminal (Terminal A, B, or C) and will contact you via phone or text when you're ready. For Meet and Greet service, your driver will park and meet you inside the Arrivals Hall with a personalized sign displaying your name. They'll assist with your luggage and escort you directly to the vehicle. We'll send you detailed instructions and your driver's contact information before your arrival.",
  },
  {
    question: "Are tolls included in the fare?",
    answer: "Tolls are not included in the base fare for Newark Airport transfers. Any tolls incurred during your trip (such as tunnel or bridge tolls) will be added to your final bill. This ensures transparency and allows you to see exactly what you're paying for. All toll charges are clearly itemized on your receipt, so there are no surprises.",
  },
  {
    question: "Do you serve the private jet terminals at Newark?",
    answer: "Yes, we provide service to all terminals at Newark Airport, including private jet terminals. Whether you're arriving at Terminal A, B, C, or a private terminal, we can accommodate your needs. For private terminal pickups, please provide us with the specific terminal information when booking, and we'll ensure your driver is familiar with the location and procedures. Our drivers are experienced with all areas of EWR and can navigate the airport complex efficiently.",
  },
];

export default function NewarkAirportService() {
  return (
    <main>
      <NewHeroSection 
        title="Professional Newark Airport Car Service (EWR)" 
        image="/hero-main-image.jpg"
        imageAlt="Newark Airport car service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Professional Newark Airport Car Service (EWR)"
        introDescription="Skip the long taxi lines and confusing shuttle buses. DSL Limo provides premium Newark Airport transportation for travelers who value efficiency and comfort. Whether you are landing at Terminal C or departing from Terminal A, our private car service to Newark Airport ensures a smooth start or end to your journey. As a trusted NJ limo provider, we specialize in seamless transfers across state lines, getting you into New York City or back home to the suburbs safely."
        subHeading="The Easiest Way to Travel from Newark to NYC"
        explanationText="Crossing from New Jersey into New York can be stressful due to tunnel traffic and tolls. Our EWR to NYC car service takes the hassle out of the commute. We use real-time GPS monitoring to choose the fastest route—whether via the Holland Tunnel, Lincoln Tunnel, or George Washington Bridge."
        features={[]}
      />
      <WhyChooseUsSection
        title="Why Choose Our Newark Airport Transfer?"
        description="Navigating Newark Airport and the journey to New York City can be challenging, especially during peak hours. Our EWR car service eliminates the stress by monitoring real-time traffic patterns and choosing the most efficient routes."
        benefits={whyChooseNewarkBenefits}
        image="/why-choose-images/newarkairport.jpg"
        imageAlt="Professional Newark airport transfer service"
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
        title="Serving All of New Jersey and Beyond"
        description="EWR is a major regional hub. While we specialize in New York City airport transportation, our fleet operates extensively across the surrounding states. We are the top choice for travelers requiring long-distance airport transfers and the preferred choice for residents across the Tri-State area."
        states={newarkServiceAreas}
      />
      <UseCasesSection
        title="Connecting Flights? Airport-to-Airport Transfers"
        description="If you are switching airports, you cannot afford to be late. We specialize in rapid inter-airport transfers."
        useCases={airportToAirportTransfers}
      />
      <OurFleet />
      <FAQSection faqs={newarkFAQData} />
    </main>
  );
}

