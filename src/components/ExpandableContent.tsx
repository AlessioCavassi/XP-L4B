import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ContentSection {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
}

interface ExpandableContentProps {
  sections: ContentSection[];
  allowMultiple?: boolean;
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({ 
  sections, 
  allowMultiple = false 
}) => {
  const [expandedSections, setExpandedSections] = useState<number[]>(allowMultiple ? [] : [-1]);

  const toggleSection = (index: number) => {
    if (allowMultiple) {
      // Toggle for multiple expanded sections
      setExpandedSections(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      );
    } else {
      // Toggle for single expanded section
      setExpandedSections([expandedSections[0] === index ? -1 : index]);
    }
  };

  const isSectionExpanded = (index: number) => {
    return allowMultiple 
      ? expandedSections.includes(index) 
      : expandedSections[0] === index;
  };

  return (
    <div className="w-full space-y-3">
      {sections.map((section, index) => (
        <div key={index} className="border border-[var(--purple-light)]/10 rounded-xl overflow-hidden bg-white shadow-md">
          <motion.div
            className={`p-4 flex items-center justify-between cursor-pointer border-b-2 border-[var(--aqua-green)] ${
              isSectionExpanded(index) ? 'bg-white' : 'bg-white/90 hover:bg-white/95'
            } transition-colors duration-200`}
            onClick={() => toggleSection(index)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              {section.icon && (
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: section.color || 'var(--aqua-green)' }}
                >
                  {section.icon}
                </div>
              )}
              <h3 className="font-bold text-lg text-[var(--purple-deep)] drop-shadow-sm">{section.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: isSectionExpanded(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--purple-light)]"
            >
              {isSectionExpanded(index) ? <FaChevronUp /> : <FaChevronDown />}
            </motion.div>
          </motion.div>
          
          <AnimatePresence>
            {isSectionExpanded(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 border-t border-[var(--purple-light)]/30 bg-white text-[var(--purple-deep)]">
                  {section.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ExpandableContent;
