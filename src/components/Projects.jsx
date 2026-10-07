import { useState } from "react";
import { Github, Eye } from "lucide-react";
import { motion } from "framer-motion";
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
    accentBorderHover: "md:hover:border-[#4F8CFF]/50",
    accentBorderActive: "active:border-[#4F8CFF]/60",
    badgeText: "text-[#4F8CFF]",
    badgeBorder: "border-[#4F8CFF]/30",
    buttonGradient:
      "from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6]",
    buttonShadow: "shadow-blue-500/20",
    techStack: "React · Node.js · Express · MongoDB",
  },
  {
    accent: "#FBBF24",
    accentText: "text-amber-400",
    accentBg: "bg-amber-400",
    accentGlow: "bg-amber-400/15",
    accentBorder: "border-amber-400/30",
    accentBorderHover: "md:hover:border-amber-400/50",
    accentBorderActive: "active:border-amber-400/60",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-400/30",
    buttonGradient:
      "from-amber-500/20 to-orange-500/20 md:bg-white/[0.08] hover:bg-white/[0.14]",
    buttonShadow: "shadow-sm",
    techStack: "React · Node.js · REST API · Tailwind",
  },
  {
    accent: "#34D399",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400",
    accentGlow: "bg-emerald-400/15",
    accentBorder: "border-emerald-400/30",
    accentBorderHover: "md:hover:border-emerald-400/50",
    accentBorderActive: "active:border-emerald-400/60",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-400/30",
    buttonGradient:
      "from-emerald-500/20 to-teal-500/20 md:bg-white/[0.08] hover:bg-white/[0.14]",
    buttonShadow: "shadow-sm",
    techStack: "React · Node.js · Python · MongoDB · SVG Charts",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative section-fluid-spacing border-t border-white/4 overflow-hidden w-full max-w-full"
    >
      {/* Background soft ambient lighting */}
      <div
        className="absolute top-1/4 left-1/3 w-125 h-125 bg-[#4F8CFF]/5 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="fluid-container">
        <ScrollReveal
          direction="up"
          distance={30}
          className="max-w-2xl mb-12 sm:mb-16"
        >
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
              Full-stack web applications engineered with modern client
              architectures, robust RESTful APIs, and scalable database
              integrations.
            </p>
          </header>
        </ScrollReveal>

        {/* Custom CSS Grid Showcase System */}

        <div className="custom-grid-projects">
          {PROJECTS.map((project, index) => {
            const theme = PROJECT_THEMES[index] || PROJECT_THEMES[0];
            const isFeatured = index === 0;

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                distance={20}
                delay={0.1 + index * 0.08}
                className={`${isFeatured ? "project-featured-span" : "project-card-span"} min-w-0`}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  className={`group relative rounded-2xl bg-[#0F1523] border ${theme.accentBorder} md:border-white/8 ${theme.accentBorderHover} transition-all duration-300 shadow-xl overflow-hidden flex flex-col ${isFeatured ? "md:grid md:grid-cols-12" : "justify-between h-full"} ${theme.accentBorderActive}`}
                >
                  {/* Vibrant ambient glow spot visible on mobile */}
                  <div
                    className={`absolute -top-12 -right-12 ${isFeatured ? "w-48 h-48" : "w-44 h-44"} ${theme.accentGlow} rounded-full blur-3xl pointer-events-none md:hidden`}
                    aria-hidden="true"
                  />

                  {/* Visual Thumbnail */}
                  <figure
                    className={`${isFeatured ? "md:col-span-7 border-b md:border-b-0 md:border-r" : "relative w-full border-b"} relative aspect-video overflow-hidden bg-[#151D30] border-white/6 m-0`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {isFeatured && (
                      <div
                        className="absolute inset-0 bg-linear-to-t from-[#0F1523]/80 via-transparent to-transparent md:hidden"
                        aria-hidden="true"
                      />
                    )}

                    <figcaption className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md bg-[#080B12]/85 backdrop-blur-md ${theme.badgeText} border ${theme.badgeBorder} shadow-sm`}
                      >
                        {project.category}
                      </span>
                    </figcaption>
                  </figure>

                  {/* Content & Actions wrapper */}
                  <div
                    className={
                      isFeatured
                        ? "md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6"
                        : ""
                    }
                  >
                    {/* Body */}
                    <div
                      className={
                        isFeatured ? "space-y-3" : "p-6 sm:p-7 space-y-3"
                      }
                    >
                      <header>
                        <div
                          className={`text-xs font-semibold ${theme.accentText} tracking-wide mb-1 flex items-center gap-1.5`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${theme.accentBg}`}
                            aria-hidden="true"
                          />
                          <span>{theme.techStack}</span>
                        </div>
                        <h3
                          className={`${isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} font-bold text-white group-hover:${theme.accentText} transition-colors`}
                        >
                          {project.title}
                        </h3>
                      </header>

                      <p
                        className={`text-slate-300 ${isFeatured ? "text-sm sm:text-base" : "text-sm"} leading-relaxed`}
                      >
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="tags-flex-wrap pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/4 text-slate-300 border border-white/6"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <footer
                      className={
                        isFeatured
                          ? "flex items-center gap-3 pt-4 border-t border-white/6"
                          : "p-6 pt-0 flex items-center gap-3"
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold ${
                          isFeatured
                            ? "text-white bg-linear-to-r " +
                              theme.buttonGradient
                            : `${theme.accentText.replace("text-", "text-")} md:text-white bg-linear-to-r ${theme.buttonGradient}`
                        } border ${isFeatured ? "border-transparent" : theme.badgeBorder + " md:border-white/10"} active:scale-[0.98] rounded-xl ${isFeatured ? `shadow-md ${theme.buttonShadow}` : theme.buttonShadow} transition-all duration-150 cursor-pointer`}
                      >
                        <Eye
                          className={`w-4 h-4 ${!isFeatured ? theme.accentText + " md:text-white" : ""}`}
                        />
                        <span>View Project</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:scale-[0.98] bg-white/4 hover:bg-white/8 border border-white/8 rounded-xl transition-all"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </footer>
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
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
