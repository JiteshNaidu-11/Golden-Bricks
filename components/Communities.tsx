'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getCommunityImage } from '@/lib/images';

interface Community {
  id: number;
  name: string;
  location: string;
  priceRange: string;
  image: string;
  type: string;
  projects: number;
}

const communities: Community[] = [
  {
    id: 1,
    name: "Dubai Marina",
    location: "Dubai Marina, Dubai",
    priceRange: "AED 1.2M - 8M",
    image: getCommunityImage("Dubai Marina"),
    type: "Apartments",
    projects: 45
  },
  {
    id: 2,
    name: "Palm Jumeirah",
    location: "Palm Jumeirah, Dubai",
    priceRange: "AED 2.5M - 25M",
    image: getCommunityImage("Palm Jumeirah"),
    type: "Villas & Apartments",
    projects: 32
  },
  {
    id: 3,
    name: "Downtown Dubai",
    location: "Downtown Dubai",
    priceRange: "AED 1.5M - 12M",
    image: getCommunityImage("Downtown Dubai"),
    type: "Apartments",
    projects: 28
  },
  {
    id: 4,
    name: "Business Bay",
    location: "Business Bay, Dubai",
    priceRange: "AED 1.1M - 6M",
    image: getCommunityImage("Business Bay"),
    type: "Apartments",
    projects: 38
  },
  {
    id: 5,
    name: "Dubai Hills Estate",
    location: "Dubai Hills",
    priceRange: "AED 2.5M - 15M",
    image: getCommunityImage("Dubai Hills"),
    type: "Villas & Townhouses",
    projects: 25
  },
];

export default function Communities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= communities.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? communities.length - itemsPerPage : prev - itemsPerPage));
  };

  const visibleCommunities = communities.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="communities" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Explore Prime Locations
            </h2>
            <p className="text-white/70 text-lg">
              Discover Dubai's most sought-after communities
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-[#D4AF37]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCommunities.map((community) => (
            <div
              key={community.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={community.image}
                alt={community.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#D4AF37]/20 group-hover:to-[#D4AF37]/40 transition-all"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                  {community.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{community.location}</span>
                </div>
                <p className="text-[#D4AF37] text-sm font-medium mb-2">{community.type}</p>
                <p className="text-white/70 text-sm mb-3">{community.projects} Projects Available</p>
                <p className="text-lg font-semibold gold-gradient-text mb-4">{community.priceRange}</p>
                <button className="w-full py-2 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all text-sm">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
            View All Locations
          </button>
        </div>
      </div>
    </section>
  );
}

