import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  useHorizontal?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', animated = true, useHorizontal = false }) => {
  // Define animation variants
  const logoVariants = {
    initial: { scale: 0.9, opacity: 0.8 },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  
  // Define separate transition for animation
  const logoTransition = {
    duration: 1.2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };

  if (useHorizontal) {
    return (
      <div className={`logo-container ${className}`}>
        {animated ? (
          <motion.div
            initial="initial"
            animate="animate"
            variants={logoVariants}
            transition={logoTransition}
            className="logo-wrapper relative"
          >
            <Image 
              src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
              alt="XP-L4B Logo" 
              width={200} 
              height={60} 
              className="w-auto h-auto" 
            />
          </motion.div>
        ) : (
          <div className="logo-wrapper relative">
            <Image 
              src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
              alt="XP-L4B Logo" 
              width={200} 
              height={60} 
              className="w-auto h-auto" 
            />
          </div>
        )}
      </div>
    );
  }

  // D20 dice shape as SVG for small icon
  return (
    <div className={`logo-container ${className}`}>
      {animated ? (
        <motion.div
          initial="initial"
          animate="animate"
          variants={logoVariants}
          transition={logoTransition}
          className="logo-wrapper"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* D20 dice shape */}
            <polygon 
              points="50,5 95,30 95,70 50,95 5,70 5,30" 
              fill="#2D2655" 
              stroke="#65BFB0" 
              strokeWidth="2"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="22"
              fontFamily="Orbitron"
              fill="#ffffff"
              fontWeight="bold"
            >
              XP
            </text>
            <text
              x="50"
              y="75"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Sulphur Point"
              fill="#65BFB0"
            >
              L4B
            </text>
          </svg>
        </motion.div>
      ) : (
        <div className="logo-wrapper">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* D20 dice shape */}
            <polygon 
              points="50,5 95,30 95,70 50,95 5,70 5,30" 
              fill="#2D2655" 
              stroke="#65BFB0" 
              strokeWidth="2"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="22"
              fontFamily="Orbitron"
              fill="#ffffff"
              fontWeight="bold"
            >
              XP
            </text>
            <text
              x="50"
              y="75"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Sulphur Point"
              fill="#65BFB0"
            >
              L4B
            </text>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Logo;
