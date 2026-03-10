'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { dubaiImages } from '@/lib/images';

export default function OffPlan() {
  const benefits = [
    {
      icon: Building,
      title: "Direct Developer Access",
      description: "We work directly with top developers to secure priority access and exclusive inventory before public launch.",
    },
    {
      icon: Calendar,
      title: "Pre-Launch Booking",
      description: "Get early access to the best units at the best prices. Reserve your property before official launch dates.",
    },
    {
      icon: DollarSign,
      title: "Flexible Payment Plans",
      description: "Access developer payment plans with favorable terms, including post-handover payment options.",
    },
    {
      icon: TrendingUp,
      title: "ROI Planning",
      description: "Strategic investment analysis to maximize returns. We help you identify high-growth opportunities.",
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
              backgroundImage: `url("${dubaiImages.hero.dubaiMarina}")`,
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
              Off-Plan & Launch Investments
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Secure exclusive off-plan properties and pre-launch opportunities with direct developer access
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#C5A24A]/5"
                >
                  <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gold-gradient-text">{benefit.title}</h3>
                  <p className="text-[#1a1a1a]/80 leading-relaxed text-lg">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Why Off-Plan Section */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Why Invest in Off-Plan Properties?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Lower entry prices compared to ready properties</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Flexible payment plans spread over construction period</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Potential for capital appreciation before completion</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">First choice of units and floor plans</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Modern designs and latest amenities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Developer incentives and early-bird discounts</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Featured Projects with Images */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Featured Off-Plan Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A24A]/20">
                <img 
                  src={dubaiImages.properties.palmJebelAli}
                  alt="Palm Jebel Ali Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold gold-gradient-text mb-2">Damac island 2</h3>
                  <p className="text-sm text-[#1a1a1a]/70 mb-2">Waterfront luxury villas</p>
                  <p className="text-xs text-[#C5A24A] font-semibold">From AED 2.25M</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A24A]/20">
                <img 
                  src={dubaiImages.properties.dubaiCreekHarbor}
                  alt="Damac Island 2 Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold gold-gradient-text mb-2">Dubai creek harbor 
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/70 mb-2">Luxury community apartments 
                  </p>
                  <p className="text-xs text-[#C5A24A] font-semibold">From AED 1.8M</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A24A]/20">
                <img 
                  src={dubaiImages.hero.dubaiMarinaOffplan}
                  alt="Luxury Community Apartments"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold gold-gradient-text mb-2">Luxury  apartments</h3>
                  <p className="text-sm text-[#1a1a1a]/70 mb-2">Luxury apartments in JVC district</p>
                  <p className="text-xs text-[#C5A24A] font-semibold">From AED 800k</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => openWhatsApp()}
              className="inline-block px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all"
            >
              Talk to an Advisor
            </button>
          </div>
        </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

