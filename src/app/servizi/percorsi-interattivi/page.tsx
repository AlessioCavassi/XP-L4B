'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaArrowRight, FaBrain, FaUsers, FaRocket } from 'react-icons/fa';

export default function PercorsiInterattiviPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#000000',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
    }}>
      <ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Percorsi Interattivi */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                PERCORSI INTERATTIVI
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Percorsi di apprendimento su misura che integrano tecnologie immersive e metodologie innovative per sviluppare competenze chiave.
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
                <div className="p-1 bg-gradient-to-br from-[var(--blue)] to-[var(--purple-deep)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="inline-block mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(59, 130, 246, 0.25)' }}>
                      <FaChalkboardTeacher size={60} className="text-[var(--blue)]" />
                    </div>
                    <h2 className="text-3xl font-heading mb-6">Reskilling e Upskilling</h2>
                    <p className="mb-6 text-white/90">
                      Analizziamo il mercato del lavoro e delle competenze per creare percorsi personalizzati di reskilling e upskilling che preparano i team alle sfide del futuro, integrando tecnologie immersive e metodologie coinvolgenti.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Analisi delle competenze future</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Percorsi personalizzati</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Tecnologie immersive integrate</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] font-bold mr-3 text-xl">✓</span>
                        <span className="text-white/90">Monitoraggio continuo dei progressi</span>
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
                  <h3 className="text-2xl font-heading font-bold text-[var(--aqua-green)] mb-2">Il nostro approccio</h3>
                  <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    Sviluppiamo percorsi interattivi che combinano diverse metodologie per massimizzare l&apos;apprendimento e la ritenzione delle competenze.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-[var(--aqua-green)] mb-3">1. Analisi e Mappatura</h4>
                    <p className="text-white/80 leading-relaxed">Identifichiamo le competenze attuali e future necessarie per il successo aziendale</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-[var(--aqua-green)] mb-3">2. Progettazione Personalizzata</h4>
                    <p className="text-white/80 leading-relaxed">Creiamo percorsi su misura che integrano tecnologie immersive e metodologie interattive</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-[var(--aqua-green)] mb-3">3. Implementazione Coinvolgente</h4>
                    <p className="text-white/80 leading-relaxed">Realizziamo sessioni ad alto impatto con esperienze pratiche e gamificate</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--purple-deep)]/50 to-black p-6 rounded-xl border border-[var(--aqua-green)]/30 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-heading font-bold text-[var(--aqua-green)] mb-3">4. Misurazione dei Risultati</h4>
                    <p className="text-white/80 leading-relaxed">Monitoriamo l&apos;apprendimento e l&apos;applicazione pratica delle competenze</p>
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
              <h3 className="text-2xl font-heading mb-8 text-center text-[var(--aqua-green)]">Competenze che Sviluppiamo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--blue)]">
                  <div className="w-16 h-16 bg-[var(--blue)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaBrain size={30} className="text-[var(--blue)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Competenze Cognitive</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span className="text-white/80">AI Prompting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span className="text-white/80">Problem Solving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span className="text-white/80">Pensiero Laterale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span className="text-white/80">Creatività</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span className="text-white/80">Time Management</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--aqua-green)]">
                  <div className="w-16 h-16 bg-[var(--aqua-green)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaUsers size={30} className="text-[var(--aqua-green)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Competenze Relazionali</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span className="text-white/80">Comunicazione efficace</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span className="text-white/80">Team Work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span className="text-white/80">Leadership</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span className="text-white/80">Intelligenza emotiva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span className="text-white/80">Gestione dei conflitti</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-lg border-t-4 border-[var(--purple-light)]">
                  <div className="w-16 h-16 bg-[var(--purple-light)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaRocket size={30} className="text-[var(--purple-light)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--aqua-green)]">Competenze Organizzative</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span className="text-white/80">Employer Branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span className="text-white/80">Employee Engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span className="text-white/80">Senso di appartenenza</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span className="text-white/80">Cultura aziendale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span className="text-white/80">Change Management</span>
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
              className="bg-[var(--purple-deep)] p-8 rounded-xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-heading mb-6 text-center">Innovazione per il futuro del lavoro</h3>
              <p className="text-center text-white/80 max-w-3xl mx-auto mb-10">
                Il 70% degli investimenti in metodi di apprendimento tradizionali risulta inefficiente. I nostri percorsi interattivi rivoluzionano lo sviluppo delle competenze con tecnologie immersive e metodologie coinvolgenti.
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
        <section className="py-20 bg-gradient-to-br from-[var(--purple-deep)] to-black border-t border-[var(--aqua-green)]/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-[var(--aqua-green)]">
                Pronti a trasformare le competenze del vostro team?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Scopri come i nostri percorsi interattivi possono potenziare le competenze chiave nella tua organizzazione
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/servizi" className="bg-[var(--aqua-green)] text-black font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg hover:bg-[var(--blue)] hover:text-white transition-all duration-300">
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
