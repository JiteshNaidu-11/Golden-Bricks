"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyListingCard from "@/components/PropertyListingCard";
import {
  PROPERTIES_CATALOG,
  dedupeCatalogProperties,
} from "@/lib/propertiesCatalog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";

export default function AllPropertiesPage() {
  const [location, setLocation] = useState<string>("All");
  const [propertyType, setPropertyType] = useState<string>("All");
  const [budget, setBudget] = useState<string>("All");

  const { data: supabaseProps } = useSupabaseQuery(
    "properties:list",
    async (supabase) => {
      const { data, error } = await supabase
        .from("properties")
        .select(
          "slug,name,location,price,bhk,hero_image,builder,property_type,possession,overview,highlights,amenities,size,gallery_images",
        )
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map((r) => ({
        slug: r.slug,
        name: r.name,
        location: r.location,
        price: r.price ?? "",
        bhk: r.bhk ?? "",
        image: r.hero_image ?? "",
        images: Array.isArray(r.gallery_images) ? r.gallery_images : [],
        size: r.size ?? undefined,
        builder: r.builder ?? "",
        propertyType: r.property_type ?? "",
        possession: r.possession ?? "",
        overview: r.overview ?? "",
        highlights: Array.isArray(r.highlights) ? r.highlights : [],
        amenities: Array.isArray(r.amenities) ? r.amenities : [],
      }));
    },
  );

  // If Supabase isn't configured yet, keep using the catalog (real data).
  const source = useMemo(
    () =>
      dedupeCatalogProperties(
        supabaseProps?.length ? supabaseProps : PROPERTIES_CATALOG,
      ),
    [supabaseProps],
  );

  const locations = useMemo(() => {
    const set = new Set<string>();
    source.forEach((p) => set.add(p.location));
    return ["All", ...Array.from(set).sort()];
  }, [source]);

  const types = useMemo(() => {
    const set = new Set<string>();
    source.forEach((p) => set.add(p.propertyType));
    return ["All", ...Array.from(set).sort()];
  }, [source]);

  const priceToCr = (priceText: string): number | null => {
    // Tries to extract the first number and interpret it as Cr when possible.
    // Examples: "From ₹2.90 Cr* onwards", "₹82L – ₹1.9 Cr"
    const t = priceText.replace(/,/g, "").toLowerCase();
    const m = t.match(/(\d+(?:\.\d+)?)/);
    if (!m) return null;
    const v = Number(m[1]);
    if (!Number.isFinite(v)) return null;
    if (t.includes("cr")) return v;
    if (t.includes("l")) return v / 100; // 50L => 0.5 Cr
    return null;
  };

  const filtered = useMemo(() => {
    return source.filter((p) => {
      if (location !== "All" && p.location !== location) return false;
      if (propertyType !== "All" && p.propertyType !== propertyType) return false;
      if (budget !== "All") {
        const cr = priceToCr(`${p.price ?? ""}`);
        if (cr == null) return true; // keep item if we can't parse
        if (budget === "Under ₹1 Cr") return cr < 1;
        if (budget === "₹1–₹2 Cr") return cr >= 1 && cr < 2;
        if (budget === "₹2–₹5 Cr") return cr >= 2 && cr < 5;
        if (budget === "₹5 Cr+") return cr >= 5;
      }
      return true;
    });
  }, [source, location, propertyType, budget]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <header className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-[#C5A24A] uppercase text-sm tracking-widest mb-3">
              Our portfolio
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1b2a]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              All properties
            </h1>
            <p className="mt-4 text-[#0c1b2a]/70 text-base sm:text-lg leading-relaxed">
              Explore every Golden Brix listing across Navi Mumbai.
              Tap a card for full details.
            </p>
          </header>

          <div className="mb-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#C5A24A]/15 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:gap-4 sm:p-5">
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
                Property type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0c1b2a] shadow-sm outline-none transition focus:border-[#C5A24A]"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
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
            {filtered.map((property) => (
              <li key={property.slug} className="min-w-0">
                <PropertyListingCard property={property} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
