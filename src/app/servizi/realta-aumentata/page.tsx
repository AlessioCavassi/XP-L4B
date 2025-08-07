'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGlasses, FaArrowRight } from 'react-icons/fa';

export default function RealtaAumentataPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#ffffff',
      backgroundAttachment: 'fixed',
      color: '#333333',
    }}>
<ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Realtà Aumentata */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                REALTÀ AUMENTATA
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Soluzioni innovative in AR che arricchiscono l&apos;ambiente fisico con overlay informativi per apprendimento, supporto e marketing.
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
                <div className="p-1 bg-gradient-to-br from-[var(--purple-light)] to-[var(--aqua-green)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="inline-block mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(161, 99, 247, 0.25)' }}>
                      <FaGlasses size={60} className="text-[var(--purple-light)]" />
                    </div>
                    <h2 className="text-3xl font-heading mb-6 text-white">Le Nostre Tecnologie AR</h2>
                    <p className="mb-6 text-white">
                      Sviluppiamo soluzioni innovative in Realtà Aumentata che trasformano il modo in cui interagiamo con l&apos;ambiente circostante, aggiungendo layer informativi contestuali e interattivi.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white"><strong className="text-[var(--aqua-green)]">3DToMe:</strong> Modelli 3D contestuali</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white"><strong className="text-[var(--aqua-green)]">ARStudio:</strong> Creazione contenuti aumentati</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white"><strong className="text-[var(--aqua-green)]">Object Recognition:</strong> Riconoscimento intelligente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white"><strong className="text-[var(--aqua-green)]">Spatial Support:</strong> Assistenza tecnica remota</span>
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
                  <h3 className="text-2xl font-heading font-bold text-[var(--purple-deep)] mb-2">Vantaggi della Realtà Aumentata</h3>
                  <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
                  <p className="text-[var(--purple-light)] max-w-2xl mx-auto">
                    Le soluzioni in Realtà Aumentata offrono vantaggi misurabili per le aziende che puntano all&apos;innovazione e all&apos;efficienza.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--purple-deep)] mb-3">+300%</h4>
                    <p className="text-[#2D2655] leading-relaxed">Aumento dell&apos;engagement rispetto a metodi tradizionali</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--purple-deep)] mb-3">-60%</h4>
                    <p className="text-[#2D2655] leading-relaxed">Riduzione dei tempi di apprendimento tecnico</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--purple-deep)] mb-3">+45%</h4>
                    <p className="text-[#2D2655] leading-relaxed">Miglioramento nella ritenzione delle informazioni</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-3xl font-heading font-bold text-[var(--purple-deep)] mb-3">7x</h4>
                    <p className="text-[#2D2655] leading-relaxed">Maggiore ROI rispetto ai metodi tradizionali</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[var(--purple-deep)] to-[#1e1a3a] p-8 rounded-xl shadow-xl text-white border border-[var(--purple-light)]/20"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Applicazioni della Realtà Aumentata</h3>
                <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
                <p className="text-white/80 max-w-3xl mx-auto">
                  Scopri come la Realtà Aumentata sta trasformando i settori industriali con soluzioni innovative e misurabili.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-xl font-heading font-medium text-white mb-3">Manutenzione Industriale</h4>
                  <p className="text-white/80 leading-relaxed">Guide passo-passo in AR per operazioni di manutenzione complesse, riducendo errori e tempi di intervento.</p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-xl font-heading font-medium text-white mb-3">Training Tecnico</h4>
                  <p className="text-white/80 leading-relaxed">Apprendimento pratico con overlay informativi contestuali che guidano l&apos;acquisizione di competenze sul campo.</p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-xl font-heading font-medium text-white mb-3">Marketing & Eventi</h4>
                  <p className="text-white/80 leading-relaxed">Esperienze immersive per eventi, fiere e campagne di marketing con contenuti interattivi che aumentano il coinvolgimento.</p>
                </div>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link href="/contatti" className="bg-[var(--aqua-green)] hover:bg-[#4daea0] text-[var(--purple-deep)] font-bold font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg transition-colors duration-300">
                    RICHIEDI UNA DIMOSTRAZIONE
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Case Study */}
        <section className="py-20 bg-gradient-to-b from-[var(--purple-light)]/5 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-[var(--purple-light)]/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-[var(--purple-deep)] mb-2">Case Study: Object Recognition</h3>
                <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <div className="space-y-6">
                    <p className="text-[#2D2655] leading-relaxed">
                      Un&apos;azienda manifatturiera leader nel settore automobilistico ha implementato la nostra soluzione Object Recognition per supportare i tecnici durante le procedure di manutenzione complesse.
                    </p>
                    <p className="text-[#2D2655] leading-relaxed">
                      I tecnici, equipaggiati con dispositivi AR, possono semplicemente inquadrare i componenti da manutenere per ricevere immediatamente istruzioni dettagliate, video tutorial e modelli 3D sovrapposti all&apos;oggetto reale.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10">
                      <h4 className="font-heading font-medium text-[var(--purple-deep)] mb-3 text-lg">Sfida</h4>
                      <p className="text-[#2D2655] leading-relaxed">Ridurre il tempo di apprendimento dei nuovi tecnici e migliorare la precisione nelle operazioni di manutenzione.</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-[var(--purple-light)]/5 p-6 rounded-xl border border-[var(--purple-light)]/10">
                      <h4 className="font-heading font-medium text-[var(--purple-deep)] mb-3 text-lg">Soluzione</h4>
                      <p className="text-[#2D2655] leading-relaxed">Implementazione di Object Recognition per identificare componenti e fornire guide contestuali in tempo reale.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--purple-deep)] p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-4 text-white !important">Risultati</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="text-[var(--aqua-green)] mr-2 text-2xl font-bold">70%</span>
                      <span className="text-white !important">Riduzione nei tempi di apprendimento</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[var(--aqua-green)] mr-2 text-2xl font-bold">35%</span>
                      <span className="text-white !important">Aumento della produttività</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[var(--aqua-green)] mr-2 text-2xl font-bold">85%</span>
                      <span className="text-white !important">Riduzione degli errori</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[var(--aqua-green)] mr-2 text-2xl font-bold">3x</span>
                      <span className="text-white !important">ROI nel primo anno</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-16 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/servizi" className="bg-[var(--purple-deep)] text-white font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                  ESPLORA ALTRI SERVIZI
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
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
