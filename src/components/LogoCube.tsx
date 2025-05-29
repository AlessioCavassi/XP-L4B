import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface LogoCubeProps {
  className?: string;
}

const LogoCube: React.FC<LogoCubeProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  
  // Auto-rotation state
  const autoRotateX = useMotionValue(0);
  const autoRotateY = useMotionValue(0);
  
  // Interactive rotation based on mouse position
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Combined rotation with spring physics for smooth movement
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });
  
  // Scale on hover
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { damping: 25, stiffness: 300 });
  
  // Auto-rotation effect - more subtle and professional
  useEffect(() => {
    let frameId: number;
    let angle = 0;
    
    const autoRotate = () => {
      angle += 0.2; // Slower rotation speed for a more premium feel
      autoRotateX.set(Math.sin(angle * 0.008) * 8); // Very gentle rotation on X axis
      autoRotateY.set(angle * 0.2); // Slower continuous rotation on Y axis
      
      frameId = requestAnimationFrame(autoRotate);
    };
    
    frameId = requestAnimationFrame(autoRotate);
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [autoRotateX, autoRotateY]);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !hover) return;
      
      const centerX = containerRef.current.offsetLeft + containerRef.current.offsetWidth / 2;
      const centerY = containerRef.current.offsetTop + containerRef.current.offsetHeight / 2;
      
      // Get mouse position relative to center of cube
      const x = (e.clientX - centerX) / 25; // Divisor controls sensitivity
      const y = (e.clientY - centerY) / 25;
      
      // Set rotation based on mouse position
      rotateX.set(-y); // Invert Y for natural movement
      rotateY.set(x);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hover, rotateX, rotateY]);
  
  // Handle scroll effect - more subtle interaction
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      
      // Add very subtle rotation based on scroll position
      autoRotateY.set((autoRotateY.get() + scrollY * 0.01) % 360); // Much more subtle scroll effect
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [autoRotateY]);
  
  // Handle hover effect - more refined and subtle
  const handleMouseEnter = () => {
    setHover(true);
    scale.set(1.05); // More subtle scale increase
  };
  
  const handleMouseLeave = () => {
    setHover(false);
    scale.set(1);
    
    // Smooth transition back to auto-rotation
    rotateX.set(0);
    rotateY.set(0);
  };
  
  // Combine auto-rotation and mouse interaction
  const combinedRotateX = useTransform(
    [autoRotateX, springRotateX],
    ([auto, interactive]) => hover ? interactive : auto
  );
  
  const combinedRotateY = useTransform(
    [autoRotateY, springRotateY],
    ([auto, interactive]) => hover ? interactive : auto
  );
  
  return (
    <div 
      className={`perspective-800 ${className}`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative preserve-3d w-32 h-32"
        style={{
          rotateX: combinedRotateX,
          rotateY: combinedRotateY,
          scale: springScale,
        }}
      >
        {/* Front face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
        
        {/* Back face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'rotateY(180deg) translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
        
        {/* Left face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'rotateY(-90deg) translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
        
        {/* Right face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'rotateY(90deg) translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
        
        {/* Top face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'rotateX(90deg) translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
        
        {/* Bottom face - improved styling */}
        <div className="absolute inset-0 backface-hidden bg-[#141127] border border-[var(--aqua-green)]/20 flex items-center justify-center rounded-sm shadow-lg" style={{ transform: 'rotateX(-90deg) translateZ(16px)' }}>
          <Image 
            src="/logo_XP_L4B_rgb_trasp_oriz_col_payoff.png" 
            alt="XP-L4B Logo" 
            width={120} 
            height={100} 
            className="w-4/5 h-auto object-contain p-1" 
            quality={100}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LogoCube;
