"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const aboutData = [
  {
    id: "tujuan",
    number: "01",
    title: "Tujuan",
    content: "SAKA hadir untuk membantu warga Desa Kalongan mengenali risiko longsor di sekitar tempat tinggal mereka, mengetahui langkah yang harus diambil sebelum dan saat bencana terjadi, serta menyiapkan diri dengan lebih baik lewat panduan yang mudah dipahami",
  },
  {
    id: "latar-belakang",
    number: "02",
    title: "Latar Belakang",
    content: "4 dusun di Desa Kalongan berada di kawasan rawan longsor. Selama ini informasi soal titik rawan, jalur evakuasi, dan langkah mitigasi tersebar dan sulit diakses warga. SAKA dibuat untuk mengumpulkan semua itu dalam satu tempat yang mudah dijangkau, kapan pun dibutuhkan.",
  },
  {
    id: "visi-misi",
    number: "03",
    title: "Visi & Misi",
    content: "Visi : Mewujudkan Desa Kalongan yang siaga, mandiri, dan tanggap terhadap bencana longsor.\n\nMisi : Menyediakan pemetaan wilayah rawan bencana yang mudah dipahami, membekali warga dengan prosedur mitigasi yang jelas dan aplikatif, serta mendorong kesiapsiagaan mandiri lewat panduan tas siaga bencana.",
  },
  {
    id: "tim-kami",
    number: "04",
    title: "Tim Kami",
    content: "SAKA lahir dari kolaborasi lintas disiplin ilmu — mahasiswa Teknik Geologi, K3, Teknologi Pangan, Teknik Komputer, dan berbagai jurusan lain yang bersatu dalam program KKN-T UNDIP untuk satu misi: membantu Desa Kalongan lebih siap menghadapi bencana longsor.",
    image: "/assets/home/timkami1.webp",
  }
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(aboutData[0].id);

  const activeContent = aboutData.find((data) => data.id === activeTab);

  return (
    <section className="w-full bg-[#3B2215] text-white px-[50px] py-[50px]" data-theme="dark" data-bg="#3B2215">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col mb-10 xl:mb-[144px] w-full">
          <div className="text-[40px] md:text-[80px] xl:text-[106px] font-[Inter] font-medium leading-none tracking-[-0.045em] break-words">
            <h2>APA ITU</h2>
          </div>
          <div className="flex flex-row justify-between items-end w-full mt-2 md:mt-0">
            <h2 className="text-[40px] md:text-[80px] xl:text-[106px] font-[Inter] font-medium leading-none tracking-[-0.045em] ml-12 md:ml-[100px] xl:ml-[211px] break-words">
              SAKA?
            </h2>
            <div className="text-[32px] md:text-[60px] xl:text-[106px] font-[Inter] font-medium leading-none tracking-[-0.045em] text-white shrink-0 ml-4">
              (04)
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-[116px]">
          {/* Tabs Menu */}
          <div className="flex flex-col space-y-[8px] shrink-0 xl:w-auto">
            {aboutData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group flex items-start text-left focus:outline-none transition-all duration-300 gap-[8px]"
              >
                <span className="text-[#757575] text-xs md:text-[13px] leading-[18px] font-normal mt-[11px]">
                  {tab.number}
                </span>
                <span
                  className={`text-[20px] md:text-[28px] xl:text-[36px] leading-[1.1] xl:leading-[40px] tracking-[-0.0075em] transition-colors duration-300 ${activeTab === tab.id
                      ? "text-white font-medium"
                      : "text-[#B3B3B3] font-normal group-hover:text-white"
                    }`}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div key={activeTab} className="flex flex-col items-start flex-1 animate-fade-in-up">
            {activeContent?.image && (
              <div className="w-full relative h-[200px] md:h-[300px] mb-8 overflow-hidden">
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-[16px] md:text-[20px] xl:text-[46px] font-[Inter] font-medium leading-[1.3] xl:leading-[1.14] tracking-[-0.045em] text-[#FCFCFC] mb-8 xl:mb-[50px] whitespace-pre-wrap">
              {activeContent?.content}
            </p>

            <Link
              href="/tentang"
              className="inline-flex items-center justify-center rounded-[20px] border-[0.8px] border-white/20 bg-white px-[24px] py-[8px] text-[14px] font-semibold text-black tracking-[0.01em] hover:bg-gray-200 hover:scale-105 transition-all cursor-pointer uppercase leading-none h-[40px]"
            >
              SELENGKAPNYA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
