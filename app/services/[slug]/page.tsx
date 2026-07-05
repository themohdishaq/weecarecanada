import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceList from "@/components/services/Service";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

export async function generateStaticParams() {
  return ServiceList.map((s) => ({ slug: slugify(s.heading) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = ServiceList.find((s) => slugify(s.heading) === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.heading,
    description: service.subtitle,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = ServiceList.find((s) => slugify(s.heading) === params.slug);
  if (!service) notFound();

  const related = ServiceList.filter((s) => slugify(s.heading) !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Breadcrumb header */}
      <div className="bg-[#76cba4] py-8 px-6 w-full shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-sm">
          <Link href="/services" className="text-white/80 hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-white/50">/</span>
          <h1 className="text-white font-light text-3xl tracking-wide w-full mt-1">
            {service.heading}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.heading}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-light text-[#3ba683] mb-4 leading-snug">
              {service.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                href="/booking"
                className="bg-[#915da3] hover:bg-[#7e4f8d] transition-colors text-white py-3 px-8 text-center text-[15px]"
              >
                Book Now
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

        {/* Related services */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h3 className="text-[#3ba683] text-2xl font-light mb-8">Other Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  key={s.heading}
                  href={`/services/${slugify(s.heading)}`}
                  className="border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.heading}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 bg-[#f2f2f2]">
                    <h4 className="text-[#3ba683] text-[15px] font-light">{s.heading}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
