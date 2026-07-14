"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { label: "BERANDA", href: "#" },
    { label: "TENTANG", href: "#" },
    { label: "DAMPU", href: "#" },
    { label: "BANDUNGAN", href: "#" },
    { label: "GLEPUNG", href: "#" },
    { label: "TOMPO GUNUNG", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[50px] text-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/logo/white saka.png"
            alt="SAKA Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wide">
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
      <div className="flex items-center space-x-4">
        <Button
          variant="secondary"
          className="hidden sm:inline-flex rounded-full px-6 font-semibold bg-white text-black hover:bg-gray-200"
        >
          HUBUNGI KAMI
        </Button>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="text-white hover:bg-white/20 inline-flex items-center justify-center rounded-md p-2 transition-colors">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 text-white border-zinc-800">
              <SheetTitle className="mb-8 flex justify-start">
                <span className="sr-only">SAKA</span>
                <Image
                  src="/logo/white saka.png"
                  alt="SAKA Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </SheetTitle>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="cursor-pointer relative w-fit text-lg font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="secondary"
                  className="rounded-full font-semibold bg-white text-black hover:bg-gray-200 mt-4"
                >
                  HUBUNGI KAMI
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
