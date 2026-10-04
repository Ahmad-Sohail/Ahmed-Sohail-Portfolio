import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Terminal, Layers, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    react: `// Client: React 19 Component
export function FullStackApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/projects')
      .then((res) => res.json())
      .then((payload) => {
        setData(payload.data);
        setLoading(false);
      });
  }, []);

  return <ProjectGrid items={data} isLoading={loading} />;
}`,
    node: `// Server: Node.js & Express REST API
import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getProjectMetrics } from '../controllers/metrics.js';

const router = express.Router();

router.get('/metrics', authenticate, async (req, res) => {
  const metrics = await getProjectMetrics(req.user.id);
  res.status(200).json({ status: 'success', data: metrics });
});

export default router;`,
    python: `// Backend Service: Python & MongoDB
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client.portfolio_engine

def get_project_metrics(user_id: str):
    """Aggregate real-time metrics from MongoDB documents"""
    pipeline = [
        {"$match": {"user_id": user_id}},
        {"$lookup": {"from": "tasks", "localField": "_id", "foreignField": "project_id", "as": "tasks"}},
        {"$project": {"title": 1, "total_tasks": {"$size": "$tasks"}}}
    ]
    return list(db.projects.aggregate(pipeline))`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navOffset = 74;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full"
    >
      {/* Background Lighting & Grid Texture with Framer Motion ambient drift */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden w-full max-w-full" aria-hidden="true">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#4F8CFF]/12 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#8B5CF6]/10 rounded-full blur-[140px]"
        />
        
        {/* Subtle Engineering Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="fluid-container w-full max-w-full">
        {/* Customized CSS Grid System for Hero Block */}
        <div className="custom-grid-hero w-full max-w-full">
          
          {/* Left Block: Heading, Developer Title, Description & CTAs with Framer Motion entrance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start space-y-6 w-full min-w-0 max-w-full"
          >
            
            {/* Small status badge: Available for Opportunities */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1523] border border-white/[0.08] shadow-sm max-w-full">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide truncate">
                Available for Opportunities
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-2 w-full max-w-full min-w-0">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] break-words"
              >
                Ahmed Sohail
              </h1>
              {/* Developer Title: Always 100% visible, fully responsive, zero text clipping */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] bg-clip-text text-transparent inline-block pb-1 leading-snug">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I build responsive, high-performance, and accessible full-stack web applications using modern JavaScript, React, Node.js, Express, and scalable database systems.
            </p>

            {/* Context meta info */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 pt-0.5">
              <span className="font-medium text-slate-200">Full Stack Developer Intern</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#4F8CFF] font-semibold">Progree</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2026</span>
            </div>

            {/* Buttons & Actions - fully fluid, edge-to-edge on mobile with zero overflow */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto min-w-0 max-w-full">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all text-center cursor-pointer box-border"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 opacity-80" />
              </motion.a>

              {/* Download Resume Button with clean hover animation */}
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/resume-ahmed-sohail.pdf"
                download="Ahmed_Sohail_Resume.pdf"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-[#0F1523] hover:bg-[#151D30] hover:text-white border border-[#4F8CFF]/25 sm:border-white/[0.1] hover:border-[#4F8CFF]/50 rounded-xl transition-all shadow-sm text-center cursor-pointer overflow-hidden box-border active:border-[#4F8CFF]"
                aria-label="Download Ahmed Sohail's Resume PDF"
                title="Download Ahmed Sohail's Resume PDF"
              >
                {/* Subtle shine hover effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-out pointer-events-none" aria-hidden="true" />
                <Download className="w-4 h-4 text-[#4F8CFF] group-hover:translate-y-0.5 transition-transform duration-200" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 bg-[#0F1523]/60 hover:bg-[#151D30] hover:text-white border border-white/[0.08] hover:border-white/[0.2] rounded-xl transition-all text-center cursor-pointer box-border"
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
                  className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-xl bg-[#0F1523] hover:bg-[#151D30] text-slate-300 hover:text-white border border-white/[0.1] hover:border-white/[0.25] shadow-sm transition-all"
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
                  className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-xl bg-[#0F1523] hover:bg-[#151D30] text-slate-300 hover:text-[#4F8CFF] border border-white/[0.1] hover:border-[#4F8CFF]/40 shadow-sm transition-all"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Semantic Mini-Stats Grid - Fluid, fully readable across all phones and desktops */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-white/[0.06] w-full max-w-lg min-w-0">
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white tabular-nums truncate sm:whitespace-normal">Full Stack</div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">End-to-End Apps</div>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-white tabular-nums truncate sm:whitespace-normal">React + Node</div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">Client & Server</div>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-xl lg:text-2xl font-bold text-[#4F8CFF] tabular-nums truncate sm:whitespace-normal">Progree</div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate sm:whitespace-normal">Internship 2026</div>
              </div>
            </div>

          </motion.div>

          {/* Right Block: Semantic Terminal Preview Visual with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="relative w-full min-w-0 max-w-full"
          >
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-60 -z-10" aria-hidden="true" />

            {/* Semantic <figure> for Developer Terminal Visual */}
            <figure className="relative rounded-2xl bg-[#0F1523] border border-white/[0.1] shadow-2xl shadow-black/60 overflow-hidden m-0 w-full min-w-0 max-w-full">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#090D17] border-b border-white/[0.08] w-full max-w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80" aria-hidden="true" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80" aria-hidden="true" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" aria-hidden="true" />
                  </div>
                  <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1.5 truncate">
                    <Terminal className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0" />
                    <span className="truncate">ahmed-fullstack-env</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  className="flex items-center gap-1 px-2 sm:px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg border border-white/[0.06] transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy active code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Tab Navigation */}
              <div className="flex items-center px-2 sm:px-3 pt-2 bg-[#0C111C] border-b border-white/[0.06] gap-1 overflow-x-auto w-full max-w-full" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'react'}
                  onClick={() => setActiveTab('react')}
                  className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                    activeTab === 'react'
                      ? 'bg-[#0F1523] text-[#4F8CFF] font-semibold border-t-2 border-[#4F8CFF]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" aria-hidden="true" />
                  App.jsx (Client)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'node'}
                  onClick={() => setActiveTab('node')}
                  className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                    activeTab === 'node'
                      ? 'bg-[#0F1523] text-emerald-400 font-semibold border-t-2 border-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  server.js (API)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'python'}
                  onClick={() => setActiveTab('python')}
                  className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                    activeTab === 'python'
                      ? 'bg-[#0F1523] text-amber-400 font-semibold border-t-2 border-amber-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                  models.py (Python)
                </button>
              </div>

              {/* Code Pane */}
              <div className="p-3 sm:p-5 overflow-x-auto text-[11px] sm:text-[13px] font-mono leading-relaxed bg-[#0F1523] w-full min-w-0 max-w-full">
                <pre className="text-slate-300 whitespace-pre overflow-x-auto max-w-full">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-3 sm:px-4 py-2 bg-[#090D17] border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 w-full max-w-full">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden="true" />
                  <span className="truncate">Pure JavaScript · Client Ready</span>
                </span>
                <span className="shrink-0 ml-2">UTF-8 · LF</span>
              </div>

              <figcaption className="sr-only">
                Interactive code viewer showcasing Ahmed Sohail's React, JavaScript, and CSS Grid architectures.
              </figcaption>
            </figure>

            {/* Floating Frontend Technology Badges with subtle hover lift */}
            <div className="hidden sm:flex flex-wrap items-center justify-between gap-2.5 pt-4">
              
              {/* Badge 1: React */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1523]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#4F8CFF]/50 transition-colors shadow-md"
              >
                <div className="w-6 h-6 rounded-lg bg-[#4F8CFF]/15 flex items-center justify-center text-[#4F8CFF]">
                  <svg className="w-4 h-4 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">React</div>
                  <div className="text-[10px] text-slate-400">Component UI</div>
                </div>
              </motion.div>

              {/* Badge 2: JavaScript (ES6+) */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1523]/90 backdrop-blur-md border border-white/[0.08] hover:border-amber-400/50 transition-colors shadow-md"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 font-bold text-xs font-mono">
                  JS
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">JavaScript</div>
                  <div className="text-[10px] text-slate-400">ES6+ Pure Standard</div>
                </div>
              </motion.div>

              {/* Badge 3: HTML5 */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1523]/90 backdrop-blur-md border border-white/[0.08] hover:border-orange-500/50 transition-colors shadow-md"
              >
                <div className="w-6 h-6 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 font-bold text-xs font-mono">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">HTML5</div>
                  <div className="text-[10px] text-slate-400">Semantic Blocks</div>
                </div>
              </motion.div>

              {/* Badge 4: CSS3 & Grid */}
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1523]/90 backdrop-blur-md border border-white/[0.08] hover:border-sky-400/50 transition-colors shadow-md"
              >
                <div className="w-6 h-6 rounded-lg bg-sky-400/15 flex items-center justify-center text-sky-400">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">CSS Grid</div>
                  <div className="text-[10px] text-slate-400">Fluid Layouts</div>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-12 pb-2 hidden md:flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#4F8CFF] transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-slate-200 transition-colors">Scroll to explore</span>
            <div className="w-5 h-9 rounded-full border-2 border-white/20 group-hover:border-[#4F8CFF]/50 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
