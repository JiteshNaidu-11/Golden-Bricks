import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Search, Handshake, FileText, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: "What We Do | TrueStar Real Estate",
  description: "Discover TrueStar Real Estate's comprehensive process from consultation to after-sales support in Dubai property transactions.",
};

export default function WhatWeDo() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "We begin by understanding your needs, budget, investment goals, and lifestyle preferences. Our initial consultation helps us create a tailored strategy for your property journey.",
    },
    {
      icon: Search,
      title: "Property Match",
      description: "Leveraging our extensive network and market knowledge, we identify properties that perfectly match your criteria. We provide detailed analysis, comparisons, and recommendations.",
    },
    {
      icon: Handshake,
      title: "Negotiation",
      description: "Our experienced team negotiates on your behalf to secure the best possible terms, pricing, and payment plans. We ensure transparency throughout the negotiation process.",
    },
    {
      icon: FileText,
      title: "Paperwork & Handover",
      description: "We handle all documentation, legal requirements, and administrative processes. From contracts to registration, we ensure a smooth, hassle-free handover experience.",
    },
    {
      icon: Headphones,
      title: "After-Sales",
      description: "Our relationship doesn't end at closing. We provide ongoing support including property management, market updates, resale advisory, and assistance with Golden Visa applications.",
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
              What We Do
            </h1>
            <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto px-4">
              A comprehensive, step-by-step approach to your property journey in Dubai
            </p>
          </div>
          
          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full gold-gradient opacity-20"></div>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Icon & Number */}
                    <div className={`flex-shrink-0 w-full md:w-1/2 flex items-center justify-center md:${isEven ? 'justify-end' : 'justify-start'}`}>
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#C5A24A] flex items-center justify-center">
                          <span className="text-xs sm:text-sm font-bold gold-gradient-text">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 text-center md:${isEven ? 'text-right' : 'text-left'}`}>
                      <h3 
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 gold-gradient-text"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[#1a1a1a]/80 leading-relaxed text-sm sm:text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-lg border-2 border-[#C5A24A]/30 bg-gradient-to-br from-white to-[#C5A24A]/5">
              <p className="text-base sm:text-lg md:text-xl text-[#1a1a1a]/80 mb-4 sm:mb-6">
                Ready to start your property journey?
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all text-sm sm:text-base"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

