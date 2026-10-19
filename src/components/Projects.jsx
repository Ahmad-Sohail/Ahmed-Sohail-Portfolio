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
    techStack: "React 19 · Tailwind CSS · Vite · Motion",
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
    techStack: "PHP · MySQL · REST APIs · Discussions",
  },
  {
    accent: "#A855F7",
    accentText: "text-purple-400",
    accentBg: "bg-purple-400",
    accentGlow: "bg-purple-400/15",
    accentBorder: "border-purple-400/30",
    accentBorderHover: "hover:border-purple-400/50",
    badgeText: "text-purple-300",
    badgeBorder: "border-purple-400/30",
    buttonGradient: "from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
    buttonShadow: "shadow-purple-500/25",
    techStack: "JavaScript · DOM API · LocalStorage · CSS3",
  },
  {
    accent: "#F43F5E",
    accentText: "text-rose-400",
    accentBg: "bg-rose-400",
    accentGlow: "bg-rose-400/15",
    accentBorder: "border-rose-400/30",
    accentBorderHover: "hover:border-rose-400/50",
    badgeText: "text-rose-300",
    badgeBorder: "border-rose-400/30",
    buttonGradient: "from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700",
    buttonShadow: "shadow-rose-500/25",
    techStack: "React · JavaScript · E-Commerce · Tailwind",
  },
  {
    accent: "#06B6D4",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-400",
    accentGlow: "bg-cyan-400/15",
    accentBorder: "border-cyan-400/30",
    accentBorderHover: "hover:border-cyan-400/50",
    badgeText: "text-cyan-300",
    badgeBorder: "border-cyan-400/30",
    buttonGradient: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    buttonShadow: "shadow-cyan-500/25",
    techStack: "JavaScript · Neural Networks · Canvas · Physics",
  },
  {
    accent: "#84CC16",
    accentText: "text-lime-400",
    accentBg: "bg-lime-400",
    accentGlow: "bg-lime-400/15",
    accentBorder: "border-lime-400/30",
    accentBorderHover: "hover:border-lime-400/50",
    badgeText: "text-lime-300",
    badgeBorder: "border-lime-400/30",
    buttonGradient: "from-lime-500 to-emerald-600 hover:from-lime-600 hover:to-emerald-700",
    buttonShadow: "shadow-lime-500/25",
    techStack: "JavaScript · GSAP · ScrollTrigger · CSS3",
  },
  {
    accent: "#EAB308",
    accentText: "text-yellow-400",
    accentBg: "bg-yellow-400",
    accentGlow: "bg-yellow-400/15",
    accentBorder: "border-yellow-400/30",
    accentBorderHover: "hover:border-yellow-400/50",
    badgeText: "text-yellow-300",
    badgeBorder: "border-yellow-400/30",
    buttonGradient: "from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700",
    buttonShadow: "shadow-yellow-500/25",
    techStack: "JavaScript · DOM · Audio API · Game Logic",
  },
  {
    accent: "#EC4899",
    accentText: "text-pink-400",
    accentBg: "bg-pink-400",
    accentGlow: "bg-pink-400/15",
    accentBorder: "border-pink-400/30",
    accentBorderHover: "hover:border-pink-400/50",
    badgeText: "text-pink-300",
    badgeBorder: "border-pink-400/30",
    buttonGradient: "from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700",
    buttonShadow: "shadow-pink-500/25",
    techStack: "JavaScript · DOM · Algorithms · Animation",
  },
  {
    accent: "#38BDF8",
    accentText: "text-sky-400",
    accentBg: "bg-sky-400",
    accentGlow: "bg-sky-400/15",
    accentBorder: "border-sky-400/30",
    accentBorderHover: "hover:border-sky-400/50",
    badgeText: "text-sky-300",
    badgeBorder: "border-sky-400/30",
    buttonGradient: "from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700",
    buttonShadow: "shadow-sky-500/25",
    techStack: "JavaScript · Grid Logic · Turn Duel · CSS3",
  },
  {
    accent: "#EF4444",
    accentText: "text-red-500",
    accentBg: "bg-red-500",
    accentGlow: "bg-red-500/15",
    accentBorder: "border-red-500/30",
    accentBorderHover: "hover:border-red-500/50",
    badgeText: "text-red-400",
    badgeBorder: "border-red-500/30",
    buttonGradient: "from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700",
    buttonShadow: "shadow-red-500/25",
    techStack: "React · HTML5 Video · Tailwind CSS · REST API",
  },
  {
    accent: "#1DB954",
    accentText: "text-[#1DB954]",
    accentBg: "bg-[#1DB954]",
    accentGlow: "bg-[#1DB954]/15",
    accentBorder: "border-[#1DB954]/30",
    accentBorderHover: "hover:border-[#1DB954]/50",
    badgeText: "text-[#1DB954]",
    badgeBorder: "border-[#1DB954]/30",
    buttonGradient: "from-[#1DB954] to-emerald-600 hover:from-[#1aa34a] hover:to-emerald-700",
    buttonShadow: "shadow-[#1DB954]/25",
    techStack: "React · Web Audio API · Audio Engine · Tailwind",
  },
  {
    accent: "#E50914",
    accentText: "text-[#E50914]",
    accentBg: "bg-[#E50914]",
    accentGlow: "bg-[#E50914]/15",
    accentBorder: "border-[#E50914]/30",
    accentBorderHover: "hover:border-[#E50914]/50",
    badgeText: "text-[#E50914]",
    badgeBorder: "border-[#E50914]/30",
    buttonGradient: "from-[#E50914] to-red-800 hover:from-[#c40812] hover:to-red-900",
    buttonShadow: "shadow-red-600/25",
    techStack: "React · TMDB API · OTT Streaming · Tailwind",
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
                <span className={currentTheme.accentText}>
                  {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
                </span>
                <span className="text-slate-600">/</span>
                <span>{total < 10 ? `0${total}` : total}</span>
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
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Interactive Thumbnail Previews with Horizontal Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-1 w-full min-w-0">
              {PROJECTS.map((project, index) => {
                const isActive = index === currentIndex;
                const theme = PROJECT_THEMES[index] || PROJECT_THEMES[0];
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`shrink-0 flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all text-left cursor-pointer border max-w-[190px] ${
                      isActive
                        ? `bg-[#0F1523] ${theme.accentBorder} shadow-md`
                        : "bg-white/2 hover:bg-white/4 border-white/6 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${project.title}`}
                  >
                    <div className="w-8 h-7 rounded-md overflow-hidden shrink-0 bg-[#151D30] border border-white/10">
                      <img
                        src={project.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 pr-1">
                      <div className={`text-[11px] font-semibold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                        {project.title}
                      </div>
                      <div className="text-[9px] text-slate-500 font-mono">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pagination Dots with gesture hint */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] text-slate-500 hidden lg:inline-block pr-1 font-medium">
                Swipe or drag to browse
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-1">
                {PROJECTS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                      index === currentIndex
                        ? `w-6 ${currentTheme.accentBg}`
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to project slide ${index + 1}`}
                  />
                ))}
              </div>
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
