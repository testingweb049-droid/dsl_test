export const dynamic = "force-dynamic";

import NewHeroSection from "../book-ride/NewHeroSection";
import InfiniteSlide from "../book-ride/InfiniteSlide";
import ServiceContentSection from "@/app/components/sections/ServiceContentSection";
import WhyChooseUsSection from "@/app/components/sections/WhyChooseUsSection";
import UseCasesSection from "@/app/components/sections/UseCasesSection";
import FAQSection from "@/app/components/sections/FAQSection";
import OurFleet from "@/app/components/sections/OurfleetSection";
import { Car, Clock, Lock } from "lucide-react";
import Link from "next/link";

const whyChooseHourlyBenefits = [
  {
    icon: Car,
    title: "Unlimited Stops",
    text: "Need to stop at the bank, pick up a colleague, and then head to lunch? With chauffeur service by the hour, you can make as many stops as you need without extra booking fees.",
  },
  {
    icon: Clock,
    title: "Always Waiting",
    text: "Your driver never leaves the pickup location. When your meeting ends early or your dinner runs late, your black car is right outside waiting for you.",
  },
  {
    icon: Lock,
    title: "Secure Belongings",
    text: "Because you keep the same vehicle, you can safely leave your shopping bags, heavy coats, or presentation materials in the car while you attend your appointments.",
  },
];

const idealUseCases = [
  {
    title: "Executive Roadshows",
    description: "Perfect for business professionals who need to hit multiple locations in the Financial District or Midtown in a single day.",
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

const hourlyFAQData = [
  {
    question: "Is there a minimum hourly requirement?",
    answer: "Yes, we have a minimum booking requirement of 2 hours for our hourly service. This ensures that you have sufficient time to complete your activities and makes the service cost-effective. For longer bookings, we offer competitive rates and can accommodate extended periods as needed.",
  },
  {
    question: "Can I extend my time if I run late?",
    answer: "Absolutely! We understand that schedules can change. If you need to extend your booking time, simply contact your driver or our dispatch team, and we'll accommodate the extension. Additional time will be billed at the same hourly rate, and you'll only pay for the time you actually use.",
  },
  {
    question: "Does the hourly rate include travel outside NYC?",
    answer: "Our hourly rate covers travel within New York City and the immediate metropolitan area. For travel outside NYC to locations in New Jersey, Connecticut, or other states, additional charges may apply based on distance and destination. Please discuss your travel plans with us when booking, and we'll provide a transparent quote that includes any applicable surcharges.",
  },
  {
    question: "Are tolls included?",
    answer: "Tolls are not included in the base hourly rate. Any tolls incurred during your trip will be added to your final bill. This ensures transparency and allows you to see exactly what you're paying for. All toll charges are clearly itemized on your receipt, so there are no surprises.",
  },
];

export default function HourlyHireService() {
  return (
    <main>
      <NewHeroSection 
        title="Luxury Hourly Limo Service in NYC" 
        image="/hero-main-image.jpg"
        imageAlt="Hourly hire limo service"
      />
      <InfiniteSlide />
      <ServiceContentSection
        mainTitle="Luxury Hourly Limo Service in NYC"
        introDescription="Experience the ultimate freedom with DSL Limo's hourly car service. Unlike point-to-point transfers where you are dropped off and left on your own, our hourly chauffeur hire keeps the vehicle at your complete disposal. Whether you are navigating a busy schedule of business meetings in Manhattan or enjoying a day of sightseeing, your private driver stays with you, ready to move whenever you are."
        features={[]}
      />
      <WhyChooseUsSection
        title="Why Choose Hourly Charter Service?"
        description={
          <>
            Hourly hire gives you total control over your schedule. (Looking for our specific As Directed service?{" "}
            <Link href="/as-directed-service" className="text-[#1EACC7] hover:underline">
              Click Here
            </Link>
            ).
          </>
        }
        benefits={whyChooseHourlyBenefits}
        image="/why-choose-images/hourly-hire.png"
        imageAlt="Professional chauffeur opening car door"
      />
      <UseCasesSection
        title="Ideal Use Cases for Hourly Service"
        useCases={idealUseCases}
      />
      <OurFleet />
      <FAQSection faqs={hourlyFAQData} />
    </main>
  );
}

