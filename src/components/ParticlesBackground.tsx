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
    depth: number; // Aggiunto per l'effetto parallasse
    opacity: number; // Aggiunto per la variazione di opacità
    color: string;
  }>>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Configurazione come oggetto useMemo per evitare ricreazioni non necessarie
  const config = React.useMemo(() => ({
    particleCount: 25, // Aumentato il numero di particelle
    types: ['dice', 'gem', 'coin'] as ItemType[],
    colorScheme: ['#FFFFFF', '#e0e0e0', '#f8f8f8'], // Sfumature di bianco
    sizes: { min: 15, max: 35 }, // Maggiore varietà di dimensioni
    depths: { min: -500, max: 500 } // Profondità 3D (in pixel)
  }), []);
  
  useEffect(() => {
    // Generate particles only on the client side
    setIsClient(true);
    
    // Se è specificato un count personalizzato, lo utilizziamo
    const numParticles = count !== undefined ? count : config.particleCount;
    
    const newItems = Array.from({ length: numParticles }).map((_, index) => {
      const type = config.types[Math.floor(Math.random() * config.types.length)];
      const color = config.colorScheme[Math.floor(Math.random() * config.colorScheme.length)];
      
      // Dimensioni specifiche per tipo e sezione
      const minSize = config.sizes.min;
      const maxSize = config.sizes.max;
      const size = minSize + Math.random() * (maxSize - minSize);
      
      // Profondità casuale per l'effetto 3D
      const depth = config.depths.min + Math.random() * (config.depths.max - config.depths.min);
      // Opacità basata sulla profondità (più scure in lontananza)
      const opacity = 0.3 + (0.7 * (1 - (depth - config.depths.min) / (config.depths.max - config.depths.min)));
      
      return {
        id: `particle-${sectionType}-${index}-${Date.now()}`,
        type,
        size,
        initialX: 5 + Math.random() * 90, // Keep within 5%-95% of container
        initialY: 5 + Math.random() * 90, // Keep within 5%-95% of container
        depth,
        opacity,
        color,
      };
    });
    
    setItems(newItems);
  // Dipendenze semplificate - solo sectionType e count possono cambiare
  // config è stabile grazie a useMemo
  }, [sectionType, count, config]);

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
          depth={item.depth}
          opacity={item.opacity}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
