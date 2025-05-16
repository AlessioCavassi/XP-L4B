"use client";

import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import GameEntrance from "../components/GameEntrance";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  // State per controllare se l'utente ha completato l'esperienza di gioco o l'ha saltata
  const [gameCompleted, setGameCompleted] = useState(false);
  
  // Funzione chiamata quando il gioco è completato o saltato
  const handleGameComplete = () => {
    setGameCompleted(true);
    
    // Attiva il play mode di default quando si completa il gioco
    document.body.classList.add('play-mode');
  };
  
  // This useEffect will handle any initialization needed after mount
  useEffect(() => {
    // Initialize reveal animations
    const initScrollReveal = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
      });
    };

    if (gameCompleted) {
      initScrollReveal();
    }

    return () => {
      // Cleanup if needed
    };
  }, [gameCompleted]);

  return (
    <>
      {/* Game Entrance Experience - mostrata solo finché non è completata */}
      {!gameCompleted && (
        <GameEntrance onComplete={handleGameComplete} />
      )}
      
      {/* Contenuto principale del sito - mostrato solo dopo completamento del gioco */}
      {gameCompleted && (
        <Layout>
          <div id="top" className="pt-[var(--header-height)]">
            {/* Main sections */}
            <HeroSection />
            <ServicesSection />
            <CaseStudiesSection />
            <AboutSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
          </div>
        </Layout>
      )}
    </>
  );
}
