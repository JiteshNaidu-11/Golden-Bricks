"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import {
  Award,
  FileText,
  Home,
  Package,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function AfterSales() {
  return (
    <PremiumServiceSubpage
      eyebrow="After-sales"
      heroTitle={
        <>
          After-sales{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            support
          </span>
        </>
      }
      heroSubtitle="Premium continuity after you buy—move-in coordination, interiors, leasing, resale tracking, and documentation support designed for calm execution."
      heroImageSrc="/properties/one-platinum.jpg"
      splitBlocks={[
        {
          key: "movein",
          Icon: Package,
          title: "Move-in coordination & concierge setup",
          description:
            "A structured handover-to-occupancy path—vendor scheduling, essentials checklist, and coordination so your first weeks feel effortless, not chaotic.",
          bullets: [
            "Handover milestone planning aligned to builder/society timelines",
            "Utility and essentials checklist with execution support",
            "Vendor introductions for tasteful, quality-first upgrades",
            "Quality checks before you fully commit to interiors spend",
          ] as const,
          why: "The first 30 days define how premium the home feels—forever.",
          imageSrc: "/properties/sai-world-one.jpg",
        },
        {
          key: "interior",
          Icon: Home,
          title: "Interior setup & fit-out guidance",
          description:
            "Curated introductions to designers and contractors—managed like a project with budgets, timelines, and quality checkpoints.",
          bullets: [
            "Scope definition: must-haves vs nice-to-haves",
            "Vendor shortlists aligned to style, speed, and budget",
            "Site coordination and progress reviews",
            "Snag closure before final payments and sign-offs",
          ] as const,
          why: "Premium interiors are project-managed—not improvised.",
          imageSrc: "/properties/westwoods-platinum.jpg",
        },
        {
          key: "leasing",
          Icon: RefreshCw,
          title: "Leasing support",
          description:
            "If your plan includes rental income, we help you position the asset, screen tenants, and close agreements with documentation discipline.",
          bullets: [
            "Pricing guidance based on live tenant demand",
            "Marketing presentation and viewing coordination",
            "Tenant screening aligned to owner risk appetite",
            "Agreement support with renewal and exit clarity",
          ] as const,
          why: "Income starts with tenant quality—not only listing visibility.",
          imageSrc: "/properties/goodwill-wisteria.jpeg",
        },
        {
          key: "resale",
          Icon: TrendingUp,
          title: "Resale tracking & documentation continuity",
          description:
            "Long-term advisory that monitors market movement, documentation health, and optimal windows—so exits feel strategic, not reactive.",
          bullets: [
            "Periodic market snapshots with comparables",
            "Documentation vault reminders and update prompts",
            "Exit timing guidance based on liquidity and inventory",
            "Transaction support when you choose to sell",
          ] as const,
          why: "Wealth is built in holding periods—managed intentionally.",
          imageSrc: "/properties/codename-growth.jpeg",
        },
      ]}
      whyTitle="Why after-sales support matters"
      whySubtitle="Premium real estate is a long relationship. The right support turns a purchase into a compounding asset—and a calmer lifestyle."
      whyColumns={[
        {
          key: "smooth",
          Icon: Award,
          title: "Smooth transition",
          text: "From purchase to occupancy without losing momentum—or quality.",
        },
        {
          key: "value",
          Icon: TrendingUp,
          title: "Value protection",
          text: "Leasing, upkeep, and timing decisions that protect yield and resale.",
        },
        {
          key: "docs",
          Icon: FileText,
          title: "Documentation continuity",
          text: "Fewer misses, cleaner records, and proactive reminders.",
        },
        {
          key: "partner",
          Icon: ShieldCheck,
          title: "Trusted partner",
          text: "Discreet support with clear accountability—beyond the transaction.",
        },
      ]}
      ctaHeadline="Want premium continuity after purchase?"
      ctaSubline="Get a free consultation to map your next 90 days: move-in, leasing, or long-term holding strategy."
    />
  );
}
