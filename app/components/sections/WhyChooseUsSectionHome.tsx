import WhyChooseUsSection from "./WhyChooseUsSection";
import { Car, User, Clock, Wifi, ShieldCheck } from "lucide-react";

export default function WhyChooseUsSectionHome() {
  const benefits = [
    {
      icon: Car,
      title: "",
      text: "Luxury Fleet Featuring Sedan, Mid SUV, And Full SUV",
    },
    {
      icon: User,
      title: "",
      text: "Professional, Fully Vetted, And Discreet Chauffeurs",
    },
    {
      icon: Clock,
      title: "",
      text: "24/7 Availability For All Your Travel Needs",
    },
    {
      icon: Wifi,
      title: "",
      text: "On-Board Wi-Fi And Complimentary Bottled Water",
    },
    {
      icon: ShieldCheck,
      title: "",
      text: "Trusted By Business Leaders And Global Travelers",
    },
  ];

  return (
    <WhyChooseUsSection
      title="Why Choose Our Black Car Service in New York"
      description="At DSL, we offer more than just a ride, we deliver a premium, reliable experience. Since 2010, we've built our reputation on a personal approach to luxury transport. Our team prioritizes your safety, discretion, and comfort above all else."
      benefits={benefits}
      image="/why-choose-us.png"
      imageAlt="Professional chauffeur in luxury car"
    />
  );
}

