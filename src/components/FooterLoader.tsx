'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FooterLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        return Math.min(oldProgress + 20, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full h-1 bg-gray-200 relative overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#6D28D9] to-[#00B2A9]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  );
}
