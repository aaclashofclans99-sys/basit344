import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
  iconColor?: string;
}

export default function Logo({ className = "h-8", textColor = "#0A1A4F", iconColor = "#0A1A4F" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Radial Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central point */}
          <circle cx="16" cy="16" r="1.5" fill={iconColor} />
          
          {/* 5 rays pointing outward */}
          <line x1="16" y1="16" x2="16" y2="6" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="16" x2="24.5" y2="10.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="16" x2="24.5" y2="21.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="16" x2="16" y2="26" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="16" x2="7.5" y2="21.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Text */}
      <span 
        className="text-2xl font-bold tracking-tight"
        style={{ color: textColor, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
      >
        Inflow
      </span>
    </div>
  );
}