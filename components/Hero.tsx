"use client";

import { useState, useEffect } from "react";

const Heroimage = [
  {
    name: "Hero image",
    source:
      "https://static.wixstatic.com/media/2131ad_a27537da1d304fd9a9b4e8bca2c6ab0b~mv2.jpg/v1/fill/w_2260,h_1179,fp_0.55_0.45,q_90,enc_avif,quality_auto/2131ad_a27537da1d304fd9a9b4e8bca2c6ab0b~mv2.jpg",
    alt: "A caregiver and an elderly",
  },
  {
    name: "image 2",
    source:
      "https://static.wixstatic.com/media/2131ad_1a7e837381004b059b8c382770c7091f~mv2.jpg/v1/fill/w_2014,h_1050,fp_0.33_0.48,q_90,enc_avif,quality_auto/2131ad_1a7e837381004b059b8c382770c7091f~mv2.jpg",
    alt: "A caregiver and an elderly",
  },
  {
    name: "image 3",
    source:
      "https://static.wixstatic.com/media/2131ad_1ac01e7fd00740758090b38c56064a5a~mv2.jpg/v1/fill/w_2383,h_1243,fp_0.63_0.29,q_90,enc_avif,quality_auto/2131ad_1ac01e7fd00740758090b38c56064a5a~mv2.jpg",
    alt: "A caregiver and an elderly",
  },
];

const careCards = [
  {
    title: "Personalized\nCare",
    description:
      "We are dedicated to providing personalized care services designed to meet the needs of each individual.",
    link: "#personalized-care",
  },
  {
    title: "Companionship\nRedefined",
    description:
      "We redefine companionship by understanding its profound impact on overall well-being.",
    link: "#companionship",
  },
  {
    title: "Medication\nAdherence",
    description:
      "Adhering to medication schedules can be challenging, but our caregivers provide reminders and assistance with medication management.",
    link: "#medication",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Heroimage.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Heroimage.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Heroimage.length) % Heroimage.length
    );
  };

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] min-h-[500px] overflow-hidden bg-gray-100 flex items-center justify-center">
      {/* Background Images */}
      {Heroimage.map((img, index) => (
        <div
          key={img.name}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img.source}
            alt={img.alt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-1 sm:p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto p-1 sm:p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Overlay Cards */}
      <div className="absolute bottom-0 z-30 w-full flex justify-center px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] w-full max-w-6xl">
          {careCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1b7a50]/95 backdrop-blur-sm p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] transition-transform duration-300 hover:bg-[#156140]/95"
            >
              <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 whitespace-pre-line leading-tight">
                  {card.title}
                </h2>

                <p className="text-white/90 text-xs sm:text-sm md:text-[15px] leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-8">
                <a
                  href={card.link}
                  className="inline-flex items-center text-white/90 text-xs sm:text-sm hover:text-white transition-colors border border-white/30 px-3 sm:px-4 py-1.5 rounded-sm hover:bg-white/10"
                >
                  Explore more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}