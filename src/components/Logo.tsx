import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: "transparent" }}
    >
      {/* Radial Icon */}
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 10, display: "block", minWidth: 48 }}
      >
        {/* 6 radial lines in dark blue */}
        <line x1="24" y1="24" x2="24" y2="8" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="36" y2="14" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="40" y2="26" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="36" y2="37" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="40" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="10" y2="36" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="8" y2="24" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="14" y2="11" stroke="#122057" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {/* Logo Text */}
      <span
        style={{
          color: "#122057",
          fontSize: "2.5rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        }}
      >
        Inflow
      </span>
    </div>
  );
}
