import Image from "next/image";
import { Download } from "lucide-react";

interface MitigasiDetailHeaderProps {
  titleTop: string;
  titleBottom: string;
  heroImage: string;
}

export function MitigasiDetailHeader({ titleTop, titleBottom, heroImage }: MitigasiDetailHeaderProps) {
  return (
    <section className="w-full h-[100svh] min-h-[700px] bg-[#FAE3C7] text-[#3B2215] pt-[130px] pb-[50px] px-[50px] flex flex-col items-center" data-theme="light" data-bg="#FAE3C7">
      
      {/* Title & Button Container */}
      <div className="w-full max-w-[1340px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[30px] md:gap-[50px] mb-[50px] animate-fade-in-up">
        
        {/* Title */}
        <div className="flex flex-col shrink-0">
          <h1 className="font-[Inter] font-medium text-[40px] md:text-[60px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize text-[#3B2215]">
            {titleTop}
          </h1>
          <h1 className="font-[Inter] font-medium text-[40px] md:text-[60px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize text-[#3B2215]">
            {titleBottom}
          </h1>
        </div>

        {/* Download Button */}
        <button 
          disabled
          className="flex flex-row justify-center items-center px-[24px] py-[8px] border-[2px] border-[#3B2215] rounded-[20px] opacity-50 cursor-not-allowed shrink-0"
          aria-label="Unduh berkas belum tersedia"
        >
          <Download className="w-[20px] h-[20px] mr-2 text-[#3B2215]" />
          <span className="font-[Inter] font-semibold text-[14px] leading-[24px] tracking-[0.01em] text-[#3B2215] uppercase">
            Unduh berkas
          </span>
        </button>

      </div>

      {/* Hero Image */}
      <div className="w-full max-w-[1340px] flex-1 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
