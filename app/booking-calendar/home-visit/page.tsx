"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { format, isBefore, startOfDay, isWeekend } from "date-fns";
import { ChevronDown, Clock, DollarSign } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

const TIME_SLOTS = [
  "9:00 a.m.", "9:30 a.m.",
  "10:00 a.m.", "10:30 a.m.",
  "11:00 a.m.", "11:30 a.m.",
  "12:00 p.m.", "12:30 p.m.",
  "1:00 p.m.", "1:30 p.m.",
  "2:00 p.m.", "2:30 p.m.",
  "3:00 p.m.", "3:30 p.m.",
];

export default function HomeVisitPage() {
  const router = useRouter();
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showAllSlots, setShowAllSlots] = useState(false);

  const isDateDisabled = (date: Date) => isBefore(date, today) || isWeekend(date);

  const visibleSlots = showAllSlots ? TIME_SLOTS : TIME_SLOTS.slice(0, 8);
  const canProceed = !!selectedDate && !!selectedTime;

  const handleNext = () => {
    if (!canProceed) return;
    const params = new URLSearchParams({
      service: "Home Visit",
      date: format(selectedDate!, "MMMM d, yyyy"),
      time: selectedTime!,
      price: "$50",
    });
    router.push(`/booking-form?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Page header */}
      <div className="bg-[#76cba4] py-8 px-6 w-full shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
            <Link href="/booking" className="text-white/70 hover:text-white transition-colors">Book Online</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Home Visit</span>
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-light tracking-wide">Schedule Your Service</h1>
          <p className="text-white/70 text-[14px] mt-1">
            Choose a date and time that works for you
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Service summary strip */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 bg-purple-50 border border-purple-100 px-5 py-4 mb-8 text-[14px]">
          <span className="font-medium text-[#554971]">Home Visit</span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <Clock className="w-3.5 h-3.5 text-[#845f98]" />
            1 hour
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <DollarSign className="w-3.5 h-3.5 text-[#845f98]" />
            $50
          </span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Col 1: Calendar */}
          <div>
            <h2 className="text-[#845f98] text-lg font-light mb-4 pb-3 border-b border-[#d8cce0]">
              Select a Date
            </h2>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setSelectedTime(null);
                setShowAllSlots(false);
              }}
              disabled={isDateDisabled}
              fromDate={today}
              className="rounded-none p-0 w-full"
            />
          </div>

          {/* Col 2: Time Slots */}
          <div>
            <div className="flex justify-between items-center pb-3 border-b border-[#d8cce0] mb-5">
              <h2 className="text-[#845f98] text-lg font-light">Select a Time</h2>
              <span className="text-[12px] text-gray-400">EDT (Eastern)</span>
            </div>

            {!selectedDate ? (
              <div className="flex flex-col items-center justify-center py-10 text-center text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-3 text-gray-200">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <p className="text-[14px]">Select a date to see available times</p>
              </div>
            ) : (
              <div>
                <p className="text-[14px] text-gray-700 mb-4 font-medium">
                  {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </p>
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {visibleSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 text-[13px] transition-colors border ${
                        selectedTime === time
                          ? "bg-[#89599c] border-[#89599c] text-white"
                          : "bg-white border-gray-300 text-gray-700 hover:border-[#89599c] hover:text-[#89599c]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {TIME_SLOTS.length > 8 && (
                  <button
                    onClick={() => setShowAllSlots(!showAllSlots)}
                    className="text-[#89599c] text-[13px] underline underline-offset-2 hover:text-[#6a4c7a] transition-colors"
                  >
                    {showAllSlots ? "Show fewer times" : "Show more times"}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Col 3: Summary + Action */}
          <div>
            {selectedDate && (
              <div className="mb-6">
                <h2 className="text-[#845f98] text-lg font-light mb-4 pb-3 border-b border-[#d8cce0]">
                  Preferences
                </h2>
                <label className="block text-[#845f98] text-[13px] mb-2">Staff Member</label>
                <div className="w-full border border-gray-300 px-3 py-2.5 flex justify-between items-center text-gray-700 bg-white cursor-pointer hover:border-gray-400 transition-colors mb-4">
                  <span className="text-[14px]">Any staff member</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                </div>
              </div>
            )}

            <h2 className="text-[#845f98] text-lg font-light mb-4 pb-3 border-b border-[#d8cce0]">
              Booking Summary
            </h2>

            <div className="bg-gray-50 border border-gray-200 p-5 mb-5 space-y-3">
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-500">Service</span>
                <span className="text-gray-800 font-medium">Home Visit</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-500">Duration</span>
                <span className="text-gray-800">1 hour</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-500">Date</span>
                <span className="text-gray-800">
                  {selectedDate ? format(selectedDate, "MMM d, yyyy") : "—"}
                </span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-500">Time</span>
                <span className="text-gray-800">{selectedTime || "—"}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between text-[14px] font-medium">
                <span>Total</span>
                <span>$50</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`w-full py-3.5 text-[15px] transition-colors font-light ${
                canProceed
                  ? "bg-[#89599c] hover:bg-[#784d89] text-white cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {canProceed ? "Continue to Booking" : "Select date & time to continue"}
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-3 leading-relaxed">
              You can reschedule or cancel at any time.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
