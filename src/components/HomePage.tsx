'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ParticlesBackground from './ParticlesBackground';
import ParallaxLogo from './ParallaxLogo';
import LogosSection from './blocks/LogosSection';
import MobileNavSwipe from './MobileNavSwipe';
import MobileOptimizedPage from './MobileOptimizedPage';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Rileva se il dispositivo è mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  return (
    <div className="min-h-screen" style={{
      background: '#ffffff',
      backgroundAttachment: 'fixed',
      color: '#333333',
    }}>
      <CustomCursor />
      <ParallaxLogo />
      <Header />
      
      {/* Versione mobile ottimizzata - visibile solo su dispositivi mobili */}
      <MobileOptimizedPage />
      
      {/* Versione desktop - nascosta su dispositivi mobili */}
      <main className="hidden md:block">
        {/* Hero Section */}
        <section id="hero" className="py-20 relative">
          <div className="absolute inset-0">
            <ParticlesBackground sectionType="hero" />
          </div>
          <HeroSection />
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 relative" style={{ background: '#ffffff' }}>
          <div className="absolute inset-0">
            <ParticlesBackground sectionType="services" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--purple-deep)] to-[var(--purple-light)]">I Nostri Servizi</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Trasformiamo ogni attività in un&apos;esperienza coinvolgente attraverso tecnologie innovative e approcci gamificati.
              </p>
            </motion.div>
            <ServicesSection />
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0">
            <ParticlesBackground sectionType="about" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--purple-deep)] to-[var(--purple-light)]">Chi Siamo</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                Un team appassionato ed esperto di creatività, gaming, innovazione e capitale umano.
              </p>
              
              <div className="max-w-5xl mx-auto text-center mb-12">
                {/* Solid Color Text with h2 structure instead of h3 to avoid inheritance issues */}
                <h2 className="text-4xl font-bold mb-4 font-heading">
                  <span style={{ color: '#65BFB0', display: 'inline-block' }}>LA NOSTRA FILOSOFIA</span>
                </h2>
                
                <div className="cyber-line mb-8"></div>
                <p className="text-lg text-[var(--purple-deep)]/80 mb-8">
                  In XP-L4B crediamo che l&apos;apprendimento e il marketing siano esperienze che possono e devono essere coinvolgenti.
                </p>
              </div>
            </motion.div>
            
            <AboutSection />
          </div>
        </section>
        
        {/* Technologies Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <ParticlesBackground sectionType="logos" />
          </div>
          <LogosSection />
        </div>
        
        {/* Sezione Blog rimossa e spostata in una pagina dedicata */}
        
        {/* Contact CTA Section */}
        <section id="contatti" className="py-20 relative bg-gradient-to-br from-[var(--purple-deep)] to-[var(--purple-light)]">
          <div className="absolute inset-0">
            <ParticlesBackground sectionType="contact" />
          </div>
          <div className="container mx-auto px-4">
            <ContactCTA />
          </div>
        </section>
      </main>
      
      <Footer className={isMobile ? 'mt-0' : ''} />
      
      {/* Navigazione mobile con swipe */}
      <MobileNavSwipe navItems={[
        { name: 'Home', path: '/' },
        { name: 'Servizi', path: '/servizi' },
        { name: 'Chi Siamo', path: '/chi-siamo' },
        // { name: 'Blog', path: '/blog' }, // Temporaneamente disabilitato
        { name: 'Contatti', path: '/contatti' }
      ]} />
    </div>
  );
};

export default HomePage;
