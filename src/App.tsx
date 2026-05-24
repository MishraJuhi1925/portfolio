import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';
import { BackgroundParticles } from './components/ui/BackgroundParticles';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Wait 500ms before hiding loader
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100000] bg-[#030014] flex flex-col items-center justify-center select-none"
          >
            {/* Spinning glowing gradient ring */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-accent-blue/10" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-t-accent-cyan border-r-accent-blue border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <span className="text-white font-heading font-semibold text-lg">{Math.min(loadingProgress, 100)}%</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 font-heading text-sm mt-6 uppercase tracking-widest"
            >
              Loading Portfolio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen text-white bg-[#030014]">
          {/* Scroll progress indicator */}
          <ScrollProgress />

          {/* Interactive Cursor */}
          <CustomCursor />

          {/* Particle interactive background */}
          <BackgroundParticles />

          {/* Layout Sections */}
          <Navbar />
          
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
