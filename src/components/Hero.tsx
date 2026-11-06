import React from 'react';
import { ShoppingBag, Wrench, ShieldCheck, CheckCircle2, Clock, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle Background Pattern (Warm Geometric Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#261815_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow Badge with Gold Border Motif */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-gold/70 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse"></span>
              <span className="text-xs sm:text-xs font-semibold tracking-wider text-charcoal uppercase">
                JUAL • BELI • SERVICE LAPTOP, PC &amp; HANDPHONE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-charcoal leading-[1.18] tracking-tight">
              Pusat Jual-Beli Laptop Terkurasi &amp;{' '}
              <span className="text-crimson italic">Spesialis Perbaikan</span> Perangkat Anda.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-taupe leading-relaxed max-w-2xl font-normal">
              Agung Store &amp; Care menghadirkan etalase laptop seken pilihan berkualitas prima dengan garansi toko terpercaya, serta layanan servis hardware profesional untuk Laptop, PC Desktop, dan Handphone—dikerjakan transparan dan didukung suku cadang teruji.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#katalog-laptop"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-crimson text-cream-50 font-semibold text-sm sm:text-base border border-gold hover:bg-crimson-dark transition-all duration-200 shadow-md hover:shadow-warm active:scale-98"
              >
                <ShoppingBag className="w-5 h-5 text-gold-light" />
                <span>Lihat Stok &amp; Jual-Beli Laptop</span>
              </a>

              <a
                href="#service-laptop-pc"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-cream-100 text-charcoal font-semibold text-sm sm:text-base border border-gold hover:bg-cream-200 hover:text-crimson transition-all duration-200 shadow-sm active:scale-98"
              >
                <Wrench className="w-5 h-5 text-crimson" />
                <span>Cek Layanan Servis</span>
              </a>
            </div>

            {/* Quick Trust Signals Bar */}
            <div className="pt-4 border-t border-cream-200/90 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-crimson flex-shrink-0" />
                <span className="text-xs font-medium text-taupe">Garansi Toko Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                <span className="text-xs font-medium text-taupe">Pengecekan Transparan</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-xs font-medium text-taupe">Banyak Layanan Bisa Ditunggu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card with Gold Accents */}
          <div className="lg:col-span-5 relative">
            {/* Outer Accent Card Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-cream-100 p-6 sm:p-7 border-2 border-gold/60 shadow-warm-lg">
              {/* Inner Decorative Corner Lines */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none"></div>

              {/* Central ASC Emblem & Showcase */}
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    src="/assets/logo-asc.svg"
                    alt="Emblem Resmi Agung Store & Care"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="font-bold text-xl sm:text-2xl text-charcoal">
                    Standar Bengkel &amp; Toko
                  </h2>
                  <p className="text-xs text-taupe font-medium max-w-xs mx-auto">
                    Kombinasi ketelitian teknisi profesional &amp; jaminan kualitas suku cadang terbaik.
                  </p>
                </div>

                {/* 3 Pillars Box */}
                <div className="w-full space-y-2.5 pt-2 text-left">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-cream-50 border border-cream-300">
                    <div className="p-1.5 rounded bg-crimson/10 text-crimson flex-shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-charcoal">Peralatan Diagnosa Lengkap</h3>
                      <p className="text-[11px] text-taupe leading-snug">
                        Thermal imaging, DC power meter &amp; osiloskop untuk analisa akurat.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-cream-50 border border-cream-300">
                    <div className="p-1.5 rounded bg-forest/10 text-forest flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-charcoal">Unit Laptop Lulus QC 20 Titik</h3>
                      <p className="text-[11px] text-taupe leading-snug">
                        Layar, baterai, keyboard, port, hingga suhu stress-test terverifikasi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notice Pill */}
                <div className="w-full pt-1">
                  <div className="text-[11px] font-medium text-taupe bg-gold-light/20 py-2 px-3 rounded border border-gold/40 text-center">
                    Jual-Beli Khusus <strong className="text-crimson">Laptop</strong> • Servis Melayani <strong className="text-charcoal">Laptop, PC &amp; HP</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

