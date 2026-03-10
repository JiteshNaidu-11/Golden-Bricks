import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "CEO's Message | TrueStar Real Estate",
  description: "A message from Aajay Sagar, Founder & CEO of TrueStar Real Estate, sharing our vision and commitment to trust in real estate.",
};

export default function CEOMessage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              CEO's Message
            </h1>
            <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Portrait Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C5A24A]/20 hover:border-[#C5A24A]/50 transition-all duration-300 ">
                <img
                  src="/ajaysagar.png"
                  alt="Aajay Sagar - Founder & CEO of TrueStar Real Estate"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Gold gradient overlay on bottom */}
                {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001F3F]/80 to-transparent pointer-events-none"></div> */}
                {/* Name badge */}
                {/* <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className=" rounded-lg p-4 shadow-xl">
                    <p className="text-lg font-bold gold-gradient-text" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      AAJAY SAGAR
                    </p>
                    <p className="text-sm text-[#001F3F]/80 font-medium">
                      Founder & CEO
                    </p>
                    <p className="text-xs text-[#001F3F]/60 mt-1">
                      18 Years of Dubai Real Estate Experience
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Message Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg leading-relaxed">
              <p className="text-[#1a1a1a]/80">
                Welcome to TrueStar Real Estate, where <span className="font-semibold gold-gradient-text">trust is the real currency of real estate</span>. 
                In a market as dynamic and competitive as Dubai's, we understand that your property journey is not just about transactions—it's about 
                building lasting relationships and securing your future.
              </p>
              
              <p className="text-[#1a1a1a]/80">
                With 18 years of experience in Dubai's real estate landscape, I've witnessed the transformation of this city into a global investment 
                hub. From the early days of development to today's sophisticated market, one thing has remained constant: the need for transparency, 
                expertise, and genuine care.
              </p>
              
              <p className="text-[#1a1a1a]/80">
                At TrueStar, we don't just sell properties—we craft solutions. Whether you're a first-time buyer, a seasoned investor, or looking to 
                expand your portfolio, our team brings unparalleled market knowledge, direct developer relationships, and a commitment to your success 
                that goes beyond the closing.
              </p>
              
              <p className="text-[#1a1a1a]/80">
                Our foundation is built on four core pillars: <span className="font-semibold">Trust</span>, <span className="font-semibold">Clarity</span>, 
                {' '}<span className="font-semibold">Performance</span>, and <span className="font-semibold">Long-term Value</span>. These aren't just 
                words—they're the principles that guide every interaction, every recommendation, and every decision we make on your behalf.
              </p>
              
              <p className="text-[#1a1a1a]/80">
                Dubai isn't just a property market—it's a long-term wealth platform. And at TrueStar, we're here to help you navigate it with confidence, 
                clarity, and the assurance that your investment is in the right hands.
              </p>
              
              <div className="pt-6 sm:pt-8 border-t border-[#C5A24A]/20">
                <p className="text-right italic text-[#1a1a1a]/70 text-sm sm:text-base">
                  — <span className="font-semibold gold-gradient-text">Aajay Sagar</span>
                </p>
                <p className="text-right text-[#1a1a1a]/70 text-sm sm:text-base">
                  Founder & CEO, TrueStar Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

