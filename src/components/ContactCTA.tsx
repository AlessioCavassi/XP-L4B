import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import ContactPopup from './ContactPopup';

const ContactCTA: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--purple-deep)] to-[var(--purple-light)]">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--aqua-green)]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[var(--blue)]/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[var(--aqua-green)]/20 text-[var(--aqua-green)] rounded-full text-sm font-medium mb-4">
                TRASFORMA LA TUA AZIENDA
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white leading-tight">
                Pronti a <span className="text-[var(--aqua-green)]">rivoluzionare</span> l&apos;engagement e lo sviluppo professionale?
              </h2>
              
              <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
                L&apos;83% dei dipendenti che partecipano ai nostri programmi gamificati mostrano una maggiore motivazione e produttività. Inizia oggi il tuo percorso verso un&apos;esperienza di apprendimento coinvolgente.
              </p>
              
              <div className="flex justify-center">
                <motion.button
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-[var(--aqua-green)] hover:bg-[var(--aqua-green)]/90 text-[var(--purple-deep)] font-heading py-6 px-12 rounded-full text-2xl transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[var(--aqua-green)]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaRocket className="text-[var(--purple-deep)]" />
                  <span className="text-[var(--purple-deep)]">CONTATTACI ORA</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Popup */}
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default ContactCTA;
