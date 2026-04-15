import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Golden Brix Properties",
  description:
    "Reach Golden Brix Properties in Seawoods, Navi Mumbai. Phone, email, WhatsApp, and consultation requests for Mumbai & Navi Mumbai real estate.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
