import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const AboutSection: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alessio Cavatassi',
      role: 'Founder & CEO',
      bio: 'Alessio is a passionate designer with over 10 years of experience in creating beautiful and functional user experiences. He loves to solve complex problems with simple, elegant solutions.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'alessio@example.com'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Lead Developer',
      bio: 'Jane is a full-stack developer with expertise in modern web technologies. She enjoys building robust and scalable applications that delight users.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'jane@example.com'
      }
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'UX Designer',
      bio: 'Michael specializes in creating intuitive user interfaces and engaging user experiences. He believes in the power of design to make technology more accessible.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'michael@example.com'
      }
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Marketing Director',
      bio: 'Sarah leads our marketing efforts and helps tell the story of our work. She&apos;s passionate about connecting with our audience and building meaningful relationships.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'sarah@example.com'
      }
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Product Manager',
      bio: 'David works closely with our team and clients to define product vision and strategy. He&apos;s dedicated to delivering solutions that exceed expectations.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'david@example.com'
      }
    },
    {
      id: 6,
      name: 'Emily Chen',
      role: 'Frontend Developer',
      bio: 'Emily specializes in building responsive and accessible web applications. She&apos;s passionate about creating seamless user experiences across all devices.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'emily@example.com'
      }
    },
    {
      id: 7,
      name: 'Robert Taylor',
      role: 'Backend Developer',
      bio: 'Robert focuses on building scalable and secure backend systems. He&apos;s passionate about writing clean, efficient code that powers our applications.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'robert@example.com'
      }
    },
    {
      id: 8,
      name: 'Lisa Wong',
      role: 'UI/UX Designer',
      bio: 'Lisa creates beautiful and intuitive interfaces that enhance user experience. She&apos;s passionate about design systems and creating consistent visual languages.',
      image: '/placeholder-profile.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'lisa@example.com'
      }
    }
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
    <section id="chi-siamo" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--purple-light)]/10 to-transparent"></div>
      <div className="polygon-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[var(--purple-deep)] mb-4">CHI SIAMO</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--purple-deep)]/70 max-w-2xl mx-auto">
            Un team di innovatori appassionati di tecnologia, videogiochi e formazione interattiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading text-[var(--purple-deep)] mb-6">LA NOSTRA FILOSOFIA</h3>
            <p className="text-[var(--purple-deep)]/70 mb-4">
              In XP-L4B crediamo che l&apos;apprendimento e l&apos;engagement siano esperienze che possono e devono essere coinvolgenti. La nostra mission è trasformare il modo in cui le aziende formano, coinvolgono e comunicano attraverso l&apos;uso strategico di meccaniche di gioco ed esperienze immersive.
            </p>
            
            <motion.h4 
              className="text-2xl font-heading text-center text-[var(--blue)] mt-12 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              IL NOSTRO APPROCCIO IN 4 FASI
            </motion.h4>
            
            <div className="max-w-4xl mx-auto relative">
              <motion.p 
                className="text-[var(--purple-deep)]/70 mb-10 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Abbiamo sviluppato un processo strutturato che garantisce risultati concreti e misurabili per ogni progetto. Questo metodo sistematico ci permette di trasformare qualsiasi sfida aziendale in un&apos;opportunità di crescita attraverso esperienze coinvolgenti.
              </motion.p>
              
              {/* Journey path connecting the cards */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-[480px] w-1 bg-gradient-to-b from-[var(--purple-light)] via-[var(--blue)] to-[var(--purple-deep)] rounded-full opacity-40 mx-auto z-0"></div>
            
              <div className="space-y-12 relative z-10">
                <motion.div 
                  className="flex items-start bg-white p-6 rounded-xl border border-[var(--purple-light)]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[var(--purple-light)] text-white flex items-center justify-center font-heading mr-5 flex-shrink-0 text-xl shadow-md"
                    whileHover={{ rotate: 10 }}
                  >1</motion.div>
                  <div>
                    <h5 className="font-heading text-[var(--purple-deep)] mb-3 text-xl">Analisi del mercato delle competenze e fabbisogno aziendale</h5>
                    <p className="text-[var(--purple-deep)]/70 mb-3">Iniziamo con un'analisi dettagliata del vostro contesto aziendale, identificando:</p>
                    <ul className="list-disc list-inside text-[var(--purple-deep)]/70 ml-2 space-y-2">
                      <li>Gap di competenze critiche nel vostro team</li>
                      <li>Obiettivi strategici di business da supportare</li>
                      <li>Punti di attrito nell'engagement attuale</li>
                      <li>Stile di apprendimento prevalente nei destinatari</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-white p-6 rounded-xl border border-[var(--blue)]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[var(--blue)] text-white flex items-center justify-center font-heading mr-5 flex-shrink-0 text-xl shadow-md"
                    whileHover={{ rotate: 10 }}
                  >2</motion.div>
                  <div>
                    <h5 className="font-heading text-[var(--purple-deep)] mb-3 text-xl">Progettazione di soluzioni personalizzate</h5>
                    <p className="text-[var(--purple-deep)]/70 mb-3">Creiamo il percorso ideale, combinando le nostre tecnologie proprietarie con contenuti su misura:</p>
                    <ul className="list-disc list-inside text-[var(--purple-deep)]/70 ml-2 space-y-2">
                      <li>Architettura dell'esperienza e meccaniche di engagement</li>
                      <li>Selezione delle tecnologie più adatte (VR, AR, gamification)</li>
                      <li>Sviluppo di contenuti formativi specifici per il vostro settore</li>
                      <li>Integrazione con i sistemi aziendali esistenti</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-white p-6 rounded-xl border border-[var(--aqua-green)]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[var(--aqua-green)] text-white flex items-center justify-center font-heading mr-5 flex-shrink-0 text-xl shadow-md"
                    whileHover={{ rotate: 10 }}
                  >3</motion.div>
                  <div>
                    <h5 className="font-heading text-[var(--purple-deep)] mb-3 text-xl">Implementazione e supporto continuo</h5>
                    <p className="text-[var(--purple-deep)]/70 mb-3">Gestiamo l'intero processo di erogazione per massimizzare i risultati:</p>
                    <ul className="list-disc list-inside text-[var(--purple-deep)]/70 ml-2 space-y-2">
                      <li>Formazione degli amministratori interni sulla piattaforma</li>
                      <li>Lancio guidato con sessioni di onboarding per gli utenti</li>
                      <li>Monitoraggio in tempo reale dell'adozione e dell'engagement</li>
                      <li>Supporto tecnico e assistenza continua</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-white p-6 rounded-xl border border-[var(--purple-deep)]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[var(--purple-deep)] text-white flex items-center justify-center font-heading mr-5 flex-shrink-0 text-xl shadow-md"
                    whileHover={{ rotate: 10 }}
                  >4</motion.div>
                  <div>
                    <h5 className="font-heading text-[var(--purple-deep)] mb-3 text-xl">Misurazione e ottimizzazione continua</h5>
                    <p className="text-[var(--purple-deep)]/70 mb-3">Analizziamo sistematicamente i risultati e perfezioniamo l'esperienza:</p>
                    <ul className="list-disc list-inside text-[var(--purple-deep)]/70 ml-2 space-y-2">
                      <li>Dashboard personalizzate con KPI specifici per il vostro business</li>
                      <li>Report periodici con analisi dei trend e benchmark di settore</li>
                      <li>Identificazione delle aree di miglioramento</li>
                      <li>Iterazioni e aggiornamenti basati sui dati raccolti</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 p-6 bg-white rounded-xl border border-[var(--aqua-green)]/30 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <motion.h5 
                  className="font-heading text-[var(--purple-deep)] mb-3 text-xl text-center"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Il nostro impegno verso i risultati
                </motion.h5>
                <p className="text-[var(--purple-deep)]/70">
                  Questo approccio metodico ci permette di garantire non solo esperienze coinvolgenti, ma soprattutto risultati tangibili per il vostro business. Ogni fase è progettata per massimizzare il ROI dell'investimento formativo, superando le statistiche che mostrano come il 70% degli investimenti tradizionali in formazione risultino inefficaci.
                </p>
              </motion.div>
            </div>
            <p className="text-[var(--purple-deep)]/70 mb-4">
              Fondata nel 2018 da un gruppo di appassionati di tecnologia e videogiochi con esperienza nel settore corporate, XP-L4B unisce competenze tecniche all'avanguardia con una profonda comprensione delle dinamiche aziendali.
            </p>
            <p className="text-[var(--purple-deep)]/70">
              Il nostro approccio si basa sul connubio perfetto tra esperienza ludica e obiettivi aziendali, creando soluzioni su misura che non solo intrattengono, ma generano risultati tangibili e misurabili.
            </p>

            <div className="mt-8 flex space-x-4">
              <motion.a
                href="/chi-siamo"
                className="bg-[var(--purple-deep)] text-white hover:bg-[var(--purple-light)] font-heading py-2 px-6 rounded-full transition-all duration-300 inline-flex items-center interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SCOPRI DI PIÙ
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for company image or video */}
            <div className="aspect-video bg-gradient-to-tr from-[var(--purple-deep)] to-[var(--blue)] rounded-lg shadow-xl overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Guarda il nostro showreel
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-heading text-[var(--purple-deep)] mb-8 text-center">IL NOSTRO TEAM</h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--gray)]/20 interactive"
            >
              <div 
                className="h-48 bg-[var(--purple-light)] relative"
                style={{ backgroundImage: 'url("/placeholder-profile.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--purple-deep)] to-transparent"></div>
              </div>

              <div className="p-6 relative mt-[-40px]">
                <div className="w-16 h-16 rounded-full bg-[var(--aqua-green)] border-4 border-white overflow-hidden mb-3">
                  <div 
                    className="w-full h-full"
                    style={{ backgroundImage: 'url("/placeholder-avatar.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                </div>

                <h4 className="text-xl font-heading text-[var(--purple-deep)]">{member.name}</h4>
                <p className="text-[var(--blue)] text-sm mb-3">{member.role}</p>
                <p className="text-[var(--purple-deep)]/70 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--purple-light)] hover:text-[var(--purple-deep)] transition-colors duration-300"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--purple-light)] hover:text-[var(--purple-deep)] transition-colors duration-300"
                    >
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="text-[var(--purple-light)] hover:text-[var(--purple-deep)] transition-colors duration-300"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
