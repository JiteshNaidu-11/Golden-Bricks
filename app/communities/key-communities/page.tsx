'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCommunityImage } from '@/lib/images';

export default function KeyCommunities() {
  const communities = [
    {
      name: "Seawoods",
      description: "Premium Navi Mumbai pocket with strong connectivity and lifestyle infrastructure",
      image: getCommunityImage("Seawoods"),
    },
    {
      name: "Kharghar",
      description: "A fast-growing micro-market known for planned sectors and end-user demand",
      image: getCommunityImage("Palm"),
    },
    {
      name: "Powai",
      description: "Established Mumbai neighborhood with premium housing and corporate catchments",
      image: getCommunityImage("Marina"),
    },
    {
      name: "Bandra",
      description: "A prime Mumbai location with strong lifestyle depth and long-term desirability",
      image: getCommunityImage("Downtown"),
    },
    {
      name: "BKC",
      description: "Key business district with premium residential demand and strong rental pockets",
      image: getCommunityImage("Business"),
    },
    {
      name: "Thane (select pockets)",
      description: "Growing premium end-user market with improving connectivity and amenities",
      image: getCommunityImage("Hills"),
    },
    {
      name: "Nerul",
      description: "Well-connected Navi Mumbai node with steady end-user and rental demand",
      image: getCommunityImage("Nerul"),
    },
    {
      name: "Ulwe",
      description: "An emerging growth corridor watched for connectivity and long-term upside",
      image: getCommunityImage("Ulwe"),
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
              Explore Mumbai and Navi Mumbai’s most sought-after micro-markets
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

