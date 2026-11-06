import React from 'react';
import { MessageSquare, SearchCheck, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export const ServiceWorkflow: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi & Cek Keluhan',
      desc: 'Sampaikan kendala perangkat Anda via WhatsApp atau datang langsung ke workshop ASC. Tanya estimasi awal dan konsultasi 100% gratis.',
      icon: <MessageSquare className="w-6 h-6 text-crimson" />,
    },
    {
      number: '02',
      title: 'Pengecekan & Konfirmasi Biaya',
      desc: 'Teknisi memeriksa unit secara transparan di depan Anda. Kerusakan dan rincian biaya diinformasikan secara jelas sebelum tindakan apapun.',
      icon: <SearchCheck className="w-6 h-6 text-gold-dark" />,
    },
    {
      number: '03',
      title: 'Pengerjaan Presisi & QC',
      desc: 'Perbaikan dilakukan dengan alat diagnostik standar bengkel resmi. Sebelum diserahkan, unit menjalani stress test dan uji fungsi menyeluruh.',
      icon: <Cpu className="w-6 h-6 text-crimson" />,
    },
    {
      number: '04',
      title: 'Unit Selesai & Bergaransi',
      desc: 'Perangkat siap digunakan kembali dengan performa prima, dilengkapi nota resmi dan jaminan garansi perbaikan tanpa rasa was-was.',
      icon: <ShieldCheck className="w-6 h-6 text-forest" />,
    },
  ];

  return (
    <section id="alur-servis" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-gold/70 text-xs font-semibold uppercase text-charcoal">
            <span>Standar Transparansi Kami</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            4 Langkah Mudah <span className="text-crimson italic">Servis di Agung Store &amp; Care</span>
          </h2>

          <p className="text-sm sm:text-base text-taupe">
            Kami menjamin proses perbaikan yang jujur dan profesional tanpa ada penggantian komponen tanpa izin pemilik.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-cream-100 rounded-xl p-6 border border-cream-300 hover:border-gold transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              {/* Step Sequence Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-cream-50 border border-gold/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-bold text-taupe/30 group-hover:text-gold transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-crimson transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step connector indicator for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-gold/60 pointer-events-none">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
