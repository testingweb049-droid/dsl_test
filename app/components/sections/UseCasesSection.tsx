import React from "react";

interface UseCase {
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  title: string;
  description?: string;
  useCases: UseCase[];
}

export default function UseCasesSection({
  title,
  description,
  useCases,
}: UseCasesSectionProps) {
  // Determine grid columns based on number of items
  const gridCols = useCases.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  const maxWidth = useCases.length === 2 ? "max-w-4xl" : "max-w-6xl";
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className={`${maxWidth} mx-auto`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h2>
        {description && (
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto text-base sm:text-lg">
            {description}
          </p>
        )}
        {!description && <div className="mb-12"></div>}
        <div className={`grid grid-cols-1 ${gridCols} gap-8 ${useCases.length === 2 ? 'justify-items-center' : ''}`}>
          {useCases.map((useCase, index) => (
            <div key={index} className={`bg-gray-50 p-6 rounded-lg ${useCases.length === 2 ? 'w-full max-w-md' : ''}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

