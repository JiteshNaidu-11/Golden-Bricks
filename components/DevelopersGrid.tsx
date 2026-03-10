'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Developer {
  name: string;
  description: string;
}

interface DevelopersGridProps {
  developers: Developer[];
  compact?: boolean;
}

export default function DevelopersGrid({ developers, compact = false }: DevelopersGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (developerName: string) => {
    setImageErrors(prev => new Set(prev).add(developerName));
  };

  // Mapping of developer names to their actual image filenames
  const imageMapping: Record<string, string> = {
    'ARADA': 'arada.jpeg',
    'NSHAMA': 'nshama.jpeg',
    'IMAN': 'imaan.jpeg',
    'IMAAN': 'imaan.jpeg',
    'BINGHATTI': 'binghatti.jpeg',
    'DAMAC': 'demac.jpeg',
    'OMNIYAT': 'omniyat.jpeg',
    'ELLINGTON': 'ellington.jpeg',
    'EMAAR': 'emaar.jpeg',
    'MERAAS': 'meraas.jpeg',
    'NAKHEEL': 'nakheel.jpeg',
    'SAMANA': 'samana.jpeg',
    'SELECT GROUP': 'select.jpeg',
    'SOBHA': 'sobha.jpeg',
    'SOBHA REALTY': 'sobha.jpeg',
    'ALDAR': 'aldar.jpeg',
    'AL HABTOOR': 'alhabtoor.jpeg',
    'DEYAAR': 'deyaar.jpeg',
    'DANUBE': 'danube.jpeg',
    'DANUBE PROPERTIES': 'danube.jpeg',
    'UNION': 'union.jpeg',
    'UNION PROPERTIES': 'union.jpeg',
    'BNW': 'bnw.jpeg',
    'DUBAI PROPERTIES': 'dubai_properties.jpeg',
    'MAJID AL FUTTAIM': 'majidal.jpeg',
    'AL FUTTAIM': 'al-futtaim.jpeg',
    'WASL': 'wasl.jpeg',
    'AZIZI': 'azizi.jpeg',
    'OBJECT 1': 'object1.jpeg',
  };

  const getLogoPath = (name: string) => {
    // Check if there's a specific mapping for this developer
    if (imageMapping[name.toUpperCase()]) {
      return `/images/developers/${imageMapping[name.toUpperCase()]}`;
    }
    // Fallback to default naming convention
    return `/images/developers/${name.toLowerCase().replace(/\s+/g, '-')}.png`;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
  };

  if (compact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {developers.map((developer, index) => (
          <div 
            key={index}
            className="aspect-square w-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-[#C5A24A]/20 hover:border-[#C5A24A] group p-5"
          >
            {!imageErrors.has(developer.name) ? (
              <div className="relative w-[85%] h-[85%] min-w-0 min-h-0 flex-shrink-0">
                <Image
                  src={getLogoPath(developer.name)}
                  alt={`${developer.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  onError={() => handleImageError(developer.name)}
                />
              </div>
            ) : (
              <span 
                className="text-white font-bold text-base sm:text-lg text-center group-hover:text-[#EBD181] transition-colors"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {developer.name}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {developers.map((developer, index) => (
        <div 
          key={index}
          className="p-6 rounded-xl border-2 border-[#C5A24A]/20 hover:border-[#C5A24A] transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-[#C5A24A]/5 text-center group hover:scale-105 transform"
        >
          <div className="w-20 h-20 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all overflow-hidden p-2">
            {!imageErrors.has(developer.name) ? (
              <div className="relative w-full h-full">
                <Image
                  src={getLogoPath(developer.name)}
                  alt={`${developer.name} logo`}
                  fill
                  className="object-contain p-1"
                  onError={() => handleImageError(developer.name)}
                />
              </div>
            ) : (
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                {getInitials(developer.name)}
              </span>
            )}
          </div>
          <h3 
            className="text-base font-bold mb-2 gold-gradient-text"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {developer.name}
          </h3>
          <p className="text-xs text-[#1a1a1a]/60 leading-relaxed">{developer.description}</p>
        </div>
      ))}
    </div>
  );
}

