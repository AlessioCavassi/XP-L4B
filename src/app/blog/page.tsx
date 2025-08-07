'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import MobileNavSwipe from '@/components/MobileNavSwipe';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{
      background: '#ffffff',
      backgroundAttachment: 'fixed',
      color: '#333333',
    }}>
<ParticlesBackground />
      <Header />
      
      <main>
        {/* Hero Section per Blog - Coming Soon */}
        <section className="py-32 min-h-[70vh] flex items-center justify-center relative bg-[var(--purple-deep)]">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[var(--aqua-green)] drop-shadow-xl">Blog in arrivo</h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8 backdrop-blur-sm p-6 bg-[var(--purple-deep)]/80 rounded-lg shadow-lg">
                Stiamo lavorando al nostro blog dedicato a gamification, realtà virtuale, realtà aumentata e innovazione digitale. Torna a trovarci presto!
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/" className="bg-[var(--aqua-green)] text-[var(--purple-deep)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg hover:bg-[var(--blue)] shadow-lg hover:shadow-xl">
                  TORNA ALLA HOME
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
        { name: 'Blog', path: '/blog' },
        { name: 'Contatti', path: '/contatti' }
      ]} />
    </div>
  );
}
