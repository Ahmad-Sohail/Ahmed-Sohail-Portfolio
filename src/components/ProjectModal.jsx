import { useEffect } from 'react';
import { X, Github, CheckCircle2, Layers, Code2, Palette, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-100 flex justify-center items-start overflow-y-auto overscroll-contain bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-8">
          
          {/* Backdrop Click Dismissal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 -z-10"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Floating Mobile Top-Right Close Button (Always visible on screen) */}
          <button
            type="button"
            onClick={onClose}
            className="fixed top-3 right-3 sm:top-5 sm:right-5 z-110 p-2.5 rounded-xl text-white bg-black/75 hover:bg-black/95 active:bg-[#4F8CFF] border border-white/20 backdrop-blur-md transition-all shadow-xl active:scale-90 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
            aria-label="Close dialog directly"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-3xl my-3 sm:my-8 bg-[#0F1523] border border-white/12 rounded-2xl shadow-2xl p-5 sm:p-8 text-left z-20"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Sticky Top Header with Project Category & Prominent Close Button */}
            <div className="modal-sticky-header sticky top-0 z-30 flex items-center justify-between -mt-5 -mx-5 sm:-mt-8 sm:-mx-8 mb-5 px-5 sm:px-8 py-3.5 bg-[#0F1523]/95 backdrop-blur-md border-b border-white/8 rounded-t-2xl shadow-sm">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#4F8CFF]/15 text-[#4F8CFF] border border-[#4F8CFF]/30 shrink-0">
                  {project.category}
                </span>
                <span className="text-xs text-slate-300 font-medium truncate hidden xs:inline">
                  {project.title}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/8 hover:bg-white/15 active:bg-[#4F8CFF]/20 text-white border border-white/15 transition-all focus:outline-none cursor-pointer text-xs font-semibold shrink-0 shadow-sm active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-[#4F8CFF]" />
                <span>Close</span>
              </button>
            </div>

            {/* Thumbnail Preview Banner */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-[#151D30] border border-white/8">
              <img
                src={project.thumbnail}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0F1523] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#080B12]/80 backdrop-blur-md text-[#4F8CFF] border border-[#4F8CFF]/30">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Header Details */}
            <div className="space-y-2 mb-6">
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#4F8CFF]">
                {project.subtitle}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Full Stack Technologies Applied
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-slate-200 border border-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Architecture & Implementation
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Breakdown Container */}
            <div className="p-4 rounded-xl bg-[#090D17] border border-white/6 mb-8 space-y-3">
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#4F8CFF]" />
                Full-Stack Architectural Blueprint
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#0F1523] border border-white/4">
                  <div className="text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
                    Component Tier
                  </div>
                  <div className="text-slate-200 leading-relaxed">{project.architecture.componentTier}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1523] border border-white/4">
                  <div className="text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    Styling & Layout
                  </div>
                  <div className="text-slate-200 leading-relaxed">{project.architecture.stylingSystem}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1523] border border-white/4">
                  <div className="text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    State Management
                  </div>
                  <div className="text-slate-200 leading-relaxed">{project.architecture.stateManagement}</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0F1523] border border-white/4">
                  <div className="text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                    Backend
                  </div>
                  <div className="text-slate-200 leading-relaxed">{project.architecture.backend}</div>
                </div>
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/8 hover:bg-white/12 active:bg-white/18 border border-white/12 rounded-xl transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-[#151D30] hover:bg-[#1C263F] active:bg-[#233150] border border-white/8 rounded-xl transition-all cursor-pointer"
              >
                Close Overview
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
