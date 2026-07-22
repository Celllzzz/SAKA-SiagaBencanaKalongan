import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang kami", href: "/tentang" },
  { label: "peta", href: "/#peta" },
  { label: "mitigasi", href: "/#mitigasi" },
  { label: "pra & pasca", href: "/#pra-pasca" },
  { label: "galeri", href: "/galeri" },
  { label: "hubungi kami", href: "/kontak" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#FAE3C7] text-[#3B2215] overflow-hidden pt-[40px] pb-[20px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[50px] flex flex-col items-center">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[40px] lg:gap-10 mb-[40px]">
          {/* Column 1: Image & Title */}
          <div className="flex flex-col items-start gap-4 shrink-0 mx-auto lg:mx-0 w-full lg:w-[220px]">
            <div className="relative w-full lg:w-[220px] h-[200px] lg:h-[280px] rounded-none overflow-hidden bg-gray-200">
              <Image
                src="/assets/home/foto_footer.webp"
                alt="Foto Footer"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-2">
              <h2 className="font-[Inter] font-extrabold text-[48px] lg:text-[64px] leading-none tracking-[-0.05em] uppercase text-[#3B2215]">
                SAKA
              </h2>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-start gap-3 w-full lg:w-auto">
            <h3 className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase text-[#3B2215]/60 mb-2">
              (Navigasi)
            </h3>
            <div className="flex flex-col items-start gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-[Inter] font-semibold text-[18px] lg:text-[20px] leading-none tracking-[-0.02em] capitalize hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col justify-between items-start w-full lg:max-w-[380px] gap-[30px]">
            <div className="flex flex-col items-start gap-3">
              <h3 className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase text-[#3B2215]/60 mb-1">
                (Info lainnya)
              </h3>
              <p className="font-[Inter] font-medium text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.01em]">
                SAKA (Siaga Bencana Kalongan) merupakan salah satu luaran yang
                diinisiasi oleh Tim Kuliah Kerja Nyata (KKN) Tematik Universitas
                Diponegoro di Desa Kalongan, Kecamatan Ungaran Timur, Kabupaten
                Semarang.
              </p>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col justify-between items-start w-full lg:w-auto gap-[30px]">
            <div className="flex flex-col items-start gap-3 mt-4">
              <h3 className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase text-[#3B2215]/60 mb-1">
                (dibuat oleh)
              </h3>
              <div className="flex flex-row items-center gap-[20px]">
                <div className="relative w-[60px] h-[70px]">
                  <Image
                    src="/logo/logo_undip.png"
                    alt="Logo UNDIP"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[140px] h-[60px]">
                  <Image
                    src="/logo/logo_kkn.png"
                    alt="Logo KKN Tematik"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[20px] pt-[20px] border-t border-[#3B2215]/20">
          <div className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase">
            &copy; 2026 kkn-t 119 undip
          </div>
          <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
            <Link
              href="mailto:info@example.com"
              className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase underline hover:opacity-70 transition-opacity"
            >
              EMAIL
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase underline hover:opacity-70 transition-opacity"
            >
              INSTAGRAM
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Inter] font-semibold text-[14px] leading-none tracking-[-0.05em] uppercase underline hover:opacity-70 transition-opacity"
            >
              TIKTOK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
