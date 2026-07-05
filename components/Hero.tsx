"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  {
    src: "https://static.wixstatic.com/media/2131ad_a27537da1d304fd9a9b4e8bca2c6ab0b~mv2.jpg/v1/fill/w_2260,h_1179,fp_0.55_0.45,q_90,enc_avif,quality_auto/2131ad_a27537da1d304fd9a9b4e8bca2c6ab0b~mv2.jpg",
    alt: "Caregiver and elderly patient in a warm home setting",
  },
  {
    src: "https://static.wixstatic.com/media/2131ad_1a7e837381004b059b8c382770c7091f~mv2.jpg/v1/fill/w_2014,h_1050,fp_0.33_0.48,q_90,enc_avif,quality_auto/2131ad_1a7e837381004b059b8c382770c7091f~mv2.jpg",
    alt: "Professional caregiver providing compassionate support",
  },
  {
    src: "https://static.wixstatic.com/media/2131ad_1ac01e7fd00740758090b38c56064a5a~mv2.jpg/v1/fill/w_2383,h_1243,fp_0.63_0.29,q_90,enc_avif,quality_auto/2131ad_1ac01e7fd00740758090b38c56064a5a~mv2.jpg",
    alt: "Senior receiving personalized home care services",
  },
];

const careCards = [
  {
    title: "Personalized\nCare",
    description:
      "We are dedicated to providing personalized care services designed to meet the unique needs of each individual.",
    href: "/services/personalized-care",
  },
  {
    title: "Companionship\nRedefined",
    description:
      "We redefine companionship by understanding its profound impact on overall well-being and quality of life.",
    href: "/services/companionship-support",
  },
  {
    title: "Medication\nAdherence",
    description:
      "Our caregivers provide reminders and assistance with medication management to ensure timely and accurate intake.",
    href: "/services/medication-reminder",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900"
      aria-label="Hero slideshow"
    >
      {/* Fixed aspect ratio container: 16:7 on desktop, 4:3 on mobile */}
      <div className="relative w-full" style={{ paddingBottom: "clamp(320px, 55vw, 680px)" }}>

        {/* Slides */}
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
          </div>
        ))}

        {/* Prev / Next arrows */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-3 sm:px-6 pointer-events-none">
          <button
            onClick={() => setCurrent((p) => (p - 1 + heroImages.length) % heroImages.length)}
            className="pointer-events-auto p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % heroImages.length)}
            className="pointer-events-auto p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-[210px] sm:bottom-[215px] md:bottom-[225px] lg:bottom-[235px] left-0 right-0 z-30 flex justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Cards overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px max-w-6xl mx-auto">
            {careCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#1b7a50]/95 backdrop-blur-sm p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[190px] lg:min-h-[210px] hover:bg-[#156140]/95 transition-colors"
              >
                <div>
                  <h2 className="text-white text-base sm:text-xl font-semibold mb-2 sm:mb-3 whitespace-pre-line leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-white/85 text-xs sm:text-[13px] md:text-[14px] leading-relaxed font-light hidden sm:block">
                    {card.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-white/90 text-xs sm:text-sm hover:text-white transition-colors border border-white/30 px-3 sm:px-4 py-1.5 hover:bg-white/10"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
