
import CallActionSection from "@/app/components/sections/CallActionSection";
import HeroSection3 from "@/app/components/sections/HeroSection3";
import WhatWeOfferSection from "@/app/components/sections/OfferSection";
import ServiceExperienceBanner from "@/app/components/sections/ServiceExperiencedBanner";
import ServicesSection from "@/app/components/sections/Services-Section";
import CounterSection from "@/app/components/sections/CounterSection";
import Image from "next/image";


export default function Fleet() {

    const customerServices = [
        {
            title: "Customer-Centric Service",
            description:
                "We put our clients at the heart of everything we do, tailoring every ride to your specific needs and preferences. From the moment you book with us until you reach your destination, we focus on delivering a seamless experience. ",
            icon: "/shop.svg",
        },
        {
            title: "On-Time Guarantee",
            description:
                " Time is valuable, and we respect yours by ensuring punctuality in every ride. Our chauffeurs are trained to manage routes efficiently, avoiding unnecessary delays and ensuring a smooth journey. Whether it’s an early morning airport transfer or a late-night pickup, we are available 24/7 to serve you. ",
            icon: "/Fleet.svg",
        },
        {
            title: "Luxury Fleet",
            description:
                "Our fleet of vehicles is carefully curated to combine style, safety, and comfort. Each vehicle is modern, impeccably maintained, and equipped with premium features to elevate your travel experience. Whether you prefer a sleek sedan, a spacious SUV, or a luxury limousine, we have the right option for your journey. ",
            icon: "/customer.svg",
        },
        {
            title: "Professional Chauffeurs",
            description:
                " Behind every great ride is a professional chauffeur who understands the importance of both skill and courtesy. Our chauffeurs are extensively trained to provide a safe, smooth, and enjoyable journey every time. ",
            icon: "/chauffers.svg",
        },
        {
            title: "Airport & Corporate Travel",
            description:
                "We understand the demands of both business and travel, which is why we offer reliable airport and corporate transportation solutions. For frequent travelers, our seamless airport transfers remove the stress of navigating traffic or parking. ",
            icon: "/airport.svg",
        },
        {
            title: "Special Occasions",
            description:
                "When it comes to life’s most important moments, we believe your transportation should be just as memorable. Our luxury vehicles add elegance and sophistication to weddings, proms, anniversaries, and private events. ",
            icon: "/occassion.svg",
        },

    ]
    return (
        <>
            <HeroSection3
                title="ABOUT US"
                subtitle="We are the most popular Fleet service in New York."
                backgroundImage="/serve-image.png"

            />
            < WhatWeOfferSection />

            <CounterSection
                stats={[
                    { value: "500+", label: "Happy Customers" },
                    { value: "25", label: "Luxury Fleets" },
                    { value: "30k", label: "Miles in year" },
                    { value: "30", label: "Qualified Chauffeurs" },
                ]}
            />






            <ServiceExperienceBanner />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mt-10 sm:mt-10 md:mt-12 px-4 sm:px-6 max-w-6xl mx-auto mb-12 md:mb-16">
                {customerServices.map((service, index) => (
                    <div key={index} className="flex flex-col px-6 md:items-start md:text-left">
                        <Image
                            src={service.icon}
                            alt={service.title}
                            width={40}
                            height={40}
                            className="mb-4 bg-[#008492] p-2 rounded"
                        />

                        <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>

                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs md:max-w-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
