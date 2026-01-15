import { clsx } from "clsx";

export type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
