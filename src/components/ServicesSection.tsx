import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaChartLine, FaGlasses } from 'react-icons/fa';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Services data with highlighted key terms
  const services: Service[] = [
    {
      id: 1,
      title: 'Realtà Virtuale',
      description: 'Sviluppiamo esperienze immersive in Realtà Virtuale pensate per trasformare la formazione, la comunicazione e il marketing aziendale. Grazie alla collaborazione con la nostra azienda partner, uniamo competenze tecniche e creative per offrire progetti altamente personalizzati, innovativi e di forte impatto.',
      icon: <FaVrCardboard size={40} />,
      color: 'var(--aqua-green)', // Mantenuto lo stesso colore per coerenza
      url: '/servizi/realta-virtuale'
    },
    {
      id: 2,
      title: 'Realtà Aumentata',
      description: 'Progettiamo soluzioni in Realtà Aumentata che arricchiscono l\'ambiente reale fisico con contenuti digitali interattivi, offrendo nuove modalità di comunicazione, formazione e coinvolgimento del pubblico. In collaborazione con la nostra azienda partner, integriamo creatività e tecnologia per sviluppare esperienze personalizzate e di alta qualità.',
      icon: <FaGlasses size={40} />,
      color: 'var(--purple-light)', // Cambiato da aqua-green a purple-light per differenziare
      url: '/servizi/realta-aumentata'
    },
    {
      id: 3,
      title: 'Gamification',
      description: 'Soluzioni su misura per coinvolgere dipendenti, ottimizzare processi e fidelizzare clienti. Aumenta engagement, produttività e risultati con dinamiche game-based.',
      icon: <FaLaptopCode size={40} />,
      color: 'var(--blue)', // Mantenuto blu per differenziare le categorie
      url: '/servizi/gamification'
    },
    {
      id: 4,
      title: 'Percorsi di reskilling e upskilling',
      description: 'Analizziamo il mercato del lavoro e delle competenze e creiamo percorsi di reskilling e upskilling.',
      icon: <FaChalkboardTeacher size={40} />,
      color: 'var(--blue)', // Cambiato da purple-deep a blue per migliore leggibilità
      url: '/servizi/percorsi-interattivi'
    },
    {
      id: 5,
      title: 'RIUNIONI LUDICHE E DIGITALI',
      description: 'Soluzioni di gamification professionale per riunioni coinvolgenti e team building virtuali efficaci, con strumenti misurabili per migliorare collaborazione e performance. Trasforma l\'interazione del tuo team!',
      icon: <FaUsers size={40} />,
      color: 'var(--aqua-green)', // Cambiato da purple-light ad aqua-green per migliore contrasto
      url: '/servizi/team-building'
    },
    {
      id: 6,
      title: 'Digital Engagement',
      description: 'Portal Gate integra elementi ludici nei processi aziendali quotidiani. Applicazioni: apprendimento continuo, gestione progetti, comunicazione interna. Sfrutta l\'affinità con il gaming dell\'85-95% della forza lavoro under 40.',
      icon: <FaChartLine size={40} />,
      color: 'var(--blue)', // Mantenuto blu per coerenza con il tema digitale
      url: '/servizi/digital-engagement'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-[var(--purple-deep)] to-[var(--purple-light)] relative overflow-hidden">
      {/* Background elements */}
      <div className="polygon-bg opacity-5"></div>

      <div className="container mx-auto px-4">
        {/* Titolo e descrizione rimossi come richiesto */}
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-heading text-white mb-4"> GAMIFICATION E SERIOUS GAMES</h3>
          <p className="text-white !important mb-4">
            Il <span className="text-[var(--aqua-green)]">gioco</span> è parte della <span className="text-[var(--aqua-green)]">natura umana</span>. Integrando elementi <span className="text-[var(--aqua-green)]">ludici e videoludici</span> nei contesti che di solito non li prevedono sfruttiamo meccanismi psicologici e neurologici che stimolano <span className="text-[var(--aqua-green)]">motivazione</span>, <span className="text-[var(--aqua-green)]">coinvolgimento</span> ed <span className="text-[var(--aqua-green)]">apprendimento</span>. Se <span className="text-[var(--aqua-green)]">ci divertiamo</span> quando facciamo qualcosa lo facciamo <span className="text-[var(--aqua-green)]">più volentieri</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-white text-xl font-heading mb-2">83%</h4>
              <p className="text-white !important text-sm">Dei dipendenti in aziende con <span className="text-[var(--aqua-green)]">attività ludiche</span> mostra <span className="text-[var(--aqua-green)]">maggiore motivazione</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-white text-xl font-heading mb-2">72%</h4>
              <p className="text-white !important text-sm">Registra un <span className="text-[var(--aqua-green)]">significativo aumento</span> delle <span className="text-[var(--aqua-green)]">performance lavorative</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-white text-xl font-heading mb-2">90%</h4>
              <p className="text-white !important text-sm"><span className="text-[var(--aqua-green)]">Miglioramento dei risultati</span> rispetto ai metodi tradizionali di apprendimento</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer transition-all duration-300 border border-white/20 relative overflow-hidden interactive"
              onClick={() => window.location.href = service.url}
            >
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-300" 
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                  opacity: activeService === service.id ? 0.3 : 0,
                }}
              ></div>

              <div className="relative z-10">
                <div 
                  className="icon-container mb-6 p-4 inline-block rounded-full" 
                  style={{ backgroundColor: `${service.color}40` }}
                >
                  <div style={{ color: service.color }}>{service.icon}</div>
                </div>

                <h3 className="text-xl font-heading text-white mb-4">{service.title}</h3>
                <p className="text-white !important">
                  {service.description.split(' ').map((word, i) => {
                    // Parole da evidenziare per ciascun servizio
                    const keywordsMap: Record<number, string[]> = {
                      1: ['esperienze immersive', 'Realtà Virtuale', 'trasformare', 'formazione', 'comunicazione', 'marketing', 'progetti', 'personalizzati', 'innovativi', 'forte impatto'],
                      2: ['Realtà Aumentata', 'contenuti digitali interattivi', 'comunicazione', 'formazione', 'coinvolgimento', 'esperienze personalizzate', 'alta qualità'],
                      3: ['Soluzioni su misura', 'coinvolgere dipendenti', 'ottimizzare processi', 'fidelizzare clienti', 'engagement', 'produttività', 'risultati', 'game-based'],
                      4: ['mercato del lavoro', 'competenze', 'reskilling', 'upskilling'],
                      5: ['gamification professionale', 'riunioni coinvolgenti', 'team building', 'virtuali', 'strumenti misurabili', 'collaborazione', 'performance', 'Trasforma', 'interazione'],
                      6: ['Portal Gate', 'elementi ludici', 'processi aziendali', 'apprendimento continuo', 'gaming', '85-95%']
                    };
                    
                    // Verifica se esistono parole chiave per questo servizio
                    const serviceKeywords = keywordsMap[service.id] || [];
                    
                    // Controlla se la parola attuale o parte di una frase sono parole chiave
                    const isKeyword = serviceKeywords.some((keyword: string) => 
                      word.toLowerCase().includes(keyword.toLowerCase()) || 
                      (i < service.description.split(' ').length - 1 && 
                        `${word} ${service.description.split(' ')[i+1]}`.toLowerCase().includes(keyword.toLowerCase()))
                    );
                    
                    // Evidenzia la parola se è una keyword
                    return isKeyword ? 
                      <span key={i} className="text-[var(--aqua-green)] font-semibold">{word} </span> : 
                      <span key={i}>{word} </span>;
                  })}
                </p>
                
                <motion.div 
                  className="mt-6 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  data-component-name="LinkComponent"
                >
                  <Link 
                    href={service.url} 
                    className="flex items-center bg-[var(--aqua-green)] text-[var(--purple-deep)] px-4 py-2 rounded-full text-sm font-bold font-heading shadow-md hover:shadow-lg transition-all duration-300"
                    style={{
                      textShadow: '0 1px 1px rgba(255,255,255,0.5)',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    <span>Scopri di più</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
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
            href="/servizi"
            className="bg-white text-[var(--purple-deep)] hover:bg-[var(--aqua-green)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ESPLORA TUTTI I SERVIZI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
