import React, { useState, useEffect } from 'react';
import { LaptopItem, laptopsData } from '../data/laptopsData';
import { getLaptopInquiryUrl } from '../utils/whatsapp';
import { 
  Check, 
  Search, 
  X, 
  ChevronRight, 
  Cpu, 
  HardDrive, 
  Layers, 
  Monitor, 
  ShieldCheck, 
  ZoomIn, 
  MessageSquare
} from 'lucide-react';

type FilterCategory = 'all' | 'ready' | 'under-5m' | 'kerja-kuliah' | 'gaming-grafis';

export const LaptopShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLaptop, setSelectedLaptop] = useState<LaptopItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when detail modal is open on iOS & Android
  useEffect(() => {
    if (selectedLaptop) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [selectedLaptop]);

  // Filter logic
  const filteredLaptops = laptopsData.filter((item) => {
    // Search query filter
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.processor.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === 'ready') return item.status === 'Ready';
    if (activeFilter === 'under-5m') return item.numericPrice <= 5000000;
    if (activeFilter === 'kerja-kuliah') return item.category === 'kerja-kuliah';
    if (activeFilter === 'gaming-grafis') return item.category === 'gaming-grafis';

    return true;
  });

  const openLightbox = (laptop: LaptopItem) => {
    setSelectedLaptop(laptop);
    setActiveImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedLaptop(null);
    setActiveImageIndex(0);
  };

  return (
    <section id="katalog-laptop" className="py-16 sm:py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-gold/70 text-xs font-semibold uppercase text-charcoal">
            <span>Pajangan &amp; Etalase Unit Resmi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Katalog Laptop Pilihan <span className="text-crimson italic">Agung Store</span>
          </h2>

          <p className="text-sm sm:text-base text-taupe">
            Seluruh unit telah melalui uji fungsi kelayakan ketat (*QC Check*), bebas kendala tersembunyi, dan dilengkapi jaminan garansi toko. Klik foto untuk melihat detail fisik multi-sudut.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 mb-8 bg-cream-100/70 p-3 sm:p-4 rounded-xl border border-cream-300">
          {/* Swipeable Filter Pills on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto -mx-1 px-1 touch-pan-x">
            <button
              onClick={() => setActiveFilter('all')}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeFilter === 'all'
                  ? 'bg-crimson text-cream-50 shadow-sm border border-gold'
                  : 'bg-cream-50 text-charcoal hover:bg-cream-200 border border-cream-300'
              }`}
            >
              Semua Unit ({laptopsData.length})
            </button>
            <button
              onClick={() => setActiveFilter('ready')}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeFilter === 'ready'
                  ? 'bg-forest text-cream-50 shadow-sm border border-forest'
                  : 'bg-cream-50 text-charcoal hover:bg-cream-200 border border-cream-300'
              }`}
            >
              Ready Stock
            </button>
            <button
              onClick={() => setActiveFilter('under-5m')}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeFilter === 'under-5m'
                  ? 'bg-crimson text-cream-50 shadow-sm border border-gold'
                  : 'bg-cream-50 text-charcoal hover:bg-cream-200 border border-cream-300'
              }`}
            >
              Di Bawah 5 Juta
            </button>
            <button
              onClick={() => setActiveFilter('kerja-kuliah')}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeFilter === 'kerja-kuliah'
                  ? 'bg-crimson text-cream-50 shadow-sm border border-gold'
                  : 'bg-cream-50 text-charcoal hover:bg-cream-200 border border-cream-300'
              }`}
            >
              Kerja &amp; Kuliah
            </button>
            <button
              onClick={() => setActiveFilter('gaming-grafis')}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeFilter === 'gaming-grafis'
                  ? 'bg-crimson text-cream-50 shadow-sm border border-gold'
                  : 'bg-cream-50 text-charcoal hover:bg-cream-200 border border-cream-300'
              }`}
            >
              Grafis &amp; Gaming
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <input
              type="text"
              placeholder="Cari seri / prosesor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-lg text-sm bg-cream-50 border border-cream-300 text-charcoal placeholder-taupe/60 focus:outline-none focus:border-gold transition-colors"
            />
            <Search className="w-4 h-4 text-taupe absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Laptop Cards Grid */}
        {filteredLaptops.length === 0 ? (
          <div className="text-center py-16 bg-cream-100 rounded-2xl border border-cream-300">
            <p className="text-base font-medium text-taupe">Tidak ada unit yang cocok dengan filter atau pencarian Anda.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-crimson underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredLaptops.map((laptop) => {
              const isReady = laptop.status === 'Ready';
              const isBooked = laptop.status === 'Booked';

              return (
                <div
                  key={laptop.id}
                  className="group bg-cream-100 rounded-xl overflow-hidden border border-cream-300 hover:border-gold transition-all duration-300 shadow-sm hover:shadow-warm flex flex-col justify-between"
                >
                  <div>
                    {/* Image Preview with Status Badge & Zoom Trigger */}
                    <div 
                      className="relative h-52 sm:h-56 bg-cream-200 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(laptop)}
                    >
                      <img
                        src={laptop.images[0]}
                        alt={laptop.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-50/90 text-charcoal text-xs font-semibold shadow">
                          <ZoomIn className="w-3.5 h-3.5 text-crimson" />
                          <span>Klik Zoom Foto ({laptop.images.length})</span>
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        {isReady && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-forest text-cream-50 text-[11px] font-bold tracking-wide shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            Ready Stock
                          </span>
                        )}
                        {isBooked && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-dark text-cream-50 text-[11px] font-bold tracking-wide shadow-sm">
                            Booked (DP)
                          </span>
                        )}
                        {!isReady && !isBooked && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-taupe text-cream-50 text-[11px] font-bold tracking-wide shadow-sm">
                            Terjual (Arsip)
                          </span>
                        )}
                      </div>

                      {/* Brand Label */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cream-50/90 text-charcoal border border-cream-300">
                          {laptop.brand}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4">
                      {/* Name & Price */}
                      <div className="space-y-1">
                        <h3 
                          className="font-bold text-lg text-charcoal group-hover:text-crimson transition-colors line-clamp-1 cursor-pointer"
                          onClick={() => openLightbox(laptop)}
                        >
                          {laptop.name}
                        </h3>
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-xl font-bold text-crimson">
                            {laptop.price}
                          </span>
                          <span className="text-[11px] font-medium text-taupe">
                            Garansi Toko Aktif
                          </span>
                        </div>
                      </div>

                      {/* Key Specs Matrix */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-taupe pt-1">
                        <div className="flex items-center gap-1.5 bg-cream-50 p-2 rounded border border-cream-200">
                          <Cpu className="w-3.5 h-3.5 text-crimson flex-shrink-0" />
                          <span className="truncate">{laptop.specs.processor.split('(')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-cream-50 p-2 rounded border border-cream-200">
                          <Layers className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span className="truncate font-mono">{laptop.specs.ram.split(' ')[0]} RAM</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-cream-50 p-2 rounded border border-cream-200">
                          <HardDrive className="w-3.5 h-3.5 text-taupe flex-shrink-0" />
                          <span className="truncate font-mono">{laptop.specs.storage.split(' ')[0]} SSD</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-cream-50 p-2 rounded border border-cream-200">
                          <Monitor className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                          <span className="truncate">{laptop.specs.display.split(' ')[0]}</span>
                        </div>
                      </div>

                      {/* Condition Note */}
                      <p className="text-xs text-taupe line-clamp-2 bg-cream-50/60 p-2.5 rounded border border-cream-200/80 italic">
                        "{laptop.conditionNote}"
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => openLightbox(laptop)}
                      className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-cream-50 text-charcoal border border-cream-300 hover:border-gold hover:text-crimson transition-all text-center"
                    >
                      Detail &amp; Foto
                    </button>

                    <a
                      href={getLaptopInquiryUrl(laptop.name, laptop.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-crimson text-cream-50 border border-gold hover:bg-crimson-dark transition-all text-center shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-gold-light" />
                      <span>{isReady ? 'Tanya Unit Ini' : 'Cari Seri Serupa'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox / Detail Modal (Responsive Bottom Sheet on Mobile) */}
      {selectedLaptop && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeLightbox}
        >
          <div 
            className="relative bg-cream-50 rounded-t-2xl sm:rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border-t-2 sm:border-2 border-gold max-h-[92vh] sm:max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-cream-300 bg-cream-100 flex-shrink-0">
              <div className="pr-2">
                <span className="text-[11px] font-bold text-taupe uppercase tracking-wider">{selectedLaptop.brand}</span>
                <h3 className="font-bold text-base sm:text-xl text-charcoal leading-snug">{selectedLaptop.name}</h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-taupe hover:text-crimson active:bg-cream-200 transition-colors flex-shrink-0"
                aria-label="Tutup Detail"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Image Gallery Viewer */}
              <div className="space-y-3">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-cream-200 border border-cream-300">
                  <img
                    src={selectedLaptop.images[activeImageIndex]}
                    alt={`${selectedLaptop.name} angle ${activeImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-charcoal/70 text-cream-50 text-xs font-mono">
                    Foto {activeImageIndex + 1} dari {selectedLaptop.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2">
                  {selectedLaptop.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-crimson shadow-sm scale-102' : 'border-cream-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Status Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-cream-100 border border-cream-300">
                <div>
                  <span className="text-xs text-taupe">Harga Unit</span>
                  <div className="font-mono text-2xl font-bold text-crimson">{selectedLaptop.price}</div>
                </div>
                <div>
                  {selectedLaptop.status === 'Ready' && (
                    <span className="px-3 py-1.5 rounded-lg bg-forest text-cream-50 text-xs font-bold">
                      Ready Stock di Toko
                    </span>
                  )}
                  {selectedLaptop.status === 'Booked' && (
                    <span className="px-3 py-1.5 rounded-lg bg-gold-dark text-cream-50 text-xs font-bold">
                      Booked (Dalam Konfirmasi)
                    </span>
                  )}
                  {selectedLaptop.status === 'Sold' && (
                    <span className="px-3 py-1.5 rounded-lg bg-taupe text-cream-50 text-xs font-bold">
                      Sudah Terjual (Arsip)
                    </span>
                  )}
                </div>
              </div>

              {/* Full Specs List */}
              <div className="space-y-3">
                <h4 className="font-bold text-base text-charcoal flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-crimson" />
                  <span>Spesifikasi Teknis Lengkap</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1">
                    <span className="text-taupe font-medium">Prosesor (CPU)</span>
                    <p className="font-semibold text-charcoal">{selectedLaptop.specs.processor}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1">
                    <span className="text-taupe font-medium">Memori (RAM)</span>
                    <p className="font-semibold text-charcoal font-mono">{selectedLaptop.specs.ram}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1">
                    <span className="text-taupe font-medium">Penyimpanan (Storage)</span>
                    <p className="font-semibold text-charcoal font-mono">{selectedLaptop.specs.storage}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1">
                    <span className="text-taupe font-medium">Layar &amp; Tampilan</span>
                    <p className="font-semibold text-charcoal">{selectedLaptop.specs.display}</p>
                  </div>
                  {selectedLaptop.specs.graphics && (
                    <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1 sm:col-span-2">
                      <span className="text-taupe font-medium">Kartu Grafis (GPU)</span>
                      <p className="font-semibold text-charcoal">{selectedLaptop.specs.graphics}</p>
                    </div>
                  )}
                  {selectedLaptop.specs.battery && (
                    <div className="p-3 rounded-lg bg-cream-100 border border-cream-200 space-y-1 sm:col-span-2">
                      <span className="text-taupe font-medium">Kondisi &amp; Ketahanan Baterai</span>
                      <p className="font-semibold text-charcoal">{selectedLaptop.specs.battery}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Physical Condition Note */}
              <div className="p-4 rounded-xl bg-cream-100 border-l-4 border-gold border border-cream-300 space-y-1">
                <span className="text-xs font-bold text-charcoal">Catatan Fisik &amp; Kelengkapan:</span>
                <p className="text-xs text-taupe leading-relaxed">{selectedLaptop.conditionNote}</p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-charcoal">Keunggulan Unit Ini:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedLaptop.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cream-200 text-charcoal text-xs font-medium border border-cream-300">
                      <Check className="w-3.5 h-3.5 text-forest" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Sticky CTA Footer (iOS Safe Area Supported) */}
            <div className="p-4 sm:p-5 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] border-t border-cream-300 bg-cream-100 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <div className="text-xs text-taupe hidden sm:block">
                Konsultasikan langsung ketersediaan unit ini dengan admin ASC.
              </div>
              <a
                href={getLaptopInquiryUrl(selectedLaptop.name, selectedLaptop.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-crimson text-cream-50 font-bold text-sm border border-gold active:bg-crimson-dark transition-all shadow-sm active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-gold-light" />
                <span>Tanya Ketersediaan Unit via WA</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
