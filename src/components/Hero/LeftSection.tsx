import React from 'react';
import { motion } from 'framer-motion';

const LeftSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="flex flex-col gap-12 font-editorial pointer-events-auto max-w-[300px]"
    >
      <div>
        <p className="text-muted italic text-xl leading-relaxed tracking-wide text-left">
          &ldquo;Curiosity creates.<br/>
          Systems refine.&rdquo;
        </p>
      </div>

      <div>
        <p className="text-main text-sm leading-relaxed font-normal text-left opacity-60">
          I enjoy transforming abstract ideas<br/>
          into experiences people genuinely<br/>
          enjoy using.
        </p>
      </div>

      <div className="opacity-40 mt-4">
        {/* Simple stylized SVG for signature / abstract stroke */}
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M5 25C15 15 25 35 35 25C45 15 55 20 65 15C75 10 80 25 90 20C100 15 110 30 115 15" 
            stroke="var(--color-main)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default LeftSection;
