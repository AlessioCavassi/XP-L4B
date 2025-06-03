import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { PiThreadsLogoBold } from 'react-icons/pi';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={`bg-white text-[var(--purple-deep)] border-t border-[var(--purple-light)]/20 relative overflow-hidden ${className}`}>
      {/* Background pattern */}
      <div className="polygon-bg opacity-5"></div>
      
      {/* Top section with columns */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-28 h-auto flex items-center justify-start overflow-hidden">
                <Logo className="w-full" useHorizontal={true} animated={false} />
              </div>
            </div>
            <p className="text-[var(--purple-deep)]/70 mb-6">
              Siamo qui per trasformare la tua visione in realt&agrave;. Contattaci per scoprire come possiamo aiutarti a creare esperienze straordinarie per il tuo pubblico.
            </p>
            <div className="flex space-x-3" data-component-name="Footer">
              {/* LinkedIn - supporto per app nativa */}
              <a 
                href="linkedin://company/xp-l4b"
                onClick={(e) => {
                  e.preventDefault();
                  // Prova ad aprire l'app, se fallisce apre il sito web
                  setTimeout(() => {
                    window.location.href = "https://www.linkedin.com/company/xp-l4b/";
                  }, 500);
                  window.location.href = "linkedin://company/xp-l4b";
                }}
                className="bg-[var(--purple-light)]/20 p-2 rounded-full hover:bg-[var(--purple-light)]/40 transition-colors duration-300 text-[var(--purple-deep)]"
                aria-label="LinkedIn"
                data-component-name="Footer"
              >
                <FaLinkedin size={18} />
              </a>
              
              {/* Twitter/X - supporto per app nativa */}
              <a 
                href="twitter://user?screen_name=XPL4Bsrl"
                onClick={(e) => {
                  e.preventDefault();
                  // Prova ad aprire l'app, se fallisce apre il sito web
                  setTimeout(() => {
                    window.location.href = "https://x.com/XPL4Bsrl";
                  }, 500);
                  window.location.href = "twitter://user?screen_name=XPL4Bsrl";
                }}
                className="bg-[var(--purple-light)]/20 p-2 rounded-full hover:bg-[var(--purple-light)]/40 transition-colors duration-300 text-[var(--purple-deep)]"
                aria-label="X (Twitter)"
                data-component-name="Footer"
              >
                <FaTwitter size={18} />
              </a>
              
              {/* Instagram - supporto per app nativa */}
              <a 
                href="instagram://user?username=xpl4b2"
                onClick={(e) => {
                  e.preventDefault();
                  // Prova ad aprire l'app, se fallisce apre il sito web
                  setTimeout(() => {
                    window.location.href = "https://www.instagram.com/xpl4b2/";
                  }, 500);
                  window.location.href = "instagram://user?username=xpl4b2";
                }}
                className="bg-[var(--purple-light)]/20 p-2 rounded-full hover:bg-[var(--purple-light)]/40 transition-colors duration-300 text-[var(--purple-deep)]"
                aria-label="Instagram"
                data-component-name="Footer"
              >
                <FaInstagram size={18} />
              </a>
              
              {/* Threads - supporto per app nativa */}
              <a 
                href="threads://user?username=xpl4b2"
                onClick={(e) => {
                  e.preventDefault();
                  // Prova ad aprire l'app, se fallisce apre il sito web
                  setTimeout(() => {
                    window.location.href = "https://www.threads.com/@xpl4b2";
                  }, 500);
                  window.location.href = "threads://user?username=xpl4b2";
                }}
                className="bg-[var(--purple-light)]/20 p-2 rounded-full hover:bg-[var(--purple-light)]/40 transition-colors duration-300 text-[var(--purple-deep)]"
                aria-label="Threads"
                data-component-name="Footer"
              >
                <PiThreadsLogoBold size={18} />
              </a>
              
              {/* YouTube - supporto per app nativa */}
              <a 
                href="vnd.youtube://user/XP-L4B"
                onClick={(e) => {
                  e.preventDefault();
                  // Prova ad aprire l'app, se fallisce apre il sito web
                  setTimeout(() => {
                    window.location.href = "https://www.youtube.com/@XP-L4B";
                  }, 500);
                  window.location.href = "vnd.youtube://user/XP-L4B";
                }}
                className="bg-[var(--purple-light)]/20 p-2 rounded-full hover:bg-[var(--purple-light)]/40 transition-colors duration-300 text-[var(--purple-deep)]"
                aria-label="YouTube"
                data-component-name="Footer"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links - visibile solo su desktop */}
          <div className="hidden md:block">
            <h3 className="text-xl font-heading mb-6 text-[var(--purple-deep)]">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services - visibile solo su desktop */}
          <div className="hidden md:block">
            <h3 className="text-lg font-heading mb-6">SERVIZI</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servizi/realta-virtuale" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Realtà Virtuale
                </Link>
              </li>
              <li>
                <Link href="/servizi/realta-aumentata" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Realtà Aumentata
                </Link>
              </li>
              <li>
                <Link href="/servizi/gamification" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Gamification
                </Link>
              </li>
              <li>
                <Link href="/servizi/percorsi-interattivi" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Percorsi Interattivi
                </Link>
              </li>
              <li>
                <Link href="/servizi/team-building" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  Team Building Digitale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading mb-6 text-[var(--purple-deep)]">CONTATTI</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[var(--aqua-green)] mt-1 mr-3" />
                <span className="text-[var(--purple-deep)]/70">Via Giotto 3<br />20844 Triuggio (MB), Italia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[var(--aqua-green)] mr-3" />
                <span className="text-[var(--purple-deep)]/70">+39 3518800106</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[var(--aqua-green)] mr-3" />
                <a href="mailto:riccardo@xpl4b.com" className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300">
                  riccardo@xpl4b.com
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
            <p className="text-[var(--purple-deep)]/50 text-sm">
              &copy; {year} XP-L4B s.r.l. - P.IVA 14225710962<br />
              Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[var(--purple-deep)]/50 text-sm hover:text-[var(--purple-deep)] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/termini" className="text-[var(--purple-deep)]/50 text-sm hover:text-[var(--purple-deep)] transition-colors duration-300">
                Termini e Condizioni
              </Link>
              <Link href="/cookies" className="text-[var(--purple-deep)]/50 text-sm hover:text-[var(--purple-deep)] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#top"
        className="bg-[var(--purple-deep)] hover:bg-[var(--purple-light)] text-white w-10 h-10 rounded-full flex items-center justify-center fixed bottom-8 right-8 shadow-lg z-50 transition-colors duration-300"
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
