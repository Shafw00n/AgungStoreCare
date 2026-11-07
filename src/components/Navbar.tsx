import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Wrench } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { getGeneralServiceUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Katalog Laptop', href: '#katalog-laptop' },
    { label: 'Servis Laptop & PC', href: '#service-laptop-pc' },
    { label: 'Servis Handphone', href: '#service-phone' },
    { label: 'Alur Servis', href: '#alur-servis' },
    { label: 'Lokasi & Kontak', href: '#lokasi' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-300/80 py-2.5 sm:py-3'
          : 'bg-cream-50 border-b border-cream-200 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Left: Brand Identity */}
          <a 
            href="#beranda" 
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-full overflow-hidden shadow-sm border border-gold/70">
              <img
                src="/assets/logo-asc.png"
                alt="Logo Agung Store & Care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-crimson leading-tight tracking-wide group-hover:text-crimson-dark transition-colors whitespace-nowrap">
                AGUNG STORE &amp; CARE
              </span>
              <span className="text-[10px] sm:text-[11px] text-taupe font-medium tracking-wider uppercase whitespace-nowrap">
                Jual • Beli • Service Spesialis
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links with Clean Pill Hover */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-charcoal/85 hover:text-crimson hover:bg-cream-200/70 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Desktop CTA Button */}
            <a
              href={getGeneralServiceUrl('Laptop/PC')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 text-xs xl:text-sm font-bold rounded-lg bg-crimson text-cream-50 border border-gold hover:bg-crimson-dark transition-all duration-200 shadow-sm hover:shadow-warm active:scale-98 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-gold-light flex-shrink-0" />
              <span>Konsultasi Servis</span>
            </a>

            {/* Mobile / Tablet WhatsApp Quick Icon */}
            <a
              href={getGeneralServiceUrl('Laptop/PC')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi WhatsApp"
              className="p-2 text-crimson bg-cream-100 border border-gold/40 rounded-lg hover:bg-cream-200 sm:hidden flex-shrink-0"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Menu"
              className="lg:hidden p-2 text-charcoal hover:text-crimson hover:bg-cream-100 rounded-lg border border-cream-300 transition-colors flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 border-b border-cream-300 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn shadow-warm">
          <div className="flex flex-col space-y-1 divide-y divide-cream-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-charcoal hover:text-crimson hover:bg-cream-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <a
              href={getGeneralServiceUrl('Laptop/PC')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-lg bg-crimson text-cream-50 border border-gold shadow-sm hover:bg-crimson-dark transition-colors"
            >
              <Wrench className="w-4 h-4 text-gold-light" />
              <span>Tanya Servis via WhatsApp ({storeConfig.formattedPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
