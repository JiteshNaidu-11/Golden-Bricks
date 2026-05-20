'use client';

const developers = [
  { name: "Emaar", logo: "EMAAR" },
  { name: "Damac", logo: "DAMAC" },
  { name: "Sobha", logo: "SOBHA" },
  { name: "Nakheel", logo: "NAKHEEL" },
  { name: "Meraas", logo: "MERAAS" },
  { name: "Azizi", logo: "AZIZI" },
  { name: "Binghatti", logo: "BINGHATTI" },
  { name: "Select Group", logo: "SELECT" },
];

export default function Developers() {
  return (
    <section className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Developers We Work With
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Partnerships with reputed developers across Navi Mumbai
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-8">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="glass group flex items-center justify-center rounded-xl p-4 sm:p-6 transition-all hover:border-[#D4AF37]/50 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-white/90 group-hover:text-[#D4AF37] transition-colors">
                  {developer.logo}
                </div>
                <div className="text-xs text-white/60 mt-1">
                  {developer.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


