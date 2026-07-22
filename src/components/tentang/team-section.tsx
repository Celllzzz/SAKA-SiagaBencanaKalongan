import Image from "next/image";

const TEAM_MEMBERS = [
  // Baris 1
  { name: "Celino Matande Wardana", role: "Teknik Komputer", image: "celino.webp" },
  { name: "Dhinda Cahyani Ramadhani", role: "Teknik Komputer", image: "dhinda.webp" },
  { name: "Ananda Prida Yusuf Septiawan", role: "Teknik Komputer", image: "ananda prida.webp" },
  
  // Baris 2
  { name: "Muhammad Maulana Muslim", role: "Teknik Geologi", image: "muslim.webp" },
  { name: "Nasjwa Putri Indah H", role: "Teknik Geologi", image: "nasjwa.webp" },
  { name: "Hanan Dzaky Miftahur R", role: "Teknik Geologi", image: "handza.webp" },
  
  // Baris 3
  { name: "Devida Rahayuning Tiyas", role: "Teknik Geologi", image: "devida.webp" },
  { name: "Lulu Hasianna Sibarani", role: "Teknik Geologi", image: "lulu.webp" },
  { name: "Yori Hanum Susan", role: "Teknik Geologi", image: "yori.webp" },
  
  // Baris 4
  { name: "Adlu Hayyu Pradifta", role: "Teknik Geologi", image: "adlu.webp" },
  { name: "Reinard Raharto", role: "Teknik Geologi", image: "reinard.webp" },
  { name: "Fayyad Yaqfi A.", role: "Teknik Geologi", image: "fayyad.webp" },
  
  // Baris 5
  { name: "Bagus Estu Prasetya", role: "Teknik Geologi", image: "bagus.webp" },
  { name: "Yogi Reivaldo Tambun", role: "Teknik Geologi", image: "yogi reivaldo.webp" },
  { name: "Risti Fairuz Izdihar", role: "Teknik Geologi", image: "risti.webp" },
  
  // Baris 6
  { name: "Tsabila Rashauna Anwary", role: "Teknologi Pangan", image: "tsabila.webp" },
  { name: "Kayla Arlene Nazhira P.", role: "Teknologi Pangan", image: "kayla.webp" },
  { name: "Elza Atika Rahma", role: "Teknologi Pangan", image: "elza.webp" },
  
  // Baris 7
  { name: "Kenya Cyninta Prati Christian", role: "K3", image: "kenya.webp" },
  { name: "Salsa Khairun Nissa", role: "K3", image: "salsa.webp" },
  { name: "Jasmine Hani Alifya", role: "K3", image: "jasmine.webp" },
  
  // Baris 8
  { name: "Hardika Megantriadya Nugroho", role: "K3", image: "hardika.webp" },
  { name: "I Made Ananta Yogisvara", role: "K3", image: "yogi bali.webp" },
  { name: "Rafi Raihan Putra Adrian", role: "K3", image: "rafi raihan.webp" },
  
  // Baris 9
  { name: "Alexander Gilbert W. K.", role: "Teknik Lingkungan", image: "alexander gilbert.webp" },
  { name: "Ishma Maula Izzah", role: "Teknik Lingkungan", image: "ishma.webp" },
  { name: "Roihan Miftahul Huda", role: "Ekonomi", image: "roihan.webp" },
  
  // Baris 10
  { name: "Muhammad Nazmi Fauzi", role: "Ekonomi", image: "nazmi.webp" },
  { name: "Dinda Ayu Andhini", role: "Ekonomi", image: "dinda.webp" },
  { name: "Muhammad Yogi Pratama Putra", role: "Ekonomi", image: "yogi pratama.webp" },
];

export function TeamSection() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] px-[20px] md:px-[50px] py-[50px] overflow-hidden" data-theme="light" data-bg="#FAE3C7">
      <div className="w-full flex flex-col gap-[50px] lg:gap-[100px]">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-[30px] lg:gap-0">
          <h2 className="font-[Inter] font-medium text-[40px] md:text-[60px] lg:text-[90px] leading-[1] tracking-[-0.045em] capitalize lg:w-1/2">
            Orang Orang <br />
            Di Balik SAKA
          </h2>
          <p className="font-[Inter] font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-[1.35] tracking-[-0.045em] text-justify lg:w-1/2">
            Dari survei lapangan, pemetaan, penyusunan prosedur, hingga membangun website ini — semua dikerjakan bersama oleh tim KKN-T 119 Universitas Diponegoro. membantu Desa Kalongan lebih siap menghadapi bencana.
          </p>
        </div>

        {/* Grid Anggota Tim */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[20px] lg:gap-x-[50px] w-full">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="flex flex-col w-full gap-[10px] items-start">
              <div className="relative w-full aspect-[416/520] overflow-hidden bg-[#8b7355]">
                <Image
                  src={`/assets/about/tim/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-2">
                <span className="font-[Inter] font-semibold text-[14px] lg:text-[16px] leading-[1] tracking-[-0.05em] uppercase truncate pr-4">
                  {member.name}
                </span>
                <span className="font-[Inter] font-semibold text-[12px] lg:text-[16px] leading-[1] tracking-[-0.09em] uppercase shrink-0">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
