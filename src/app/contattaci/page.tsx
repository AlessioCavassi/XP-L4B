"use client";

import React, { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import ParticlesBackground from '@/components/ParticlesBackground';

export const metadata = {
  title: 'Contattaci | XP-L4B',
  description: 'Contatta il team di XP-L4B per scoprire come possiamo trasformare le tue attività in esperienze coinvolgenti attraverso gamification, VR e AR.',
  keywords: 'contatti, XP-L4B, gamification, realtà virtuale, realtà aumentata',
};

export default function ContactPage() {
  // Inietta uno stile globale direttamente nel documento per forzare i colori
  useEffect(() => {
    // Crea un elemento style
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      /* Forza tutti i testi a essere bianchi nella pagina contatti */
      #contatti p, 
      #contatti div p,
      #contatti div label,
      section p {
        color: white !important;
      }
      
      #contatti h3, 
      #contatti h4 {
        color: white !important;
      }
      
      /* Forza il pulsante a essere nero */
      #contatti button[type="submit"] {
        color: black !important;
        font-weight: bold !important;
      }
    `;
    
    // Aggiungi lo stile al documento
    document.head.appendChild(styleEl);
    
    // Pulisci quando il componente viene smontato
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return (
    <>
      {/* Stile globale con alta specificità per forzare i colori corretti in tutta la pagina contatti */}
      <style jsx global>{`
        /* Forza i colori del testo nella sezione contatti */
        .text-white\\/80, 
        .text-white\\/90,
        #contatti p, 
        #contatti div p,
        section p {
          color: #ffffff !important;
        }
        
        h3, h4, .font-heading {
          color: #ffffff !important;
        }
        
        /* Forza lo stile del pulsante di invio */
        button[type="submit"],
        .bg-\\[var\\(--aqua-green\\)\\] {
          color: #000000 !important;
          font-weight: bold !important;
          text-shadow: none !important;
        }
      `}</style>
      
      <div className="bg-[var(--purple-deep)] min-h-screen">
        {/* Particelle di sfondo per l'intera pagina */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <ParticlesBackground />
        </div>
        
        <ContactSection />
      </div>
    </>
  );
}
