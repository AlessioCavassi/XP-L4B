'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaArrowRight, FaTrophy, FaUserAstronaut, FaChartLine } from 'react-icons/fa';

export default function GamificationPage() {
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
        <section className="py-20 bg-white">
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
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span>Sistemi di punti e ricompense</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span>Badge e achievement per competenze</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span>Classifiche e competizione costruttiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span>Percorsi e missioni personalizzate</span>
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
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Risultati Misurabili</h3>
                <p className="mb-6 text-gray-700">
                  La Gamification genera risultati concreti e misurabili, creando un impatto significativo su motivazione e performance:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">+83%</h4>
                    <p>Aumento della motivazione dei dipendenti</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">+72%</h4>
                    <p>Miglioramento della performance misurabile</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">-25%</h4>
                    <p>Riduzione del turnover aziendale</p>
                  </div>
                  <div className="bg-[var(--purple-light)]/10 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">+68%</h4>
                    <p>Incremento di coinvolgimento nei processi formativi</p>
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
                <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--purple-deep)]">
                  Ambiti di Applicazione
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  La Gamification può essere implementata efficacemente in diversi contesti aziendali
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--blue)]"
                >
                  <div className="w-16 h-16 bg-[var(--blue)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaUserAstronaut size={30} className="text-[var(--blue)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Onboarding</h3>
                  <p className="text-gray-700 mb-4">
                    Trasformiamo il processo di inserimento dei nuovi dipendenti in un&apos;avventura coinvolgente con missioni progressive, ricompense e feedback immediato.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
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
                  className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--aqua-green)]"
                >
                  <div className="w-16 h-16 bg-[var(--aqua-green)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaTrophy size={30} className="text-[var(--aqua-green)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Corsi Formativi</h3>
                  <p className="text-gray-700 mb-4">
                    Trasformiamo corsi e percorsi formativi in esperienze gamificate con livelli progressivi, sfide e riconoscimenti per competenze acquisite.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
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
                  className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--purple-light)]"
                >
                  <div className="w-16 h-16 bg-[var(--purple-light)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaChartLine size={30} className="text-[var(--purple-light)]" />
                  </div>
                  <h3 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Incentivazione Team</h3>
                  <p className="text-gray-700 mb-4">
                    Sistemi di incentivazione basati su obiettivi, competizione positiva e riconoscimenti per valorizzare i risultati e favorire la collaborazione.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
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
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[var(--purple-deep)] p-8 rounded-xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-heading mb-6 text-center">Pronti a Gamificare la Vostra Azienda?</h3>
              <p className="text-center text-white/80 max-w-3xl mx-auto mb-10">
                Scoprite come la Gamification può trasformare la vostra azienda, aumentando motivazione, produttività e coinvolgimento. Contattateci per una consulenza personalizzata.
              </p>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contatti" className="bg-[var(--blue)] text-white font-bold font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                    RICHIEDI UNA CONSULENZA
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
                Esplora i nostri altri servizi
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
                Scopri la nostra gamma completa di soluzioni innovative per il coinvolgimento e lo sviluppo delle competenze
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/servizi" className="bg-[var(--purple-deep)] text-white font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                  TUTTI I SERVIZI
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
