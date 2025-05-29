import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface MobileNavSwipeProps {
  navItems: { name: string; path: string }[];
}

const MobileNavSwipe: React.FC<MobileNavSwipeProps> = ({ navItems }) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Find the index of the current page
  useEffect(() => {
    const index = navItems.findIndex(item => item.path === pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [pathname, navItems]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === null) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    // Detect swipe direction
    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0 && currentIndex < navItems.length - 1) {
        // Swipe left, go to next page
        navigateTo(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right, go to previous page
        navigateTo(currentIndex - 1);
      }
      setStartX(null); // Reset to prevent multiple triggers
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };
  
  const navigateTo = (index: number) => {
    if (index >= 0 && index < navItems.length) {
      setCurrentIndex(index);
      router.push(navItems[index].path);
    }
  };

  return (
    <div 
      className="fixed bottom-6 left-0 right-0 z-40 md:hidden px-4"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div 
        className="bg-[var(--purple-deep)]/90 backdrop-blur-md rounded-full px-4 py-3 flex justify-between items-center shadow-lg shadow-black/20 border border-white/10"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="flex justify-between w-full relative">
          {/* Pagination indicators */}
          <div className="absolute -top-6 left-0 right-0 flex justify-center gap-1">
            {navItems.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-[var(--aqua-green)]' : 'bg-white/30'}`}
              />
            ))}
          </div>
          
          {/* Current page name */}
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={() => navigateTo(currentIndex - 1)} 
              disabled={currentIndex === 0}
              className={`${currentIndex === 0 ? 'opacity-30' : 'opacity-100'} px-2 text-white`}
            >
              &lt;
            </button>
            
            <p className="text-center text-white font-medium">
              {navItems[currentIndex].name}
            </p>
            
            <button 
              onClick={() => navigateTo(currentIndex + 1)} 
              disabled={currentIndex === navItems.length - 1}
              className={`${currentIndex === navItems.length - 1 ? 'opacity-30' : 'opacity-100'} px-2 text-white`}
            >
              &gt;
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="text-center text-xs text-white/50 mt-2">
        Scorri a destra o sinistra per navigare
      </div>
    </div>
  );
};

export default MobileNavSwipe;
