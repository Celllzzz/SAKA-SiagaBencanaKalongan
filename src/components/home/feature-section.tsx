"use client";

import Image from "next/image";

const features = [
  {
    num: "(01)",
    title: "PEMETAAN DUSUN RAWAN BENCANA",
    image: "/assets/home/pemetaan_home.webp",
  },
  {
    num: "(02)",
    title: "MITIGASI PANDUAN KEBENCANAAN",
    image: "/assets/home/bukusaku_home.webp",
  },
  {
    num: "(03)",
    title: "PENCEGAHAN PRA & PASCA BENCANA",
    image: "/assets/home/tassiagabencana_home.webp",
  },
  {
    num: "(04)",
    title: "GALERI KEGIATAN & SOSIALISASI",
    image: "/assets/home/dokumentasikegiatan_home.webp",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] p-[50px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col relative w-full mb-[50px]">
          <h2 className="text-[36px] md:text-[60px] xl:text-[86px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase whitespace-normal md:whitespace-nowrap break-words">
            Cegah resiko
          </h2>
          <h2 className="text-[36px] md:text-[60px] xl:text-[86px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase w-full text-left md:text-right mt-2 md:mt-0 whitespace-normal md:whitespace-nowrap break-words">
            Saling melindungi
          </h2>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col w-full gap-[50px]">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[50px]">
            {/* Item 01 (Short) */}
            <div className="flex flex-col w-full lg:w-[628px] shrink-0">
              <div className="relative w-full overflow-hidden bg-gray-200 aspect-[3/2] lg:aspect-[628/415]">
                <Image src={features[0].image} alt={features[0].title} fill className="object-cover object-center" />
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                <span className="text-[16px] font-[Inter] font-semibold tracking-[-0.09em] shrink-0">{features[0].num}</span>
                <h3 className="text-[16px] font-[Inter] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">{features[0].title}</h3>
              </div>
            </div>

            {/* Item 02 (Tall) */}
            <div className="flex flex-col w-full lg:w-[662px] shrink-0">
              <div className="relative w-full overflow-hidden bg-gray-200 aspect-[3/4] lg:aspect-[662/883]">
                <Image src={features[1].image} alt={features[1].title} fill className="object-cover object-center" />
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                <span className="text-[16px] font-[Inter] font-semibold tracking-[-0.09em] shrink-0">{features[1].num}</span>
                <h3 className="text-[16px] font-[Inter] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">{features[1].title}</h3>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[50px]">
            {/* Item 03 (Tall) */}
            <div className="flex flex-col w-full lg:w-[662px] shrink-0">
              <div className="relative w-full overflow-hidden bg-gray-200 aspect-[3/4] lg:aspect-[662/883]">
                <Image src={features[2].image} alt={features[2].title} fill className="object-cover object-center" />
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                <span className="text-[16px] font-[Inter] font-semibold tracking-[-0.09em] shrink-0">{features[2].num}</span>
                <h3 className="text-[16px] font-[Inter] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">{features[2].title}</h3>
              </div>
            </div>

            {/* Item 04 (Short) */}
            <div className="flex flex-col w-full lg:w-[628px] shrink-0">
              <div className="relative w-full overflow-hidden bg-gray-200 aspect-[3/2] lg:aspect-[628/415]">
                <Image src={features[3].image} alt={features[3].title} fill className="object-cover object-center" />
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                <span className="text-[16px] font-[Inter] font-semibold tracking-[-0.09em] shrink-0">{features[3].num}</span>
                <h3 className="text-[16px] font-[Inter] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">{features[3].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
