"use client";

import PremiumServiceSubpage from "@/components/services/PremiumServiceSubpage";
import {
  BarChart3,
  Building2,
  Calendar,
  LineChart,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";

export default function InvestorAdvisory() {
  return (
    <PremiumServiceSubpage
      eyebrow="Investor advisory"
      heroTitle={
        <>
          Investor &{" "}
          <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
            portfolio advisory
          </span>
        </>
      }
      heroSubtitle="Research-led portfolio strategy for Mumbai & Navi Mumbai—yield, catalysts, liquidity, and exit planning explained with calm precision."
      heroImageSrc="/properties/codename-growth.jpeg"
      splitBlocks={[
        {
          key: "portfolio",
          Icon: Building2,
          title: "Portfolio building",
          description:
            "A disciplined approach to assembling exposure across micro-markets—balancing cashflow, appreciation catalysts, and liquidity so the portfolio behaves under stress.",
          bullets: [
            "Goal mapping: income vs growth vs hybrid outcomes",
            "Risk budgeting: concentration, delivery, and tenant depth checks",
            "Scenario planning for vacancy, interest, and exit windows",
            "Shortlists grounded in comparables—not narrative hype",
          ] as const,
          why: "Portfolios should survive bad years—not only good headlines.",
          imageSrc: "/properties/one-platinum.jpg",
        },
        {
          key: "restructure",
          Icon: TrendingUp,
          title: "Portfolio restructuring",
          description:
            "Identify weak anchors, rebalance exposure, and redeploy capital into higher-conviction pockets—without emotional decision-making.",
          bullets: [
            "Performance audit: yield, occupancy, and capital trajectory",
            "Sell vs hold framework with tax and timing considerations",
            "Reallocation plan with staged execution and liquidity buffers",
            "Negotiation support for exits and re-entries",
          ] as const,
          why: "The best returns often come from what you stop holding.",
          imageSrc: "/properties/sai-world-one.jpg",
        },
        {
          key: "roi",
          Icon: Target,
          title: "ROI planning & stress tests",
          description:
            "Clear ROI models with conservative assumptions—rent ranges, infra timelines, comparable transactions, and downside cases you can actually plan around.",
          bullets: [
            "Yield + appreciation + liquidity triangulation",
            "Infrastructure catalyst mapping with realistic timelines",
            "Comparable sales and rental demand validation",
            "Stress tests for vacancy and price softness",
          ] as const,
          why: "Investors deserve numbers they can trust—not optimism.",
          imageSrc: "/properties/westwoods-platinum.jpg",
        },
        {
          key: "timing",
          Icon: Calendar,
          title: "Resale timing & execution",
          description:
            "When to exit is a product of demand, inventory, and positioning—we help you time listings, pricing, and negotiation for cleaner outcomes.",
          bullets: [
            "Market pulse on absorption and competing inventory",
            "Pricing strategy anchored to real buyer demand",
            "Presentation upgrades that improve conversion",
            "Transaction coordination for a premium closing experience",
          ] as const,
          why: "Timing without execution is luck—we aim for repeatability.",
          imageSrc: "/properties/goodwill-wisteria.jpeg",
        },
      ]}
      whyTitle="Why choose our advisory"
      whySubtitle="We combine on-ground intelligence with investor discipline—so decisions feel premium, defensible, and calm."
      whyColumns={[
        {
          key: "research",
          Icon: BarChart3,
          title: "Research-led",
          text: "Micro-market signals, comparables, and catalysts—kept decision-ready.",
        },
        {
          key: "risk",
          Icon: Scale,
          title: "Risk-aware",
          text: "We surface downside scenarios early so capital stays protected.",
        },
        {
          key: "liquidity",
          Icon: LineChart,
          title: "Liquidity lens",
          text: "Shortlists prioritize resale depth and tenant demand—not only story.",
        },
        {
          key: "execution",
          Icon: Target,
          title: "Execution support",
          text: "From negotiation to documentation—structured and responsive.",
        },
      ]}
      ctaHeadline="Ready to refine your portfolio?"
      ctaSubline="Get a free consultation with a clear framework: goals, constraints, and a prioritized action plan."
    />
  );
}
