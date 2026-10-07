/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { theme } = useTheme();

  // Framer Motion smooth top reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Scroll tracking for Back-to-Top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to sync active nav state
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-[#F8FAFC] text-[#090D17] selection:bg-blue-600/20 selection:text-blue-900'
          : 'bg-[#080B12] text-[#F8FAFC] selection:bg-[#4F8CFF]/20 selection:text-white'
      } relative overflow-x-hidden w-full max-w-full`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#4F8CFF] via-[#8B5CF6] to-[#4F8CFF] z-100 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#4F8CFF] focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content" role="main" tabIndex={-1} className="relative z-10 focus:outline-none overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Semantic Contentinfo Footer */}
      <Footer />

      {/* Floating Back to Top Button with Framer Motion Entrance & Hover */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl transition-all shadow-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer ${
              theme === 'light'
                ? 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-slate-200/60'
                : 'bg-[#0F1523]/90 hover:bg-[#151D30] text-slate-300 hover:text-white border border-white/10'
            }`}
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-[#4F8CFF]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
