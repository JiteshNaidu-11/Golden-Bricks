'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Download, Phone, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const [currentImage, setCurrentImage] = useState(0);
  const lead = useLeadSubmit();

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
  }, [heroImages.length]);

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const fd = new FormData(form);
      await lead.submit({
        source: "hero",
        page: "/",
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        budget: String(fd.get("budget") ?? ""),
        location: String(fd.get("location") ?? ""),
        message: `Intent: ${String(fd.get("intent") ?? activeTab)} · Property type: ${String(fd.get("property_type") ?? "")}`.trim(),
      });

      alert("Thank you! We will contact you shortly.");
      form.reset();
      setActiveTab("buy");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10">

          {/* Left — text capped so lines don’t stretch on ultra-wide viewports */}
          <div className="mx-auto w-full max-w-xl space-y-8 lg:mx-0">

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

          {/* Search form — capped width, anchored toward center/right without hugging the far edge */}
          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
            <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              {/* Stored in Supabase `leads` */}

              <div className="mb-2 flex gap-2 rounded-lg bg-[#1a1a1a]/50 p-1">
                <button
                  type="button"
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
                  type="button"
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

              <input type="hidden" name="intent" value={activeTab} />

              <div>
                <label htmlFor="hero-name" className="block text-white/80 mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-white/80 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="hero-phone" className="block text-white/80 mb-2 text-sm font-medium">
                  Phone
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 …"
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="hero-budget" className="block text-white/80 mb-2 text-sm font-medium">
                  Budget
                </label>
                <input
                  id="hero-budget"
                  name="budget"
                  type="text"
                  required
                  placeholder="e.g. 1 Cr – 2 Cr"
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label htmlFor="hero-location" className="block text-white/80 mb-2 text-sm font-medium">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                  <input
                    id="hero-location"
                    name="location"
                    type="text"
                    required
                    placeholder="Preferred area or community"
                    className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hero-property-type" className="block text-white/80 mb-2 text-sm font-medium">
                  Property type
                </label>
                <select
                  id="hero-property-type"
                  name="property_type"
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="All Properties">All Properties</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Villas">Villas</option>
                  <option value="Townhouses">Townhouses</option>
                  <option value="Penthouses">Penthouses</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={lead.loading}
                className="w-full py-4 gold-gradient text-[#1a1a1a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {lead.loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search Properties
                  </>
                )}
              </button>

              <Link
                href="/properties/"
                className="block text-center text-white/70 hover:text-[#D4AF37] transition-colors text-sm mt-2"
              >
                View All Properties
              </Link>
            </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}