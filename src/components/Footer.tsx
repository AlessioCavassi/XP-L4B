import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Logo from './Logo';
import WaveDivider from './WaveDivider';
import FooterParticles from './FooterParticles';
import FooterLoader from './FooterLoader';
import dynamic from 'next/dynamic';

const FooterGlow = dynamic(() => import('./FooterGlow'), {
  ssr: false,
  loading: () => null,
});
import { FaArrowUp, FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { PiThreadsLogoBold } from 'react-icons/pi';

// Motion components
const MotionFooter = motion.footer;
const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionLi = motion.li;

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Handle scroll for parallax and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: 'blur(2px)'
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: i * 0.05
      }
    })
  };

  // Social links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/xp-l4b/',
      icon: FaLinkedin,
      color: 'from-[#0A66C2] to-[#004182]'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@xpl4b',
      icon: FaYoutube,
      color: 'from-[#FF0000] to-[#CC0000]',
      nativeHref: 'vnd.youtube://channel/UCXQ0hX9dQ5Q5Q5Q5Q'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/XPL4Bsrl',
      icon: FaTwitter,
      color: 'from-[#1DA1F2] to-[#1A8CD8]',
      nativeHref: 'twitter://user?screen_name=XPL4Bsrl'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/xpl4b2/',
      icon: FaInstagram,
      color: 'from-[#E1306C] to-[#C13584]',
      nativeHref: 'instagram://user?username=xpl4b2'
    },
    {
      name: 'Threads',
      href: 'https://www.threads.com/@xpl4b2',
      icon: PiThreadsLogoBold,
      color: 'from-gray-900 to-gray-600',
      nativeHref: 'threads://user?username=xpl4b2'
    }
  ];

  // Menu links
  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Contatti', href: '/contatti' },
    { name: 'Blog', href: '/blog' },
  ];

  // Service links
  const serviceLinks = [
    { name: 'Realtà Virtuale', href: '/servizi/realta-virtuale' },
    { name: 'Realtà Aumentata', href: '/servizi/realta-aumentata' },
    { name: 'Gamification', href: '/servizi/gamification' },
    { name: 'Percorsi di reskilling e upskilling', href: '/servizi/percorsi-interattivi' },
    { name: 'Riunioni ludiche e digitali', href: '/servizi/team-building' },
    { name: 'Digital Engagement', href: '/servizi/digital-engagement' },
  ];

  return (
    <footer 
      ref={footerRef}
      className={`bg-gradient-to-b from-white to-[#f9f5ff] text-[var(--purple-deep)] relative overflow-hidden ${className}`}
    >
      <FooterGlow className="" />
      <FooterLoader />
      
      {/* Back to top button */}
      <AnimatePresence>
        {isVisible && (
          <MotionButton
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-[#6D28D9] to-[#00B2A9] text-white rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: '0 8px 25px 0 rgba(109, 40, 217, 0.3)'
            }}
            whileTap={{ 
              scale: 0.95,
              boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)'
            }}
            aria-label="Torna su"
          >
            <MotionDiv
              className="relative w-6 h-6 flex items-center justify-center"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                visible: {
                  y: [0, -3, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                },
                hidden: { y: 0 }
              }}
            >
              <FaArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </MotionDiv>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Torna su
            </span>
          </MotionButton>
        )}
      </AnimatePresence>

      <WaveDivider />
      <FooterParticles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo and Description */}
          <MotionDiv 
            className="mb-8 lg:mb-0"
            variants={itemVariants}
            custom={0}
          >
            <div className="mb-4">
              <Logo className="w-full" useHorizontal={true} animated={false} />
            </div>
            <p className="text-[var(--purple-deep)]/70 mb-4">
              Trasformiamo la formazione aziendale in esperienze coinvolgenti e memorabili attraverso la gamification e le tecnologie immersive.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <MotionA
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 rounded-full group"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                  custom={index + 1}
                  onClick={social.nativeHref ? (e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      window.location.href = social.href;
                    }, 500);
                    window.location.href = social.nativeHref;
                  } : undefined}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <social.icon className={`relative w-5 h-5 text-[var(--purple-deep)]/70 group-hover:text-white transition-colors duration-300 ${social.name === 'Threads' ? 'scale-110' : ''}`} />
                </MotionA>
              ))}
            </div>
          </MotionDiv>

          {/* Column 2: Menu */}
          <MotionDiv 
            className="mb-8 lg:mb-0"
            variants={itemVariants}
            custom={1}
          >
            <h3 className="text-lg font-bold text-[var(--purple-deep)] mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <MotionLi 
                  key={link.name}
                  variants={itemVariants}
                  custom={index + 1}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <Link 
                    href={link.href}
                    className="relative inline-flex items-center text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-all duration-300 group-hover:font-medium hover:pl-2"
                  >
                    <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] rounded-full -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform group-hover:scale-110"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 3: Services */}
          <MotionDiv 
            className="mb-8 lg:mb-0"
            variants={itemVariants}
            custom={2}
          >
            <h3 className="text-lg font-bold text-[var(--purple-deep)] mb-4">Servizi</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <MotionLi 
                  key={link.name}
                  variants={itemVariants}
                  custom={index + 1}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <Link 
                    href={link.href}
                    className="relative inline-flex items-center text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-all duration-300 group-hover:font-medium hover:pl-2"
                  >
                    <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] rounded-full -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform group-hover:scale-110"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 4: Contact */}
          <MotionDiv 
            variants={itemVariants}
            custom={3}
          >
            <h3 className="text-lg font-bold text-[var(--purple-deep)] mb-4">Contatti</h3>
            <ul className="space-y-3">
              <MotionLi 
                className="flex items-start space-x-3"
                variants={itemVariants}
                custom={1}
              >
                <FaMapMarkerAlt className="text-[var(--aqua-green)] mt-1 flex-shrink-0" />
                <span className="text-[var(--purple-deep)]/70">
                  Via Giotto 3<br />20844 Triuggio (MB), Italia
                </span>
              </MotionLi>
              <MotionLi 
                className="flex items-start space-x-3"
                variants={itemVariants}
                custom={2}
              >
                <FaPhone className="text-[var(--aqua-green)] mt-1 flex-shrink-0" />
                <a 
                  href="tel:+393518800106" 
                  className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    +39 351 880 0106
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </MotionLi>
              <MotionLi 
                className="flex items-start space-x-3"
                variants={itemVariants}
                custom={3}
              >
                <FaEnvelope className="text-[var(--aqua-green)] mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@riccardomangano.org" 
                  className="text-[var(--purple-deep)]/70 hover:text-[var(--purple-deep)] transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    info@riccardomangano.org
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D28D9] to-[#00B2A9] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </MotionLi>
            </ul>
          </MotionDiv>
        </div>

        {/* Copyright */}
        <MotionDiv 
          className="mt-12 pt-6 border-t border-[var(--purple-deep)]/10 text-center text-[var(--purple-deep)]/60 text-sm"
          variants={itemVariants}
          custom={4}
        >
          <p>&copy; {year} XP-L4B. Tutti i diritti riservati.</p>
        </MotionDiv>
      </div>
    </footer>
  );
};

export default Footer;
