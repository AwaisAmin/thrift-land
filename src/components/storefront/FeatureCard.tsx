import type { Feature } from "@/lib/types";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-2xl border border-line p-8">
      <div className="text-accent mb-3 font-display text-4xl">{feature.num}</div>
      <div className="mb-2 text-lg font-bold">{feature.title}</div>
      <div className="text-[15px] leading-relaxed opacity-65">{feature.desc}</div>
    </div>
  );
}
