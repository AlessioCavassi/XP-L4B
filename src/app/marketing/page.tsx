import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import Footer from '@/components/Footer';
import { FaBullhorn, FaChartLine, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-[var(--purple-deep)] to-[var(--purple-dark)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading mb-6">
                MARKETING INNOVATIVO
              </h1>
              <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Trasforma la tua strategia di marketing con soluzioni all'avanguardia che combinano creatività e tecnologia
              </p>
            </div>
          </div>
        </section>
        
        {/* Carousel Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <ImageCarousel imageType="marketing" />
            </div>
            <div className="text-center mt-8">
              <a 
                href="/contatti"
                className="px-8 py-3 bg-[var(--aqua-green)] text-[var(--purple-deep)] font-bold rounded-full hover:bg-white transition-colors duration-300 inline-block"
              >
                Contattaci per una consulenza
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-[var(--purple-deep)]">
              I Nostri Servizi di Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBullhorn className="text-4xl mb-4 text-[var(--aqua-green)]" />,
                  title: 'Strategie Digitali',
                  description: 'Piani di marketing digitale personalizzati per massimizzare la tua presenza online e raggiungere i tuoi obiettivi di business.'
                },
                {
                  icon: <FaChartLine className="text-4xl mb-4 text-[var(--aqua-green)]" />,
                  title: 'Analisi Dati',
                  description: 'Monitoraggio e analisi delle performance per ottimizzare le tue campagne e migliorare il ROI.'
                },
                {
                  icon: <FaUsers className="text-4xl mb-4 text-[var(--aqua-green)]" />,
                  title: 'Social Media Management',
                  description: 'Gestione professionale dei tuoi canali social per coinvolgere la tua community e aumentare la brand awareness.'
                },
                {
                  icon: <FaLightbulb className="text-4xl mb-4 text-[var(--aqua-green)]" />,
                  title: 'Content Creation',
                  description: 'Creazione di contenuti accattivanti e coinvolgenti per raccontare al meglio il tuo brand.'
                },
                {
                  icon: <FaRocket className="text-4xl mb-4 text-[var(--aqua-green)]" />,
                  title: 'Advertising',
                  'description': 'Campagne pubblicitarie mirate su tutti i canali digitali per raggiungere il tuo pubblico ideale.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    {feature.icon}
                    <h3 className="text-xl font-heading mb-3 text-[var(--purple-deep)]">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
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
