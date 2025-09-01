import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface ParallaxLogoProps {
  opacity?: number;
}

const ParallaxLogo: React.FC<ParallaxLogoProps> = ({ opacity = 0.35 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10 range
      const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10 range
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animazione 3D fluida e continua migliorata
  useEffect(() => {
    setIsMounted(true);
    
    const animateLogo = () => {
      controls.start({
        rotateX: [0, 8, 0, -8, 0],
        rotateY: [0, 10, 0, 10, 0],
        scale: [1, 1.03, 1],
        transition: {
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
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
          opacity: opacity * 1.5,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 0 30px rgba(101, 191, 176, 0.7))',
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`
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
            rotateX: [0, 3, 0, -3, 0],
            rotateY: [0, 5, 0, 5, 0],
            transition: {
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }
          }}
        >
          <Image 
            src="/logo_XP_L4B_rgb_trasp_vert_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={500}
            height={350}
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(101, 191, 176, 0.5)) brightness(1.1)',
              transform: 'translateZ(30px)',
              mixBlendMode: 'screen',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              opacity: 0.9
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxLogo;
