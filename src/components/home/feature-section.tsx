"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    num: "(01)",
    title: "PEMETAAN DUSUN RAWAN BENCANA",
    image: "/assets/home/pemetaan_home.webp",
    aspect: "aspect-[3/2] md:aspect-[628/415]",
  },
  {
    num: "(02)",
    title: "BUKU SAKU MANUAL PROSEDUR",
    image: "/assets/home/bukusaku_home.webp",
    aspect: "aspect-square md:aspect-[662/664]",
  },
  {
    num: "(03)",
    title: "TAS SIAGA BENCANA",
    image: "/assets/home/tassiagabencana_home.webp",
    aspect: "aspect-square md:aspect-[662/664]",
  },
  {
    num: "(04)",
    title: "DOKUMENTASI KEGIATAN & SOSIALISASI",
    image: "/assets/home/dokumentasikegiatan_home.webp",
    aspect: "aspect-[3/2] md:aspect-[628/415]",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full bg-white text-black p-[50px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <div className="flex flex-col relative mb-[50px]">
          <h2 className="text-[clamp(24px,7.36vw,106px)] font-medium leading-none tracking-[-0.045em] uppercase whitespace-nowrap">
            Cegah resiko
          </h2>
          <h2 className="text-[clamp(24px,7.36vw,106px)] font-medium leading-none tracking-[-0.045em] uppercase w-full text-right mt-2 md:mt-0 whitespace-nowrap">
            Saling melindungi
          </h2>

          {/* Button BACA LEBIH LENGKAP */}
          <div className="mt-[50px] flex justify-center w-full">
            <Link href="/tentang" passHref>
              <Button
                variant="default"
                className="rounded-full px-8 py-6 text-sm font-semibold bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer border border-white/20 uppercase tracking-[0.01em]"
              >
                baca lebih lengkap
              </Button>
            </Link>
          </div>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-24 items-start">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              {/* Image Container */}
              <div className={`relative w-full overflow-hidden bg-gray-100 ${item.aspect}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Title & Number */}
              <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                <span className="text-[14px] md:text-[16px] font-semibold tracking-[-0.09em] shrink-0 mt-0.5">
                  {item.num}
                </span>
                <h3 className="text-[14px] md:text-[16px] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
