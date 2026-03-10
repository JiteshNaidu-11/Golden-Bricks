import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Building2, DollarSign, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Dubai Real Estate Market Trends 2024–2025 | TrueStar Real Estate",
  description: "Comprehensive analysis of Dubai real estate market trends, statistics, and 2025 outlook for property investors.",
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
      description: "Dubai's population growth driving demand",
    },
  ];

  const outlook2025 = [
    "Continued strong demand from international investors seeking safe-haven assets",
    "Expansion of luxury and ultra-luxury property segments",
    "Growth in off-plan sales with attractive payment plans",
    "Increased focus on sustainable and smart home developments",
    "Rising demand for waterfront and beachfront properties",
    "Strong performance in business districts and freehold communities",
    "Government initiatives supporting property ownership and investment",
    "Infrastructure developments enhancing property values across key areas",
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Dubai Real Estate Market Trends
            </h1>
            <p className="text-2xl text-[#1a1a1a]/70 mb-2">2024–2025</p>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg border-2 border-[#C5A24A]/20 bg-gradient-to-br from-white to-[#C5A24A]/5 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gold-gradient-text mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-[#1a1a1a] mb-2">{stat.label}</div>
                  <div className="text-sm text-[#1a1a1a]/70">{stat.description}</div>
                </div>
              );
            })}
          </div>
          
          {/* 2025 Outlook */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              2025 Market Outlook
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Key Market Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-[#C5A24A]/20">
                <h3 className="text-xl font-bold mb-4 gold-gradient-text">Residential Sector</h3>
                <p className="text-[#1a1a1a]/80 leading-relaxed mb-4">
                  The residential market continues to show strong fundamentals with sustained demand from both local and international buyers. 
                  Prime locations like Palm Jumeirah, Downtown Dubai, and Dubai Marina remain highly sought after.
                </p>
                <p className="text-[#1a1a1a]/80 leading-relaxed">
                  Off-plan properties are particularly attractive, offering flexible payment plans and potential for capital appreciation 
                  before completion.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20">
                <h3 className="text-xl font-bold mb-4 gold-gradient-text">Investment Opportunities</h3>
                <p className="text-[#1a1a1a]/80 leading-relaxed mb-4">
                  Dubai's real estate market offers exceptional investment opportunities with high rental yields, tax-free returns, 
                  and strong capital appreciation potential.
                </p>
                <p className="text-[#1a1a1a]/80 leading-relaxed">
                  The Golden Visa program continues to attract high-net-worth individuals, further driving demand for premium properties 
                  and long-term investment strategies.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all"
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

