export interface StoreConfig {
  name: string;
  shortName: string;
  tagline: string;
  whatsappNumber: string; // international format without + or spaces, e.g. "6282212345678"
  formattedPhone: string;
  address: {
    full: string;
    street: string;
    city: string;
    notes: string;
  };
  operationalHours: {
    weekdays: string;
    sunday: string;
    holidayNote: string;
  };
  socialLinks: {
    instagram: string;
    tiktok: string;
    facebook: string;
    googleMaps: string;
  };
  googleMapsEmbedUrl: string;
}

export const storeConfig: StoreConfig = {
  name: "Agung Store & Care",
  shortName: "ASC",
  tagline: "Pusat Jual-Beli Laptop Terkurasi & Spesialis Servis Perangkat Anda",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp aktif toko
  formattedPhone: "0812-3456-7890",
  address: {
    full: "Jl. Veteran No. 45, Ruko Metro Square Blok B-3 (Sebelah Barat Kampus / Dekat Alun-Alun)",
    street: "Jl. Veteran No. 45, Ruko Metro Square Blok B-3",
    city: "Indonesia",
    notes: "Parkir luas, ruang tunggu ber-AC, dan meja teknisi transparan.",
  },
  operationalHours: {
    weekdays: "Senin – Sabtu: 09.00 – 21.00 WIB",
    sunday: "Minggu: 10.00 – 18.00 WIB",
    holidayNote: "Hari Libur Nasional tetap buka (kecuali Idul Fitri & Tahun Baru)",
  },
  socialLinks: {
    instagram: "https://instagram.com/agungstorecare",
    tiktok: "https://tiktok.com/@agungstorecare",
    facebook: "https://facebook.com/agungstorecare",
    googleMaps: "https://maps.google.com/?q=Agung+Store+and+Care",
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126500.0!2d112.6!3d-7.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnNDguMCJTIDExMsKwMzYnMDAuMCJF!5e0!3m2!1sid!2sid!4v1650000000000!5m2!1sid!2sid",
};
