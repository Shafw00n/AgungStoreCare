# Agung Store & Care (ASC) — Web Profile & Catalog Showcase

Situs profil resmi dan katalog etalase untuk **Agung Store & Care** — spesialis jual-beli laptop terkurasi dan layanan servis perangkat keras (*Laptop, PC Desktop, dan Handphone*).

Dibangun dengan arsitektur **Static Single-Page Application (SPA)** menggunakan **Vite + React (TypeScript) + Tailwind CSS**, bebas biaya operasional bulanan (*Zero Database / Server Cost*), dan siap di-deploy langsung ke **Vercel Hobby (Free) Plan**.

---

## 🎨 Karakteristik & Visual Design System (*Anti-AI-Slop*)
* **Palet Warna:**
  * Background Utama: *Warm Alabaster Cream* (`#FAF6F0`)
  * Background Sekunder: *Soft Sand Cream* (`#F2EAE0`)
  * Brand Primer: *ASC Heritage Crimson* (`#8B2318` & Hover: `#68170F`)
  * Aksen Metalik: *Brushed Antique Gold* (`#C5A059` & `#E6D2A8`)
  * Teks: *Espresso Charcoal* (`#261815`)
* **Tipografi:** Fraunces (Heading Serif), Plus Jakarta Sans (UI Body), JetBrains Mono (Harga & Spesifikasi).
* **Motif Desain:** Garis ganda melingkar (*double-line*) yang diadaptasi langsung dari medali logo Agung Store & Care.

---

## 🧭 Struktur Layanan & Batasan Bisnis
1. **Jual-Beli & Tukar Tambah:** Khusus unit **Laptop**.
2. **Layanan Servis Laptop & PC (7 Layanan):** Upgrade RAM, Upgrade SSD, Install Ulang OS, Cleaning Hardware, Repasta Thermal Paste, Perbaikan Mesin (Motherboard/IC), dan Pergantian Part.
3. **Layanan Servis Handphone (5 Layanan):** Mati Total (Matot), Bootloop/Stuck Logo, Water Damage, Perbaikan Face ID, dan Pergantian Part HP.
4. **Konversi Direct-to-WhatsApp:** Setiap produk dan layanan memiliki format pesan WhatsApp otomatis yang siap kirim ke admin.

---

## 📁 Struktur Proyek
```text
AgungStoreCare/
├── public/
│   ├── assets/
│   │   └── logo-asc.svg             # Logo vektor resmi ASC (merah-emas)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Navigasi sticky & CTA WhatsApp
│   │   ├── Hero.tsx                 # Headline editorial & value proposition
│   │   ├── LaptopShowcase.tsx       # Etalase laptop, filter, & modal detail lightbox
│   │   ├── TradeInBanner.tsx        # Banner & form penawaran tukar tambah laptop
│   │   ├── ServiceLaptopPC.tsx      # Seksi 7 layanan servis Laptop & PC
│   │   ├── ServicePhone.tsx         # Seksi 5 layanan servis Handphone
│   │   ├── ServiceWorkflow.tsx      # 4 langkah alur servis & garansi transparan
│   │   └── Footer.tsx               # Alamat, jam operasional, sosmed & Google Maps
│   ├── data/
│   │   ├── storeConfig.ts           # Nomor WhatsApp toko, alamat, jam buka
│   │   ├── laptopsData.ts           # Data katalog pajangan laptop
│   │   └── servicesData.ts          # Data layanan teknis & pesan otomatis WA
│   ├── utils/
│   │   └── whatsapp.ts              # Generator URL wa.me dengan pre-filled text
│   ├── index.css                    # Setup Tailwind & custom motif border
│   ├── App.tsx                      # Halaman utama SPA
│   └── main.tsx
├── vercel.json                      # Caching header untuk static deployment Vercel
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Panduan Menjalankan Proyek Lokal

### 1. Menjalankan Server Development
```bash
npm run dev
```
Buka browser pada alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### 2. Membangun Bundle Produksi (*Build*)
```bash
npm run build
```
Hasil kompilasi statis akan berada di folder `dist/` dan siap dideploy ke layanan hosting manapun.

### 3. Menguji Hasil Build (*Preview*)
```bash
npm run preview
```

---

## ⚙️ Mengubah Data Toko & Produk

Semua informasi toko dan produk disimpan rapi dalam file TypeScript statis tanpa database:
* **Nomor WhatsApp & Alamat:** Ubah di `src/data/storeConfig.ts`.
* **Katalog Laptop:** Tambah, ubah, atau arsipkan laptop di `src/data/laptopsData.ts`.
* **Daftar Layanan Servis:** Sesuaikan detail atau pesan WhatsApp di `src/data/servicesData.ts`.

---

## 🌐 Panduan Deployment ke Vercel (Gratis)

1. Hubungkan repositori GitHub proyek ini ke akun [Vercel](https://vercel.com).
2. Pilih framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Klik **Deploy**. Konfigurasi caching otomatis ditangani oleh `vercel.json`.

