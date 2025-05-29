import React from 'react';
import { motion } from 'framer-motion';

const SkillTreeSection: React.FC = () => {
  return (
    <div className="py-20 bg-[#0c0a18]/95 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center relative z-10">
            <h3 className="font-heading text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--aqua-green)] via-[var(--blue)] to-[var(--purple-light)] relative z-10 inline-block mb-6">
              SKILL TREE: LE NOSTRE 4 FASI
            </h3>
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-[var(--aqua-green)] to-transparent mx-auto my-6"></div>
            
            <motion.p 
              className="text-white mx-auto max-w-3xl text-center relative z-10 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Abbiamo sviluppato un processo strutturato che garantisce risultati concreti e misurabili per ogni progetto. Il nostro <span className="text-white font-medium">approccio sistematico</span> trasforma qualsiasi sfida aziendale in <span className="text-white font-medium">opportunità di crescita</span> attraverso esperienze coinvolgenti.
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative mt-28 mb-40">
          {/* Tech/Gaming inspired skill tree nodes - Grid layout */}
          <div className="skill-path relative mx-auto pb-16">
            {/* Horizontal connecting line between nodes */}
            <div className="hidden lg:block absolute left-[5%] right-[5%] top-24 h-2 bg-gradient-to-r from-[var(--purple-light)]/70 via-[var(--blue)]/50 to-[var(--purple-deep)]/70 rounded-full z-0 glow-line"></div>
            
            {/* Flex container for horizontal layout - one row */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-6 relative z-10 w-full max-w-[1400px] overflow-visible pb-6 lg:pb-10 mx-auto px-4">
            
              {/* FASE 1 */}
              <motion.div
                className="relative z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Node indicator with pulse effect */}
                <div className="absolute left-1/2 -top-8 z-20 transform -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#141127] border-2 border-[var(--aqua-green)] flex items-center justify-center relative">
                    <span className="absolute inset-0 rounded-full bg-[var(--aqua-green)] animate-ping opacity-30"></span>
                    <span className="text-[var(--aqua-green)] font-heading text-2xl">1</span>
                  </div>
                </div>
              
                {/* Main content panel */}
                <div className="skill-node-panel text-white group relative h-full">
                  {/* Holographic tech border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--purple-light)] via-[var(--aqua-green)] to-[var(--purple-light)] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  
                  <div className="relative bg-[#141127] border border-[var(--purple-light)]/20 rounded-xl p-6 shadow-2xl overflow-hidden h-full text-white">
                    {/* Tech background elements */}
                    <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--aqua-green)] to-transparent"></div>
                    
                    {/* Header with icon - centered and larger */}
                    <div className="flex flex-col items-center justify-center text-center mb-5 mt-5">
                      <div className="mb-3 tech-icon bg-[var(--purple-light)]/20 p-3 rounded-lg border border-[var(--aqua-green)]/40 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--aqua-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading text-white mb-1">
                          <span className="text-white">ANALISI</span>
                        </h4>
                        <h5 className="text-white text-base font-semibold mb-2">DEL FABBISOGNO AZIENDALE</h5>
                      </div>
                    </div>
                    
                    {/* Content - improved spacing and readability */}
                    <div className="px-4 text-left">
                      <p className="text-white mt-2 leading-relaxed">Iniziamo con un&apos;analisi dettagliata del vostro contesto aziendale.</p>
                      
                      <div className="space-y-3">
                        {/* Skill points - improved presentation */}
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>Gap di competenze critiche</p>
                        </div>
                        
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>Obiettivi strategici</p>
                        </div>
                        
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>Punti di engagement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FASE 2 */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-1/2 -top-8 z-20 transform -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#141127] border-2 border-[var(--blue)] flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[var(--blue)] animate-ping opacity-30"></span>
                    <span className="text-[var(--blue)] font-heading text-2xl">2</span>
                  </div>
                </div>
                
                {/* Main content panel */}
                <div className="skill-node-panel text-white group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--blue)] via-[var(--aqua-green)] to-[var(--blue)] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  
                  <div className="relative bg-[#141127] border border-[var(--blue)]/20 rounded-xl p-6 shadow-2xl overflow-hidden h-full text-white">
                    <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent"></div>
                    
                    <div className="flex flex-col items-center justify-center text-center mb-5 mt-5">
                      <div className="mb-3 tech-icon bg-[var(--blue)]/20 p-3 rounded-lg border border-[var(--blue)]/40 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading text-white mb-1">
                          <span className="text-white">PROGETTAZIONE</span>
                        </h4>
                        <h5 className="text-white text-base font-semibold mb-2">SU MISURA</h5>
                      </div>
                    </div>
                    
                    <div className="px-4 text-left">
                      <p className="text-white mt-2 leading-relaxed">Creiamo percorsi ideali combinando le nostre tecnologie proprietarie con contenuti su misura.</p>
                      
                      <div className="space-y-3">
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>Architettura dell&apos;esperienza</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FASE 3 */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-1/2 -top-8 z-20 transform -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#141127] border-2 border-[var(--aqua-green)] flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[var(--aqua-green)] animate-ping opacity-30"></span>
                    <span className="text-[var(--aqua-green)] font-heading text-2xl">3</span>
                  </div>
                </div>
                
                {/* Main content panel */}
                <div className="skill-node-panel text-white group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--aqua-green)] via-[var(--blue)] to-[var(--aqua-green)] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  
                  <div className="relative bg-[#141127] border border-[var(--aqua-green)]/20 rounded-xl p-6 shadow-2xl overflow-hidden h-full text-white">
                    <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--aqua-green)] to-transparent"></div>
                    
                    <div className="flex flex-col items-center justify-center text-center mb-5 mt-5">
                      <div className="mb-3 tech-icon bg-[var(--aqua-green)]/20 p-3 rounded-lg border border-[var(--aqua-green)]/40 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--aqua-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading text-white mb-1">
                          <span className="text-white">DELIVERY</span>
                        </h4>
                        <h5 className="text-white text-base font-semibold mb-2">DELL&apos;ESPERIENZA</h5>
                      </div>
                    </div>
                    
                    <div className="px-4 text-left">
                      <p className="text-white mt-2 leading-relaxed">Gestiamo l&apos;intero processo di erogazione per massimizzare risultati e successo.</p>
                      
                      <div className="space-y-3">
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>Supporto attivo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FASE 4 */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-1/2 -top-8 z-20 transform -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#141127] border-2 border-[var(--purple-deep)] flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[var(--purple-deep)] animate-ping opacity-30"></span>
                    <span className="text-[var(--purple-deep)] font-heading text-2xl">4</span>
                  </div>
                </div>
                
                {/* Main content panel */}
                <div className="skill-node-panel text-white group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--purple-deep)] via-[var(--purple-light)] to-[var(--purple-deep)] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  
                  <div className="relative bg-[#141127] border border-[var(--purple-deep)]/20 rounded-xl p-6 shadow-2xl overflow-hidden h-full text-white">
                    <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--purple-deep)] to-transparent"></div>
                    
                    <div className="flex flex-col items-center justify-center text-center mb-5 mt-5">
                      <div className="mb-3 tech-icon bg-[var(--purple-deep)]/20 p-3 rounded-lg border border-[var(--purple-deep)]/40 inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--purple-deep)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading text-white mb-1">
                          <span className="text-white">ANALISI</span>
                        </h4>
                        <h5 className="text-white text-base font-semibold mb-2">E PERFEZIONAMENTO</h5>
                      </div>
                    </div>
                    
                    <div className="px-4 text-left">
                      <p className="text-white mt-2 leading-relaxed">Analizziamo i risultati e perfezionamo l&apos;esperienza con il nostro sistema avanzato.</p>
                      
                      <div className="space-y-3">
                        <div className="text-white text-sm flex items-center bg-[var(--purple-deep)]/30 py-2 px-4 rounded-md mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--aqua-green)] mr-3 flex-shrink-0"></div>
                          <p>XP-L4B Analytics Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Aggiunta di stili globali per garantire testo bianco */}
      <style jsx global>{`
        .skill-node-panel * {
          color: white !important;
        }
        .skill-node-panel h4, 
        .skill-node-panel h5, 
        .skill-node-panel p, 
        .skill-node-panel span, 
        .skill-node-panel div {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default SkillTreeSection;
