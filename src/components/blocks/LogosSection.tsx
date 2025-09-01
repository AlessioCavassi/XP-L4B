"use client";

import { Logos3 } from "./logos3";

// Percorsi locali delle immagini dei loghi
const partnerLogos = {
  heading: "Partner e Clienti",
  logos: [
    {
      id: "dilium-logo",
      description: "Dilium",
      image: "/images/logos/dilium-logo (1).png",
      className: "h-16 w-auto"
    },
    {
      id: "novo-esports",
      description: "NOVO Esports",
      image: "/images/logos/NOVO_Esports_2024_full_allmode.png",
      className: "h-16 w-auto"
    },
    {
      id: "levelup-mta",
      description: "LevelUP MTA",
      image: "/images/logos/LevelUP_MTA_LogoBianco.png",
      className: "h-16 w-auto bg-[var(--purple-deep)] p-2 rounded-lg"
    },
    {
      id: "fclex-logo",
      description: "FC Lex",
      image: "/images/logos/e_fclex_logo_negativo.png",
      className: "h-16 w-auto"
    },
    {
      id: "creator-service",
      description: "Creator Service",
      image: "/images/logos/logo-creator-service.png",
      className: "h-24 w-auto scale-125"
    }
  ]
};

const LogosSection = () => {
  return (
    <section id="partner" className="py-12 lg:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute inset-0 polygon-bg opacity-10"></div>
          
          {/* Cyber-styled title with gradient */}
          <div className="relative z-10 text-center mb-8">
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              {partnerLogos.heading}
            </h2>
          </div>
          
          {/* Modified Logos3 with cyberpunk styling */}
          <div className="relative mx-auto flex items-center justify-center">
            <Logos3 
              logos={partnerLogos.logos}
              heading=""
            />
            
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--purple-deep)] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--purple-deep)] to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
