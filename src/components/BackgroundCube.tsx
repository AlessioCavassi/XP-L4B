import React from 'react';
import LogoCube from './LogoCube';
import { motion } from 'framer-motion';

interface BackgroundCubeProps {
  className?: string;
}

const BackgroundCube: React.FC<BackgroundCubeProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden z-[-1] ${className}`}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          style={{ 
            transform: 'scale(3)',
            filter: 'blur(1px)'
          }}
        >
          <LogoCube />
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundCube;
