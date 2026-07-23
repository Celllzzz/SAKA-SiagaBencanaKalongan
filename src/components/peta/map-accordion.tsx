"use client";

import { useState } from "react";
import Link from "next/link";
import { MapDetail } from "@/data/dusun-data";

export function MapAccordion({ mapItems }: { mapItems: MapDetail[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleDownload = (e: React.MouseEvent, fileUrl: string | undefined, title: string) => {
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
    <div className="flex flex-col gap-[50px] mt-[50px]">
      {mapItems.map((mapItem) => {
        const isOpen = openId === mapItem.id;

        return (
          <div key={mapItem.id} className="flex flex-col">
            {/* Header Peta (Judul & Tombol) */}
            <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px] md:gap-[50px] cursor-pointer group py-[10px]"
              onClick={() => toggleOpen(mapItem.id)}
            >
              <h2 className="font-[Inter] font-medium text-[40px] md:text-[60px] lg:text-[90px] leading-none tracking-[-0.045em] capitalize text-[#3B2215] group-hover:text-[#8b7355] transition-colors duration-300 flex items-center gap-4">
                {mapItem.title}{" "}
                <span
                  className={`transition-all duration-300 ${
                    isOpen ? "rotate-90" : "group-hover:translate-x-4"
                  }`}
                >
                  &rarr;
                </span>
              </h2>

              <button
                className="flex justify-center items-center px-[24px] py-[8px] border-[2px] border-[#3B2215] rounded-[20px] transition-colors hover:bg-[#3B2215] hover:text-white"
                onClick={(e) => handleDownload(e, mapItem.file, mapItem.title)}
              >
                <span className="font-[Inter] font-semibold text-[14px] uppercase text-center leading-[166%] tracking-[0.01em]">
                  Download {mapItem.title}
                </span>
              </button>
            </div>

            {/* Konten Accordion (Animasi) */}
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-[50px] pt-[50px]">
                  {/* Definisi */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-[30px] md:gap-[116px]">
                    <div className="flex flex-col items-start gap-[8px] min-w-[150px]">
                      <span className="font-[Inter] font-normal text-[13.3px] leading-[133%] tracking-[-0.006em] text-[#757575]">
                        01
                      </span>
                      <h3 className="font-[Inter] font-medium text-[24px] md:text-[36px] leading-[111%] tracking-[-0.0075em] text-[#3B2215]">
                        Definisi
                      </h3>
                    </div>
                    <p className="font-[Inter] font-medium text-[20px] md:text-[30px] leading-[135%] tracking-[-0.045em] text-[#3B2215] max-w-[954px] w-full">
                      {mapItem.definition}
                    </p>
                  </div>

                  {/* Analisis */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-[30px] md:gap-[116px]">
                    <div className="flex flex-col items-start gap-[8px] min-w-[150px]">
                      <span className="font-[Inter] font-normal text-[13.3px] leading-[133%] tracking-[-0.006em] text-[#757575]">
                        02
                      </span>
                      <h3 className="font-[Inter] font-medium text-[24px] md:text-[36px] leading-[111%] tracking-[-0.0075em] text-[#3B2215]">
                        Analisis
                      </h3>
                    </div>
                    <p className="font-[Inter] font-medium text-[20px] md:text-[30px] leading-[135%] tracking-[-0.045em] text-[#3B2215] max-w-[954px] w-full whitespace-pre-wrap">
                      {mapItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Garis Pemisah (Selalu Tampil) */}
            <div className="w-full h-[1.25px] border-t-[2px] border-[rgba(59,34,21,0.5)] transform -rotate-[0.1deg] mt-[50px]" />
          </div>
        );
      })}
    </div>
  );
}
