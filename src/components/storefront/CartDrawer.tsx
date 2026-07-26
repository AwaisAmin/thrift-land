"use client";

import { IconButton } from "../ui/IconButton";
import { CloseIcon } from "../icons";
import { CartLineItem } from "./CartLineItem";
import { useCart } from "../cart/CartProvider";
import { formatRs } from "@/lib/format";
import { buildCheckoutMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export function CartDrawer() {
  const { lines, count, total, isOpen, closeCart, incQty, decQty } = useCart();
  const hasItems = count > 0;
  const checkoutLink = buildWhatsAppLink(buildCheckoutMessage(lines, total));

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-70 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 bottom-0 z-71 flex w-[min(420px,92vw)] flex-col border-l border-line bg-surface transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 pt-6 pb-5">
          <div className="font-display text-[22px] uppercase">Your Cart</div>
          <IconButton onClick={closeCart} size={34} aria-label="Close cart">
            <CloseIcon size={14} />
          </IconButton>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!hasItems && (
            <div className="py-10 text-center text-[15px] opacity-55">
              Your cart is empty. Add a pair from The Drop.
            </div>
          )}
          {lines.map((line) => (
            <CartLineItem key={line.product.id} line={line} onInc={incQty} onDec={decQty} />
          ))}
        </div>

        <div className="border-t border-line p-6">
          <div className="mb-4.5 flex justify-between text-base font-bold">
            <span>Total</span>
            <span>Rs. {formatRs(total)}</span>
          </div>
          {hasItems ? (
            <a
              href={checkoutLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] p-4 text-[15px] font-bold tracking-wide text-white uppercase transition-opacity duration-200 hover:opacity-85"
            >
              Checkout on WhatsApp →
            </a>
          ) : (
            <div className="flex items-center justify-center gap-2 rounded-full bg-line p-4 text-[15px] font-bold tracking-wide text-fg uppercase opacity-50">
              Cart Empty
            </div>
          )}
        </div>
      </div>
    </>
  );
}
