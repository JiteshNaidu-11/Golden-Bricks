'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Building2, Calendar, Target } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function InvestorAdvisory() {
  const services = [
    {
      icon: Building2,
      title: "Portfolio Building",
      description: "Strategic guidance to build a diversified property portfolio aligned with your investment goals and risk profile.",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Restructuring",
      description: "Optimize your existing portfolio by identifying underperforming assets and rebalancing for better returns.",
    },
    {
      icon: Target,
      title: "ROI Planning",
      description: "Comprehensive analysis of potential returns, rental yields, and capital appreciation projections.",
    },
    {
      icon: Calendar,
      title: "Resale Timing",
      description: "Expert advice on optimal timing for property sales to maximize returns and minimize tax implications.",
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
              Investor & Portfolio Advisory
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Strategic investment advisory to build, optimize, and maximize returns from your property portfolio
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <h3 className="text-2xl font-bold mb-4 gold-gradient-text">{service.title}</h3>
                  <p className="text-[#1a1a1a]/80 leading-relaxed text-lg">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Advisory Process */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              Our Advisory Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">Assessment</h3>
                <p className="text-[#1a1a1a]/70">Comprehensive analysis of your goals, risk tolerance, and current portfolio</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">Strategy</h3>
                <p className="text-[#1a1a1a]/70">Customized investment strategy with clear recommendations and action plans</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2 gold-gradient-text">Execution</h3>
                <p className="text-[#1a1a1a]/70">Ongoing support and monitoring to ensure your portfolio performs optimally</p>
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

