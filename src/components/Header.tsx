import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { FaGamepad } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [playMode, setPlayMode] = useState(false);
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

  // Toggle between corporate and play mode
  const togglePlayMode = () => {
    setPlayMode(!playMode);
    if (!playMode) {
      document.body.classList.add('play-mode');
    } else {
      document.body.classList.remove('play-mode');
    }
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    // { name: 'Blog', path: '/blog' }, // Temporaneamente disabilitato
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a0d2e] bg-opacity-95 backdrop-blur-md shadow-lg' : 'bg-[#1a0d2e] bg-opacity-80'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-28 h-auto flex items-center justify-start overflow-hidden">
              <Logo className="w-full" useHorizontal={true} animated={false} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="font-body transition-colors duration-200 text-white hover:text-[var(--aqua-green)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Play Mode Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={togglePlayMode}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${playMode ? 'bg-[var(--aqua-green)] text-[var(--purple-deep)]' : 'bg-[var(--purple-light)] text-white'}`}
          >
            <FaGamepad className="mr-2" />
            <span>{playMode ? 'Corporate Mode' : 'Play Mode'}</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-body transition-colors duration-200 py-2 ${scrolled ? 'text-white hover:text-[var(--aqua-green)]' : 'text-white hover:text-[var(--aqua-green)]'}`}
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
