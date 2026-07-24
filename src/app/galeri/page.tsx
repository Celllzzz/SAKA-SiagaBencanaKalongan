"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { galeriData } from "@/data/galeri-data";

export default function GaleriPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  // We duplicate the array 4 times for a perfect seamless loop
  const duplicatedData = [...galeriData, ...galeriData, ...galeriData, ...galeriData];
  
  // Assuming each item is 288px wide + 16px gap = 304px.
  const setWidth = galeriData.length * (288 + 16); 

  // Start at the second set so we can scroll left or right infinitely
  const x = useRef(-setWidth);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only apply custom horizontal scroll on desktop
      if (window.innerWidth < 1280) return;
      
      e.preventDefault(); // Stop default vertical scrolling
      
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      x.current -= delta * 1.5; // multiplier for scroll speed

      // Seamless wrap around between the 2nd and 3rd set
      if (x.current <= -setWidth * 2) {
        x.current += setWidth;
      } else if (x.current > -setWidth) {
        x.current -= setWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${x.current}px)`;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [setWidth]);

  return (
    <main className="min-h-screen bg-[#FAE3C7] flex flex-col xl:h-screen xl:overflow-hidden relative" data-theme="light" data-bg="#FAE3C7">
      {/* NAVBAR */}
      <div className="shrink-0">
        <Navbar initialTheme="light" />
      </div>

      {/* DESKTOP GALLERY (Hidden on mobile) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden xl:flex flex-1 relative items-center pb-[100px] overflow-hidden h-full pt-[90px]"
      >
        
        {/* The scrolling track */}
        <div 
          ref={trackRef}
          className="flex flex-row items-end gap-[16px] px-[50px] absolute left-0"
          style={{ transform: `translateX(-${setWidth}px)`, willChange: 'transform' }}
        >
          {duplicatedData.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={`flex flex-col gap-[12px] w-[288px] shrink-0 ${item.heightType === 'tall' ? 'h-[460px]' : 'h-[225px]'}`}
            >
              <div className="relative w-full flex-1 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="288px"
                  priority={index < 8}
                />
              </div>
              <div className="flex flex-row items-center gap-[8.87px] w-full h-[16px] shrink-0">
                <h3 className="font-[Inter] font-semibold text-[16px] leading-[100%] tracking-[-0.05em] text-[#3B2215] uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-[50px] left-[50px] right-[50px] flex flex-row justify-between items-end pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="font-[Inter] font-medium text-[64px] leading-[100%] tracking-[-0.045em] text-[#3B2215] uppercase m-0 max-w-[800px]"
          >
            GALERI DOKUMENTASI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-[Inter] font-semibold text-[16px] leading-[100%] tracking-[-0.09em] text-[#3B2215] text-right mb-2"
          >
            (SCROLL DOWN TO EXPLORE)
          </motion.p>
        </div>
      </motion.div>

      {/* MOBILE GALLERY (Hidden on desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex xl:hidden flex-col w-full px-[50px] pt-[130px] pb-[30px] gap-[30px]"
      >
        <div className="flex flex-col gap-2 overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="font-[Inter] font-medium text-[36px] leading-[110%] tracking-[-0.045em] text-[#3B2215] uppercase"
          >
            GALERI DOKUMENTASI
          </motion.h1>
        </div>

        <div className="flex flex-col gap-[30px] w-full">
          {galeriData.map((item) => (
            <div key={item.id} className="flex flex-col gap-[12px] w-full">
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-[Inter] font-semibold text-[16px] leading-[100%] tracking-[-0.05em] text-[#3B2215] uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Only show footer on mobile */}
      <div className="block xl:hidden">
        <Footer />
      </div>
    </main>
  );
}
