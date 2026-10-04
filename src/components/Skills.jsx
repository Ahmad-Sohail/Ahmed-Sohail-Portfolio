import { useState } from 'react';
import { GitBranch, Github, Palette, Server, Database, Code2, Globe, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'database', 'tools'];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative section-fluid-spacing border-t border-white/[0.04] overflow-hidden w-full max-w-full"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="fluid-container">
        
        {/* Section Header with ScrollReveal */}
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

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter skills by technology category"
              className="flex items-center gap-1 p-1 bg-[#0F1523] border border-white/[0.08] rounded-xl self-start sm:self-auto overflow-x-auto max-w-full"
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
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
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

        {/* Bento Grid Architecture with AnimatePresence */}
        <motion.div layout className="space-y-6">
          
          {/* Featured Cards Row: React (Client) & Node.js (Server) */}
          {(selectedCategory === 'all' || selectedCategory === 'frontend' || selectedCategory === 'backend') && (
            <motion.div layout className="custom-grid-skills-featured">
              
              {/* Featured Article 1: React (Client Core) */}
              {(selectedCategory === 'all' || selectedCategory === 'frontend') && (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4, borderColor: 'rgba(79, 140, 255, 0.5)' }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-2xl bg-[#0F1523] border border-[#4F8CFF]/30 md:border-white/[0.08] md:hover:border-[#4F8CFF]/50 p-6 sm:p-8 group shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden active:border-[#4F8CFF]/60"
                >
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#4F8CFF]/15 md:bg-[#4F8CFF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#4F8CFF]/20 transition-all duration-500" aria-hidden="true" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#4F8CFF]/20 border border-[#4F8CFF]/40 flex items-center justify-center text-[#4F8CFF] group-hover:scale-105 transition-transform shadow-sm">
                        <svg className="w-7 h-7 animate-[spin_16s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#4F8CFF]/15 text-[#4F8CFF] border border-[#4F8CFF]/30 shadow-sm">
                        Frontend Core
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4F8CFF] transition-colors">
                      React 19
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      Building component-driven, responsive user interfaces with modular architectures, custom hooks, atomic state management, and modern Vite toolchains.
                    </p>
                  </div>

                  <footer>
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
                      <span className="text-slate-200 font-medium">Hooks & Context</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">Modular Architecture</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">State Sync</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">Virtual DOM</span>
                    </div>
                  </footer>
                </motion.article>
              )}

              {/* Featured Article 2: Node.js & Express (Backend Core) */}
              {(selectedCategory === 'all' || selectedCategory === 'backend') && (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-2xl bg-[#0F1523] border border-emerald-400/30 md:border-white/[0.08] md:hover:border-emerald-400/50 p-6 sm:p-8 group shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between overflow-hidden active:border-emerald-400/60"
                >
                  <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-400/15 md:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/20 transition-all duration-500" aria-hidden="true" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg group-hover:scale-105 transition-transform shadow-sm">
                        <Server className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 shadow-sm">
                        Backend Core
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      Node.js & Express
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      Designing scalable server runtimes, RESTful APIs, modular middleware chains, token-based authentication (JWT), and efficient asynchronous I/O workflows.
                    </p>
                  </div>

                  <footer>
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
                      <span className="text-slate-200 font-medium">RESTful APIs</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">Express Middleware</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">Auth & JWT</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-200 font-medium">Async I/O</span>
                    </div>
                  </footer>
                </motion.article>
              )}

            </motion.div>
          )}

          {/* Supporting Bento Cards Custom Grid */}
          <motion.div layout className="custom-grid-skills-supporting">
            
            {/* JavaScript (ES6+) */}
            {(selectedCategory === 'all' || selectedCategory === 'frontend') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-amber-400/25 md:border-white/[0.08] md:hover:border-amber-400/50 p-6 group flex flex-col justify-between active:border-amber-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-mono font-bold text-sm shadow-sm">
                      JS
                    </div>
                    <span className="text-xs text-amber-300 md:text-slate-400 font-medium">Core Language</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">JavaScript (ES6+)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Modern ECMAScript standards, asynchronous promises, async/await, closures, and event-loop execution.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>ES6+</span>
                  <span aria-hidden="true">·</span>
                  <span>Async / Await</span>
                  <span aria-hidden="true">·</span>
                  <span>DOM & Fetch</span>
                </footer>
              </motion.article>
            )}

            {/* Databases: MongoDB & NoSQL */}
            {(selectedCategory === 'all' || selectedCategory === 'database') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(19, 170, 82, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-emerald-400/25 md:border-white/[0.08] md:hover:border-emerald-500/50 p-6 group flex flex-col justify-between active:border-emerald-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-sm">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-emerald-300 md:text-slate-400 font-medium">NoSQL Store</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">MongoDB & NoSQL</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Document-oriented schema design, collections, aggregation pipelines, Mongoose ODM, indexing, and performant CRUD operations.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>MongoDB</span>
                  <span aria-hidden="true">·</span>
                  <span>Mongoose</span>
                  <span aria-hidden="true">·</span>
                  <span>Aggregations</span>
                </footer>
              </motion.article>
            )}

            {/* RESTful APIs & Network Integration */}
            {(selectedCategory === 'all' || selectedCategory === 'backend') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-sky-400/25 md:border-white/[0.08] md:hover:border-sky-400/50 p-6 group flex flex-col justify-between active:border-sky-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-sm">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-sky-300 md:text-slate-400 font-medium">Network & APIs</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">RESTful APIs</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Clean contract design, HTTP status protocols, input sanitization, CORS security, and client integration.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>API Contracts</span>
                  <span aria-hidden="true">·</span>
                  <span>Postman Testing</span>
                  <span aria-hidden="true">·</span>
                  <span>CORS Security</span>
                </footer>
              </motion.article>
            )}

            {/* Tailwind CSS */}
            {(selectedCategory === 'all' || selectedCategory === 'frontend') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(45, 212, 191, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-teal-400/25 md:border-white/[0.08] md:hover:border-teal-400/50 p-6 group flex flex-col justify-between active:border-teal-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-400/20 border border-teal-400/40 flex items-center justify-center text-teal-400 shadow-sm">
                      <Palette className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-teal-300 md:text-slate-400 font-medium">Design System</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Tailwind CSS</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Utility-first styling, consistent spatial tokens, dark themes, and responsive design systems.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Utility System</span>
                  <span aria-hidden="true">·</span>
                  <span>Design Tokens</span>
                </footer>
              </motion.article>
            )}

            {/* HTML5 & CSS3 */}
            {(selectedCategory === 'all' || selectedCategory === 'frontend') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(249, 115, 22, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-orange-400/25 md:border-white/[0.08] md:hover:border-orange-400/50 p-6 group flex flex-col justify-between active:border-orange-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold font-mono text-sm shadow-sm">
                      &lt;/&gt;
                    </div>
                    <span className="text-xs text-orange-300 md:text-slate-400 font-medium">Web Standards</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">HTML5 & CSS3</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Semantic document architecture, accessible landmark elements, fluid CSS Grid and Flexbox layouts.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Semantic HTML5</span>
                  <span aria-hidden="true">·</span>
                  <span>CSS Grid & Flex</span>
                </footer>
              </motion.article>
            )}

            {/* Git & GitHub */}
            {(selectedCategory === 'all' || selectedCategory === 'tools') && (
              <motion.article
                layout
                whileHover={{ y: -4, borderColor: 'rgba(251, 113, 133, 0.5)' }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-[#0F1523] border border-rose-400/25 md:border-white/[0.08] md:hover:border-rose-400/50 p-6 group flex flex-col justify-between active:border-rose-400/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-400/20 border border-rose-400/40 flex items-center justify-center text-rose-400 shadow-sm">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-rose-300 md:text-slate-400 font-medium">DevOps & VCS</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">Git & GitHub</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Distributed source code tracking, atomic commits, pull request reviews, and CI/CD collaboration.
                  </p>
                </div>
                <footer className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Branching</span>
                  <span aria-hidden="true">·</span>
                  <span>PR Workflows</span>
                </footer>
              </motion.article>
            )}

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
