# Product Requirements Document (PRD): Agung Store & Care Web Profile

## 1. Ringkasan Eksekutif & Identitas Brand

**Agung Store & Care (ASC)** membutuhkan situs web profil perusahaan (*company profile* & *catalog showcase*) yang berfungsi sebagai etalase digital resmi untuk layanan servis perangkat serta jual-beli laptop. Situs ini dirancang untuk membangun kepercayaan pelanggan melalui pendekatan visual yang hangat, terpercaya, dan berkelas—menghindari kesan templat generik (*anti-AI-slop*) dan mengambil inspirasi langsung dari estetika medali merah-emas pada logo resmi **Agung Store & Care**.

Karena situs ini ditujukan untuk *deployment* tanpa biaya bulanan (*free tier*), arsitektur teknis dibangun sebagai **Static Single-Page Application (SPA)** menggunakan **Vite** yang dioptimalkan penuh untuk *hosting* gratis di **Vercel**. Seluruh interaksi pemesanan dan konsultasi diarahkan langsung ke **WhatsApp** dengan pesan otomatis yang terstruktur.

| Atribut Proyek | Spesifikasi Utama |
| :--- | :--- |
| **Nama Brand** | Agung Store & Care (ASC) |
| **Tagline Resmi (Logo)** | Jual • Beli • Service Laptop (Diperluas dengan Layanan Service PC & Handphone) |
| **Tipe Produk** | Web Profile & Etalase Katalog Statis (*No Backend / Zero Database Cost*) |
| **Target Deployment** | Vercel (Hobby / Free Plan) |
| **Build Tool & Tech Stack** | Vite + React (TypeScript) + Tailwind CSS + Lucide Icons |
| **Konversi Utama (CTA)** | Direct-to-WhatsApp API (`wa.me`) dengan *pre-filled message* per layanan/unit |

---

## 2. Tujuan Produk & Cakupan Layanan

### 2.1. Tujuan Utama
1. **Menampilkan Kredibilitas Teknis:** Memberikan kesan bengkel servis dan toko laptop yang rapi, jujur, dan ditangani oleh teknisi berpengalaman melalui tata letak editorial dan dokumentasi foto asli.
2. **Memperjelas Cakupan Layanan:** Memisahkan dengan tegas bahwa **Jual-Beli hanya melayani unit Laptop**, sedangkan **Layanan Servis mencakup Laptop, PC, dan Handphone**.
3. **Menghilangkan Biaya Operasional Server:** Menggunakan data statis berbasis JSON/TypeScript di dalam repositori sehingga klien tidak perlu membayar biaya *database* atau *cloud server* bulanan.
4. **Mempercepat Konversi Pelanggan:** Memungkinkan pengunjung langsung menanyakan ketersediaan unit laptop atau berkonsultasi mengenai kerusakan perangkat hanya dengan satu klik menuju WhatsApp admin.

### 2.2. Batasan Cakupan (*Out of Scope*)
* Tidak ada sistem keranjang belanja (*shopping cart*) atau *payment gateway* otomatis di dalam web.
* Tidak ada fitur jual-beli untuk kategori PC rakitan maupun Handphone (kategori PC dan Handphone murni hanya untuk layanan perbaikan/servis).
* Tidak ada halaman *login* pengguna atau *dashboard* admin berbasis *database* dinamis.

---

## 3. Panduan Desain Visual & Anti-AI-Slop (*Design System*)

Untuk memastikan tampilan web terlihat dirancang secara khusus (*bespoke craftsmanship*) dan bebas dari kesan "AI-Slop", pengembang wajib mematuhi aturan desain berikut.

### 3.1. Larangan Ketat (*Anti-AI-Slop Rules*)
* **Dilarang menggunakan *dark mode* neon/cyberpunk:** Hindari latar belakang hitam pekat/biru gelap dengan pendaran cahaya (*glow*) ungu, sian, atau neon yang klise pada web teknologi.
* **Dilarang menggunakan *floating 3D blobs* atau ilustrasi kartun AI:** Seluruh visual wajib menggunakan foto perangkat nyata, tekstur kertas/krem halus, dan garis pembatas geometris tegas terinspirasi dari garis ganda melingkar pada logo ASC.
* **Dilarang menggunakan *copywriting* hiperbolis khas AI:** Hindari kalimat kosong seperti *"Solusi Revolusioner Masa Depan Teknologi Anda"*. Gunakan bahasa bengkel dan toko yang lugas, jelas, dan solutif (contoh: *"Servis Mesin & Upgrade Laptop Bergaransi — Pengerjaan Transparan, Suku Cadang Teruji"*).
* **Dilarang menggunakan *shadow* berwarna yang berlebihan:** Gunakan bayangan lembut bernuansa hangat (`rgba(44, 26, 23, 0.06)`) dan *border* tipis berwarna emas redup atau krem tua.

### 3.2. Palet Warna (*Crimson, Warm Cream & Brushed Gold*)
Palet warna diekstraksi langsung dari logo **Agung Store & Care** (merah marun gelap dengan aksen emas metalik) dan dipadukan dengan latar belakang *cream* kalem agar nyaman dibaca.

| Peran Warna | Nama Warna | Kode Hex | Penggunaan pada Antarmuka |
| :--- | :--- | :--- | :--- |
| **Background Primary** | *Warm Alabaster Cream* | `#FAF6F0` | Latar belakang utama halaman (menggantikan warna putih menyilaukan) |
| **Background Secondary** | *Soft Sand Cream* | `#F2EAE0` | Latar belakang *card* katalog, seksi bergantian, dan *filter bar* |
| **Brand Primary** | *ASC Heritage Crimson* | `#8B2318` | *Header* utama, tombol CTA primer, *badge* penting, dan aksen utama |
| **Brand Primary Hover** | *Deep Maroon* | `#68170F` | Warna *hover/active state* pada tombol merah dan *footer* |
| **Accent Metallic** | *Brushed Antique Gold* | `#C5A059` | *Border* kartu pilihan, ikon layanan, garis pemisah tipis, dan aksen logo |
| **Accent Gold Light** | *Champagne Tint* | `#E6D2A8` | Latar belakang *badge* status atau *highlight* halus |
| **Text Primary** | *Espresso Charcoal* | `#261815` | Judul dan teks paragraf utama (kontras tinggi di atas krem) |
| **Text Muted** | *Warm Taupe* | `#6E5A54` | Teks spesifikasi sekunder, *caption* foto, dan keterangan tambahan |
| **Status Available** | *Forest Olive* | `#2E6B47` | Indikator unit laptop *"Tersedia / Ready Stock"* |

### 3.3. Tipografi & Elemen UI
* **Heading Font:** `Fraunces` atau `Playfair Display` (Serif elegan yang senada dengan tipografi huruf **"AGUNG"** pada logo, memberikan kesan klasik, mapan, dan terpercaya).
* **Body & UI Font:** `Plus Jakarta Sans` (Sans-serif modern yang sangat bersih dan mudah dibaca untuk daftar spesifikasi RAM/SSD serta deskripsi teknis).
* **Monospace Font:** `JetBrains Mono` (Khusus untuk penulisan harga, kode seri laptop, dan angka kapasitas penyimpanan).
* **Gaya Komponen (*Double-Line Motif*):** Mengadopsi motif lingkaran ganda pada logo ASC, *card* utama dan *banner* seksi menggunakan *border* tipis `1px solid #C5A059` (emas) atau `#DFD3C3` (krem tua) dengan sudut melengkung halus (`border-radius: 8px` hingga `12px`).

---

## 4. Arsitektur Informasi & Spesifikasi Fitur per Seksi

Situs dirancang dalam format *Single-Page Landing Page* dengan navigasi *sticky* yang mengarah ke setiap seksi utama:

### 4.1. Sticky Header & Navigation Bar
* **Kiri:** Logo bulat **Agung Store & Care** beserta teks nama brand.
* **Tengah:** Tautan navigasi cepat (*Beranda*, *Jual-Beli Laptop*, *Service Laptop & PC*, *Service Handphone*, *Galeri &Lokasi*).
* **Kanan:** Tombol CTA ringkas **"Konsultasi Servis"** dengan aksen *border* emas yang langsung membuka WhatsApp.

### 4.2. Hero Section (Identitas & Proposisi Nilai)
* **Visual Kiri (Teks):**
  * *Eyebrow Badge* berbingkai emas: `JUAL • BELI • SERVICE LAPTOP, PC & HANDPHONE`
  * *Headline* tegas: **"Pusat Jual-Beli Laptop Terkurasi & Spesialis Perbaikan Perangkat Anda."**
  * *Sub-headline*: Penjelasan singkat bahwa Agung Store & Care melayani jual-beli unit laptop bergaransi sekaligus penanganan servis perangkat keras (Laptop, PC, dan Handphone) mulai dari perawatan rutin hingga perbaikan mesin mati total.
  * **Dual CTA:** Tombol primer merah (`#8B2318`) **"Lihat Stok & Jual-Beli Laptop"** dan tombol sekunder berbingkai emas **"Cek Layanan Servis"**.
* **Visual Kanan (Showcase):** Kolase foto *workshop* atau unit laptop unggulan dalam bingkai beraksen emas dan lencana logo ASC.

### 4.3. Seksi Pajangan & Jual-Beli Laptop (*Laptop Only*)
Seksi ini dikhususkan **hanya untuk perangkat Laptop** (tidak menerima atau memajang jual-beli PC maupun HP).
* **Banner Informasi Tukar Tambah / Jual Laptop:** Kotak informasi khusus bagi pengunjung yang ingin **menjual laptop lama** atau **tukar tambah (*trade-in*)**, lengkap dengan tombol *"Tawarkan Laptop Anda via WA"* yang otomatis mengisi format spesifikasi laptop yang ingin dijual.
* **Grid Pajangan Foto Laptop (*Photo Showcase*):**
  * Setiap kartu pajangan menampilkan **Foto Asli Unit Laptop** (mendukung *multi-angle preview* atau *lightbox zoom* saat diklik agar calon pembeli bisa melihat kemulusan fisik).
  * **Label Status:** *Ready Stock*, *Booked*, atau *Terjual (Arsip Pajangan)*.
  * **Detail Spesifikasi Ringkas:** Nama Seri Laptop, Prosesor, kapasitas RAM, kapasitas SSD, ukuran layar, kondisi fisik/kelengkapan, dan Harga.
  * **Filter Cepat:** *Semua Unit*, *Tersedia*, *Harga di Bawah 5 Juta*, *Laptop Kerja/Kuliah*, *Laptop Grafis/Gaming*.
  * **Tombol Aksi per Unit:** *"Tanya Unit Ini"* (mengarahkan ke WhatsApp dengan nama seri laptop otomatis tertulis di pesan).

### 4.4. Seksi Layanan Service Laptop & PC
Menampilkan daftar kapabilitas bengkel untuk perangkat **Laptop dan PC Desktop** dengan kartu layanan bergaya editorial (dilengkapi foto dokumentasi pengerjaan atau ikon teknis berlapis emas) untuk **7 layanan inti**:

| No | Nama Layanan (Laptop & PC) | Deskripsi & Penjelasan di Web | Pesan Otomatis CTA WhatsApp |
| :- | :--- | :--- | :--- |
| 1 | **Upgrade RAM** | Penambahan kapasitas memori (DDR3/DDR4/DDR5) untuk mengatasi laptop/PC lemot dan meningkatkan performa *multitasking*. | *"Halo Agung Store & Care, saya ingin tanya ketersediaan dan biaya Upgrade RAM untuk laptop/PC tipe..."* |
| 2 | **Upgrade SSD** | Penggantian HDD lama atau penambahan SSD (SATA / NVMe M.2) agar *booting* Windows dan buka aplikasi berkali-kali lipat lebih cepat. | *"Halo Agung Store & Care, saya ingin konsultasi Upgrade SSD untuk laptop/PC tipe..."* |
| 3 | **Install Ulang** | Instalasi ulang sistem operasi, pengaturan *driver* lengkap, serta aplikasi standar kerja/kuliah agar sistem kembali segar dan bebas *error*. | *"Halo Agung Store & Care, saya ingin melakukan Install Ulang untuk laptop/PC saya..."* |
| 4 | **Cleaning** | Pembersihan menyeluruh debu pada kipas (*heatsink*), ventilasi udara, dan bagian dalam *casing* untuk mencegah *overheat* dan bising. | *"Halo Agung Store & Care, saya ingin booking layanan Cleaning dalam untuk laptop/PC..."* |
| 5 | **Repasta** | Penggantian *thermal paste* yang sudah mengering pada prosesor (CPU) dan kartu grafis (GPU) dengan pasta termal berkualitas tinggi agar suhu tetap dingin. | *"Halo Agung Store & Care, saya ingin layanan Cleaning & Repasta thermal paste untuk..."* |
| 6 | **Perbaikan Mesin** | Penanganan kerusakan tingkat *motherboard/mainboard* seperti korslet (*short*), mati total, tidak tampil gambar (*no display*), atau gagal *charging*. | *"Halo Agung Store & Care, saya ingin konsultasi Perbaikan Mesin laptop/PC dengan keluhan..."* |
| 7 | **Pergantian Part Laptop & PC** | Penggantian suku cadang rusak seperti layar LCD/LED pecah, *keyboard error*, baterai *drop*, engsel patah, *casing*, hingga *power supply* (PSU) PC. | *"Halo Agung Store & Care, saya ingin tanya stok dan biaya Pergantian Part (...) untuk tipe..."* |

### 4.5. Seksi Layanan Service Handphone
Didesain dengan tata letak berdampingan yang jelas agar pengunjung langsung mengetahui bahwa Agung Store & Care juga memiliki teknisi spesialis perbaikan perangkat *smartphone* (Android & iPhone) untuk **5 penanganan utama**:

| No | Nama Layanan (Handphone) | Deskripsi & Penjelasan di Web | Pesan Otomatis CTA WhatsApp |
| :- | :--- | :--- | :--- |
| 1 | **Mati Total (Matot)** | Diagnosa dan perbaikan jalur mesin/IC pada HP yang tiba-tiba mati, tidak merespons saat dicas, atau mengalami *short* arus pendek. | *"Halo Agung Store & Care, saya ingin konsultasi servis HP Mati Total untuk tipe..."* |
| 2 | **Tidak Masuk System (Bootloop / Stuck Logo)** | Perbaikan kendala *software* maupun *hardware* (IC penyimpanan/OS) bagi HP yang tertahan di logo awal, *restart* berulang, atau gagal masuk menu utama. | *"Halo Agung Store & Care, HP saya mengalami kendala Tidak Masuk System (Stuck Logo), tipenya..."* |
| 3 | **Water Damage (Kemasukan Air)** | Penanganan darurat pembersihan korosi, pengeringan ultrasonik, dan perbaikan jalur mesin bagi HP yang tercebur atau terkena cairan. | *"Halo Agung Store & Care, HP saya terkena cairan (Water Damage), mohon info penanganan untuk tipe..."* |
| 4 | **Perbaikan Face ID** | Penanganan khusus sensor biometrik dan *dot projector* pada perangkat yang mengalami kegagalan fitur pemindai wajah (*Face ID not available*). | *"Halo Agung Store & Care, saya ingin konsultasi perbaikan fitur Face ID untuk perangkat..."* |
| 5 | **Pergantian Part Handphone** | Penggantian komponen fisik HP seperti layar LCD/OLED retak, baterai kembung/boros, konektor *charger*, kamera, hingga kaca belakang (*backdoor*). | *"Halo Agung Store & Care, saya ingin tanya biaya Pergantian Part HP (...) untuk tipe..."* |

### 4.6. Seksi Alur Servis & Keunggulan (*Trust Signals*)
Menampilkan 4 langkah mudah bertransaksi di Agung Store & Care:
1. **Konsultasi & Cek Keluhan** (Gratis tanya estimasi via WhatsApp atau datang langsung).
2. **Pengecekan & Konfirmasi Biaya** (Teknisi mengecek kondisi unit dan menginformasikan biaya secara transparan sebelum tindakan).
3. **Pengerjaan & Pengujian (*QC*)** (Perbaikan dilakukan dengan alat memadai serta *testing* menyeluruh).
4. **Unit Selesai & Bergaransi** (Unit siap diambil dengan jaminan garansi sesuai kesepakatan).

### 4.7. Footer, Jam Operasional & Lokasi
* Menampilkan logo **Agung Store & Care**, alamat lengkap toko, jam buka harian, tautan media sosial (Instagram/TikTok/Facebook), serta sematan peta lokasi (*Google Maps Embed*).

---

## 5. Spesifikasi Teknis & Struktur Proyek (Vite + Vercel Free Tier)

### 5.1. Pemilihan Tech Stack
* **Core Framework:** [Vite](https://vitejs.dev/) (`vite@^5.0.0` atau terbaru) dengan template `react-ts` (atau `vanilla-ts` jika ingin ukuran *bundle* ekstra minimal).
* **Styling Engine:** [Tailwind CSS](https://tailwindcss.com/) dengan kustomisasi penuh pada `tailwind.config.js` untuk mengunci warna *Crimson*, *Cream*, dan *Gold*.
* **Image Optimization:** Seluruh foto pajangan laptop dan dokumentasi servis dikonversi ke format `.webp` dengan resolusi terkompresi (`< 150 KB` per foto) serta atribut `loading="lazy"` agar hemat *bandwidth* di Vercel Free Tier (kuota 100 GB/bulan).
* **Zero-Cost Data Management:** Seluruh daftar pajangan laptop dan layanan disimpan di dalam file statis `src/data/` sehingga klien atau *developer* cukup mengubah teks/foto dan melakukan `git push` untuk memperbarui isi web secara otomatis melalui integrasi GitHub-Vercel.

### 5.2. Struktur Folder Proyek
```text
agung-store-care-web/
├── public/
│   ├── assets/
│   │   ├── logo-asc.webp            # Logo resmi Agung Store & Care (merah-emas)
│   │   ├── laptops/                 # Foto-foto pajangan unit laptop (.webp)
│   │   └── services/                # Foto dokumentasi pengerjaan servis (.webp)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Navigasi sticky dengan aksen garis emas
│   │   ├── Hero.tsx                 # Hero section editorial (Cream & Crimson)
│   │   ├── LaptopShowcase.tsx       # Galeri pajangan & jual-beli laptop (Filter + Lightbox)
│   │   ├── ServiceLaptopPC.tsx      # Seksi 7 layanan servis Laptop & PC
│   │   ├── ServicePhone.tsx         # Seksi 5 layanan servis Handphone
│   │   ├── TradeInBanner.tsx        # Banner khusus tawaran jual laptop ke ASC
│   │   └── Footer.tsx               # Alamat, jam operasional, dan Google Maps
│   ├── data/
│   │   ├── storeConfig.ts           # Nomor WhatsApp, alamat, jam buka, link sosmed
│   │   ├── laptopsData.ts           # Data foto & spesifikasi pajangan laptop
│   │   └── servicesData.ts          # Data layanan Laptop/PC & Handphone
│   ├── utils/
│   │   └── whatsapp.ts              # Helper generator URL wa.me dengan pesan otomatis
│   ├── index.css                    # Konfigurasi font & variabel warna tema
│   ├── App.tsx
│   └── main.tsx
├── vercel.json                      # Konfigurasi caching & static routing Vercel
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### 5.3. Skema Data Katalog Pajangan Laptop (`src/data/laptopsData.ts`)
Agar foto pajangan laptop tampil rapi dan informatif, setiap item mengikuti struktur data berikut:

```typescript
export interface LaptopItem {
  id: string;
  name: string;             // Contoh: "ThinkPad X1 Carbon Gen 8"
  brand: string;            // Contoh: "Lenovo"
  price: string;            // Contoh: "Rp 6.850.000"
  status: 'Ready' | 'Booked' | 'Sold';
  images: string[];         // Array path foto pajangan (tampak depan, keyboard, port)
  specs: {
    processor: string;      // Contoh: "Intel Core i7-10510U"
    ram: string;            // Contoh: "16GB LPDDR3"
    storage: string;        // Contoh: "512GB SSD NVMe"
    display: string;        // Contoh: "14 inch FHD IPS"
  };
  conditionNote: string;    // Contoh: "Fisik 95% mulus, baterai awet 4-5 jam, charger ori"
}
```

### 5.4. Konfigurasi Deployment Vercel (`vercel.json`)
Untuk memastikan aset gambar pajangan tersimpan di *cache* peramban pengunjung dan menghemat kuota gratis Vercel:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 6. Kriteria Penerimaan (*Acceptance Criteria*)

1. **Kesesuaian Visual & Tema:** Halaman web menampilkan dominasi warna dasar *Warm Cream* (`#FAF6F0`), bagian fokus menggunakan *Heritage Crimson* (`#8B2318`), dan garis pembatas/ikon menggunakan *Brushed Gold* (`#C5A059`) selaras dengan logo Agung Store & Care. Tidak ada elemen *neon glow* atau ilustrasi generik AI.
2. **Kejelasan Kategori Bisnis:** Pengunjung dapat langsung membedakan bahwa fitur jual-beli beserta galeri pajangan foto unit **hanya untuk Laptop**, sementara layanan perbaikan dibagi menjadi dua bagian yang jelas: **Service Laptop & PC** (7 layanan) dan **Service Handphone** (5 layanan).
3. **Fungsionalitas Galeri Pajangan:** Setiap unit laptop pada seksi pajangan memiliki foto yang dapat diperbesar (*zoom/lightbox*), label ketersediaan (*Ready/Sold*), spesifikasi utama, dan tombol WhatsApp yang berfungsi.
4. **Performa & Deployment:** Proyek dapat dijalankan melalui `npm run build` tanpa *error*, dideploy ke akun Vercel gratis (*Hobby Tier*), dan memperoleh skor performa *Lighthouse Mobile* minimal **90+**.
