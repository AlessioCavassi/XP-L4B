'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FooterParticles = () => {
  const controls = useAnimation();
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animazione delle particelle
    const animateParticles = () => {
      if (particlesRef.current) {
        const particles = Array.from(particlesRef.current.children) as HTMLElement[];
        
        particles.forEach((particle, i) => {
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          particle.animate(
            [
              { transform: 'translate(0, 0) rotate(0deg)' },
              { 
                transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`,
              },
              { 
                transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`,
              },
              { transform: 'translate(0, 0) rotate(0deg)' },
            ],
            {
              duration: 15000 + Math.random() * 15000,
              iterations: Infinity,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }
          );
        });
      }
    };

    animateParticles();
  }, []);

  // Genera le particelle
  const particles = Array.from({ length: 15 }, (_, i) => {
    const size = Math.random() * 10 + 5;
    const opacity = Math.random() * 0.2 + 0.1;
    const color = i % 3 === 0 ? '#00B2A9' : i % 2 === 0 ? '#6D28D9' : '#2D2655';
    
    return (
      <div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          opacity: opacity,
          filter: 'blur(1px)',
        }}
      />
    );
  });

  return (
    <div 
      ref={particlesRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {particles}
    </div>
  );
};

export default FooterParticles;
