import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SkillTreeSection from './SkillTreeSection';

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
      name: 'Riccardo Mangano',
      role: 'CEO',
      bio: 'Riccardo loves to solve complex problems with simple, elegant solutions.',
      image: '/riky.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/riccardo-mangano-973ab3158',
        email: 'riccardo@xpl4b.com'
      }
    },
    {
      id: 2,
      name: 'Alessio Cavatassi',
      role: 'AI Training & Digital Marketing Specialist',
      bio: 'Alessio integrates innovative AI technologies with digital marketing strategies to create impactful training experiences.',
      image: '/Ale.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/alessiocavatassi',
        email: 'alessio@xpl4b.com'
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section id="chi-siamo" className="py-20 bg-black relative overflow-hidden" data-component-name="AboutSection">
        {/* Grid overlay per effetto visivo */}
        <div className="grid-overlay absolute inset-0 z-0 opacity-5" data-component-name="AboutSection"></div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--purple-light)]/10 to-transparent" data-component-name="AboutSection"></div>
        <div className="polygon-bg opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
        {/* Team Section Title with cyberpunk/gaming style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white">
            IL NOSTRO TEAM
          </h2>
        </motion.div>
        
        {/* Cyber design grid */}
        {/* Grid overlay rimosso da qui e spostato sopra */}
        
        {/* Team Cards - Redesigned with cyber/gaming aesthetic */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(101, 191, 176, 0.3)",
                transition: { duration: 0.2 }
              }}
              className="cyber-card relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1E1B30] to-[#141127] border border-t-[var(--aqua-green)]/30 border-l-[var(--aqua-green)]/30 border-r-[var(--blue)]/20 border-b-[var(--blue)]/20 p-1"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--aqua-green)]/20 via-[var(--blue)]/5 to-[var(--purple-light)]/20 opacity-30 rounded-lg z-0"></div>
              
              {/* Card content container */}
              <div className="relative bg-[#141127]/80 backdrop-blur-sm team-card">
                {/* Header section with decorative elements */}
                <div className="card-header relative h-24 overflow-hidden">
                  {/* Tech pattern background */}
                  <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
                  
                  {/* Glowing line accents */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--aqua-green)]/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--blue)]/70 to-transparent"></div>
                  
                  {/* Tech/gaming inspired decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full border border-[var(--aqua-green)]/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[var(--aqua-green)] rounded-full pulse-glow"></div>
                  </div>
                  <div className="absolute top-6 left-4 w-20 h-1 bg-[var(--blue)]/30"></div>
                  <div className="absolute top-9 left-4 w-12 h-1 bg-[var(--blue)]/20"></div>
                </div>
                
                {/* Profile section */}
                <div className="p-6 pb-8 relative">
                  {/* Avatar with glow effect */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-14 profile-hexagon">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 hexagon-shape border-4 border-[var(--purple-deep)] overflow-hidden">
                        <div className="absolute inset-1 bg-gradient-to-br from-[var(--blue)]/80 to-[var(--purple-light)]/80"></div>
                      </div>
                      <div className="absolute inset-3 rounded-full overflow-hidden border border-[var(--aqua-green)]/40">
                        <div className="w-full h-full bg-cover bg-center rounded-full" 
                             style={{ 
                               backgroundImage: member.name === 'Bianca Surdu' 
                                 ? 'url(/Bianca.jpg)' 
                                 : `url(${member.image})`,
                               backgroundSize: 'cover',
                               backgroundPosition: 'center'
                             }}>
                          {!member.image.includes('riky') && member.name !== 'Bianca Surdu' && (
                            <span className="text-2xl font-bold text-[var(--purple-deep)]">
                              {member.name.charAt(0)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="absolute -inset-1 bg-[var(--aqua-green)]/20 rounded-full blur-xl z-[-1] pulse-subtle"></div>
                    </div>
                  </div>
                  
                  {/* Text content with cyber-style */}
                  <div className="mt-14 text-center text-white">
                    <h3 className="text-2xl font-heading mb-1 text-white relative inline-block">
                      <span className="relative z-10">{member.name}</span>
                      <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--aqua-green)] to-transparent"></span>
                    </h3>
                    <p className="text-[var(--aqua-green)] uppercase tracking-wider text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    
                    <div className="mb-6 text-white text-sm relative">
                      <p className="leading-relaxed text-white">{member.bio}</p>
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--blue)]/30 to-transparent"></div>
                    </div>
                    
                    {/* Social links with hover effects */}
                    <div className="flex justify-center space-x-5 pt-4 border-t border-[var(--purple-light)]/20">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-icon-cyber"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin size={20} className="relative z-10 text-[var(--aqua-green)]"/>
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={`mailto:${member.social.email}`}
                          className="social-icon-cyber"
                          aria-label="Email"
                        >
                          <FaEnvelope size={20} className="relative z-10 text-[var(--aqua-green)]"/>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bottom decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--purple-light)]/0 via-[var(--purple-light)]/40 to-[var(--purple-light)]/0"></div>
                <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-b from-[var(--purple-light)]/0 via-[var(--purple-light)]/40 to-[var(--purple-light)]/0"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SKILL TREE SECTION - AFTER TEAM */}
      <div className="mt-24 mb-16">
        <SkillTreeSection />
      </div>

    </section>

    {/* Stili globali per forzare il testo bianco nelle schede del team */}
    <style jsx global>{`
      .team-card * {
        color: white !important;
      }
      .team-card h3, 
      .team-card p, 
      .team-card span, 
      .team-card div {
        color: white !important;
      }
    `}</style>
    </>
  );
};



export default AboutSection;
