"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/1.png", alt: "MIVA Drone System Alpha" },
  { src: "/2.png", alt: "MIVA Tactical Flight Operations" }
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);
  const touchStart = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
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
      className="relative w-full max-w-7xl mx-auto h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl bg-gray-100"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Viewport */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Edge-Hover Active Zones */}
      {/* Left Hover Zone */}
      <div 
        className="absolute left-0 top-0 w-[15%] h-full z-20 cursor-pointer hidden md:block"
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        onClick={prevSlide}
      />
      {/* Right Hover Zone */}
      <div 
        className="absolute right-0 top-0 w-[15%] h-full z-20 cursor-pointer hidden md:block"
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
        onClick={nextSlide}
      />

      {/* Floating Edge Navigation Buttons */}
      <AnimatePresence>
        {hoverSide === "left" && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 hover:bg-white text-primary border border-primary/10 rounded-full shadow-lg transition-colors hidden md:block"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hoverSide === "right" && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 hover:bg-white text-primary border border-primary/10 rounded-full shadow-lg transition-colors hidden md:block"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widescreen and Mobile Small Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating Small Branding Caption (Mobile Swipeable Indicator) */}
      <div className="absolute top-6 left-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-widest uppercase font-semibold py-1.5 px-3 rounded-full md:hidden select-none">
        ← Swipe to explore →
      </div>
    </div>
  );
}
