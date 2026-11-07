import React, { useState } from 'react';
import { ArrowLeftRight, Send, CheckCircle2, Laptop } from 'lucide-react';
import { getTradeInWhatsAppUrl } from '../utils/whatsapp';

export const TradeInBanner: React.FC = () => {
  const [brandModel, setBrandModel] = useState('');
  const [specs, setSpecs] = useState('');
  const [condition, setCondition] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getTradeInWhatsAppUrl({
      brandModel,
      specs,
      condition,
      expectedPrice,
    });
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-cream-100 border-y border-cream-300 relative overflow-hidden">
      {/* Decorative Warm Accent Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 border-2 border-gold/70 p-6 sm:p-10 shadow-warm">
          {/* Inner Accent Line */}
          <div className="absolute top-2 left-2 right-2 bottom-2 rounded-xl border border-gold/30 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* Left Column: Description & Benefits */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/30 text-crimson text-xs font-bold uppercase tracking-wider">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Program Jual &amp; Tukar Tambah Laptop</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal leading-snug">
                Punya Laptop Lama yang Ingin Dijual atau Ditukar Tambah?
              </h3>

              <p className="text-sm sm:text-base text-taupe leading-relaxed">
                Agung Store &amp; Care menerima pembelian laptop seken Anda dengan taksiran harga wajar dan proses pengecekan cepat tanpa berbelit-belit. Bisa tukar tambah langsung dengan stok laptop yang ada di etalase kami!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                  <span>Taksiran Harga Transparan &amp; Fair</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                  <span>Langsung Cair / Potong Harga Unit</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                  <span>Bisa Kondisi Normal Maupun Minus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                  <span>Jaminan Hapus Data Pribadi Aman</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Interactive WhatsApp Quotation Form */}
            <div className="lg:col-span-6 bg-cream-50 rounded-xl p-5 sm:p-6 border border-cream-300 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-4">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-crimson" />
                  <span className="text-xs font-bold text-charcoal uppercase tracking-wider">Form Estimasi Penawaran</span>
                </div>
                <span className="text-[11px] text-taupe font-medium">Kirim format via WhatsApp</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-charcoal mb-1">
                    Merk &amp; Tipe Laptop Anda:
                  </label>
                  <input
                    type="text"
                    required
                    value={brandModel}
                    onChange={(e) => setBrandModel(e.target.value)}
                    placeholder="Contoh: Asus Vivobook A412DA / Lenovo Ideapad 330"
                    className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold text-charcoal placeholder-taupe/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Spesifikasi (Proc / RAM / SSD):
                    </label>
                    <input
                      type="text"
                      value={specs}
                      onChange={(e) => setSpecs(e.target.value)}
                      placeholder="Contoh: Core i5 Gen 8 / 8GB / 256GB"
                      className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold text-charcoal placeholder-taupe/60"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal mb-1">
                      Ekspektasi Harga (Opsional):
                    </label>
                    <input
                      type="text"
                      value={expectedPrice}
                      onChange={(e) => setExpectedPrice(e.target.value)}
                      placeholder="Contoh: Rp 3.000.000"
                      className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold text-charcoal placeholder-taupe/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal mb-1">
                    Kondisi Fisik, Kelengkapan &amp; Minus (Bila Ada):
                  </label>
                  <textarea
                    rows={2}
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    placeholder="Contoh: Fisik 90%, charger bawaan ada, baterai tahan 2 jam, layar jernih normal."
                    className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-cream-300 focus:outline-none focus:border-gold text-charcoal placeholder-taupe/60"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 min-h-[48px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-crimson text-cream-50 font-bold text-sm border border-gold active:bg-crimson-dark transition-all duration-200 shadow-sm active:scale-98"
                >
                  <Send className="w-4 h-4 text-gold-light" />
                  <span>Tawarkan Laptop Anda via WA Sekarang</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
