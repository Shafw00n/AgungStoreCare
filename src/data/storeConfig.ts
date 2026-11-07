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
    threads: string;
    googleMaps: string;
  };
  googleMapsEmbedUrl: string;
}

export const storeConfig: StoreConfig = {
  name: "Agung Store & Care",
  shortName: "ASC",
  tagline: "Pusat Jual-Beli Laptop Terkurasi & Spesialis Servis Perangkat Anda",
  whatsappNumber: "6285779350634", // Nomor WhatsApp aktif toko Agung Store & Care
  formattedPhone: "0857-7935-0634",
  address: {
    full: "Jl. Pemuda Kp. Pulo RT 03/08, Cipayung, Cipayung Jaya, Kota Depok, Jawa Barat",
    street: "Jl. Pemuda Kp. Pulo RT 03/08, Cipayung, Cipayung Jaya",
    city: "Kota Depok, Jawa Barat",
    notes: "Patokan area Kp. Pulo Cipayung Jaya, Kota Depok.",
  },
  operationalHours: {
    weekdays: "Senin – Sabtu: 09.00 – 21.00 WIB",
    sunday: "Minggu: 10.00 – 18.00 WIB",
    holidayNote: "Hari Libur Nasional tetap buka (kecuali Idul Fitri & Tahun Baru)",
  },
  socialLinks: {
    threads: "https://www.threads.com/@agung.storecare?igshid=NTc4MTIwNjQ2YQ==",
    googleMaps: "https://maps.google.com/?q=Jl.+Pemuda+Kp.+Pulo+RT+03/08+Cipayung+Cipayung+Jaya+Kota+Depok",
  },
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Pemuda+Kp.+Pulo+RT+03/08+Cipayung+Jaya+Kota+Depok&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

