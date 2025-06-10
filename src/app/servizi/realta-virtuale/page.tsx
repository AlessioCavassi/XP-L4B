'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaGlasses, FaArrowRight } from 'react-icons/fa';

export default function RealtaVirtualePage() {
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
        {/* Hero Section per Realtà Virtuale */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                REALTÀ VIRTUALE
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Sviluppiamo esperienze immersive in Realtà Virtuale che trasformano l&apos;apprendimento e l&apos;engagement aziendale.
              </p>
            </motion.div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-[var(--purple-deep)] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        </section>
        
        {/* Contenuto principale */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* SafetyVR Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-1 bg-gradient-to-br from-[var(--aqua-green)] to-[var(--purple-light)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="inline-block p-4 rounded-full" style={{ backgroundColor: 'rgba(0, 255, 200, 0.25)' }}>
                        <FaVrCardboard size={60} style={{ color: 'var(--aqua-green)' }} />
                      </div>
                      <h3 className="text-2xl font-heading text-white">PRODOTTO VR</h3>
                    </div>
                    <h2 className="text-3xl font-heading mb-6">SafetyVR</h2>
                    <p className="mb-6">
                      SafetyVR è la nostra piattaforma progettata per rivoluzionare l&apos;apprendimento sulla sicurezza attraverso la Realtà Virtuale. Coinvolge i partecipanti in scenari realistici ma privi di rischi, dove possono esercitarsi e padroneggiare le procedure essenziali in un ambiente controllato.
                    </p>
                    
                    <h4 className="text-xl font-heading mb-3 text-[var(--aqua-green)]">Applicazioni principali</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span><strong>Industria:</strong> Scenari realistici e interattivi per la formazione sulla sicurezza in ambienti industriali</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span><strong>Formazione:</strong> Apprendimento pratico senza rischi con procedure di emergenza simulata</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span><strong>Analisi:</strong> Monitoraggio delle performance e raccolta dati sulle decisioni prese dagli utenti</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span><strong>Flessibilità:</strong> Personalizzazione del sistema per ogni settore e tipo di rischio</span>
                      </li>
                    </ul>
                    <p className="text-sm bg-white/10 p-3 rounded italic">
                      Le simulazioni in VR migliorano la ritenzione dell&apos;apprendimento del 76% rispetto ai metodi tradizionali e riducono gli errori nelle procedure operative del 40%.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Portal Gate Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-1 bg-gradient-to-br from-[var(--purple-light)] to-[var(--blue)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="inline-block p-4 rounded-full" style={{ backgroundColor: 'rgba(124, 58, 237, 0.25)' }}>
                        <FaGlasses size={60} style={{ color: 'var(--purple-light)' }} />
                      </div>
                      <h3 className="text-2xl font-heading text-white">PRODOTTO SPATIAL</h3>
                    </div>
                    <h2 className="text-3xl font-heading mb-6">Portal Gate</h2>
                    <p className="mb-6">
                      PortalGate è un&apos;app di Spatial Computing sviluppata e pubblicata da dilium, che consente agli utenti di esplorare mondi surreali e immersivi camminando attraverso portali digitali nel loro ambiente fisico. Disponibile su Apple Vision Pro, iOS e Android, permette di interagire e visualizzare contenuti 360° e vivere esperienze uniche.
                    </p>
                    
                    <h4 className="text-xl font-heading mb-3 text-[var(--purple-light)]">Casi d&apos;uso</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--purple-light)] mr-2">✓</span>
                        <span><strong>Didattica:</strong> Ambienti educativi e interattivi per un&apos;esperienza immersiva a 360° che porta l&apos;apprendimento a un livello superiore</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--purple-light)] mr-2">✓</span>
                        <span><strong>Eventi e turismo:</strong> Esplorazione di punti di interesse e luoghi culturali attraverso esperienze immersive a 360°</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--purple-light)] mr-2">✓</span>
                        <span><strong>Collaborazione Duomo di Milano:</strong> Esperienza esclusiva con la Veneranda Fabbrica del Duomo per esplorare guglie e cattedrale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--purple-light)] mr-2">✓</span>
                        <span><strong>Contenuti personalizzati:</strong> Realizzazione professionale di video 360° con partner di fiducia</span>
                      </li>
                    </ul>
                    <p className="text-sm bg-white/10 p-3 rounded italic">
                      In collaborazione con le istituzioni lombarde, organizziamo operazioni congiunte di marketing per presentare e promuovere i contenuti attraverso comunicati stampa condivisi.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Vantaggi della Realtà Virtuale</h3>
                <p className="text-gray-700 mb-6">
                  La Realtà Virtuale offre vantaggi unici che superano i metodi tradizionali, creando esperienze memorabili che migliorano significativamente i risultati:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">+76%</h4>
                    <p>Miglioramento della ritenzione rispetto ai metodi tradizionali</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">4x</h4>
                    <p>Più veloce dell&apos;apprendimento in aula</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">-40%</h4>
                    <p>Riduzione degli errori nelle procedure operative</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">275%</h4>
                    <p>Aumento della fiducia nell&apos;applicare nuove competenze</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[var(--purple-deep)] p-8 rounded-xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-heading mb-6">Applicazioni della Realtà Virtuale</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">Sicurezza sul Lavoro</h4>
                  <p className="text-white/90">Simulazione di scenari di emergenza e procedure di sicurezza in ambienti industriali e di cantiere.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">Sviluppo Competenze</h4>
                  <p className="text-white/90">Acquisizione di competenze tecniche attraverso l&apos;esercitazione pratica in ambienti virtuali.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">Onboarding</h4>
                  <p className="text-white/90">Familiarizzazione dei nuovi dipendenti con ambienti, processi e procedure aziendali.</p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contatti" className="bg-[var(--aqua-green)] text-black font-bold font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                    RICHIEDI UNA DEMO
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-20 bg-[var(--purple-light)]/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--purple-deep)]">
                Pronto a trasformare l&apos;esperienza dei tuoi team?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
                Scopri come la Realtà Virtuale può rivoluzionare i processi nella tua azienda e creare esperienze di apprendimento immersive.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/servizi" className="bg-[var(--purple-deep)] text-white font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                  ESPLORA ALTRI SERVIZI
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
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
        { name: 'Contatti', path: '/contatti' }
      ]} />
    </div>
  );
}
