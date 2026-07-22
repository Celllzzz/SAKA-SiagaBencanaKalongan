# Aturan dan Brief Proyek SAKA (Siaga Bencana Kalongan)

Dokumen ini adalah acuan utama (Product Requirements Document & Arsitektur) untuk pengembangan portal SAKA. **Jangan memulai development jika belum ada instruksi eksplisit dari user.** Jika sudah ada instruksi development, pastikan seluruh pekerjaan mematuhi aturan di bawah ini.

## 1. Ringkasan Proyek
- **Nama Sistem:** SAKA (Siaga Bencana Kalongan)
- **Tujuan:** Portal sistem informasi terpadu untuk mitigasi, edukasi, dan kesiapsiagaan terhadap bencana tanah longsor di Desa Kalongan.
- **Target Audiens:** Warga 4 dusun rawan (Dampu, Bandungan, Glepung, Tompo Gunung), Perangkat Desa/Tokoh Masyarakat, dan Relawan.

## 2. Arsitektur & Teknologi (Tech Stack)
- **Framework Utama:** Next.js (App Router) dengan mode Static Site Generation (SSG). Wajib menggunakan `output: 'export'` di `next.config.js`.
- **Backend:** TIDAK ADA backend server atau RDBMS tradisional. 
- **Data Source:** Gunakan file JSON atau MDX lokal untuk konten teks/konfigurasi (Manual Prosedur, Tas Siaga, FAQ, dll).
- **UI & Komponen:** Berbasis komponen yang *reusable*. Menggunakan library **Shadcn UI & Blocks**.
- **Theming & Styling:** 
  - Wajib menggunakan CSS Variables global (di `globals.css` dan tailwind config) untuk seluruh warna dan tipografi. 
  - **Warna Utama (Primary):** Cokelat tua (Dark Brown).
  - **Warna Pendukung (Secondary):** Cokelat muda / Krem (Light Brown / Beige).
  - **Dilarang keras** menggunakan tema monokrom bawaan Shadcn tanpa disesuaikan. Palet harus menggunakan kombinasi cokelat di atas agar mempresentasikan unsur alam dan tanah.
- **Form Pengaduan:** Menggunakan Headless Form Service (Formspree, Web3Forms, atau Google Apps Script) untuk *request* POST statis (client-side).

## 3. Struktur Halaman & Sitemap
Sistem terdiri dari 4 modul utama sesuai sitemap:

### 3.1. Modul Beranda (Halaman Utama)
Berdasarkan referensi desain terbaru, urutan seksi (section) pada halaman utama adalah:
1. **Hero Section:** Latar belakang gambar/video bernuansa gelap dengan navigasi dan judul utama.
2. **Peta Desa Kalongan:** Menampilkan visualisasi peta (background krem).
3. **Apa Itu SAKA?:** Overview dan penjelasan sistem SAKA (background cokelat tua).
4. **Cegah Resiko Saling Melindungi:** Menampilkan grid foto dokumentasi mitigasi (background krem).
5. **Kata Mereka (Testimonial):** Pratinjau video tanggapan warga dan perangkat desa (background cokelat tua).
6. **Frequently Asked Questions (FAQ):** Akordeon pertanyaan seputar mitigasi longsor (background krem).
7. **Galeri Foto Dokum Kegiatan:** Grid dokumentasi kegiatan (background krem).
8. **Footer:** Navigasi bawah, logo pendukung, dan kontak (background krem).

### 3.2. Modul Tentang Kami
- **Profil SAKA:** Tujuan, Latar Belakang, Visi, dan Misi.
- **Tim Kami:** Susunan pengelola/relawan.
- **Arsip Dokumentasi:** Galeri kegiatan/dokumen legalitas.

### 3.3. Modul Informasi Spesifik Dusun
Sistem menyediakan 4 halaman dusun yang terpisah, namun memiliki struktur fitur identik. Dusun tersebut adalah: **Dusun Dampu**, **Dusun Bandungan**, **Dusun Glepung**, dan **Dusun Tompo Gunung**.
Isi dari setiap halaman dusun:
- Peta Kerawanan Dusun.
- Manual Prosedur Dusun (langkah evakuasi spesifik dusun).
- Panduan Tas Siaga.
- Dokumentasi Sosialisasi.

### 3.4. Modul Kontak & Pengaduan
- **Direktori Kontak:** Daftar nomor telepon penting perangkat desa/tim siaga.
- **Form Pengaduan Bencana (Non-Darurat):** Form untuk melaporkan masalah struktural (retakan, talud rusak). Laporan darurat diurus di platform lain.

## 4. Instruksi AI / Agen
- **Statik Penuh:** Jangan membuat API Routes (Route Handlers) yang melakukan pengolahan dinamis saat runtime, karena web di-export menjadi statis (`output: 'export'`).
- **Konsistensi Desain:** Fokus pada UI modern, gunakan warna yang bisa dengan mudah disesuaikan lewat variabel CSS, serta pastikan desain terasa "premium" dan aksesibel.
- **Responsivitas Mutlak (Mobile-First):** Website harus **100% responsif** di semua ukuran layar (mobile, tablet, desktop). Prioritaskan tampilan *mobile* karena mayoritas warga akan mengakses portal ini melalui perangkat *smartphone*.
- **Modular:** Saat membangun UI (terutama halaman dusun yang identik secara struktur), buatlah komponen *template* yang menerima data (JSON/MDX) sebagai *props* untuk menghindari duplikasi kode.
