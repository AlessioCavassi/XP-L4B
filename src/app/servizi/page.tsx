'use client';

import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import { motion } from 'framer-motion';

export default function ServiziPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#ffffff',
      backgroundAttachment: 'fixed',
      color: '#333333',
    }}>
      <CustomCursor />
      <ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Servizi */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                I NOSTRI SERVIZI
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trasformiamo ogni attività in un&apos;esperienza coinvolgente attraverso tecnologie innovative e approcci gamificati.
              </p>
            </motion.div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-[var(--purple-deep)] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        </section>
        
        {/* Servizi Section */}
        <section className="py-20" style={{ background: '#ffffff' }}>
          <div className="container mx-auto px-4 relative">
            <ServicesSection />
          </div>
        </section>
        
        {/* Approfondimento Servizi */}
        <section className="py-20 bg-[var(--purple-light)]/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Sviluppo Competenze con Gamification</h3>
                <p className="mb-4 text-gray-700">
                  L&apos;83% dei dipendenti che partecipano ad attività ludiche sono più motivati. I nostri percorsi di game-based learning aumentano il coinvolgimento e la produttività in azienda del 50-60%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>Sviluppo di competenze trasversali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>Employer Branding e Employee engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>Team building efficace</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Tecnologie VR/AR</h3>
                <p className="mb-4 text-gray-700">
                  Soluzioni immersive per apprendimento, marketing e customer experience. Le nostre tecnologie includono:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>SafetyVR e Spatial Plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>Object Recognition e 3DToMe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>Spatial Assistance e Portal Gate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--aqua-green)] mr-2">✓</span>
                    <span>AR Studio e Spatial Support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-white p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Eventi e Tornei Gaming</h3>
              <p className="mb-4 text-gray-700">
                Creiamo esperienze memorabili attraverso eventi e tornei gaming che aumentano la motivazione e il coinvolgimento dei team aziendali.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Team Building</h4>
                  <p>Rafforza le relazioni tra colleghi attraverso sfide collaborative in ambiente virtuale.</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Competizioni Aziendali</h4>
                  <p>Stimola lo spirito competitivo e premia le performance attraverso tornei personalizzati.</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Eventi Corporate</h4>
                  <p>Arricchisci meeting, conferenze e convention con esperienze interattive memorabili.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
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
}
