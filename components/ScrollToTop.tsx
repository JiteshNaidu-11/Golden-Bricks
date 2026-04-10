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
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C5A24A]/30 bg-[#001F3F] text-[#EBD181] shadow-md transition-all duration-300 hover:scale-105 hover:border-[#C5A24A] hover:bg-[#002952] hover:shadow-lg group"
          aria-label="Scroll to top"
          title="Return to top"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:scale-105" />
        </button>
      )}
    </>
  );
}

