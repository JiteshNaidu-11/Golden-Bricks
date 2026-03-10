import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, TrendingUp, Award, Globe, Home, DollarSign } from 'lucide-react';
import { dubaiImages } from '@/lib/images';

export const metadata: Metadata = {
  title: "Why Invest in Dubai | TrueStar Real Estate",
  description: "Discover why Dubai is a premier destination for property investment: freehold ownership, no tax, Golden Visa, high yields, and more.",
};

export default function WhyInvest() {
  const advantages = [
    {
      icon: Home,
      title: "Freehold Ownership",
      description: "100% freehold ownership rights for international investors in designated areas, providing complete property ownership.",
    },
    {
      icon: DollarSign,
      title: "No Tax",
      description: "Zero income tax, capital gains tax, and property tax. Keep 100% of your rental income and capital appreciation.",
    },
    {
      icon: Award,
      title: "Golden Visa",
      description: "Property investment of AED 2M+ qualifies for 10-year Golden Visa, offering residency benefits for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "High Yields",
      description: "Attractive rental yields of 6-8% in prime locations, significantly higher than many global markets.",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Dubai's position as a global business hub connects Asia, Europe, and Africa, ensuring sustained demand.",
    },
    {
      icon: Shield,
      title: "Stable Economy",
      description: "Diversified economy, strong regulatory framework, and government support for real estate sector growth.",
    },
    {
      icon: TrendingUp,
      title: "Capital Appreciation",
      description: "Strong historical performance with consistent property value growth driven by infrastructure and development.",
    },
    {
      icon: Globe,
      title: "World-Class Infrastructure",
      description: "Modern amenities, excellent connectivity, and ongoing infrastructure investments enhance property values.",
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
              backgroundImage: `url("${dubaiImages.general.dubaiSkyline}")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/90"></div>
        </div>
        
        <div className="relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Why Invest in Dubai
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Discover the compelling reasons why Dubai is a premier destination for property investment
            </p>
          </div>
          
          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#C5A24A]/5"
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
          
          {/* Dubai Skyline Showcase */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={dubaiImages.general.dubaiSkyline}
                alt="Dubai Skyline - Investment Destination"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Tagline Section */}
          <div className="bg-gradient-to-br from-[#C5A24A]/20 to-[#EBD181]/20 p-12 rounded-lg text-center mb-16">
            <p 
              className="text-3xl md:text-4xl font-bold text-[#001F3F] leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              "Dubai isn't just a property market — it is a long-term wealth platform."
            </p>
          </div>

          {/* Investment Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Prime Investment Locations
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.downtown}
                  alt="Downtown Dubai"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Downtown</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.dubaiMarina}
                  alt="Dubai Marina"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Marina</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.palmJumeirah}
                  alt="Palm Jumeirah"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Palm Jumeirah</h3>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.communities.dubaiHills}
                  alt="Dubai Hills"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 bg-white text-center">
                  <h3 className="font-bold gold-gradient-text">Dubai Hills</h3>
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
                <div className="text-4xl font-bold gold-gradient-text mb-2">100%</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Freehold Ownership</div>
                <div className="text-sm text-[#1a1a1a]/70">Complete ownership rights for international investors</div>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20 text-center">
                <div className="text-4xl font-bold gold-gradient-text mb-2">0%</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Tax Rate</div>
                <div className="text-sm text-[#1a1a1a]/70">No income, capital gains, or property tax</div>
              </div>
              <div className="p-6 rounded-lg border border-[#C5A24A]/20 text-center">
                <div className="text-4xl font-bold gold-gradient-text mb-2">10 Years</div>
                <div className="text-lg font-semibold text-[#1a1a1a] mb-2">Golden Visa</div>
                <div className="text-sm text-[#1a1a1a]/70">Residency benefits with AED 2M+ investment</div>
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

