"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { galeriData } from "@/data/galeri-data";

export default function GaleriPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

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
          className="flex flex-row items-end gap-[16px] px-[20px] md:px-[32px] xl:px-[50px] absolute left-0"
          style={{ transform: `translateX(-${setWidth}px)`, willChange: 'transform' }}
        >
          {duplicatedData.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={`flex flex-col gap-[12px] w-[288px] shrink-0 ${item.heightType === 'tall' ? 'h-[460px]' : 'h-[225px]'}`}
            >
              <div 
                className="relative w-full flex-1 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({ src: item.image, title: item.title })}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
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
        className="flex xl:hidden flex-col w-full px-[20px] md:px-[32px] xl:px-[50px] pt-[100px] md:pt-[120px] pb-[30px] gap-[30px]"
      >
        <div className="flex flex-col gap-2 overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="font-[Inter] font-medium text-[28px] min-[400px]:text-[32px] sm:text-[36px] leading-[110%] tracking-[-0.045em] text-[#3B2215] uppercase whitespace-nowrap"
          >
            GALERI DOKUMENTASI
          </motion.h1>
        </div>

        <div className="flex flex-col gap-[30px] w-full">
          {galeriData.map((item) => (
            <div key={item.id} className="flex flex-col gap-[12px] w-full">
              <div 
                className={`relative w-full overflow-hidden bg-gray-200 cursor-pointer ${item.heightType === 'tall' ? 'aspect-[3/4]' : 'aspect-[3/2]'}`}
                onClick={() => setSelectedImage({ src: item.image, title: item.title })}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1280px) 100vw, 50vw"
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 px-[20px] py-[40px]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-[30px] right-[30px] md:top-[40px] md:right-[40px] text-white p-2 hover:bg-white/20 rounded-full transition-colors z-[110]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-[1000px] h-[60vh] md:h-[80vh] flex flex-col items-center gap-[20px]">
              <div className="relative w-full flex-1">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-white text-[20px] md:text-[24px] font-[Inter] font-medium tracking-[-0.05em] uppercase text-center shrink-0">
                {selectedImage.title}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
