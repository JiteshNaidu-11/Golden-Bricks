'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCommunityImage } from '@/lib/images';

export default function KeyCommunities() {
  const communities = [
    {
      name: "Jumeirah",
      description: "Iconic beachfront community with luxury villas and apartments",
      image: getCommunityImage("Jumeirah"),
    },
    {
      name: "Palm Jumeirah",
      description: "World-famous man-made island with exclusive waterfront properties",
      image: getCommunityImage("Palm Jumeirah"),
    },
    {
      name: "Dubai Marina",
      description: "Vibrant waterfront district with high-rise towers and marina views",
      image: getCommunityImage("Dubai Marina"),
    },
    {
      name: "Downtown Dubai",
      description: "Home to Burj Khalifa and Dubai Mall, the heart of the city",
      image: getCommunityImage("Downtown Dubai"),
    },
    {
      name: "Business Bay",
      description: "Modern business district with luxury apartments and commercial spaces",
      image: getCommunityImage("Business Bay"),
    },
    {
      name: "Dubai Hills",
      description: "Master-planned community with golf course and family-friendly amenities",
      image: getCommunityImage("Dubai Hills"),
    },
    {
      name: "Emirates Hills",
      description: "Exclusive gated community with luxury villas and mansions",
      image: getCommunityImage("Emirates Hills"),
    },
    {
      name: "Arabian Ranches",
      description: "Family-oriented community with villas and townhouses",
      image: getCommunityImage("Arabian Ranches"),
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
              Key Communities We Specialize In
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              Explore Dubai's most prestigious and sought-after communities
            </p>
          </div>
          
          {/* Communities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communities.map((community, index) => (
              <div 
                key={index}
                className="group rounded-lg overflow-hidden border-2 border-[#C5A24A]/20 hover:border-[#C5A24A]/40 transition-all hover:shadow-xl bg-gradient-to-br from-white to-[#C5A24A]/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
                    style={{
                      backgroundImage: `url(${community.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{community.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">{community.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/contact';
                }
              }}
              className="inline-block px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all"
            >
              Explore Properties in These Communities
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

