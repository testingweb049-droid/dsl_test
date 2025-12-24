import React from "react";
import { MapPin, LucideIcon } from "lucide-react";

interface StateInfo {
  state: string;
  description: string;
  icon?: LucideIcon;
}

interface TriStateAreaSectionProps {
  title?: string;
  description?: string;
  states: StateInfo[];
}

export default function TriStateAreaSection({
  title = "Serving the Entire Tri-State Area",
  description = "While we specialize in New York City airport transportation, our fleet operates extensively across the surrounding states. We are the top choice for travelers requiring long-distance airport transfers.",
  states,
}: TriStateAreaSectionProps) {
  // Determine grid columns based on number of items
  const gridCols = states.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  const maxWidth = states.length === 2 ? "max-w-4xl" : "max-w-6xl";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className={`${maxWidth} mx-auto`}>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>

        {/* State Boxes */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {states.map((stateInfo, index) => {
            const IconComponent = stateInfo.icon || MapPin;
            // Use left-aligned layout for 2 items, centered for 3 items
            const isLeftAligned = states.length === 2;
            
            return (
              <div
                key={index}
                className={`bg-[#138fa2] rounded-lg p-6 flex flex-col ${isLeftAligned ? 'items-start' : 'items-center'} text-white`}
              >
                <div className={`w-12 h-12 rounded-full bg-white border-2 border-[#138fa2] flex items-center justify-center ${isLeftAligned ? 'mb-4' : 'mb-4'}`}>
                  <IconComponent className="w-6 h-6 text-[#138fa2]" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isLeftAligned ? 'text-left' : 'text-center'}`}>{stateInfo.state}</h3>
                <p className={`text-white/90 leading-relaxed text-sm sm:text-base ${isLeftAligned ? 'text-left' : 'text-center'}`}>
                  {stateInfo.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

