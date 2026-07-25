import type { Stat } from "@/lib/types";

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-2xl border border-line p-5">
      <div className="mb-2.5 text-xs tracking-wide opacity-55 uppercase">{stat.label}</div>
      <div className="font-display text-[26px]">{stat.value}</div>
    </div>
  );
}
