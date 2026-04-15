import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyClient from "@/app/property/[slug]/PropertyClient";
import { PROPERTIES_CATALOG, catalogToDetailRecord } from "@/lib/propertiesCatalog";

const properties = catalogToDetailRecord(PROPERTIES_CATALOG);

export async function generateStaticParams() {
  return PROPERTIES_CATALOG.slice(0, 10).map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = properties[params.slug];
  if (!property) return <div>Project not found</div>;
  return (
    <>
      <Header />
      <PropertyClient property={{ ...property, slug: params.slug }} />
      <Footer />
    </>
  );
}

