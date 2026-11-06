import { storeConfig } from '../data/storeConfig';

/**
 * Creates a clean wa.me WhatsApp URL with encoded message
 */
export function createWhatsAppUrl(message: string, customNumber?: string): string {
  const number = customNumber || storeConfig.whatsappNumber;
  const cleanNumber = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Generates WhatsApp URL for consulting a specific laptop showcase unit
 */
export function getLaptopInquiryUrl(laptopName: string, price: string): string {
  const message = `Halo Agung Store & Care, saya tertarik dengan unit laptop ini:\n\n` +
    `• Unit: *${laptopName}*\n` +
    `• Harga Tertera: *${price}*\n\n` +
    `Apakah unit ini masih tersedia / ready stock? Bisakah saya meminta foto/video detail kondisi terbarunya? Terima kasih.`;
  return createWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for Trade-in (Tukar Tambah) or selling old laptop to ASC
 */
export function getTradeInWhatsAppUrl(formData?: {
  brandModel?: string;
  specs?: string;
  condition?: string;
  expectedPrice?: string;
}): string {
  const message = `Halo Agung Store & Care, saya ingin menawarkan / konsultasi Jual atau Tukar Tambah Laptop:\n\n` +
    `• Merk & Tipe Laptop: ${formData?.brandModel || '[Tulis merk & tipe, contoh: Asus Vivobook A412DA]'}\n` +
    `• Spesifikasi (Proc/RAM/SSD): ${formData?.specs || '[Contoh: Ryzen 3 / 8GB / 512GB]'}\n` +
    `• Kondisi & Kelengkapan: ${formData?.condition || '[Contoh: Mulus 90%, Baterai Normal, Fullset/Unit+Charger]'}\n` +
    `• Perkiraan Harga yang Diinginkan: ${formData?.expectedPrice || '[Tulis taksiran harga]'}\n\n` +
    `Mohon estimasi penawaran terbaiknya dari Agung Store & Care. Terima kasih.`;
  return createWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for general service consultation
 */
export function getGeneralServiceUrl(serviceType: 'Laptop/PC' | 'Handphone' = 'Laptop/PC'): string {
  const message = `Halo Agung Store & Care, saya ingin berkonsultasi mengenai keluhan dan estimasi perbaikan servis ${serviceType}.\n\n` +
    `• Tipe Perangkat: \n` +
    `• Kendala / Keluhan: \n\n` +
    `Apakah bisa dicek terlebih dahulu? Terima kasih.`;
  return createWhatsAppUrl(message);
}

