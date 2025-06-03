import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface ContactSectionProps {
  isInPopup?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isInPopup = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send the form data to your backend
    // This is a simulation of a successful form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Grazie per averci contattato! Ti risponderemo al più presto.',
    });

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
    }, 500);
  };

  return (
    <section 
      id={!isInPopup ? "contatti" : undefined}
      className={`relative ${isInPopup ? 'py-12' : 'py-20'} bg-[var(--purple-deep)] overflow-hidden text-white`}
    >
      {/* Risolve il problema di sovrapposizione stili per il pulsante */}
      <style dangerouslySetInnerHTML={{ __html: `
        #contatti button[type="submit"], button.bg-[var(--aqua-green)] {
          color: black !important;
          font-weight: bold !important;
          text-shadow: none !important;
        }
      `}} />
      {/* Background elements */}
      <div className="polygon-bg opacity-10"></div>
      
      {/* Triangle decoration */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-[var(--aqua-green)] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-[var(--blue)] opacity-40"></div>
      
      <div className={`${isInPopup ? 'px-4' : 'container mx-auto px-4'} relative z-10`}>
        {isInPopup && (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-white">CONTATTACI</h2>
            <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--aqua-green)]/20 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-heading mb-3 text-white">TRASFORMA L&apos;ENGAGEMENT DELLA TUA AZIENDA</h3>
              <p className="mb-4 text-white">L&apos;83% dei dipendenti che partecipano a programmi gamificati mostrano una maggiore motivazione. Contattaci oggi per iniziare il tuo percorso verso un&apos;esperienza formativa rivoluzionaria.</p>
            </div>
            
            {formStatus.submitted && formStatus.success ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[var(--aqua-green)]/20 text-white p-6 rounded-lg mb-6"
              >
                <h4 className="text-xl font-heading mb-2 text-white">Messaggio inviato!</h4>
                <p className="text-white">{formStatus.message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Nome*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                      placeholder="La tua email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">Telefono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                      placeholder="Il tuo numero di telefono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">Azienda</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                      placeholder="La tua azienda"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">Servizio di interesse*</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                  >
                    <option value="" disabled>Seleziona un servizio</option>
                    <option value="vr">Realtà Virtuale</option>
                    <option value="ar">Realtà Aumentata</option>
                    <option value="gamification">Gamification</option>
                    <option value="training">Reskilling e Upskilling</option>
                    <option value="team-building">Team Building Digitale</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Messaggio*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--aqua-green)] text-white transition-colors duration-300"
                    placeholder="Raccontaci del tuo progetto o delle tue esigenze"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required 
                    className="mr-2 h-4 w-4 rounded border-white/30 text-[var(--aqua-green)] focus:ring-[var(--aqua-green)]"
                  />
                  <label htmlFor="privacy" className="text-sm text-white">
                    Acconsento al trattamento dei dati personali secondo la <a href="/privacy" className="text-[var(--aqua-green)] hover:underline">Privacy Policy</a>*
                  </label>
                </div>

                <div className="pt-4">
                  <p className="text-sm mb-4 text-white">Compila il form per ricevere una consulenza gratuita su come migliorare l&apos;engagement nella tua azienda!</p>
                  <motion.button
                    type="submit"
                    className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-black font-bold font-heading py-3 px-8 rounded-full transition-all duration-300 text-lg interactive w-full shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    RICHIEDI CONSULENZA GRATUITA
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading mb-6 text-white">CONTATTA IL TEAM XP-L4B</h3>
            
            <div className="space-y-8">
              {/* Elemento di posizione rimosso */}
              
              <div className="flex items-start">
                <div className="bg-[var(--purple-light)] p-3 rounded-full mr-4">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading mb-1 text-white">Telefono</h4>
                  <p className="text-white">+39 3518800106</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--purple-light)] p-3 rounded-full mr-4">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading mb-1 text-white">Email</h4>
                  <p className="text-white">riccardo@xpl4b.com</p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h4 className="text-lg font-heading mb-4 text-white">Seguici sui social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/xp-l4b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--purple-light)] p-3 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300"
                    aria-label="LinkedIn XP-L4B"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/xpl4b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--purple-light)] p-3 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300"
                    aria-label="Instagram XP-L4B"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-[var(--purple-light)]/20 p-4 rounded-lg">
                <h4 className="text-lg font-heading mb-4 text-white">Orari di disponibilità</h4>
                <div className="space-y-2">
                  <p className="text-white">Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p className="text-white">Sabato - Domenica: Su appuntamento</p>
                </div>
                <p className="mt-4 text-sm italic text-white">Risposta garantita entro 24 ore lavorative</p>
              </div>
              
              <div className="mt-8 bg-white/10 p-6 rounded-lg border border-[var(--aqua-green)]/30">
                <h4 className="text-lg font-heading mb-2 text-center text-[var(--aqua-green)]">PRONTI A TRASFORMARE L&apos;ENGAGEMENT?</h4>
                <p className="text-center text-white">Scopri come possiamo aiutarti a passare dal 5% al 90% di coinvolgimento del tuo team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
