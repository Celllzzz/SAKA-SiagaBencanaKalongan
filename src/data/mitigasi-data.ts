export interface MitigasiItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  detailSlug: string;
}

export const mitigasiDataList: MitigasiItem[] = [
  {
    id: "manual-prosedur",
    number: "01",
    title: "Manual Prosedur Kebencanaan",
    description: "Dari mengenali tanda awal, evakuasi mandiri, hingga titik kumpul aman — panduan lengkap prosedur mitigasi yang perlu diketahui setiap warga.",
    image: "/assets/mitigasi/kebencanaan.webp",
    detailSlug: "/mitigasi/manual-prosedur"
  },
  {
    id: "tas-siaga",
    number: "02",
    title: "Tas Siaga Bencana",
    description: "Barang dan bekal apa saja yang perlu ada di tas siagamu? Simak daftar lengkapnya, lengkap dengan alasan kenapa tiap barang itu penting.",
    image: "/assets/mitigasi/TasSiagaBencana.webp",
    detailSlug: "/mitigasi/tas-siaga"
  },
  {
    id: "pangan-darurat",
    number: "03",
    title: "Pangan Darurat",
    description: "Wadah penyimpanan pangan darurat berukuran ringkas yang berisi cadangan pangan praktis untuk 1 orang selama ±36 jam pertama dan ditempatkan di dalam Tas Siaga Bencana keluarga.",
    image: "/assets/mitigasi/PanganDarurat.webp",
    detailSlug: "/mitigasi/pangan-darurat"
  },
  {
    id: "air-bersih",
    number: "04",
    title: "Panduan Penanganan Air Bersih",
    description: "Pasokan air bersih sering terganggu setelah bencana. Ini cara sederhana memastikan air yang kamu konsumsi tetap aman.",
    image: "/assets/mitigasi/air.webp",
    detailSlug: "/mitigasi/air-bersih"
  },
  {
    id: "pengelolaan-sampah",
    number: "05",
    title: "Pengelolaan Sampah",
    description: "Tumpukan sampah dan puing pasca longsor bisa jadi sumber masalah baru. Kenali cara penanganan yang tepat agar lingkungan tetap sehat.",
    image: "/assets/mitigasi/sampah.webp",
    detailSlug: "/mitigasi/pengelolaan-sampah"
  },
  {
    id: "kesiapsiagaan-ekonomi",
    number: "06",
    title: "Kesiapsiagaan Ekonomi",
    description: "Bencana gak cuma mengancam keselamatan fisik, tapi juga kestabilan ekonomi rumah tangga. Ini langkah-langkah kesiapsiagaan dari sisi ekonomi yang bisa disiapkan dari sekarang.",
    image: "/assets/mitigasi/ekonomi.webp",
    detailSlug: "/mitigasi/kesiapsiagaan-ekonomi"
  }
];
