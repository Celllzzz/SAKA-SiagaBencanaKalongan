export interface MapDetail {
  id: string;
  title: string;
  definition: string;
  description: string;
  file?: string; // e.g., URL for downloading the PDF
}

export interface DusunData {
  slug: string;
  name: string;
  maps: MapDetail[];
}

export const dusunDataList: DusunData[] = [
  {
    slug: "dampu",
    name: "Dampu",
    maps: [
      {
        id: "01",
        title: "PETA GEOLOGI",
        definition: "Peta geologi menyajikan informasi persebaran, jenis, dan struktur batuan di permukaan bumi. Peta geologi menjadi dasar analisis sumber daya alam, tata ruang, hingga mitigasi bencana. Dalam konteks kebencanaan, peta geologi membantu mengidentifikasi karakteristik batuan—seperti tingkat pelapukan, kekompakan, dan serapan air—yang sangat memengaruhi kestabilan lereng.",
        description: "Dusun Dampu tersusun atas batupasir tuf dan breksi. Breksi segar membuat lereng lebih stabil, namun jika breksi melapuk dan retak, resapan air hujan akan menurunkan kekuatannya. Potensi longsor di Dusun Dampu sangat dipengaruhi oleh tingkat pelapukan batuan, kemiringan lereng, dan kondisi drainase.",
        file: "/download/PetaGeologi/PetaGeologi_Dampu.pdf" 
      },
      {
        id: "02",
        title: "PETA ANCAMAN",
        definition: "Peta Ancaman Tanah Longsor Desa Kalongan menyajikan persebaran tingkat potensi longsor (rendah, menengah, tinggi) di setiap dusun. Peta ancaman longsor bertujuan memetakan titik terdampak dan mengidentifikasi lokasi prioritas mitigasi serta kesiapsiagaan masyarakat. Informasi di dalam peta didukung langsung oleh hasil pengamatan lapangan dan dokumentasi kondisi aktual.",
        description: "Dusun Dampu memiliki kerawanan longsor rendah hingga tinggi. Zona berisiko tinggi berada di bagian utara Dusun Dampu, ditandai dengan tebing curam dan riwayat longsor. Meski sudah terdapat upaya mitigasi seperti pembuatan jenjang tebing, pengaturan jarak permukiman, dan pemasangan Early Warning System (EWS), kewaspadaan di Dusun Dampu tetap harus ditingkatkan.",
        file: "/download/PetaAncaman/PetaAncaman_Dampu.pdf"
      },
      {
        id: "03",
        title: "PETA RISIKO",
        definition: "Peta yang menunjukkan tingkat risiko bencana dengan menggabungkan faktor ancaman, kerentanan, dan kapasitas.",
        description: "[Deskripsi analisis risiko Dusun Dampu akan diisi di sini]",
        file: "#"
      },
      {
        id: "04",
        title: "PETA PELAPUKAN",
        definition: "Peta pelapukan menunjukkan tingkat perubahan batuan akibat faktor lingkungan (air, udara, iklim). Semakin tinggi tingkat pelapukan, kekuatan batuan makin menurun dan rentan longsor, khususnya di lereng curam. Peta yang merujuk pada klasifikasi GSEGWP (1972) ini berfungsi sebagai informasi awal untuk memetakan kawasan rawan gerakan tanah.",
        description: "Dusun Dampu didominasi oleh tingkat pelapukan Sangat Lapuk (W IV) pada batupasir tufaan dan breksi andesit. Penurunan kekuatan batuan tersebut membuat Dusun Dampu memiliki tingkat kerawanan longsor sedang hingga tinggi, terutama di area lereng curam.",
        file: "/download/PetaPelapukan/PetaPelapukan_Dampu.pdf"
      },
      {
        id: "05",
        title: "PETA EVAKUASI",
        definition: "Peta yang menunjukkan arah atau jalur aman untuk menyelamatkan diri menuju titik kumpul terdekat.",
        description: "[Deskripsi jalur evakuasi Dusun Dampu akan diisi di sini]",
        file: "#"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Dampu memiliki pola aliran dendritik dengan satu sungai utama dan beberapa anak sungai. Pola tersebut menunjukkan aliran lebih dipengaruhi topografi daripada struktur geologi. Kerapatan aliran di Dusun Dampu tergolong rendah. Sebagian aliran berada di lereng curam, yang berpotensi mempercepat erosi dan mengganggu kestabilan lereng, terutama saat curah hujan tinggi.",
        file: "#"
      },
      {
        id: "07",
        title: "PETA CURAH HUJAN",
        definition: "Peta yang menunjukkan tingkat curah hujan tahunan di area tersebut.",
        description: "[Deskripsi analisis curah hujan Dusun Dampu akan diisi di sini]",
        file: "#"
      },
      {
        id: "08",
        title: "PETA KAPASITAS",
        definition: "Peta yang menunjukkan kapasitas daya tampung dan dukungan mitigasi.",
        description: "[Deskripsi analisis kapasitas Dusun Dampu akan diisi di sini]",
        file: "#"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Dusun Dampu didominasi zona kerawanan sedang, dengan ancaman tinggi di bagian utara dan timur. Sebaran kelompok rentan di Dusun Dampu terpusat di kawasan permukiman yang sebagian berdekatan dengan area berpotensi longsor. Tata letak tersebut menuntut peningkatan kesiapsiagaan masyarakat dan penentuan prioritas evakuasi kelompok rentan di Dusun Dampu.",
        file: "/download/PetaKerentanan/PetaKerentanan_Dampu.pdf"
      }
    ]
  },
  {
    slug: "bandungan",
    name: "Bandungan",
    maps: [
      {
        id: "01",
        title: "PETA GEOLOGI",
        definition: "Peta geologi menyajikan informasi persebaran, jenis, dan struktur batuan di permukaan bumi. Peta geologi menjadi dasar analisis sumber daya alam, tata ruang, hingga mitigasi bencana. Dalam konteks kebencanaan, peta geologi membantu mengidentifikasi karakteristik batuan—seperti tingkat pelapukan, kekompakan, dan serapan air—yang sangat memengaruhi kestabilan lereng.",
        description: "Dusun Bandungan tersusun atas batupasir tuf dengan karakteristik mirip Dusun Glepung. Kerentanan longsor di Dusun Bandungan bergantung pada tingkat pelapukan batuan, curah hujan, dan topografi. Lereng terjal dengan batuan yang telah melapuk memiliki risiko longsor tinggi, sedangkan area yang landai relatif lebih aman.",
        file: "/download/PetaGeologi/PetaGeologi_Bandungan.pdf" 
      },
      {
        id: "02",
        title: "PETA ANCAMAN",
        definition: "Peta Ancaman Tanah Longsor Desa Kalongan menyajikan persebaran tingkat potensi longsor (rendah, menengah, tinggi) di setiap dusun. Peta ancaman longsor bertujuan memetakan titik terdampak dan mengidentifikasi lokasi prioritas mitigasi serta kesiapsiagaan masyarakat. Informasi di dalam peta didukung langsung oleh hasil pengamatan lapangan dan dokumentasi kondisi aktual.",
        description: "Tingkat kerawanan Dusun Bandungan berkisar dari rendah hingga tinggi, dengan zona ancaman tinggi terpusat di area lereng. Dusun Bandungan memiliki riwayat longsor, khususnya di sekitar RT 04/RW 03 yang berdekatan dengan permukiman dan jalur utama Ungaran–Mranggen. Pemasangan EWS di lokasi longsor Dusun Bandungan menjadi langkah mitigasi penting untuk mengantisipasi pergerakan tanah susulan.",
        file: "/download/PetaAncaman/PetaAncaman_Bandungan.pdf"
      },
      {
        id: "04",
        title: "PETA PELAPUKAN",
        definition: "Peta pelapukan menunjukkan tingkat perubahan batuan akibat faktor lingkungan (air, udara, iklim). Semakin tinggi tingkat pelapukan, kekuatan batuan makin menurun dan rentan longsor, khususnya di lereng curam. Peta yang merujuk pada klasifikasi GSEGWP (1972) ini berfungsi sebagai informasi awal untuk memetakan kawasan rawan gerakan tanah.",
        description: "Tingkat pelapukan di Dusun Bandungan bervariasi dari Sangat Lapuk (W IV) di utara hingga Lapuk Sempurna (W V) di tengah dan selatan. Pada level W V, batuan sudah berubah menyerupai tanah lunak. Hal tersebut menjadikan Dusun Bandungan berstatus rawan longsor tinggi dan membutuhkan prioritas mitigasi.",
        file: "/download/PetaPelapukan/PetaPelapukan_Bandungan.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Bandungan memiliki pola aliran dendritik yang berkembang baik dengan sebaran sungai yang merata akibat pengaruh topografi. Pada area Dusun Bandungan dengan kontur rapat, aliran air akan mengalir lebih deras. Kondisi tersebut dapat mengganggu kestabilan lereng dan berpotensi mempercepat terjadinya erosi.",
        file: "#"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Permukiman Dusun Bandungan berada pada zona kerawanan rendah hingga sedang, sementara ancaman tinggi terdapat di area lereng. Kelompok rentan di Dusun Bandungan tersebar mengikuti pola permukiman. Sebaran tersebut mengharuskan penyusunan jalur evakuasi yang efektif untuk melindungi kelompok rentan di Dusun Bandungan saat terjadi longsor.",
        file: "/download/PetaKerentanan/PetaKerentanan_Bandungan.pdf"
      }
    ]
  },
  {
    slug: "glepung",
    name: "Glepung",
    maps: [
      {
        id: "01",
        title: "PETA GEOLOGI",
        definition: "Peta geologi menyajikan informasi persebaran, jenis, dan struktur batuan di permukaan bumi. Peta geologi menjadi dasar analisis sumber daya alam, tata ruang, hingga mitigasi bencana. Dalam konteks kebencanaan, peta geologi membantu mengidentifikasi karakteristik batuan—seperti tingkat pelapukan, kekompakan, dan serapan air—yang sangat memengaruhi kestabilan lereng.",
        description: "Dusun Glepung didominasi oleh batupasir tuf vulkanik yang mudah melapuk menjadi material gembur. Kondisi pelapukan tersebut melemahkan kestabilan lereng, sementara resapan air hujan berpotensi memicu pergerakan tanah, terutama di lereng curam. Oleh karena itu, Dusun Glepung membutuhkan kewaspadaan ekstra saat musim hujan.",
        file: "/download/PetaGeologi/PetaGeologi_Glepung.pdf" 
      },
      {
        id: "02",
        title: "PETA ANCAMAN",
        definition: "Peta Ancaman Tanah Longsor Desa Kalongan menyajikan persebaran tingkat potensi longsor (rendah, menengah, tinggi) di setiap dusun. Peta ancaman longsor bertujuan memetakan titik terdampak dan mengidentifikasi lokasi prioritas mitigasi serta kesiapsiagaan masyarakat. Informasi di dalam peta didukung langsung oleh hasil pengamatan lapangan dan dokumentasi kondisi aktual.",
        description: "Mayoritas Dusun Glepung berada di zona kerawanan rendah hingga menengah, namun tetap memiliki titik rawan tinggi. Zona rawan tinggi di Dusun Glepung terkonsentrasi di barat laut, tepatnya di sekitar Perumahan Ungaran Asri Regency (PUNSAE) yang mencakup wilayah RT 03, 04, dan 05/RW 20. Lokasi riwayat longsor di Dusun Glepung menuntut perhatian khusus dalam upaya mitigasi kebencanaan.",
        file: "/download/PetaAncaman/PetaAncaman_Glepung.pdf"
      },
      {
        id: "04",
        title: "PETA PELAPUKAN",
        definition: "Peta pelapukan menunjukkan tingkat perubahan batuan akibat faktor lingkungan (air, udara, iklim). Semakin tinggi tingkat pelapukan, kekuatan batuan makin menurun dan rentan longsor, khususnya di lereng curam. Peta yang merujuk pada klasifikasi GSEGWP (1972) ini berfungsi sebagai informasi awal untuk memetakan kawasan rawan gerakan tanah.",
        description: "Mayoritas wilayah Dusun Glepung berstatus Sangat Lapuk (W IV) pada litologi batupasir tufaan. Zona pelapukan terpusat di sepanjang aliran sungai karena dipengaruhi oleh air. Kondisi tersebut membuat area sekitar sungai di Dusun Glepung sangat rentan mengalami erosi dan longsor dangkal, dengan tingkat kerawanan umum sedang hingga tinggi.",
        file: "/download/PetaPelapukan/PetaPelapukan_Glepung.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Glepung memiliki pola aliran dendritik dengan beberapa anak sungai yang berpusat di bagian timur. Alirannya murni mengikuti kemiringan lereng tanpa pengaruh struktur geologi yang dominan. Kerapatan aliran di bagian timur Dusun Glepung jauh lebih tinggi dibandingkan bagian barat, sehingga aliran permukaan terkonsentrasi di timur dan meningkatkan potensi erosi.",
        file: "#"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Persebaran kelompok rentan di Dusun Glepung cukup luas, dengan beberapa titik berlokasi di sekitar zona kerawanan sedang hingga tinggi. Posisi kelompok rentan di Dusun Glepung menuntut koordinasi evakuasi yang sangat baik agar bantuan dan penyelamatan saat bencana dapat dilakukan dengan cepat.",
        file: "/download/PetaKerentanan/PetaKerentanan_Glepung.pdf"
      }
    ]
  },
  {
    slug: "tompo-gunung",
    name: "Tompo Gunung",
    maps: [
      {
        id: "01",
        title: "PETA GEOLOGI",
        definition: "Peta geologi menyajikan informasi persebaran, jenis, dan struktur batuan di permukaan bumi. Peta geologi menjadi dasar analisis sumber daya alam, tata ruang, hingga mitigasi bencana. Dalam konteks kebencanaan, peta geologi membantu mengidentifikasi karakteristik batuan—seperti tingkat pelapukan, kekompakan, dan serapan air—yang sangat memengaruhi kestabilan lereng.",
        description: "Serupa dengan Dusun Dampu, litologi Dusun Tompogunung terdiri dari batupasir tuf dan breksi. Area dengan breksi segar cenderung lebih stabil, sementara batuan yang telah melapuk sangat rentan longsor, terutama saat hujan lebat. Kerawanan longsor di Dusun Tompogunung sangat ditentukan oleh tingkat pelapukan batuan dan morfologi lerengnya.",
        file: "/download/PetaGeologi/PetaGeologi_TompoGunung.pdf" 
      },
      {
        id: "02",
        title: "PETA ANCAMAN",
        definition: "Peta Ancaman Tanah Longsor Desa Kalongan menyajikan persebaran tingkat potensi longsor (rendah, menengah, tinggi) di setiap dusun. Peta ancaman longsor bertujuan memetakan titik terdampak dan mengidentifikasi lokasi prioritas mitigasi serta kesiapsiagaan masyarakat. Informasi di dalam peta didukung langsung oleh hasil pengamatan lapangan dan dokumentasi kondisi aktual.",
        description: "Tingkat kerawanan Dusun Tompo Gunung didominasi zona rendah hingga menengah, dengan ancaman tinggi terpusat di bagian timur laut. Titik paling rawan di Dusun Tompo Gunung berada di sekitar RT 03 yang memiliki lereng dengan riwayat longsor. Kedekatan titik longsor dengan permukiman mengharuskan warga Dusun Tompo Gunung meningkatkan kewaspadaan, terutama saat hujan lebat dengan durasi panjang.",
        file: "/download/PetaAncaman/PetaAncaman_TompoGunung.pdf"
      },
      {
        id: "04",
        title: "PETA PELAPUKAN",
        definition: "Peta pelapukan menunjukkan tingkat perubahan batuan akibat faktor lingkungan (air, udara, iklim). Semakin tinggi tingkat pelapukan, kekuatan batuan makin menurun dan rentan longsor, khususnya di lereng curam. Peta yang merujuk pada klasifikasi GSEGWP (1972) ini berfungsi sebagai informasi awal untuk memetakan kawasan rawan gerakan tanah.",
        description: "Tingkat pelapukan di Dusun Tompo Gunung paling bervariasi. Bagian barat masih berstatus Lapuk Sedang (W III) dengan batuan yang relatif lebih kuat, sementara area tengah ke timur didominasi Sangat Lapuk (W IV). Secara umum kerawanan longsor di Dusun Tompo Gunung tergolong sedang, namun area W IV tetap menuntut kewaspadaan ekstra terhadap potensi longsor.",
        file: "/download/PetaPelapukan/PetaPelapukan_TompoGunung.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Pola aliran di Dusun Tompogunung juga bersifat dendritik dengan sungai utama di pinggir wilayah. Aliran sungai mengikuti bentuk kontur sehingga sangat dipengaruhi morfologi. Keberadaan lembah di Dusun Tompogunung menjadi jalur konsentrasi air hujan yang dapat memicu erosi di sekitar sungai, khususnya pada lereng terjal.",
        file: "#"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Dusun Tompo Gunung didominasi zona kerawanan sedang, dengan area ancaman tinggi terpusat di bagian timur. Sebaran kelompok rentan di Dusun Tompo Gunung mengikuti kawasan permukiman warga. Lokasi permukiman tersebut mengharuskan Dusun Tompo Gunung menyediakan jalur evakuasi yang mudah diakses untuk menjamin keselamatan balita, ibu hamil, dan lansia saat longsor terjadi.",
        file: "/download/PetaKerentanan/PetaKerentanan_TompoGunung.pdf"
      }
    ]
  }
];

export function getDusunData(slug: string) {
  return dusunDataList.find(d => d.slug === slug);
}
