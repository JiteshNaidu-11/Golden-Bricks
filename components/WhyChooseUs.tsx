'use client';

import Image from 'next/image';
import { Award, Users, TrendingUp, Shield, Clock, Building2 } from 'lucide-react';
import { dubaiImages } from '@/lib/images';

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized as Dubai's leading real estate agency with multiple industry awards and accolades."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of 200+ professionals brings decades of combined experience in Dubai real estate."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "AED 3B+ in properties sold, with 5,000+ happy clients and 17+ years of excellence."
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Your investment is protected with our comprehensive due diligence and transparent processes."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your real estate needs, whenever you need us."
  },
  {
    icon: Building2,
    title: "Exclusive Partnerships",
    description: "Direct partnerships with top developers including Emaar, Damac, Sobha, and more."
  },
];

const stats = [
  { value: "AED 3B+", label: "Properties Sold" },
  { value: "200+", label: "Professionals" },
  { value: "17+", label: "Years Experience" },
  { value: "5,000+", label: "Happy Clients" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={dubaiImages.properties.villa}
                alt="Luxury Villa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30">
              <Image
                src={dubaiImages.properties.modernVilla}
                alt="Modern Building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Real Estate Specialists
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              At Truestar, we combine deep market expertise with a client-centric approach to deliver exceptional 
              real estate solutions. Our team understands the nuances of Dubai's luxury property market and is 
              committed to helping you find the perfect investment or home.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              With over 17 years of experience and partnerships with Dubai's leading developers, we offer 
              exclusive access to premium properties and off-plan developments that represent the best investment 
              opportunities in the region.
            </p>
            <button className="px-8 py-4 gold-gradient text-[#1a1a1a] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gold-gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Why Choose Truestar?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#1a1a1a]" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

