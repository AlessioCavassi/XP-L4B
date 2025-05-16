import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaGamepad, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaChartLine } from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: 'Realtà Virtuale',
      description: 'SafetyVR trasforma la formazione sulla sicurezza riducendo incidenti del 70%. Ideale per settori ad alto rischio: manifatturiero, sanitario, edile. Compatibile con Vision Pro per simulazioni immersive senza rischi reali.',
      icon: <FaVrCardboard size={40} />,
      color: 'var(--purple-light)'
    },
    {
      id: 2,
      title: 'Realtà Aumentata',
      description: 'ARStudio e Object Recognition arricchiscono l\'ambiente fisico con overlay informativi. Applicazioni: manutenzione industriale, training tecnico, eventi e marketing. ROI tipico: +300% engagement rispetto ai metodi tradizionali.',
      icon: <FaGamepad size={40} />,
      color: 'var(--blue)'
    },
    {
      id: 3,
      title: 'Gamification',
      description: 'Meccaniche di gioco applicate ai processi aziendali: sistemi di punti, badge, classifiche e ricompense. Casi d\'uso: onboarding, corsi formativi, incentivazione team. Risultato: +83% motivazione e +72% performance misurabile.',
      icon: <FaLaptopCode size={40} />,
      color: 'var(--aqua-green)'
    },
    {
      id: 4,
      title: 'Formazione Interattiva',
      description: 'Programmi formativi in competenze critiche: AI prompting, team work, problem solving e time management. Approccio: microcorsi, sessioni dal vivo e simulazioni interattive. Ritenzione informazioni: fino al 90% vs 20% formazione tradizionale.',
      icon: <FaChalkboardTeacher size={40} />,
      color: 'var(--purple-deep)'
    },
    {
      id: 5,
      title: 'Team Building Digitale',
      description: '3DToMe e Spatial Assistance creano ambienti virtuali condivisi per team remoti o ibridi. Ideale per: kick-off progetti, brainstorming, collaborative problem solving. Riduzione del 30% nel turnover dei dipendenti nei team partecipanti.',
      icon: <FaUsers size={40} />,
      color: 'var(--purple-light)'
    },
    {
      id: 6,
      title: 'Digital Engagement',
      description: 'Portal Gate integra elementi ludici nei processi aziendali quotidiani. Applicazioni: formazione continua, gestione progetti, comunicazione interna. Sfrutta l\'affinità con il gaming dell\'85-95% della forza lavoro under 40.',
      icon: <FaChartLine size={40} />,
      color: 'var(--blue)'
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-4">I NOSTRI SERVIZI</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-4">
            Innoviamo l&apos;engagement digitale con soluzioni che trasformano formazione e comunicazione in esperienze memorabili.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-heading text-[var(--aqua-green)] mb-4">PERCHÉ LA GAMIFICATION FUNZIONA</h3>
          <p className="text-white/90 mb-4">
            Il gioco è parte della natura umana. Integrando elementi ludici nei processi formativi sfruttiamo meccanismi psicologici fondamentali che stimolano motivazione, collaborazione e apprendimento. Corsi coinvolgenti che sfruttano meccaniche di gioco per aumentare la partecipazione e la ritenzione delle conoscenze, rendendo l&apos;apprendimento un&apos;esperienza piacevole ed efficace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-[var(--aqua-green)] text-xl font-heading mb-2">83%</h4>
              <p className="text-white/80 text-sm">Dei dipendenti in aziende con attività ludiche mostra maggiore motivazione</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-[var(--aqua-green)] text-xl font-heading mb-2">72%</h4>
              <p className="text-white/80 text-sm">Registra un significativo aumento delle performance lavorative</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-[var(--aqua-green)] text-xl font-heading mb-2">90%</h4>
              <p className="text-white/80 text-sm">Miglioramento nella ritenzione delle informazioni rispetto alla formazione tradizionale</p>
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
                <p className="text-white/70">{service.description}</p>
                
                <motion.div 
                  className="mt-6 flex items-center text-[var(--aqua-green)] font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeService === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Scopri di più</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
