"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the window load event which fires when all assets (including images) are loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback just in case some images take forever
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAE3C7]"
        >
          {/* SAKA Logo Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="font-[Inter] font-extrabold text-[60px] md:text-[90px] text-[#3B2215] leading-none tracking-[-0.09em] uppercase">
              SAKA
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-[20px] flex flex-col items-center gap-[10px]"
          >
            <div className="w-[40px] h-[40px] border-[4px] border-[#3B2215]/20 border-t-[#3B2215] rounded-full animate-spin"></div>
            <p className="font-[Inter] font-medium text-[14px] text-[#3B2215] uppercase tracking-[0.1em]">
              Memuat Konten...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
