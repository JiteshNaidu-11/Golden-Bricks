"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyListingCard from "@/components/PropertyListingCard";
import { PROPERTIES_CATALOG } from "@/lib/propertiesCatalog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AllPropertiesPage() {
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
              Explore every Golden Brix listing across Mumbai and Navi Mumbai.
              Tap a card for full details.
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
            {PROPERTIES_CATALOG.map((property) => (
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
