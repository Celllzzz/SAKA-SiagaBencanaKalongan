"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowLeft, BookOpen } from "lucide-react";

interface MitigasiDetailHeaderProps {
  titleTop: string;
  titleBottom: string;
  heroImage: string;
  pdfUrl?: string;
  flipbookUrl?: string;
}

export function MitigasiDetailHeader({ titleTop, titleBottom, heroImage, pdfUrl, flipbookUrl }: MitigasiDetailHeaderProps) {
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
    <section className="w-full h-auto min-h-[100svh] bg-[#FAE3C7] text-[#3B2215] pt-[100px] md:pt-[120px] xl:pt-[130px] pb-[50px] px-[20px] md:px-[32px] xl:px-[50px] flex flex-col items-center" data-theme="light" data-bg="#FAE3C7">
      
      {/* Title & Button Container */}
      <div className="w-full max-w-[1340px] flex flex-col items-start gap-[20px] mb-[50px] animate-fade-in-up">
        
        {/* Back Button */}
        <Link 
          href="/mitigasi" 
          className="flex flex-row items-center gap-[8px] text-[#3B2215]/70 hover:text-[#3B2215] transition-colors group"
        >
          <ArrowLeft className="w-[20px] h-[20px] transition-transform group-hover:-translate-x-1" />
          <span className="font-[Inter] font-semibold text-[14px] leading-none tracking-[0.01em] uppercase">
            Kembali
          </span>
        </Link>

        <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[30px] xl:gap-[50px]">
          
          {/* Title */}
          <div className="flex flex-col flex-1">
            <h1 className="font-[Inter] font-medium text-[40px] md:text-[60px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize text-[#3B2215]">
              {titleTop}
            </h1>
            <h1 className="font-[Inter] font-medium text-[40px] md:text-[60px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize text-[#3B2215]">
              {titleBottom}
            </h1>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-row flex-wrap items-center gap-[12px] sm:gap-[16px] shrink-0 mt-[20px] xl:mt-0">
            {/* Download Button */}
            {pdfUrl ? (
              <button 
                onClick={(e) => handleDownload(e, pdfUrl, `${titleTop} ${titleBottom}`)}
                className="flex flex-row justify-center items-center px-[20px] py-[10px] sm:px-[24px] sm:py-[8px] border-[2px] border-[#3B2215] rounded-[20px] shrink-0 hover:bg-[#3B2215] hover:text-[#FAE3C7] transition-colors group"
              >
                <Download className="w-[20px] h-[20px] mr-2 text-[#3B2215] group-hover:text-[#FAE3C7]" />
                <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] uppercase group-hover:text-[#FAE3C7] text-[#3B2215]">
                  Unduh berkas
                </span>
              </button>
            ) : (
              <button 
                disabled
                className="flex flex-row justify-center items-center px-[20px] py-[10px] sm:px-[24px] sm:py-[8px] border-[2px] border-[#3B2215] rounded-[20px] opacity-50 cursor-not-allowed shrink-0"
                aria-label="Unduh berkas belum tersedia"
              >
                <Download className="w-[20px] h-[20px] mr-2 text-[#3B2215]" />
                <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] text-[#3B2215] uppercase">
                  Unduh berkas
                </span>
              </button>
            )}

            {/* Flipbook Button */}
            {flipbookUrl && (
              <Link 
                href={flipbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center px-[20px] py-[10px] sm:px-[24px] sm:py-[8px] bg-[#FAE3C7] border-[2px] border-[#3B2215] rounded-[20px] shrink-0 hover:bg-[#3B2215] hover:text-[#FAE3C7] transition-colors group text-center"
              >
                <BookOpen className="w-[20px] h-[20px] mr-2 text-[#3B2215] group-hover:text-[#FAE3C7]" />
                <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] uppercase group-hover:text-[#FAE3C7] text-[#3B2215]">
                  BACA VERSI FLIPBOOK
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-[1340px] flex-1 min-h-[400px] md:min-h-[500px] xl:min-h-[600px] mt-[20px] relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <Image 
          src={heroImage}
          alt={`${titleTop} ${titleBottom}`}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1340px) 100vw, 1340px"
        />
      </div>

    </section>
  );
}
