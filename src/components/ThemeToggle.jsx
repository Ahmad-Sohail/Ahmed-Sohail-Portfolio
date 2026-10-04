import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`theme-toggle-btn group relative inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none ${
        showLabel
          ? 'w-full px-4 py-3 text-sm font-semibold'
          : 'w-10 h-10 p-2 text-sm'
      } ${
        isDark
          ? 'bg-[#0F1523] border border-white/[0.12] text-amber-300 hover:text-amber-200 hover:border-amber-400/40 hover:bg-[#151D30] shadow-sm'
          : 'bg-white border border-slate-300 text-slate-800 hover:text-blue-600 hover:border-blue-400 hover:bg-slate-50 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to high-contrast light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to high-contrast light theme' : 'Switch to dark theme'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex items-center justify-center shrink-0"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </motion.div>

      {showLabel && (
        <span className="flex-1 text-left font-medium">
          {isDark ? 'Switch to High-Contrast Light' : 'Switch to Dark Theme'}
        </span>
      )}

      {showLabel && (
        <span
          className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${
            isDark
              ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
              : 'bg-blue-50 text-blue-700 border-blue-200'
          }`}
        >
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </motion.button>
  );
}
