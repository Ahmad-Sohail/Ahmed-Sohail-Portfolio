import { useState } from 'react';
import {
  GitBranch,
  Server,
  Palette,
  Database,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

// Icon renderer — data mein string key store hai, yahan component milta hai
function SkillIcon({ type }) {
  switch (type) {
    case 'react':
      return (
        <svg
          className="w-7 h-7 animate-[spin_16s_linear_infinite]"
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
      return <Server className="w-6 h-6" />;
    case 'database':
      return <Database className="w-5 h-5" />;
    case 'globe':
      return <Globe className="w-5 h-5" />;
    case 'palette':
      return <Palette className="w-5 h-5" />;
    case 'git':
      return <GitBranch className="w-5 h-5" />;
    case 'js':
      return <span className="font-mono font-bold text-sm">JS</span>;
    case 'code':
      return <span className="font-bold font-mono text-sm">&lt;/&gt;</span>;
    default:
      return null;
  }
}

// Icon wrapper ka size featured vs supporting ke hisaab se alag hai
function SkillIconWrapper({ iconType, isFeatured, theme }) {
  const sizeClass = isFeatured ? 'w-12 h-12 rounded-xl' : 'w-10 h-10 rounded-xl';
  return (
    <div
      className={`${sizeClass} ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.text} group-hover:scale-105 transition-transform shadow-sm`}
    >
      <SkillIcon type={iconType} />
    </div>
  );
}

// Featured card
function FeaturedSkillCard({ skill }) {
  const { theme } = skill;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -4, borderColor: theme.hoverColorRgba }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25 }}
      className={`relative rounded-2xl bg-[#0F1523] border ${theme.border} md:border-white/8 ${theme.borderHover} p-6 sm:p-8 group shadow-lg ${theme.shadow} flex flex-col justify-between overflow-hidden ${theme.borderActive}`}
    >
      <div
        className={`absolute top-0 right-0 w-44 h-44 ${theme.glow} rounded-full blur-3xl pointer-events-none ${theme.glowHover} transition-all duration-500`}
        aria-hidden="true"
      />

      <div>
        <div className="flex items-center justify-between mb-5">
          <SkillIconWrapper iconType={skill.icon} isFeatured theme={theme} />
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${theme.badgeBg} ${theme.text} border ${theme.badgeBorder} shadow-sm`}
          >
            {skill.badge}
          </span>
        </div>

        <h3
          className={`text-2xl font-bold text-white mb-2 ${theme.titleHover} transition-colors`}
        >
          {skill.name}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {skill.description}
        </p>
      </div>

      <footer>
        <div className="pt-4 border-t border-white/6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
          {skill.footerTags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-x-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
              )}
              <span className="text-slate-200 font-medium">{tag}</span>
            </span>
          ))}
        </div>
      </footer>
    </motion.article>
  );
}

// Supporting card
function SupportingSkillCard({ skill }) {
  const { theme } = skill;
  return (
    <motion.article
      layout
      whileHover={{ y: -4, borderColor: theme.hoverColorRgba }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl bg-[#0F1523] border ${theme.border} md:border-white/8 ${theme.borderHover} p-6 group flex flex-col justify-between ${theme.borderActive}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <SkillIconWrapper iconType={skill.icon} theme={theme} />
          <span
            className={`text-xs ${theme.text} md:text-slate-400 font-medium`}
          >
            {skill.badge}
          </span>
        </div>
        <h4
          className={`text-lg font-bold text-white mb-2 ${theme.titleHover} transition-colors`}
        >
          {skill.name}
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {skill.description}
        </p>
      </div>
      <footer className="pt-3 border-t border-white/6 text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
        {skill.footerTags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            <span>{tag}</span>
          </span>
        ))}
      </footer>
    </motion.article>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'frontend', 'backend', 'database', 'tools'];

  const featuredSkills = SKILLS_DATA.filter((s) => s.isFeatured);
  const supportingSkills = SKILLS_DATA.filter((s) => !s.isFeatured);

  const filterFn = (skill) =>
    selectedCategory === 'all' || skill.category === selectedCategory;

  const visibleFeatured = featuredSkills.filter(filterFn);
  const visibleSupporting = supportingSkills.filter(filterFn);

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
        {/* Header + Filter Tabs */}
        <ScrollReveal direction="up" distance={30} className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <header className="space-y-3">
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
              <p className="text-slate-400 text-base max-w-xl">
                A comprehensive full-stack ecosystem spanning responsive client interfaces, scalable server runtimes, RESTful APIs, and database persistence.
              </p>
            </header>

            <div
              role="tablist"
              aria-label="Filter skills by technology category"
              className="flex items-center gap-1 p-1 bg-[#0F1523] border border-white/8 rounded-xl self-start sm:self-auto overflow-x-auto max-w-full"
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
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {visibleFeatured.length > 0 && (
              <motion.div
                layout
                key="featured-row"
                className="custom-grid-skills-featured"
              >
                <AnimatePresence mode="popLayout">
                  {visibleFeatured.map((skill) => (
                    <FeaturedSkillCard key={skill.id} skill={skill} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout className="custom-grid-skills-supporting">
            <AnimatePresence mode="popLayout">
              {visibleSupporting.map((skill) => (
                <SupportingSkillCard key={skill.id} skill={skill} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}