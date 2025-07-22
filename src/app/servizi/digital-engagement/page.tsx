'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChartLine, FaArrowRight, FaRocket, FaBullhorn, FaUserFriends } from 'react-icons/fa';

export default function DigitalEngagementPage() {
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
        {/* Hero Section per Digital Engagement */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                DIGITAL ENGAGEMENT
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Strategie e soluzioni per aumentare il coinvolgimento digitale nei processi aziendali quotidiani attraverso elementi ludici e interattivi.
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
                <div className="p-1 bg-gradient-to-br from-[var(--blue)] to-[var(--purple-deep)] rounded-xl">
                  <div className="bg-[var(--purple-deep)] p-8 rounded-xl text-white h-full flex flex-col justify-center">
                    <div className="inline-block mb-6 p-4 rounded-full" style={{ backgroundColor: 'rgba(59, 130, 246, 0.25)' }}>
                      <FaChartLine size={60} className="text-[var(--blue)]" />
                    </div>
                    <h2 className="text-3xl font-heading mb-6">Portal Gate</h2>
                    <p className="mb-6">
                      Portal Gate integra elementi ludici nei processi aziendali quotidiani per trasformare attività ordinarie in esperienze coinvolgenti. Questa innovativa piattaforma sfrutta l&apos;affinità con il gaming dell&apos;85-95% della forza lavoro under 40, creando un ambiente di lavoro più dinamico e stimolante.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white">Apprendimento continuo integrato nei processi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white">Gestione progetti con elementi gamificati</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white">Comunicazione interna coinvolgente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--aqua-green)] mr-2">✓</span>
                        <span className="text-white">Integrazione con sistemi aziendali esistenti</span>
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
                <h3 className="text-2xl font-heading mb-4 text-[var(--purple-deep)]">Il problema dell&apos;engagement</h3>
                <p className="mb-6 text-gray-700">
                  Solo il 5% delle persone si sentono realmente coinvolte sul lavoro in Italia. Questo dato allarmante si traduce in:
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--aqua-green)]">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Bassa produttività</h4>
                    <p className="text-gray-800">Dipendenti disimpegnati sono in media il 18% meno produttivi, con un impatto diretto sui risultati aziendali</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--blue)]">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Alto turnover</h4>
                    <p className="text-gray-800">Il 40% dei dipendenti non coinvolti considera di cambiare lavoro entro un anno</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--purple-light)]">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Welfare inefficace</h4>
                    <p className="text-gray-800">Solo nel 6% delle imprese italiane il welfare aziendale produce effetti positivi concreti</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--purple-deep)]">
                    <h4 className="text-xl font-medium mb-2 text-[var(--purple-deep)]">Gap generazionale</h4>
                    <p className="text-gray-800">Le aziende faticano a comunicare efficacemente con le nuove generazioni digitali</p>
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
              <h3 className="text-2xl font-heading mb-8 text-center text-[var(--purple-deep)]">Ambiti di applicazione del Digital Engagement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--blue)]">
                  <div className="w-16 h-16 bg-[var(--blue)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaRocket size={30} className="text-[var(--blue)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Apprendimento continuo</h4>
                  <p className="text-gray-700 mb-4">
                    Trasformiamo l&apos;apprendimento in un processo costante e coinvolgente, integrato nel flusso di lavoro quotidiano.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Micro-learning contestuale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Quiz e sfide di apprendimento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Percorsi personalizzati</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--blue)] mr-2">•</span>
                      <span>Riconoscimento delle competenze</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--aqua-green)]">
                  <div className="w-16 h-16 bg-[var(--aqua-green)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaBullhorn size={30} className="text-[var(--aqua-green)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Comunicazione interna</h4>
                  <p className="text-gray-700 mb-4">
                    Rivoluzioniamo il modo in cui le informazioni circolano all&apos;interno dell&apos;azienda, rendendolo interattivo e coinvolgente.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Social feed gamificati</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Storytelling interattivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Survey e feedback coinvolgenti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--aqua-green)] mr-2">•</span>
                      <span>Condivisione di successi e risultati</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--purple-light)]">
                  <div className="w-16 h-16 bg-[var(--purple-light)]/10 rounded-full flex items-center justify-center mb-6">
                    <FaUserFriends size={30} className="text-[var(--purple-light)]" />
                  </div>
                  <h4 className="text-xl font-heading mb-4 text-[var(--purple-deep)]">Employee Experience</h4>
                  <p className="text-gray-700 mb-4">
                    Creiamo un ambiente di lavoro digitale che valorizza e stimola ogni dipendente, aumentando soddisfazione e retention.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Onboarding personalizzato</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Riconoscimento e reward</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Community e collaborazione</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--purple-light)] mr-2">•</span>
                      <span>Welfare gamificato</span>
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
              className="bg-[var(--blue)] p-8 rounded-xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-heading mb-6 text-center">I risultati del Digital Engagement</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold font-heading mb-2 text-[var(--aqua-green)]">+50%</div>
                  <p>Aumento della partecipazione attiva dei dipendenti</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold font-heading mb-2 text-[var(--aqua-green)]">+60%</div>
                  <p>Incremento della produttività nei team coinvolti</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold font-heading mb-2 text-[var(--aqua-green)]">-30%</div>
                  <p>Riduzione del turnover dei dipendenti</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold font-heading mb-2 text-[var(--aqua-green)]">+85%</div>
                  <p>Aumento del senso di appartenenza all&apos;azienda</p>
                </div>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contatti" className="bg-white text-[var(--blue)] font-bold font-heading py-3 px-8 rounded-full inline-flex items-center shadow-lg">
                    SCOPRI COME TRASFORMARE LA TUA AZIENDA
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
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
        { name: 'Contatti', path: '/contatti' }
      ]} />
    </div>
  );
}
