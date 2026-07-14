import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-8 md:px-12 backdrop-blur-sm bg-bg-main/50"
    >
      <div className="font-editorial text-main text-xl font-medium tracking-tight">
        <a href="/" className="no-underline text-inherit transition-colors duration-300 hover:text-main">Arunalu .</a>
      </div>

      <div className="flex items-center font-computational text-muted gap-6 md:gap-10 text-[0.75rem] uppercase tracking-wider border-b border-grid pb-1">
        <a href="#about" className="no-underline text-inherit transition-colors duration-300 hover:text-main">About</a>
        <a href="#work" className="no-underline text-inherit transition-colors duration-300 hover:text-main">Work</a>
        <a href="#contact" className="no-underline text-inherit transition-colors duration-300 hover:text-main">Contact</a>
        <button
          onClick={toggleTheme}
          className="ml-4 flex items-center justify-center w-6 h-6 rounded-full border border-grid transition-colors duration-300 hover:text-main focus:outline-none cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;