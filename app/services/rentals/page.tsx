'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Home, FileText, RefreshCw } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { dubaiImages } from '@/lib/images';

export default function Rentals() {
  const rentalTypes = [
    {
      icon: Calendar,
      title: "Long-Term Rentals",
      description: "Annual leases for families and professionals seeking stability and comfort.",
    },
    {
      icon: Calendar,
      title: "Short-Term Rentals",
      description: "Flexible monthly or quarterly leases for temporary stays.",
    },
    {
      icon: Home,
      title: "Holiday Homes",
      description: "Premium vacation rentals in Dubai's most sought-after locations.",
    },
  ];

  const services = [
    "Property search and matching based on your requirements",
    "Tenant screening and background verification",
    "Contract preparation and negotiation",
    "Ejari registration and documentation",
    "Rent collection and management",
    "Lease renewals and contract updates",
    "Property viewings and inspections",
    "Maintenance coordination",
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
              backgroundImage: `url("${dubaiImages.properties.apartment}")`,
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
              Rentals & Leasing
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Comprehensive rental services for tenants and property owners in Dubai
            </p>
          </div>
          
          {/* Rental Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Rental Types
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {rentalTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div 
                    key={index}
                    className="p-8 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#C5A24A]/5"
                  >
                    <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center gold-gradient-text">{type.title}</h3>
                    <p className="text-[#1a1a1a]/80 text-center leading-relaxed">{type.description}</p>
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
                  <FileText className="w-6 h-6 text-[#C5A24A] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1a1a1a]/80">{service}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rental Properties Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Available Rental Properties
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A24A]/20">
                <img 
                  src={dubaiImages.properties.apartment}
                  alt="Rental Apartment"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold gold-gradient-text mb-2">Modern Apartments</h3>
                  <p className="text-[#1a1a1a]/70 mb-3">Furnished apartments in prime locations</p>
                  <p className="text-sm text-[#C5A24A] font-semibold">From AED 50,000/year</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A24A]/20">
                <img 
                  src={dubaiImages.properties.villa}
                  alt="Rental Villa"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold gold-gradient-text mb-2">Family Villas</h3>
                  <p className="text-[#1a1a1a]/70 mb-3">Spacious villas in family communities</p>
                  <p className="text-sm text-[#C5A24A] font-semibold">From AED 300,000/year</p>
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

