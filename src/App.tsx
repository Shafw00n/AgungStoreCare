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

      {/* Floating Action Button (Quick WhatsApp Consultation with iOS Safe Area) */}
      <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:right-6 z-40">
        <a
          href={getGeneralServiceUrl('Laptop/PC')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi Cepat via WhatsApp"
          className="group min-h-[46px] flex items-center gap-2.5 px-4 py-2.5 sm:py-3 rounded-full bg-crimson text-cream-50 border-2 border-gold shadow-warm-lg hover:bg-crimson-dark active:scale-95 transition-all duration-300"
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
