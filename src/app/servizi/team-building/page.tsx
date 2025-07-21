'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUsers, FaArrowRight, FaPuzzlePiece, FaHandshake, FaRegLightbulb } from 'react-icons/fa';

export default function TeamBuildingPage() {
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
        {/* Hero Section per Team Building */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                TEAM BUILDING DIGITALE
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ambienti virtuali condivisi per team remoti o ibridi, ideali per kick-off progetti, brainstorming e collaborative problem solving.
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-1 bg-gradient-to-br from-[var(--aqua-green)] to-[var(--blue)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="inline-block mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(0, 255, 200, 0.25)' }}>
                      <FaUsers size={60} className="text-[var(--aqua-green)]" />
                    </div>
                    <h2 className="text-3xl font-heading mb-6">Spatial Assistance</h2>
                    <p className="mb-6">
                      Spatial Assistance crea ambienti virtuali condivisi per team remoti o ibridi, permettendo una collaborazione naturale e coinvolgente. Questi spazi virtuali favoriscono il senso di appartenenza e la coesione del team, anche a distanza.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Riduzione del 30% nel turnover dei dipendenti</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Aumento del 45% nella produttività dei team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Miglioramento della comunicazione interna</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Maggiore coinvolgimento nelle attività di gruppo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl border border-[var(--purple-light)]/20"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-[var(--purple-deep)] mb-2">Perché scegliere il Team Building Digitale?</h3>
                  <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    Il Team Building Digitale offre vantaggi unici rispetto alle attività tradizionali, specialmente in un'era di lavoro ibrido e remoto:
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-[var(--aqua-green)]/10 p-3 rounded-full mr-4">
                        <FaPuzzlePiece className="text-[var(--aqua-green)]" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-[var(--purple-deep)] mb-2">Flessibilità e Inclusività</h4>
                        <p className="text-[#2D2655] leading-relaxed">Permette la partecipazione di team distribuiti geograficamente, senza limitazioni logistiche</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-[var(--aqua-green)]/10 p-3 rounded-full mr-4">
                        <FaHandshake className="text-[var(--aqua-green)]" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-[var(--purple-deep)] mb-2">Esperienze Immersive</h4>
                        <p className="text-[#2D2655] leading-relaxed">Crea esperienze coinvolgenti che stimolano l'interazione naturale tra i partecipanti</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="bg-[var(--aqua-green)]/10 p-3 rounded-full mr-4">
                        <FaRegLightbulb className="text-[var(--aqua-green)]" size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-[var(--purple-deep)] mb-2">Misurazione Risultati</h4>
                        <p className="text-[#2D2655] leading-relaxed">Offre metriche tangibili per valutare l'efficacia delle attività e l'evoluzione del team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-heading font-bold text-[var(--purple-deep)] mb-2">Attività di Team Building Digitale</h3>
                <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-[var(--purple-deep)] to-[#1e1a40] p-8 rounded-xl shadow-lg text-white border border-[var(--purple-light)]/20 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-heading font-bold mb-4 border-b border-white/20 pb-4">Kick-off Progetti</h4>
                  <p className="mb-6 text-white/90">
                    Iniziare un nuovo progetto con il piede giusto è fondamentale. I nostri ambienti virtuali facilitano sessioni di kick-off coinvolgenti dove ogni membro può:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Comprendere obiettivi e visione del progetto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Definire ruoli e responsabilità in modo interattivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Sviluppare un senso di appartenenza al team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Creare una roadmap condivisa e visualizzata</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[var(--purple-deep)] to-[#1e1a40] p-8 rounded-xl shadow-lg text-white border border-[var(--purple-light)]/20 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-heading font-bold mb-4 border-b border-white/20 pb-4">Brainstorming Collaborativo</h4>
                  <p className="mb-6 text-white/90">
                    Le sessioni di brainstorming nei nostri spazi virtuali superano le limitazioni dei tradizionali incontri online, offrendo:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Lavagne virtuali condivise e interattive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Possibilità di creare e manipolare oggetti 3D</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Tecniche di ideazione guidate e facilitate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Sistemi di votazione e prioritizzazione delle idee</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[var(--purple-deep)] to-[#1e1a40] p-8 rounded-xl shadow-lg text-white border border-[var(--purple-light)]/20 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-heading font-bold mb-4 border-b border-white/20 pb-4">Problem Solving Collaborativo</h4>
                  <p className="mb-6 text-white/90">
                    Affrontare sfide complesse richiede una collaborazione efficace. I nostri ambienti virtuali facilitano:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Simulazioni realistiche dei problemi da risolvere</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Metodologie strutturate di problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Esercizi di pensiero laterale e creativo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] font-bold mr-3 mt-1">•</span>
                      <span className="text-white/90">Feedback immediato sulle soluzioni proposte</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[var(--aqua-green)] p-8 rounded-xl shadow-xl text-black"
            >
              <h3 className="text-2xl font-heading mb-6 text-center">Rafforza il tuo team con esperienze coinvolgenti</h3>
              <p className="text-center max-w-3xl mx-auto mb-10 font-medium">
                Solo il 5% delle persone si sentono realmente coinvolte sul lavoro in Italia. Il Team Building Digitale può cambiare questa statistica per la tua azienda.
              </p>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contatti" className="bg-[var(--purple-deep)] text-white font-bold font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
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
                Scopri come trasformare il tuo team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
                Esplora i nostri altri servizi e scopri come possiamo aiutarti a creare un ambiente di lavoro più coinvolgente ed efficace
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
