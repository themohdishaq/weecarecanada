import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Schedule your home care service online. Choose from an initial consultation or a home visit.",
};

const bookingOptions = [
  {
    href: "/booking-calendar/initial-consultation",
    image:
      "https://static.wixstatic.com/media/2131ad_4a5afc5924694d7b9a984e9919fa9998~mv2.jpg/v1/fill/w_407,h_273,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/2131ad_4a5afc5924694d7b9a984e9919fa9998~mv2.jpg",
    alt: "Doctor conducting an online consultation",
    title: "Initial Consultation",
    description:
      "Take the first step towards finding the perfect home care solution for your loved ones. No commitment required.",
    duration: "1 hr",
    price: null,
    badge: "Free",
  },
  {
    href: "/booking-calendar/home-visit",
    image:
      "https://static.wixstatic.com/media/2131ad_617343b40f504b12aa5c1acd8c39f622~mv2.jpg/v1/fill/w_407,h_273,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/2131ad_617343b40f504b12aa5c1acd8c39f622~mv2.jpg",
    alt: "Nurse checking on an elderly patient at home",
    title: "Home Visit",
    description:
      "Experience the comfort and convenience of professional home care with a personalized home visit from our team.",
    duration: "1 hr",
    price: "$50",
    badge: null,
  },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#76cba4] py-8 px-6 text-center w-full shadow-sm">
        <h1 className="text-white text-3xl font-light tracking-wide">Book Online</h1>
        <p className="text-white/80 text-[15px] mt-2 font-light">
          Choose a service to get started
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-14 px-6 flex flex-col sm:flex-row justify-center gap-8">
        {bookingOptions.map((option) => (
          <div
            key={option.title}
            className="border border-gray-200 flex flex-col w-full sm:w-1/2 hover:shadow-xl transition-shadow group"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={option.image}
                alt={option.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {option.badge && (
                <span className="absolute top-3 right-3 bg-[#0fa960] text-white text-xs px-2.5 py-1 font-medium">
                  {option.badge}
                </span>
              )}
            </div>

            <div className="bg-[#f2f2f2] p-8 flex flex-col items-center text-center flex-grow">
              <h2 className="text-[#3ba683] text-[22px] font-light mb-3">{option.title}</h2>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-grow">
                {option.description}
              </p>

              <div className="mt-auto w-full flex flex-col items-center gap-1 mb-5">
                <p className="text-gray-500 text-[14px]">Duration: {option.duration}</p>
                {option.price ? (
                  <p className="text-gray-500 text-[14px]">Price: {option.price}</p>
                ) : (
                  <p className="text-[#0fa960] text-[14px] font-medium">Free of charge</p>
                )}
              </div>

              <Link
                href={option.href}
                className="w-full bg-[#915da3] hover:bg-[#7e4f8d] transition-colors text-white py-3 text-center text-[15px]"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance strip */}
      <div className="bg-[#f9f9f9] border-t border-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🔒", label: "Secure Booking", desc: "Your data is always safe with us" },
            { icon: "✓", label: "Easy Rescheduling", desc: "Change or cancel anytime" },
            { icon: "🏠", label: "Home Comfort", desc: "Care delivered in your own home" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-gray-800 text-[14px] font-medium mb-1">{item.label}</p>
              <p className="text-gray-500 text-[13px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
