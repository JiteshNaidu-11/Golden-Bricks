'use client';

import Image from 'next/image';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getPropertyImage } from '@/lib/images';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  type: string;
  developer?: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: "Seawoods Signature Residences",
    location: "Seawoods, Navi Mumbai",
    price: "₹2.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,500 sqft",
    image: getPropertyImage("Apartment"),
    type: "Apartment",
    developer: "Emaar"
  },
  {
    id: 2,
    name: "Powai Lakeview Villa",
    location: "Powai, Mumbai",
    price: "₹8.5 Cr",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,200 sqft",
    image: getPropertyImage("Villa"),
    type: "Villa",
    developer: "Nakheel"
  },
  {
    id: 3,
    name: "Bandra Sky Penthouse",
    location: "Bandra, Mumbai",
    price: "₹12.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,800 sqft",
    image: getPropertyImage("Penthouse"),
    type: "Penthouse",
    developer: "Damac"
  },
  {
    id: 4,
    name: "Thane Central Apartment",
    location: "Thane",
    price: "₹1.8 Cr",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,500 sqft",
    image: getPropertyImage("Apartment"),
    type: "Apartment",
    developer: "Sobha"
  },
  {
    id: 5,
    name: "Kharghar Family Homes",
    location: "Kharghar, Navi Mumbai",
    price: "₹1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,000 sqft",
    image: getPropertyImage("Townhouse"),
    type: "Townhouse",
    developer: "Emaar"
  },
  {
    id: 6,
    name: "Nerul Premium Greens",
    location: "Nerul, Navi Mumbai",
    price: "₹3.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sqft",
    image: getPropertyImage("Villa"),
    type: "Villa",
    developer: "Emaar"
  },
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= properties.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - itemsPerPage : prev - itemsPerPage));
  };

  const visibleProperties = properties.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="properties" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Featured Properties
            </h2>
            <p className="text-white/70 text-lg">
              Discover a premium selection across Mumbai and Navi Mumbai
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
          {visibleProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-[#262626] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#D4AF37] text-[#1a1a1a] text-sm font-semibold rounded-full">
                    {property.type}
                  </span>
                </div>
                {property.developer && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 glass text-white text-xs font-medium rounded-full">
                      {property.developer}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">
                  {property.name}
                </h3>
                <div className="flex items-center gap-2 text-white/60 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold gold-gradient-text">
                    {property.price}
                  </span>
                  <button className="px-6 py-2 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}

