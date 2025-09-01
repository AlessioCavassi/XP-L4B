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
  depth: number; // Aggiunto per l'effetto parallasse
  opacity: number; // Aggiunto per la variazione di opacità
  color: string;
  index: number;
}

// A completely independent particle component
const ParticleItem: React.FC<ParticleItemProps> = ({ 
  type, 
  size, 
  initialX,
  initialY, 
  depth,
  opacity,
  color, 
  index 
}) => {
  const particleRef = useRef<HTMLDivElement>(null);
  
  // Function to render the appropriate icon
  const renderIcon = () => {
    // Stile per le icone senza bordi neri
    const iconStyle = {
      // Rimossi gli effetti di ombreggiatura e bordo nero
      transform: 'scale(1)',
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

  // Calcola l'effetto di luce e prospettiva - aumentati per migliorare visibilità
  const lightIntensity = 0.9 + (depth / 800); // Più luminoso quando è più vicino
  const scale = 0.8 + (1.5 * (1 - (depth + 500) / 1000)); // Scala aumentata
  const blurAmount = Math.max(0, (1 - (depth + 500) / 1000) * 7); // Sfocatura prospettica aumentata

  return (
    <motion.div
      ref={particleRef}
      className="absolute will-change-transform"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        transform: `
          translate3d(-50%, -50%, ${depth}px)
          scale(${scale})
          rotateX(${depth * 0.05}deg)
          rotateY(${depth * 0.05}deg)
        `,
        zIndex: Math.floor(1 + (depth + 500) / 100),
        opacity: opacity * lightIntensity * 1.3, // Aumentata opacità generale
        filter: `
          drop-shadow(0 0 ${8 + blurAmount}px rgba(101, 191, 176, ${0.5 * lightIntensity}))
          brightness(${1.2 + (lightIntensity * 0.6)})
          contrast(1.3)
        `,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        textShadow: `
          0 0 10px rgba(255,255,255,${0.5 * lightIntensity}),
          0 0 20px rgba(101, 191, 176, ${0.6 * lightIntensity})
        `,
        willChange: 'transform, opacity, filter'
      }}
      initial={{ opacity: 0, rotate: rotationStart }}
      animate={{
        y: [0, -floatAmplitude * 0.7, 0],
        rotate: [rotationStart, rotationStart + 180, rotationStart + 360],
        scale: [0.9, 1.1, 0.9],
        opacity: [0.5, 0.8, 0.5], // Aumentata opacità nell'animazione
        filter: [
          'drop-shadow(0 0 8px rgba(101, 191, 176, 0.5))',
          'drop-shadow(0 0 20px rgba(101, 191, 176, 0.8))',
          'drop-shadow(0 0 8px rgba(101, 191, 176, 0.5))'
        ]
      }}
      transition={{
        duration: durationBase,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.07,
        repeatType: 'reverse'
      }}
    >
      {renderIcon()}
    </motion.div>
  );
};

export default ParticleItem;
