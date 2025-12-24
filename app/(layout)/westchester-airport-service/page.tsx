export const dynamic = "force-dynamic";

import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import BenefitsCardsSection from "@/app/components/sections/BenefitsCardsSection";
import UseCasesSection from "@/app/components/sections/UseCasesSection";
import CounterSection from "@/app/components/sections/CounterSection";
import OurFleet from "@/app/components/sections/OurfleetSection";
import FAQSection from "@/app/components/sections/FAQSection";
import { MapPin } from "lucide-react";

const whyChooseWestchesterBenefits = [
  {
    icon: MapPin,
    title: "HPN to Manhattan",
    text: "We provide direct executive car service to New York City. Skip the train and enjoy a quiet, productive ride to your office or hotel.",
  },
  {
    icon: MapPin,
    title: "Connecticut Transfers",
    text: "We are the top choice for Greenwich to HPN car service, as well as transfers to Stamford, Darien, and Westport.",
  },
  {
    icon: MapPin,
    title: "Westchester Locals",
    text: "Reliable White Plains car service for residents of Scarsdale, Rye, and Purchase needing a stress-free ride to the terminal.",
  },
];

const privateAviationServices = [
  {
    title: "FBO Knowledge",
    description: "We serve all major private terminals, including Atlantic Aviation (East & West), Signature Flight Support, and Million Air.",
  },
  {
    title: "Tarmac Access",
    description: "When permitted, we offer ramp-side pickup to move you from your aircraft to your vehicle instantly.",
  },
  {
    title: "Discreet Chauffeurs",
    description: "Our drivers are trained to serve high-profile clients with professionalism and confidentiality.",
  },
];

const westchesterFAQData = [
  {
    question: "Do you service towns in Connecticut?",
    answer: "Yes, we provide comprehensive service to Connecticut towns from Westchester Airport. We are the top choice for Greenwich to HPN car service, as well as transfers to Stamford, Darien, Westport, and other Connecticut locations. Our drivers are familiar with the routes and can provide reliable, comfortable transportation throughout the region.",
  },
  {
    question: "How far is Westchester Airport from New York City?",
    answer: "Westchester County Airport (HPN) is located approximately 30 miles north of Manhattan in White Plains, New York. Travel time to Manhattan typically ranges from 45 minutes to 1.5 hours, depending on traffic conditions and your specific destination. During peak hours, travel times can be longer. We monitor traffic in real-time and use the most efficient routes to minimize your travel time. For destinations in Midtown or Downtown Manhattan, expect approximately 50-70 minutes under normal conditions.",
  },
  {
    question: "Can you pick up at the private jet terminals (FBOs)?",
    answer: "Yes, we provide service to all major private jet terminals (FBOs) at Westchester Airport, including Atlantic Aviation (East & West), Signature Flight Support, and Million Air. When permitted by the FBO and airport security, we offer ramp-side pickup to move you from your aircraft to your vehicle instantly. Our drivers are experienced in private aviation protocols and understand the unique requirements of FBO operations. Please contact us when booking to confirm service availability for your specific FBO.",
  },
  {
    question: "Is it cheaper to fly out of HPN or JFK?",
    answer: "While flight prices vary, Westchester Airport (HPN) often offers a more convenient and time-efficient experience, especially for travelers in Westchester County and Connecticut. HPN is smaller and less congested than JFK, which means shorter security lines, easier parking, and faster check-in. Additionally, our HPN car service can be more cost-effective for local residents since it eliminates the need to travel to JFK or LaGuardia. The time savings and reduced stress often make HPN the preferred choice, even if flight prices are slightly higher. We recommend comparing both flight costs and ground transportation expenses when making your decision.",
  },
];

export default function WestchesterAirportService() {
  return (
    <main>
      <NewHeroSection 
        title="Premium Westchester County Airport Car Service" 
        image="/hero-main-image.jpg"
        imageAlt="Westchester Airport car service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Premium Westchester County Airport Car Service"
        introDescription="Enjoy the convenience of a smaller airport with the luxury of a private chauffeur. DSL Limo provides top-rated Westchester Airport transportation for residents of New York and Connecticut. Located in White Plains, HPN is the preferred alternative to the congestion of JFK and LaGuardia. Whether you are flying commercial or private, our private car service to Westchester Airport ensures a relaxing and punctual journey."
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
      <BenefitsCardsSection
        title="The Best Connection to NYC and Connecticut"
        description="Westchester Airport sits perfectly on the border of New York and Connecticut, making it a strategic hub for business and leisure. Our HPN airport limo service covers the entire region."
        benefits={whyChooseWestchesterBenefits}
      />
      <UseCasesSection
        title="Private Aviation & FBO Services at HPN"
        description="Like Teterboro, Westchester is a major hub for private jets. We are experts in private aviation ground transportation at HPN."
        useCases={privateAviationServices}
      />
      <OurFleet />
      <FAQSection faqs={westchesterFAQData} />
    </main>
  );
}

