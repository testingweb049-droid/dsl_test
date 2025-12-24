import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  description: string | React.ReactNode;
  benefits: Benefit[];
  image: string;
  imageAlt?: string;
}

export default function WhyChooseUsSection({
  title,
  description,
  benefits,
  image,
  imageAlt = "Professional service",
}: WhyChooseUsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
