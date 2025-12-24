import React from "react";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface BenefitsCardsSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
}

export default function BenefitsCardsSection({
  title,
  description,
  benefits,
}: BenefitsCardsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#138fa2] rounded-lg p-6 text-white flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#138fa2] flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#138fa2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

