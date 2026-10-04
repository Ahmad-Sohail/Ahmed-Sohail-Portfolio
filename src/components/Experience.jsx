import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative section-fluid-spacing border-t border-white/[0.04] overflow-hidden w-full max-w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="fluid-container">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={30} className="max-w-2xl mb-12 sm:mb-16">
          <header className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
                CAREER & MILESTONES
              </span>
              <div className="h-px w-8 bg-[#4F8CFF]/40" aria-hidden="true" />
            </div>
            <h2
              id="experience-title"
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight"
            >
              Work Experience
            </h2>
            <p className="text-slate-400 text-base">
              Hands-on professional engineering experience delivering full-stack solutions, developing RESTful APIs, crafting responsive client interfaces, and collaborating in agile workflows.
            </p>
          </header>
        </ScrollReveal>

        {/* Modern Vertical Timeline Structure */}
        <div className="relative max-w-4xl">
          
          {/* Subtle Vertical Timeline Spine Bar */}
          <div className="absolute left-4 sm:left-7 top-4 bottom-4 w-px bg-gradient-to-b from-[#4F8CFF] via-white/[0.1] to-transparent" aria-hidden="true" />

          {/* Semantic Ordered List */}
          <ol className="space-y-12 list-none p-0 m-0">
            {EXPERIENCE_DATA.map((exp, index) => (
              <li key={index} className="relative flex items-start gap-6 sm:gap-10 group">
                
                {/* Timeline Node Indicator */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 rounded-2xl bg-[#0F1523] border border-[#4F8CFF]/50 shadow-lg shadow-blue-500/20 text-[#4F8CFF] group-hover:scale-110 transition-transform duration-300 shrink-0 mt-1">
                  <Briefcase className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                </div>

                {/* Experience Article Card with ScrollReveal */}
                <ScrollReveal direction="up" distance={20} delay={0.1} className="flex-1 min-w-0">
                  <motion.article
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.985 }}
                    className="relative rounded-2xl bg-[#0F1523] border border-[#4F8CFF]/25 md:border-white/[0.08] md:hover:border-[#4F8CFF]/40 p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-6 overflow-hidden active:border-[#4F8CFF]/60"
                  >
                    {/* Ambient Glow for Mobile */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#4F8CFF]/12 rounded-full blur-3xl pointer-events-none md:hidden" aria-hidden="true" />
                    {/* Role, Company & Time Badge */}
                    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#4F8CFF] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-base font-semibold text-[#4F8CFF] flex items-center gap-2 mt-1">
                          <span>{exp.company}</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-xs font-normal text-slate-400">{exp.location}</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] text-xs font-semibold text-slate-300 border border-white/[0.08] self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-[#4F8CFF]" aria-hidden="true" />
                        <time dateTime="2026">{exp.period}</time>
                      </div>
                    </header>

                    {/* Summary Narrative */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Contributions & Achievements */}
                    <div className="space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Impact
                      </div>
                      <ul className="space-y-2.5 p-0 m-0 list-none">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Applied Tags */}
                    <footer className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-slate-400 mr-1">Stack:</span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </footer>

                  </motion.article>
                </ScrollReveal>

              </li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  );
}
