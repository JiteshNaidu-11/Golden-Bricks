'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import SocialLinks from '@/components/SocialLinks';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitStatus('idle');
    setErrorMessage('');
    setIsSubmitting(true);
    // Compose WhatsApp message
    const msg = [
      "Hi, I'm interested in property consultation.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.message ? `Message: ${formData.message}` : null
    ].filter(Boolean).join('\n');
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Prompt Consultation
          </h2>
          <p className="text-base sm:text-xl text-white/70">
            Need help? Request a prompt consultation.
          </p>
        </div>

        <div className="mx-auto grid min-w-0 max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="min-w-0 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gold-gradient-text">
                Get In Touch
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our expert team is ready to assist you with all your real estate needs. 
                Whether you're looking to buy, sell, or invest, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-white/70">
                    Shop No. 5, Madhushree CHS<br />
                    Plot No. 33, Sector 40<br />
                    Seawoods, Navi Mumbai 400706
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+919819893359"
                    className="text-white/70 hover:text-[#EBD181] transition"
                  >
                    +91 77383 84100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:goldenbrix05@gmail.com"
                    className="text-white/70 hover:text-[#EBD181] transition"
                  >
                    goldenbrix05@gmail.com
                  </a>
                </div>
              </div>

              <SocialLinks
                variant="sectionDark"
                label="Connect with us"
                className="pt-2"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="min-w-0 glass rounded-2xl p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus !== 'idle' ? (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    submitStatus === 'success'
                      ? 'border-[#25D366]/30 bg-[#25D366]/10 text-white'
                      : 'border-red-500/30 bg-red-500/10 text-white'
                  }`}
                  role="status"
                >
                  {submitStatus === 'success'
                    ? 'Thank you. Our team will contact you shortly.'
                    : errorMessage || 'Something went wrong. Please try again.'}
                </div>
              ) : null}
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="+91 …"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#1a1a1a]/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg gold-gradient py-3.5 font-bold text-[#1a1a1a] transition-all hover:shadow-2xl hover:shadow-[#D4AF37]/50 disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


