import { motion } from 'framer-motion';

export default function ScrollIndicator({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="pt-12 pb-2 hidden md:flex flex-col items-center justify-center gap-2"
    >
      <a
        href="#about"
        onClick={onClick}
        className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#4F8CFF] transition-colors cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-slate-200 transition-colors">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 group-hover:border-[#4F8CFF]/50 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]"
          />
        </div>
      </a>
    </motion.div>
  );
}