import type { Product } from "@/lib/types";
import type { Stat } from "@/lib/types";
import { formatRs } from "@/lib/format";
import { StatCard } from "./StatCard";

function buildStats(products: Product[]): Stat[] {
  const active = products.filter((p) => p.status === "Active");
  const sold = products.filter((p) => p.status === "Sold");
  const activeValue = active.reduce((sum, p) => sum + p.price, 0);
  const avgPrice = products.length
    ? Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)
    : 0;

  return [
    { label: "Active Listings", value: String(active.length) },
    { label: "Sold", value: String(sold.length) },
    { label: "Active Inventory Value", value: `Rs. ${formatRs(activeValue)}` },
    { label: "Avg. Price", value: `Rs. ${formatRs(avgPrice)}` },
  ];
}

export function StatsGrid({ products }: { products: Product[] }) {
  const stats = buildStats(products);
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
