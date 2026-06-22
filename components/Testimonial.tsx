"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: '"Company have a very caring and personalized approach. They understand your needs and provide the care that suits your needs the best."',
    author: "Ekaterina Haider"
  },
  {
    id: 2,
    quote: '"The caregivers are incredibly professional and compassionate. They treat my mother with the utmost respect and have truly become like family to us."',
    author: "Michael T."
  },
  {
    id: 3,
    quote: '"Exceptional service from day one. The level of communication and the quality of daily care provided gives me complete peace of mind while I am at work."',
    author: "Sarah Jenkins"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 300); // 300ms fade transition
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFading(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className="relative w-full h-[50vh] min-h-[450px] md:h-[600px] overflow-hidden flex items-center justify-center">
      
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          // Using a placeholder image that reflects the elderly care/walker theme in the design
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Caregiver assisting elderly person"
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Very subtle dark overlay to ensure white arrows and dots remain visible against light backgrounds */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {}
      {/* Left Arrow */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-10 z-20 p-2 text-white hover:opacity-70 transition-opacity"
        aria-label="Previous testimonial"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="w-10 h-10 md:w-16 md:h-16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-10 z-20 p-2 text-white hover:opacity-70 transition-opacity"
        aria-label="Next testimonial"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          className="w-10 h-10 md:w-16 md:h-16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {}
      {/* Central Testimonial Card */}
      <div className="relative z-10 w-[85%] max-w-4xl bg-white px-8 py-12 md:px-20 md:py-16 shadow-lg">
        <div 
          className={`flex flex-col items-center text-center transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Quote */}
          <p className="text-[#0fa960] text-lg md:text-[22px] font-light leading-relaxed mb-8">
            {testimonials[currentIndex].quote}
          </p>
          
          {/* Author */}
          <p className="text-gray-500 text-sm md:text-[15px] font-light tracking-wide">
            {testimonials[currentIndex].author}
          </p>
        </div>
      </div>

      {}
      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 z-20 flex items-center justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`flex items-center justify-center transition-all duration-300 ${
              currentIndex === index 
                ? "w-2.5 h-2.5 rounded-full border-[1.5px] border-white bg-transparent" // Active: Hollow ring
                : "w-1.5 h-1.5 rounded-full bg-white opacity-80" // Inactive: Solid small dot
            }`}
          />
        ))}
      </div>

    </section>
  );
}