import React, { useEffect, useState } from 'react';
import MobileServiceCards from './MobileServiceCards';
import ExpandableContent from './ExpandableContent';
import FlipCard from './FlipCard';
import MobileParticlesBackground from './MobileParticlesBackground';
import { FaGamepad, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Servizi completi dal sito originale
const serviceData = [
  {
    id: 1,
    title: 'Realtà Virtuale',
    description: 'SafetyVR trasforma la formazione sulla sicurezza riducendo incidenti del 70%. Ideale per settori ad alto rischio: manifatturiero, sanitario, edile.',
    icon: '🥽',
    color: 'var(--purple-light)'
  },
  {
    id: 2,
    title: 'Realtà Aumentata',
    description: 'ARStudio e Object Recognition arricchiscono l\'ambiente fisico con overlay informativi. Applicazioni: manutenzione industriale, training tecnico, eventi e marketing.',
    icon: '📱',
    color: 'var(--blue)'
  },
  {
    id: 3,
    title: 'Gamification',
    description: 'Meccaniche di gioco applicate ai processi aziendali: sistemi di punti, badge, classifiche e ricompense. Risultato: +83% motivazione e +72% performance misurabile.',
    icon: '🎮',
    color: 'var(--aqua-green)'
  },
  {
    id: 4,
    title: 'SVILUPPO COMPOTENZE',
    description: 'Programmi di sviluppo in competenze critiche: AI prompting, team work, problem solving e time management. Ritenzione informazioni: fino al 90% vs 20% metodi tradizionali.',
    icon: '👨‍🏫',
    color: 'var(--purple-deep)'
  },
  {
    id: 5,
    title: 'Team Building Digitale',
    description: '3DToMe e Spatial Assistance creano ambienti virtuali condivisi per team remoti o ibridi. Ideale per: kick-off progetti, brainstorming, collaborative problem solving.',
    icon: '👥',
    color: 'var(--purple-light)'
  },
  {
    id: 6,
    title: 'Digital Engagement',
    description: 'Portal Gate integra elementi ludici nei processi aziendali quotidiani. Applicazioni: formazione continua, gestione progetti, comunicazione interna.',
    icon: '📈',
    color: 'var(--blue)'
  }
];

// Contenuto espandibile per la sezione Chi Siamo - contenuti originali e migliore contrasto
const aboutSections = [
  {
    title: 'La Nostra Missione',
    content: (
      <div className="space-y-3">
        <p className="text-sm font-bold text-white !bg-[var(--purple-deep)] p-3 rounded-lg shadow-sm" data-component-name="MobileOptimizedPage" style={{ backgroundColor: 'var(--purple-deep)' }}>
          &quot;Trasformare ogni attività in una esperienza coinvolgente&quot; - questa è la missione che guida XP-L4B.
        </p>
        <p className="text-sm font-bold text-white !bg-[var(--purple-deep)] p-3 rounded-lg shadow-sm" data-component-name="MobileOptimizedPage" style={{ backgroundColor: 'var(--purple-deep)' }}>
          L&apos;83% dei dipendenti che partecipano ad attività ludiche sono più motivati. Le nostre sessioni formative gamificate aumentano il coinvolgimento e la produttività in azienda del 50-60%.
        </p>
      </div>
    ),
    icon: <FaRocket className="text-white" />,
    color: 'var(--aqua-green)'
  },
  {
    title: 'I Nostri Valori',
    content: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white bg-[var(--purple-deep)]/90 p-2 rounded-lg shadow-sm flex-1">
            <strong className="emerald-text">Innovazione</strong>: Esploriamo costantemente nuove tecnologie e metodologie per offrire esperienze all&apos;avanguardia.
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white bg-[var(--purple-deep)]/90 p-2 rounded-lg shadow-sm flex-1">
            <strong className="emerald-text">Coinvolgimento</strong>: Crediamo che l&apos;apprendimento e la crescita avvengano attraverso esperienze coinvolgenti e memorabili.
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white bg-[var(--purple-deep)]/90 p-2 rounded-lg shadow-sm flex-1">
            <strong className="emerald-text">Risultati Misurabili</strong>: Ogni nostra soluzione è orientata a generare risultati concreti e misurabili per i nostri clienti.
          </div>
        </div>
      </div>
    ),
    icon: <FaUsers className="text-white" />,
    color: 'var(--purple-light)'
  },
  {
    title: 'Competenze Sviluppate',
    content: (
      <div>
        <p className="text-sm text-[var(--purple-deep)] font-bold mb-3">Attraverso i nostri percorsi e alle tecnologie dei nostri partner, aiutiamo a sviluppare competenze essenziali per il successo::</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">AI prompting</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Comunicazione</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Team work</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Problem solving</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Creatività</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Leadership</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Time management</div>
          <div className="bg-[var(--purple-deep)] p-2 rounded text-xs font-bold text-white text-center shadow-md border border-[var(--aqua-green)]">Employer Branding</div>
        </div>
      </div>
    ),
    icon: <FaGamepad className="text-white" />,
    color: 'var(--blue)'
  },
  {
    title: 'Problematiche Risolte',
    content: (
      <div className="space-y-2">
        <div className="bg-[var(--purple-deep)] p-3 rounded-lg border-l-4 border-[var(--aqua-green)] text-sm text-white font-medium shadow-md">
          <strong className="emerald-text">70%</strong> di investimenti in percorsi di apprendimento inefficienti e noiosi
        </div>
        <div className="bg-[var(--purple-deep)] p-3 rounded-lg border-l-4 border-[var(--aqua-green)] text-sm text-white font-medium shadow-md">
          Solo il <strong className="emerald-text">5%</strong> delle persone si sentono coinvolte sul lavoro in Italia
        </div>
        <div className="bg-[var(--purple-deep)] p-3 rounded-lg border-l-4 border-[var(--aqua-green)] text-sm text-white font-medium shadow-md">
          Il welfare aziendale è efficace solo nel <strong className="emerald-text">6%</strong> delle imprese italiane
        </div>
      </div>
    ),
    icon: <FaChartLine className="text-white" />,
    color: 'var(--purple-deep)'
  }
];

// Dati per le flip cards - contenuti originali con contrasti migliorati
const flipCardsData = [
  {
    front: (
      <>
        <div className="text-4xl mb-4">👨‍💼</div>
        <h3 className="text-xl font-bold text-white mb-2">Employer Branding</h3>
        <p className="text-sm font-medium text-white/90">Scopri come migliorare l&apos;immagine aziendale e il coinvolgimento</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">Employer Branding</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Il 95% delle persone in Italia non si sente coinvolto sul lavoro. 
          Le nostre soluzioni gamificate migliorano l&apos;immagine aziendale e aumentano il senso di appartenenza del 60%.
        </p>
      </>
    ),
    frontBg: 'var(--purple-deep)',
    backBg: 'var(--purple-deep)'
  },
  {
    front: (
      <>
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-xl font-bold text-white mb-2">SVILUPPO COMPOTENZE</h3>
        <p className="text-sm font-medium text-white/90">Trasforma l&apos;apprendimento in un&apos;esperienza coinvolgente</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">Sviluppo Competenze</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Il 70% degli investimenti in metodi tradizionali è inefficiente. 
          I nostri percorsi gamificati aumentano l&apos;efficacia dell&apos;apprendimento del 50-60% e migliorano la ritenzione delle informazioni.
        </p>
      </>
    ),
    frontBg: 'var(--purple-deep)',
    backBg: 'var(--blue)'
  },
  {
    front: (
      <>
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-xl font-bold text-white mb-2">AI Prompting</h3>
        <p className="text-sm font-medium text-white/90">Sviluppa competenze nell&apos;era dell&apos;intelligenza artificiale</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">AI Prompting</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Le aziende faticano a comunicare con le nuove generazioni in modo efficace.
          Sviluppa competenze di AI prompting attraverso workshop interattivi e simulazioni pratiche.
        </p>
      </>
    ),
    frontBg: 'var(--purple-deep)',
    backBg: 'var(--purple-light)'
  }
];

const MobileOptimizedPage: React.FC = () => {
  // Funzione per lo scorrimento alla sezione contatti
  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se la sezione contatti non è trovata, reindirizza alla home con l'ancora
      window.location.href = '/#contatti';
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Rileva se il dispositivo è mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Se non è mobile, non renderizzare nulla
  if (!isMobile) return null;

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] md:hidden relative overflow-hidden">
      {/* Global styles moved to components.css for better performance */}
      {/* Forzare stili globali per il mobile */}
      <style jsx global>{`
        /* Forza colore bianco su tutti i paragrafi nei componenti mobile */
        .mobile-service-desc,
        [data-component-name="MobileServiceCards"],
        #mobileServiceSection p,
        .service-card p,
        [data-component-name="MobileOptimizedPage"] p:not(.text-\[var\(--purple-deep\)\]),
        .text-white\/70,
        [data-component-name="<p />"] {
          color: white !important;
          -webkit-text-fill-color: white !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        /* Paragrafo su sfondo bianco - mantiene il colore viola originale */
        [data-component-name="MobileOptimizedPage"] p.text-\[var\(--purple-deep\)\] {
          color: var(--purple-deep) !important;
          -webkit-text-fill-color: var(--purple-deep) !important;
        }
        
        /* Stile per il testo bianco nelle flip cards e nel MotionComponent */
        .flip-card p,
        [data-component-name="MotionComponent"] {
          color: white !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>
      {/* Rimosso il container globale di particelle per gestire le particelle sezione per sezione */}
      {/* Hero Section ottimizzata con migliore contrasto - utilizzo variabili CSS coerenti */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center p-4 pt-32 relative bg-[var(--purple-deep)]/70 backdrop-blur-sm" style={{ zIndex: 2 }}>
        {/* Particelle locali per Hero Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <motion.h1 
          className="font-heading text-3xl font-bold mb-4 text-center text-[var(--aqua-green)] drop-shadow-md mt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--aqua-green)' }}
          data-component-name="MotionComponent"
        >
          TRASFORMIAMO OGNI ATTIVITÀ IN UN&apos;ESPERIENZA COINVOLGENTE
        </motion.h1>
        
        <motion.p
          className="font-body text-white text-base font-medium mb-6 text-center bg-[var(--purple-deep)] backdrop-blur-md p-4 rounded-lg shadow-md border-2 border-[var(--aqua-green)]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ color: 'white' }} // Forza il colore bianco anche a livello inline
        >
          <span className="font-heading text-[var(--aqua-green)] font-bold text-lg drop-shadow-md block mb-1">La nostra missione:</span> <span className="font-body" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Coinvolgere le persone attraverso innovazione digitale e il potere del gioco.</span>
        </motion.p>
        
        <motion.div
          className="w-full flex flex-col items-center gap-6 mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a 
            href="/documents/xp-lab-presentazione.pdf"
            download
            className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-[var(--purple-deep)] font-heading font-bold py-3 px-6 rounded-full transition-all duration-300 text-base md:text-lg text-center"
            style={{ minWidth: '280px', width: '80%', maxWidth: '320px', display: 'block' }}
            data-component-name="MobileOptimizedPage"
          >
            SCARICA LA NOSTRA PRESENTAZIONE
          </a>
          <a 
            href="/contatti"
            className="bg-[var(--purple-deep)] hover:bg-[var(--purple-light)] text-white font-heading font-bold py-3 px-6 rounded-full transition-all duration-300 text-base md:text-lg text-center"
            style={{ minWidth: '280px', width: '80%', maxWidth: '320px', display: 'block' }}
          >
            CONTATTACI
          </a>
        </motion.div>
        
        <motion.div
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span 
            className="font-body text-sm mt-4 text-center max-w-xs font-medium block bg-[var(--purple-deep)] backdrop-blur-md p-4 rounded-lg shadow-md border-2 border-[var(--aqua-green)]/80"
            style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            data-component-name="MotionComponent"
          >
            Siamo esperti nella creazione di esperienze ludiche e videoludiche che fondono gamification, realtà virtuale e intelligenza artificiale per rendere i team più produttivi e coinvolgere e ispirare il tuo pubblico.
          </span>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-[var(--aqua-green)] rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-[var(--aqua-green)] rounded-full"></div>
          </div>
        </motion.div>
      </section>
      
      {/* Servizi - Carousel Card */}
      <section className="py-10 px-4 bg-white/90 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Servizi */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-md">I NOSTRI SERVIZI</h2>
        <div className="w-full flex justify-center mb-6">
          <p 
            className="font-body text-sm font-medium text-center text-white bg-[var(--purple-deep)] py-2 px-4 rounded-lg shadow-sm border-2 border-[var(--aqua-green)] max-w-[90%] mx-auto"
            style={{
              backgroundColor: 'var(--purple-deep)',
              borderColor: 'var(--aqua-green)',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Swipe per esplorare i nostri servizi principali
          </p>
        </div>
        
        <MobileServiceCards services={serviceData} />
      </section>
      
      {/* Chi Siamo - Accordion */}
      <section className="py-10 px-4 bg-[var(--purple-light)]/5 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Chi Siamo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-sm">Chi Siamo</h2>
        <div className="w-full flex justify-center mb-6">
          <p className="font-body text-sm text-center text-white font-medium bg-[var(--purple-deep)]/90 py-2 px-4 rounded-lg shadow-sm border border-[var(--aqua-green)]/30 max-w-[90%] mx-auto">
            Tocca per espandere le sezioni
          </p>
        </div>
        
        <ExpandableContent sections={aboutSections} />
      </section>
      
      {/* Stats with Flip Cards - colori coerenti */}
      <section className="py-12 px-4 bg-white/90 backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Flip Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-sm">
          Perché Sceglierci
        </h2>
        <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
        <div className="w-full flex justify-center mb-8">
          <p className="font-body text-sm font-medium text-center text-white bg-[var(--purple-deep)]/90 py-2 px-4 rounded-lg shadow-sm border border-[var(--aqua-green)]/30 max-w-[90%] mx-auto">
            Tocca le carte per scoprire dati e statistiche sul nostro impatto
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
          <FlipCard 
            frontContent={flipCardsData[0].front}
            backContent={flipCardsData[0].back}
            frontBgColor={flipCardsData[0].frontBg}
            backBgColor={flipCardsData[0].backBg}
            height="200px"
          />
          <FlipCard 
            frontContent={flipCardsData[1].front}
            backContent={flipCardsData[1].back}
            frontBgColor={flipCardsData[1].frontBg}
            backBgColor={flipCardsData[1].backBg}
            height="200px"
          />
          <FlipCard 
            frontContent={flipCardsData[2].front}
            backContent={flipCardsData[2].back}
            frontBgColor={flipCardsData[2].frontBg}
            backBgColor={flipCardsData[2].backBg}
            height="200px"
          />
        </div>
      </section>
      
      {/* CTA con colori coerenti dalla palette principale */}
      <section className="py-16 px-4 bg-[var(--purple-deep)]/80 backdrop-blur-sm relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Elementi decorativi semplificati */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--aqua-green)]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--aqua-green)]/20 rounded-full blur-xl"></div>
        
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-[var(--aqua-green)] drop-shadow-lg">Pronti a Rivoluzionare l&apos;Engagement?</h2>
          <p className="text-white mb-8 text-base font-medium max-w-xs mx-auto" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            L&apos;83% dei dipendenti che partecipano ai nostri programmi gamificati mostrano una maggiore motivazione e produttività.
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="w-full max-w-xs bg-[var(--aqua-green)] text-[var(--purple-deep)] font-bold py-5 px-8 rounded-full shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            CONTATTACI ORA
          </motion.button>
          
          <p className="mt-4 text-white/70 text-xs">
            La tua prossima esperienza formativa coinvolgente è a un click di distanza
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobileOptimizedPage;
