import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import ContactSection from './ContactSection';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal container */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[var(--purple-deep)] w-full max-w-5xl rounded-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-[var(--purple-light)] hover:bg-[var(--aqua-green)] hover:text-[var(--purple-deep)] p-2 rounded-full z-10 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                aria-label="Chiudi"
                data-component-name="ContactPopup"
              >
                <IoMdClose size={24} data-component-name="IoMdClose" />
              </button>
              
              {/* Contact form */}
              <div className="w-full max-h-[90vh] overflow-y-auto">
                <ContactSection isInPopup={true} />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
