"use client";

import { useState } from "react";

type ImageFallbackProps = {
  alt: string;
  src?: string;
  className?: string;
  label?: string;
  note?: string;
  imageClassName?: string;
};

export function ImageFallback({
  alt,
  src,
  className = "",
  label,
  note = "作品图待补充",
  imageClassName = "",
}: ImageFallbackProps) {
  const [hasError, setHasError] = useState(!src);

  if (!hasError && src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(216,255,114,0.16),transparent_13rem),radial-gradient(circle_at_80%_35%,rgba(124,247,232,0.16),transparent_14rem),linear-gradient(135deg,#111111,#070707)] ${className}`}
    >
      <div className="px-6 text-center">
        <p className="text-base font-semibold text-white">{label ?? alt}</p>
        <p className="mt-2 text-sm text-zinc-500">{note}</p>
      </div>
    </div>
  );
}
