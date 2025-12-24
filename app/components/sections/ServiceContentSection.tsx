import React from "react";
import FeatureCard from "./FeatureCard";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceContentSectionProps {
  mainTitle: string;
  introDescription: string;
  subHeading?: string;
  explanationText?: string;
  features: Feature[];
}

export default function ServiceContentSection({
  mainTitle,
  introDescription,
  subHeading,
  explanationText,
  features,
}: ServiceContentSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {mainTitle}
          </h1>
        </div>

        {/* Introductory Paragraph */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {introDescription}
          </p>
        </div>

        {/* Sub-heading */}
        {subHeading && (
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {subHeading}
            </h2>
          </div>
        )}

        {/* Explanation Paragraph */}
        {explanationText && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {explanationText}
            </p>
          </div>
        )}

        {/* Feature Section - Three Columns */}
        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

