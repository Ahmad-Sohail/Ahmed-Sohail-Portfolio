import { useState } from 'react';
import { Briefcase, Code2, Layout, MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';
import profile from '../assets/images/ahmed_developer_portrait_1790190034321.jpg'

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative section-fluid-spacing border-t border-white/[0.04] overflow-hidden w-full max-w-full"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#4F8CFF]/5 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="fluid-container">
        {/* Customized CSS Grid System for About Section */}
        <div className="custom-grid-about">
          
          {/* Left Block: Professional Profile Visual with Scroll Reveal */}
          <ScrollReveal direction="up" distance={20} duration={0.6} className="relative min-w-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle gradient frame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#4F8CFF]/30 to-[#8B5CF6]/30 rounded-3xl blur-md opacity-50" aria-hidden="true" />

              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-[#0F1523] border border-white/[0.1] p-3 sm:p-4 shadow-2xl overflow-hidden">
                
                {/* Photo Figure with Semantic Figcaption & Fallback */}
                <figure className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#151D30] border border-white/[0.06] m-0">
                  <img
                    src={profile}
                    alt="Ahmed Sohail, Full Stack Developer and Intern at Progree"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                  />
                  
                  {/* Fallback container if loading or offline */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#101726] p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#4F8CFF]/20 to-[#8B5CF6]/20 border border-white/[0.1] flex items-center justify-center text-[#4F8CFF] mb-3">
                        <Code2 className="w-8 h-8" />
                      </div>
                      <div className="text-sm font-semibold text-white">Ahmed Sohail</div>
                      <div className="text-xs text-slate-400 mt-1">Full Stack Developer</div>
                    </div>
                  )}

                  {/* Floating Overlay Badge on Profile */}
                  <figcaption className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#080B12]/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">Ahmed Sohail</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">Full Stack Developer Intern @ Progree</div>
                    </div>
                    <div className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#4F8CFF]/15 text-[#4F8CFF] border border-[#4F8CFF]/30 shrink-0">
                      2026
                    </div>
                  </figcaption>
                </figure>

                {/* Profile Spec Details */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0" />
                    <span>Global Remote / Hybrid</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Open to Roles</span>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* Right Block: Narrative, Philosophy & Statistic Cards with Scroll Reveal */}
          <div className="flex flex-col space-y-6">
            
            {/* Header with Eyebrow */}
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <header className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
                    ABOUT ME
                  </span>
                  <div className="h-px w-8 bg-[#4F8CFF]/40" aria-hidden="true" />
                </div>

                <h2
                  id="about-title"
                  className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight"
                >
                  Building digital experiences with code.
                </h2>
              </header>
            </ScrollReveal>

            {/* Professional Narrative Paragraph */}
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a dedicated Full Stack Developer with a passion for transforming intricate user needs into robust, accessible, and high-performing web applications. Currently honing my craft as a <strong className="text-white font-semibold">Full Stack Developer Intern at Progree</strong>, I engineer end-to-end solutions where scalable server architectures meet intuitive, component-driven client interfaces.
                </p>
                <p className="text-slate-400 text-base">
                  My stack spans modern client-side engineering with React, JavaScript (ES6+), and Tailwind CSS, coupled with robust server-side development using Node.js, Express, Python, RESTful APIs, and database persistence with MongoDB & NoSQL document stores. I prioritize clean architecture, secure data flow, sub-second load times, and WCAG AA accessibility standards.
                </p>
              </div>
            </ScrollReveal>

            {/* Three Compact Statistic Cards with Staggered Scroll Reveal */}
            <StaggerContainer className="stats-flex-group pt-2" delayChildren={0.25} staggerChildren={0.12}>
              
              {/* Card 1: Projects */}
              <StaggerItem direction="up" distance={25}>
                <motion.article
                  whileHover={{ y: -4, borderColor: 'rgba(79, 140, 255, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  role="listitem"
                  className="flex flex-col justify-between p-5 rounded-2xl bg-[#0F1523] border border-[#4F8CFF]/25 md:border-white/[0.08] md:hover:border-[#4F8CFF]/50 transition-colors group min-h-[140px] h-auto active:border-[#4F8CFF]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Projects
                    </span>
                    <Code2 className="w-4 h-4 text-[#4F8CFF] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                      8+
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Completed & Deployed
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>

              {/* Card 2: Full Stack Technologies */}
              <StaggerItem direction="up" distance={25}>
                <motion.article
                  whileHover={{ y: -4, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  role="listitem"
                  className="flex flex-col justify-between p-5 rounded-2xl bg-[#0F1523] border border-purple-400/25 md:border-white/[0.08] md:hover:border-purple-400/50 transition-colors group min-h-[140px] h-auto active:border-purple-400/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Technologies
                    </span>
                    <Layout className="w-4 h-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                      12+
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Frontend, Backend & DBs
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>

              {/* Card 3: Internship */}
              <StaggerItem direction="up" distance={25}>
                <motion.article
                  whileHover={{ y: -4, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  role="listitem"
                  className="flex flex-col justify-between p-5 rounded-2xl bg-[#0F1523] border border-emerald-400/25 md:border-white/[0.08] md:hover:border-emerald-400/50 transition-colors group min-h-[140px] h-auto active:border-emerald-400/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Internship
                    </span>
                    <Briefcase className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      Progree
                    </div>
                    <div className="text-xs text-emerald-400 mt-1 font-medium">
                      2026 — Present
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>

            </StaggerContainer>

            {/* Quick Principles Row with Scroll Reveal */}
            <ScrollReveal direction="up" distance={20} delay={0.4}>
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
                  End-to-End Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
                  REST APIs & Databases
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
                  Responsive UI & Performance
                </span>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
