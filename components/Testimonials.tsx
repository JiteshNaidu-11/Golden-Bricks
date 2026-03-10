'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Al-Mansoori",
    rating: 5,
    text: "Truestar made our dream of owning a property in Dubai a reality. Their team was professional, knowledgeable, and always available to answer our questions. Highly recommended!",
    location: "Dubai"
  },
  {
    id: 2,
    name: "James Mitchell",
    rating: 5,
    text: "Exceptional service from start to finish. The team at Truestar helped us find the perfect investment property in Palm Jumeirah. Their expertise in the Dubai market is unmatched.",
    location: "London"
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 5,
    text: "Working with Truestar was a seamless experience. They understood our requirements perfectly and showed us properties that matched our vision. Thank you for making the process so smooth!",
    location: "Mumbai"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    rating: 5,
    text: "The best real estate agency in Dubai. Their knowledge of off-plan properties and investment opportunities is outstanding. We've made multiple investments through them.",
    location: "Dubai"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Client Reviews
          </h2>
          <p className="text-white/70 text-lg">
            What our clients say about us
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="hidden md:block"></div>
          <div className="flex gap-4">
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
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#ffed4e] flex items-center justify-center text-[#1a1a1a] font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a1a1a] rounded-lg font-semibold transition-all">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

