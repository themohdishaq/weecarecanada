"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, CheckCircle } from "lucide-react";
import Link from "next/link";

const CANADIAN_PROVINCES = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Nova Scotia", "Ontario",
  "Prince Edward Island", "Quebec", "Saskatchewan",
  "Northwest Territories", "Nunavut", "Yukon",
];

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[13px] text-gray-500 uppercase tracking-wide mb-2">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-gray-200 px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#89599c] transition-colors bg-white";

function BookingFormContent() {
  const params = useSearchParams();
  const service = params.get("service") || "Home Visit";
  const date = params.get("date") || "";
  const time = params.get("time") || "";
  const price = params.get("price") || "$50";
  const staffMember = params.get("staffMember") || "Any staff member";
  const isFree = price.toLowerCase() === "free";

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "Canada",
    streetAddress: "",
    city: "",
    province: "Ontario",
    postalCode: "",
    message: "",
    website: "", // honeypot — real users never see or fill this
  });

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <CheckCircle className="w-16 h-16 text-[#0fa960] mb-6" />
        <h2 className="text-2xl text-[#554971] font-light mb-3">Booking Confirmed!</h2>
        <p className="text-gray-500 text-[15px] mb-2">
          Thank you. We&apos;ve received your booking for <strong>{service}</strong>.
        </p>
        {date && time && (
          <p className="text-gray-500 text-[15px] mb-8">
            {date} at {time}
          </p>
        )}
        <p className="text-gray-400 text-[14px] mb-8">
          A confirmation will be sent to your email. Our team will reach out to confirm your appointment.
        </p>
        <Link
          href="/"
          className="bg-[#8C52A1] text-white px-8 py-3 hover:bg-[#714083] transition-colors text-[15px]"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Page header */}
      <div className="bg-[#76cba4] py-8 px-6 w-full shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
            <Link href="/booking" className="text-white/70 hover:text-white transition-colors">Book Online</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Your Details</span>
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-light tracking-wide">Complete Your Booking</h1>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="bg-white border-b border-gray-100 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3 text-[13px]">
          <span className="text-[#0fa960] font-medium flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#0fa960] text-white text-[11px] flex items-center justify-center">✓</span>
            Choose Service
          </span>
          <span className="text-gray-300">—</span>
          <span className="text-[#0fa960] font-medium flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#0fa960] text-white text-[11px] flex items-center justify-center">✓</span>
            Select Time
          </span>
          <span className="text-gray-300">—</span>
          <span className="text-[#8C52A1] font-medium flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#8C52A1] text-white text-[11px] flex items-center justify-center">3</span>
            Your Details
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">

          {/* Left: Form */}
          <form
            className="relative space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              setErrorMessage(null);

              try {
                const bookingData = {
                  service,
                  date,
                  time,
                  price,
                  staffMember,
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
                  phoneNumber: formData.phoneNumber,
                  country: formData.country,
                  streetAddress: formData.streetAddress,
                  city: formData.city,
                  province: formData.province,
                  postalCode: formData.postalCode,
                  message: formData.message,
                  website: formData.website,
                };

                const response = await fetch("/api/bookings/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(bookingData),
                });

                if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(errorData.error || "Failed to submit booking");
                }

                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              } catch (error: any) {
                console.error("Booking submission error:", error);
                setErrorMessage(error.message || "Something went wrong. Please try again.");
              } finally {
                setIsLoading(false);
              }
            }}
          >
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="bookingWebsite">Website</label>
              <input
                id="bookingWebsite"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            {/* Client details */}
            <div>
              <h2 className="text-[#554971] text-xl font-light mb-6 pb-3 border-b border-gray-100">
                Client Details
              </h2>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name" required>
                    <input 
                      type="text" 
                      required 
                      placeholder="Jane" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={inputCls} 
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <input 
                      type="text" 
                      required 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={inputCls} 
                    />
                  </Field>
                </div>

                <Field label="Email" required>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputCls} 
                  />
                </Field>

                <Field label="Phone Number">
                  <div className="flex border border-gray-200 focus-within:border-[#89599c] transition-colors">
                    <div className="flex items-center px-3 border-r border-gray-200 bg-gray-50 shrink-0">
                      <span className="text-lg mr-1" role="img" aria-label="Canadian flag">🇨🇦</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="+1 (647) 000-0000"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 text-[15px] text-gray-800 focus:outline-none bg-white"
                    />
                  </div>
                </Field>
              </div>
            </div>

            {/* Address details */}
            <div>
              <h2 className="text-[#554971] text-xl font-light mb-6 pb-3 border-b border-gray-100">
                Service Address
              </h2>

              <div className="space-y-5">
                <Field label="Country" required>
                  <div className="relative border border-gray-200 focus-within:border-[#89599c] transition-colors">
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 text-[15px] text-gray-800 appearance-none focus:outline-none bg-white"
                    >
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                  </div>
                </Field>

                <Field label="Street Address" required>
                  <input 
                    type="text" 
                    required 
                    placeholder="123 Main Street" 
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className={inputCls} 
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="City" required>
                    <input 
                      type="text" 
                      required 
                      placeholder="Kitchener" 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={inputCls} 
                    />
                  </Field>
                  <Field label="Province" required>
                    <div className="relative border border-gray-200 focus-within:border-[#89599c] transition-colors">
                      <select 
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full px-4 py-3 text-[15px] text-gray-800 appearance-none focus:outline-none bg-white"
                      >
                        {CANADIAN_PROVINCES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                    </div>
                  </Field>
                </div>

                <Field label="Postal Code" required>
                  <input 
                    type="text" 
                    required 
                    placeholder="N2E 4G2" 
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className={inputCls} 
                    style={{ maxWidth: "180px" }} 
                  />
                </Field>
              </div>
            </div>

            {/* Additional info */}
            <div>
              <h2 className="text-[#554971] text-xl font-light mb-6 pb-3 border-b border-gray-100">
                Additional Information
              </h2>
              <Field label="Message">
                <textarea
                  rows={4}
                  placeholder="Any special requests, medical conditions, or information we should know about…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputCls} resize-y`}
                />
              </Field>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 p-4 rounded text-red-700 text-[14px]">
                ⚠️ {errorMessage}
              </div>
            )}

            {/* Mobile booking summary (shown above submit on small screens) */}
            <div className="lg:hidden bg-gray-50 border border-gray-200 p-5 space-y-3">
              <h3 className="text-[#554971] text-base font-light border-b border-gray-200 pb-3 mb-3">Booking Summary</h3>
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">{service}</span>
              </div>
              {date && time && (
                <div className="flex justify-between text-[14px]">
                  <span className="text-gray-500">When</span>
                  <span className="text-right">{date}<br />{time}</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-3 flex justify-between text-[14px] font-medium">
                <span>Total</span>
                <span className={isFree ? "text-[#0fa960]" : ""}>{isFree ? "Free" : price}</span>
              </div>
            </div>

            <div>
              <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">
                By completing your booking, you agree to our terms of service and consent to receive appointment-related notifications by phone and email.
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 text-[16px] font-light transition-colors ${
                  isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#8C52A1] hover:bg-[#714083] text-white cursor-pointer"
                }`}
              >
                {isLoading ? "Submitting your booking..." : "Confirm Booking"}
              </button>
            </div>
          </form>

          {/* Right: Sticky summary (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-white border border-gray-200 shadow-sm">
              <div className="bg-[#554971] px-6 py-4">
                <h2 className="text-white font-light text-lg">Booking Summary</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-1">Service</p>
                  <p className="text-gray-800 font-medium">{service}</p>
                </div>

                {date && time && (
                  <div>
                    <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-1">Date & Time</p>
                    <p className="text-gray-800">{date}</p>
                    <p className="text-gray-600 text-[14px]">{time}</p>
                  </div>
                )}

                <div>
                  <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-1">Duration</p>
                  <p className="text-gray-800">1 hour</p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Total Due</p>
                  <p className={`text-xl font-light ${isFree ? "text-[#0fa960]" : "text-gray-800"}`}>
                    {isFree ? "Free" : price}
                  </p>
                </div>

                {isFree && (
                  <p className="text-[12px] text-[#0fa960] bg-green-50 px-3 py-2 rounded-sm">
                    ✓ No payment required for your initial consultation
                  </p>
                )}

                <div className="border-t border-gray-100 pt-4 text-[12px] text-gray-400 space-y-1.5">
                  <p>✓ Free cancellation up to 24 hours before</p>
                  <p>✓ Confirmation sent by email</p>
                  <p>✓ Secure &amp; private</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function BookingFormPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#8C52A1] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-400 text-[14px]">Loading…</p>
        </div>
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  );
}
