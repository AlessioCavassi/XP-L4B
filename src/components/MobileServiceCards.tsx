import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  url?: string; // Aggiungo l'url opzionale per la navigazione
}

interface MobileServiceCardsProps {
  services: Service[];
}

const MobileServiceCards: React.FC<MobileServiceCardsProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const nextCard = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop back to first card
      setCurrentIndex(0);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      // Loop to last card
      setCurrentIndex(services.length - 1);
    }
  };

  return (
    <div className="relative w-full py-6">
      <motion.div 
        ref={carousel}
        className="overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: -currentIndex * (window.innerWidth - 64) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex cursor-grab"
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 && currentIndex < services.length - 1) {
              nextCard();
            } else if (info.offset.x > 50 && currentIndex > 0) {
              prevCard();
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`min-w-[calc(100vw-4rem)] p-5 m-2 rounded-xl shadow-xl border border-[var(--aqua-green)] ${
                service.id === currentIndex + 1 
                  ? 'scale-100 opacity-100' 
                  : 'scale-95 opacity-90'
              }`}
              style={{
                background: `linear-gradient(135deg, rgba(45, 38, 85, 0.95), rgba(45, 38, 85, 0.98))`,
                borderLeft: `4px solid ${service.color}`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(5px)',
                cursor: 'pointer'
              }}
              whileTap={{ scale: 0.98 }}
              data-component-name="MotionComponent"
              onClick={() => {
                // Utilizziamo direttamente la proprietà URL dal servizio 
                const targetUrl = service.url || '/';
                window.location.href = targetUrl;
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full" 
                      style={{ backgroundColor: `${service.color}90` }}>
                    <span className="text-2xl text-white" role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold ml-3 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                </div>
                <div className="text-white">
                  <span 
                    className="mobile-service-desc font-body text-sm font-medium flex-grow drop-shadow-lg leading-relaxed text-white" 
                    style={{ 
                      color: 'white',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    {service.description}
                  </span>
                </div>
                
                <motion.button
                  className="mt-4 self-end px-4 py-2 bg-[var(--aqua-green)] text-[var(--purple-deep)] rounded-full text-sm font-bold font-heading shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 1px 1px rgba(255,255,255,0.5)',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }}
                  data-component-name="LinkComponent"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'var(--blue)',
                    color: 'white'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Scopri di più
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Controls */}
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-1">
          {services.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? 'bg-[var(--aqua-green)]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={prevCard}
            className="w-8 h-8 bg-[var(--purple-light)]/10 rounded-full flex items-center justify-center"
          >
            <FaArrowLeft className="text-[var(--purple-deep)]" size={12} />
          </button>
          <button
            onClick={nextCard}
            className="w-8 h-8 bg-[var(--aqua-green)]/20 rounded-full flex items-center justify-center"
          >
            <FaArrowRight className="text-[var(--purple-deep)]" size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceCards;
