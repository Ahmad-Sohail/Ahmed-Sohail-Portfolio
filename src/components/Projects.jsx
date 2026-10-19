import { useState, useEffect, useCallback } from "react";
import { Github, Eye, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "./ScrollReveal";

const PROJECT_THEMES = [
  {
    accent: "#4F8CFF",
    accentText: "text-[#4F8CFF]",
    accentBg: "bg-[#4F8CFF]",
    accentGlow: "bg-[#4F8CFF]/15",
    accentBorder: "border-[#4F8CFF]/30",
    accentBorderHover: "hover:border-[#4F8CFF]/50",
    badgeText: "text-[#4F8CFF]",
    badgeBorder: "border-[#4F8CFF]/30",
    buttonGradient: "from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6]",
    buttonShadow: "shadow-blue-500/25",
    techStack: "React · PHP · MySQL · Tailwind",
  },
  {
    accent: "#FBBF24",
    accentText: "text-amber-400",
    accentBg: "bg-amber-400",
    accentGlow: "bg-amber-400/15",
    accentBorder: "border-amber-400/30",
    accentBorderHover: "hover:border-amber-400/50",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-400/30",
    buttonGradient: "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
    buttonShadow: "shadow-amber-500/25",
    techStack: "React · Node.js · CSS Grid · REST APIs",
  },
  {
    accent: "#34D399",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400",
    accentGlow: "bg-emerald-400/15",
    accentBorder: "border-emerald-400/30",
    accentBorderHover: "hover:border-emerald-400/50",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-400/30",
    buttonGradient: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
    buttonShadow: "shadow-emerald-500/25",
    techStack: "React · Node.js · Python · MongoDB · SVG",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const total = PROJECTS.length;
  const currentProject = PROJECTS[currentIndex];
  const currentTheme = PROJECT_THEMES[currentIndex] || PROJECT_THEMES[0];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation when focusing carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative section-fluid-spacing border-t border-white/4 overflow-hidden w-full max-w-full"
    >
      {/* Dynamic ambient color glow tracking active project accent */}
      <div
        className="absolute top-1/4 left-1/3 w-120 h-120 rounded-full blur-[160px] pointer-events-none -z-10 transition-colors duration-700"
        style={{ backgroundColor: `${currentTheme.accent}12` }}
        aria-hidden="true"
      />

      <div className="fluid-container">
        {/* Section Header with Carousel Controls in Toolbar */}
        <ScrollReveal direction="up" distance={30} className="mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <header className="space-y-3 max-w-2xl">
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

            {/* Carousel Navigation Toolbar */}
            <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
              {/* Numerical Slide Counter */}
              <div className="px-3 py-1.5 rounded-xl bg-[#0F1523] border border-white/8 text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5 tabular-nums">
                <span className={currentTheme.accentText}>0{currentIndex + 1}</span>
                <span className="text-slate-600">/</span>
                <span>0{total}</span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-xl bg-[#0F1523] hover:bg-[#151D30] border border-white/8 hover:border-white/20 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Previous project slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="w-10 h-10 rounded-xl bg-[#0F1523] hover:bg-[#151D30] border border-white/8 hover:border-white/20 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Next project slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Horizontal Carousel Track with Touch Drag Support */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.article
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 50;
                  const velocityThreshold = 400;
                  if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
                    goToNext();
                  } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
                    goToPrev();
                  }
                }}
                className={`relative rounded-3xl bg-[#0F1523] border border-white/8 ${currentTheme.accentBorderHover} transition-colors duration-300 shadow-2xl p-6 sm:p-8 lg:p-10 cursor-grab active:cursor-grabbing select-none`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Visual Thumbnail Showcase */}
                  <figure className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-[#151D30] border border-white/6 m-0 shadow-lg">
                    <img
                      src={currentProject.thumbnail}
                      alt={currentProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-linear-to-t from-[#0F1523]/70 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Category Chip floating on thumbnail */}
                    <figcaption className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#080B12]/85 backdrop-blur-md ${currentTheme.badgeText} border ${currentTheme.badgeBorder} shadow-sm`}
                      >
                        {currentProject.category}
                      </span>
                    </figcaption>
                  </figure>

                  {/* Right Column: Project Details & Action Buttons */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <header className="space-y-2">
                      <div className={`text-xs font-semibold ${currentTheme.accentText} tracking-wide flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${currentTheme.accentBg}`} aria-hidden="true" />
                        <span>{currentTheme.techStack}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {currentProject.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-slate-400">
                        {currentProject.subtitle}
                      </p>
                    </header>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {currentProject.description}
                    </p>

                    {/* Key Highlights list */}
                    {currentProject.highlights && (
                      <div className="space-y-2 pt-1 border-t border-white/6">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Key Architecture Highlights
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {currentProject.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${currentTheme.accentText}`} />
                              <span className="line-clamp-2">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/4 text-slate-300 border border-white/6"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <footer className="flex items-center gap-3 pt-3 border-t border-white/6">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(currentProject);
                        }}
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-linear-to-r ${currentTheme.buttonGradient} rounded-xl shadow-lg ${currentTheme.buttonShadow} hover:opacity-95 transition-all cursor-pointer active:scale-98`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Architecture</span>
                      </button>

                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-white/4 hover:bg-white/8 border border-white/8 rounded-xl transition-all cursor-pointer"
                        aria-label={`View ${currentProject.title} source code on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </footer>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Quick Project Selectors / Horizontal Navigation Strip */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Interactive Thumbnail Previews */}
            <div className="grid grid-cols-3 gap-3 w-full sm:w-auto">
              {PROJECTS.map((project, index) => {
                const isActive = index === currentIndex;
                const theme = PROJECT_THEMES[index] || PROJECT_THEMES[0];
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl transition-all text-left cursor-pointer border ${
                      isActive
                        ? `bg-[#0F1523] ${theme.accentBorder} shadow-md`
                        : "bg-white/2 hover:bg-white/4 border-white/6 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${project.title}`}
                  >
                    <div className="w-10 h-8 rounded-lg overflow-hidden shrink-0 bg-[#151D30] border border-white/10">
                      <img
                        src={project.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="hidden sm:block min-w-0 pr-1">
                      <div className={`text-xs font-semibold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                        {project.title}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        0{index + 1}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pagination Dots with gesture hint */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 hidden md:inline-block pr-1 font-medium">
                Swipe or drag to browse
              </span>
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? `w-8 ${currentTheme.accentBg}`
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to project slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
