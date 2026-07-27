# SAKA (Siaga Bencana Kalongan)

SAKA adalah portal sistem informasi terpadu yang dirancang untuk mitigasi, edukasi, dan kesiapsiagaan terhadap ancaman bencana tanah longsor di Desa Kalongan. Sistem ini secara khusus difokuskan pada 4 dusun rawan longsor: **Dusun Dampu**, **Dusun Bandungan**, **Dusun Glepung**, dan **Dusun Tompo Gunung**.

Website ini dibangun oleh tim mahasiswa KKN-T UNDIP dari berbagai lintas disiplin ilmu (Teknik Geologi, K3, Teknologi Pangan, Teknik Komputer, Teknik Lingkungan, dan Ekonomi) untuk membantu masyarakat dan perangkat desa dalam menghadapi dan meminimalisir risiko bencana.

## Fitur Utama

- **Peta Interaktif Kebencanaan**: Visualisasi peta spasial (Peta Geologi, Peta Pelapukan, Peta Ancaman, dan Peta Evakuasi) untuk setiap dusun rawan menggunakan interaksi interaktif berbasis *Leaflet*.
- **Panduan Mitigasi & Kesiapsiagaan**: Dokumen edukasi terpadu seperti Manual Prosedur Kebencanaan, Panduan Tas Siaga Bencana, serta strategi pemulihan pascabencana (ekonomi dan administrasi).
- **Galeri Dokumentasi**: Rekam jejak kegiatan sosialisasi, observasi lapangan, dan pemetaan di Desa Kalongan.
- **Form Pengaduan Terintegrasi**: Fasilitas pelaporan non-darurat untuk kerusakan struktural fisik (seperti retakan tanah atau talud rusak) yang langsung terhubung ke sistem penerimaan laporan desa.

## Arsitektur & Teknologi

Proyek ini dikembangkan dengan pendekatan modern untuk memastikan performa yang cepat, aksesibilitas tinggi di perangkat seluler (*mobile-first*), dan biaya operasional yang minim (berbasis statis):

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Pemetaan**: `react-leaflet` untuk komponen GIS interaktif
- **Deployment**: Mode *Static Site Generation* (SSG) penuh (`output: 'export'`)
- **Manajemen Data**: Konten dikelola murni menggunakan JSON dan TypeScript (*Headless / No Backend Database*).

## Menjalankan Proyek secara Lokal

1. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
2. *Clone* repositori ini.
3. Jalankan perintah instalasi dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan (development server):
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda untuk melihat hasilnya.
