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
        id: "04",
        title: "PETA PELAPUKAN",
        definition: "Peta pelapukan menunjukkan tingkat perubahan batuan akibat faktor lingkungan (air, udara, iklim). Semakin tinggi tingkat pelapukan, kekuatan batuan makin menurun dan rentan longsor, khususnya di lereng curam. Peta yang merujuk pada klasifikasi GSEGWP (1972) ini berfungsi sebagai informasi awal untuk memetakan kawasan rawan gerakan tanah.",
        description: "Tingkat pelapukan batuan di Dusun Dampu didominasi oleh kondisi Sangat Lapuk (W IV), terutama pada batupasir tufaan dan breksi andesit. Pada tahap pelapukan tersebut, kekuatan batuan menurun drastis sehingga area lereng curam di Dusun Dampu memiliki tingkat kerawanan longsor sedang hingga tinggi.",
        file: "/download/PetaPelapukan/PetaPelapukan_Dampu.pdf"
      },
      {
        id: "05",
        title: "PETA EVAKUASI",
        definition: "Peta Jalur Evakuasi menyajikan rute rekomendasi bagi masyarakat menuju lokasi aman saat terjadi bencana. Peta evakuasi berfungsi sebagai upaya mitigasi agar warga mengenali rute, titik kumpul, dan fasilitas pendukung. Keberadaan peta jalur evakuasi diharapkan mempercepat proses evakuasi yang terarah dan terkoordinasi untuk meminimalkan risiko akibat bencana longsor.",
        description: "Peta Jalur Evakuasi Dusun Dampu menjadi panduan bagi warga RW 01 (RT 01–04) saat menghadapi longsor. Rute di Dusun Dampu dirancang mengikuti akses jalan menuju titik kumpul agar proses evakuasi berlangsung cepat dan terarah. Peta Dusun Dampu memuat lokasi titik longsor, titik kumpul, palang evakuasi, Early Warning System (EWS), rumah tokoh masyarakat (RT, RW, Kepala Dusun), serta fasilitas umum seperti masjid, gereja, sanggar budaya, dan makam guna mendukung kelancaran evakuasi.",
        file: "/download/PetaEvakuasi/PetaEvakuasi_Dampu.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Dampu memiliki pola aliran dendritik dengan satu sungai utama dan beberapa anak sungai. Pola tersebut menunjukkan aliran lebih dipengaruhi topografi daripada struktur geologi. Kerapatan aliran di Dusun Dampu tergolong rendah. Sebagian aliran berada di lereng curam, yang berpotensi mempercepat erosi dan mengganggu kestabilan lereng, terutama saat curah hujan tinggi.",
        file: "/download/PetaAliran/PetaAliran_Dampu.pdf"
      },
      {
        id: "07",
        title: "PETA CURAH HUJAN",
        definition: "Peta curah hujan memetakan persebaran jumlah hujan di suatu wilayah. Pada kajian ini, peta disusun menggunakan data Pos Hujan Ngobo, Ungaran, dan Banyumeneng (BMKG Jawa Tengah) untuk periode Januari–Juni 2026. Selain untuk pertanian dan pengelolaan air, informasi curah hujan sangat krusial dalam mitigasi bencana. Hujan lebat yang terus-menerus memicu kejenuhan air pada tanah, yang melemahkan kestabilan lereng dan meningkatkan risiko longsor.",
        description: "Dusun Dampu memiliki curah hujan rata-rata 324–332 mm/bulan (kategori sedang) yang tersebar merata, dengan sedikit peningkatan di bagian selatan. Dibandingkan dusun lain, curah hujan di Dusun Dampu adalah yang paling rendah dengan catatan longsor yang sangat minim. Potensi longsor akibat curah hujan di Dusun Dampu tergolong rendah, meskipun faktor kemiringan lereng dan jenis tanah tetap harus diperhatikan.",
        file: "/download/PetaCurahHujan/CurahHujan_Dampu.pdf"
      },
      {
        id: "08",
        title: "PETA KAPASITAS",
        definition: "Peta Kapasitas memetakan kemampuan sumber daya manusia, infrastruktur, kelembagaan, dan lingkungan dalam mencegah atau menanggulangi ancaman bencana. Secara konsep, semakin besar kapasitas suatu daerah, semakin kecil risiko bencananya. Peta kapasitas bertujuan mendata seluruh potensi yang tersedia, mulai dari tenaga masyarakat, fasilitas umum, hingga vegetasi penahan longsor.",
        description: "Dusun Dampu memiliki 923 jiwa penduduk yang dipimpin oleh satu Kepala Dusun dan empat Ketua RT. Mayoritas warga Dusun Dampu berprofesi sebagai karyawan swasta, buruh harian, dan petani yang potensial untuk kerja bakti maupun evakuasi mandiri. Kapasitas pendukung di Dusun Dampu mencakup 3 PNS dan 1 TNI untuk koordinasi pemerintahan dan keamanan. Fasilitas umum seperti masjid, musala, dan sekolah di zona longsor rendah siap digunakan sebagai titik evakuasi bagi warga Dusun Dampu.",
        file: "/download/PetaKapasitas/PetaKapasitas_Dampu_compressed.pdf"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Dusun Dampu didominasi zona kerawanan sedang, dengan ancaman tinggi di bagian utara dan timur. Sebaran kelompok rentan di Dusun Dampu terpusat di kawasan permukiman yang sebagian berdekatan dengan area berpotensi longsor. Tata letak tersebut menuntut peningkatan kesiapsiagaan masyarakat dan penentuan prioritas evakuasi kelompok rentan di Dusun Dampu.",
        file: "/download/PetaKerentanan/PetaKerentanan_Dampu.pdf"
      },
      {
        id: "03",
        title: "PETA RISIKO",
        definition: "Peta risiko menunjukkan tingkat bahaya longsor di suatu wilayah berdasarkan tiga faktor: potensi ancaman, kerentanan warga, dan kapasitas kesiapsiagaan masyarakat. Peta risiko berfungsi sebagai panduan bagi warga dan pemerintah desa untuk menentukan titik prioritas kewaspadaan, target penyelamatan kelompok rentan, dan arah evakuasi agar masyarakat lebih siap saat menghadapi bencana.",
        description: "Wilayah utara dan timur laut Dusun Dampu (sekitar RT 3) termasuk zona risiko longsor tinggi. Kawasan RT 3 dan RT 4 di Dusun Dampu membutuhkan kewaspadaan ekstra karena lokasinya berbatasan dengan zona bahaya dan dihuni banyak kelompok rentan. Meskipun alat peringatan dini dan jalur evakuasi sudah terpasang, kesiapsiagaan warga Dusun Dampu perlu terus ditingkatkan.",
        file: "/download/PetaRisiko/PetaRisiko_Dampu_compressed.pdf"
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
        id: "05",
        title: "PETA EVAKUASI",
        definition: "Peta Jalur Evakuasi menyajikan rute rekomendasi bagi masyarakat menuju lokasi aman saat terjadi bencana. Peta evakuasi berfungsi sebagai upaya mitigasi agar warga mengenali rute, titik kumpul, dan fasilitas pendukung. Keberadaan peta jalur evakuasi diharapkan mempercepat proses evakuasi yang terarah dan terkoordinasi untuk meminimalkan risiko akibat bencana longsor.",
        description: "Peta Jalur Evakuasi Dusun Bandungan memandu warga RW 03 (RT 02–06) menuju lokasi aman melalui akses jalan yang terstruktur. Penempatan titik kumpul di Dusun Bandungan disesuaikan dengan keterjangkauan dari seluruh area RT demi kelancaran dan ketertiban evakuasi. Peta Dusun Bandungan juga memuat posisi titik longsor, EWS, masjid, serta rumah Ketua RW dan Kepala Dusun yang berfungsi sebagai pusat informasi dan penyebaran instruksi darurat bagi warga Dusun Bandungan.",
        file: "/download/PetaEvakuasi/PetaEvakuasi_Bandungan.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Bandungan memiliki pola aliran dendritik yang berkembang baik dengan sebaran sungai yang merata akibat pengaruh topografi. Pada area Dusun Bandungan dengan kontur rapat, aliran air akan mengalir lebih deras. Kondisi tersebut dapat mengganggu kestabilan lereng dan berpotensi mempercepat terjadinya erosi.",
        file: "/download/PetaAliran/PetaAliran_Bandungan.pdf"
      },
      {
        id: "07",
        title: "PETA CURAH HUJAN",
        definition: "Peta curah hujan memetakan persebaran jumlah hujan di suatu wilayah. Pada kajian ini, peta disusun menggunakan data Pos Hujan Ngobo, Ungaran, dan Banyumeneng (BMKG Jawa Tengah) untuk periode Januari–Juni 2026. Selain untuk pertanian dan pengelolaan air, informasi curah hujan sangat krusial dalam mitigasi bencana. Hujan lebat yang terus-menerus memicu kejenuhan air pada tanah, yang melemahkan kestabilan lereng dan meningkatkan risiko longsor.",
        description: "Dusun Bandungan mencatat curah hujan 324–357 mm/bulan (kategori sedang hingga tinggi), dengan puncaknya berada di bagian tengah hingga selatan Dusun Bandungan. Terdapat titik riwayat longsor di area Dusun Bandungan yang bercurah hujan tinggi dan bertopografi curam, yang membuktikan besarnya pengaruh hujan sebagai pemicu pergerakan tanah. Dusun Bandungan menuntut prioritas pencegahan dan mitigasi longsor ekstra saat musim penghujan.",
        file: "/download/PetaCurahHujan/CurahHujan_Bandungan.pdf"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Permukiman Dusun Bandungan berada pada zona kerawanan rendah hingga sedang, sementara ancaman tinggi terdapat di area lereng. Kelompok rentan di Dusun Bandungan tersebar mengikuti pola permukiman. Sebaran tersebut mengharuskan penyusunan jalur evakuasi yang efektif untuk melindungi kelompok rentan di Dusun Bandungan saat terjadi longsor.",
        file: "/download/PetaKerentanan/PetaKerentanan_Bandungan.pdf"
      },
      {
        id: "08",
        title: "PETA KAPASITAS",
        definition: "Peta Kapasitas memetakan kemampuan sumber daya manusia, infrastruktur, kelembagaan, dan lingkungan dalam mencegah atau menanggulangi ancaman bencana. Secara konsep, semakin besar kapasitas suatu daerah, semakin kecil risiko bencananya. Peta kapasitas bertujuan mendata seluruh potensi yang tersedia, mulai dari tenaga masyarakat, fasilitas umum, hingga vegetasi penahan longsor.",
        description: "Dusun Bandungan dihuni oleh 1.155 jiwa yang dipimpin satu Kepala Dusun, satu Ketua RW, dan enam Ketua RT. Keberagaman profesi warga Dusun Bandungan menjadi potensi besar untuk gotong royong dan pembangunan sarana mitigasi. Kapasitas sumber daya manusia di Dusun Bandungan sangat memadai dengan dukungan 12 PNS, 3 TNI, 2 Polri, 6 guru, dan 2 bidan. Selain itu, masjid dan musala yang tersebar merata di Dusun Bandungan siap difungsikan sebagai titik kumpul evakuasi.",
        file: "/download/PetaKapasitas/PetaKapasitas_Bandungan_compressed.pdf"
      },
      {
        id: "03",
        title: "PETA RISIKO",
        definition: "Peta risiko menunjukkan tingkat bahaya longsor di suatu wilayah berdasarkan tiga faktor: potensi ancaman, kerentanan warga, dan kapasitas kesiapsiagaan masyarakat. Peta risiko berfungsi sebagai panduan bagi warga dan pemerintah desa untuk menentukan titik prioritas kewaspadaan, target penyelamatan kelompok rentan, dan arah evakuasi agar masyarakat lebih siap saat menghadapi bencana.",
        description: "Terdapat dua area risiko longsor tinggi di Dusun Bandungan, yakni di bagian utara (sekitar Jl. Arjuna) serta membentang dari tengah hingga selatan Dusun Bandungan. Area RT 4 di Dusun Bandungan menjadi titik paling rawan karena berdekatan dengan zona bahaya dan banyak dihuni kelompok rentan. Walaupun alat peringatan dini dan jalur evakuasi sudah beroperasi di RT 4, kesiapsiagaan warga Dusun Bandungan tidak boleh menurun.",
        file: "/download/PetaRisiko/PetaRisiko_Bandungan_compressed.pdf"
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
        id: "05",
        title: "PETA EVAKUASI",
        definition: "Peta Jalur Evakuasi menyajikan rute rekomendasi bagi masyarakat menuju lokasi aman saat terjadi bencana. Peta evakuasi berfungsi sebagai upaya mitigasi agar warga mengenali rute, titik kumpul, dan fasilitas pendukung. Keberadaan peta jalur evakuasi diharapkan mempercepat proses evakuasi yang terarah dan terkoordinasi untuk meminimalkan risiko akibat bencana longsor.",
        description: "Peta Jalur Evakuasi Dusun Glepung menjadi panduan mitigasi bagi warga RW 09, 12, 18, dan 20. Rute evakuasi di Dusun Glepung mengikuti jaringan jalan utama yang menghubungkan permukiman dengan titik kumpul yang strategis dan mudah dijangkau dari setiap RW. Peta Dusun Glepung menampilkan titik longsor, titik kumpul, rumah tokoh masyarakat, serta fasilitas penting seperti Puskesmas Kalongan, Balai Desa, Kantor Desa, Alun-Alun, KUA, masjid, musala, dan GKJ Glepung sebagai pusat koordinasi bencana.",
        file: "/download/PetaEvakuasi/PetaEvakuasi_Glepung.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Dusun Glepung memiliki pola aliran dendritik dengan beberapa anak sungai yang berpusat di bagian timur. Alirannya murni mengikuti kemiringan lereng tanpa pengaruh struktur geologi yang dominan. Kerapatan aliran di bagian timur Dusun Glepung jauh lebih tinggi dibandingkan bagian barat, sehingga aliran permukaan terkonsentrasi di timur dan meningkatkan potensi erosi.",
        file: "/download/PetaAliran/PetaAliran_Glepung.pdf"
      },
      {
        id: "07",
        title: "PETA CURAH HUJAN",
        definition: "Peta curah hujan memetakan persebaran jumlah hujan di suatu wilayah. Pada kajian ini, peta disusun menggunakan data Pos Hujan Ngobo, Ungaran, dan Banyumeneng (BMKG Jawa Tengah) untuk periode Januari–Juni 2026. Selain untuk pertanian dan pengelolaan air, informasi curah hujan sangat krusial dalam mitigasi bencana. Hujan lebat yang terus-menerus memicu kejenuhan air pada tanah, yang melemahkan kestabilan lereng dan meningkatkan risiko longsor.",
        description: "Curah hujan rata-rata di Dusun Glepung berkisar 324–357 mm/bulan (kategori sedang hingga tinggi). Intensitas hujan tertinggi di Dusun Glepung terkonsentrasi pada bagian timur dan tenggara, sedangkan area barat memiliki curah hujan lebih rendah. Meskipun belum ada riwayat longsor di Dusun Glepung, area lereng curam yang diguyur curah hujan tinggi tetap menuntut kewaspadaan penuh.",
        file: "/download/PetaCurahHujan/CurahHujan_Glepung.pdf"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Persebaran kelompok rentan di Dusun Glepung cukup luas, dengan beberapa titik berlokasi di sekitar zona kerawanan sedang hingga tinggi. Posisi kelompok rentan di Dusun Glepung menuntut koordinasi evakuasi yang sangat baik agar bantuan dan penyelamatan saat bencana dapat dilakukan dengan cepat.",
        file: "/download/PetaKerentanan/PetaKerentanan_Glepung.pdf"
      },
      {
        id: "08",
        title: "PETA KAPASITAS",
        definition: "Peta Kapasitas memetakan kemampuan sumber daya manusia, infrastruktur, kelembagaan, dan lingkungan dalam mencegah atau menanggulangi ancaman bencana. Secara konsep, semakin besar kapasitas suatu daerah, semakin kecil risiko bencananya. Peta kapasitas bertujuan mendata seluruh potensi yang tersedia, mulai dari tenaga masyarakat, fasilitas umum, hingga vegetasi penahan longsor.",
        description: "Dusun Glepung memiliki 1.108 penduduk di bawah pimpinan satu Kepala Dusun dan empat Ketua RW. Tenaga masyarakat Dusun Glepung sangat potensial untuk penanganan awal bencana. Kapasitas keahlian di Dusun Glepung ditopang oleh 2 PNS, 2 TNI, 1 Polri, 1 guru, 1 bidan, dan 2 peneliti untuk pendampingan teknis kebencanaan. Fasilitas seperti masjid, gereja, sekolah, posyandu, dan puskesmas di Dusun Glepung siap dijadikan pusat informasi, evakuasi, dan pelayanan kesehatan darurat.",
        file: "/download/PetaKapasitas/PetaKapasitas_Glepung_compressed.pdf"
      },
      {
        id: "03",
        title: "PETA RISIKO",
        definition: "Peta risiko menunjukkan tingkat bahaya longsor di suatu wilayah berdasarkan tiga faktor: potensi ancaman, kerentanan warga, dan kapasitas kesiapsiagaan masyarakat. Peta risiko berfungsi sebagai panduan bagi warga dan pemerintah desa untuk menentukan titik prioritas kewaspadaan, target penyelamatan kelompok rentan, dan arah evakuasi agar masyarakat lebih siap saat menghadapi bencana.",
        description: "Mayoritas permukiman di Dusun Glepung (RW 9, RW 12, RW 18) tergolong aman dari risiko longsor. Namun, kawasan RW 20 di barat laut Dusun Glepung berstatus zona risiko tinggi dan banyak dihuni oleh kelompok rentan. Meski fasilitas evakuasi, kesehatan, dan tempat ibadah sudah memadai di RW 20, warga Dusun Glepung di titik tersebut harus terus menjaga kewaspadaan.",
        file: "/download/PetaRisiko/PetaRisiko_Glepung_compressed.pdf"
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
        id: "05",
        title: "PETA EVAKUASI",
        definition: "Peta Jalur Evakuasi menyajikan rute rekomendasi bagi masyarakat menuju lokasi aman saat terjadi bencana. Peta evakuasi berfungsi sebagai upaya mitigasi agar warga mengenali rute, titik kumpul, dan fasilitas pendukung. Keberadaan peta jalur evakuasi diharapkan mempercepat proses evakuasi yang terarah dan terkoordinasi untuk meminimalkan risiko akibat bencana longsor.",
        description: "Peta Jalur Evakuasi Dusun Tompogunung dirancang untuk warga RW 10 (RT 01–06) dengan memanfaatkan akses jalan terdekat menuju lokasi aman. Rute evakuasi di Dusun Tompogunung dipastikan mudah dikenali dan dijangkau oleh seluruh warga. Peta Dusun Tompogunung turut menampilkan titik longsor, titik kumpul, rumah tokoh masyarakat, serta fasilitas seperti masjid, musala, pondok pesantren, posyandu, dan Kayangan Tebing Al Fatah yang dapat dimanfaatkan warga Dusun Tompogunung sebagai posko orientasi darurat.",
        file: "/download/PetaEvakuasi/PetaEvakuasi_TompoGunung.pdf"
      },
      {
        id: "06",
        title: "PETA ALIRAN",
        definition: "Peta aliran menyajikan informasi arah, sebaran, dan hubungan antar sungai di suatu wilayah. Peta aliran membantu warga memahami sistem drainase, topografi, dan kaitan sungai dengan kondisi geologi. Terkait kebencanaan, peta aliran sangat berguna untuk mengidentifikasi daerah rawan erosi, genangan, dan longsor dengan melihat pengaruh morfologi terhadap pergerakan air hujan.",
        description: "Pola aliran di Dusun Tompogunung juga bersifat dendritik dengan sungai utama di pinggir wilayah. Aliran sungai mengikuti bentuk kontur sehingga sangat dipengaruhi morfologi. Keberadaan lembah di Dusun Tompogunung menjadi jalur konsentrasi air hujan yang dapat memicu erosi di sekitar sungai, khususnya pada lereng terjal.",
        file: "/download/PetaAliran/PetaAliran_TompoGunung.pdf"
      },
      {
        id: "07",
        title: "PETA CURAH HUJAN",
        definition: "Peta curah hujan memetakan persebaran jumlah hujan di suatu wilayah. Pada kajian ini, peta disusun menggunakan data Pos Hujan Ngobo, Ungaran, dan Banyumeneng (BMKG Jawa Tengah) untuk periode Januari–Juni 2026. Selain untuk pertanian dan pengelolaan air, informasi curah hujan sangat krusial dalam mitigasi bencana. Hujan lebat yang terus-menerus memicu kejenuhan air pada tanah, yang melemahkan kestabilan lereng dan meningkatkan risiko longsor.",
        description: "Dusun Tompo Gunung memiliki curah hujan 324–357 mm/bulan (kategori sedang hingga tinggi), dengan intensitas tertinggi di barat laut dan terendah di tenggara. Mengingat Dusun Tompo Gunung didominasi oleh topografi perbukitan berlereng curam, tingginya curah hujan sangat berisiko memicu erosi dan longsor. Hal tersebut mengharuskan Dusun Tompo Gunung mendapat pengawasan khusus dari masyarakat selama musim hujan.",
        file: "/download/PetaCurahHujan/CurahHujan_TompoGunung.pdf"
      },
      {
        id: "09",
        title: "PETA KERENTANAN",
        definition: "Peta Kerentanan memetakan persebaran kelompok rentan (balita, ibu hamil, lansia) yang diintegrasikan dengan tingkat ancaman longsor di Desa Kalongan. Peta kerentanan berfungsi untuk mengidentifikasi lokasi prioritas mitigasi, dasar penyusunan jalur evakuasi, dan perencanaan kesiapsiagaan masyarakat. Titik kelompok rentan pada peta merupakan sampel pendataan lapangan dan data kader sebagai informasi pendukung mitigasi, bukan representasi keseluruhan populasi di Desa Kalongan.",
        description: "Dusun Tompo Gunung didominasi zona kerawanan sedang, dengan area ancaman tinggi terpusat di bagian timur. Sebaran kelompok rentan di Dusun Tompo Gunung mengikuti kawasan permukiman warga. Lokasi permukiman tersebut mengharuskan Dusun Tompo Gunung menyediakan jalur evakuasi yang mudah diakses untuk menjamin keselamatan balita, ibu hamil, dan lansia saat longsor terjadi.",
        file: "/download/PetaKerentanan/PetaKerentanan_TompoGunung.pdf"
      },
      {
        id: "08",
        title: "PETA KAPASITAS",
        definition: "Peta Kapasitas memetakan kemampuan sumber daya manusia, infrastruktur, kelembagaan, dan lingkungan dalam mencegah atau menanggulangi ancaman bencana. Secara konsep, semakin besar kapasitas suatu daerah, semakin kecil risiko bencananya. Peta kapasitas bertujuan mendata seluruh potensi yang tersedia, mulai dari tenaga masyarakat, fasilitas umum, hingga vegetasi penahan longsor.",
        description: "Dusun Tompo Gunung memiliki populasi terbesar, yakni 1.229 jiwa, di bawah koordinasi satu Kepala Dusun, satu Ketua RW, dan enam Ketua RT. Besarnya jumlah penduduk Dusun Tompo Gunung menjadi modal tenaga kerja utama untuk mitigasi bencana berbasis masyarakat. Kapasitas pendukung di Dusun Tompo Gunung diperkuat oleh 6 PNS, 1 TNI, 2 Polri, 9 guru, 1 pengacara, dan 1 peneliti. Infrastruktur seperti masjid, pondok pesantren, dan posyandu di Dusun Tompo Gunung siap difungsikan untuk evakuasi dan kesehatan darurat.",
        file: "/download/PetaKapasitas/PetaKapasitas_TompoGunung_compressed.pdf"
      },
      {
        id: "03",
        title: "PETA RISIKO",
        definition: "Peta risiko menunjukkan tingkat bahaya longsor di suatu wilayah berdasarkan tiga faktor: potensi ancaman, kerentanan warga, dan kapasitas kesiapsiagaan masyarakat. Peta risiko berfungsi sebagai panduan bagi warga dan pemerintah desa untuk menentukan titik prioritas kewaspadaan, target penyelamatan kelompok rentan, dan arah evakuasi agar masyarakat lebih siap saat menghadapi bencana.",
        description: "Wilayah timur Dusun Tompo Gunung, termasuk RT 6 dan area sekitar Pondok Pesantren Nurul Azhar, berada di zona risiko longsor tinggi, sementara RT 1 hingga RT 5 tergolong aman. Titik paling rawan di Dusun Tompo Gunung adalah RT 6 karena bersinggungan langsung dengan zona bahaya. Saat ini, jalur evakuasi di Dusun Tompo Gunung baru tersedia di RT 6, sehingga infrastruktur evakuasi dan sosialisasi kebencanaan perlu segera diperluas ke area RT 1 hingga RT 5.",
        file: "/download/PetaRisiko/PetaRisiko_TompoGunung_compressed.pdf"
      }
    ]
  }
];

export function getDusunData(slug: string) {
  const data = dusunDataList.find(d => d.slug === slug);
  if (data) {
    return {
      ...data,
      maps: [...data.maps].sort((a, b) => a.id.localeCompare(b.id))
    };
  }
  return data;
}
