import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, TrendingUp, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: "Leadership & Expertise | Golden Brix Properties",
  description:
    "Learn about Golden Brix Properties’ leadership approach and our core pillars: Trust, Clarity, Performance, and Long-term Value.",
};

export default function Leadership() {
  const leadershipPoints = [
    "15+ years of combined Mumbai & Navi Mumbai real estate experience",
    "Relationships with reputed developers and verified resale inventory",
    "Expertise in luxury, off-plan, and investment properties",
    "Proven track record in portfolio management and advisory",
    "Deep understanding of local micro-markets, pricing, and documentation",
    "Client-first advisory built for end-users and investors",
    "Comprehensive after-sales support and property management",
    "Transparent, client-first approach to every transaction",
  ];

  const corePillars = [
    {
      icon: Shield,
      title: "TRUST",
      description: "Building lasting relationships through transparency, integrity, and honest communication. Your trust is our foundation.",
    },
    {
      icon: Eye,
      title: "CLARITY",
      description: "Clear, straightforward guidance at every step. No hidden fees, no surprises—just honest, actionable advice.",
    },
    {
      icon: TrendingUp,
      title: "PERFORMANCE",
      description: "Delivering results that exceed expectations. From negotiation to closing, we optimize every opportunity.",
    },
    {
      icon: Target,
      title: "LONG-TERM VALUE",
      description: "Thinking beyond the transaction. We help you build wealth through strategic, sustainable property investments.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Leadership & Expertise
            </h1>
            <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto px-4">
              Our team brings deep local experience and a commitment to excellence across Mumbai and Navi Mumbai real estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Leadership Points */}
            <div>
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Our Leadership
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {leadershipPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80 text-sm sm:text-base md:text-lg leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Core Pillars */}
            <div>
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Core Pillars
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {corePillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 sm:p-6 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-lg bg-gradient-to-br from-white to-[#C5A24A]/5"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 gold-gradient-text">{pillar.title}</h3>
                          <p className="text-[#1a1a1a]/70 text-sm sm:text-base">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

