import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Radial Icon with Gradient */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6A11CB" />   {/* Purple */}
              <stop offset="100%" stopColor="#2575FC" /> {/* Blue */}
            </linearGradient>
          </defs>

          {/* Central point */}
          <circle cx="20" cy="20" r="2" fill="url(#icon-gradient)" />

          {/* 6 radial lines */}
          <line x1="20" y1="20" x2="20" y2="5" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="33" y2="10" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="33" y2="30" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="20" y2="35" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="7" y2="30" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="7" y2="10" stroke="url(#icon-gradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Text with Gradient */}
      <span
        className="text-3xl font-extrabold tracking-tight"
        style={{
          background: "linear-gradient(90deg, #6A11CB, #2575FC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        }}
      >
        Inflow
      </span>
    </div>
  );
}
