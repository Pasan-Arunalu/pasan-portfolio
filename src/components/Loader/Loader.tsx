import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-main"
        >
          {/* Static Particle Cluster with CSS Bounce */}
          <div className="relative animate-bounce">
            {/* Central core */}
            <div className="w-8 h-8 bg-main rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)] dark:shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
          </div>
          
          {/* Fading text using pure CSS if possible, but framer motion opacity is usually fine. 
              Using pure CSS pulse for ultimate smoothness */}
          <div className="absolute mt-36 font-computational text-muted text-xs tracking-[0.3em] uppercase animate-pulse">
            Initializing
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
