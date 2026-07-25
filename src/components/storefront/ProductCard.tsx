"use client";

import type { Product } from "@/lib/types";
import { formatRs } from "@/lib/format";
import { ImageSlot } from "../ui/ImageSlot";
import { Badge } from "../ui/Badge";
import { Reveal } from "../ui/Reveal";
import { useCart } from "../cart/CartProvider";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const { qtyFor, addToCart, incQty, decQty } = useCart();
  const qty = qtyFor(product.id);

  return (
    <Reveal
      delay={delay}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card"
    >
      <div className="relative aspect-square">
        <ImageSlot src={product.photoUrl} alt={product.name} label="Drop shoe photo" />
        <Badge className="absolute top-3.5 left-3.5">{product.condition}</Badge>
      </div>
      <div className="p-5">
        <div className="mb-1 text-[17px] font-bold">{product.name}</div>
        <div className="mb-3.5 text-[13px] opacity-60">
          Size UK {product.size} · {product.color}
        </div>
        <div className="flex items-center justify-between">
          <div className="font-display text-[22px]">Rs. {formatRs(product.price)}</div>
          {qty === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="bg-fg text-bg-solid cursor-pointer rounded-full border-none px-4 py-2.5 text-[13px] font-bold uppercase"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2.5 rounded-full border border-line bg-card px-2 py-1.5">
              <button
                onClick={() => decQty(product.id)}
                aria-label="Decrease quantity"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-line text-fg leading-none"
              >
                −
              </button>
              <span className="min-w-3 text-center text-sm font-bold">{qty}</span>
              <button
                onClick={() => incQty(product.id)}
                aria-label="Increase quantity"
                className="bg-accent flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none text-[#0b0b0d] leading-none"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
