import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import type { CatalogProperty } from "@/lib/propertiesCatalog";

type Props = {
  property: CatalogProperty;
};

export default function PropertyListingCard({ property }: Props) {
  const fallbackSrc = "/properties/sai-world-one.jpg";

  return (
    <Link
      href={`/property/${property.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A24A] focus-visible:ring-offset-2 rounded-[18px] sm:rounded-[20px]"
    >
      <article
        className="flex h-full max-w-full flex-col overflow-hidden rounded-[18px] sm:rounded-[20px] border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out will-change-transform hover:border-[#C5A24A]/20 hover:shadow-2xl sm:group-hover:-translate-y-1.5 sm:group-hover:scale-[1.02]"
      >
        {/* Image */}
        <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[260px]">
          <img
            src={property.image || fallbackSrc}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackApplied === "1") return;
              img.dataset.fallbackApplied = "1";
              img.src = fallbackSrc;
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[2px]"
            aria-hidden
          />

          <span className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full bg-[#C5A24A] px-3.5 py-1.5 text-xs font-semibold leading-snug text-white shadow-md ring-1 ring-white/20 line-clamp-2 sm:left-4 sm:top-4 sm:px-4">
            {property.bhk}
          </span>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
            <h3
              className="text-xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-2xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {property.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {property.location}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col border-t border-gray-100 bg-white p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-2.5 text-xs text-[#0c1b2a]/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#0c1b2a]/70">
              <MapPin
                className="h-3.5 w-3.5 shrink-0 text-[#C5A24A]"
                strokeWidth={2}
                aria-hidden
              />
              <span className="line-clamp-1">{property.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-[#0c1b2a]/70">
              <Building2
                className="h-3.5 w-3.5 shrink-0 text-[#C5A24A]"
                strokeWidth={2}
                aria-hidden
              />
              <span className="line-clamp-1">{property.propertyType}</span>
            </span>
          </div>

          <p className="text-lg font-bold tracking-tight text-[#C5A24A] sm:text-xl">
            {property.price}
          </p>

          <span className="mt-5 inline-flex w-full min-h-[48px] items-center justify-center rounded-xl gold-gradient px-6 py-3 text-sm font-bold text-[#001F3F] shadow-md transition-all duration-300 ease-in-out sm:group-hover:scale-[1.02] sm:group-hover:shadow-lg sm:group-hover:brightness-95 active:scale-[0.98] sm:min-h-0 sm:py-2.5">
            View Details
          </span>
        </div>
      </article>
    </Link>
  );
}
