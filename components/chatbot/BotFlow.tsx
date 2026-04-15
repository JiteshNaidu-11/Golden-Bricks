'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
  Compass,
  Shield,
  FileCheck,
  Phone,
} from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

type Audience = 'first-time' | 'investor' | 'rent' | 'explore' | null;
type View = 'title' | 'audience' | 'content' | 'summary';

interface BotFlowProps {
  onStartChat: () => void;
  onClose: () => void;
}

export default function BotFlow({ onStartChat, onClose }: BotFlowProps) {

  const [view, setView] = useState<View>('title');
  const [audience, setAudience] = useState<Audience>(null);
  const [step, setStep] = useState(0);

  /* ---------------- FIRST TIME BUYER ---------------- */

  const firstTimeSteps = [
    {
      title: 'Buying Property in Mumbai',
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Mumbai and Navi Mumbai offer excellent real estate opportunities
            for first-time homebuyers. With strong infrastructure development,
            metro connectivity, and growing business hubs, owning property
            here is both a lifestyle upgrade and a long-term investment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {[
              'Trusted developers',
              'RERA compliant projects',
              'Flexible payment plans',
              'Expert advisory'
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-2 bg-[#C5A24A]/10 rounded-xl px-4 py-2 border border-[#C5A24A]/20"
              >
                <Shield className="w-4 h-4 text-[#C5A24A]" />
                <span className="text-sm">{item}</span>
              </div>

            ))}

          </div>
        </div>
      ),
    },
    {
      title: 'How Golden Brix Helps',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            At Golden Brix we help you from property search to final
            possession. Our experts shortlist the best projects based on
            your budget, preferred location, and lifestyle requirements.
          </p>

          <div className="bg-[#001F3F]/5 rounded-xl p-4 border-l-4 border-[#C5A24A]">
            <p className="text-sm font-semibold">
              Tell us your budget and preferred location and we’ll suggest
              the best projects in Mumbai or Navi Mumbai.
            </p>
          </div>

        </div>
      ),
    },
  ];

  /* ---------------- INVESTOR ---------------- */

  const investorSteps = [
    {
      title: 'Real Estate Investment',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Mumbai real estate is one of India's most stable investment
            markets with strong rental demand and long-term capital growth.
          </p>

          <ul className="space-y-2">
            <li>• Off-plan projects with early investment pricing</li>
            <li>• Ready properties with rental income</li>
            <li>• High growth locations in Navi Mumbai</li>
          </ul>

        </div>
      ),
    },
    {
      title: 'Investor Advisory',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Golden Brix provides market insights, project comparisons,
            and ROI guidance to help investors choose the right property.
          </p>

          <div className="flex items-center gap-3 bg-[#C5A24A]/10 rounded-xl p-4 border border-[#C5A24A]/20">
            <TrendingUp className="w-8 h-8 text-[#C5A24A]" />
            <p className="text-sm">
              Popular investment areas include Seawoods, Kharghar,
              Ulwe, Panvel, and Thane.
            </p>
          </div>

        </div>
      ),
    },
  ];

  /* ---------------- RENT ---------------- */

  const rentSteps = [
    {
      title: 'Rental Properties',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Golden Brix lists quality apartments and villas for rent
            across Mumbai and Navi Mumbai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {[
              '1, 2 & 3 BHK apartments',
              'Prime locations',
              'Verified listings',
              'Lease assistance'
            ].map((item) => (

              <div
                key={item}
                className="bg-[#001F3F]/5 rounded-xl px-4 py-2 text-sm border"
              >
                {item}
              </div>

            ))}

          </div>

        </div>
      ),
    },
    {
      title: 'Get Rental Options',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Tell us your budget, location preference, and move-in date.
            Our team will send verified rental options and arrange
            property visits.
          </p>

        </div>
      ),
    },
  ];

  /* ---------------- EXPLORE ---------------- */

  const exploreSteps = [
    {
      title: 'Explore Mumbai Real Estate',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Whether you’re buying, investing, or just exploring,
            Golden Brix provides expert guidance on the best
            projects and locations.
          </p>

          <div className="flex items-center gap-3 bg-[#C5A24A]/10 rounded-xl p-4 border border-[#C5A24A]/20">

            <Compass className="w-8 h-8 text-[#C5A24A]" />

            <p className="text-sm">
              Browse projects, compare prices, and explore upcoming
              developments across Mumbai and Navi Mumbai.
            </p>

          </div>

        </div>
      ),
    },
    {
      title: 'We Are Here To Help',
      content: (
        <div className="space-y-4">

          <p className="leading-relaxed">
            Ask us anything about property prices, investment opportunities,
            or project details. Our team will guide you through the process.
          </p>

        </div>
      ),
    },
  ];

  const getSteps = () => {
    if (audience === 'first-time') return firstTimeSteps;
    if (audience === 'investor') return investorSteps;
    if (audience === 'rent') return rentSteps;
    return exploreSteps;
  };

  const steps = getSteps();
  const atLastStep = step === steps.length - 1;
  const atFirstStep = step === 0;

  const handleNext = () => {
    if (atLastStep) {
      setView('summary');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (atFirstStep) {
      setView('audience');
      setAudience(null);
      setStep(0);
    } else {
      setStep(step - 1);
    }
  };

  /* ---------------- TITLE ---------------- */

  if (view === 'title') {

    return (
      <div className="flex flex-col h-full bg-[#f9f7f2] text-[#0c1b2a]">

        <div className="flex justify-end p-3">
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white border flex items-center justify-center">×</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-[#001F3F]" />
          </div>

          <h2 className="text-2xl font-bold text-[#001F3F] mb-2">
            Golden Brix Property Assistant
          </h2>

          <p className="text-[#001F3F]/80 mb-6 max-w-sm">
            Get quick guidance on buying, investing, or renting
            property in Mumbai and Navi Mumbai.
          </p>

          <button
            onClick={() => setView('audience')}
            className="gold-gradient text-[#001F3F] font-semibold px-6 py-3 rounded-full flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    );
  }

  /* ---------------- SUMMARY ---------------- */

  if (view === 'summary') {

    return (
      <div className="flex flex-col h-full bg-linear-to-b from-[#001F3F]/5 to-[#003366]/10">

        <div className="flex justify-end p-3">
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white border flex items-center justify-center">×</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          <FileCheck className="w-14 h-14 text-[#C5A24A] mb-4" />

          <h3 className="text-xl font-bold text-[#001F3F] mb-2">
            Contact Golden Brix
          </h3>

          <p className="text-sm text-[#001F3F]/80 mb-6">

            Shop No - 5, Madhushree CHS  
            Plot No - 33, Sector 40  
            Seawoods, Navi Mumbai  
            Maharashtra 400706  

            <br/><br/>

            📞 +91 77383 84100  
            📧 sunitaestate@gmail.com

          </p>

          <div className="flex flex-col gap-3">

            <button
              onClick={onStartChat}
              className="gold-gradient text-[#001F3F] font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="border-2 border-[#C5A24A] text-[#0c1b2a] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#C5A24A]/10"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </button>

          </div>

        </div>

      </div>
    );
  }

  /* ---------------- CONTENT ---------------- */

  const currentStep = steps[step];

  return (

    <div className="flex flex-col h-full bg-[#f9f7f2] text-[#0c1b2a]">

      <div className="flex justify-between items-center p-3 border-b">
        <button onClick={handleBack} className="flex items-center gap-1 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <span className="text-xs">{step + 1} / {steps.length}</span>

        <button onClick={onClose}>×</button>
      </div>

      <div className="flex-1 p-6">

        <h3 className="text-lg font-bold mb-4">
          {currentStep.title}
        </h3>

        {currentStep.content}

      </div>

      <div className="p-4 border-t">

        <button
          onClick={handleNext}
          className="w-full gold-gradient py-3 rounded-xl flex items-center justify-center gap-2"
        >
          {atLastStep ? 'Next: Start Chat' : 'Next'}
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>

    </div>

  );

}