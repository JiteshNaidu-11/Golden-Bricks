'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#001F3F] hover:bg-[#002952] text-[#EBD181] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border-2 border-[#C5A24A]/30 hover:border-[#C5A24A] flex-shrink-0"
          aria-label="Scroll to top"
          title="Return to top"
        >
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
}

