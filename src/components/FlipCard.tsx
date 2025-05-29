import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  frontBgColor?: string;
  backBgColor?: string;
  height?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  frontBgColor = '#ffffff',
  backBgColor = 'var(--purple-light)',
  height = '220px'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-full perspective-1000 cursor-pointer" 
      style={{ height }}
      onClick={toggleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-xl shadow-xl p-4 flex flex-col items-center justify-center text-center"
          style={{ 
            backgroundColor: 'var(--purple-deep)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            border: '2px solid var(--aqua-green)'
          }}
        >
          {frontContent}
          <div className="absolute bottom-2 right-2 text-xs font-medium text-white">
            Tocca per scoprire
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center"
          style={{ 
            backgroundColor: backBgColor,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            color: '#ffffff'
          }}
        >
          {backContent}
          <div className="absolute bottom-2 right-2 text-xs font-medium text-white">
            Tocca per tornare
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
