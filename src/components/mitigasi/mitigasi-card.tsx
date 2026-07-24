"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { MitigasiItem } from "@/data/mitigasi-data";

interface MitigasiCardProps {
  data: MitigasiItem;
  isLast: boolean;
}

export function MitigasiCard({ data, isLast }: MitigasiCardProps) {
  const handleDownload = (e: React.MouseEvent, fileUrl: string, title: string) => {
    e.stopPropagation();
    if (!fileUrl || fileUrl === "#") return;

    // 1. Open in new tab
    window.open(fileUrl, "_blank");

    // 2. Trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      
      {/* Separator Line */}
      <div className="w-full h-[2px] bg-[#3B2215]/50 -rotate-[0.1deg]" />

      {/* Content Container */}
      <div className="w-full flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-[50px] xl:gap-[116px] p-[50px] xl:p-0 xl:pl-[50px]">
        
        {/* Text Section (Left) */}
        <div className="flex flex-col items-start gap-[16px] w-full xl:max-w-[690px] xl:py-[50px] xl:pr-[50px]">
          
          <div className="flex flex-row items-start gap-[4px] lg:gap-[8px]">
            <span className="font-[Inter] font-normal text-[13px] leading-[18px] tracking-[-0.006em] text-[#757575] mt-[2px] md:mt-[6px]">
              {data.number}
            </span>
            <h2 className="font-[Inter] font-medium text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.0075em] text-[#3B2215]">
              {data.title}
            </h2>
          </div>

          <div className="flex flex-col justify-between items-start gap-[24px] lg:gap-[32px] pl-[20px] h-full">
            <p className="font-[Inter] font-medium text-[16px] md:text-[24px] leading-[1.35] tracking-[-0.045em] text-[#3B2215]/80 max-w-[620px]">
              {data.description}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-row items-center gap-[16px] flex-wrap mt-auto pt-4">
              <Link 
                href={data.detailSlug}
                className="flex flex-row justify-center items-center px-[24px] py-[8px] bg-[#3B2215] border border-white/20 rounded-[20px] hover:bg-black transition-colors"
              >
                <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] text-white">
                  LIHAT DETAIL
                </span>
              </Link>

              {/* Unduh Berkas Button */}
              {data.pdfUrl ? (
                <button 
                  onClick={(e) => handleDownload(e, data.pdfUrl!, data.title)}
                  className="flex flex-row justify-center items-center px-[24px] py-[8px] border-[2px] border-[#3B2215] rounded-[20px] hover:bg-[#3B2215] hover:text-[#FAE3C7] transition-colors group"
                >
                  <Download className="w-[20px] h-[20px] mr-2 text-[#3B2215] group-hover:text-[#FAE3C7]" />
                  <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] uppercase group-hover:text-[#FAE3C7] text-[#3B2215]">
                    Unduh berkas
                  </span>
                </button>
              ) : (
                <button 
                  disabled
                  className="flex flex-row justify-center items-center px-[24px] py-[8px] border-[2px] border-[#3B2215] rounded-[20px] opacity-50 cursor-not-allowed"
                  aria-label="Unduh berkas belum tersedia"
                >
                  <Download className="w-[20px] h-[20px] mr-2 text-[#3B2215]" />
                  <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] text-[#3B2215] uppercase">
                    Unduh berkas
                  </span>
                </button>
              )}
            </div>
          </div>
          
        </div>

        {/* Image Section (Right) */}
        <div className="w-full max-w-[700px] xl:w-[700px] h-[250px] sm:h-[430px] relative overflow-hidden shrink-0">
          <Image 
            src={data.image}
            alt={data.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 700px"
          />
        </div>

      </div>

      {/* If it's the last item, we add a final separator line at the bottom */}
      {isLast && (
        <div className="w-full h-[2px] bg-[#3B2215]/50 -rotate-[0.1deg]" />
      )}
    </div>
  );
}
