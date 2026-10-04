import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef(null);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open to prevent background jitter
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile navigation when resized to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 74;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B12]/92 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30 py-3.5'
          : 'bg-[#080B12]/70 backdrop-blur-sm border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="fluid-container flex items-center justify-between">
        
        {/* Brand Logo Anchor (Semantic) */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group inline-flex items-center gap-1.5 text-xl font-bold tracking-tight text-white hover:text-[#4F8CFF] transition-colors focus:outline-none"
          aria-label="Ahmed Sohail Home"
        >
          <span className="text-white tracking-tight">Ahmed</span>
          <span className="text-[#4F8CFF] font-black group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Primary Navigation Landmark (Semantic HTML5 <nav>) */}
        <nav
          id="desktop-navigation"
          aria-label="Desktop primary navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0F1523]/80 border border-white/[0.08] shadow-inner backdrop-blur-md"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-white/[0.08] shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4F8CFF] shadow-[0_0_8px_#4F8CFF]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action & Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6] rounded-xl shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          {/* Interactive Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-button md:!hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            <span className="hamburger-line hamburger-line-top" aria-hidden="true" />
            <span className="hamburger-line hamburger-line-middle" aria-hidden="true" />
            <span className="hamburger-line hamburger-line-bottom" aria-hidden="true" />
          </button>
        </div>

      </div>

      {/* Mobile Backdrop Overlay with interactive tap-to-dismiss */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-backdrop fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 md:!hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu Panel with Framer Motion slide animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            ref={mobileNavRef}
            aria-label="Mobile primary navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mobile-nav-panel md:!hidden absolute top-full left-0 right-0 z-50 bg-[#080B12]/98 border-b border-white/[0.1] backdrop-blur-xl py-4 shadow-2xl shadow-black/80"
          >
            <div className="fluid-container flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-white bg-[#4F8CFF]/15 border border-[#4F8CFF]/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#4F8CFF] shadow-[0_0_8px_#4F8CFF]" />
                    )}
                  </a>
                );
              })}

              {/* Theme Toggle row in mobile drawer */}
              <div className="pt-2 pb-1 border-t border-white/[0.08]">
                <ThemeToggle showLabel={true} />
              </div>

              {/* Direct CTA button in mobile drawer */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] rounded-xl shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-transform"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
