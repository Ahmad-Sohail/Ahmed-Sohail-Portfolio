export default function StatusBadge({ text = 'Available for Opportunities' }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1523] border border-white/8 shadow-sm max-w-full">
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide truncate">
        {text}
      </span>
    </div>
  );
}