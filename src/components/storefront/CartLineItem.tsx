import type { CartLine } from "@/lib/types";
import { formatRs } from "@/lib/format";

interface CartLineItemProps {
  line: CartLine;
  onInc: (productId: string) => void;
  onDec: (productId: string) => void;
}

export function CartLineItem({ line, onInc, onDec }: CartLineItemProps) {
  const { product, qty } = line;

  return (
    <div className="flex items-center gap-3.5 border-b border-line py-4">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl border border-line bg-card font-display text-lg">
        {product.condition}
      </div>
      <div className="flex-1">
        <div className="text-[15px] font-bold">{product.name}</div>
        <div className="mb-2 text-xs opacity-60">
          Size EU {product.size} · Rs. {formatRs(product.price)}
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onDec(product.id)}
            aria-label="Decrease quantity"
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none bg-line text-fg leading-none transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            −
          </button>
          <span className="min-w-3 text-center text-sm font-bold">{qty}</span>
          <button
            onClick={() => onInc(product.id)}
            aria-label="Increase quantity"
            className="bg-accent flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-none text-[#0b0b0d] leading-none transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
      <div className="shrink-0 font-display text-base">Rs. {formatRs(product.price * qty)}</div>
    </div>
  );
}
