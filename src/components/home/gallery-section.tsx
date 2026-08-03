"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { galeriData } from "@/data/galeri-data";

export function GallerySection() {
  return (
    <section className="w-full bg-[#FFF3E5] text-[#3B2215] py-[50px] px-[20px] md:px-[32px] xl:px-[50px] overflow-hidden" data-theme="light" data-bg="#FFF3E5">
      <div className="max-w-[1440px] mx-auto relative flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col relative w-full mb-[50px]">
          <h2 className="text-[24px] min-[400px]:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[86px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase whitespace-nowrap">
            GALERI FOTO
          </h2>
          <h2 className="text-[24px] min-[400px]:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[86px] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase w-full text-left md:text-right mt-2 md:mt-0 whitespace-nowrap">
            DOKUM KEGIATAN
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[30px] md:gap-[40px] xl:gap-[60px] mb-[50px]">
          {galeriData.slice(0, 4).map((item, index) => {
            const num = `(0${index + 1})`;
            const isTall = item.heightType === 'tall';
            const aspectClass = isTall ? "aspect-[3/4] md:aspect-[662/883]" : "aspect-[3/2] md:aspect-[628/415]";
            
            return (
              <div key={item.id} className="flex flex-col w-full shrink-0">
                <div className={`relative w-full overflow-hidden bg-gray-200 ${aspectClass}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-row justify-between items-start w-full mt-4 gap-4">
                  <span className="text-[16px] font-[Inter] font-semibold tracking-[-0.09em] shrink-0">{num}</span>
                  <h3 className="text-[16px] font-[Inter] font-semibold tracking-[-0.05em] uppercase text-right leading-tight">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <Link href="/galeri" passHref>
          <Button
            variant="default"
            className="rounded-[20px] px-6 py-5 text-[14px] font-[Inter] font-semibold bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer border-[0.8px] border-white/20 uppercase tracking-[0.01em]"
          >
            LIHAT lebih BANYAK
          </Button>
        </Link>
      </div>
    </section>
  );
}
