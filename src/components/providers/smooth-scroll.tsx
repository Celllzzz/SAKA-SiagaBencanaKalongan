"use client";

import { ReactLenis } from "lenis/react";
import { ScrollReset } from "@/components/scroll-reset";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
