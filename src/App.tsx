import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LaptopShowcase } from './components/LaptopShowcase';
import { TradeInBanner } from './components/TradeInBanner';
import { ServiceLaptopPC } from './components/ServiceLaptopPC';
import { ServicePhone } from './components/ServicePhone';
import { ServiceWorkflow } from './components/ServiceWorkflow';
import { Footer } from './components/Footer';
import { getGeneralServiceUrl } from './utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal font-sans selection:bg-crimson/15 selection:text-crimson">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero />
        <LaptopShowcase />
        <TradeInBanner />
        <ServiceLaptopPC />
        <ServicePhone />
        <ServiceWorkflow />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Button (Quick WhatsApp Consultation) */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
        <a
          href={getGeneralServiceUrl('Laptop/PC')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi Cepat via WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-crimson text-cream-50 border-2 border-gold shadow-warm-lg hover:bg-crimson-dark transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-gold-light" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-forest rounded-full border-2 border-crimson"></span>
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-wide pr-1">
            Konsultasi WA
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;
