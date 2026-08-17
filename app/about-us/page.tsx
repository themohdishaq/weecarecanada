import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WeeCare Canada — a professional home care agency dedicated to compassionate, personalized care for seniors and individuals with disabilities in Ontario.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About WeeCare Canada",
    description:
      "Learn about WeeCare Canada — a professional home care agency dedicated to compassionate, personalized care for seniors and individuals with disabilities in Ontario.",
    url: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <section id="about" className="w-full bg-white">
      {/* Page header */}
      <div className="bg-[#76cba4] py-8 px-6 text-center w-full shadow-sm">
        <h1 className="text-white text-3xl font-light tracking-wide">About Us</h1>
      </div>

      {/* Hero section */}
      <div className="max-w-6xl mx-auto flex py-12 flex-col md:flex-row items-start gap-10 md:gap-16 px-6">
        <div className="w-full md:w-5/12 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Caregiver supporting an elderly man"
            width={1000}
            height={800}
            className="w-full h-auto object-cover shadow-sm"
            sizes="(max-width: 768px) 100vw, 41vw"
          />
        </div>

        <div className="w-full md:w-7/12 flex flex-col pt-2 md:pt-0">
          <h2 className="text-[#0fa960] text-3xl md:text-4xl font-light mb-6 tracking-wide leading-snug">
            About WeeCare Canada
          </h2>
          <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-5">
            Wee Care Canada is a professional Home Care Agency dedicated to providing exceptional
            care and support to seniors and individuals with disabilities. Our team of experienced
            caregivers delivers personalized home care services that meet the unique needs of each
            client, working closely with families to create care plans that ensure safety and
            well-being.
          </p>
          <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-8">
            At Wee Care Canada, we believe that everyone deserves to live with dignity and respect.
            We are committed to compassionate care that promotes independence and enhances quality
            of life — from personal care and medication management to meal preparation, light
            housekeeping, and companionship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-[#915da3] hover:bg-[#7e4f8d] transition-colors text-white py-3 px-8 text-center text-[15px]"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-[#915da3] text-[#915da3] hover:bg-purple-50 transition-colors py-3 px-8 text-center text-[15px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-[#f8f8f8] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0fa960] text-3xl font-light text-center mb-12 tracking-wide">
            Our Mission &amp; Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#8C52A1] mb-4">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                ),
                text: "To provide compassionate, reliable, and personalized home care that empowers our clients to live safely and independently in the comfort of their own homes.",
              },
              {
                title: "Our Vision",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#8C52A1] mb-4">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                ),
                text: "To be Ontario's most trusted home care agency, setting the standard for excellence through client-centered care and continuous improvement.",
              },
              {
                title: "Our Values",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#8C52A1] mb-4">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
                text: "Compassion, dignity, respect, and integrity guide everything we do. We treat every client as family and strive to make a meaningful difference every day.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 shadow-sm text-center flex flex-col items-center">
                {item.icon}
                <h3 className="text-[#8C52A1] text-xl font-light mb-4">{item.title}</h3>
                <p className="text-gray-500 font-light text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-white py-14 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Clients Served" },
            { value: "10+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction Focused" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[#0fa960] text-3xl md:text-4xl font-light mb-2">{stat.value}</p>
              <p className="text-gray-500 text-[14px] font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#8C52A1] py-14 px-6 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-light mb-3 tracking-wide">
          Ready to get started?
        </h2>
        <p className="text-white/70 text-[15px] font-light mb-8 max-w-xl mx-auto">
          Schedule a free initial consultation and let us help you find the right care solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/booking"
            className="bg-white text-[#8C52A1] hover:bg-gray-100 transition-colors py-3 px-8 text-[15px] font-medium"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white hover:bg-white/10 transition-colors py-3 px-8 text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
