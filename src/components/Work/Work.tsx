import React from 'react';
import { motion } from 'framer-motion';
import { workData } from './workData';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  return (
    <section id="work" className="w-full min-h-screen relative p-6 md:p-20 flex z-10 flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full backdrop-blur-md bg-bg-main/60 dark:bg-bg-main/40 border border-grid/50 rounded-3xl p-6 md:p-12 shadow-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h2 className="font-editorial text-main text-3xl md:text-5xl tracking-tight inline-block border-b border-grid pb-2">
            Work & Projects
          </h2>
        </motion.div>

        {/* 4 Column Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 flex-1 items-stretch">
          {workData.map((item, index) => (
            <WorkCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Work;
