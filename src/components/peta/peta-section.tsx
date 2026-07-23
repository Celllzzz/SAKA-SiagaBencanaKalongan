"use client";

import Image from "next/image";
import Link from "next/link";

const MAPS = [
  { id: "01", name: "DUSUN DAMPU", image: "dampu.webp", slug: "dampu" },
  { id: "02", name: "DUSUN BANDUNGAN", image: "bandungan.webp", slug: "bandungan" },
  { id: "03", name: "DUSUN GLEPUNG", image: "glepung.webp", slug: "glepung" },
  { id: "04", name: "DUSUN TOMPO GUNUNG", image: "tompo gunung.webp", slug: "tompo-gunung" },
];

export function PetaSection() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] pt-[180px] pb-[50px] px-[20px] md:px-[50px] min-h-screen flex flex-col" data-theme="light" data-bg="#FAE3C7">
      <div className="w-full max-w-[1340px] mx-auto flex flex-col gap-[50px]">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-[30px] xl:gap-[50px] animate-fade-in-up">
          <div className="flex flex-col">
            <h1 className="font-[Inter] font-medium text-[50px] md:text-[70px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize">
              PETA KEBENCANAAN
            </h1>
            <h1 className="font-[Inter] font-medium text-[50px] md:text-[70px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize">
              DUSUN RAWAN <span className="inline-block ml-2 md:ml-4">→</span>
            </h1>
          </div>
          <p className="font-[Inter] font-medium text-[18px] md:text-[20px] xl:text-[24px] leading-[1.35] text-justify tracking-[-0.045em] max-w-[373px] shrink-0">
            Kenali kondisi wilayahmu lewat peta tematik, dari kondisi tanah sampai jalur evakuasi.
          </p>
        </div>

        {/* Maps Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] w-full animate-fade-in-up delay-300">
          {MAPS.map((map) => (
            <Link href={`/peta/${map.slug}`} key={map.id} className="group flex flex-col gap-[16px] w-full cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              {/* Image Container with 645/415 aspect ratio */}
              <div className="relative w-full aspect-[645/415] overflow-hidden bg-black/10">
                <Image
                  src={`/assets/peta/${map.image}`}
                  alt={`Peta ${map.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 645px"
                  priority
                />
              </div>
              {/* Caption */}
              <div className="flex flex-row justify-between items-center w-full">
                <span className="font-[Inter] font-semibold text-[18px] xl:text-[24px] leading-none tracking-[-0.09em]">
                  ({map.id})
                </span>
                <span className="font-[Inter] font-semibold text-[18px] xl:text-[24px] leading-none tracking-[-0.05em] uppercase">
                  {map.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
