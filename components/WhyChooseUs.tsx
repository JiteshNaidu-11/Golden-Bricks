'use client';

import Image from 'next/image';
import { Award, Users, TrendingUp, Shield, Clock, Building2 } from 'lucide-react';
import { dubaiImages } from '@/lib/images';

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Trusted advisory with a premium-first process—clear comparisons, transparent guidance, and calm execution."
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Local expertise across Mumbai and Navi Mumbai—micro-markets, pricing, builder track records, and resale strength."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "A structured, research-led approach that helps buyers and investors make confident decisions."
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
    description:
      "Access to verified inventory across reputed developers and trusted resale opportunities."
  },
];

const stats = [
  { value: "500+", label: "Happy families" },
  { value: "120+", label: "Homes transacted" },
  { value: "15+", label: "Years experience" },
  { value: "25+", label: "Developer partners" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-16 grid items-center gap-10 sm:gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[520px] lg:h-[600px]">
              <Image
                src={dubaiImages.properties.villa}
                alt="Luxury Villa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 hidden h-64 w-64 overflow-hidden rounded-2xl border-4 border-[#D4AF37]/30 sm:block">
              <Image
                src={dubaiImages.properties.modernVilla}
                alt="Modern Building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Real Estate Specialists
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed text-white/80">
              At Golden Brix Properties, we combine deep market expertise with a client-centric approach to deliver
              premium real estate advisory. Our team understands Mumbai and Navi Mumbai micro-markets and is committed
              to helping you find the right home or investment—without noise.
            </p>
            <p className="mb-8 text-base sm:text-lg leading-relaxed text-white/80">
              With years of on-ground experience and developer relationships, we offer curated access to verified
              opportunities and a clear process—from shortlist to negotiation to documentation.
            </p>
            <button className="min-h-[48px] w-full rounded-lg gold-gradient px-8 py-3.5 font-bold text-[#1a1a1a] transition-all hover:shadow-2xl hover:shadow-[#D4AF37]/50 sm:w-auto sm:py-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 sm:gap-8 lg:mb-20 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text">
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
            Why Choose Golden Brix Properties?
          </h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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


