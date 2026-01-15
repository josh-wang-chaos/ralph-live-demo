import GlassCard from "@/components/GlassCard";

function Header() {
  return (
    <GlassCard className="col-span-full">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-slate-300">
          RALPH // OS
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
          <span className="rounded-full px-3 py-1 text-slate-400">
            Manual
          </span>
          <span className="rounded-full bg-emerald-400 px-4 py-1 text-emerald-950 shadow-lg shadow-emerald-500/50">
            Ralph: Online
          </span>
        </div>
      </div>
    </GlassCard>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 to-slate-950">
        <main className="grid grid-cols-1 gap-6 p-4 md:grid-cols-4 md:p-8">
          <Header />
          <GlassCard className="md:col-span-2">
            <div className="text-sm text-slate-300">Primary Console</div>
          </GlassCard>
          <GlassCard>
            <div className="text-sm text-slate-300">Metrics</div>
          </GlassCard>
          <GlassCard>
            <div className="text-sm text-slate-300">Status</div>
          </GlassCard>
        </main>
      </div>
    </div>
  );
}
