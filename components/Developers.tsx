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
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Developers We Work With
          </h2>
          <p className="text-white/70 text-lg">
            Exclusive partnerships with Dubai's leading real estate developers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 flex items-center justify-center hover:border-[#D4AF37]/50 transition-all group cursor-pointer"
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

