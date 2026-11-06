import React from 'react';
import { servicesLaptopPC } from '../data/servicesData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { 
  Cpu, 
  HardDrive, 
  AppWindow, 
  Sparkles, 
  Flame, 
  Wrench, 
  Laptop, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight,
  Info
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />,
  AppWindow: <AppWindow className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
};

export const ServiceLaptopPC: React.FC = () => {

  return (
    <section id="service-laptop-pc" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-gold/70 text-xs font-semibold uppercase text-charcoal">
            <span>Bengkel &amp; Perbaikan Hardware</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Layanan Servis <span className="text-crimson italic">Laptop &amp; PC Desktop</span>
          </h2>

          <p className="text-sm sm:text-base text-taupe">
            Didukung peralatan ukur modern dan teknisi handal. Pengerjaan transparan di depan meja teknisi dengan biaya diinformasikan di awal sebelum tindakan.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesLaptopPC.map((service, index) => {
            const isMesin = service.id === 'perbaikan-mesin';

            return (
              <div
                key={service.id}
                className={`relative rounded-xl bg-cream-100 p-6 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-warm ${
                  isMesin 
                    ? 'border-2 border-crimson/60 bg-gradient-to-b from-cream-100 to-crimson/5 md:col-span-2 lg:col-span-1' 
                    : 'border-cream-300 hover:border-gold'
                }`}
              >
                <div>
                  {/* Top Header: Icon & Sequence Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cream-50 border border-gold/60 flex items-center justify-center text-crimson shadow-sm">
                      {iconMap[service.iconName] || <Wrench className="w-5 h-5" />}
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-dark px-2.5 py-1 rounded-full bg-gold-light/20 border border-gold/30">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
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
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-cream-50 text-charcoal border border-cream-200"
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
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cream-50 hover:bg-crimson text-charcoal hover:text-cream-50 border border-cream-300 hover:border-gold font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group"
                  >
                    <MessageSquare className="w-4 h-4 text-crimson group-hover:text-gold-light transition-colors" />
                    <span>Konsultasi &amp; Tanya Biaya</span>
                    <ChevronRight className="w-3.5 h-3.5 text-taupe group-hover:text-cream-50 transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Bengkel Policy Callout */}
        <div className="mt-12 p-5 rounded-xl bg-cream-100 border border-gold/50 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-full bg-crimson/10 text-crimson flex-shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-0.5 flex-1">
            <h4 className="font-serif font-bold text-sm text-charcoal">
              Prinsip Kerja Agung Store &amp; Care: Tanpa Biaya Tersembunyi
            </h4>
            <p className="text-xs text-taupe">
              Pengecekan awal dan estimasi biaya selalu diinfokan kepada Anda sebelum eksekusi perbaikan. Jika tidak jadi diservis karena komponen langka atau biaya tidak disepakati, unit dapat diambil kembali tanpa beban pengerjaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
