import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-[#76cba4] text-[80px] md:text-[120px] font-extralight leading-none mb-4 select-none">
        404
      </p>
      <h1 className="text-[#554971] text-2xl md:text-3xl font-light mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-400 text-[15px] max-w-md mb-10 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#8C52A1] text-white px-8 py-3 hover:bg-[#714083] transition-colors text-[15px] font-light"
        >
          Go Home
        </Link>
        <Link
          href="/services"
          className="border border-[#8C52A1] text-[#8C52A1] px-8 py-3 hover:bg-purple-50 transition-colors text-[15px] font-light"
        >
          Our Services
        </Link>
        <Link
          href="/contact"
          className="border border-gray-300 text-gray-600 px-8 py-3 hover:bg-gray-50 transition-colors text-[15px] font-light"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
