import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyClient from "./PropertyClient";
import {
  PROPERTIES_CATALOG,
  catalogToDetailRecord,
  deriveBedroomsCardValue,
  deriveBathroomsCardValue,
} from "@/lib/propertiesCatalog";
import { createClient } from "@supabase/supabase-js";

const properties = catalogToDetailRecord(PROPERTIES_CATALOG);

/** Required for `output: 'export'` — predeclare every dynamic `[slug]` at build time. */
export async function generateStaticParams() {
  return PROPERTIES_CATALOG.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

async function tryFetchSupabaseProperty(slug: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return null;
  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("properties")
    .select(
      "slug,name,location,price,bhk,hero_image,builder,property_type,possession,overview,highlights,amenities,size,gallery_images",
    )
    .eq("slug", slug)
    .maybeSingle();
  if (error || !data) return null;
  return {
    slug: data.slug,
    name: data.name,
    location: data.location,
    price: data.price ?? "",
    bhk: data.bhk ?? "",
    builder: data.builder ?? "",
    propertyType: data.property_type ?? "",
    possession: data.possession ?? "",
    overview: data.overview ?? "",
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    amenities: Array.isArray(data.amenities) ? data.amenities : [],
    image: data.hero_image ?? "",
    images: Array.isArray(data.gallery_images) ? data.gallery_images : [],
    size: data.size?.trim() ? data.size : "As per project plan",
    beds: deriveBedroomsCardValue(data.bhk ?? "", data.property_type ?? ""),
    baths: deriveBathroomsCardValue(data.bhk ?? "", data.property_type ?? ""),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = (await tryFetchSupabaseProperty(slug)) ?? properties[slug];

  if (!property) return <div>Property not found</div>;

  return (
    <>
      <Header />
      <PropertyClient property={property} />
      <Footer />
    </>
  );
}
