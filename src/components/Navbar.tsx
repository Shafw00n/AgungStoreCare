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
    { label: 'Jual-Beli Laptop', href: '#katalog-laptop' },
    { label: 'Service Laptop & PC', href: '#service-laptop-pc' },
    { label: 'Service Handphone', href: '#service-phone' },
    { label: 'Alur Servis', href: '#alur-servis' },
    { label: 'Lokasi & Kontak', href: '#lokasi' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-300/80 py-3'
          : 'bg-cream-50 border-b border-cream-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#beranda" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo-asc.svg"
                alt="Logo Agung Store & Care"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-crimson leading-tight tracking-wide group-hover:text-crimson-dark transition-colors">
                AGUNG STORE &amp; CARE
              </span>
              <span className="text-[10px] sm:text-xs text-taupe font-medium tracking-wider uppercase">
                Jual • Beli • Service Spesialis
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-crimson transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all after:duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button (CTA WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getGeneralServiceUrl('Laptop/PC')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-crimson text-cream-50 border border-gold hover:bg-crimson-dark transition-all duration-200 shadow-sm hover:shadow-warm active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-gold-light" />
              <span>Konsultasi Servis</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralServiceUrl('Laptop/PC')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi WhatsApp"
              className="p-2 text-crimson bg-cream-100 border border-gold/40 rounded-lg hover:bg-cream-200 sm:hidden"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Menu"
              className="p-2 text-charcoal hover:text-crimson hover:bg-cream-100 rounded-lg border border-cream-300 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 border-b border-cream-300 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-1 divide-y divide-cream-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-base font-medium text-charcoal hover:text-crimson hover:bg-cream-100 rounded-md transition-colors"
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-crimson text-cream-50 border border-gold shadow-sm hover:bg-crimson-dark transition-colors"
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
