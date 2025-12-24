"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface CarouselItem {
  name: string;
  image: string;
  href?: string;
}

interface CarouselSectionProps {
  title: string;
  description: string;
  items: CarouselItem[];
  backgroundImage?: string;
  backgroundColor?: string;
}

export default function CarouselSection({
  title,
  description,
  items,
  backgroundImage,
  backgroundColor = "bg-[#138fa2]/90",
}: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev >= items.length - slidesToShow ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - slidesToShow : prev - 1
    );

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isMobile, items.length, slidesToShow]);

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      className={`max-w-6xl mx-auto px-4 md:px-8 py-12 ${backgroundColor} flex flex-col items-center overflow-hidden`}
      style={sectionStyle}
    >
      {/* Heading */}
      <h2 className="text-white font-bold text-2xl md:text-3xl tracking-wide mb-3 text-center uppercase">
        {title}
      </h2>

      {/* Divider with star */}
      <div className="flex items-center justify-center my-3 sm:my-4">
        <div className="flex-1 h-px bg-white/30 max-w-12 sm:max-w-16 md:max-w-20"></div>
        <Star className="w-4 sm:w-5 h-4 sm:h-5 text-white mx-2 sm:mx-3 fill-white" />
        <div className="flex-1 h-px bg-white/30 max-w-12 sm:max-w-16 md:max-w-20"></div>
      </div>

      {/* Description */}
      <p className="text-white text-center text-sm md:text-base mb-10 max-w-2xl">
        {description}
      </p>

      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full flex items-center justify-center 
          border-2 border-white bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-[260px] h-[280px] overflow-hidden relative">
          <div
            className="flex transition-transform duration-[1500ms] ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => {
              const content = (
                <div
                  key={`${item.name}-${index}`}
                  className="flex-shrink-0 w-[260px] h-[280px] relative rounded-xl overflow-hidden shadow-lg border border-white/20"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 py-4">
                    <span className="text-white font-semibold text-base leading-tight drop-shadow-md block text-center">
                      {item.name}
                    </span>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={`link-${item.name}-${index}`} href={item.href}>
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-2000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {items.map((item, index) => {
              const cardContent = (
                <>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover w-full h-[220px] rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 py-2">
                    <span className="text-white font-semibold text-sm leading-snug drop-shadow-md block text-center break-words">
                      {item.name}
                    </span>
                  </div>
                </>
              );

              return item.href ? (
                <a 
                  key={`link-${item.name}-${index}`} 
                  href={item.href} 
                  className="flex-shrink-0 w-1/3 px-2 relative rounded-xl overflow-hidden shadow-lg"
                >
                  {cardContent}
                </a>
              ) : (
                <div 
                  key={`${item.name}-${index}`} 
                  className="flex-shrink-0 w-1/3 px-2 relative rounded-xl overflow-hidden shadow-lg"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full flex items-center justify-center 
          border-2 border-white bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}

