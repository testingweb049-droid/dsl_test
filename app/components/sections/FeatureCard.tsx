import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-[#1EACC7]" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}

