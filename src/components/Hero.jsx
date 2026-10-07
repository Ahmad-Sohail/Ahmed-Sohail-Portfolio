import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import TypingRoles from "./TypingRoles";
import StatusBadge from "./hero/StatusBadge";
import CodeTerminal from "./hero/CodeTerminal";
import TechBadges from "./hero/TechBadges";
import ScrollIndicator from "./hero/ScrollIndicator";

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navOffset = 74;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full"
    >
      {/* Background Lighting */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden w-full max-w-full"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 w-125 h-125 bg-[#4F8CFF]/12 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-20 w-112.5 h-112.5 bg-[#8B5CF6]/10 rounded-full blur-[140px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="fluid-container w-full max-w-full">
        <div className="custom-grid-hero w-full max-w-full">
          {/* Left Block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start space-y-6 w-full min-w-0 max-w-full"
          >
            <StatusBadge />

            {/* Headings */}
            <div className="space-y-2 w-full max-w-full min-w-0">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] wrap-break-word"
              >
                Ahmed Sohail
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="bg-linear-to-r from-[#4F8CFF] to-[#8B5CF6] bg-clip-text text-transparent inline-block pb-1 leading-snug">
                  <TypingRoles
                    roles={[
                      "Full Stack Developer",
                      "React Developer",
                      "UI Engineer",
                      "MERN Stack Developer",
                    ]}
                    typeSpeed={80}
                    eraseSpeed={40}
                    holdDelay={1600}
                    startDelay={400}
                  />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I build responsive, high-performance, and accessible full-stack
              web applications using modern JavaScript, React, Node.js, Express,
              and scalable database systems.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 pt-0.5">
              <span className="font-medium text-slate-200">
                Full Stack Developer Intern
              </span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span className="text-[#4F8CFF] font-semibold">Progree</span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span>2026</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto min-w-0 max-w-full">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-linear-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all text-center cursor-pointer box-border"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 opacity-80" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/resume-ahmed-sohail.pdf"
                download="Ahmed_Sohail_Resume.pdf"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-[#0F1523] hover:bg-[#151D30] hover:text-white border border-[#4F8CFF]/25 sm:border-white/10 hover:border-[#4F8CFF]/50 rounded-xl transition-all shadow-sm text-center cursor-pointer overflow-hidden box-border active:border-[#4F8CFF]"
                aria-label="Download Ahmed Sohail's Resume PDF"
                title="Download Ahmed Sohail's Resume PDF"
              >
                <span
                  className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/6 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-out pointer-events-none"
                  aria-hidden="true"
                />
                <Download className="w-4 h-4 text-[#4F8CFF] group-hover:translate-y-0.5 transition-transform duration-200" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 bg-[#0F1523]/60 hover:bg-[#151D30] hover:text-white border border-white/8 hover:border-white/20 rounded-xl transition-all text-center cursor-pointer box-border"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </motion.a>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Ahmad-Sohail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-xl bg-[#0F1523] hover:bg-[#151D30] text-slate-300 hover:text-white border border-white/10 hover:border-white/25 shadow-sm transition-all"
                  title="GitHub Profile"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <Github className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/ahmad-sohail-281228347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-xl bg-[#0F1523] hover:bg-[#151D30] text-slate-300 hover:text-[#4F8CFF] border border-white/10 hover:border-[#4F8CFF]/40 shadow-sm transition-all"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-white/6 w-full max-w-lg min-w-0">
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white tabular-nums truncate sm:whitespace-normal">
                  Full Stack
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">
                  End-to-End Apps
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white tabular-nums truncate sm:whitespace-normal">
                  React + Node
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">
                  Client & Server
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-[#4F8CFF] tabular-nums truncate sm:whitespace-normal">
                  Progree
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">
                  Internship 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="relative w-full min-w-0 max-w-full"
          >
            <div
              className="absolute -inset-1 bg-linear-to-r from-[#4F8CFF]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-60 -z-10"
              aria-hidden="true"
            />
            <CodeTerminal />
            <TechBadges />
          </motion.div>
        </div>

        <ScrollIndicator onClick={(e) => scrollToSection(e, "#about")} />
      </div>
    </section>
  );
}
