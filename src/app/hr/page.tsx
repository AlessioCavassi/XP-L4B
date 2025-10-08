"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';

export default function HRPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#000000',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
    }}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-32 relative bg-gradient-to-b from-[var(--purple-deep)] to-[var(--purple-dark)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                SOLUZIONI PER LE RISORSE UMANE
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trasformiamo la formazione e lo sviluppo del personale in esperienze coinvolgenti e memorabili.
              </p>
            </motion.div>
          </div>
          
          {/* Elementi decorativi */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        </section>
        
        {/* Sezione Carosello */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <ImageCarousel imageType="hr" />
            </div>
            <div className="text-center mt-8">
              <a 
                href="/contatti"
                className="px-8 py-3 bg-[var(--aqua-green)] text-[var(--purple-deep)] font-bold rounded-full hover:bg-white transition-colors duration-300 inline-block"
              >
                Contattaci per maggiori informazioni
              </a>
            </div>
          </div>
        </section>

        {/* Sezione Servizi */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-[var(--purple-deep)]">
              I Nostri Servizi per le Risorse Umane
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '👥',
                  title: 'Onboarding Interattivo',
                  description: 'Trasforma il processo di onboarding in un\'esperienza coinvolgente con moduli interattivi e gamificati.'
                },
                {
                  icon: '🎓',
                  title: 'Formazione Continua',
                  description: 'Corsi di aggiornamento con meccaniche di gioco per mantenere alta la motivazione e l\'apprendimento.'
                },
                {
                  icon: '📊',
                  title: 'Valutazione delle Competenze',
                  description: 'Strumenti innovativi per la mappatura e lo sviluppo delle competenze del personale.'
                },
                {
                  icon: '🤝',
                  title: 'Team Building',
                  description: 'Esperienze di team building immersive che rafforzano la collaborazione e lo spirito di squadra.'
                },
                {
                  icon: '🏆',
                  title: 'Programmi di Riconoscimento',
                  description: 'Sistemi di reward e riconoscimento per valorizzare i risultati e le performance.'
                },
                {
                  icon: '🔄',
                  title: 'Sviluppo Leadership',
                  description: 'Percorsi formativi per lo sviluppo delle competenze manageriali e di leadership.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-heading mb-3 text-[var(--purple-deep)]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
