'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building2, MapPin, FileCheck, Link as LinkIcon } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { dubaiImages } from '@/lib/images';

export default function BuyingSelling() {
  const propertyTypes = [
    { icon: Home, title: "Villas", description: "Luxury villas in prime communities" },
    { icon: Building2, title: "Townhouses", description: "Modern townhouses with premium amenities" },
    { icon: Building2, title: "Luxury Apartments", description: "High-end apartments in iconic towers" },
    { icon: MapPin, title: "Plots", description: "Prime land for development or investment" },
  ];

  const services = [
    "Comprehensive property search and matching",
    "Market analysis and property valuation",
    "Negotiation and deal structuring",
    "Legal documentation and due diligence",
    "Transaction management and coordination",
    "Post-sale support and handover assistance",
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
              backgroundImage: `url("${dubaiImages.properties.luxuryApartment}")`,
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
              Buying & Selling Property
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              End-to-end assistance for buying and selling villas, townhouses, luxury apartments, and plots in Dubai
            </p>
          </div>
          
          {/* Property Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Property Types We Handle
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-lg bg-gradient-to-br from-white to-[#C5A24A]/5 text-center"
                  >
                    <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 gold-gradient-text">{type.title}</h3>
                    <p className="text-[#1a1a1a]/70">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg border border-[#C5A24A]/20 bg-gradient-to-br from-white to-[#C5A24A]/5"
                >
                  <FileCheck className="w-6 h-6 text-[#C5A24A] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1a1a1a]/80">{service}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Features */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">Transparent Advisory</h3>
                <p className="text-[#1a1a1a]/70">No hidden fees, clear pricing, honest recommendations</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">Expert Negotiation</h3>
                <p className="text-[#1a1a1a]/70">We secure the best terms and prices for you</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">End-to-End Support</h3>
                <p className="text-[#1a1a1a]/70">From search to handover and beyond</p>
              </div>
            </div>
          </div>
          
          {/* Property Types Images */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Property Showcase
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.properties.townhouse}
                  alt="Luxury Villa in Dubai"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold gold-gradient-text">Luxury Villas</h3>
                  <p className="text-[#1a1a1a]/70">Premium villas in exclusive communities</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={dubaiImages.properties.luxuryApartment}
                  alt="Luxury Apartment in Dubai"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold gold-gradient-text">Luxury Apartments</h3>
                  <p className="text-[#1a1a1a]/70">High-rise apartments with stunning views</p>
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

