import Image from "next/image";
import Link from "next/link";
import ServiceList from "@/components/services/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of home care services including respite care, companionship support, personalized care, dementia care, fall prevention, and more.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | WeeCare Canada",
    description:
      "Explore our full range of home care services including respite care, companionship support, personalized care, dementia care, fall prevention, and more.",
    url: "/services",
  },
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#76cba4] py-8 px-6 text-center w-full shadow-sm">
        <h1 className="text-white text-3xl font-light tracking-wide">Our Services</h1>
        <p className="text-white/80 text-[15px] mt-2 font-light">
          Compassionate care tailored to your unique needs
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServiceList.map((service) => {
          const slug = slugify(service.heading);
          return (
            <Link key={service.heading} href={`/services/${slug}`} className="block group">
              <article className="border border-gray-200 flex flex-col w-full hover:shadow-lg transition-shadow h-full">
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.heading}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="bg-[#f2f2f2] p-7 flex flex-col items-center text-center flex-grow">
                  <h2 className="text-[#3ba683] text-xl font-light mb-3">{service.heading}</h2>
                  <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">{service.subtitle}</p>
                  <span className="bg-[#915da3] group-hover:bg-[#7e4f8d] transition-colors text-white py-2.5 px-8 text-[14px]">
                    Learn More
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#f2f2f2] py-14 px-6 text-center">
        <h2 className="text-[#3ba683] text-2xl font-light mb-3">Not sure which service you need?</h2>
        <p className="text-gray-500 text-[15px] font-light mb-7 max-w-lg mx-auto">
          Book a free initial consultation and our team will help you find the right care plan.
        </p>
        <Link
          href="/booking-calendar/initial-consultation"
          className="inline-block bg-[#915da3] hover:bg-[#7e4f8d] transition-colors text-white py-3 px-10 text-[15px]"
        >
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}
