import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 to-slate-950">
        <main className="grid grid-cols-1 gap-6 p-4 md:grid-cols-4 md:p-8">
          <GlassCard className="col-span-full">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              System Overview
            </div>
            <div className="mt-2 text-xl font-semibold text-white">
              Ralph Command Center
            </div>
          </GlassCard>
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
