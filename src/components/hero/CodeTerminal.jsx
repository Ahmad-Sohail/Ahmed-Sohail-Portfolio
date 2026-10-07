import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CODE_SNIPPETS = {
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
    return list(db.projects.aggregate(pipeline))`,
};

const TABS = [
  { id: 'react',  label: 'App.jsx (Client)',   dot: 'bg-[#4F8CFF]',  activeText: 'text-[#4F8CFF]',  activeBorder: 'border-[#4F8CFF]' },
  { id: 'node',   label: 'server.js (API)',    dot: 'bg-emerald-400', activeText: 'text-emerald-400', activeBorder: 'border-emerald-400' },
  { id: 'python', label: 'models.py (Python)', dot: 'bg-amber-400',   activeText: 'text-amber-400',   activeBorder: 'border-amber-400' },
];

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    const text = CODE_SNIPPETS[activeTab];

    // Method 1: Modern Clipboard API (works on HTTPS + localhost)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback:', err);
      }
    }

    // Method 2: Fallback for http:// or older browsers
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      textarea.style.left = '-9999px';
      textarea.setAttribute('readonly', '');
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, text.length);
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.error('Fallback copy returned false');
      }
    } catch (err) {
      console.error('Copy failed completely:', err);
    }
  };

  return (
    <figure className="relative rounded-2xl bg-[#0F1523] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden m-0 w-full min-w-0 max-w-full">
      {/* Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#090D17] border-b border-white/8 w-full max-w-full">
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
          className="flex items-center gap-1 px-2 sm:px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-white/4 hover:bg-white/8 rounded-lg border border-white/6 transition-colors shrink-0 cursor-pointer"
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

      {/* Tabs */}
      <div
        className="flex items-center px-2 sm:px-3 pt-2 bg-[#0C111C] border-b border-white/6 gap-1 overflow-x-auto w-full max-w-full"
        role="tablist"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                isActive
                  ? `bg-[#0F1523] ${tab.activeText} font-semibold border-t-2 ${tab.activeBorder}`
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${tab.dot}`} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Code Pane */}
      <div className="p-3 sm:p-5 overflow-x-auto text-[11px] sm:text-[13px] font-mono leading-relaxed bg-[#0F1523] w-full min-w-0 max-w-full">
        <pre className="text-slate-300 whitespace-pre overflow-x-auto max-w-full">
          <code>{CODE_SNIPPETS[activeTab]}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="px-3 sm:px-4 py-2 bg-[#090D17] border-t border-white/6 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 w-full max-w-full">
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
  );
}