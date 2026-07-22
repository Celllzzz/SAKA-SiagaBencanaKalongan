"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Bagaimana cara melihat peta rawan bencana dusun saya?",
    answer:
      "Anda dapat memilih menu PETA pada navigasi di atas, lalu memilih dusun Anda untuk melihat peta interaktif beserta titik rawan dan jalur evakuasinya.",
  },
  {
    question: "Bisakah saya menyimpan peta untuk dilihat tanpa internet?",
    answer:
      "Ya, Anda dapat mengunduh gambar peta atau dokumen panduan dalam format PDF yang tersedia di setiap halaman dusun untuk diakses secara offline.",
  },
  {
    question: "Apakah informasi di SAKA diperbarui secara berkala?",
    answer:
      "Informasi dan peta di SAKA akan diperbarui sesuai dengan perkembangan kondisi riil di lapangan dan arahan dari BPBD serta relawan desa.",
  },
  {
    question:
      "Saya melihat kondisi mencurigakan (retakan tanah, longsor kecil, dll), harus lapor ke mana?",
    answer:
      "Anda dapat menggunakan fitur form pelaporan non-darurat di halaman Pengaduan, atau segera menghubungi nomor kontak darurat perangkat desa yang tertera di direktori.",
  },
  {
    question:
      "Apakah SAKA bisa diakses semua orang, atau khusus warga Kalongan?",
    answer:
      "Platform SAKA dapat diakses oleh siapa saja secara publik sebagai sarana edukasi mitigasi, meskipun fokus informasinya spesifik untuk Desa Kalongan.",
  },
  {
    question: "Apakah ada biaya untuk mengakses SAKA?",
    answer:
      "Tidak ada. Seluruh informasi, panduan, dan fitur di platform SAKA disediakan secara gratis untuk keselamatan masyarakat.",
  },
  {
    question: "Siapa yang membuat SAKA?",
    answer:
      "SAKA dikembangkan oleh tim KKN Tematik UNDIP lintas disiplin ilmu bekerja sama dengan perangkat Desa Kalongan dan warga setempat.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAE3C7] text-black p-[50px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col relative w-full mb-[50px]">
          <h2 className="text-[clamp(32px,6vw,106px)] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase whitespace-normal lg:whitespace-nowrap">
            FREQUENTLY ASKED
          </h2>
          <h2 className="text-[clamp(32px,6vw,106px)] font-[Inter] font-medium leading-none tracking-[-0.045em] uppercase w-full text-left md:text-right mt-2 md:mt-0 whitespace-normal lg:whitespace-nowrap">
            QUESTIONS
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col w-full max-w-[946px] gap-[15px]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col w-full border-[1.25px] border-black bg-transparent overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex flex-row justify-between items-center w-full px-[20px] md:px-[25px] md:pl-[37px] py-[19px] text-left hover:bg-black/5 transition-colors"
                >
                  <span className="font-[Inter] font-medium text-[16px] md:text-[24.9px] leading-[1.2] tracking-[0.01em] uppercase text-[#343434] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[20px] md:px-[25px] md:pl-[37px] pb-[19px] pt-2 text-[14px] md:text-[16px] font-[Inter] leading-relaxed text-black/80">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
