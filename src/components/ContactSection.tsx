import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection: React.FC = () => {
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
    <section id="contatti" className="py-20 relative bg-[var(--purple-deep)] text-white overflow-hidden">
      {/* Background elements */}
      <div className="polygon-bg opacity-10"></div>
      
      {/* Triangle decoration */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[100px] border-t-transparent border-r-[var(--aqua-green)] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[100px] border-l-[100px] border-b-transparent border-l-[var(--blue)] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-4">CONTATTACI</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            In Italia solo il <span className="font-bold text-[var(--aqua-green)]">5% dei lavoratori</span> si sente coinvolto rispetto alla media mondiale del 37%. Parliamo di come possiamo trasformare questa sfida in un&apos;opportunità per la tua azienda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--aqua-green)]/20 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-heading mb-3">TRASFORMA L&apos;ENGAGEMENT DELLA TUA AZIENDA</h3>
              <p className="text-white/90 mb-4">L&apos;83% dei dipendenti che partecipano a programmi gamificati mostrano una maggiore motivazione. Contattaci oggi per iniziare il tuo percorso verso un&apos;esperienza formativa rivoluzionaria.</p>
            </div>
            
            {formStatus.submitted && formStatus.success ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[var(--aqua-green)]/20 text-white p-6 rounded-lg mb-6"
              >
                <h4 className="text-xl font-heading mb-2">Messaggio inviato!</h4>
                <p>{formStatus.message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nome*</label>
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
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefono</label>
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
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Azienda</label>
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
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Servizio di interesse*</label>
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
                    <option value="training">Formazione Interattiva</option>
                    <option value="team-building">Team Building Digitale</option>
                    <option value="other">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Messaggio*</label>
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
                  <label htmlFor="privacy" className="text-sm text-white/80">
                    Acconsento al trattamento dei dati personali secondo la <a href="/privacy" className="text-[var(--aqua-green)] hover:underline">Privacy Policy</a>*
                  </label>
                </div>

                <div className="pt-4">
                  <p className="text-white/80 text-sm mb-4">Compila il form per ricevere una consulenza gratuita su come migliorare l&apos;engagement nella tua azienda!</p>
                  <motion.button
                    type="submit"
                    className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-[var(--purple-deep)] font-heading py-3 px-8 rounded-full transition-all duration-300 text-lg interactive w-full"
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
            <h3 className="text-2xl font-heading mb-6">CONTATTA IL TEAM XP-L4B</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[var(--purple-light)] p-3 rounded-full mr-4">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading mb-1">Sede principale</h4>
                  <p className="text-white/80">Via dell'Innovazione, 42<br />20129 Milano, Italia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--purple-light)] p-3 rounded-full mr-4">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading mb-1">Telefono</h4>
                  <p className="text-white/80">+39 02 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--purple-light)] p-3 rounded-full mr-4">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading mb-1">Email</h4>
                  <p className="text-white/80">info@riccardomangano.org</p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h4 className="text-lg font-heading mb-4">Seguici sui social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--purple-light)] p-3 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--purple-light)] p-3 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--purple-light)] p-3 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-[var(--purple-light)]/20 p-4 rounded-lg">
                <h4 className="text-lg font-heading mb-4">Orari di disponibilità</h4>
                <div className="space-y-2 text-white/80">
                  <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p>Sabato - Domenica: Chiuso</p>
                </div>
                <p className="text-white/80 mt-4 text-sm italic">Risposta garantita entro 24 ore lavorative</p>
              </div>
              
              <div className="mt-8 bg-white/10 p-6 rounded-lg border border-[var(--aqua-green)]/30">
                <h4 className="text-lg font-heading mb-2 text-center text-[var(--aqua-green)]">PRONTI A TRASFORMARE L'ENGAGEMENT?</h4>
                <p className="text-white/90 text-center">Scopri come possiamo aiutarti a passare dal 5% al 90% di coinvolgimento del tuo team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
