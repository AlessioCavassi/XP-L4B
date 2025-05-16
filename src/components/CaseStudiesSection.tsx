import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  results: string[];
  image: string;
  category: string;
  color: string;
}

const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Formazione immersiva per sicurezza sul lavoro',
      client: 'GrandTech Manufacturing',
      description: 'Sviluppo di SafetyVR, un programma di formazione immersiva compatibile con Vision Pro per simulare situazioni di pericolo senza rischi reali, sfruttando il fatto che l\'85-95% dei giovani dipendenti ha dimestichezza con i videogiochi.',
      results: ['Riduzione del 70% negli incidenti sul lavoro', 'Aumento del 65% nella ritenzione delle procedure di sicurezza', 'Tempi di formazione ridotti del 40%'],
      image: '/case-studies/vr-training.jpg',
      category: 'vr',
      color: 'var(--purple-light)'
    },
    {
      id: 2,
      title: 'Team building virtuale con Spatial Plan',
      client: 'MultinationalCorp',
      description: 'Piattaforma di team building remoto compatibile con Vision Pro e Spatial Plan che sfrutta il basso livello di engagement (5% in Italia vs 37% media mondiale) per trasformare la collaborazione aziendale.',
      results: ['Aumento del 35% nella collaborazione cross-team', 'Miglioramento del 75% nel sentiment dei dipendenti', 'Riduzione del 30% nel turnover annuale'],
      image: '/case-studies/team-building.jpg',
      category: 'gamification',
      color: 'var(--blue)'
    },
    {
      id: 3,
      title: 'App AR con Object Recognition',
      client: 'ExpoTech Events',
      description: 'ARStudio con Object Recognition per trasformare fiere ed eventi in esperienze interattive, contrastando il dato che il 70% degli investimenti in formazione tradizionale risultano inefficaci.',
      results: ['Aumento del 85% nel tempo di permanenza agli stand', '300% lead generation rispetto agli approcci tradizionali', '+78% di interazione con i contenuti digitali'],
      image: '/case-studies/ar-expo.jpg',
      category: 'ar',
      color: 'var(--aqua-green)'
    },
    {
      id: 4,
      title: 'Onboarding gamificato con Portal Gate',
      client: 'StartupInnovation',
      description: 'Sistema di onboarding gamificato attraverso Portal Gate, sfruttando il dato che l\'83% dei dipendenti in aziende con attività ludiche è più motivato. Include percorsi formativi in AI prompting, problem solving e time management.',
      results: ['Riduzione del 50% nel tempo di produttività', 'Aumento del 72% nella conoscenza aziendale', 'Feedback positivo dal 95% dei nuovi assunti'],
      image: '/case-studies/gamified-onboarding.jpg',
      category: 'gamification',
      color: 'var(--purple-deep)'
    },
  ];

  // Filtered case studies
  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  // Filter categories
  const categories = [
    { id: 'all', name: 'Tutti i progetti' },
    { id: 'vr', name: 'Realtà Virtuale' },
    { id: 'ar', name: 'Realtà Aumentata' },
    { id: 'gamification', name: 'Gamification' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-[var(--gray)]/5 to-[var(--purple-light)]/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[var(--purple-deep)] mb-4">CASE STUDIES</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--purple-deep)]/70 max-w-3xl mx-auto">
            Solo il <span className="font-bold">5% dei lavoratori italiani</span> si sente coinvolto rispetto alla media mondiale del 37%. Le nostre soluzioni trasformano questa sfida in opportunità.
          </p>
          <p className="text-lg text-[var(--purple-deep)]/70 max-w-2xl mx-auto">
            Scopri come abbiamo aiutato i nostri clienti a trasformare la loro esperienza digitale attraverso il potere del gioco e della realtà virtuale.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category.id ? 'bg-[var(--purple-deep)] text-white' : 'bg-[var(--gray)]/20 text-[var(--purple-deep)]'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {filteredCaseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[var(--gray)]/20 interactive"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[var(--purple-deep)]/60 to-[var(--blue)]/60 absolute top-0 left-0 z-10"></div>
                <div 
                  className="w-full h-full absolute z-0" 
                  style={{ 
                    backgroundColor: study.color,
                    backgroundImage: 'url("/placeholder-case-study.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs uppercase">
                    {study.category === 'vr' ? 'Realtà Virtuale' : 
                     study.category === 'ar' ? 'Realtà Aumentata' : 'Gamification'}
                  </span>
                  <h3 className="text-2xl font-heading text-white mt-2">{study.title}</h3>
                  <p className="text-white/80 text-sm mt-1">Cliente: {study.client}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[var(--purple-deep)]/80 mb-4">{study.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-lg font-heading text-[var(--purple-deep)] mb-2">Risultati</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-[var(--aqua-green)] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--purple-deep)]/70">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={`/case-studies/${study.id}`}
                  className="mt-6 inline-flex items-center text-[var(--blue)] hover:text-[var(--purple-light)] font-medium transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Leggi il case study completo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/case-studies"
            className="bg-[var(--purple-deep)] text-white hover:bg-[var(--purple-light)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VISUALIZZA TUTTI I PROGETTI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
