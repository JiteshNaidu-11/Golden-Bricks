import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyClient from "./PropertyClient";
import {
  PROPERTIES_CATALOG,
  catalogToDetailRecord,
} from "@/lib/propertiesCatalog";

const properties = catalogToDetailRecord(PROPERTIES_CATALOG);

/** Required for `output: 'export'` — predeclare every dynamic `[slug]` at build time. */
export async function generateStaticParams() {
  return PROPERTIES_CATALOG.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties[slug];

  if (!property) return <div>Property not found</div>;

  return (
    <>
      <Header />
      <PropertyClient property={property} />
      <Footer />
    </>
  );
}
