'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, User } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const CONTACT_NUMBER = '+91 77383 84100';

const IMPORTANT_QUESTIONS: { label: string; prompt: string }[] = [
  { label: 'What is your contact number?', prompt: 'contact number' },
  { label: 'How can I view properties?', prompt: 'view properties' },
  { label: 'Which areas do you cover?', prompt: 'areas you cover' },
  { label: 'I need property investment advice', prompt: 'investment advice' },
  { label: 'New vs resale property – what’s better?', prompt: 'new vs resale property' },
  { label: 'Open WhatsApp for me', prompt: 'open whatsapp' },
  { label: 'How do I reach your office?', prompt: 'office location' },
];

function getBotResponse(userText: string): string {

  const lower = userText.toLowerCase().trim();

  if (
    lower.includes('property') ||
    lower.includes('properties') ||
    lower.includes('view') ||
    lower.includes('listing')
  ) {
    return "Golden Brix offers premium apartments and investment properties across Mumbai and Navi Mumbai. You can browse our featured listings on the homepage or ask us for recommendations based on your budget and preferred location.";
  }

  if (
    lower.includes('area') ||
    lower.includes('location') ||
    lower.includes('community')
  ) {
    return "We work in major areas across Mumbai and Navi Mumbai including Seawoods, Nerul, Kharghar, Ulwe, Panvel, Belapur, Andheri, Powai, and Thane. If you tell me your budget and preference, I can suggest the best locations for you.";
  }

  if (lower.includes('open whatsapp')) {
    return "Opening WhatsApp for you. Our Golden Brix team will respond shortly.";
  }

  if (
    lower.includes('contact') ||
    lower.includes('phone') ||
    lower.includes('call') ||
    lower.includes('number')
  ) {
    return `You can reach Golden Brix anytime.

📞 Phone / WhatsApp: ${CONTACT_NUMBER}

📍 Office Address:
Shop No - 5, Madhushree CHS  
Plot No - 33, Sector 40  
Seawoods, Navi Mumbai  
Maharashtra 400706

You can also click the WhatsApp button on this website to chat instantly with our team.`;
  }

  if (
    lower.includes('invest') ||
    lower.includes('investment') ||
    lower.includes('roi')
  ) {
    return "Mumbai and Navi Mumbai are among the best real estate markets for long-term investment. Areas like Seawoods, Kharghar, Ulwe, and Panvel have strong infrastructure growth and high appreciation potential. Our Golden Bricks advisors can help you choose the right project based on ROI and budget.";
  }

  if (
    lower.includes('new') ||
    lower.includes('resale') ||
    lower.includes('ready') ||
    lower.includes('under construction')
  ) {
    return "New / under-construction projects usually offer flexible payment plans and lower entry prices. Ready or resale properties allow immediate possession and rental income. Golden Bricks helps buyers choose the best option based on investment goals.";
  }

  if (lower.includes('office') || lower.includes('address') || lower.includes('location')) {
    return `Golden Bricks Office Location:

📍 Shop No - 5, Madhushree CHS  
Plot No - 33, Sector 40  
Seawoods, Navi Mumbai  
Maharashtra 400706

📞 Contact: ${CONTACT_NUMBER}

You are welcome to visit us or schedule a meeting.`;
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! Welcome to Golden Brix. I can help you find properties in Mumbai and Navi Mumbai, provide investment advice, or connect you with our team.";
  }

  if (lower.includes('thank')) {
    return "You're welcome! If you need help with properties, investment, or site visits, feel free to ask anytime.";
  }

  return "I can help you with properties, investment advice, locations, or contacting our Golden Bricks team. Try one of the important questions below or type your query.";
}

export default function RealEstateChatbot({ onClose }: { onClose: () => void }) {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hi! I'm the Golden Brix assistant. Ask me about properties in Mumbai or Navi Mumbai, investment opportunities, or how to contact our team.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);
  const nextMessageId = () => {
    messageIdRef.current += 1;
    return `m-${messageIdRef.current}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {

    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: nextMessageId(),
      text: trimmed,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    if (trimmed.toLowerCase().includes('whatsapp')) {
      setTimeout(() => openWhatsApp(), 600);
    }

    setTimeout(() => {

      const botText = getBotResponse(trimmed);

      setMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          text: botText,
          isBot: true,
          timestamp: new Date(),
        },
      ]);

      setIsTyping(false);

    }, 800);

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (

    <div className="flex flex-col h-full bg-linear-to-b from-[#001F3F]/5 to-[#003366]/5">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#C5A24A]/20 bg-white/80">

        <div className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#001F3F]" />
          </div>

          <div>
            <h3 className="font-semibold text-[#001F3F]">
              Golden Brix Assistant
            </h3>
            <p className="text-xs text-[#001F3F]/70">
              Mumbai Real Estate
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-[#001F3F]/10 flex items-center justify-center"
        >
          ×
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.map((msg) => (

          <div
            key={msg.id}
            className={`flex gap-3 ${msg.isBot ? '' : 'flex-row-reverse'}`}
          >

            {msg.isBot ? (
              <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#001F3F]" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#001F3F] flex items-center justify-center">
                <User className="w-4 h-4 text-[#EBD181]" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                msg.isBot
                  ? 'bg-white border border-[#C5A24A]/20 text-[#001F3F]'
                  : 'gold-gradient text-[#001F3F]'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{msg.text}</p>
            </div>

          </div>

        ))}

        {isTyping && (
          <p className="text-sm text-gray-500">Golden Bricks assistant typing...</p>
        )}

        <div ref={messagesEndRef} />

      </div>

      {/* Important questions */}

      <div className="px-4 pb-2 border-t border-[#C5A24A]/10 pt-3">

        <p className="text-xs font-semibold text-[#001F3F] mb-2">
          Important questions
        </p>

        <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto">

          {IMPORTANT_QUESTIONS.map(({ label, prompt }) => (

            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              className="text-left text-xs px-3 py-2 rounded-xl border border-[#C5A24A]/30 text-[#001F3F]"
            >
              {label}
            </button>

          ))}

        </div>

      </div>

      {/* Input */}

      <form onSubmit={handleSubmit} className="p-4 border-t border-[#C5A24A]/20 bg-white">

        <div className="flex gap-2">

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about properties..."
            className="flex-1 rounded-xl border border-[#C5A24A]/20 px-4 py-2"
          />

          <button
            type="submit"
            className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center"
          >
            <Send className="w-5 h-5 text-[#001F3F]" />
          </button>

        </div>

      </form>

    </div>
  );
}