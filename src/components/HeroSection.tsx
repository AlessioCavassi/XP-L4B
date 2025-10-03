import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mt-24 md:mt-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 text-white drop-shadow-lg">
          TRASFORMA LA TUA AZIENDA
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="text-white">Siamo esperti nella creazione di</span> <span className="text-[var(--aqua-green)] font-bold">esperienze coinvolgenti</span> <span className="text-white">che fondono</span> <span className="text-[var(--aqua-green)] font-bold">gamification</span><span className="text-white">,</span> <span className="text-[var(--aqua-green)] font-bold">realtà virtuale</span> <span className="text-white">e</span> <span className="text-[var(--aqua-green)] font-bold">intelligenza artificiale</span> <span className="text-white">per</span> <span className="text-[var(--aqua-green)]">formare</span><span className="text-white">,</span> <span className="text-[var(--aqua-green)]">coinvolgere</span> <span className="text-white">e</span> <span className="text-[var(--aqua-green)]">ispirare</span> <span className="text-white">il tuo pubblico. Creiamo</span> <span className="text-[var(--aqua-green)] font-bold">esperienze memorabili</span> <span className="text-white">che generano</span> <span className="text-[var(--aqua-green)] font-bold">risultati misurabili</span><span className="text-white">.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/documents/xp-lab-presentazione.pdf"
            download="XP-LAB Presentazione.pdf"
            className="bg-white hover:bg-gray-100 text-[var(--purple-deep)] font-heading font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg shadow-lg hover:shadow-xl interactive"
            data-component-name="MotionComponent"
          >
            SCARICA LA NOSTRA PRESENTAZIONE
          </a>
          
          <a 
            href="/contatti"
            className="bg-[var(--purple-light)]/20 hover:bg-[var(--purple-light)] text-[var(--aqua-green)] hover:text-white border-2 border-[var(--aqua-green)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive shadow-lg shadow-[var(--purple-deep)]/10"
            data-component-name="MotionComponent"
          >
            CONTATTACI
          </a>
        </div>
        
        <div className="mt-16">
          <motion.div
            className="mx-auto w-max"
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
      </div>
    </section>
  );
};

export default HeroSection;
