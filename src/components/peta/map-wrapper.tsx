"use client";

import dynamic from "next/dynamic";

const DusunMap = dynamic(() => import("./dusun-map"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] md:h-[668px] bg-gray-200 animate-pulse rounded-[8px]" />
});

export function MapWrapper({ dusunSlug }: { dusunSlug: string }) {
  return <DusunMap dusunSlug={dusunSlug} />;
}
