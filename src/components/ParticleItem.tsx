"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [originalPosition] = useState({ x: initialX, y: initialY });
  const [isMoving, setIsMoving] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
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

  // Handle mouse movement
  useEffect(() => {
    let frameId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      // Get particle position
      if (!particleRef.current) return;
      
      const rect = particleRef.current.getBoundingClientRect();
      const particleX = rect.left + rect.width / 2;
      const particleY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to particle
      const dx = e.clientX - particleX;
      const dy = e.clientY - particleY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // If mouse is close enough, move particle away
      const repelRadius = 150;
      if (distance < repelRadius) {
        setIsMoving(true);
        
        // Calculate repel force
        const force = 1 - distance / repelRadius;
        const repelX = -dx / distance * force * 30;
        const repelY = -dy / distance * force * 30;
        
        // Set velocity with some damping
        setVelocity((prevVelocity) => ({
          x: prevVelocity.x * 0.8 + repelX * 0.2,
          y: prevVelocity.y * 0.8 + repelY * 0.2,
        }));
        
        // Animate - use requestAnimationFrame for smoother animation
        if (frameId === null) {
          const animate = () => {
            setPosition((prevPos) => ({
              x: prevPos.x + velocity.x,
              y: prevPos.y + velocity.y,
            }));
            
            frameId = requestAnimationFrame(animate);
          };
          
          frameId = requestAnimationFrame(animate);
        }
      } else if (isMoving) {
        // Return to original position with spring effect
        setIsMoving(false);
        setVelocity({
          x: (originalPosition.x - position.x) * 0.05,
          y: (originalPosition.y - position.y) * 0.05,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [position, velocity, isMoving, originalPosition]);

  // Return to original position when not affected by mouse
  useEffect(() => {
    if (!isMoving) {
      const returnInterval = setInterval(() => {
        setPosition((prev) => {
          // Spring animation back to original position
          const dx = originalPosition.x - prev.x;
          const dy = originalPosition.y - prev.y;
          
          // Check if we're close enough to original position
          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
            clearInterval(returnInterval);
            return originalPosition;
          }
          
          return {
            x: prev.x + dx * 0.05,
            y: prev.y + dy * 0.05,
          };
        });
      }, 16); // ~60fps
      
      return () => clearInterval(returnInterval);
    }
  }, [isMoving, originalPosition]);

  return (
    <motion.div
      ref={particleRef}
      className="absolute particle-item"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        // Stratificazione di effetti per massima visibilità
        filter: isMoving ? 
          'brightness(2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 4px #000)' : 
          'brightness(1.7) drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 3px #000)',
        // Colore sempre bianco
        color: '#FFFFFF',
        fontSize: `${size}px`,
        // Posizionamento ed effetti visivi
        position: 'absolute',
        transform: `scale(${isMoving ? 1.2 : 1})`,
        zIndex: isMoving ? 150 : 120, // Z-index aumentato per essere sempre visibile
        pointerEvents: 'none',
        // Bordi neri ben definiti
        WebkitTextStroke: '1px #000',
        textShadow: '0 0 3px #000, 0 0 1px #000, 0 0 1px #000'
      }}
      initial={{ opacity: 0, rotate: rotationStart }}
      animate={{
        y: [0, -floatAmplitude, 0],
        rotate: [rotationStart, rotationStart + 180, rotationStart + 360],
        scale: [0.8, 1, 0.8],
        opacity: [0.6, isMoving ? 1 : 0.8, 0.6],
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
