import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Model', value: 'Portfolio v3' },
  { label: 'Inference', value: '3.2 ms' },
  { label: 'Accuracy', value: '97.6%' },
  { label: 'Nodes', value: '4096' },
  { label: 'Epoch', value: '145' },
  { label: 'Representation', value: 'Point Cloud' }
];

const RightSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="flex flex-col font-computational pointer-events-auto w-[220px]"
    >
      <div className="text-muted text-[0.6rem] uppercase tracking-widest border-b border-grid pb-2 mb-4 text-right opacity-50">
        System Metrics // 0x4F2A
      </div>
      
      <div className="flex flex-col gap-3 opacity-60">
        {stats.map((stat, i) => (
          <div key={i} className="flex justify-between items-center text-[0.7rem]">
            <span className="text-muted tracking-wide">{stat.label}</span>
            <span className="text-main font-medium font-mono">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-5 gap-[2px] opacity-30">
        {Array.from({ length: 25 }).map((_, i) => {
          // Determine if this cell is filled or empty to start with
          const isFilled = i % 7 === 0 || i % 11 === 0 || i === 12;
          
          return (
            <motion.div 
              key={i} 
              className={`aspect-square border border-grid ${isFilled ? 'bg-main' : 'bg-transparent'}`}
              animate={{
                opacity: isFilled ? [0.2, 1, 0.2] : [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 1.5 + (i % 3), // random-looking durations based on index
                repeat: Infinity,
                delay: (i % 5) * 0.2, // staggered delay
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default RightSection;
