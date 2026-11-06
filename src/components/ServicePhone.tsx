import React from 'react';
import { servicesPhone } from '../data/servicesData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { 
  ZapOff, 
  RotateCcw, 
  Droplets, 
  ScanFace, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const phoneIconMap: Record<string, React.ReactNode> = {
  ZapOff: <ZapOff className="w-5 h-5" />,
  RotateCcw: <RotateCcw className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  ScanFace: <ScanFace className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
};

export const ServicePhone: React.FC = () => {
  return (
    <section id="service-phone" className="py-16 sm:py-24 bg-cream-100 border-t border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold/70 text-xs font-semibold uppercase text-charcoal">
            <span>Spesialis Smartphone Android &amp; iPhone</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Layanan Servis <span className="text-crimson italic">Handphone &amp; Gadget</span>
          </h2>

          <p className="text-sm sm:text-base text-taupe">
            Selain laptop &amp; PC, tim teknisi mikroskopis kami melayani perbaikan smartphone dengan tingkat kerumitan tinggi—mulai dari kemasukan air, modul Face ID, hingga reballing IC mesin.
          </p>
        </div>

        {/* 5 Phone Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesPhone.map((service, index) => {
            const isWaterOrMatot = service.id === 'phone-matot' || service.id === 'phone-water-damage';

            return (
              <div
                key={service.id}
                className={`relative rounded-xl bg-cream-50 p-6 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-warm ${
                  isWaterOrMatot
                    ? 'border-2 border-gold/70 bg-gradient-to-b from-cream-50 to-gold-light/10'
                    : 'border-cream-300 hover:border-gold'
                }`}
              >
                <div>
                  {/* Top Header: Icon & Sequence Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cream-100 border border-gold/50 flex items-center justify-center text-crimson shadow-sm">
                      {phoneIconMap[service.iconName] || <Smartphone className="w-5 h-5" />}
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-dark px-2.5 py-1 rounded-full bg-gold-light/20 border border-gold/30">
                      HP-0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-cream-100 text-charcoal border border-cream-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata & WhatsApp CTA */}
                <div className="space-y-3 pt-4 border-t border-cream-200">
                  <div className="flex items-center justify-between text-xs text-taupe font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-dark" />
                      <span>{service.durationEstimate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                      <span className="truncate max-w-[140px]">{service.warranty}</span>
                    </div>
                  </div>

                  <a
                    href={createWhatsAppUrl(service.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cream-100 hover:bg-crimson text-charcoal hover:text-cream-50 border border-cream-300 hover:border-gold font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group"
                  >
                    <MessageSquare className="w-4 h-4 text-crimson group-hover:text-gold-light transition-colors" />
                    <span>Konsultasi HP via WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5 text-taupe group-hover:text-cream-50 transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Notice Card on Scope */}
          <div className="rounded-xl bg-crimson/5 p-6 border-2 border-dashed border-crimson/30 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-crimson uppercase tracking-wider">
                Catatan Penting Layanan HP
              </span>
              <h4 className="font-bold text-lg text-charcoal">
                Fokus Spesialisasi HP Hanya untuk Perbaikan
              </h4>
              <p className="text-xs text-taupe leading-relaxed">
                Mohon diperhatikan bahwa Agung Store &amp; Care <strong>tidak melayani jual-beli atau tukar tambah Handphone</strong>. Kategori HP dikhususkan murni untuk layanan servis, penggantian suku cadang, dan pemulihan sistem.
              </p>
            </div>

            <div className="pt-4 border-t border-crimson/15">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-forest" />
                <span>Jual-Beli Unit Khusus Laptop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

