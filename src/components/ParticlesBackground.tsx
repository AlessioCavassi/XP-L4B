"use client";

import React, { useState, useEffect } from 'react';
import ParticleItem, { ItemType } from './ParticleItem';

// Definire diverse densità e tipi di particelle per diverse sezioni
type SectionType = 'hero' | 'services' | 'about' | 'logos' | 'contact' | 'generic';

interface ParticlesBackgroundProps {
  sectionType?: SectionType;
  className?: string;
  style?: React.CSSProperties;
  count?: number; // Numero personalizzabile di particelle
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  sectionType = 'generic', 
  className = '',
  style = {},
  count
}) => {
  const [items, setItems] = useState<Array<{
    id: string;
    type: ItemType;
    size: number;
    initialX: number;
    initialY: number;
    color: string;
  }>>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Configurazione uniforme per tutte le sezioni
  // Tutte le sezioni avranno lo stesso numero di particelle e le stesse dimensioni
  const UNIFORM_COUNT = 20; // Numero standard di particelle per ogni sezione
  const UNIFORM_TYPES = ['dice', 'gem', 'coin'] as ItemType[];
  const UNIFORM_COLOR = ['#FFFFFF']; // Bianco puro per tutte le particelle
  const UNIFORM_SIZES = { min: 20, max: 30 }; // Dimensioni uniformi
  
  const sectionConfig = {
    hero: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    },
    services: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    },
    about: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    },
    logos: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    },
    contact: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    },
    generic: {
      particleCount: UNIFORM_COUNT,
      types: UNIFORM_TYPES,
      colorScheme: UNIFORM_COLOR,
      sizes: UNIFORM_SIZES
    }
  };
  
  useEffect(() => {
    // Generate particles only on the client side
    setIsClient(true);
    
    const config = sectionConfig[sectionType];
    
    // Se è specificato un count personalizzato, lo utilizziamo
    const numParticles = count !== undefined ? count : config.particleCount;
    
    const newItems = Array.from({ length: numParticles }).map((_, index) => {
      const type = config.types[Math.floor(Math.random() * config.types.length)];
      const color = config.colorScheme[Math.floor(Math.random() * config.colorScheme.length)];
      
      // Dimensioni specifiche per tipo e sezione
      const minSize = config.sizes.min;
      const maxSize = config.sizes.max;
      const size = minSize + Math.random() * (maxSize - minSize);
      
      // Distribuzione casuale all'interno della sezione
      return {
        id: `particle-${sectionType}-${index}-${Date.now()}`,
        type,
        size,
        initialX: 5 + Math.random() * 90, // Keep within 5%-95% of container
        initialY: 5 + Math.random() * 90, // Keep within 5%-95% of container
        color,
      };
    });
    
    setItems(newItems);
  }, [sectionType, count, sectionConfig]);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ 
        zIndex: 100, // z-index molto alto per essere sempre visibile
        pointerEvents: 'none', // Permette di cliccare attraverso le particelle
        ...style
      }}
    >
      {/* Each particle is now a completely independent component with its own physics */}
      {isClient && items.map((item, index) => (
        <ParticleItem
          key={item.id}
          index={index}
          type={item.type}
          size={item.size}
          initialX={item.initialX}
          initialY={item.initialY}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
