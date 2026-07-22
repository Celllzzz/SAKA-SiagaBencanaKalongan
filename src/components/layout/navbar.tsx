"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { label: "PETA", href: "#" },
    { label: "FITUR", href: "#" },
    { label: "MITIGASI", href: "#" },
    { label: "PANDUAN TAS", href: "#" },
    { label: "TIM", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 h-[130px] px-[50px] text-white pointer-events-auto w-full max-w-[1440px] flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="font-[Inter] font-extrabold text-[58px] leading-none tracking-[-0.09em]">
          SAKA
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-10 text-[16px] font-semibold tracking-[-0.09em] uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Side / Mobile Menu */}
      <div className="flex items-center">
        <Button
          variant="secondary"
          className="hidden lg:inline-flex rounded-[20px] px-6 py-5 text-[14px] tracking-[0.01em] font-semibold bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all cursor-pointer uppercase"
        >
          HUBUNGI KAMI
        </Button>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden ml-4">
          <Sheet>
            <SheetTrigger className="text-white hover:bg-white/20 inline-flex items-center justify-center rounded-md p-2 transition-colors">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" showCloseButton={false} className="bg-[#111111] text-white border-none w-full sm:max-w-md h-[100dvh] flex flex-col pt-8 pb-10 px-8 shadow-2xl">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              {/* Top Bar: Logo & Close Icon */}
              <div className="flex justify-between items-start mb-16">
                {/* SAKA Logo */}
                <Link href="/" className="text-4xl font-extrabold tracking-tight leading-none uppercase">
                  SAKA
                </Link>
                {/* Close Button */}
                <SheetClose className="text-gray-400 hover:text-white transition-colors mt-1 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>

              {/* Navigation Links */}
              <nav className="flex-grow flex flex-col gap-y-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-wider hover:text-gray-300 transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom Action Button */}
              <div className="mt-12">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-white text-black font-bold uppercase text-sm tracking-wide py-4 px-8 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-white w-auto self-start"
                >
                  Hubungi Kami
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
