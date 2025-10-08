"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Simple implementation of wrap function since we don't need popmotion just for this
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Image configuration
const getImages = (type: string = 'hr') => {
  if (type === 'marketing') {
    return Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      src: `/documents/MARKETING/MARKETING${i + 1}.jpg`,
      alt: `Marketing Slide ${i + 1}`
    }));
  }
  
  // Default to HR images
  return Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/documents/HR/HR${i + 1}.JPG`,
    alt: `HR Slide ${i + 1}`
  }));
};

interface ImageCarouselProps {
  imageType?: 'hr' | 'marketing';
}

// Varianze per l'animazione delle slide
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageType = 'hr' }) => {
  const images = getImages(imageType);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);

  // L'indice dell'immagine viene calcolato con `wrap` per creare un loop infinito
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Autoplay intelligente
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovering) {
      interval = setInterval(() => {
        paginate(1); // Va alla slide successiva
      }, 5000); // Cambia ogni 5 secondi
    }
    return () => clearInterval(interval);
  }, [page, isHovering]); // Si riattiva quando cambia la pagina o lo stato di hover

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-video bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            // Funzionalità di Drag/Swipe
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={() => setIsHovering(true)} // Pausa autoplay durante il drag
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
              // Dopo il drag, l'autoplay riprenderà grazie a onMouseLeave se il mouse non è sopra
            }}
          />
        </AnimatePresence>

        {/* Freccia Sinistra */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all z-10 opacity-80 hover:opacity-100"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        {/* Freccia Destra */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all z-10 opacity-80 hover:opacity-100"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Indicatori di Slide (Pallini) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              // Calcola la direzione per un'animazione corretta
              const newDirection = i > imageIndex ? 1 : -1;
              setPage([i, newDirection]);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              i === imageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;