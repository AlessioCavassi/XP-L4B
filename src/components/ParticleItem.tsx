"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GiDiceSixFacesSix, GiDiamondHard, GiCrystalGrowth, GiGoldBar, GiTwoCoins, GiCutDiamond } from 'react-icons/gi';

export type ItemType = 'dice' | 'gem' | 'coin';

interface ParticleItemProps {
  type: ItemType;
  size: number;
  initialX: number;
  initialY: number;
  color: string;
  index: number;
}

// A completely independent particle component
const ParticleItem: React.FC<ParticleItemProps> = ({ 
  type, 
  size, 
  initialX,
  initialY, 
  color, 
  index 
}) => {
  const particleRef = useRef<HTMLDivElement>(null);
  
  // Function to render the appropriate icon
  const renderIcon = () => {
    // Creiamo uno stile per le icone con bordi definiti e netti
    const iconStyle = {
      // Doppio effetto ombra per garantire visibilità su qualsiasi sfondo
      filter: 'drop-shadow(-2px -2px 0 #000) drop-shadow(2px -2px 0 #000) drop-shadow(-2px 2px 0 #000) drop-shadow(2px 2px 0 #000)',
      // Aggiungiamo anche uno stroke inverso per garantire contrasto
      WebkitTextStroke: '1px #000',
      // Scaliamo leggermente l'icona per dare spazio ai bordi
      transform: 'scale(0.9)',
    } as React.CSSProperties;
    
    switch (type) {
      case 'dice':
        return <GiDiceSixFacesSix size={size} color={color} style={iconStyle} />;
      case 'gem':
        // Alternate between different gem types
        if (index % 3 === 0) return <GiDiamondHard size={size} color={color} style={iconStyle} />;
        if (index % 3 === 1) return <GiCrystalGrowth size={size} color={color} style={iconStyle} />;
        return <GiCutDiamond size={size} color={color} style={iconStyle} />;
      case 'coin':
        // Alternate between different coin types
        return index % 2 === 0 ? 
          <GiTwoCoins size={size} color={color} style={iconStyle} /> : 
          <GiGoldBar size={size} color={color} style={iconStyle} />;
    }
  };

  // Random animation parameters
  const durationBase = 15 + Math.random() * 20;
  const floatAmplitude = 10 + Math.random() * 20;
  const rotationStart = Math.random() * 360;



  return (
    <motion.div
      ref={particleRef}
      className="absolute particle-item"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        // Effetti visivi
        filter: 'brightness(1.7) drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 3px #000)',
        color: '#FFFFFF',
        fontSize: `${size}px`,
        position: 'absolute',
        zIndex: 120,
        pointerEvents: 'none',
        WebkitTextStroke: '1px #000',
        textShadow: '0 0 3px #000, 0 0 1px #000, 0 0 1px #000'
      }}
      initial={{ opacity: 0, rotate: rotationStart }}
      animate={{
        y: [0, -floatAmplitude, 0],
        rotate: [rotationStart, rotationStart + 180, rotationStart + 360],
        scale: [0.8, 1, 0.8],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        repeat: Infinity,
        duration: durationBase,
        ease: "easeInOut",
      }}
    >
      {renderIcon()}
    </motion.div>
  );
};

export default ParticleItem;
