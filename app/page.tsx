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

const HEATMAP_SQUARES = Array.from({ length: 70 }, (_, index) => {
  const stripe = index % 10;
  if (stripe < 4) {
    return "emerald";
  }
  if (stripe < 7) {
    return "violet";
  }
  return "dim";
});

function CommitHeatmap() {
  return (
    <GlassCard className="col-span-1 md:col-span-2">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        Contribution Velocity
      </div>
      <div className="mt-4 grid grid-cols-10 gap-1 sm:grid-cols-12">
        {HEATMAP_SQUARES.map((tone, index) => (
          <span
            key={`square-${index}`}
            className={[
              "h-3 w-3 rounded-sm",
              tone === "emerald" && "bg-emerald-500",
              tone === "violet" && "bg-violet-500 shadow-md shadow-purple-500/50",
              tone === "dim" && "bg-white/10",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
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
          <CommitHeatmap />
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
