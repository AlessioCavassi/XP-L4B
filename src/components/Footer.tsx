import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--purple-deep)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="polygon-bg opacity-5"></div>
      
      {/* Top section with columns */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <Logo className="h-12 w-12" animated={false} />
              <span className="ml-3 text-2xl font-heading">XP-L4B</span>
            </div>
            <p className="text-white/70 mb-6">
              Innoviamo l'engagement digitale con esperienze ludiche e soluzioni VR/AR che trasformano la formazione aziendale.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[var(--purple-light)] p-2 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300 text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[var(--purple-light)] p-2 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300 text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[var(--purple-light)] p-2 rounded-full hover:bg-[var(--aqua-green)] transition-colors duration-300 text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading mb-6">LINK RAPIDI</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-heading mb-6">SERVIZI</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servizi/realta-virtuale" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Realtà Virtuale
                </Link>
              </li>
              <li>
                <Link href="/servizi/realta-aumentata" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Realtà Aumentata
                </Link>
              </li>
              <li>
                <Link href="/servizi/gamification" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Gamification
                </Link>
              </li>
              <li>
                <Link href="/servizi/formazione-interattiva" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Formazione Interattiva
                </Link>
              </li>
              <li>
                <Link href="/servizi/team-building" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                  Team Building Digitale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading mb-6">CONTATTI</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[var(--aqua-green)] mt-1 mr-3" />
                <span className="text-white/70">Via dell'Innovazione, 42<br />20129 Milano, Italia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[var(--aqua-green)] mr-3" />
                <span className="text-white/70">+39 02 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[var(--aqua-green)] mr-3" />
                <a href="mailto:info@riccardomangano.org" className="text-white/70 hover:text-[var(--aqua-green)] transition-colors duration-300">
                info@riccardomangano.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              &copy; {year} XP-L4B. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/termini" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Termini e Condizioni
              </Link>
              <Link href="/cookies" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#top"
        className="bg-[var(--purple-light)] hover:bg-[var(--aqua-green)] text-white w-10 h-10 rounded-full flex items-center justify-center fixed bottom-8 right-8 shadow-lg z-50 transition-colors duration-300"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Torna in cima"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
