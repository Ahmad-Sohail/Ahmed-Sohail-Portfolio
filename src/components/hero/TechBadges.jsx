import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const BADGES = [
  {
    id: 'react',
    label: 'React',
    sub: 'Component UI',
    borderHover: 'hover:border-[#4F8CFF]/50',
    iconBg: 'bg-[#4F8CFF]/15',
    iconColor: 'text-[#4F8CFF]',
    icon: (
      <svg className="w-4 h-4 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      </svg>
    ),
  },
  {
    id: 'js',
    label: 'JavaScript',
    sub: 'ES6+ Pure Standard',
    borderHover: 'hover:border-amber-400/50',
    iconBg: 'bg-amber-400/15',
    iconColor: 'text-amber-400',
    icon: <span className="font-bold text-xs font-mono">JS</span>,
  },
  {
    id: 'html',
    label: 'HTML5',
    sub: 'Semantic Blocks',
    borderHover: 'hover:border-orange-500/50',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    icon: <span className="font-bold text-xs font-mono">&lt;/&gt;</span>,
  },
  {
    id: 'css',
    label: 'CSS Grid',
    sub: 'Fluid Layouts',
    borderHover: 'hover:border-sky-400/50',
    iconBg: 'bg-sky-400/15',
    iconColor: 'text-sky-400',
    icon: <Layers className="w-3.5 h-3.5" />,
  },
];

export default function TechBadges() {
  return (
    <div className="hidden sm:flex flex-wrap items-center justify-between gap-2.5 pt-4">
      {BADGES.map((badge) => (
        <motion.div
          key={badge.id}
          whileHover={{ y: -3, scale: 1.02 }}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1523]/90 backdrop-blur-md border border-white/[0.08] ${badge.borderHover} transition-colors shadow-md`}
        >
          <div className={`w-6 h-6 rounded-lg ${badge.iconBg} flex items-center justify-center ${badge.iconColor}`}>
            {badge.icon}
          </div>
          <div>
            <div className="text-xs font-semibold text-white">{badge.label}</div>
            <div className="text-[10px] text-slate-400">{badge.sub}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}