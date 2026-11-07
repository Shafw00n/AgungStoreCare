import React from 'react';
import { storeConfig } from '../data/storeConfig';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

const ThreadsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 192 192" className={className} fill="currentColor">
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4384 44.7442 97.3148 44.7438 97.1911 44.7438C77.4042 44.7438 61.9897 55.4389 54.9926 73.8052L72.2356 80.3708C77.1064 67.5855 86.8227 61.854 97.1866 61.854C97.2721 61.854 97.3582 61.8543 97.4449 61.8548C109.914 61.9343 118.825 69.9678 120.916 83.1895C114.73 81.332 108.067 80.3725 101.121 80.3725C69.7571 80.3725 50.8492 97.5146 50.8492 122.956C50.8492 144.204 65.5182 157.875 85.3406 157.875C103.204 157.875 115.176 148.067 121.282 134.464C126.879 146.997 137.603 154.341 152.062 154.341C164.536 154.341 174.521 146.68 178.673 133.882L161.43 127.316C159.227 134.103 155.679 137.231 152.062 137.231C142.231 137.231 137.402 128.529 137.402 110.871C137.402 109.288 137.443 107.72 137.525 106.171C144.912 110.155 151.721 115.688 156.407 122.924L171.853 113.626C165.419 103.684 155.703 96.0825 144.025 90.3551L141.537 88.9883ZM101.121 139.765C83.9932 139.765 74.4578 131.063 74.4578 122.956C74.4578 108.318 86.8242 98.4825 101.121 98.4825C108.067 98.4825 114.73 99.442 120.916 101.299C119.866 123.633 112.556 139.765 101.121 139.765Z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="lokasi" className="bg-cream-100 border-t-2 border-gold/40 text-charcoal pt-14 sm:pt-16 pb-28 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden shadow-sm border border-gold/70">
                <img
                  src="/assets/logo-asc.png"
                  alt="Logo Agung Store & Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-crimson">
                  AGUNG STORE &amp; CARE
                </h3>
                <p className="text-xs text-taupe font-medium">
                  Jual • Beli • Service Spesialis (Laptop, PC &amp; Handphone)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-taupe leading-relaxed">
              Pusat perbaikan dan etalase laptop terpercaya. Menjunjung tinggi transparansi kerja teknisi, kepastian estimasi biaya, dan kualitas suku cadang demi ketenangan penggunaan jangka panjang.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-charcoal pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                <span>{storeConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-forest flex-shrink-0" />
                <span>{storeConfig.formattedPhone} (WhatsApp &amp; Panggilan)</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <p>{storeConfig.operationalHours.weekdays}</p>
                  <p className="text-taupe">{storeConfig.operationalHours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links (Threads & WhatsApp) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={storeConfig.socialLinks.threads}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads Agung Store & Care"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 hover:border-gold text-charcoal hover:text-crimson text-xs font-semibold transition-all duration-200 shadow-sm active:scale-95"
              >
                <ThreadsIcon className="w-4 h-4 flex-shrink-0" />
                <span>Threads @agung.storecare</span>
              </a>

              <a
                href={createWhatsAppUrl("Halo Agung Store & Care, saya ingin bertanya...")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Agung Store & Care"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-crimson text-cream-50 border border-gold text-xs font-bold hover:bg-crimson-dark transition-all duration-200 shadow-sm active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
                <span>WhatsApp Admin</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-base text-charcoal border-b border-cream-300 pb-2">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-taupe">
              <li>
                <a href="#beranda" className="hover:text-crimson transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Beranda Utama</span>
                </a>
              </li>
              <li>
                <a href="#katalog-laptop" className="hover:text-crimson transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Katalog Jual-Beli Laptop</span>
                </a>
              </li>
              <li>
                <a href="#service-laptop-pc" className="hover:text-crimson transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Servis Laptop &amp; PC (7 Layanan)</span>
                </a>
              </li>
              <li>
                <a href="#service-phone" className="hover:text-crimson transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Servis Handphone (5 Layanan)</span>
                </a>
              </li>
              <li>
                <a href="#alur-servis" className="hover:text-crimson transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Alur &amp; Garansi Servis</span>
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-cream-50 border border-gold/40 space-y-1">
                <span className="text-[11px] font-bold text-crimson block">Perhatian Batasan Layanan:</span>
                <p className="text-[11px] text-taupe leading-snug">
                  Fitur Jual-Beli hanya melayani unit Laptop. Perangkat PC dan HP khusus untuk perbaikan servis saja.
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between border-b border-cream-300 pb-2">
              <h4 className="font-bold text-base text-charcoal">
                Peta Lokasi Toko
              </h4>
              <a
                href={storeConfig.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-crimson hover:underline inline-flex items-center gap-1"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-xl overflow-hidden border border-cream-300 bg-cream-200 h-48 sm:h-56 shadow-sm relative">
              <iframe
                title="Peta Lokasi Agung Store & Care"
                src={storeConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 contrast-95"
              ></iframe>
            </div>
            <p className="text-[11px] text-taupe italic">
              *Tersedia parkir kendaraan roda 2 &amp; roda 4 di area ruko.
            </p>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-taupe">
          <p>© {new Date().getFullYear()} Agung Store &amp; Care (ASC). Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest"></span>
            <span>Static Profile &bull; Hosted on Vercel Free Tier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
