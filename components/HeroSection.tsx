'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Download, Phone } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Luxury Real Estate"
            fill
            priority
            className={`object-cover transition-opacity duration-[2000ms] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Invest In Dubai Real Estate
                <span className="block gold-gradient-text mt-2">
                  With Golden Bricks
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Luxury Living. Smart Investments.
              </p>

              <p className="text-lg text-white/70 max-w-xl">
                Discover premium apartments, villas and investment
                opportunities in Dubai's most prestigious communities.
              </p>
            </div>

            {/* Lead Magnets */}
            <div className="flex flex-wrap gap-4">

              <button className="flex items-center gap-2 px-7 py-4 gold-gradient text-[#1a1a1a] font-bold rounded-lg hover:scale-105 transition-all">
                <Download className="w-5 h-5" />
                Dubai Investment Guide
              </button>

              <button className="flex items-center gap-2 px-7 py-4 border border-[#D4AF37] text-white font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all">
                <Phone className="w-5 h-5" />
                Free Consultation
              </button>

            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-6 text-white/70 text-sm">
              <div>
                <p className="text-2xl font-bold text-[#D4AF37]">500+</p>
                Properties Sold
              </div>

              <div>
                <p className="text-2xl font-bold text-[#D4AF37]">15+</p>
                Developers
              </div>

              <div>
                <p className="text-2xl font-bold text-[#D4AF37]">12%</p>
                Avg ROI
              </div>
            </div>

          </div>

          {/* Search Form */}
          <div className="glass rounded-2xl p-8 shadow-2xl backdrop-blur-xl">

            <div className="flex gap-2 mb-6 bg-[#1a1a1a]/50 rounded-lg p-1">

              <button
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                  activeTab === 'buy'
                    ? 'gold-gradient text-[#1a1a1a]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Buy
              </button>

              <button
                onClick={() => setActiveTab('rent')}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                  activeTab === 'rent'
                    ? 'gold-gradient text-[#1a1a1a]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Rent
              </button>

            </div>

            <div className="space-y-4">

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Property Type
                </label>
                <select className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]">
                  <option>All Properties</option>
                  <option>Apartments</option>
                  <option>Villas</option>
                  <option>Townhouses</option>
                  <option>Penthouses</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Location
                </label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />

                  <input
                    type="text"
                    placeholder="Search location"
                    className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <button className="w-full py-4 gold-gradient text-[#1a1a1a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search Properties
              </button>

              <a
                href="#"
                className="block text-center text-white/70 hover:text-[#D4AF37] transition-colors text-sm mt-4"
              >
                View All Properties
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}