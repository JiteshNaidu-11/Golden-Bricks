'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Headset } from 'lucide-react';
import BotFlow from '@/components/chatbot/BotFlow';
import RealEstateChatbot from '@/components/chatbot/RealEstateChatbot';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setShowChat(false);
  };

  const handleStartChat = () => {
    setShowChat(true);
  };

  return (
    <>
      {/* FAB - gold chatbot button (above WhatsApp in the stack) */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#C5A24A]/40 gold-gradient text-[#001F3F] shadow-md transition-all duration-300 hover:scale-105 hover:border-[#C5A24A] hover:shadow-lg group"
        aria-label="Open property advisor assistant"
        title="Speak with Golden Brix"
      >
        <Headset
          className="h-6 w-6 transition-transform group-hover:scale-105"
          strokeWidth={2}
          aria-hidden
        />
      </button>

      {/* Modal — portaled to body so it stacks above the fixed header (z-60); parent FAB wrapper is only z-50 */}
      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 pt-[max(1rem,env(safe-area-inset-top))] bg-[#001F3F]/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
            role="presentation"
          >
            <div
              className="w-full max-w-lg h-[85vh] max-h-[700px] bg-white rounded-3xl shadow-2xl border border-[#C5A24A]/20 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {showChat ? (
                <RealEstateChatbot onClose={handleClose} />
              ) : (
                <BotFlow onStartChat={handleStartChat} onClose={handleClose} />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
