"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TEAM_MEMBERS = [
  // Teknik Komputer
  { name: "Celino", fullName: "Celino Matande Wardana", role: "Teknik Komputer", image: "celino.webp" },
  { name: "Dhinda", fullName: "Dhinda Cahyani Ramadhani", role: "Teknik Komputer", image: "dhinda.webp" },
  { name: "Prida", fullName: "Ananda Prida Yusuf Septiawan", role: "Teknik Komputer", image: "ananda prida.webp" },

  // Teknik Geologi
  { name: "Muslim", fullName: "Muhammad Maulana Muslim", role: "Teknik Geologi", image: "muslim.webp" },
  { name: "Wawa", fullName: "Nasjwa Putri Indah H", role: "Teknik Geologi", image: "nasjwa.webp" },
  { name: "Handza", fullName: "Hanan Dzaky Miftahur R", role: "Teknik Geologi", image: "handza.webp" },
  { name: "Devida", fullName: "Devida Rahayuning Tiyas", role: "Teknik Geologi", image: "devida.webp" },
  { name: "Lulu", fullName: "Lulu Hasianna Sibarani", role: "Teknik Geologi", image: "lulu.webp" },
  { name: "Yori", fullName: "Yori Hanum Susan", role: "Teknik Geologi", image: "yori.webp" },
  { name: "Adlu", fullName: "Adlu Hayyu Pradifta", role: "Teknik Geologi", image: "adlu.webp" },
  { name: "Reinard", fullName: "Reinard Raharto", role: "Teknik Geologi", image: "reinard.webp" },
  { name: "Fayyad", fullName: "Fayyad Yaqfi A.", role: "Teknik Geologi", image: "fayyad.webp" },
  { name: "Bestu", fullName: "Bagus Estu Prasetya", role: "Teknik Geologi", image: "bagus.webp" },
  { name: "Yogi R.", fullName: "Yogi Reivaldo Tambun", role: "Teknik Geologi", image: "yogi reivaldo.webp" },
  { name: "Risti", fullName: "Risti Fairuz Izdihar", role: "Teknik Geologi", image: "risti.webp" },

  // Teknologi Pangan
  { name: "Tsabila", fullName: "Tsabila Rashauna Anwary", role: "Teknologi Pangan", image: "tsabila.webp" },
  { name: "Kayla", fullName: "Kayla Arlene Nazhira P.", role: "Teknologi Pangan", image: "kayla.webp" },
  { name: "Elza", fullName: "Elza Atika Rahma", role: "Teknologi Pangan", image: "elza.webp" },

  // K3
  { name: "Kenya", fullName: "Kenya Cyninta Prati Christian", role: "K3", image: "kenya.webp" },
  { name: "Caca", fullName: "Salsa Khairun Nissa", role: "K3", image: "salsa.webp" },
  { name: "Jasmine", fullName: "Jasmine Hani Alifya", role: "K3", image: "jasmine.webp" },
  { name: "Hardika", fullName: "Hardika Megantriadya Nugroho", role: "K3", image: "hardika.webp" },
  { name: "Yogi Bali", fullName: "I Made Ananta Yogisvara", role: "K3", image: "yogi bali.webp" },
  { name: "Rafi", fullName: "Rafi Raihan Putra Adrian", role: "K3", image: "rafi raihan.webp" },

  // Teknik Lingkungan
  { name: "Agil", fullName: "Alexander Gilbert W. K.", role: "Teknik Lingkungan", image: "alexander gilbert.webp" },
  { name: "Ishma", fullName: "Ishma Maula Izzah", role: "Teknik Lingkungan", image: "ishma.webp" },

  // Ekonomi
  { name: "Nazmi", fullName: "Muhammad Nazmi Fauzi", role: "Ekonomi", image: "nazmi.webp" },
  { name: "Dinda", fullName: "Dinda Ayu Andhini", role: "Ekonomi", image: "dinda.webp" },
  { name: "Yogi P.", fullName: "Muhammad Yogi Pratama Putra", role: "Ekonomi", image: "yogi pratama.webp" },
  { name: "Roihan", fullName: "Roihan Miftahul Huda", role: "Ekonomi", image: "roihan.webp" },
];

const ROW_HEIGHT = 100; // 90px line-height + 10px gap
const SCROLL_PER_MEMBER = 100; // pixels of page scroll per member transition

/* ─────────────────────────────────────────────
   Desktop: Interactive sticky-scroll name list
   ───────────────────────────────────────────── */
function DesktopTeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalScrollDistance = SCROLL_PER_MEMBER * (TEAM_MEMBERS.length - 1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // The track starts at rect.top. We want it to start sticking when rect.top <= 90 (navbar height).
      const scrolled = 90 - rect.top;
      const maxScroll = totalScrollDistance;

      if (scrolled < 0) {
        setActiveIndex(0);
        return;
      }
      if (scrolled > maxScroll) {
        setActiveIndex(TEAM_MEMBERS.length - 1);
        return;
      }

      const progress = scrolled / maxScroll;
      const newIndex = Math.round(progress * (TEAM_MEMBERS.length - 1));
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#FAE3C7] text-[#3B2215]" data-theme="light" data-bg="#FAE3C7">

      {/* Static Header */}
      <div className="w-full max-w-[1440px] mx-auto px-[50px] py-[50px] flex flex-row items-center justify-between">
        <h2 className="font-[Inter] font-medium text-[90px] leading-none tracking-[-0.045em] capitalize">
          Orang Orang
          <br />
          Di Balik SAKA
        </h2>
        <p className="font-[Inter] font-medium text-[24px] leading-[1.35] tracking-[-0.045em] text-justify max-w-[670px] shrink-0">
          Dari survei lapangan, pemetaan, penyusunan prosedur, hingga
          membangun website ini — semua dikerjakan bersama oleh tim KKN-T
          119 Universitas Diponegoro. membantu Desa Kalongan lebih siap
          menghadapi bencana.
        </p>
      </div>

      {/* Scroll Track */}
      <div
        ref={sectionRef}
        style={{ height: `calc(${totalScrollDistance}px + 100vh - 90px)` }}
        className="relative w-full"
      >
        {/* Sticky Container */}
        <div className="sticky top-[90px] h-[calc(100vh-90px)] w-full overflow-hidden flex flex-col">
          <div className="w-full max-w-[1440px] mx-auto flex flex-row flex-1 overflow-hidden px-[50px] py-[50px] gap-[50px]">

            {/* Name List (scrolling via translateY) */}
            <div className="flex-1 overflow-hidden relative min-w-0">
              <div
                className="absolute flex flex-col gap-[10px] transition-transform duration-300 ease-out"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -${activeIndex * ROW_HEIGHT + ROW_HEIGHT / 2}px)`,
                }}
              >
                {TEAM_MEMBERS.map((member, i) => (
                  <div
                    key={i}
                    className={`flex flex-row items-center gap-[24px] h-[90px] transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-50"
                      }`}
                  >
                    <span className="w-[250px] text-right font-[Inter] font-medium text-[24px] leading-[1.35] tracking-[-0.045em] shrink-0">
                      {member.role}
                    </span>
                    <span className="font-[Inter] font-bold text-[90px] leading-none tracking-[-0.045em] capitalize whitespace-nowrap">
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Card (Original Size 416x520) */}
            <div className="w-[416px] shrink-0 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-[416/520] overflow-hidden bg-[#8b7355]">
                {TEAM_MEMBERS.map((member, i) => (
                  <Image
                    key={i}
                    src={`/assets/about/tim/${member.image}`}
                    alt={member.fullName}
                    fill
                    sizes="416px"
                    className={`object-cover object-top transition-opacity duration-500 ${i === activeIndex ? "opacity-100" : "opacity-0"
                      }`}
                    priority={i === 0}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center w-full mt-[9px]">
                <span className="font-[Inter] font-semibold text-[13px] leading-none tracking-[-0.05em] uppercase">
                  {TEAM_MEMBERS[activeIndex].fullName}
                </span>
                <span className="font-[Inter] font-semibold text-[13px] leading-none tracking-[-0.09em] uppercase">
                  {TEAM_MEMBERS[activeIndex].role}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Exported Component (Desktop + Mobile/Tablet)
   ───────────────────────────────────────────── */
export function TeamSection() {
  return (
    <>
      {/* Desktop: Interactive sticky scroll */}
      <div className="hidden xl:block">
        <DesktopTeamSection />
      </div>

      {/* Mobile / Tablet: Grid cards (original layout) */}
      <section
        className="xl:hidden w-full bg-[#FAE3C7] text-[#3B2215] px-[50px] py-[50px] overflow-hidden"
        data-theme="light"
        data-bg="#FAE3C7"
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[50px]">

          {/* Header */}
          <div className="flex flex-col items-start justify-between w-full gap-[30px]">
            <h2 className="font-[Inter] font-medium text-[40px] md:text-[60px] leading-[1] tracking-[-0.045em] capitalize">
              Orang Orang
              <br />
              Di Balik SAKA
            </h2>
            <p className="font-[Inter] font-medium text-[16px] md:text-[20px] leading-[1.35] tracking-[-0.045em] text-justify">
              Dari survei lapangan, pemetaan, penyusunan prosedur, hingga
              membangun website ini — semua dikerjakan bersama oleh tim KKN-T
              119 Universitas Diponegoro. membantu Desa Kalongan lebih siap
              menghadapi bencana.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[50px] gap-x-[20px] w-full">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="flex flex-col w-full gap-[10px] items-start"
              >
                <div className="relative w-full aspect-[416/520] overflow-hidden bg-[#8b7355]">
                  <Image
                    src={`/assets/about/tim/${member.image}`}
                    alt={member.fullName}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <span className="font-[Inter] font-semibold text-[14px] leading-[1] tracking-[-0.05em] uppercase truncate pr-4">
                    {member.fullName}
                  </span>
                  <span className="font-[Inter] font-semibold text-[12px] leading-[1] tracking-[-0.09em] uppercase shrink-0">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
