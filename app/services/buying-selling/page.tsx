"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import { dubaiImages } from "@/lib/images";
import {
  Building2,
  FileCheck,
  Handshake,
  Home,
  LineChart,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function BuyingSelling() {
  return (
    <PremiumServiceSubpage
      eyebrow="Buying & selling"
      heroTitle={
        <>
          Buying &{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            selling property
          </span>
        </>
      }
      heroSubtitle="End-to-end advisory for premium homes and investment-ready inventory across Mumbai and Navi Mumbai—structured, transparent, and discreet."
      heroImageSrc={dubaiImages.properties.propertySales}
      topCardsTitle="Property types we handle"
      topCards={[
        {
          key: "villas",
          Icon: Home,
          title: "Villas",
          description: "Signature villas with privacy, scale, and long-term rarity.",
        },
        {
          key: "townhouses",
          Icon: Building2,
          title: "Townhouses",
          description: "Low-rise luxury living with strong family usability.",
        },
        {
          key: "apartments",
          Icon: Building2,
          title: "Luxury apartments",
          description: "Sky homes with arrival experience, light, and layout quality.",
        },
        {
          key: "plots",
          Icon: MapPin,
          title: "Plots",
          description: "Strategic land positions for bespoke builds or portfolio plays.",
        },
      ]}
      splitBlocks={[
        {
          key: "discovery",
          Icon: LineChart,
          title: "Curated discovery & pricing clarity",
          description:
            "We translate your brief into a tight shortlist—then pressure-test every option with comparables, micro-market context, and a realistic pricing lens.",
          bullets: [
            "Requirement mapping with budget, timeline, and lifestyle fit",
            "Comparable transactions + absorption cues for confident offers",
            "Builder vs resale trade-offs explained without jargon",
            "Site visits planned like premium walkthroughs—not random tours",
          ] as const,
          why: "Clarity before commitment—so you never overpay for noise.",
          imageSrc: dubaiImages.properties.luxuryApartment,
        },
        {
          key: "deal",
          Icon: Handshake,
          title: "Negotiation & deal structuring",
          description:
            "We represent your interests with calm authority—structuring offers, inclusions, and milestones so the deal stays clean and defensible.",
          bullets: [
            "Offer strategy aligned to inventory heat and seller motivation",
            "Terms negotiation: inclusions, parking, payment milestones",
            "Risk flags surfaced early (delivery, quality, liquidity)",
            "Coordination with your lender and stakeholders to avoid delays",
          ] as const,
          why: "Better terms often hide in the details—not only the headline price.",
          imageSrc: dubaiImages.properties.propertySales,
        },
        {
          key: "legal",
          Icon: ShieldCheck,
          title: "Legal verification & documentation",
          description:
            "End-to-end legal verification ensuring secure and transparent transactions—approvals, agreements, and checkpoints reviewed with premium diligence.",
          bullets: [
            "Title, approvals, and project documentation sanity checks",
            "Agreement review with clear timelines and responsibilities",
            "Society / developer coordination where applicable",
            "Possession readiness and handover checklist alignment",
          ] as const,
          why: "Premium deals fail quietly on paperwork—we prevent that.",
          imageSrc: dubaiImages.properties.townhouse,
        },
        {
          key: "closure",
          Icon: FileCheck,
          title: "Transaction management to handover",
          description:
            "From token to keys, we keep execution disciplined—updates, follow-ups, and closure support that feels calm, premium, and accountable.",
          bullets: [
            "Milestone tracking across payments and documentation",
            "Snagging support and quality checks before acceptance",
            "Handover coordination with clear expectations",
            "Post-sale continuity for leasing or resale planning",
          ] as const,
          why: "A smooth finish protects value—and your peace of mind.",
          imageSrc: dubaiImages.properties.villa,
        },
      ]}
      whyTitle="Why clients choose Golden Brix for transactions"
      whySubtitle="A premium service is defined by fewer surprises, cleaner communication, and execution that respects your time."
      whyColumns={[
        {
          key: "transparent",
          Icon: ShieldCheck,
          title: "Transparent advisory",
          text: "Clear fees, honest trade-offs, and recommendations aligned to your goals—not ours.",
        },
        {
          key: "negotiation",
          Icon: Handshake,
          title: "Expert negotiation",
          text: "We secure stronger terms by preparing leverage, alternatives, and a disciplined offer path.",
        },
        {
          key: "endtoend",
          Icon: FileCheck,
          title: "End-to-end support",
          text: "From shortlist to handover, we coordinate stakeholders so momentum never stalls.",
        },
        {
          key: "network",
          Icon: Building2,
          title: "Verified inventory access",
          text: "Curated introductions to credible inventory across Mumbai & Navi Mumbai micro-markets.",
        },
      ]}
      showcaseTitle="Property showcase"
      showcaseItems={[
        {
          key: "villas",
          imageSrc: dubaiImages.properties.townhouse,
          title: "Luxury villas",
          description: "Premium villas in exclusive communities with strong lifestyle depth.",
        },
        {
          key: "apartments",
          imageSrc: dubaiImages.properties.luxuryApartment,
          title: "Luxury apartments",
          description: "High-rise residences where layout quality and views drive long-term value.",
        },
      ]}
      ctaHeadline="Ready to find your perfect property?"
      ctaSubline="Book a free consultation and receive a structured plan: shortlist approach, checks, and next steps—without pressure."
    />
  );
}
