import React from 'react';

const WaveDivider = () => (
  <div className="relative w-full h-2 md:h-3 overflow-hidden">
    <svg 
      className="w-full h-full" 
      viewBox="0 0 1200 10" 
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00B2A9" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <path 
        d="M0,8 C150,2 350,2 600,5 C850,8 1050,5 1200,8 L1200,10 L0,10 Z" 
        fill="url(#gradient)"
        filter="url(#glow)"
        className="transition-all duration-500"
      />
      
      <path 
        d="M0,5 C200,2 400,8 600,6 C800,4 1000,2 1200,5 L1200,10 L0,10 Z" 
        fill="url(#gradient)" 
        fillOpacity="0.6"
        className="transition-all duration-700"
      />
    </svg>
  </div>
);

export default WaveDivider;
