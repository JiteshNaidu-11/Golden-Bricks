'use client';

import Image from 'next/image';
import { MapPin, TrendingUp } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { dubaiImages } from '@/lib/images';

interface Project {
  id: number;
  name: string;
  location: string;
  priceRange: string;
  developer: string;
  image: string;
  type: string;
  roi?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Palm Jebel Ali",
    location: "Palm Jebel Ali, Dubai",
    priceRange: "AED 1.5M - 10M",
    developer: "Nakheel",
    image: dubaiImages.communities.palmJumeirah,
    type: "Villas & Townhouses",
    roi: "10%"
  },
  {
    id: 2,
    name: "Solana at La Mer",
    location: "La Mer, Dubai",
    priceRange: "AED 2.2M - 8M",
    developer: "Meraas",
    image: dubaiImages.properties.apartment,
    type: "Apartments",
    roi: "12%"
  },
  {
    id: 3,
    name: "Burj Binghatti Residences",
    location: "Business Bay, Dubai",
    priceRange: "AED 3M - 15M",
    developer: "Binghatti",
    image: dubaiImages.communities.businessBay,
    type: "Apartments & Penthouses",
    roi: "11%"
  },
  {
    id: 4,
    name: "Emaar Creek Vistas",
    location: "Dubai Creek Harbour",
    priceRange: "AED 1.3M - 5M",
    developer: "Emaar",
    image: dubaiImages.properties.luxuryApartment,
    type: "Apartments",
    roi: "9%"
  },
];

export default function TopProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - itemsPerPage : prev - itemsPerPage));
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Premium Luxury Developments
            </h2>
            <p className="text-white/70 text-lg">
              Exclusive off-plan and ready properties from Dubai's leading developers
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#262626] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#D4AF37] text-[#1a1a1a] text-sm font-semibold rounded-full">
                    New Launch
                  </span>
                </div>
                {project.roi && (
                  <div className="absolute top-4 right-4">
                    <div className="glass px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-white text-sm font-semibold">{project.roi} ROI</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium mb-2">{project.type}</p>
                <div className="flex items-center gap-2 text-white/60 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-white/70 text-sm mb-1">Developer</p>
                  <p className="text-white font-semibold">{project.developer}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Price Range</p>
                    <span className="text-xl font-bold gold-gradient-text">
                      {project.priceRange}
                    </span>
                  </div>
                  <button className="px-6 py-2 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

