"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiDiceSixFacesSix, GiDiamondHard, GiCrystalGrowth, GiGoldBar, GiTwoCoins, GiCutDiamond } from 'react-icons/gi';

type ItemType = 'dice' | 'gem' | 'coin';

interface GameItem {
  type: ItemType;
  size: number;
  top: string;
  left: string;
  duration: number;
  rotation: number;
  color: string;
}

const MobileParticlesBackground: React.FC = () => {
  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Generate random game items on the client side only
  useEffect(() => {
    // Set this to true to indicate we're on the client
    setIsClient(true);
    
    // Possibili tipi e colori - solo bianco e nero come nella versione desktop
    const types: ItemType[] = ['dice', 'gem', 'coin']; // Distribuzione uniforme
    const monochromeColors = ['#ffffff', '#f8f8f8', '#e0e0e0', '#222222', '#333333', '#111111'];
    
    // Genera elementi di gioco casuali - aumentato il numero per migliorare la visibilità
    const newItems = Array.from({ length: 10 }).map(() => {
      const type = types[Math.floor(Math.random() * types.length)];
      // Tutti gli elementi usano la palette in bianco e nero
      const color = monochromeColors[Math.floor(Math.random() * monochromeColors.length)];
      
      // Make dice smaller than other elements
      return {
        type,
        size: type === 'dice' ? Math.random() * 20 + 15 : Math.random() * 25 + 20, // Dimensioni aumentate per migliorare la visibilità
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 15, // Durata più breve per mobile
        rotation: Math.random() * 360,
        color,
      };
    });
    
    setGameItems(newItems);
  }, []);
  
  // Function to render the appropriate icon based on item type
  const renderIcon = (item: GameItem, index: number) => {
    let Icon;
    
    // Select a random icon based on the item type
    if (item.type === 'dice') {
      Icon = GiDiceSixFacesSix;
    } else if (item.type === 'gem') {
      // Alternate between different gem types
      Icon = index % 3 === 0 ? GiDiamondHard : index % 3 === 1 ? GiCrystalGrowth : GiCutDiamond;
    } else {
      // Alternate between different coin types
      Icon = index % 2 === 0 ? GiTwoCoins : GiGoldBar;
    }
    
    return <Icon size={item.size} color={item.color} />;
  };
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Animated game items in the background */}
      {isClient && gameItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute particle-item-mobile"
          style={{
            top: item.top,
            left: item.left,
          }}
          initial={{ opacity: 0, y: 0, rotate: item.rotation }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 0.6, 0.3], // Aumentata opacità per migliorare la visibilità
            rotate: [item.rotation, item.rotation + 360, item.rotation],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            ease: "easeInOut",
          }}
        >
          {renderIcon(item, i)}
        </motion.div>
      ))}
    </div>
  );
};

export default MobileParticlesBackground;
