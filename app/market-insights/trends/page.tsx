import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Building2, DollarSign, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Mumbai Real Estate Market Trends 2024–2025 | Golden Brix Realty",
  description:
    "Premium, data-led take on Navi Mumbai real estate trends, key drivers, and a practical outlook for buyers and investors.",
};

export default function MarketTrends() {
  const statistics = [
    {
      icon: TrendingUp,
      value: "15-20%",
      label: "Expected Price Growth",
      description: "Projected increase in property values for 2024-2025",
    },
    {
      icon: Building2,
      value: "50,000+",
      label: "New Units",
      description: "Properties expected to be delivered in 2025",
    },
    {
      icon: DollarSign,
      value: "6-8%",
      label: "Rental Yields",
      description: "Average rental yields across prime locations",
    },
    {
      icon: Users,
      value: "25%",
      label: "Population Growth",
      description: "Urban population growth sustaining housing demand",
    },
  ];

  const outlook2025 = [
    "Steady demand driven by connectivity upgrades and employment hubs",
    "Premium end-user preference for better planning, amenities, and liveability",
    "Continued momentum in under-construction launches with flexible payment schedules",
    "Stronger focus on sustainable design and energy-efficient homes",
    "Higher demand for lifestyle-led micro-markets with strong social infrastructure",
    "Resale strength in established neighborhoods with proven absorption",
    "Policy clarity and RERA-led transparency supporting buyer confidence",
    "Infrastructure catalysts improving access and long-term value across key corridors",
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Mumbai Real Estate Market Trends
            </h1>
            <p className="mb-2 text-lg text-[#1a1a1a]/70 sm:text-2xl">2024–2025</p>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          
          {/* Statistics Grid */}
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="rounded-lg border-2 border-[#C5A24A]/20 bg-gradient-to-br from-white to-[#C5A24A]/5 p-5 text-center transition-all hover:shadow-lg sm:p-6"
                >
                  <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2 text-2xl sm:text-3xl font-bold gold-gradient-text">{stat.value}</div>
                  <div className="mb-2 text-base sm:text-lg font-semibold text-[#1a1a1a]">{stat.label}</div>
                  <div className="text-sm text-[#1a1a1a]/70">{stat.description}</div>
                </div>
              );
            })}
          </div>
          
          {/* 2025 Outlook */}
          <div className="mb-16 rounded-lg bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-5 sm:p-8">
            <h2 
              className="mb-8 text-center text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              2025 Market Outlook
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {outlook2025.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                  <p className="text-[#1a1a1a]/80 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Insights */}
          <div className="mb-16">
            <h2 
              className="mb-8 text-center text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Key Market Insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="p-6 rounded-lg border border-[#C5A24A]/20">
                <h3 className="text-xl font-bold mb-4 gold-gradient-text">Residential Sector</h3>
                <p className="text-[#1a1a1a]/80 leading-relaxed mb-4">
                  The residential market continues to show strong fundamentals with sustained demand from both local and international buyers. 
                  Premium pockets across Navi Mumbai remain highly sought after for connectivity and lifestyle depth.
                </p>
                <p className="text-[#1a1a1a]/80 leading-relaxed">
                  Under-construction projects can be attractive when timelines, developer track record, and documentation are clear—often offering
                  staged payments and potential upside.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20">
                <h3 className="text-xl font-bold mb-4 gold-gradient-text">Investment Opportunities</h3>
                <p className="text-[#1a1a1a]/80 leading-relaxed mb-4">
                  Navi Mumbai offer investment opportunities backed by deep end-user demand, strong rental pockets, and
                  infrastructure-led appreciation catalysts.
                </p>
                <p className="text-[#1a1a1a]/80 leading-relaxed">
                  Focus on tenant profile, rental range, liquidity, and comparables—then negotiate on unit selection, payment schedule,
                  and value-added clauses.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg gold-gradient px-8 py-3.5 font-semibold text-white transition-all hover:shadow-xl hover:shadow-[#C5A24A]/50 sm:w-auto sm:py-4"
            >
              Get Market Analysis
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}




