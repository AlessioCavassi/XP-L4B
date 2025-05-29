import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';

interface ParallaxLogoProps {
  opacity?: number;
}

const ParallaxLogo: React.FC<ParallaxLogoProps> = ({ opacity = 0.15 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  
  // Animazione 3D fluida e continua
  useEffect(() => {
    setIsMounted(true);
    
    const animateLogo = () => {
      controls.start({
        rotateX: [0, 15, 0, -15, 0],
        rotateY: [0, 15, 0, -15, 0],
        scale: [1, 1.05, 1],
        transition: {
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      });
    };
    
    animateLogo();
  }, [controls]);
  
  if (!isMounted) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden max-w-full">
      <motion.div 
        className="w-[500px] max-w-[45%]"
        style={{ 
          opacity,
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
        animate={controls}
      >
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%'
          }}
          animate={{
            rotateX: [0, 5, 0, -5, 0],
            rotateY: [0, 5, 0, 5, 0],
            transition: {
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <img 
            src="/logo_XP_L4B_rgb_trasp_vert_col_payoff.png" 
            alt="XP-L4B Logo" 
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(101, 191, 176, 0.4))',
              transform: 'translateZ(20px)',
              mixBlendMode: 'multiply',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxLogo;
