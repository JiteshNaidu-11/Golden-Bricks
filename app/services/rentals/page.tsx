"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import { dubaiImages } from "@/lib/images";
import {
  Calendar,
  ClipboardList,
  Home,
  KeyRound,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function Rentals() {
  return (
    <PremiumServiceSubpage
      eyebrow="Rentals & leasing"
      heroTitle={
        <>
          Rentals &{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            leasing
          </span>
        </>
      }
      heroSubtitle="Premium leasing support for tenants and owners—curated options, verified documentation, and calm execution across Mumbai and Navi Mumbai."
      heroImageSrc={dubaiImages.properties.apartment}
      topCardsTitle="Rental types"
      topCards={[
        {
          key: "long",
          Icon: Calendar,
          title: "Long-term rentals",
          description:
            "Annual leases for families and professionals who value stability and premium upkeep.",
        },
        {
          key: "short",
          Icon: Calendar,
          title: "Short-term rentals",
          description:
            "Flexible monthly or quarterly stays—ideal for transitions and executive mobility.",
        },
        {
          key: "holiday",
          Icon: Home,
          title: "Premium short stays",
          description:
            "Curated short-stay options in high-demand pockets with quality-first presentation.",
        },
      ]}
      splitBlocks={[
        {
          key: "search",
          Icon: KeyRound,
          title: "Curated search & matching",
          description:
            "We translate your brief into a tight shortlist—budget, commute, building quality, and lifestyle fit—so you spend time only on serious options.",
          bullets: [
            "Requirement mapping with non-negotiables captured upfront",
            "Neighborhood + building quality checks beyond brochure photos",
            "Viewing routes planned for efficient decision-making",
            "Offer support for competitive pockets without overpaying",
          ] as const,
          why: "Less browsing, more precision—premium leasing starts with filtering.",
          imageSrc: dubaiImages.properties.apartment,
        },
        {
          key: "screening",
          Icon: ShieldCheck,
          title: "Tenant screening & agreements",
          description:
            "For owners: structured screening, documentation discipline, and agreements that protect your asset and rental income.",
          bullets: [
            "Background and reference checks aligned to owner risk appetite",
            "Contract drafting support with clear renewal and exit clauses",
            "Security deposit and handover documentation coordination",
            "Move-in readiness checklist for a premium first impression",
          ] as const,
          why: "The right tenant is an asset decision—not a rushed listing decision.",
          imageSrc: dubaiImages.properties.villa,
        },
        {
          key: "ops",
          Icon: ClipboardList,
          title: "Rent, renewals & compliance",
          description:
            "Operational continuity that keeps leases healthy—renewals, updates, and timely coordination so small issues never become expensive problems.",
          bullets: [
            "Rent collection rhythm and escalation protocols",
            "Lease renewals with market-aligned benchmarking",
            "Documentation updates and compliance reminders",
            "Owner reporting that stays concise and actionable",
          ] as const,
          why: "Premium ownership is predictable cashflow plus clean records.",
          imageSrc: dubaiImages.properties.modernVilla,
        },
        {
          key: "maintenance",
          Icon: Wrench,
          title: "Maintenance & inspections",
          description:
            "Coordinated upkeep with trusted vendors—so the property stays presentable, tenant-friendly, and long-term value protected.",
          bullets: [
            "Preventive maintenance planning and vendor coordination",
            "Periodic inspections with photo-backed updates",
            "Emergency triage with sensible escalation",
            "Move-out assessments aligned to deposit fairness",
          ] as const,
          why: "Well-maintained homes lease faster—and retain stronger yields.",
          imageSrc: dubaiImages.properties.luxuryApartment,
        },
      ]}
      whyTitle="Why our leasing experience feels premium"
      whySubtitle="We combine discretion, verification, and structured communication—so both sides move with confidence."
      whyColumns={[
        {
          key: "match",
          Icon: KeyRound,
          title: "Curated matching",
          text: "Shortlists built on real livability—not generic portal filters.",
        },
        {
          key: "trust",
          Icon: ShieldCheck,
          title: "Trust-first process",
          text: "Documentation discipline and transparent checkpoints reduce surprises.",
        },
        {
          key: "speed",
          Icon: Calendar,
          title: "Faster clarity",
          text: "Tight coordination keeps timelines moving without compromising checks.",
        },
        {
          key: "care",
          Icon: Wrench,
          title: "Asset care",
          text: "Maintenance handled like a premium product—responsive and accountable.",
        },
      ]}
      showcaseTitle="Available rental formats"
      showcaseItems={[
        {
          key: "apt",
          imageSrc: dubaiImages.properties.apartment,
          title: "Modern apartments",
          description: "Furnished and semi-furnished options in prime catchments.",
          meta: "Indicative: from ₹50,000/month",
        },
        {
          key: "villa",
          imageSrc: dubaiImages.properties.villa,
          title: "Family villas",
          description: "Spacious layouts for families prioritizing privacy and lifestyle.",
          meta: "Indicative: from ₹1.5L/month",
        },
      ]}
      ctaHeadline="Ready to find your perfect property?"
      ctaSubline="Get a free consultation—share your budget, commute, and timeline for a curated leasing plan."
    />
  );
}
