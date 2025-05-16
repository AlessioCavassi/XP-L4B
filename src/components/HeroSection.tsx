import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  width: number;
  height: number;
  top: string;
  left: string;
  duration: number;
}

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Generate random particles on the client side only
  useEffect(() => {
    // Set this to true to indicate we're on the client
    setIsClient(true);
    
    // Generate random particles
    const newParticles = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 20 + 5,
      height: Math.random() * 20 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
    }));
    
    setParticles(newParticles);
  }, []);
  
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[var(--purple-deep)] to-[var(--purple-light)]">
      {/* Polygon pattern overlay */}
      <div className="polygon-bg"></div>
      
      {/* Animated particles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* D20 dice logo animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 95,30 95,70 50,95 5,70 5,30" 
            fill="#ffffff" 
            stroke="#65BFB0" 
            strokeWidth="1"
          />
        </svg>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-heading mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TRASFORMIAMO OGNI ATTIVITÀ IN UN&apos;ESPERIENZA COINVOLGENTE
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-bold text-[var(--aqua-green)]">La nostra missione:</span> Elevare il potenziale umano nelle organizzazioni attraverso l&apos;innovazione digitale e il potere del gioco.
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-[var(--aqua-green)] mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Siamo esperti nella creazione di esperienze coinvolgenti che fondono gamification, realtà virtuale e intelligenza artificiale per formare, coinvolgere e ispirare il tuo pubblico. Creiamo esperienze memorabili che generano risultati misurabili.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="#servizi"
            className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-[var(--purple-deep)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCOPRI I NOSTRI SERVIZI
          </motion.a>
          
          <motion.a 
            href="#contatti"
            className="bg-transparent hover:bg-[var(--purple-light)] text-white border-2 border-[var(--purple-light)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTATTACI
          </motion.a>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
