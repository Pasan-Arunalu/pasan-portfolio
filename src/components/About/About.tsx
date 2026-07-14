import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Bio from './Bio';
import Education from './Education';
import Interests from './Interests';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full h-screen relative p-6 md:p-20 flex z-10 overflow-hidden flex items-center justify-center">
      
      {/* We use a glass panel that takes full width and height with padding */}
      <div className="w-full h-full backdrop-blur-md bg-bg-main/40 dark:bg-bg-main/30 border border-grid rounded-3xl p-6 md:p-4 shadow-lg flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center h-full w-full gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          
          {/* Top: Small Round Image */}
          <div className="w-24 h-24 md:w-40 md:h-40 flex-shrink-0 relative rounded-full overflow-hidden group bg-grid/5 border border-grid mx-auto mt-2 md:mt-6 shadow-inner">
            <img 
              src="/portrait.jpg" 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
            />
            {/* Fallback text if image isn't found */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 text-muted font-computational text-[0.6rem] text-center tracking-widest uppercase">
              Img
            </div>
          </div>

          {/* Middle: Bio */}
          <div className="w-full md:w-2/3 mx-auto">
            <Bio isExpanded={isExpanded} />
          </div>

          {/* Mobile "See More" Button */}
          <div className="md:hidden flex justify-center mt-1 mb-1">
             <button 
               onClick={() => setIsExpanded(!isExpanded)}
               className="text-muted text-[0.65rem] uppercase tracking-widest border border-grid px-4 py-1.5 rounded-full hover:text-main hover:border-main transition-colors focus:outline-none"
             >
               {isExpanded ? 'See Less' : 'See More'}
             </button>
          </div>

          {/* Bottom: Education and Interests split in half */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-18 w-full md:w-4/5 mb-2 md:mb-6 overflow-y-auto custom-scrollbar">
            <Education />
            <Interests />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
