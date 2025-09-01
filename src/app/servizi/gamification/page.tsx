'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaArrowRight, FaTrophy, FaUserAstronaut, FaChartLine } from 'react-icons/fa';

export default function GamificationPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#000000',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
    }}>
      <ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Gamification */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                GAMIFICATION
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Meccaniche di gioco applicate ai processi aziendali per aumentare motivazione e performance misurabile.
              </p>
            </motion.div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-[var(--purple-deep)] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        </section>
        
        {/* Contenuto principale */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-1 bg-gradient-to-br from-[var(--blue)] to-[var(--purple-light)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="inline-block mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(59, 130, 246, 0.25)' }}>
                      <FaLaptopCode size={60} className="text-[var(--blue)]" />
                    </div>
                    <h2 className="text-3xl font-heading mb-6">Game Mechanics</h2>
                    <p className="mb-6">
                      La Gamification integra dinamiche tipiche dei giochi per rendere più coinvolgenti processi formativi e lavorativi. Implementiamo meccaniche come punti, badge, classifiche e ricompense per stimolare la partecipazione attiva e il miglioramento continuo.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Sistemi di punti e ricompense</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Badge e achievement per competenze</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Classifiche e competizione costruttiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Percorsi e missioni personalizzate</span>
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
                className="bg-black p-8 rounded-xl shadow-xl border border-[var(--aqua-green)]/50"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-[var(--aqua-green)] mb-2">Risultati Misurabili</h3>
                  <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    La Gamification genera risultati concreti e misurabili, creando un impatto significativo su motivazione e performance.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--aqua-green)] mb-3">+83%</h4>
                    <p className="text-white/80 leading-relaxed">Aumento della motivazione dei dipendenti</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--aqua-green)] mb-3">+72%</h4>
                    <p className="text-white/80 leading-relaxed">Miglioramento della performance misurabile</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--aqua-green)] mb-3">-25%</h4>
                    <p className="text-white/80 leading-relaxed">Riduzione del turnover aziendale</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--aqua-green)] mb-3">+68%</h4>
                    <p className="text-white/80 leading-relaxed">Incremento di coinvolgimento nei processi formativi</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--aqua-green)]">
                  Ambiti di Applicazione
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  La Gamification può essere implementata efficacemente in diversi contesti aziendali
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--blue)]"
                >
                  <div className="w-16 h-16 bg-[var(--blue)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaUserAstronaut size={30} className="text-[var(--blue)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Onboarding</h3>
                  <p className="text-white/80 mb-4">
                    Trasformiamo il processo di inserimento dei nuovi dipendenti in un&apos;avventura coinvolgente con missioni progressive, ricompense e feedback immediato.
                  </p>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Accelerazione della curva di apprendimento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Riduzione del tempo di produttività</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Integrazione culturale facilitata</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--aqua-green)]"
                >
                  <div className="w-16 h-16 bg-[var(--aqua-green)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaTrophy size={30} className="text-[var(--aqua-green)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Corsi Formativi</h3>
                  <p className="text-white/80 mb-4">
                    Trasformiamo corsi e percorsi formativi in esperienze gamificate con livelli progressivi, sfide e riconoscimenti per competenze acquisite.
                  </p>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Miglioramento della ritenzione dei contenuti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Feedback continuo e celebrazione dei progressi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Applicazione pratica delle competenze</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--purple-light)]"
                >
                  <div className="w-16 h-16 bg-[var(--purple-light)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaChartLine size={30} className="text-[var(--purple-light)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Incentivazione Team</h3>
                  <p className="text-white/80 mb-4">
                    Sistemi di incentivazione basati su obiettivi, competizione positiva e riconoscimenti per valorizzare i risultati e favorire la collaborazione.
                  </p>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Visualizzazione tangibile dei progressi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Creazione di una cultura della performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Rafforzamento del senso di appartenenza</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-[var(--purple-deep)]/20 py-16 px-4 rounded-2xl mb-20 border border-[var(--aqua-green)]/20">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--aqua-green)]">
                    Case Study
                  </h2>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Scopri come abbiamo implementato con successo soluzioni di Gamification per i nostri clienti
                  </p>
                </motion.div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-[var(--purple-deep)]/30 p-6 rounded-xl shadow-lg border border-[var(--aqua-green)]/30">
                      <div className="aspect-w-16 aspect-h-9 mb-6 bg-black/50 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-[var(--purple-light)]/10">
                          <FaLaptopCode size={40} className="text-[var(--aqua-green)]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3 text-[var(--aqua-green)]">Onboarding Gamificato</h3>
                      <p className="text-white/80 mb-4">
                        Abbiamo creato un sistema di onboarding gamificato per una multinazionale, riducendo del 35% il tempo di inserimento e aumentando del 58% il coinvolgimento dei nuovi assunti.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/60">Multinazionale IT</span>
                        <Link href="/contatti" className="text-[var(--aqua-green)] hover:text-[var(--blue)] flex items-center">
                          Dettagli <FaArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-[var(--purple-deep)]/30 p-6 rounded-xl shadow-lg border border-[var(--aqua-green)]/30">
                      <div className="aspect-w-16 aspect-h-9 mb-6 bg-black/50 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-[var(--aqua-green)]/10">
                          <FaTrophy size={40} className="text-[var(--aqua-green)]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3 text-[var(--aqua-green)]">Formazione Gamificata</h3>
                      <p className="text-white/80 mb-4">
                        Percorso formativo trasformato in un&apos;avventura con livelli, sfide e ricompense, aumentando del 72% il completamento dei corsi e migliorando la ritenzione delle informazioni.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/60">Azienda Farmaceutica</span>
                        <Link href="/contatti" className="text-[var(--aqua-green)] hover:text-[var(--blue)] flex items-center">
                          Dettagli <FaArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-[var(--purple-deep)] to-black border-t border-[var(--aqua-green)]/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[var(--aqua-green)]">
                Pronto a trasformare la tua azienda con la Gamification?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti a implementare strategie di gamification efficaci.
              </p>
              <Link 
                href="/contatti" 
                className="inline-block bg-[var(--aqua-green)] text-black font-heading font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[var(--blue)] hover:text-white transition-all duration-300"
              >
                RICHIEDI CONSULENZA GRATUITA
              </Link>
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
