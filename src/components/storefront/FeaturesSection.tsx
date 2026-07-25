import type { Feature } from "@/lib/types";
import { Reveal } from "../ui/Reveal";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection({ features }: { features: Feature[] }) {
  return (
    <section className="relative z-10 px-[5vw] py-30">
      <Reveal className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.num} feature={feature} />
        ))}
      </Reveal>
    </section>
  );
}
