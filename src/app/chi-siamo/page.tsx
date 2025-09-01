'use client';

import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import { motion } from 'framer-motion';

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#000000',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
    }}>
<ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Chi Siamo */}
        <section className="py-32 relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
                CHI SIAMO
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Un team appassionato di esperti in sviluppo professionale, gaming e tecnologie immersive. L&#39;azienda supporta la creazione di eventi gaming aziendali, sia digitali che in presenza.
              </p>
            </motion.div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="absolute inset-0 bg-[var(--purple-deep)] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        </section>
        
        {/* About Section */}
        <section className="py-20" style={{ background: '#000000' }}>
          <div className="container mx-auto px-4 relative">
            <AboutSection />
          </div>
        </section>
        
        {/* La nostra missione */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-xl border border-[var(--aqua-green)]/20"
              >
                <h3 className="text-2xl font-heading mb-4 text-white">La Nostra Missione</h3>
                <p className="mb-4 text-white/80">
                  &quot;Trasformare ogni attività in una esperienza coinvolgente&quot; - questa è la missione che guida XP-L4B. 
                  Crediamo fermamente che attraverso il gioco e le tecnologie immersive si possano risolvere problematiche aziendali reali.
                </p>
                <p className="text-white/80">
                  Il nostro approccio permette di aumentare l&apos;engagement e migliorare i risultati formativi, 
                  creando un ambiente di lavoro più stimolante e produttivo.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[var(--purple-deep)]/30 p-8 rounded-xl shadow-xl border border-[var(--aqua-green)]/20"
                data-component-name="MotionComponent"
              >
                <h3 className="text-2xl font-heading mb-4 text-white">VALORI</h3>
                <ul className="space-y-6">
                  <li className="flex flex-col items-start">
                    <span className="text-[var(--aqua-green)] mb-1 text-xl">●</span>
                    <div>
                      <h4 className="font-bold mb-2 text-[var(--aqua-green)]">Engagement</h4>
                      <p className="text-white/80">Le persone sono al centro di ogni esperienza. Questo valore promuove la partecipazione attiva, la motivazione intrinseca e l&apos;empowerment dei team e dei singoli individui.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start">
                    <span className="text-[var(--aqua-green)] mb-1 text-xl">●</span>
                    <div>
                      <h4 className="font-bold mb-2 text-[var(--aqua-green)]">Collaborazione</h4>
                      <p className="text-white/80">La gamification funziona meglio quando c&apos;è co-creazione: soluzioni creative nascono da ambienti in cui le persone si sentono libere di sperimentare, sbagliare e migliorare insieme.</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start">
                    <span className="text-[var(--aqua-green)] mb-1 text-xl">●</span>
                    <div>
                      <h4 className="font-bold mb-2 text-[var(--aqua-green)]">Obiettivi comuni</h4>
                      <p className="text-white/80">Crediamo nell&apos;unione delle energie e delle competenze per raggiungere insieme ambizioni significative. Questo valore garantisce che ogni membro del team sappia chiaramente cosa stiamo costruendo insieme e perché, favorendo coesione e senso d&apos;appartenenza.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-[var(--purple-light)]/10 p-8 rounded-xl shadow-xl border border-[var(--aqua-green)]/20"
            >
              <h3 className="text-2xl font-heading mb-4 text-white">Le Competenze che Sviluppiamo</h3>
              <p className="mb-8 text-white/80">
                Attraverso i nostri programmi formativi e le nostre tecnologie, aiutiamo a sviluppare competenze essenziali per il successo nel mondo del lavoro moderno.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">AI prompting</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Comunicazione</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Team work</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Pensiero laterale</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Problem solving</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Creatività</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Time management</p>
                </div>
                <div className="bg-[var(--purple-light)]/10 p-4 rounded-lg text-center">
                  <p className="font-medium text-white">Leadership</p>
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
