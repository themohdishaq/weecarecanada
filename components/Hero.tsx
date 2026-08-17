"use client";

import { useEffect, useState } from "react";
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

  const goToPrevious = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToNext = () => {
    setCurrent((previous) => (previous + 1) % heroImages.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0f2d22]"
      aria-label="Home care services"
    >
      <div
        className="relative w-full"
        style={{
          paddingBottom: "clamp(500px, 50vw, 600px)",
        }}
      >
        {/* Background slides */}
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={index === current ? image.alt : ""}
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>
        ))}

        {/* Previous arrow */}
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="
            absolute
            left-3
            top-[36%]
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/20
            text-white
            shadow-lg
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-105
            hover:border-white/50
            hover:bg-black/40
            focus:outline-none
            focus:ring-2
            focus:ring-white/70
            sm:left-6
            sm:top-[38%]
            sm:h-12
            sm:w-12
            md:left-10
            md:top-[40%]
            md:h-14
            md:w-14
            lg:left-14
          "
        >
          <svg
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="
            absolute
            right-3
            top-[36%]
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/20
            text-white
            shadow-lg
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-105
            hover:border-white/50
            hover:bg-black/40
            focus:outline-none
            focus:ring-2
            focus:ring-white/70
            sm:right-6
            sm:top-[38%]
            sm:h-12
            sm:w-12
            md:right-10
            md:top-[40%]
            md:h-14
            md:w-14
            lg:right-14
          "
        >
          <svg
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide indicators */}
        <div
          className="
            absolute
            bottom-[240px]
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "h-2.5 w-7 bg-white"
                  : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Service cards */}
        <div className="absolute bottom-10 left-0 right-0 z-30 px-3 sm:px-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1  gap-3 overflow-hidden shadow-2xl sm:grid-cols-3">
            {careCards.map((card, index) => (
              <article
                key={card.title}
                className={`
                  group
                  flex
                  min-h-[150px]
                  flex-col
                  justify-between
                  bg-[#1b7a50]/95
                  p-5
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-[#166844]
                  sm:min-h-[205px]
                  sm:p-6
                  lg:min-h-[225px]
                  lg:p-8
                  ${
                    index !== careCards.length - 1
                      ? "sm:border-r sm:border-white/20"
                      : ""
                  }
                `}
              >
                <div>
                  <h2 className="whitespace-pre-line text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                    {card.title}
                  </h2>

                  <p className="mt-3 hidden text-sm font-light leading-6 text-white/85 sm:block">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      border
                      border-white/40
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:border-white
                      hover:bg-white
                      hover:text-[#1b7a50]
                      sm:text-sm
                    "
                  >
                    Explore more

                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}