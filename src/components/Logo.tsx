import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  useHorizontal?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', animated = true, useHorizontal = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Smoothing for mouse movement
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  
  // Handle mouse move
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const xPos = (e.clientX - rect.left) / rect.width;
      const yPos = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: xPos, y: yPos });
      
      // Update spring values
      x.set(xPos * 50 - 25);
      y.set(yPos * 50 - 25);
    };
    
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);
  
  // Animation variants
  const logoVariants = {
    initial: { scale: 0.9, opacity: 0.8 },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  
  // Transition for animation
  const logoTransition = {
    duration: 1.2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };
  
  // Enhanced light position with better depth effect
  const lightPosition = {
    background: `
      radial-gradient(
        250px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
        rgba(99, 179, 255, 0.5),
        transparent 70%
      ),
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 0.15) 100%
      )
    `,
    transform: `perspective(1000px) rotateX(${Number(y) * 0.5}deg) rotateY(${Number(x) * 0.5}deg) scale3d(1.02, 1.02, 1.05)`,
    opacity: isHovered ? 1 : 0.5,
    transition: 'opacity 0.4s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    filter: 'blur(1px)',
  };

  // Percorso dell'immagine orizzontale
  const horizontalLogo = "/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png";

  if (useHorizontal) {
    return (
      <motion.div
        ref={containerRef}
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={logoVariants}
        initial="initial"
        animate={animated ? "animate" : "initial"}
        transition={logoTransition}
      >
        <div className="relative z-10 overflow-hidden group">
          <div className="relative z-10 transition-all duration-500 group-hover:translate-z-10" 
               style={{
                 transformStyle: 'preserve-3d',
                 transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)'
               }}>
            <Image
              src={horizontalLogo}
              alt="XP-L4B Logo"
              width={300}
              height={100}
              className={`w-full h-auto transition-all duration-500 ${
                animated ? 'group-hover:scale-[1.03]' : ''
              }`}
              style={{
                filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.25))',
                transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)'
              }}
              priority
              unoptimized
            />
          </div>
          {animated && (
            <>
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                  backgroundSize: '250% 100%',
                  backgroundPosition: isHovered ? '150% 0' : '-50% 0',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  mixBlendMode: 'overlay',
                  opacity: isHovered ? 0.8 : 0,
                  filter: 'blur(0.5px)',
                  transform: 'translateZ(20px)'
                }}
              />
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  ...lightPosition,
                  opacity: isHovered ? 0.4 : 0.1,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `perspective(1000px) rotateX(${Number(y) * 0.3}deg) rotateY(${Number(x) * 0.3}deg) scale3d(1.02, 1.02, 1.05)`,
                  transformStyle: 'preserve-3d',
                  borderRadius: '0.5rem',
                }}
              />
              <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%)',
                  opacity: isHovered ? 0.6 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: 'translateZ(5px)',
                  filter: 'blur(15px)'
                }}
              />
            </>
          )}
        </div>
      </motion.div>
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
