import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategories } from './skillsData';

const SkillsAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full justify-center h-full">
      {skillsCategories.map((category, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={index} 
            className={`border-b border-grid pb-4 transition-colors duration-500 ${isOpen ? 'border-main' : ''}`}
          >
            {/* Header / Toggle */}
            <button 
              onClick={() => toggleOpen(index)}
              className="w-full flex justify-between items-center py-2 text-left focus:outline-none group cursor-pointer"
            >
              <h3 className={`font-editorial text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isOpen ? 'text-main' : 'text-muted group-hover:text-main/80'}`}>
                {category.title}
              </h3>
              
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span className={`absolute w-full h-[1px] bg-main transition-transform duration-300 ${isOpen ? 'rotate-180 bg-main' : 'bg-muted group-hover:bg-main/80'}`}></span>
                <span className={`absolute w-full h-[1px] bg-main transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-90 bg-muted group-hover:bg-main/80'}`}></span>
              </div>
            </button>

            {/* Content Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 flex flex-col gap-4 font-computational">
                    <p className="text-muted text-xs md:text-sm leading-relaxed text-justify">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-grid text-main text-[0.65rem] md:text-xs tracking-wide shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsAccordion;
