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
    }
  ]
};

const LogosSection = () => {
  return (
    <section id="partner" className="py-12 lg:py-24 bg-[var(--purple-deep)] text-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute inset-0 polygon-bg opacity-10"></div>
          
          {/* Cyber-styled title with gradient */}
          <div className="relative z-10 text-center mb-8">
            <h2 className="font-heading inline-block text-4xl md:text-5xl relative z-10 p-1 cyber-glitch">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--aqua-green)] via-[var(--blue)] to-[var(--purple-light)]">
                  {partnerLogos.heading}
                </span>
                <span className="absolute -inset-1 bg-[var(--purple-deep)]/10 skew-y-3 -skew-x-3 rounded blur-xl z-[-1]"></span>
              </span>
            </h2>
            <div className="cyber-line mt-4"></div>
          </div>
          
          {/* Modified Logos3 with cyberpunk styling */}
          <div className="relative mx-auto flex items-center justify-center">
            <Logos3 
              logos={partnerLogos.logos}
              heading=""
            />
            
            {/* Cyberpunk style overlays */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--purple-deep)] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--purple-deep)] to-transparent z-10"></div>
            <div className="absolute top-0 left-0 w-24 h-24 border border-[var(--aqua-green)]/20 rounded-tl-lg -translate-x-6 -translate-y-6 z-0 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border border-[var(--blue)]/20 rounded-br-lg translate-x-6 translate-y-6 z-0 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
