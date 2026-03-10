'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Home, RefreshCw, TrendingUp, FileText } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function AfterSales() {
  const services = [
    {
      icon: Award,
      title: "Golden Visa Assistance",
      description: "Complete guidance and support for Golden Visa applications through property investment.",
    },
    {
      icon: Home,
      title: "Interior Setup",
      description: "Coordination with interior designers and contractors for property furnishing and setup.",
    },
    {
      icon: RefreshCw,
      title: "Leasing Support",
      description: "Assistance with finding tenants, lease agreements, and rental management.",
    },
    {
      icon: TrendingUp,
      title: "Resale Tracking",
      description: "Market monitoring and advisory for optimal resale timing and pricing strategies.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Ongoing assistance with property-related documentation and compliance requirements.",
    },
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
              After-Sales Support
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Comprehensive support services to help you maximize the value of your property investment
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-lg border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#C5A24A]/5"
                >
                  <div className="w-16 h-16 rounded-lg gold-gradient flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 gold-gradient-text">{service.title}</h3>
                  <p className="text-[#1a1a1a]/80 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Why It Matters */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Why After-Sales Support Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Smooth transition from purchase to occupancy</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Maximize property value and rental potential</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Navigate complex processes like Golden Visa applications</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Ongoing relationship and support beyond the sale</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Strategic advice for long-term wealth building</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Peace of mind knowing you have a trusted partner</p>
                  </li>
                </ul>
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
      </section>
      
      <Footer />
    </main>
  );
}

