import React from "react";
import Link from "next/link";

interface CallToActionSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CallToActionSection({
  title,
  subtitle,
  primaryButtonText = "Get Instant Quote",
  primaryButtonLink = "/",
  secondaryButtonText = "Book Your Ride",
  secondaryButtonLink = "/",
}: CallToActionSectionProps) {
  return (
    <section className="bg-[#138fa2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right Side - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <Link
              href={primaryButtonLink}
              className="bg-[#1EACC7] hover:bg-[#1a9bb3] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

