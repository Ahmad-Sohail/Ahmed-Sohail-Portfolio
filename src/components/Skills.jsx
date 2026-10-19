import { useState, useRef, useEffect, useCallback } from 'react';
import {
  GitBranch,
  Server,
  Palette,
  Database,
  Globe,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

// Icon renderer
function SkillIcon({ type }) {
  switch (type) {
    case 'react':
      return (
        <svg
          className="w-6 h-6 animate-[spin_16s_linear_infinite]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        </svg>
      );
    case 'server':
      return <Server className="w-5 h-5" />;
    case 'database':
      return <Database className="w-5 h-5" />;
    case 'globe':
      return <Globe className="w-5 h-5" />;
    case 'palette':
      return <Palette className="w-5 h-5" />;
    case 'git':
      return <GitBranch className="w-5 h-5" />;
    case 'js':
      return <span className="font-mono font-bold text-xs">JS</span>;
    case 'code':
      return <span className="font-bold font-mono text-xs">&lt;/&gt;</span>;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
}

function SkillIconWrapper({ iconType, isFeatured, theme }) {
  const sizeClass = isFeatured ? 'w-11 h-11 rounded-xl' : 'w-10 h-10 rounded-xl';
  return (
    <div
      className={`${sizeClass} ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.text} group-hover:scale-105 transition-transform shadow-sm`}
    >
      <SkillIcon type={iconType} />
    </div>
  );
}

function SkillCard({ skill }) {
  const { theme, isFeatured } = skill;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, borderColor: theme.hoverColorRgba }}
      transition={{ duration: 0.2 }}
      className={`min-w-[280px] sm:min-w-[320px] max-w-[340px] snap-start shrink-0 rounded-2xl bg-[#0F1523] border ${
        isFeatured ? `${theme.border} md:border-white/12` : 'border-white/8'
      } p-6 group flex flex-col justify-between shadow-xl relative overflow-hidden select-none transition-colors duration-200`}
    >
      {/* Subtle background ambient corner glow for featured cards */}
      {isFeatured && (
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 ${theme.glow} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
          aria-hidden="true"
        />
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <SkillIconWrapper iconType={skill.icon} isFeatured={isFeatured} theme={theme} />
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
              isFeatured
                ? `${theme.badgeBg} ${theme.text} border ${theme.badgeBorder}`
                : 'bg-white/4 text-slate-400 border border-white/6'
            } shadow-sm`}
          >
            {skill.badge}
          </span>
        </div>

        <h3
          className={`text-xl font-bold text-white mb-2 ${theme.titleHover} transition-colors tracking-tight`}
        >
          {skill.name}
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
          {skill.description}
        </p>
      </div>

      <footer className="pt-3 border-t border-white/6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
          {skill.footerTags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
              )}
              <span className="text-slate-300 font-medium">{tag}</span>
            </span>
          ))}
        </div>
      </footer>
    </motion.article>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'frontend', 'backend', 'database', 'tools'];
  const trackRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse drag-to-scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory
  );

  const updateScrollBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    } else {
      setScrollProgress(100);
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Reset scroll to 0 when category changes
    el.scrollTo({ left: 0, behavior: 'smooth' });
    updateScrollBounds();

    el.addEventListener('scroll', updateScrollBounds, { passive: true });
    window.addEventListener('resize', updateScrollBounds);
    return () => {
      el.removeEventListener('scroll', updateScrollBounds);
      window.removeEventListener('resize', updateScrollBounds);
    };
  }, [selectedCategory, updateScrollBounds]);

  const scrollBy = (offset) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative section-fluid-spacing border-t border-white/4 overflow-hidden w-full max-w-full"
    >
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="fluid-container">
        {/* Header + Category Tabs + Navigation Arrows */}
        <ScrollReveal direction="up" distance={30} className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <header className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
                  FULL STACK STACK
                </span>
                <div className="h-px w-8 bg-[#4F8CFF]/40" aria-hidden="true" />
              </div>
              <h2
                id="skills-title"
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight"
              >
                Tools & Technologies
              </h2>
              <p className="text-slate-400 text-base">
                A comprehensive full-stack ecosystem spanning responsive client interfaces, scalable server runtimes, RESTful APIs, and database persistence.
              </p>
            </header>

            {/* Interactive Filter Tabs and Nav Arrows */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter skills by technology category"
                className="flex items-center gap-1 p-1 bg-[#0F1523] border border-white/8 rounded-xl overflow-x-auto max-w-full"
              >
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/4'
                    }`}
                  >
                    {selectedCategory === cat && (
                      <motion.div
                        layoutId="skillsActiveTab"
                        className="absolute inset-0 bg-[#4F8CFF] rounded-lg shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </motion.button>
                ))}
              </div>

              {/* Slider Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollBy(-340)}
                  disabled={!canScrollLeft}
                  className={`w-10 h-10 rounded-xl bg-[#0F1523] border border-white/8 text-slate-300 transition-all flex items-center justify-center active:scale-95 shadow-sm ${
                    canScrollLeft
                      ? 'hover:bg-[#151D30] hover:border-white/20 hover:text-white cursor-pointer'
                      : 'opacity-40 cursor-not-allowed'
                  }`}
                  aria-label="Scroll skills left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollBy(340)}
                  disabled={!canScrollRight}
                  className={`w-10 h-10 rounded-xl bg-[#0F1523] border border-white/8 text-slate-300 transition-all flex items-center justify-center active:scale-95 shadow-sm ${
                    canScrollRight
                      ? 'hover:bg-[#151D30] hover:border-white/20 hover:text-white cursor-pointer'
                      : 'opacity-40 cursor-not-allowed'
                  }`}
                  aria-label="Scroll skills right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Slider Track with Snap and Drag Gesture */}
        <div className="relative">
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex items-stretch gap-5 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1 cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Progress Bar & Gesture Instructions */}
          <div className="mt-4 flex items-center justify-between gap-4">
            {/* Scroll Progress Track */}
            <div className="flex-1 max-w-xs h-1 rounded-full bg-white/6 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] transition-all duration-150 rounded-full"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>

            <span className="text-[11px] text-slate-500 font-medium">
              Swipe or drag horizontally to explore stack ({filteredSkills.length} technologies)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}