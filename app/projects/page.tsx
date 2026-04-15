"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyListingCard from "@/components/PropertyListingCard";
import { PROPERTIES_CATALOG } from "@/lib/propertiesCatalog";
import Reveal from "@/components/motion/Reveal";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const [location, setLocation] = useState<string>("All");
  const [budget, setBudget] = useState<string>("All");

  const source = PROPERTIES_CATALOG.slice(0, 10);

  const locations = useMemo(() => {
    const set = new Set<string>();
    source.forEach((p) => set.add(p.location));
    return ["All", ...Array.from(set).sort()];
  }, [source]);

  const priceToCr = (priceText: string): number | null => {
    const t = priceText.replace(/,/g, "").toLowerCase();
    const m = t.match(/(\d+(?:\.\d+)?)/);
    if (!m) return null;
    const v = Number(m[1]);
    if (!Number.isFinite(v)) return null;
    if (t.includes("cr")) return v;
    if (t.includes("l")) return v / 100;
    return null;
  };

  const filtered = useMemo(() => {
    return source.filter((p) => {
      if (location !== "All" && p.location !== location) return false;
      if (budget !== "All") {
        const cr = priceToCr(`${p.price ?? ""}`);
        if (cr == null) return true;
        if (budget === "Under ₹1 Cr") return cr < 1;
        if (budget === "₹1–₹2 Cr") return cr >= 1 && cr < 2;
        if (budget === "₹2–₹5 Cr") return cr >= 2 && cr < 5;
        if (budget === "₹5 Cr+") return cr >= 5;
      }
      return true;
    });
  }, [source, location, budget]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-[#C5A24A] uppercase text-sm tracking-widest mb-3">
              Projects
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b2a]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Curated premium opportunities
            </h1>
            <p className="mt-4 text-[#0c1b2a]/70 text-base sm:text-lg leading-relaxed">
              Explore selected listings across Mumbai and Navi Mumbai. Each
              project opens a full detail page with gallery, amenities, and a
              site-visit CTA.
            </p>
          </Reveal>

          <div className="mb-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#C5A24A]/15 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-2 sm:gap-4 sm:p-5">
            <div className="min-w-0">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#001F3F]/70">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0c1b2a] shadow-sm outline-none transition focus:border-[#C5A24A]"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#001F3F]/70">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0c1b2a] shadow-sm outline-none transition focus:border-[#C5A24A]"
              >
                <option value="All">All</option>
                <option value="Under ₹1 Cr">Under ₹1 Cr</option>
                <option value="₹1–₹2 Cr">₹1–₹2 Cr</option>
                <option value="₹2–₹5 Cr">₹2–₹5 Cr</option>
                <option value="₹5 Cr+">₹5 Cr+</option>
              </select>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
            {filtered.map((property, idx) => (
              <li key={property.slug} className="min-w-0">
                <Reveal delay={0.02 * idx}>
                  <PropertyListingCard property={property} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

