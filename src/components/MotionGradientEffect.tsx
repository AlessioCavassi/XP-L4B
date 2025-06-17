"use client";

import { useEffect } from 'react';

/**
 * Component that applies an interactive gradient effect to all elements
 * with the data-component-name="MotionComponent" attribute.
 * The gradient will respond to mouse movement and create a flowing effect.
 */
const MotionGradientEffect: React.FC = () => {
  useEffect(() => {
    // Get all elements with the MotionComponent attribute
    const motionElements = document.querySelectorAll('[data-component-name="MotionComponent"]');
    
    // Function to update the gradient position based on mouse position
    const updateGradient = (e: MouseEvent) => {
      motionElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        
        // Apply custom properties for the gradient position
        (el as HTMLElement).style.setProperty('--x', `${x}%`);
        (el as HTMLElement).style.setProperty('--y', `${y}%`);
      });
    };

    // Add the event listener for mousemove
    document.addEventListener('mousemove', updateGradient);
    
    // Initial background setup - remove any existing backgrounds
    motionElements.forEach((el) => {
      const element = el as HTMLElement;
      
      // Store original background if it exists
      const originalBg = element.style.background;
      const originalBoxShadow = element.style.boxShadow;
      
      if (originalBg) {
        element.setAttribute('data-original-bg', originalBg);
      }
      
      if (originalBoxShadow) {
        element.setAttribute('data-original-shadow', originalBoxShadow);
      }
      
      // NON MODIFICARE il background, per permettere al gradiente CSS di funzionare
      // element.style.background = 'transparent';
    });

    // Clean up on component unmount
    return () => {
      document.removeEventListener('mousemove', updateGradient);
      
      // Restore original backgrounds
      motionElements.forEach((el) => {
        const element = el as HTMLElement;
        const originalBg = element.getAttribute('data-original-bg');
        const originalShadow = element.getAttribute('data-original-shadow');
        
        if (originalBg) {
          element.style.background = originalBg;
        }
        
        if (originalShadow) {
          element.style.boxShadow = originalShadow;
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MotionGradientEffect;
