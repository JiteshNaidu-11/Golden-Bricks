'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Globe, Mail, Phone, MapPin, Instagram, Send, Loader2, Linkedin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    inquiryType: 'Sales',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_email: 'Inquiry@truestar.ae',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        inquiryType: 'Sales',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#001F3F]">
      <Header />
      
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Contact Us
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#001F3F]/70 max-w-3xl mx-auto">
              Get in touch with our team for personalized real estate advisory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Website</h3>
                    <a href="https://www.truestar.ae" className="text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors">
                      www.truestar.ae
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@truestar.ae" className="text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors">
                      info@truestar.ae
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+971556169396" className="text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors">
                      +971 55 616 9396
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-[#001F3F]/70">Aspin Commercial Tower - Office No. 2003 - Sheikh Zayed Rd - Trade Center First - Dubai UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/truestar_real_estate?igsh=aTV0ajFoYW5zYXE3&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors"
                    >
                      @TRUESTAR_REAL_ESTATE
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/true-star-real-estate/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#001F3F]/70 hover:text-[#C5A24A] transition-colors"
                    >
                      TrueStar Real Estate
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-[#001F3F]/70">Monday to Saturday: 9:00am to 6:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#001F3F]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#C5A24A]/20 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#C5A24A]/20 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white"
                    // placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#C5A24A]/20 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#C5A24A]/20 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white"
                  >
                    <option value="Sales">Sales</option>
                    <option value="Rentals">Rentals</option>
                    <option value="Investment">Investment</option>
                    <option value="Advisory">Advisory</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#C5A24A]/20 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white resize-none"
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-800">
                    <p className="font-semibold">Thank you for your inquiry!</p>
                    <p className="text-sm mt-1">We have received your message and will contact you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200 text-red-800">
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm mt-1">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Book a Consultation
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          

    {/* Google Map */}
<div className="mb-16">
  <h2 
    className="text-3xl font-bold mb-8 text-center"
    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
  >
    Find Us
  </h2>

  <div className="rounded-lg overflow-hidden border-2 border-[#C5A24A]/20 h-96">
    <iframe
      src="https://www.google.com/maps?q=Aspin+Commercial+Tower,+Office+2003,+Sheikh+Zayed+Road,+Dubai,+UAE&z=16&output=embed"
      className="w-full h-full"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="TrueStar Real Estate Location"
    />
  </div>
</div>
        </div>
      </section>

      {/* Google Review CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-[#C5A24A]/20">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-4xl sm:text-5xl">⭐</span>
                ))}
              </div>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Love Our Service?
            </h2>
            <p className="text-lg text-[#001F3F]/80 mb-8 max-w-2xl mx-auto">
              Your feedback helps us improve and helps others discover our services. Share your experience with us on Google!
            </p>
            <a
              href="https://maps.app.goo.gl/SFhgoiLBRYb7zynd6?g_st=iwb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#C5A24A]/50 transition-all transform hover:scale-105 text-lg"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="text-2xl">⭐</span>
              Leave a Google Review
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

