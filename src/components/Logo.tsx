import React from 'react';

// /components/Logo.tsx
// Drop-in replacement that renders your exact asset(s) pixel-perfect.

interface LogoProps {
  className?: string;               // e.g., "h-8" (height controls size; width auto)
  variant?: "full" | "icon";        // full = wordmark, icon = mark-only
  alt?: string;                     // accessibility
  priority?: boolean;               // if using next/image
}

export default function Logo({
  className = "h-8",
  variant = "full",
  alt = "Inflow",
}: LogoProps) {
  // Put your files in /public/brand/
  const src =
    variant === "icon"
      ? "/brand/inflow-mark.svg"     // icon-only file (your exact uploaded mark)
      : "/brand/inflow-logo.svg";    // full wordmark file (your exact uploaded logo)

  // Use a plain <img> to avoid any framework injecting styles/colors.
  return (
    <img
      src={src}
      alt={alt}
      className={`select-none pointer-events-none ${className}`}
      style={{
        height: "auto",          // Tailwind height class controls actual height
        maxHeight: "100%",
        width: "auto",           // maintain aspect ratio
        display: "block",
        imageRendering: "auto",  // keep original anti-aliasing
      }}
      draggable={false}
    />
  );
}
