import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

export function DetailHeader({ title }: { title: string }) {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[452px] flex flex-col justify-center items-center overflow-hidden" data-theme="dark" data-bg="transparent">
      {/* Navigation Bar */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/peta/head_peta.webp"
          alt={`Peta Kebencanaan ${title}`}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Title Overlay */}
      <div className="absolute z-10 w-full px-[20px] flex justify-center items-center pointer-events-none mt-[60px]">
        <h1 className="font-[Inter] font-extrabold text-[50px] md:text-[80px] xl:text-[130px] leading-none tracking-[-0.09em] uppercase text-white drop-shadow-lg">
          {title}
        </h1>
      </div>
      
    </section>
  );
}
