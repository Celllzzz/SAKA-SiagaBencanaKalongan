"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-[#FAE3C7] text-[#3B2215] flex flex-col pt-[30px] lg:pt-[50px] pb-[30px] lg:pb-[50px] px-[50px]" data-theme="light" data-bg="#FAE3C7">
      
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-[50px] xl:gap-0 mb-[40px] xl:mb-[60px]">
        
        {/* Left Column: Image and SAKA */}
        <div className="flex flex-col items-start w-full xl:w-fit shrink-0 relative">
          <div className="relative w-full md:w-[240px] xl:w-[339px] h-[250px] md:h-[300px] xl:h-[380px] bg-[#8b7355] overflow-hidden z-10">
            <Image
              src="/assets/home/foto_footer.webp"
              alt="Footer Image"
              fill
              className="object-cover"
            />
          </div>
          {/* SAKA Text */}
          <div className="relative mt-[15px] xl:mt-[20px] z-20">
            <h1 className="font-[Inter] font-extrabold text-[60px] md:text-[90px] xl:text-[130px] leading-none tracking-[-0.09em] uppercase">
              SAKA
            </h1>
          </div>
        </div>

        {/* Middle Column: Navigasi */}
        <div className="flex flex-col items-start w-full xl:w-[265px] shrink-0 gap-[15px]">
          <span className="font-[Inter] font-semibold text-[14px] md:text-[16px] leading-none tracking-[-0.09em] uppercase text-[#3B2215]/80">
            (Navigasi)
          </span>
          <div className="flex flex-col gap-[10px] xl:gap-[15px]">
            {["Beranda", "Tentang kami", "Peta", "Mitigasi", "Galeri", "Hubungi kami"].map((item, idx) => {
              // Map to hrefs
              let href = "/";
              if (item.toLowerCase() === "beranda") href = "/";
              else if (item.toLowerCase() === "tentang kami") href = "/tentang";
              else if (item.toLowerCase() === "peta") href = "/peta";
              else if (item.toLowerCase() === "mitigasi") href = "/#mitigasi";
              else if (item.toLowerCase() === "galeri") href = "/galeri";
              else if (item.toLowerCase() === "hubungi kami") href = "/hubungi-kami";

              return (
                <Link
                  key={idx}
                  href={href}
                  onClick={(e) => {
                    if (pathname === href || (pathname.startsWith('/peta') && href === '/peta')) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="font-[Inter] font-semibold text-[24px] xl:text-[46px] leading-none tracking-[-0.09em] capitalize hover:opacity-70 transition-opacity"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column: Info & Logos */}
        <div className="flex flex-col justify-between items-start w-full xl:w-[444px] shrink-0 gap-[30px] xl:gap-[40px]">
          <div className="flex flex-col gap-[15px] xl:gap-[15px] w-full">
            <span className="font-[Inter] font-semibold text-[14px] md:text-[16px] leading-none tracking-[-0.09em] uppercase text-[#3B2215]/80">
              (Info lainnya)
            </span>
            <p className="font-[Inter] font-medium text-[16px] xl:text-[24px] leading-[1.35] tracking-[-0.045em]">
              SAKA (Siaga Bencana Kalongan) merupakan salah satu luaran yang diinisiasi oleh Tim Kuliah Kerja Nyata (KKN) Tematik Universitas Diponegoro di Desa Kalongan, Kecamatan Ungaran Timur, Kabupaten Semarang.
            </p>
          </div>

          <div className="flex flex-col gap-[15px] xl:gap-[15px] w-full">
            <span className="font-[Inter] font-semibold text-[14px] md:text-[16px] leading-none tracking-[-0.09em] uppercase text-[#3B2215]/80">
              (dibuat oleh)
            </span>
            <div className="flex flex-row items-center gap-[20px] xl:gap-[35px]">
              <div className="relative w-[60px] md:w-[80px] xl:w-[115px] h-[70px] md:h-[95px] xl:h-[138px]">
                <Image
                  src="/logo/logo_undip.png" // Asumsi ada logo undip
                  alt="Logo Undip"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[140px] md:w-[170px] xl:w-[294px] h-[55px] md:h-[75px] xl:h-[125px]">
                <Image
                  src="/logo/logo_kkn.png"
                  alt="Logo KKN"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section: Copyright & Socials */}
      <div className="flex flex-row justify-between items-center w-full mt-[30px] xl:mt-[50px]">
        <span className="font-[Inter] font-semibold text-[10px] md:text-[14px] xl:text-[32px] leading-none tracking-[-0.09em] uppercase text-center xl:text-left shrink-0">
          © 2026 kkn-t 119 undip
        </span>
        {[
          { label: "Email", href: "#" },
          { label: "Instagram", href: "https://www.instagram.com/kknt119.desakalongan?igsh=MTViMG9vZ3RrOWFlbQ==" },
          { label: "Tiktok", href: "https://www.tiktok.com/@kkn.desakalongan?_r=1&_t=ZS-98HviK0bzse" }
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            target={item.href !== "#" ? "_blank" : undefined}
            rel={item.href !== "#" ? "noopener noreferrer" : undefined}
            className="font-[Inter] font-semibold text-[10px] md:text-[14px] xl:text-[32px] leading-none tracking-[-0.09em] uppercase underline hover:opacity-70 transition-opacity shrink-0"
          >
            {item.label}
          </Link>
        ))}
      </div>
      
    </footer>
  );
}
