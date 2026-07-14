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
    <div className="relative w-full h-screen overflow-hidden bg-zinc-950">
      {/* Background Image */}
      <Image
        src="/assets/foto_hero.webp"
        alt="Foto Hero Siaga Bencana Kalongan"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay dihapus agar menggunakan warna asli foto */}
      {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}

      {/* Navigation Bar */}
      <Navbar />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-6 md:px-[50px] text-white h-full">
        
        {/* Middle Feature Links (Hidden on Mobile) */}
        <div className="hidden md:flex w-full absolute top-1/2 left-0 transform -translate-y-1/2 px-6 md:px-[50px] justify-between items-center">
          {featureLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="cursor-pointer text-[10px] lg:text-xs xl:text-sm font-medium tracking-[0.1em] hover:text-gray-300 transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full absolute bottom-12 left-0 px-6 md:px-[50px]">
          <h1 className="text-xl md:text-[30px] font-normal leading-snug md:leading-[40px] max-w-4xl tracking-tight">
            Pusat informasi terpadu pemetaan rawan<br />
            longsor, panduan prosedur mitigasi, dan<br />
            persiapan tas siaga darurat untuk warga desa.
          </h1>
          <div className="mt-8 md:mt-0 text-sm md:text-base font-medium tracking-widest uppercase opacity-80 shrink-0">
            (Scroll Down)
          </div>
        </div>
      </div>
    </div>
  );
}
