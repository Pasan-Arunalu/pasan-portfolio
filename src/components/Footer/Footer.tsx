import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-grid/30 bg-bg-main/50 backdrop-blur-md relative z-10">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-editorial text-main text-lg tracking-wide">
          <a href="/" className="no-underline text-inherit transition-colors duration-300 hover:text-main">Arunalu .</a>
        </div>

        <div className="text-muted font-computational text-sm text-center md:text-left opacity-70">
          &copy; {new Date().getFullYear()} Designed & Built with passion. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#about" className="text-muted hover:text-main transition-colors font-computational text-sm">About</a>
          <a href="#skills" className="text-muted hover:text-main transition-colors font-computational text-sm">Skills</a>
          <a href="#work" className="text-muted hover:text-main transition-colors font-computational text-sm">Work</a>
          <a href="#contact" className="text-muted hover:text-main transition-colors font-computational text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
