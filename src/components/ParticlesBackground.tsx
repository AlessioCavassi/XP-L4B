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
  
  // Configurazione come oggetto useMemo per evitare ricreazioni non necessarie
  const config = React.useMemo(() => ({
    particleCount: 20, // Numero standard di particelle per ogni sezione
    types: ['dice', 'gem', 'coin'] as ItemType[],
    colorScheme: ['#FFFFFF'], // Bianco puro per tutte le particelle
    sizes: { min: 20, max: 30 } // Dimensioni uniformi
  }), []); // Nessuna dipendenza, l'oggetto è costante
  
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
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
