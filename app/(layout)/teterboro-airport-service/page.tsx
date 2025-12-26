export const dynamic = "force-dynamic";

import SEO from "@/app/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import CarouselSection from "@/app/components/sections/CarouselSection";
import UseCasesSection from "@/app/components/sections/UseCasesSection";
import CounterSection from "@/app/components/sections/CounterSection";
import OurFleet from "@/app/components/sections/OurfleetSection";
import FAQSection from "@/app/components/sections/FAQSection";
import { Shield, Clock, Lock, Car } from "lucide-react";

const whyChooseTeterboroBenefits = [
  {
    icon: Shield,
    title: "Discretion Guaranteed",
    text: "We respect the privacy of our high-profile clients. Our drivers adhere to strict confidentiality standards.",
  },
  {
    icon: Clock,
    title: "Always Waiting",
    text: "Private flights often change schedules. We track your tail number to ensure your executive chauffeur is on the tarmac before your wheels touch down.",
  },
  {
    icon: Lock,
    title: "Security Coordination",
    text: "Traveling with a personal security detail? We are experienced in coordinating with close protection teams to facilitate seamless, secure convoys from the tarmac.",
  },
  {
    icon: Car,
    title: "Tail-Side Pickup",
    text: "Whenever permitted by the FBO and airport security, we provide ramp-side car service, pulling our vehicle directly up to the stairs of your aircraft for zero walking distance.",
  },
];

const teterboroFBOs = [
  {
    name: "SHELTAIR AVIATION",
    image: "/airport-images/sheltair.png",
    href: "#",
  },
  {
    name: "SIGNATURE FLIGHT SUPPORT",
    image: "/airport-images/Signature.png",
    href: "#",
  },
  {
    name: "JET AVIATION",
    image: "/airport-images/jet-aviation.png",
    href: "#",
  },
  {
    name: "MERIDIAN TETERBORO",
    image: "/airport-images/Meridian.jpg",
    href: "#",
  },
  {
    name: "ATLANTIC AVIATION",
    image: "/airport-images/teterboro.jpg",
    href: "#",
  },
];

const luxuryTransfers = [
  {
    title: "Manhattan Business Meetings",
    description: "Rapid transport to Wall Street, Hudson Yards, and Midtown via the Lincoln Tunnel or George Washington Bridge.",
  },
  {
    title: "Hamptons & Long Island",
    description: "Skip the city traffic entirely. We offer comfortable long-distance chauffeur service directly from the tarmac to your estate in the Hamptons.",
  },
  {
    title: "Connecticut & Upstate",
    description: "Relax in a luxury SUV for the drive to Greenwich, White Plains, or Alpine.",
  },
];

const teterboroFAQData = [
  {
    question: "Can your driver pick me up directly at the plane?",
    answer: "Yes, whenever permitted by the FBO (Fixed Base Operator) and airport security, we provide ramp-side car service, pulling our vehicle directly up to the stairs of your aircraft for zero walking distance. This service is subject to airport security protocols and FBO policies. We coordinate with the FBO in advance to ensure proper authorization and staging. Our drivers are experienced in tarmac operations and understand the unique protocols of private aviation facilities.",
  },
  {
    question: "Do you serve other private airports nearby?",
    answer: "Yes, we serve multiple private airports in the New York metropolitan area, including Westchester County Airport (HPN), Morristown Municipal Airport (MMU), and other regional private aviation facilities. We have extensive experience with private aviation protocols and can provide the same level of service and discretion at these locations. Please contact us when booking to confirm service availability for your specific airport.",
  },
  {
    question: "My flight time changed last minute. Is that a problem?",
    answer: "Not at all. We understand that private flights often have schedule changes. We track your tail number and monitor flight status to ensure your executive chauffeur is on the tarmac before your wheels touch down, even with last-minute changes. Simply keep us updated with any schedule modifications, and we'll adjust accordingly. There are no additional charges for schedule changes—we're here to accommodate your needs.",
  },
  {
    question: "How far is Teterboro from New York City?",
    answer: "Teterboro Airport is located just 12 miles from Midtown Manhattan, making it the fastest option for entering the city from a private airport. Travel time to Manhattan typically ranges from 20 to 40 minutes, depending on traffic conditions and your specific destination. We use real-time traffic monitoring to choose the most efficient routes—whether via the Lincoln Tunnel or George Washington Bridge—to minimize your travel time. During peak hours, travel times may be longer, but we always prioritize getting you to your destination as quickly and comfortably as possible.",
  },
];

export default function TeterboroAirportService() {
  return (
    <>
      <SEO 
        title={seoConfig.teterboro.title}
        description={seoConfig.teterboro.description}
        url={seoConfig.teterboro.url}
      />
    <main>
      <NewHeroSection 
        title="Elite Teterboro Airport Car Service (TEB)" 
        image="/hero-main-image.jpg"
        imageAlt="Teterboro Airport car service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Elite Teterboro Airport Car Service (TEB)"
        introDescription="Arrive in total privacy and comfort. DSL Limo specializes in VIP ground transportation for private aviation clients at Teterboro Airport. Whether you are a corporate executive, a celebrity, or a discerning traveler, our Teterboro limo service offers the discretion and precision you require. We are not just a car service; we are an extension of your luxury travel experience, ensuring the transition from your jet to your vehicle is seamless."
        features={[]}
      />
      <WhyChooseUsSection
        title="The Premier Choice for Private Aviation"
        description="Teterboro is the gateway to New York City for the elite. We understand the unique protocols of private air travel. Our chauffeurs are vetted, discreet, and experienced in tarmac operations."
        benefits={whyChooseTeterboroBenefits}
        image="/why-choose-images/teterboro-airport.png"
        imageAlt="Professional Teterboro airport transfer service"
      />
      <CounterSection
        stats={[
          { value: "9000", label: "HAPPY CUSTOMERS" },
          { value: "12", label: "LUXURY FLEETS" },
          { value: "900000", label: "MILES" },
          { value: "30", label: "QUALIFIED CHAUFFEURS" },
        ]}
      />
      <CarouselSection
        title="SERVING ALL TETERBORO FBOS"
        description="We have extensive experience working with every Fixed Base Operator (FBO) at TEB. We know exactly where to stage our vehicles at:"
        items={teterboroFBOs}
        backgroundColor="bg-[#138fa2]/90"
      />
      <UseCasesSection
        title="Luxury Transfers from TEB to NYC"
        description="Located just 12 miles from Midtown Manhattan, Teterboro is the fastest option for entering the city. Our TEB to NYC limo service ensures you maximize that time saving."
        useCases={luxuryTransfers}
      />
      <OurFleet />
      <FAQSection faqs={teterboroFAQData} />
    </main>
    </>
  );
}

