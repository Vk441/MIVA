"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { 
    src: "/soon.png", 
    alt: "MIVA Autonomous Aerospace Systems",
    title: "Empowering The Sky",
    subtitle: "Indigenous High-Precision Aerospace & Defense UAS Systems",
    cta: "Explore Openings",
    link: "/careers"
  },
  { 
    src: "/2.png", 
    alt: "MIVA Mission-Critical Platforms",
    title: "Indigenously Built",
    subtitle: "Custom Subsystems Engineered for Absolute Strategic Security",
    cta: "Partner With Us",
    link: "/contact"
  }
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  // Handle touch swipes for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;

    if (diff > 50) {
      nextSlide(); // Swiped left, go next
    } else if (diff < -50) {
      prevSlide(); // Swiped right, go prev
    }
    touchStart.current = null;
  };

  return (
    <div 
      className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-black select-none group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Viewport */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Edge Navigation Buttons (Visible by default) */}
      {/* Left Chevron Button */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-black/40 active:scale-95 text-white/80 hover:text-white border border-white/10 rounded-full shadow-lg transition-all outline-none focus:outline-none focus:ring-0 active:outline-none select-none"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} className="outline-none select-none" />
      </button>

      {/* Right Chevron Button */}
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-black/40 active:scale-95 text-white/80 hover:text-white border border-white/10 rounded-full shadow-lg transition-all outline-none focus:outline-none focus:ring-0 active:outline-none select-none"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} className="outline-none select-none" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 select-none">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 outline-none focus:outline-none select-none ${
              currentIndex === idx ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
