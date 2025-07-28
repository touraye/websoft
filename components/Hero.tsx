"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Your slide data
const slides = [
  {
    src: "/assets/images/sanlam-banner.webp",
    alt: "Sanlam Allianz logo",
  },
  {
    src: "/assets/images/instoc2_new.webp",
    alt: "Instoc Pro software box and packages on a conveyor belt",
  },
  {
    src: "/assets/images/alerio2.webp",
    alt: "Alerio ERP software box with a man on the phone",
  },
  {
    src: "/assets/images/instoc2_new.webp",
    alt: "GCB Bank logo",
  },
];

export default function Hero() {
  // Initialize the Autoplay plugin
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });
  
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // --- Carousel Controls and State Update ---

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Update the selected dot index when the carousel changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    // Cleanup on unmount
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full mt-1 px-2 sm:px-6">
      {/* in-h-[50vh] lg:min-h-[95vh] */}
      <div
        className="overflow-hidden h-full w-full rounded-2xl shadow-lg"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              className="relative flex-[0_0_100%] bg-gray-400 h-full min-h-[50vh] sm:min-h-[50vh] md:min-h-[75vh] lg:min-h-[95vh]"
              key={index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover md:object-cover"
                priority={index === 0} // Load the first image with high priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Carousel Controls: Arrows --- */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* --- Carousel Controls: Dots --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-yellow-400 p-1.5" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
