import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

function App() {
  const [isSiteLoading, setIsSiteLoading] = useState(true);
  const [mount3D, setMount3D] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 1. Let the browser paint the loader first before blocking the thread with WebGL compilation
    const paintTimer = setTimeout(() => {
      setMount3D(true);
    }, 50);

    // 2. Hide loader after WebGL has had time to compile
    const timer = setTimeout(() => {
      setIsSiteLoading(false);
    }, 2000);

    // Reset scroll on load
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Check initial system preference
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isSystemDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionChange);

    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextThemeDark = !isDark;
    setIsDark(nextThemeDark);
    if (nextThemeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="w-full relative">
      <Loader isLoading={isSiteLoading} />
      
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      {mount3D && <Hero reducedMotion={reducedMotion} isDark={isDark} />}
      
      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Work & Projects Section */}
      <Work />
      <div className="w-full min-h-screen flex flex-col">
        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
