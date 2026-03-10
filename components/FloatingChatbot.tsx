'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
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
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 border-2 border-[#C5A24A]/40 hover:border-[#C5A24A] gold-gradient text-[#001F3F] hover:shadow-[#C5A24A]/40 flex-shrink-0"
        aria-label="Open property assistant chat"
        title="Chat with TrueStar Assistant"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#001F3F]/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
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
        </div>
      )}
    </>
  );
}
