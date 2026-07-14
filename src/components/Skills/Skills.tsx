import React from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import SkillsAccordion from './SkillsAccordion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full min-h-screen relative p-6 md:p-20 flex z-10 flex-col items-center justify-center overflow-hidden">
      
      {/* Same glass panel as About section */}
      <div className="w-full h-full backdrop-blur-md bg-bg-main/40 dark:bg-bg-main/30 border border-grid rounded-3xl p-6 md:p-12 shadow-lg flex flex-col justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full flex flex-col h-full"
        >
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="font-editorial text-main text-3xl md:text-5xl tracking-tight inline-block border-b border-grid pb-2">
              System Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-1">
            
            {/* Left Side: Terminal View */}
            <div className="w-full flex items-center justify-center">
              <Terminal />
            </div>

            {/* Right Side: Accordion */}
            <div className="w-full h-full flex flex-col justify-center">
              <SkillsAccordion />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
