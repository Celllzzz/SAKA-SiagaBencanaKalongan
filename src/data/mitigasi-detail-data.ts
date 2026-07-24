export type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; title?: string; items: string[]; listType?: 'disc' | 'decimal' }
  | { type: 'image'; src: string; alt: string };

export interface MitigasiSubSection {
  subtitle?: string;
  blocks: ContentBlock[];
}

export interface MitigasiDetailSection {
  number: string;
  title: string;
  subsections: MitigasiSubSection[];
}

export interface MitigasiDetailData {
  slug: string;
  titleTop: string;
  titleBottom: string;
  heroImage: string;
  pdfUrl?: string;
  sections: MitigasiDetailSection[];
}

export const mitigasiDetailDataList: MitigasiDetailData[] = [
  {
    slug: "manual-prosedur",
    titleTop: "Manual prosedur",
    titleBottom: "Kebencanaan",
    heroImage: "/assets/mitigasi/kebencanaan.webp", // using same image from main page as placeholder for banner
    sections: [
      {
        number: "01",
        title: "Pra Bencana",
        subsections: [
          {
            subtitle: "A. Tas Siaga Bencana",
            blocks: [
              { type: 'text', content: "Tas Siaga Bencana adalah perlengkapan darurat keluarga yang disiapkan untuk menghadapi situasi bencana. Tas ini untuk mendukung kelangsungan hidup sementara dan mempermudah proses evakuasi masyarakat." },
              { type: 'list', title: "DAFTAR ISI TAS SIAGA BENCANA", listType: 'disc', items: [
                "Dokumen Penting: Surat-surat penting seperti surat tanah, surat kendaraan, ijazah, dan akta kelahiran",
                "Sandang: Pakaian untuk kebutuhan tiga hari",
                "Pangan: Makanan ringan yang tahan lama",
                "Kesehatan: Siapkan kotak P3K berisi obat pribadi dan obat umum",
                "Media Komunikasi dan Penerangan: Bawa telepon genggam untuk memantau informasi. Siapkan senter untuk penerangan.",
                "Kebutuhan Finansial: Uang tunai secukupnya perlu disiapkan untuk memenuhi kebutuhan."
              ]},
              { type: 'list', title: "CARA PENYIMPANAN TAS SIAGA BENCANA", listType: 'disc', items: [
                "Simpan ditempat yang mudah dijangkau, misalnya di dekat pintu keluar rumah atau dekat jalur evakuasi.",
                "Tas diperiksa dan diperbarui secara berkala, minimal 3 bulan sekali.",
                "Gunakan tas punggung yang ringan, tahan air, dan nyaman dibawa.",
                "Sertakan daftar isi di dalam tas agar mudah diperiksa saat pengecekan berkala."
              ]}
            ]
          },
          {
            subtitle: "B. Pengelolaan Lingkungan",
            blocks: [
              { type: 'text', content: "Sampah yang menumpuk dapat menyumbat saluran drainase sehingga aliran air hujan terhambat, menyebabkan genangan dan meningkatkan rembesan air ke lereng. Kondisi tersebut dapat mengurangi kestabilan tanah dan meningkatkan risiko longsor." },
              { type: 'list', title: "HAL YANG DIHINDARI", listType: 'decimal', items: [
                "Membuang sampah ke sungai, saluran drainase, atau lereng.",
                "Menumpuk sampah di dekat tebing maupun lahan kosong.",
                "Membakar sampah sembarangan.",
                "Mencampurkan limbah B3 dengan sampah rumah tangga."
              ]},
              { type: 'list', title: "MITIGASI PENGELOLAAN SAMPAH", listType: 'disc', items: [
                "SEBELUM LONGSOR: Jaga kebersihan lingkungan dengan membuang dan memilah sampah serta membersihkan saluran drainase secara rutin.",
                "SAAT HUJAN LEBAT: Pastikan saluran air tetap lancar, hindari area berbahaya, dan segera laporkan penyumbatan yang berpotensi memicu longsor.",
                "SETELAH LONGSOR: Bersihkan lingkungan secara aman menggunakan APD dan laporkan material atau puing yang memerlukan penanganan khusus."
              ]},
              { type: 'text', content: "Drainase berfungsi mengalirkan air hujan agar tidak menggenang maupun meresap berlebihan ke dalam lereng. Drainase yang terawat membantu mengurangi risiko erosi, genangan, dan tanah longsor, serta melindungi jalan maupun bangunan dari luapan air." },
              { type: 'list', title: "HAL YANG DIHINDARI", listType: 'decimal', items: [
                "Membuang sampah ke saluran drainase.",
                "Menutup atau mengubah jalur drainase tanpa perencanaan.",
                "Membiarkan lumpur menumpuk terlalu lama.",
                "Mengabaikan kerusakan saluran."
              ]},
              { type: 'list', title: "MITIGASI PENGELOLAAN DRAINASE", listType: 'disc', items: [
                "SEBELUM LONGSOR: Bersihkan dan rawat saluran drainase secara rutin agar aliran air tetap lancar.",
                "SAAT HUJAN LEBAT: Pantau kondisi drainase dan segera laporkan penyumbatan atau kerusakan yang berpotensi memicu longsor.",
                "SETELAH LONGSOR: Periksa dan bersihkan drainase secara aman setelah kondisi dinyatakan aman serta laporkan kerusakan yang ditemukan."
              ]}
            ]
          }
        ]
      },
      {
        number: "02",
        title: "Saat Bencana",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "🚨 Reaksi Cepat: Segera menjauh dari arah longsoran menuju area aman dan hindari melewati jembatan atau lereng yang berbahaya.\n\n🛣️ Evakuasi: Ikuti jalur evakuasi menuju titik kumpul melalui rute yang telah ditetapkan dan gunakan alas kaki yang aman jika memungkinkan.\n\n📢 Koordinasi & Pelaporan: Ikuti arahan petugas, aktifkan sistem peringatan dini, dan segera laporkan kejadian ke pemerintah desa atau layanan darurat 112." }
            ]
          }
        ]
      },
      {
        number: "03",
        title: "Pasca Bencana",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "🔧 Rehabilitasi & Rekonstruksi: Pulihkan lingkungan dan bangun kembali fasilitas dengan prinsip build back better agar lebih aman dan tahan bencana.\n\n🚫 Jangan Memasuki Area Longsor: Masuk ke area longsor hanya setelah dinyatakan aman oleh pihak berwenang dan ikuti seluruh arahan petugas.\n\n🦺 Pembersihan Material Longsor: Lakukan pembersihan secara aman menggunakan APD dan sesuai arahan tim berwenang.\n\n🏥 Periksa Fasilitas Umum: Pastikan jalan, jembatan, sekolah, dan fasilitas umum lainnya telah dinyatakan aman sebelum digunakan kembali." }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "tas-siaga",
    titleTop: "Tas siaga",
    titleBottom: "bencana",
    heroImage: "/assets/mitigasi/TasSiagaBencana.webp",
    pdfUrl: "/assets/pdf/tas-siaga.pdf",
    sections: [
      {
        number: "01",
        title: "APA ITU TAS SIAGA BENCANA?",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Tas yang disiapkan setiap anggota keluarga untuk berjaga-jaga apabila terjadi bencana atau kondisi darurat lainnya." },
              { type: 'heading', content: "KENAPA PENTING?" },
              { type: 'list', listType: 'disc', items: [
                "Membantu keluarga bertahan selama 1x24 jam pertama pascabencana",
                "Mengurangi kepanikan, menghemat waktu evakuasi",
                "Warga lebih tenang saat bencana datang karena sudah siap untuk pergi ke titik kumpul"
              ]},
              { type: 'heading', content: "DAFTAR ISI TAS SIAGA BENCANA" },
              { type: 'list', listType: 'disc', items: [
                "Dokumen Penting: Surat-surat penting seperti surat tanah, surat kendaraan, ijazah, dan akta kelahiran",
                "Sandang: Pakaian untuk kebutuhan tiga hari",
                "Pangan: Makanan ringan yang tahan lama",
                "Kesehatan: Siapkan kotak P3K berisi obat pribadi dan obat umum",
                "Media Komunikasi dan Penerangan: Bawa telepon genggam untuk memantau informasi. Siapkan senter untuk penerangan.",
                "Kebutuhan Finansial: Uang tunai secukupnya perlu disiapkan untuk memenuhi kebutuhan."
              ]},
              { type: 'heading', content: "CARA PENYIMPANAN TAS SIAGA BENCANA" },
              { type: 'list', listType: 'disc', items: [
                "Simpan ditempat yang mudah dijangkau, misalnya di dekat pintu keluar rumah atau dekat jalur evakuasi.",
                "Tas diperiksa dan diperbarui secara berkala, minimal 3 bulan sekali.",
                "Gunakan tas punggung yang ringan, tahan air, dan nyaman dibawa.",
                "Sertakan daftar isi di dalam tas agar mudah diperiksa saat pengecekan berkala."
              ]}
            ]
          }
        ]
      },
      {
        number: "02",
        title: "PERTOLONGAN PERTAMA PADA KECELAKAAN (K3)",
        subsections: [
          {
            blocks: [
              { type: 'list', listType: 'disc', items: [
                "Kasa Steril",
                "Plester",
                "Kapas",
                "Gunting",
                "Peniti",
                "Sarung Tangan Sekali pakai",
                "Buku Panduan",
                "Buku Catatan",
                "Betadien",
                "Aquades / Larutan Pencuci"
              ]}
            ]
          }
        ]
      },
      {
        number: "03",
        title: "PRINSIP PERTOLONGAN PADA KORBAN",
        subsections: [
          {
            blocks: [
              { type: 'list', listType: 'decimal', items: [
                "Pastikan Keamanan : Aman Diri Aman Korban Aman Lingkungan, Periksa keadaan korban dengan cepat.",
                "Tentukan apakah korban sadar, bernapas, dan ada pendarahan ataupun luka serius.",
                "Panggil bantuan orang lain atau hubungi layanan darurat (119 atau 112) jika diperlukan.",
                "Lakukan tindakan pertolongan sesuai kondisi korban dan kemampuan (misal, tekan luka berdarah, bantu napas dan posisikan korban dengan aman).",
                "Lindungi korban dari ancaman, panas, kedinginan, dan rasa tidak nyaman, serta berikan dukungan psikologis seperlunya.",
                "Serahkan korban kepada tenaga medis dan berikan informasi yang jelas terkait kondisi yang dialami korban."
              ]}
            ]
          }
        ]
      }
    ]
  },
  // Placeholders for other pages
  {
    slug: "pangan-darurat",
    titleTop: "Pangan",
    titleBottom: "Darurat",
    heroImage: "/assets/mitigasi/PanganDarurat.webp",
    pdfUrl: "/assets/pdf/pangan-darurat.pdf",
    sections: [
      {
        number: "01",
        title: "Bekal Pangan yang Tahan Lama dan Praktis Dibawa",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Bencana longsor merupakan salah satu bencana alam yang dapat mengganggu aktivitas masyarakat, termasuk akses terhadap kebutuhan pangan. Jalan yang tertutup material longsor sering kali menghambat distribusi bantuan, sehingga masyarakat terdampak harus mampu memenuhi kebutuhan pangannya secara mandiri pada fase awal bencana. Oleh karena itu, kesiapsiagaan dalam menyiapkan cadangan pangan menjadi langkah penting untuk mengurangi risiko kekurangan pangan selama kondisi darurat." },
              { type: 'text', content: "Pangan darurat adalah pangan yang dipersiapkan sebelum terjadinya bencana untuk memenuhi kebutuhan energi dan zat gizi ketika akses terhadap pangan terganggu. Pangan ini dirancang agar dapat langsung dikonsumsi tanpa memerlukan proses pengolahan yang rumit, sehingga sangat membantu masyarakat saat proses evakuasi maupun pada 24–36 jam pertama setelah bencana terjadi." },
              { type: 'text', content: "Agar dapat berfungsi secara optimal, pangan darurat harus memenuhi beberapa karakteristik penting. Pangan yang dipilih sebaiknya bersifat praktis sehingga mudah dibawa dan dikonsumsi, memiliki umur simpan yang panjang, dikemas dengan baik untuk menjaga keamanan pangan, serta mengandung zat gizi yang seimbang. Kandungan karbohidrat diperlukan sebagai sumber energi utama, protein berperan dalam menjaga dan memperbaiki jaringan tubuh, sedangkan lemak menjadi cadangan energi yang dapat dimanfaatkan ketika asupan makanan terbatas. Selain itu, vitamin dan mineral juga diperlukan untuk mendukung daya tahan tubuh dan menjaga fungsi organ selama kondisi darurat." },
              { type: 'text', content: "Sebagai salah satu bentuk implementasi kesiapsiagaan, pangan darurat dapat disusun dalam Pouch Pangan Darurat, yaitu wadah penyimpanan yang berisi berbagai jenis pangan praktis dalam kemasan. Pouch ini dirancang agar ringkas, mudah dibawa, dan dapat dimasukkan ke dalam Tas Siaga Bencana keluarga. Setiap pouch disusun untuk memenuhi kebutuhan pangan satu orang selama ±36 jam pertama setelah bencana, sehingga jumlah pouch yang disiapkan dapat disesuaikan dengan jumlah anggota keluarga. Dengan konsep ini, setiap anggota keluarga memiliki cadangan pangan masing-masing yang mudah dibawa dan didistribusikan saat proses evakuasi. Selain itu, penggunaan pouch juga membantu menjaga pangan tetap rapi, terlindungi dari kerusakan, serta memudahkan pengecekan masa kedaluwarsa dan rotasi stok secara berkala." }
            ]
          }
        ]
      },
      {
        number: "02",
        title: "MENGAPA PANGAN DARURAT PENTING",
        subsections: [
          {
            blocks: [
              { type: 'heading', content: "Kondisi saat Bencana Longsor Terjadi :" },
              { type: 'list', listType: 'disc', items: [
                "Akses jalan dapat terputus",
                "Distribusi bantuan dapat terlambat",
                "Aktivitas memasak menjadi terbatas",
                "Keluarga membutuhkan cadangan pangan yang siap dikonsumsi"
              ]},
              { type: 'heading', content: "Mengapa harus disiapkan sebelum bencana?" },
              { type: 'list', listType: 'disc', items: [
                "Memenuhi kebutuhan energi awal",
                "Mengurangi risiko kekurangan pangan",
                "Membantu proses evakuasi dan pemulihan"
              ]},
              { type: 'text', content: "Beberapa jenis pangan yang direkomendasikan untuk mengisi Pouch Pangan Darurat antara lain biskuit tinggi energi sebagai sumber karbohidrat, susu UHT sebagai sumber protein dan kalsium, tuna atau luncheon dalam kemasan sebagai sumber protein hewani, kacang panggang sebagai sumber lemak sehat dan protein, serta energy bar atau cokelat sebagai sumber energi cepat. Pemilihan pangan tersebut didasarkan pada kemudahan konsumsi, nilai gizi, serta umur simpan yang relatif panjang sehingga sesuai untuk kondisi darurat." },
              { type: 'text', content: "Dengan adanya Pouch Pangan Darurat, masyarakat diharapkan memiliki cadangan pangan yang siap digunakan ketika bencana terjadi. Persiapan sederhana ini dapat membantu memenuhi kebutuhan gizi pada fase awal bencana, mendukung proses evakuasi, serta meningkatkan kesiapsiagaan keluarga dalam menghadapi risiko bencana longsor. Program ini juga menjadi salah satu upaya untuk memperkuat kapasitas masyarakat dalam mewujudkan Desa Tangguh Bencana melalui pengelolaan logistik pangan yang lebih terencana dan berkelanjutan." }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "air-bersih",
    titleTop: "Panduan Penanganan",
    titleBottom: "Air Bersih",
    heroImage: "/assets/mitigasi/air.webp",
    pdfUrl: "/assets/pdf/air-bersih.pdf",
    sections: [
      {
        number: "01",
        title: "Air Bersih: Kebutuhan Utama Setelah Terjadi Bencana",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Bencana alam seperti longsor, banjir, maupun tanah bergerak tidak hanya menyebabkan kerusakan pada rumah dan infrastruktur, tetapi juga dapat memengaruhi kualitas sumber air yang digunakan masyarakat. Air sumur, mata air, maupun penampungan air hujan berpotensi tercemar oleh lumpur, sampah, mikroorganisme, hingga bahan kimia yang terbawa aliran air. Kondisi tersebut menyebabkan air yang sebelumnya layak digunakan menjadi tidak aman untuk dikonsumsi tanpa melalui proses pengolahan." },
              { type: 'text', content: "Air yang terlihat jernih pun belum tentu aman. Mikroorganisme seperti bakteri, virus, dan parasit tidak dapat dilihat dengan mata telanjang, namun dapat menyebabkan berbagai penyakit seperti diare, tifus, kolera, hingga infeksi saluran pencernaan. Oleh karena itu, masyarakat perlu mengetahui cara mengenali kondisi air serta langkah penanganan yang sesuai agar kebutuhan air bersih tetap terpenuhi selama masa tanggap darurat maupun pemulihan pascabencana." }
            ]
          }
        ]
      },
      {
        number: "02",
        title: "Mengapa Kualitas Air Dapat Berubah Setelah Bencana?",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Setelah terjadi bencana, kondisi lingkungan biasanya mengalami perubahan yang cukup signifikan. Longsor dapat membawa tanah, pasir, dan material lain ke dalam sumur atau mata air. Banjir dapat mencampurkan air dengan limbah rumah tangga, sampah, bahkan kotoran hewan. Selain itu, kerusakan pada pipa distribusi air juga dapat menyebabkan masuknya kontaminan ke dalam jaringan air bersih." },
              { type: 'text', content: "Perubahan tersebut menyebabkan kualitas air menurun sehingga perlu dilakukan pemeriksaan sederhana sebelum digunakan. Mengenali kondisi air sejak awal akan membantu masyarakat menentukan apakah air masih dapat diolah atau sebaiknya menggunakan sumber air alternatif." }
            ]
          }
        ]
      },
      {
        number: "03",
        title: "Mengenali Kondisi Air Berdasarkan Ciri Fisik",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Salah satu cara yang dapat dilakukan masyarakat adalah mengamati kondisi fisik air menggunakan pancaindra. Pemeriksaan sederhana ini memang tidak dapat mengetahui seluruh kandungan pencemar, namun cukup membantu dalam menentukan langkah awal penanganan." },
              { type: 'heading', content: "1. Air Jernih" },
              { type: 'text', content: "Air jernih memiliki warna bening, tidak berbau, dan tidak mengandung partikel yang terlihat. Meskipun tampak bersih, air tetap perlu direbus hingga mendidih selama minimal 3–5 menit sebelum diminum. Perebusan bertujuan membunuh mikroorganisme yang mungkin masih terdapat di dalam air." },
              { type: 'heading', content: "2. Air Keruh" },
              { type: 'text', content: "Air keruh biasanya mengandung lumpur, pasir halus, atau partikel tersuspensi akibat terbawanya material saat hujan deras atau longsor. Air seperti ini tidak boleh langsung digunakan untuk minum." },
              { type: 'heading', content: "Langkah penanganannya yaitu:" },
              { type: 'list', listType: 'disc', items: [
                "Endapkan air selama 30–60 menit agar partikel mengendap.",
                "Ambil bagian air yang lebih jernih secara perlahan.",
                "Saring menggunakan kain bersih yang dilipat beberapa lapis.",
                "Rebus hingga mendidih sebelum digunakan."
              ]},
              { type: 'heading', content: "3. Air Berbau atau Berwarna" },
              { type: 'text', content: "Air yang berbau menyengat atau mengalami perubahan warna dapat mengindikasikan adanya pencemaran bahan organik maupun zat kimia. Air dengan kondisi seperti ini sebaiknya tidak langsung dikonsumsi." },
              { type: 'text', content: "Apabila tersedia, lakukan penjernihan atau desinfeksi sesuai petunjuk. Namun, apabila bau dan warna tidak berubah setelah pengolahan sederhana, masyarakat dianjurkan menggunakan sumber air lain yang lebih aman." },
              { type: 'heading', content: "4. Air Tercemar Limbah atau Banjir" },
              { type: 'text', content: "Air yang berasal dari daerah terdampak banjir, dekat tempat pembuangan sampah, atau diduga tercemar limbah rumah tangga maupun industri tidak boleh digunakan untuk minum maupun memasak." },
              { type: 'text', content: "Pada kondisi ini, pilihan terbaik adalah menggunakan air kemasan, air dari tangki distribusi, atau sumber air bersih yang telah dipastikan keamanannya oleh pemerintah maupun instansi terkait." }
            ]
          }
        ]
      },
      {
        number: "04",
        title: "Cara Sederhana Mengolah Air di Rumah",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Dalam kondisi darurat, masyarakat tidak selalu memiliki alat penjernih air khusus. Oleh karena itu, beberapa metode sederhana berikut dapat dilakukan menggunakan peralatan yang umumnya tersedia di rumah." },
              { type: 'list', listType: 'disc', items: [
                "Mengendapkan Air",
                "Menyaring Air",
                "Merebus Air"
              ]}
            ]
          }
        ]
      },
      {
        number: "05",
        title: "Cara Menyimpan Air Bersih",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Air yang telah diolah dapat kembali tercemar apabila penyimpanannya tidak dilakukan dengan benar. Oleh sebab itu, masyarakat perlu memperhatikan beberapa hal berikut:" },
              { type: 'list', listType: 'disc', items: [
                "Gunakan wadah yang bersih dan memiliki penutup.",
                "Simpan air di tempat yang teduh dan terlindung dari debu.",
                "Gunakan gayung atau keran yang bersih saat mengambil air.",
                "Hindari mencelupkan tangan langsung ke dalam wadah penyimpanan.",
                "Bersihkan wadah penyimpanan secara berkala."
              ]},
              { type: 'text', content: "Penyimpanan yang baik membantu menjaga kualitas air tetap aman hingga digunakan." }
            ]
          }
        ]
      },
      {
        number: "06",
        title: "Kapan Air Tidak Boleh Digunakan?",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Masyarakat sebaiknya tidak menggunakan air apabila memiliki ciri-ciri berikut:" },
              { type: 'list', listType: 'disc', items: [
                "Berbau menyengat.",
                "Berwarna hitam, hijau pekat, atau berubah warna secara drastis.",
                "Berminyak di permukaan.",
                "Berbusa secara tidak wajar.",
                "Berasal dari sumur yang terendam banjir.",
                "Diduga tercemar limbah atau bahan kimia."
              ]},
              { type: 'text', content: "Apabila menemukan kondisi tersebut, hentikan penggunaan air untuk minum maupun memasak dan segera cari sumber air alternatif." }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "pengelolaan-sampah",
    titleTop: "Pengelolaan",
    titleBottom: "Sampah",
    heroImage: "/assets/mitigasi/sampah.webp",
    pdfUrl: "/assets/pdf/pengelolaan-sampah.pdf",
    sections: [
      {
        number: "01",
        title: "Apa Itu Sampah?",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Sampah adalah sisa barang atau bahan yang sudah tidak digunakan lagi dan dibuang oleh manusia. Sampah dihasilkan dari berbagai aktivitas sehari-hari, baik di rumah, sekolah, kantor, maupun industri. Jika tidak dikelola dengan baik, sampah dapat menimbulkan berbagai masalah lingkungan, seperti pencemaran tanah, air, dan udara, serta menjadi penyebab banjir dan penyebaran penyakit. Oleh karena itu, pengelolaan sampah yang benar merupakan langkah penting untuk menjaga kebersihan lingkungan sekaligus meningkatkan kualitas hidup masyarakat." }
            ]
          }
        ]
      },
      {
        number: "02",
        title: "Sumber Sampah",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Setiap aktivitas manusia menghasilkan sampah dengan karakteristik yang berbeda-beda. Beberapa sumber utama sampah antara lain:" },
              { type: 'list', listType: 'disc', items: [
                "Sampah Rumah Tangga, Sampah yang berasal dari kegiatan sehari-hari di rumah, seperti sisa makanan, plastik kemasan, botol minuman, kertas bekas, dan daun kering.",
                "Sampah Sekolah, Sampah yang dihasilkan dari aktivitas belajar mengajar, misalnya kertas bekas, alat tulis, kemasan makanan, dan sampah kantin.",
                "Sampah Perkantoran, Sampah yang berasal dari kegiatan administrasi maupun operasional kantor, seperti dokumen bekas, kardus, plastik kemasan, dan limbah konsumsi.",
                "Sampah Industri, Sampah yang dihasilkan dari proses produksi barang atau jasa, baik berupa limbah padat maupun sisa bahan produksi yang memerlukan pengelolaan khusus."
              ]}
            ]
          }
        ]
      },
      {
        number: "03",
        title: "Warna Tempat Sampah Berdasarkan Jenis",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Pemilahan sampah dapat dilakukan dengan menggunakan tempat sampah sesuai warna agar proses pengelolaan menjadi lebih mudah." },
              { type: 'list', listType: 'disc', items: [
                "🟢 Hijau : Sampah Organik",
                "🟡 Kuning : Sampah Anorganik",
                "🔴 Merah : Sampah B3"
              ]},
              { type: 'text', content: "Dengan memilah sampah sejak dari sumbernya, proses daur ulang menjadi lebih efektif dan jumlah sampah yang berakhir di tempat pembuangan akhir dapat dikurangi." }
            ]
          }
        ]
      },
      {
        number: "04",
        title: "Manfaat Pengolahan Sampah",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Pengelolaan sampah yang baik memberikan banyak manfaat, di antaranya:" },
              { type: 'list', listType: 'disc', items: [
                "Mengurangi pencemaran lingkungan.",
                "Menjaga kebersihan dan kesehatan lingkungan.",
                "Menghemat penggunaan sumber daya alam.",
                "Mengurangi penggunaan bahan baku baru.",
                "Meningkatkan nilai ekonomi melalui produk hasil daur ulang.",
                "Mendukung terciptanya lingkungan yang bersih dan berkelanjutan."
              ]}
            ]
          }
        ]
      },
      {
        number: "05",
        title: "Hasil Pengolahan Sampah",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Sampah yang dikelola dengan benar dapat menghasilkan berbagai produk yang bermanfaat, seperti:" },
              { type: 'list', listType: 'disc', items: [
                "Kompos sebagai pupuk alami untuk menyuburkan tanah.",
                "Produk daur ulang, seperti pot tanaman, tas, atau kerajinan.",
                "Energi biogas sebagai sumber energi alternatif.",
                "Bahan baku industri yang dapat digunakan kembali dalam proses produksi."
              ]}
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "kesiapsiagaan-ekonomi",
    titleTop: "Kesiapsiagaan Ekonomi",
    titleBottom: "& Penyelamatan Dokumen",
    heroImage: "/assets/mitigasi/ekonomi.webp",
    pdfUrl: "/assets/pdf/kesiapsiagaan-ekonomi.pdf",
    sections: [
      {
        number: "01",
        title: "Kerentanan Ekonomi dan Dampak Bencana di Desa Kalongan",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Bencana alam dapat memberikan dampak destruktif secara langsung pada ekonomi keluarga, seperti berkurangnya pendapatan utama, kerusakan aset produktif, pengeluaran mendadak yang tidak terduga, hingga hilangnya dokumen penting keluarga. Desa Kalongan memiliki tingkat kerentanan yang cukup tinggi akibat faktor demografis dan iklim" },
              { type: 'list', listType: 'disc', items: [
                "Fakta Demografi dan Iklim: Desa Kalongan dihuni oleh 14.243 jiwa (4.003 Kepala Keluarga) dengan rata-rata curah hujan mencapai 2.500 mm/tahun, terutama pada musim penghujan antara bulan Oktober hingga April",
                "Tingkat Kesejahteraan: Sebagian besar warga desa berada pada kategori keluarga prasejahtera, yaitu sebesar 45% atau mencapai 1.930 KK.",
                "Mata Pencaharian: Sebagian besar populasi pekerja berprofesi sebagai petani (982 warga) dan pedagang (954 warga), yang mana mereka sangat rentan mengalami kehilangan pendapatan secara drastis jika terjadi bencana seperti longsor."
              ]}
            ]
          }
        ]
      },
      {
        number: "02",
        title: "Penguatan Kapasitas Ekonomi dan Dana Darurat",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Kapasitas keluarga yang kuat merupakan kunci utama dalam mengurangi kerentanan dan risiko bencana. Pembentukan kapasitas ini mencakup aspek finansial (tabungan dan dana darurat), produktif (keterampilan dan usaha), sosial (gotong royong), dan pengetahuan (literasi bencana dan keuangan)." },
              { type: 'heading', content: "Pentingnya Dana Darurat" },
              { type: 'text', content: "Dana darurat merupakan benteng pertahanan pertama finansial keluarga saat krisis terjadi. Prinsip utama pengelolaan dana darurat adalah harus mudah diakses, disimpan secara terpisah dari rekening pengeluaran harian, dan mutlak hanya digunakan untuk kondisi darurat." },
              { type: 'list', listType: 'disc', items: [
                "Membantu keluarga menghindari jebakan utang berbunga tinggi disaat pendapatan mendadak terhenti.",
                "Memberikan waktu luang (buying time) untuk masa pemulihan tanpa harus khawatir kelaparan.",
                "Memungkinkan keluarga untuk fokus menyelamatkan jiwa dan memulihkan kesehatan fisik maupun mental pascabencana."
              ]},
              { type: 'heading', content: "Strategi Menghindari Jebakan Utang" },
              { type: 'text', content: "Apabila sudah terdesak pascabencana, hindari mengambil pinjaman baru untuk sekadar menutup utang lama (gali lubang tutup lubang). Warga disarankan untuk melakukan negosiasi (restrukturisasi) tagihan kepada kreditur resmi dengan alasan Force Majeure, menjual aset non-esensial secara mandiri dengan harga wajar pasar, dan memfokuskan sisa uang murni untuk kebutuhan dasar hidup." }
            ]
          }
        ]
      },
      {
        number: "03",
        title: "Diversifikasi Pendapatan dan Manajemen Gaya Hidup",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Keluarga tidak boleh bertumpu hanya pada satu keran sumber penghasilan. Strategi diversifikasi pendapatan harus diterapkan, misalnya jika suami berprofesi sebagai petani, maka juga diselingi dengan beternak, atau ibu rumah tangga dapat membantu membuka usaha makanan dan jasa rumahan. Selain itu, hindari berbagai jebakan gaya hidup konsumtif yang merusak kestabilan finansial:" },
              { type: 'list', listType: 'disc', items: [
                "FOMO & YOLO: Memaksakan diri mengikuti tren dan mengejar apresiasi instan (seperti gawai baru atau kafe viral) dengan cara berhutang.",
                "Lifestyle Creep: Pengeluaran dan standar hidup yang secara otomatis meningkat seiring dengan bertambahnya gaji atau penghasilan bulanan.",
                "Doom Spending: Kebiasaan berbelanja daring secara impulsif sebagai pelarian instan dari tekanan atau stres harian.",
                "The Latte Factor: Pengeluaran kecil harian seperti jajan kopi atau langganan aplikasi yang diam-diam menggerus saldo dalam jumlah besar setiap bulannya."
              ]}
            ]
          }
        ]
      },
      {
        number: "04",
        title: "Instrumen Investasi Keuangan",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Investasi adalah aktivitas penanaman modal yang dirancang untuk mendapatkan keuntungan berlipat di masa depan, melindungi daya beli nilai uang dari inflasi, serta mencapai tujuan rencana keuangan jangka panjang seperti masa pensiun. Sebelum memulai investasi, pastikan dana darurat dan kebutuhan pokok harian sudah terpenuhi." },
              { type: 'image', src: "/assets/mitigasi/DetailEkonomi/04_ekonomi.webp", alt: "Tabel Instrumen Investasi Keuangan" },
              { type: 'text', content: "Peringatan Terhadap Investasi Bodong: Masyarakat dilarang keras berinvestasi menggunakan dana pinjaman online. Selalu ingat prinsip 2L (Legal terdaftar OJK/BAPPEBTI dan Logis secara imbal hasil). Segera laporkan segala bentuk indikasi penipuan kepada Satgas PASTI di nomor OJK 157" }
            ]
          }
        ]
      },
      {
        number: "05",
        title: "Bantuan Sosial Pemerintah Pascabencana",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Bantuan sosial berperan kritis sebagai jaring pengaman untuk memenuhi kebutuhan pangan darurat dan merangsang perputaran ekonomi desa untuk kembali pulih. Terdapat tiga pilar bantuan bagi warga terdampak: bantuan logistik darurat dan hunian, dukungan finansial serta layanan medis, hingga bantuan pemberdayaan produktif (seperti bibit pertanian)." },
              { type: 'heading', content: "Klasifikasi Besaran Bantuan Stimulan Perbaikan Rumah" },
              { type: 'text', content: "Mengacu pada Peraturan Bupati (Perbup) Nomor 52 Tahun 2024 untuk Kabupaten Semarang, kompensasi bantuan rumah yang rusak akibat bencana diklasifikasikan sebagai berikut:" },
              { type: 'image', src: "/assets/mitigasi/DetailEkonomi/05_ekonomi.webp", alt: "Tabel Besaran Bantuan Stimulan Perbaikan Rumah" },
              { type: 'heading', content: "Ancaman Penipuan Penyaluran Dana Bansos" },
              { type: 'text', content: "Distribusi dana bansos rawan dieksploitasi oleh kejahatan ekonomi yang memanfaatkan kepanikan warga. Berikut adalah beberapa tipologi kejahatan yang sering terjadi :" },
              { type: 'list', listType: 'disc', items: [
                "Kejahatan Siber & Phishing: Modus pengiriman pesan tautan (link) atau aplikasi APK berkedok \"pendaftaran bansos\" yang dirancang untuk meretas perangkat gawai dan menguras saldo dompet digital.",
                "Pencurian Identitas: Permintaan foto selfie dengan memegang KTP dan KK oleh oknum berkedok petugas lapangan, namun datanya digunakan untuk mencairkan utang Pinjol ilegal atas nama korban.",
                "Pungutan Liar (Pungli): Praktik penyunatan dana bantuan tunai secara sepihak oleh oknum akar rumput dengan dalih biaya pelicin administrasi atau pungutan \"uang lelah\" .",
                "Skema Advance Fee Fraud: Menjanjikan kuota bansos yang terbatas jika korban mau membayar uang transfer pelicin pendaftaran di awal."
              ]}
            ]
          }
        ]
      },
      {
        number: "06",
        title: "Manajemen Penyelamatan Dokumen Penting Keluarga",
        subsections: [
          {
            blocks: [
              { type: 'text', content: "Dokumen administrasi yang utuh sangat dibutuhkan untuk memperlancar klaim bantuan dari pemerintah, mempermudah pengurusan layanan kesehatan dasar pascabencana, dan mengakses layanan perbankan/asuransi ." },
              { type: 'list', listType: 'disc', items: [
                "Dokumen Identitas Diri: KTP, Kartu Keluarga (KK), Akta Kelahiran anak, dan Akta Nikah.",
                "Dokumen Kepemilikan & Finansial: Sertifikat kepemilikan tanah/rumah, BPKB, STNK, buku tabungan bank, kartu ATM debit/kredit, serta buku polis asuransi.",
                "Dokumen Medis & Pendidikan: Kartu kepesertaan BPJS, catatan riwayat rekam medis, ijazah sekolah, serta rapor."
              ]},
              { type: 'heading', content: "Strategi Mitigasi Penyelamatan Dokumen" },
              { type: 'text', content: "Banyak masyarakat prasejahtera rentan kehilangan dokumen karena penyimpanannya yang tidak memadai (seperti diletakkan di rak terbawah) dan tidak memiliki salinan cadangan. Langkah solutifnya meliputi:" },
              { type: 'list', listType: 'disc', items: [
                "Tas Siaga Bencana: Mengumpulkan seluruh dokumen fisik prioritas, lalu membungkusnya secara ketat dalam map kedap air/plastik. Kemudian map tersebut dimasukkan ke dalam satu tas tahan benturan yang diletakkan persis di dekat pintu keluar hunian agar siap dijinjing kapanpun instruksi evakuasi diumumkan.",
                "Sistem Digitalisasi: Menggunakan kamera gawai untuk memfoto atau memindai dokumen fisik dengan pencahayaan memadai, lalu menyimpan berkas elektroniknya ke ruang komputasi awan (contoh: Google Drive). Salinan digital ini sangat penting karena terbebas dari ancaman fisik seperti lumpur longsor dan kobaran api."
              ]}
            ]
          }
        ]
      }
    ]
  }
];

export function getMitigasiDetailBySlug(slug: string): MitigasiDetailData | undefined {
  return mitigasiDetailDataList.find(item => item.slug === slug);
}
