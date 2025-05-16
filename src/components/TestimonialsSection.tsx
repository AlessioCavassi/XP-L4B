import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Andrea Colombo',
      position: 'HR Director',
      company: 'TechInnovate',
      content: 'La formazione ha rivoluzionato il nostro programma di onboarding. I nuovi assunti sono più coinvolti e i tempi di inserimento si sono ridotti del 35%. Un investimento che ha generato risultati immediati e misurabili.',
      rating: 5,
      image: '/testimonials/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Sofia Martinelli',
      position: 'Marketing Manager',
      company: 'RetailGroup',
      content: 'Il progetto di gamification per la nostra campagna di lancio ha superato ogni aspettativa. L&apos;engagement è stato 3 volte superiore rispetto alle campagne tradizionali e l&apos;app ha ricevuto recensioni entusiastiche dagli utenti.',
      rating: 5,
      image: '/testimonials/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Luca Ferretti',
      position: 'CEO',
      company: 'StartupInnovation',
      content: 'Abbiamo scelto XP-L4B per creare un&apos;esperienza AR per il nostro prodotto e il risultato è stato eccezionale. Il team ha saputo tradurre la nostra visione in un&apos;applicazione che ha impressionato i nostri clienti e rafforzato la nostra immagine innovativa.',
      rating: 4,
      image: '/testimonials/testimonial3.jpg'
    },
  ];

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 8000);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  // Handle next/prev
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--purple-light)]/10 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="polygon-bg opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[var(--purple-deep)] mb-4">COSA DICONO I NOSTRI CLIENTI</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--purple-deep)]/70 max-w-2xl mx-auto">
            Scopri le opinioni di chi ha già trasformato la propria strategia digitale con XP-L4B.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 overflow-hidden relative">
            <FaQuoteLeft className="text-[var(--purple-light)]/10 text-8xl absolute top-6 left-6" />
            
            <div className="min-h-[300px] flex items-center justify-center relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-[var(--purple-light)]/20">
                      <div 
                        className="w-full h-full"
                        style={{ 
                          backgroundColor: 'var(--purple-light)',
                          backgroundImage: 'url("/placeholder-avatar.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, index) => (
                          <FaStar 
                            key={index} 
                            className={index < testimonials[current].rating ? "text-[var(--aqua-green)]" : "text-[var(--gray)]"}
                          />
                        ))}
                      </div>
                      
                      <p className="text-[var(--purple-deep)]/80 italic mb-6">
                        &quot;{testimonials[current].content}&quot;
                      </p>
                      
                      <div>
                        <h4 className="text-xl font-heading text-[var(--purple-deep)]">{testimonials[current].name}</h4>
                        <p className="text-[var(--blue)]">
                          {testimonials[current].position}, {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === current ? 'bg-[var(--purple-deep)]' : 'bg-[var(--gray)]'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-[var(--purple-light)] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-[var(--purple-light)] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
