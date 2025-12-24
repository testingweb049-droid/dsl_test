import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function ProcessStepsSection({
  title,
  subtitle,
  steps,
}: ProcessStepsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1EACC7]"></div>
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1EACC7]"></div>
      
      <div className="max-w-6xl mx-auto pl-4 sm:pl-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-700 text-center max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-[#138fa2] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              
              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

