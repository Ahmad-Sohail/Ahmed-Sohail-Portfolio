import { useState } from 'react';
import { Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative section-fluid-spacing border-t border-white/[0.04] overflow-hidden w-full max-w-full"
    >
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#4F8CFF]/5 rounded-full blur-[150px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="fluid-container">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={30} className="max-w-2xl mb-12 sm:mb-16">
          <header className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
                FEATURED WORK
              </span>
              <div className="h-px w-8 bg-[#4F8CFF]/40" aria-hidden="true" />
            </div>
            <h2
              id="projects-title"
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight"
            >
              Selected Projects
            </h2>
            <p className="text-slate-400 text-base">
              Full-stack web applications engineered with modern client architectures, robust RESTful APIs, and scalable database integrations.
            </p>
          </header>
        </ScrollReveal>

        {/* Custom CSS Grid Showcase System */}
        <div className="custom-grid-projects">
          
          {/* Project 1: E-Commerce Storefront UI (Featured Large Spanning Article) */}
          <ScrollReveal direction="up" distance={20} delay={0.1} className="project-featured-span min-w-0">
            <motion.article
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.985 }}
              className="group relative rounded-2xl bg-[#0F1523] border border-[#4F8CFF]/30 md:border-white/[0.08] md:hover:border-[#4F8CFF]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col md:grid md:grid-cols-12 active:border-[#4F8CFF]/60"
            >
              {/* Vibrant ambient glow spot visible on mobile */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#4F8CFF]/15 rounded-full blur-3xl pointer-events-none md:hidden" aria-hidden="true" />

              {/* Visual Thumbnail (Aspect 16:9) */}
              <figure className="md:col-span-7 relative aspect-video overflow-hidden bg-[#151D30] border-b md:border-b-0 md:border-r border-white/[0.06] m-0">
                <img
                  src={PROJECTS[0].thumbnail}
                  alt={PROJECTS[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1523]/80 via-transparent to-transparent md:hidden" aria-hidden="true" />
                
                <figcaption className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-md text-[#4F8CFF] border border-[#4F8CFF]/30 shadow-sm">
                    Featured Full Stack App
                  </span>
                </figcaption>
              </figure>

              {/* Content & Actions */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <header>
                    <div className="text-xs font-semibold text-[#4F8CFF] tracking-wide mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" aria-hidden="true" />
                      <span>React · Node.js · Express · MongoDB</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#4F8CFF] transition-colors">
                      {PROJECTS[0].title}
                    </h3>
                  </header>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {PROJECTS[0].description}
                  </p>

                  {/* Technology Tags in custom flex system */}
                  <div className="tags-flex-wrap pt-2">
                    {PROJECTS[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <footer className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6] active:scale-[0.98] rounded-xl shadow-md shadow-blue-500/20 transition-all duration-150 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project</span>
                  </button>

                  <a
                    href={PROJECTS[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:scale-[0.98] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-all"
                    aria-label={`View ${PROJECTS[0].title} source on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </footer>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* Project 2: Portfolio Website */}
          <ScrollReveal direction="up" distance={20} delay={0.18} className="project-card-span min-w-0">
            <motion.article
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.985 }}
              className="group relative rounded-2xl bg-[#0F1523] border border-amber-400/30 md:border-white/[0.08] md:hover:border-amber-400/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between h-full active:border-amber-400/60"
            >
              {/* Warm Amber ambient glow on mobile */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none md:hidden" aria-hidden="true" />

              <div>
                {/* Visual Thumbnail */}
                <figure className="relative aspect-video w-full overflow-hidden bg-[#151D30] border-b border-white/[0.06] m-0">
                  <img
                    src={PROJECTS[1].thumbnail}
                    alt={PROJECTS[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <figcaption className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-sm">
                      Full Stack Web App
                    </span>
                  </figcaption>
                </figure>

                {/* Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <header>
                    <div className="text-xs font-semibold text-amber-400 tracking-wide mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                      <span>React · Node.js · REST API · Tailwind</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {PROJECTS[1].title}
                    </h3>
                  </header>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {PROJECTS[1].description}
                  </p>

                  {/* Technology Tags */}
                  <div className="tags-flex-wrap pt-2">
                    {PROJECTS[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <footer className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-amber-200 md:text-white bg-gradient-to-r from-amber-500/20 to-orange-500/20 md:bg-white/[0.08] hover:bg-white/[0.14] border border-amber-400/30 md:border-white/[0.1] active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4 text-amber-400 md:text-white" />
                  <span>View Project</span>
                </button>

                <a
                  href={PROJECTS[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:scale-[0.98] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-all"
                  aria-label={`View ${PROJECTS[1].title} source on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </footer>
            </motion.article>
          </ScrollReveal>

          {/* Project 3: SaaS Analytics Dashboard */}
          <ScrollReveal direction="up" distance={20} delay={0.25} className="project-card-span min-w-0">
            <motion.article
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.985 }}
              className="group relative rounded-2xl bg-[#0F1523] border border-emerald-400/30 md:border-white/[0.08] md:hover:border-emerald-400/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between h-full active:border-emerald-400/60"
            >
              {/* Vibrant Emerald ambient glow on mobile */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none md:hidden" aria-hidden="true" />

              <div>
                {/* Visual Thumbnail */}
                <figure className="relative aspect-video w-full overflow-hidden bg-[#151D30] border-b border-white/[0.06] m-0">
                  <img
                    src={PROJECTS[2].thumbnail}
                    alt={PROJECTS[2].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <figcaption className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-md text-emerald-400 border border-emerald-400/30 shadow-sm">
                      Full Stack Platform
                    </span>
                  </figcaption>
                </figure>

                {/* Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <header>
                    <div className="text-xs font-semibold text-emerald-400 tracking-wide mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                      <span>React · Node.js · Python · MongoDB · SVG Charts</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {PROJECTS[2].title}
                    </h3>
                  </header>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {PROJECTS[2].description}
                  </p>

                  {/* Technology Tags */}
                  <div className="tags-flex-wrap pt-2">
                    {PROJECTS[2].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <footer className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-200 md:text-white bg-gradient-to-r from-emerald-500/20 to-teal-500/20 md:bg-white/[0.08] hover:bg-white/[0.14] border border-emerald-400/30 md:border-white/[0.1] active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4 text-emerald-400 md:text-white" />
                  <span>View Project</span>
                </button>

                <a
                  href={PROJECTS[2].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:scale-[0.98] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-all"
                  aria-label={`View ${PROJECTS[2].title} source on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </footer>
            </motion.article>
          </ScrollReveal>

        </div>

      </div>

      {/* Project Detail Modal with Framer Motion */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
