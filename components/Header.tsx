"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
  { label: "BOOKING", href: "/booking" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white w-full shadow-sm flex flex-col">
      {/* Top Banner */}
      <div className="bg-[#8C52A1] w-full py-2.5 px-4 flex justify-center items-center">
        <div className="flex items-center gap-2 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 shrink-0"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span className="text-sm md:text-[15px] font-sans font-light tracking-wide text-center">
            Your Trusted Partner in Personalized Home Care Services. Contact us to discuss your care needs and arrange a consultation today.
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15 L10 40 L15 48 L50 25 L85 48 L90 40 Z" fill="#007B4D" />
              <path d="M15 45 C 15 90, 40 100, 50 100 C 60 100, 85 90, 85 45 C 75 65, 60 75, 50 75 C 40 75, 25 65, 15 45 Z" fill="#B71C1C" />
              <path d="M22 50 C 22 82, 40 92, 50 92 C 60 92, 78 82, 78 50 C 70 65, 58 70, 50 70 C 42 70, 30 65, 22 50 Z" fill="white" />
              <circle cx="38" cy="45" r="7" fill="#007B4D" />
              <circle cx="62" cy="45" r="7" fill="#007B4D" />
              <rect x="31" y="55" width="14" height="22" rx="4" fill="#007B4D" />
              <rect x="55" y="55" width="14" height="22" rx="4" fill="#007B4D" />
              <path d="M50 63 C 50 63 44 57 44 52 C 44 49 47 47 50 50 C 53 47 56 49 56 52 C 56 57 50 63 50 63 Z" fill="#B71C1C" />
            </svg>
          </div>
          <div className="flex flex-col pt-1">
            <span className="font-sans text-3xl font-bold leading-none tracking-tight text-[#007B4D]">WEECARE</span>
            <span className="mt-1 font-sans text-sm font-bold leading-none tracking-[0.35em] text-[#B71C1C]">CANADA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`font-sans text-[15px] transition-colors hover:text-[#84438b] ${
                  isActive ? "text-[#84438b]" : "text-gray-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Book Now CTA */}
        <div className="hidden items-center md:flex">
          <Link
            href="/booking"
            className="flex items-center gap-2 bg-[#84438b] text-white px-5 py-2 text-sm font-sans hover:bg-[#6d3675] transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-6 py-4 shadow-inner md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => {
              const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-base ${isActive ? "text-[#84438b] font-medium" : "text-gray-700"}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <hr className="border-gray-100 my-2" />
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="bg-[#84438b] text-white text-center py-2.5 font-sans text-base"
            >
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
