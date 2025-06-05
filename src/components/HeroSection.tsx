import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-transparent pt-56 md:pt-0">
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mt-40 md:mt-0">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-heading mb-6 text-[var(--aqua-green)] drop-shadow-lg bg-[var(--purple-deep)] p-4 rounded-lg shadow-md border border-[var(--aqua-green)]/30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-component-name="MotionComponent"
        >
          <span className="text-white">TRASFORMIAMO</span> OGNI ATTIVITÀ IN <span className="text-white">UN&apos;ESPERIENZA</span> <span className="text-white">COINVOLGENTE</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-medium text-white mb-4 max-w-2xl mx-auto leading-relaxed bg-[var(--purple-deep)] p-4 rounded-lg shadow-lg border border-[var(--aqua-green)]/30 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-bold text-[var(--aqua-green)] text-xl md:text-2xl drop-shadow-md">La nostra missione:</span> Elevare il <span className="text-[var(--aqua-green)] font-bold">potenziale umano</span> nelle organizzazioni attraverso l&apos;<span className="text-[var(--aqua-green)] font-bold">innovazione digitale</span> e il <span className="text-[var(--aqua-green)] font-bold">potere del gioco</span>.
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-white font-medium mb-8 max-w-2xl mx-auto leading-relaxed border-l-4 border-[var(--aqua-green)] pl-4 p-4 bg-[var(--purple-deep)] rounded-r-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Siamo esperti nella creazione di <span className="text-[var(--aqua-green)] font-bold">esperienze coinvolgenti</span> che fondono <span className="text-[var(--aqua-green)] font-bold">gamification</span>, <span className="text-[var(--aqua-green)] font-bold">realtà virtuale</span> e <span className="text-[var(--aqua-green)] font-bold">intelligenza artificiale</span> per <span className="text-[var(--aqua-green)]">formare</span>, <span className="text-[var(--aqua-green)]">coinvolgere</span> e <span className="text-[var(--aqua-green)]">ispirare</span> il tuo pubblico. Creiamo <span className="text-[var(--aqua-green)] font-bold">esperienze memorabili</span> che generano <span className="text-[var(--aqua-green)] font-bold">risultati misurabili</span>.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="/documents/Presentazione amministrazione sessioni e VR.pdf"
            download
            className="bg-white hover:bg-gray-100 text-[var(--purple-deep)] font-heading font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg shadow-lg hover:shadow-xl interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-component-name="MotionComponent"
          >
            SCARICA LA NOSTRA PRESENTAZIONE
          </motion.a>
          
          <motion.a 
            href="/contatti"
            className="bg-[var(--purple-light)]/20 hover:bg-[var(--purple-light)] text-[var(--aqua-green)] hover:text-white border-2 border-[var(--aqua-green)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive shadow-lg shadow-[var(--purple-deep)]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-component-name="MotionComponent"
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
