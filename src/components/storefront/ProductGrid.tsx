import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="shop" className="relative z-10 px-[5vw] pb-30">
      <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-[clamp(36px,5vw,64px)] uppercase">The Drop</h2>
        <div className="text-[15px] opacity-65">Men&rsquo;s sizes UK 6–12 · Updated weekly</div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-7">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={(i % 4) * 0.08} />
        ))}
      </div>
    </section>
  );
}
