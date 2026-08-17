"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent, useState } from "react";

const OfficeMap = dynamic(() => import("@/components/OfficeMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center rounded-xl">
      <p className="text-gray-400 text-sm">Loading map…</p>
    </div>
  ),
});

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#76cba4] py-8 px-6 text-center w-full shadow-sm">
        <h1 className="text-white text-3xl font-light tracking-wide">Contact Us</h1>
        <p className="text-white/80 text-[15px] mt-2 font-light">
          We&apos;d love to hear from you
        </p>
      </div>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Info + Form */}
            <div>
              <h2 className="text-[#8C52A1] text-2xl font-light mb-8">Get In Touch</h2>

              {/* Contact info cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <a
                  href="https://maps.google.com/?q=203+Max+Becker+Drive+Kitchener+Ontario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-5 bg-[#f8f8f8] hover:bg-purple-50 transition-colors rounded-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8C52A1]/10 flex items-center justify-center mb-3 group-hover:bg-[#8C52A1]/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#8C52A1]">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-[#8C52A1] text-[13px] font-medium mb-1">Address</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">203 Max Becker Dr, Kitchener ON</p>
                </a>

                <a
                  href="tel:+16475615549"
                  className="flex flex-col items-center text-center p-5 bg-[#f8f8f8] hover:bg-purple-50 transition-colors rounded-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8C52A1]/10 flex items-center justify-center mb-3 group-hover:bg-[#8C52A1]/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#8C52A1]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p className="text-[#8C52A1] text-[13px] font-medium mb-1">Phone</p>
                  <p className="text-gray-500 text-[13px]">+1 647-561-5549</p>
                </a>

                <a
                  href="mailto:CEO@weecarecanada.com"
                  className="flex flex-col items-center text-center p-5 bg-[#f8f8f8] hover:bg-purple-50 transition-colors rounded-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8C52A1]/10 flex items-center justify-center mb-3 group-hover:bg-[#8C52A1]/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#8C52A1]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="text-[#8C52A1] text-[13px] font-medium mb-1">Email</p>
                  <p className="text-gray-500 text-[13px] break-all">CEO@weecarecanada.com</p>
                </a>
              </div>

              {/* Contact form */}
              <h3 className="text-[#8C52A1] text-xl font-light mb-6">Send Us a Message</h3>
              <form className="relative space-y-5" onSubmit={handleSubmit}>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contactWebsite">Website</label>
                  <input id="contactWebsite" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactFirstName" className="block text-[13px] text-gray-500 mb-2 uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      id="contactFirstName"
                      name="firstName"
                      required
                      maxLength={80}
                      autoComplete="given-name"
                      placeholder="Jane"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#8C52A1] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactLastName" className="block text-[13px] text-gray-500 mb-2 uppercase tracking-wide">Last Name</label>
                    <input
                      type="text"
                      id="contactLastName"
                      name="lastName"
                      required
                      maxLength={80}
                      autoComplete="family-name"
                      placeholder="Doe"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#8C52A1] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-[13px] text-gray-500 mb-2 uppercase tracking-wide">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#8C52A1] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-[13px] text-gray-500 mb-2 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="phone"
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="+1 (647) 000-0000"
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#8C52A1] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-[13px] text-gray-500 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={4}
                    required
                    maxLength={5000}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#8C52A1] transition-colors resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex-1 sm:flex-none sm:px-10 py-3 bg-[#8C52A1] text-white hover:bg-[#714083] transition-colors text-[15px] font-light disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  <Link
                    href="/booking"
                    className="flex-1 sm:flex-none sm:px-10 py-3 border border-[#8C52A1] text-[#8C52A1] hover:bg-purple-50 transition-colors text-[15px] text-center font-light"
                  >
                    Book Instead
                  </Link>
                </div>

                <div aria-live="polite" className="min-h-6 text-sm">
                  {status === "success" && (
                    <p className="text-green-700">Thank you. Your message has been sent.</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>

            {/* Right: Map */}
            <div className="flex flex-col">
              <h2 className="text-[#8C52A1] text-2xl font-light mb-8">Find Our Office</h2>
               <div className="h-[360px] overflow-hidden rounded-xl shadow-lg md:h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5689.288604665934!2d-80.50967597145795!3d43.40390823306172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf5449bf12f69%3A0x8840ae0e51c83bed!2sWEE%20CARE%20CANADA%20INC!5e0!3m2!1sen!2s!4v1786988916581!5m2!1sen!2s"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="WEE CARE CANADA INC office location"
                />
              </div>
              <p className="text-gray-400 text-[13px] mt-3 text-center">
                203 Max Becker Drive, Kitchener, Ontario N2E 4G2
              </p>
              <div className="mt-4 bg-[#f8f8f8] p-4 rounded-sm text-[13px] text-gray-500 leading-relaxed">
                <p className="font-medium text-gray-700 mb-1">Office Hours</p>
                <p>Monday – Friday: 9:00 AM – 5:00 PM (EDT)</p>
                <p>Saturday: 10:00 AM – 2:00 PM (EDT)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
