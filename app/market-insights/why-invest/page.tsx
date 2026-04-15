import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, TrendingUp, Award, Globe, Home, DollarSign } from 'lucide-react';
import { dubaiImages } from '@/lib/images';

export const metadata: Metadata = {
  title: "Why Invest in Mumbai & Navi Mumbai | Golden Brix Properties",
  description:
    "Discover why Mumbai and Navi Mumbai remain premium investment destinations: end-user depth, infra catalysts, rental demand, and long-term resale strength.",
};

export default function WhyInvest() {
  const advantages = [
    {
      icon: Home,
      title: "End-user depth",
      description:
        "Mumbai and Navi Mumbai have strong end-user demand that supports long-term liquidity and resale strength in quality projects.",
    },
    {
      icon: DollarSign,
      title: "Rental demand",
      description:
        "Tenant demand in key micro-markets creates predictable rental ranges—especially near business hubs and transit corridors.",
    },
    {
      icon: Award,
      title: "Infrastructure catalysts",
      description:
        "Metro links, road upgrades, and new business nodes can unlock appreciation—timelines and access matter most.",
    },
    {
      icon: TrendingUp,
      title: "High Yields",
      description:
        "Yields vary by pocket and configuration—focus on tenant profile, rent range, and total ownership costs.",
    },
    {
      icon: Globe,
      title: "Micro-market clarity",
      description:
        "The best outcomes come from choosing the right micro-market: connectivity, neighborhood depth, and future supply.",
    },
    {
      icon: Shield,
      title: "Stable Economy",
      description:
        "Regulatory frameworks and documentation checks reduce risk—prioritize clarity, approvals, and credible delivery.",
    },
    {
      icon: TrendingUp,
      title: "Capital Appreciation",
      description:
        "Appreciation is strongest where demand, access, and supply discipline align—compare with nearby resale comps.",
    },
    {
      icon: Globe,
      title: "World-Class Infrastructure",
      description:
        "Connectivity plus social infrastructure (schools, healthcare, retail) tends to protect desirability over time.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${dubaiImages.general.skyline}")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-b from-white/85 via-white/80 to-white/90"></div>
        </div>
        
        <div className="relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Why Invest in Mumbai & Navi Mumbai
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              A premium-first lens on why Mumbai and Navi Mumbai remain strong
              choices for end-users and long-term investors.
            </p>
          </div>
          
          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-linear-to-br from-white to-[#C5A24A]/5"
                >
                  <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 gold-gradient-text">{advantage.title}</h3>
                  <p className="text-[#1a1a1a]/80 leading-relaxed text-sm">{advantage.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Market showcase */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={dubaiImages.general.skyline}
                alt="City skyline - investment destination"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Tagline Section */}
          <div className="bg-linear-to-br from-[#C5A24A]/20 to-[#EBD181]/20 p-12 rounded-lg text-center mb-16">
            <p 
              className="text-3xl md:text-4xl font-bold text-[#001F3F] leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              "Mumbai isn’t just a property market — it’s a long-term wealth platform when you buy right."
            </p>
          </div>

          {/* Investment Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Premium micro-markets to watch
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.downtown}
                  alt="Central business district"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">South Mumbai</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.dubaiMarina}
                  alt="Waterfront district"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">BKC & Bandra</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.palmJumeirah}
                  alt="Premium residential pocket"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Powai</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.dubaiHills}
                  alt="Growth corridor"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Navi Mumbai</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Highlights */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Investment Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-[#C5A24A]/20 text-center">
                <div className="text-4xl font-bold gold-gradient-text mb-2">3–4</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Key checks</div>
                <div className="text-sm text-[#1a1a1a]/70">Demand, liquidity, documentation, and access</div>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20 text-center">
                <div className="text-4xl font-bold gold-gradient-text mb-2">6–8%</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Typical yield band</div>
                <div className="text-sm text-[#1a1a1a]/70">Varies by pocket and configuration</div>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20 text-center">
                <div className="text-4xl font-bold gold-gradient-text mb-2">5–7</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Years horizon</div>
                <div className="text-sm text-[#1a1a1a]/70">Best results with a long-term lens</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all"
            >
              Start Your Investment Journey
            </a>
          </div>
        </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

