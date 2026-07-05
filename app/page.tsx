import Link from "next/link";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WeeCare Canada | Personalized Home Care Services",
  description:
    "Compassionate home care services for seniors and individuals with disabilities across Ontario. Respite care, companionship, personal care, and more.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <section id="call-action" className="w-full bg-[#8C52A1] py-8 md:py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide text-center sm:text-left">
            Solutions Tailored to Your Needs.
          </h2>
          <Link
            href="/contact"
            className="shrink-0 bg-[#8C52A1] border border-[#714083] text-white text-base md:text-lg px-8 py-3
                       shadow-[0_12px_15px_-4px_rgba(0,0,0,0.5)]
                       hover:-translate-y-0.5 hover:shadow-[0_16px_20px_-4px_rgba(0,0,0,0.6)]
                       transition-all duration-300 active:translate-y-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      <Pillars />
      <Testimonial />
      <Contact />
      <Newsletter />
    </>
  );
}
