"use client";

import { PhoneCall } from "lucide-react";

const EMERGENCY_CONTACTS = [
  { name: "BPBD", number: "(024) 76901679" },
  { name: "Damkar", number: "(024) 6921413" },
  { name: "Polsek", number: "(024) 6921110" },
  { name: "Koramil", number: "(024) 6923750" },
  { name: "Kecamatan", number: "(024) 76911354" },
];

export function ContactHero() {
  return (
    <section className="w-full bg-[#FAE3C7] text-[#3B2215] pt-[120px] pb-[50px] px-[50px] xl:min-h-[100vh] flex flex-col justify-center" data-theme="light" data-bg="#FAE3C7">
      <div className="w-full max-w-[1340px] mx-auto flex flex-col gap-[50px] md:gap-[80px]">

        {/* Header / Hero */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-[30px] xl:gap-[50px] animate-fade-in-up">
          <div className="flex flex-col">
            <h1 className="font-[Inter] font-medium text-[32px] sm:text-[40px] md:text-[70px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize">
              HUBUNGI KAMI
            </h1>
            <h1 className="font-[Inter] font-medium text-[32px] sm:text-[40px] md:text-[70px] xl:text-[90px] leading-none tracking-[-0.045em] capitalize">
              KONTAK DARURAT
            </h1>
          </div>
          <p className="font-[Inter] font-medium text-[18px] md:text-[20px] xl:text-[24px] leading-[1.35] text-justify tracking-[-0.045em] max-w-[373px] shrink-0">
            Simpan nomor kontak darurat Posko Siaga Bencana Kecamatan Ungaran Timur berikut untuk mempercepat penanganan saat terjadi keadaan darurat.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[20px] md:gap-[30px] animate-fade-in-up delay-300">
          {EMERGENCY_CONTACTS.map((contact, idx) => (
            <div 
              key={idx} 
              className="bg-white/50 backdrop-blur-sm border border-[#3B2215]/20 rounded-2xl p-[24px] xl:p-[30px] flex flex-col justify-between aspect-auto h-[160px] sm:h-auto sm:aspect-square hover:bg-white/80 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="font-[Inter] font-bold text-[22px] md:text-[26px] tracking-[-0.045em] leading-none text-[#3B2215]">
                  {contact.name}
                </h3>
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#3B2215]/10 flex items-center justify-center group-hover:bg-[#3B2215] group-hover:text-[#FAE3C7] transition-colors duration-300">
                  <PhoneCall size={24} />
                </div>
              </div>
              <div className="mt-auto">
                <p className="font-[Inter] font-medium text-[14px] uppercase tracking-wider text-[#3B2215]/60 mb-1">Telepon</p>
                <p className="font-[Inter] font-bold text-[20px] md:text-[24px] tracking-tight">{contact.number}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
