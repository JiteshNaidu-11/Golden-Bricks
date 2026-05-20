import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Golden Brix Realty",
  description:
    "Reach Golden Brix Realty in Seawoods, Navi Mumbai. Phone, email, WhatsApp, and consultation requests for Navi Mumbai real estate.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
