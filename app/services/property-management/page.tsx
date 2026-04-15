"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import { dubaiImages } from "@/lib/images";
import {
  ClipboardList,
  DollarSign,
  FileText,
  Globe,
  Home,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export default function PropertyManagement() {
  return (
    <PremiumServiceSubpage
      eyebrow="Property management"
      heroTitle={
        <>
          Property{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            management
          </span>
        </>
      }
      heroSubtitle="Premium care for owners who want predictable upkeep, quality tenants, and reporting that respects your time—across Mumbai and Navi Mumbai."
      heroImageSrc={dubaiImages.properties.modernVilla}
      splitBlocks={[
        {
          key: "snag",
          Icon: Wrench,
          title: "Snagging, upkeep & inspections",
          description:
            "Protect asset quality with disciplined inspections, vendor coordination, and proactive maintenance—so small issues never compound into expensive repairs.",
          bullets: [
            "Snagging support and punch-list coordination post-handover",
            "Preventive maintenance planning with trusted vendor partners",
            "Periodic inspections with concise photo-backed updates",
            "Quality checks aligned to premium tenant expectations",
          ] as const,
          why: "Premium assets age gracefully when upkeep is intentional.",
          imageSrc: dubaiImages.properties.modernVilla,
        },
        {
          key: "utilities",
          Icon: Zap,
          title: "Utilities & onboarding readiness",
          description:
            "Guidance for electricity/water connections and account setup support—so move-in timelines stay smooth for owners and tenants alike.",
          bullets: [
            "Utilities checklist tailored to building and locality norms",
            "Account setup guidance and milestone alignment",
            "Coordination with society/building administration where needed",
            "Move-in readiness checks before tenant arrival",
          ] as const,
          why: "A clean move-in protects reviews, renewals, and rental velocity.",
          imageSrc: dubaiImages.properties.apartment,
        },
        {
          key: "docs",
          Icon: FileText,
          title: "Documentation support",
          description:
            "Assistance with rental and ownership documentation coordination—clear responsibilities, fewer misses, and a premium paper trail.",
          bullets: [
            "Agreement templates reviewed for clarity and protection",
            "NOC and society documentation coordination where applicable",
            "Renewal documentation and version control",
            "Compliance reminders without overwhelming you with noise",
          ] as const,
          why: "Documentation discipline is what separates calm owners from stressed ones.",
          imageSrc: dubaiImages.properties.townhouse,
        },
        {
          key: "rent",
          Icon: DollarSign,
          title: "Rent renewals, collections & owner reporting",
          description:
            "Structured rent operations with transparent reporting—ideal for busy owners who want income predictability without daily involvement.",
          bullets: [
            "Rent collection rhythm with escalation protocols",
            "Renewal benchmarking against live tenant demand",
            "Tenant communication handled with discretion and speed",
            "Owner dashboards: concise monthly summaries that matter",
          ] as const,
          why: "Predictable cashflow is a luxury—especially at scale.",
          imageSrc: dubaiImages.properties.luxuryApartment,
        },
      ]}
      whyTitle="Why owners choose our management"
      whySubtitle="We treat your property like a premium product—presentation, tenant quality, and reporting included."
      whyColumns={[
        {
          key: "ops",
          Icon: ClipboardList,
          title: "Operational rigor",
          text: "Processes that reduce surprises: vendors, timelines, and accountability.",
        },
        {
          key: "trust",
          Icon: ShieldCheck,
          title: "Trust-first reporting",
          text: "Clear updates without spam—only what you need to decide.",
        },
        {
          key: "global",
          Icon: Globe,
          title: "Remote-owner friendly",
          text: "Ideal for owners who want premium oversight from anywhere.",
        },
        {
          key: "home",
          Icon: Home,
          title: "Asset presentation",
          text: "Upkeep and inspections that keep the home rental-ready and resale-ready.",
        },
      ]}
      ctaHeadline="Want stress-free ownership?"
      ctaSubline="Book a free consultation to review your property, tenant profile, and a management plan tailored to your goals."
    />
  );
}
