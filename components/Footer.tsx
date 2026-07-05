import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Book Online", href: "/booking" },
];

const serviceLinks = [
  { label: "Respite Care", href: "/services/respite-care" },
  { label: "Companionship Support", href: "/services/companionship-support" },
  { label: "Personalized Care", href: "/services/personalized-care" },
  { label: "Medication Reminder", href: "/services/medication-reminder" },
  { label: "Dementia Care", href: "/services/dementia-care" },
  { label: "Fall Prevention", href: "/services/fall-prevention" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a2e] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <div className="h-12 w-12 shrink-0">
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
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-none tracking-tight text-[#75C8A4]">WEECARE</span>
              <span className="text-xs font-bold tracking-[0.35em] text-[#e57373] mt-0.5">CANADA</span>
            </div>
          </Link>
          <p className="text-gray-400 text-[14px] leading-relaxed mb-6 max-w-xs">
            Compassionate, personalized home care for seniors and individuals with disabilities across Ontario.
          </p>
          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C52A1] transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C52A1] transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8C52A1] transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[13px] uppercase tracking-widest text-gray-400 mb-5 font-medium">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-[14px] hover:text-[#75C8A4] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[13px] uppercase tracking-widest text-gray-400 mb-5 font-medium">Our Services</h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 text-[14px] hover:text-[#75C8A4] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] uppercase tracking-widest text-gray-400 mb-5 font-medium">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#75C8A4] shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-gray-300 text-[14px] leading-relaxed">
                203 Max Becker Drive<br />Kitchener, Ontario N2E 4G2
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#75C8A4] shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+16475615549" className="text-gray-300 text-[14px] hover:text-[#75C8A4] transition-colors">
                +1 647-561-5549
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#75C8A4] shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:CEO@weecarecanada.com" className="text-gray-300 text-[14px] hover:text-[#75C8A4] transition-colors break-all">
                CEO@weecarecanada.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/booking"
              className="inline-block bg-[#8C52A1] hover:bg-[#714083] transition-colors text-white text-[14px] px-5 py-2.5"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-gray-500">
          <p>© {new Date().getFullYear()} WeeCare Canada. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
