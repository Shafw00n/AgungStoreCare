import React from 'react';
import { storeConfig } from '../data/storeConfig';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ExternalLink, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

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

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={storeConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Agung Store & Care"
                className="w-9 h-9 rounded-lg bg-cream-50 border border-cream-300 hover:border-gold flex items-center justify-center text-charcoal hover:text-crimson transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={storeConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Agung Store & Care"
                className="w-9 h-9 rounded-lg bg-cream-50 border border-cream-300 hover:border-gold flex items-center justify-center text-charcoal hover:text-crimson transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl("Halo Agung Store & Care, saya ingin bertanya...")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Agung Store & Care"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-crimson text-cream-50 text-xs font-semibold hover:bg-crimson-dark transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-light" />
                <span>Chat Admin</span>
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
