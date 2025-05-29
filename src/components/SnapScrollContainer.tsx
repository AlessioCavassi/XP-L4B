import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SnapScrollContainerProps {
  sections: {
    id: string;
    component: React.ReactNode;
    bgColor?: string;
  }[];
}

const SnapScrollContainer: React.FC<SnapScrollContainerProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Minimum swipe distance threshold in pixels
  const minSwipeDistance = 50;
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const position = containerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(position / windowHeight);
        
        if (index !== activeSection && index >= 0 && index < sections.length) {
          setActiveSection(index);
        }
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection, sections.length]);

  const scrollToSection = (index: number) => {
    if (containerRef.current && index >= 0 && index < sections.length) {
      const position = index * window.innerHeight;
      containerRef.current.scrollTo({
        top: position,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipeDown = distance > minSwipeDistance;
    const isSwipeUp = distance < -minSwipeDistance;
    
    if (isSwipeDown && activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    }
    
    if (isSwipeUp && activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative h-screen w-full">
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
        style={{ scrollSnapType: 'y mandatory' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="h-screen w-full snap-start snap-always"
            style={{ 
              backgroundColor: section.bgColor || 'transparent',
              scrollSnapAlign: 'start'
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-2 z-50">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`w-3 h-3 rounded-full ${
              activeSection === index 
                ? 'bg-[var(--aqua-green)]' 
                : 'bg-[var(--purple-light)]/30'
            }`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              scale: activeSection === index ? 1.2 : 1,
              backgroundColor: activeSection === index 
                ? 'var(--aqua-green)' 
                : 'rgba(89, 70, 148, 0.3)'
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
      
      {/* Next section arrow - only show if not on last section */}
      {activeSection < sections.length - 1 && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => scrollToSection(activeSection + 1)}
        >
          <div className="w-10 h-10 rounded-full bg-[var(--aqua-green)]/80 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SnapScrollContainer;
