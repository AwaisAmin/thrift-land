import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { ShoeIcon } from "../icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ProductGrid({ products }: { products: Product[] }) {
  const waLink = buildWhatsAppLink("Hi Thrift Land! Let me know when the next drop is live.");

  return (
    <section id="shop" className="relative z-10 px-[5vw] pb-30">
      <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-[clamp(36px,5vw,64px)] uppercase">The Drop</h2>
        <div className="text-[15px] opacity-65">Men&rsquo;s sizes EU 38–46 · Updated weekly</div>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line px-6 py-24 text-center">
          <ShoeIcon className="opacity-40" size={40} />
          <div className="font-display text-xl uppercase">Next Drop Loading</div>
          <p className="max-w-90 text-sm opacity-60">
            We&rsquo;re inspecting and photographing the next batch. Message us on WhatsApp and
            we&rsquo;ll let you know the moment it&rsquo;s live.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fg text-bg-solid mt-1 rounded-full px-6 py-3 text-[13px] font-bold tracking-wide uppercase transition-opacity duration-200 hover:opacity-85"
          >
            Get Notified on WhatsApp
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-7">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={(i % 4) * 0.08} />
          ))}
        </div>
      )}
    </section>
  );
}
