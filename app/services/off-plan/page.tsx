"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import { dubaiImages } from "@/lib/images";
import {
  Building,
  Calendar,
  DollarSign,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export default function OffPlan() {
  return (
    <PremiumServiceSubpage
      eyebrow="Off-plan & launches"
      heroTitle={
        <>
          Off-plan &{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            launch investments
          </span>
        </>
      }
      heroSubtitle="Priority access to credible launches, disciplined payment planning, and research-led selection—so you buy upside with eyes wide open."
      heroImageSrc={dubaiImages.hero.dubaiMarina}
      splitBlocks={[
        {
          key: "developer",
          Icon: Building,
          title: "Direct developer access",
          description:
            "Relationships that unlock priority inventory and cleaner deal desks—without the noise of mass-market launches.",
          bullets: [
            "Early inventory visibility before public saturation",
            "Unit selection guidance: stack, view, efficiency, and resale depth",
            "Milestone clarity on payments, construction, and possession risk",
            "Negotiation support for inclusions and commercial terms",
          ] as const,
          why: "Access is an edge—only when paired with selection discipline.",
          imageSrc: dubaiImages.properties.palmJebelAli,
        },
        {
          key: "prelaunch",
          Icon: Calendar,
          title: "Pre-launch booking strategy",
          description:
            "Structured booking approach with scenario planning—so you reserve the right unit, not just the first available one.",
          bullets: [
            "Booking sequence planning and token discipline",
            "Comparison matrix across competing launches",
            "Risk checks: delivery track record and absorption",
            "Exit scenarios if timelines or fundamentals shift",
          ] as const,
          why: "The best units are chosen early—calmly, not impulsively.",
          imageSrc: dubaiImages.hero.dubaiMarinaOffplan,
        },
        {
          key: "payment",
          Icon: DollarSign,
          title: "Flexible payment planning",
          description:
            "Align payment schedules with cashflow reality—while keeping disbursals and builder milestones coordinated to avoid friction.",
          bullets: [
            "Payment schedule stress-testing against liquidity buffers",
            "Milestone alignment with loan disbursal (where applicable)",
            "Penalty and delay clause clarity before commitment",
            "Upgrade/add-on budgeting to avoid cost creep",
          ] as const,
          why: "Premium investors optimize cashflow—not only headline price.",
          imageSrc: dubaiImages.properties.dubaiCreekHarbor,
        },
        {
          key: "roi",
          Icon: TrendingUp,
          title: "ROI planning for launch inventory",
          description:
            "Yield + appreciation + liquidity triangulation—so launch bets remain defensible even if markets cool.",
          bullets: [
            "End-user demand depth and rental range validation",
            "Infrastructure catalyst mapping with realistic timelines",
            "Comparable launches and absorption benchmarking",
            "Downside planning: vacancy, delays, and resale liquidity",
          ] as const,
          why: "Launches reward conviction—punish hype.",
          imageSrc: dubaiImages.properties.luxuryApartment,
        },
      ]}
      whyTitle="Why invest in off-plan—done the premium way"
      whySubtitle="Off-plan works best with verification, patience, and execution support. We keep the process structured so you stay in control."
      whyColumns={[
        {
          key: "price",
          Icon: DollarSign,
          title: "Structured entry",
          text: "Payment plans and milestones reviewed against your liquidity reality.",
        },
        {
          key: "design",
          Icon: Sparkles,
          title: "Modern product",
          text: "Newer planning, amenities, and efficiency—when the developer delivers.",
        },
        {
          key: "choice",
          Icon: Target,
          title: "Better unit choice",
          text: "Stack, light, and layout decisions that matter at resale.",
        },
        {
          key: "shield",
          Icon: ShieldCheck,
          title: "Risk checks",
          text: "Delivery credibility and documentation clarity before you commit.",
        },
      ]}
      showcaseTitle="Featured launch opportunities"
      showcaseItems={[
        {
          key: "a",
          imageSrc: dubaiImages.properties.palmJebelAli,
          title: "Damac island 2",
          description: "Premium residences with strong lifestyle appeal.",
          meta: "From ₹2.25 Cr",
        },
        {
          key: "b",
          imageSrc: dubaiImages.properties.dubaiCreekHarbor,
          title: "New launch opportunities",
          description: "Luxury community apartments in high-demand pockets.",
          meta: "From ₹1.8 Cr",
        },
        {
          key: "c",
          imageSrc: dubaiImages.hero.dubaiMarinaOffplan,
          title: "Luxury apartments",
          description: "Sky homes with strong end-user depth and liquidity cues.",
          meta: "From ₹80L",
        },
      ]}
      ctaHeadline="Ready to explore launch inventory?"
      ctaSubline="Get a free consultation with a curated launch view: risk checks, unit strategy, and payment planning."
    />
  );
}
