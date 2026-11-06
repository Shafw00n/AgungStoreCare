export interface LaptopItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  numericPrice: number;
  category: 'kerja-kuliah' | 'gaming-grafis' | 'flagship-bisnis';
  status: 'Ready' | 'Booked' | 'Sold';
  images: string[];
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics?: string;
    battery?: string;
  };
  conditionNote: string;
  highlights: string[];
}

export const laptopsData: LaptopItem[] = [
  {
    id: "thinkpad-x1-carbon-gen8",
    name: "Lenovo ThinkPad X1 Carbon Gen 8",
    brand: "Lenovo",
    price: "Rp 6.850.000",
    numericPrice: 6850000,
    category: "flagship-bisnis",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i7-10510U (Up to 4.90 GHz)",
      ram: "16GB LPDDR3 2133MHz Onboard",
      storage: "512GB SSD NVMe PCIe M.2",
      display: "14.0\" FHD (1920x1080) IPS 400 nits Anti-Glare",
      graphics: "Intel UHD Graphics 620",
      battery: "Normal Awet 4 - 5 Jam (Baterai Original)"
    },
    conditionNote: "Fisik 96% sangat mulus, keyboard empuk khas ThinkPad, fingerprint & webcam shutter normal, charger Type-C original bawaan.",
    highlights: ["Sasis Carbon Fiber Ringan 1.09 kg", "Backlit Keyboard Nyaman", "Layar Tajam 400 Nits"]
  },
  {
    id: "asus-vivobook-14-oled",
    name: "ASUS VivoBook 14 M1405YA OLED",
    brand: "ASUS",
    price: "Rp 5.950.000",
    numericPrice: 5950000,
    category: "kerja-kuliah",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "AMD Ryzen 5 7530U (6 Cores / 12 Threads)",
      ram: "16GB DDR4 Dual Channel 3200MHz",
      storage: "512GB SSD M.2 NVMe PCIe 3.0",
      display: "14.0\" WUXGA (1920x1200) OLED 16:10 100% DCI-P3",
      graphics: "AMD Radeon Graphics",
      battery: "Battery Health 98% (Tahan 5-6 Jam)"
    },
    conditionNote: "Kondisi unit mulus 97%, layar OLED jernih tanpa burn-in, garansi resmi ASUS masih aktif 4 bulan lagi. Fullset unit + charger + box.",
    highlights: ["Layar OLED 100% DCI-P3 Mewah", "Ryzen 5 Hexa-Core Cepat", "RAM 16GB Dual Channel"]
  },
  {
    id: "lenovo-ideapad-slim-3",
    name: "Lenovo IdeaPad Slim 3 14IAU7",
    brand: "Lenovo",
    price: "Rp 4.250.000",
    numericPrice: 4250000,
    category: "kerja-kuliah",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i3-1215U (6 Cores / 8 Threads 12th Gen)",
      ram: "8GB DDR4 3200MHz (Upgrade Ready)",
      storage: "512GB SSD NVMe M.2 PCIe 4.0",
      display: "14.0\" FHD (1920x1080) Anti-glare",
      graphics: "Intel UHD Graphics",
      battery: "Normal 4 - 5 Jam"
    },
    conditionNote: "Fisik 94% bekas pemakaian wajar kuliah, mesin 100% sehat no minus, SSD baru saja diupgrade ke 512GB NVMe kencang.",
    highlights: ["Budget Friendly < 5 Juta", "Intel Core Generasi 12", "Bodi Ramping Mudah Dibawa"]
  },
  {
    id: "acer-nitro-5-gaming",
    name: "Acer Nitro 5 AN515-57 RTX 3050",
    brand: "Acer",
    price: "Rp 8.750.000",
    numericPrice: 8750000,
    category: "gaming-grafis",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i5-11400H (6 Cores / 12 Threads)",
      ram: "16GB DDR4 3200MHz (Dual Channel)",
      storage: "512GB SSD NVMe + Slot Tambahan Tersedia",
      display: "15.6\" FHD 144Hz IPS Panel",
      graphics: "NVIDIA GeForce RTX 3050 (4GB GDDR6)",
      battery: "Awet 2 - 3 Jam (Normal Gaming Laptop)"
    },
    conditionNote: "Kondisi unit 95% bersih, thermal paste baru diganti Arctic MX-4 (suhu adem saat rendering/game), keyboard RGB 4-zone nyala normal.",
    highlights: ["Dedicated GPU RTX 3050 4GB", "Layar Refresh Rate 144Hz", "CoolBoost Dual Fan"]
  },
  {
    id: "hp-pavilion-14-dv",
    name: "HP Pavilion 14-dv0065TX Gold Edition",
    brand: "HP",
    price: "Rp 4.850.000",
    numericPrice: 4850000,
    category: "kerja-kuliah",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i5-1135G7 (Up to 4.2 GHz)",
      ram: "8GB DDR4 3200MHz",
      storage: "512GB PCIe NVMe M.2 SSD",
      display: "14.0\" diagonal FHD IPS BrightView micro-edge",
      graphics: "NVIDIA GeForce MX450 2GB Dedicated",
      battery: "Baterai 3.5 - 4.5 Jam"
    },
    conditionNote: "Fisik 93% lecet pemakaian tipis di sudut bawah, performa gesit dengan kartu grafis terpisah MX450, audio by B&O kencang.",
    highlights: ["Harga di Bawah 5 Juta", "Ada VGA Dedicated MX450", "Audio B&O Jernih"]
  },
  {
    id: "dell-latitude-7400",
    name: "Dell Latitude 7400 Business Series",
    brand: "Dell",
    price: "Rp 3.900.000",
    numericPrice: 3900000,
    category: "kerja-kuliah",
    status: "Ready",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i5-8365U vPro Quad Core",
      ram: "16GB DDR4 (2 Slot SODIMM)",
      storage: "256GB SSD NVMe M.2",
      display: "14.0\" FHD (1920x1080) Anti-Glare Carbon Back",
      graphics: "Intel UHD Graphics 620",
      battery: "Baterai Tahan 4 - 5 Jam"
    },
    conditionNote: "Kelas bisnis tangguh berstandar militer, bodi carbon fiber kokoh, engsel logam kuat, kondisi fisik mulus 92%.",
    highlights: ["Sangat Terjangkau < 4 Juta", "Durabilitas Standar Militer", "RAM 16GB Siap Multitasking"]
  },
  {
    id: "asus-tuf-gaming-f15",
    name: "ASUS TUF Gaming F15 FX506LH",
    brand: "ASUS",
    price: "Rp 7.600.000",
    numericPrice: 7600000,
    category: "gaming-grafis",
    status: "Booked",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Intel Core i5-10300H (Comet Lake)",
      ram: "16GB DDR4 2933MHz Dual Channel",
      storage: "512GB SSD M.2 NVMe",
      display: "15.6\" FHD IPS 144Hz NanoEdge",
      graphics: "NVIDIA GeForce GTX 1650 4GB GDDR6",
      battery: "Baterai Normal 2-3 Jam"
    },
    conditionNote: "Status: Sedang di-booking DP oleh pelanggan offline. Unit dites rendering stabil, keyboard RGB normal.",
    highlights: ["Layar 144Hz Halus", "Pendingin Dual Fan Anti-Dust", "Body Tangguh TUF Military"]
  },
  {
    id: "macbook-air-m1-2020",
    name: "Apple MacBook Air M1 (2020) Space Gray",
    brand: "Apple",
    price: "Rp 8.900.000",
    numericPrice: 8900000,
    category: "flagship-bisnis",
    status: "Sold",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      processor: "Apple M1 Chip (8-Core CPU / 7-Core GPU)",
      ram: "8GB Unified Memory",
      storage: "256GB Apple SSD",
      display: "13.3\" Retina Display True Tone P3",
      graphics: "Integrated 7-Core GPU",
      battery: "Battery Health 91% (Tahan 10-12 Jam)"
    },
    conditionNote: "Unit sudah terjual (Arsip Pajangan Bukti Transaksi ASC). Kondisi 98% mulus like new saat terjual ke pelanggan.",
    highlights: ["Arsip Penjualan Sukses", "Apple Silicon M1 Super Efisien", "Baterai Tahan Seharian"]
  }
];

