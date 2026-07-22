import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] md:h-[780px] bg-[#3B2215] flex flex-col justify-center items-center overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Center Image */}
      <div className="relative w-[180px] md:w-[262px] h-[270px] md:h-[393px] z-0 overflow-hidden">
        <Image
          src="/assets/about/foto_about.webp"
          alt="Tentang SAKA"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Title Overlay */}
      <div className="absolute z-10 w-full px-[50px] flex justify-center items-center pointer-events-none">
        <h1 className="font-[Inter] font-semibold text-[20px] sm:text-[24px] md:text-[36px] lg:text-[49px] leading-[1.3] md:leading-[1.1] text-center uppercase text-[#FFFCE8] drop-shadow-md whitespace-normal lg:whitespace-nowrap">
          Recognize the risk and protect one another.
        </h1>
      </div>

      {/* Subtitle / Quote */}
      <div className="absolute z-10 bottom-[50px] w-full px-[50px] flex justify-center items-center pointer-events-none">
        <p className="font-sans font-normal text-[12px] md:text-[16px] leading-[1.4] md:leading-[1.2] text-center text-[#FFFCE8] drop-shadow-sm max-w-[495px]">
          "We live on the same land, stand on the same slopes, and face the same risks; therefore, resilience can only grow when awareness, preparedness, and care are built together."
        </p>
      </div>
    </section>
  );
}
