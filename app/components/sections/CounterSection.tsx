import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface CounterSectionProps {
  stats: Stat[];
  backgroundImage?: string;
  overlayOpacity?: string;
}

export default function CounterSection({
  stats,
  backgroundImage = "/hero-section.png",
  overlayOpacity = "bg-black/40",
}: CounterSectionProps) {
  return (
    <div className="relative w-full h-[350px] sm:h-72 lg:h-[200px] flex items-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional Overlay (for better text contrast) */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</h2>
              <div className="w-12 border-b-2 border-white my-2 md:my-4"></div>
              <p className="text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

