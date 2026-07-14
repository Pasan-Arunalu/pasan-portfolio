import React from 'react';
import { motion } from 'framer-motion';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Centerpiece from './Centerpiece';

interface HeroProps {
  reducedMotion: boolean;
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ reducedMotion, isDark }) => {
  return (
    <section className="relative w-full h-screen">
      {/* 3D Centerpiece Layer (Background/Middle) */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none md:pointer-events-auto">
        <Centerpiece reducedMotion={reducedMotion} isDark={isDark} />
      </div>

      {/* UI Overlay Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-screen">
        <div className="flex h-full w-full flex-row items-center justify-between px-8 md:px-12 pb-8 md:pb-12 pt-32">

          {/* Bottom Left Section */}
          <div className="pointer-events-auto flex-shrink-0 hidden md:block">
            <LeftSection />
          </div>

          {/* Absolute Dead Center: Main Headline */}
          <div className="flex flex-col items-center justify-center text-center flex-1 self-center max-w-[800px] px-10 py-12 rounded-3xl backdrop-blur-xs bg-bg-main/10 dark:bg-bg-main/5 border border-grid transform-gpu">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-editorial text-main text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.15] font-normal tracking-[-0.02em] mb-10"
            >
              Designing thoughtful products through<br />
              creativity,<br />
              engineering and<br />
              intelligence.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'linear', delay: 1 }}
              className="flex flex-wrap justify-center gap-1 md:gap-1 font-computational text-muted text-[0.65rem] uppercase tracking-widest opacity-80"
            >
              <span>digital experiences that blend functionality with creativity</span>
            </motion.div>
          </div>

          {/* Bottom Right Section */}
          <div className="pointer-events-auto flex-shrink-0 hidden md:block">
            <RightSection />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;