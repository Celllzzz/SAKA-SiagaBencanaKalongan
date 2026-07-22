import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";

export function HeroSection() {
  const featureLinks = [
    { label: "PEMETAAN DESA KALONGAN", href: "#" },
    { label: "BUKU SAKU MANUAL PROSEDUR", href: "#" },
    { label: "TAS SIAGA BENCANA", href: "#" },
    { label: "GALERI DOKUMENTASI", href: "#" },
  ];

  return (
    <div className="relative w-full h-[780px] overflow-hidden bg-[#3B2215]">
      {/* Background Image */}
      <Image
        src="/assets/home/foto_hero.webp"
        alt="Foto Hero Siaga Bencana Kalongan"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(114.38% 160.84% at 50% 50%, rgba(0, 0, 0, 0) 40%, #000000 67.79%)' }}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-[35px] text-white h-full pointer-events-none">

        {/* Middle Feature Links (Hidden on Mobile) */}
        <div className="hidden md:flex w-full max-w-[1440px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-[50px] justify-between items-center pointer-events-auto">
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
        <div className="flex flex-col md:flex-row justify-between items-end w-full max-w-[1440px] absolute bottom-[35px] left-1/2 transform -translate-x-1/2 px-[50px] pointer-events-auto">
          <h1 className="text-xl md:text-[30px] font-medium leading-snug md:leading-[1.35] max-w-[624px] tracking-[-0.045em] text-[#FCFCFC]">
            Pusat informasi terpadu pemetaan rawan longsor, panduan prosedur mitigasi, dan persiapan tas siaga darurat untuk warga desa.
          </h1>
          <div className="mt-8 md:mt-0 text-[14px] md:text-[16px] font-semibold tracking-[-0.09em] uppercase text-[#F1F5F9] shrink-0 animate-bounce-slow">
            (SCROLL DOWN)
          </div>
        </div>
      </div>
    </div>
  );
}
