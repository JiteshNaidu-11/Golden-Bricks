"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Bath,
  Bed,
  Square,
  Building2,
  CheckCircle,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";

type Property = {
  slug?: string;
  name: string;
  location: string;
  price: string;
  bhk: string;
  size: string;
  beds: string;
  baths: string;
  image: string;
  /** Additional photos (hero `image` is excluded from grid when duplicated). */
  images?: string[];

  overview?: string;
  description?: string;
  amenities?: string[];
  highlights?: string[];
};

function statLine(value: string | undefined, fallback: string): string {
  const t = value?.trim() ?? "";
  if (t && t !== "—" && t !== "–" && t !== "-") return t;
  return fallback.trim() || "Details on request";
}

export default function PropertyClient({ property }: { property: Property }) {
  const galleryImages =
    property.images?.filter((src) => src !== property.image) ?? [];

  const lead = useLeadSubmit();
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadMessage, setLeadMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f3] via-[#f5f2eb] to-[#ece8df] text-[#0c1b2a]">
      {/* Top spacing below fixed header */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to featured properties
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#C5A24A]/20 ring-1 ring-black/5"
              >
                <div className="relative aspect-[21/10] sm:aspect-[21/9] w-full min-h-[220px] sm:min-h-[320px]">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1b2a]/75 via-[#0c1b2a]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-[#EBD181] text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">
                    Golden Brix · Featured listing
                  </p>
                  <h1
                    className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {property.name}
                  </h1>
                  <p className="mt-3 flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <MapPin size={18} className="text-[#EBD181] shrink-0" />
                    {property.location}
                  </p>
                </div>
              </motion.div>

              {galleryImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="rounded-2xl border border-[#C5A24A]/15 bg-white/90 p-4 sm:p-5 shadow-md"
                >
                  <h2 className="text-lg font-semibold text-[#0c1b2a] mb-3 sm:mb-4">
                    Project gallery
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    {galleryImages.map((src, i) => (
                      <a
                        key={`${src}-${i}`}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#C5A24A]/20 bg-gray-100 shadow-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#C5A24A]"
                      >
                        <img
                          src={src}
                          alt={`${property.name} — view ${i + 2}`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Starting from</p>
                  <p className="text-2xl sm:text-3xl font-semibold gold-gradient-text">
                    {property.price}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      undefined,
                      `Hi, I'd like more information about ${property.name} (${property.location}).`,
                    )
                  }
                  className="px-6 py-3 rounded-xl gold-gradient text-[#001F3F] font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  WhatsApp us about this project
                </button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    icon: Square,
                    label: "Area",
                    value: statLine(property.size, "As per project plan"),
                  },
                  {
                    icon: Bed,
                    label: "Bedrooms",
                    value: statLine(property.beds, property.bhk),
                  },
                  {
                    icon: Bath,
                    label: "Bathrooms",
                    value: statLine(
                      property.baths,
                      "Premium specs · per floor plan",
                    ),
                  },
                  {
                    icon: Building2,
                    label: "Offering",
                    value: statLine(property.bhk, property.name),
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#C5A24A]/15 shadow-sm hover:border-[#C5A24A]/35 transition-colors"
                  >
                    <Icon className="text-[#C5A24A] w-5 h-5 mb-2" />
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="font-semibold text-[#0c1b2a] text-sm sm:text-base leading-snug">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {property.overview && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100/80"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-[#C5A24A]" />
                    <h2 className="text-xl font-semibold text-[#0c1b2a]">
                      Overview
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base whitespace-pre-line">
                    {property.overview}
                  </p>
                </motion.div>
              )}

              {property.highlights && property.highlights.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100/80">
                  <h2 className="text-xl font-semibold text-[#0c1b2a] mb-5">
                    Project highlights
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {property.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-700 text-sm sm:text-[15px] leading-snug"
                      >
                        <CheckCircle
                          className="text-[#C5A24A] shrink-0 mt-0.5"
                          size={18}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {property.amenities && property.amenities.length > 0 && (
                <div className="bg-[#0c1b2a] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#C5A24A]/25">
                  <h2 className="text-xl font-semibold mb-5 text-[#EBD181]">
                    Amenities
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {property.amenities.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white/90 flex items-start gap-2"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#C5A24A] shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar enquiry */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="relative rounded-2xl bg-white p-6 sm:p-7 shadow-xl border border-[#C5A24A]/20 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
                  <h3
                    className="text-xl font-semibold text-[#0c1b2a] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Enquire now
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Share your details and we&apos;ll get back to you about{" "}
                    <span className="font-medium text-[#0c1b2a]">
                      {property.name}
                    </span>
                    .
                  </p>

                  <form
                    className="space-y-3"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        await lead.submit({
                          source: "property_sidebar",
                          page: typeof window !== "undefined" ? window.location.pathname : undefined,
                          name: leadName,
                          email: leadEmail,
                          phone: leadPhone,
                          location: property.location,
                          property_slug: property.slug ?? undefined,
                          message:
                            leadMessage ||
                            `Interested in ${property.name} (${property.location})`,
                        });
                        alert("Thank you! We will contact you shortly.");
                        setLeadName("");
                        setLeadEmail("");
                        setLeadPhone("");
                        setLeadMessage("");
                      } catch (err) {
                        alert(err instanceof Error ? err.message : "Something went wrong.");
                      }
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      required
                      autoComplete="name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A24A]/40 focus:border-[#C5A24A]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A24A]/40 focus:border-[#C5A24A]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      required
                      autoComplete="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A24A]/40 focus:border-[#C5A24A]"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      value={leadMessage}
                      onChange={(e) => setLeadMessage(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A24A]/40 focus:border-[#C5A24A] resize-y min-h-[100px]"
                    />
                    <button
                      type="submit"
                      disabled={lead.loading}
                      className="w-full text-center gold-gradient text-[#001F3F] py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {lead.loading ? "Sending…" : "Submit enquiry"}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          undefined,
                          `Hi, I'd like more information about ${property.name} (${property.location}).`,
                        )
                      }
                      className="w-full text-center rounded-xl border border-[#C5A24A]/35 py-3 text-sm font-semibold text-[#0c1b2a] transition hover:bg-[#C5A24A]/10"
                    >
                      Chat on WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
