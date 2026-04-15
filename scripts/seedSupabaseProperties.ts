import { createClient } from "@supabase/supabase-js";
import { PROPERTIES_CATALOG } from "@/lib/propertiesCatalog";

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function main() {
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  const supabase = createClient(url, key);

  const rows = PROPERTIES_CATALOG.map((p) => ({
    slug: p.slug,
    name: p.name,
    location: p.location,
    price: p.price,
    bhk: p.bhk,
    builder: p.builder,
    property_type: p.propertyType,
    possession: p.possession,
    overview: p.overview,
    highlights: (p.highlights ?? []) as unknown as Json,
    amenities: (p.amenities ?? []) as unknown as Json,
    size: p.size ?? null,
    hero_image: p.image ?? null,
    gallery_images: (p.images ?? []) as unknown as Json,
  }));

  // Upsert by slug so you can re-run safely.
  const { error } = await supabase.from("properties").upsert(rows, {
    onConflict: "slug",
  });

  if (error) throw error;
  process.stdout.write(`Upserted ${rows.length} properties into Supabase.\n`);
}

main().catch((err) => {
  process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});

