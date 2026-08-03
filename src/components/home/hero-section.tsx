import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

export function HeroSection() {
  const featureLinks = [
    { label: "PETA RESIKO DUSUN RAWAN", href: "/peta" },
    { label: "PANDUAN KEBENCANAAN", href: "/mitigasi" },
    { label: "TAS SIAGA BENCANA", href: "/mitigasi/tas-siaga" },
    { label: "PRA & PASCA BENCANA", href: "/mitigasi/manual-prosedur" },
  ];

  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-[#3B2215]" data-theme="dark" data-bg="#3B2215">
      {/* Background Image */}
      <Image
        src="/assets/home/foto_hero_fix.webp"
        alt="Foto Hero Siaga Bencana Kalongan"
        fill
        priority
        className="object-cover object-center animate-zoom-out-slow"
      />



      {/* Navigation Bar */}
      <Navbar />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-[60px] md:pb-[80px] text-white pointer-events-none">

        {/* Middle Feature Links (Hidden on Mobile and Tablet) */}
        <div className="hidden xl:flex w-full max-w-[1440px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-[20px] md:px-[32px] xl:px-[50px] justify-between items-center pointer-events-auto animate-fade-in-up delay-300">
          {featureLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="cursor-pointer text-[12px] md:text-[16px] font-semibold tracking-[-0.09em] text-[#F1F5F9] hover:text-white transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] xl:px-[50px] pointer-events-auto animate-fade-in-up delay-500">
          <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-medium leading-snug md:leading-[1.35] max-w-[624px] tracking-[-0.045em] text-[#FCFCFC]">
            Pusat informasi terpadu pemetaan rawan longsor, panduan prosedur mitigasi, dan persiapan tas siaga darurat untuk warga desa.
          </h1>
          <div className="mt-[20px] lg:mt-0 text-[14px] md:text-[16px] font-semibold tracking-[-0.09em] uppercase text-[#F1F5F9] shrink-0 animate-bounce-slow">
            (SCROLL DOWN)
          </div>
        </div>
      </div>
    </div>
  );
}
