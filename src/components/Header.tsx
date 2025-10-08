import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);


  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'HR', path: '/hr' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Cerchio sfumato - dietro i link */}
          <div className="absolute inset-0 mx-auto w-[95%] h-20 md:h-24 -mt-6 md:-mt-4 rounded-full bg-gradient-to-r from-[var(--purple-deep)] via-[var(--purple-light)] to-[var(--aqua-green)] opacity-70 blur-xl pointer-events-none z-0"></div>
          <div className="absolute inset-0 mx-auto w-[95%] h-20 md:h-24 -mt-6 md:-mt-4 rounded-full bg-gradient-to-r from-[var(--purple-deep)] via-[var(--purple-light)] to-[var(--aqua-green)] opacity-20 pointer-events-none z-0"></div>
          
          <div className="relative flex items-center justify-center md:justify-between py-4 z-10">
            {/* Link a sinistra */}
            <div className="hidden md:flex space-x-6 flex-1 justify-center">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="font-body transition-all duration-300 text-white hover:text-[var(--aqua-green)] hover:scale-105 text-lg px-3 py-1.5 rounded-full hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Logo al centro - visibile su tutti i dispositivi */}
            <div className="flex-shrink-0 md:mx-4 relative z-50">
              <Link href="/" className="block hover:scale-105 transition-transform duration-300">
                <Logo className="w-32 md:w-40 drop-shadow-lg" useHorizontal={true} animated={false} />
              </Link>
            </div>

            {/* Link a destra */}
            <div className="hidden md:flex space-x-6 flex-1 justify-center">
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="font-body transition-all duration-300 text-white hover:text-[var(--aqua-green)] hover:scale-105 text-lg px-3 py-1.5 rounded-full hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - posizionato a destra */}
            <div className="md:hidden absolute right-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
          
          {/* Effetto blur aggiuntivo */}
          <div className="absolute inset-0 mx-auto w-[95%] h-20 md:h-24 -mt-6 md:-mt-4 rounded-full bg-gradient-to-r from-[var(--purple-deep)] via-[var(--purple-light)] to-[var(--aqua-green)] opacity-20 blur-3xl pointer-events-none z-0"></div>
        </div>
        
        {/* Menu mobile espanso */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 z-50 bg-[var(--purple-darker)]/95 backdrop-blur-sm rounded-lg mt-2 shadow-2xl"
            style={{zIndex: 1000}}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block py-3 px-6 text-white hover:bg-white/10 rounded-md transition-colors text-lg font-medium hover:pl-8 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
