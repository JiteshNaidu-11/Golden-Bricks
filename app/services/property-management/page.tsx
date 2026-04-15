'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Zap, FileText, DollarSign, Home, Globe } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { dubaiImages } from '@/lib/images';

export default function PropertyManagement() {
  const services = [
    {
      icon: Wrench,
      title: "Snagging & Maintenance",
      description: "Thorough property inspection, snagging reports, and ongoing maintenance coordination.",
    },
    {
      icon: Zap,
      title: "Utilities Setup",
      description: "Guidance for electricity/water connections and account setup support as needed.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Assistance with rental/ownership documentation and coordination with relevant parties.",
    },
    {
      icon: DollarSign,
      title: "Rent Renewals & Collections",
      description: "Managing lease renewals, rent collection, and tenant communications.",
    },
    {
      icon: Home,
      title: "Property Inspections",
      description: "Regular property inspections to ensure optimal condition and value.",
    },
    {
      icon: Globe,
      title: "Ideal for busy owners",
      description: "Peace of mind for owners who want end-to-end management and timely updates.",
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
              backgroundImage: `url("${dubaiImages.properties.modernVilla}")`,
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
              Property Management
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Complete property management solutions for owners across Mumbai and Navi Mumbai
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
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Why Choose Our Property Management Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">24/7 support and emergency response</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Transparent reporting and regular updates</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Network of trusted contractors and service providers</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Maximize rental income and property value</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Compliance with documentation requirements and best practices</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Peace of mind for international property owners</p>
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
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

