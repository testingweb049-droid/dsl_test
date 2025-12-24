export const dynamic = "force-dynamic";

import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import UseCasesSection from "@/app/components/sections/UseCasesSection";
import FAQSection from "@/app/components/sections/FAQSection";
import OurFleet from "@/app/components/sections/OurfleetSection";
import { ArrowRightLeft, Clock, Wifi } from "lucide-react";

const asDirectedBenefits = [
  {
    icon: ArrowRightLeft,
    title: "Total Flexibility",
    text: "Change your destination mid-ride? No problem. Our flexible car service adapts instantly to your needs.",
  },
  {
    icon: Clock,
    title: "On-Demand Waiting",
    text: "Your driver waits for you at every stop, whether it's 10 minutes or 2 hours, ensuring you never have to wait for a pickup.",
  },
  {
    icon: Wifi,
    title: "Mobile Office Environment",
    text: "Think of your vehicle as a mobile boardroom. Our quiet, smooth ride allows you to take conference calls and prep for meetings without interruption.",
  },
];

const asDirectedUseCases = [
  {
    title: "Medical Visits",
    description: "Perfect for appointments where the end time is uncertain. Your personal driver waits outside the clinic or hospital until you are ready to leave.",
  },
  {
    title: "Shopping Trips",
    description: "Visit Fifth Avenue or SoHo without the hassle of carrying bags or finding parking. Our shopping limo service makes retail therapy effortless.",
  },
  {
    title: "Night on the Town",
    description: "Enjoy dinner, Perfect for Broadway shows, and avoid the post-show taxi scramble. Your driver will be waiting just around the corner as the curtain falls.",
  },
];

const asDirectedFAQData = [
  {
    question: "How does 'As Directed' differ from hourly service?",
    answer: "While hourly service charges by the hour, 'As Directed' service gives you complete control over your itinerary with no predefined route. You can change destinations on the fly, make multiple stops, and your driver adapts to your schedule in real-time. It's perfect for unpredictable schedules where you need maximum flexibility.",
  },
  {
    question: "Can I change my destination during the ride?",
    answer: "Absolutely! That's one of the key benefits of our 'As Directed' service. You can change your destination at any time during your ride. Simply inform your driver, and they'll adjust the route immediately. There are no additional booking fees for route changes—you're in complete control.",
  },
  {
    question: "How long can my driver wait at each stop?",
    answer: "Your driver will wait for you at every stop for as long as you need—whether it's 10 minutes or 2 hours. There's no time limit on waiting periods. The vehicle and driver remain at your disposal throughout the entire booking, ensuring you never have to wait for a pickup or worry about parking.",
  },
  {
    question: "Is this service available for airport pickups?",
    answer: "Yes, our 'As Directed' service is perfect for airport pickups, especially when you have multiple destinations or an uncertain schedule. Your driver will track your flight, meet you at the airport, and then follow your instructions for the rest of your journey. It's ideal for business travelers with multiple meetings or tourists with flexible sightseeing plans.",
  },
];

export default function AsDirectedService() {
  return (
    <main>
      <NewHeroSection />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="As Directed Chauffeur Service in New York"
        introDescription="Take full control of your travel experience with DSL Limo's As Directed service. Unlike standard transfers with a fixed destination, this service puts you in the driver's seat—figuratively speaking. You provide the instructions, and our professional chauffeur follows your lead. It is the ultimate solution for travelers whose schedules are fluid, demanding, or subject to last-minute changes."
        features={[]}
      />
      <WhyChooseUsSection
        title="Your Schedule, Your Rules"
        description="With As Directed transportation, you are not hiring a ride; you are hiring a dedicated vehicle and driver for as long as you need. Whether you need to visit multiple locations, extend a meeting, or make an unscheduled stop, your driver is at your service."
        benefits={asDirectedBenefits}
        image="/why-choose-us.png"
        imageAlt="Professional chauffeur service"
      />
      <UseCasesSection
        title="When to Choose 'As Directed' Service"
        description="This service is designed for complex itineraries where a simple 'Point A to Point B' booking isn't enough."
        useCases={asDirectedUseCases}
      />
      <OurFleet />
      <FAQSection faqs={asDirectedFAQData} />
    </main>
  );
}

