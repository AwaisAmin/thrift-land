"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CartLine, Product } from "@/lib/types";

interface CartContextValue {
  lines: CartLine[];
  qtyFor: (productId: string) => number;
  addToCart: (product: Product) => void;
  incQty: (productId: string) => void;
  decQty: (productId: string) => void;
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children, products }: { children: ReactNode; products: Product[] }) {
  const [qtyById, setQtyById] = useState<Record<string, number>>({});
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product) => {
    setQtyById((prev) => ({ ...prev, [product.id]: (prev[product.id] ?? 0) + 1 }));
    setIsOpen(true);
  };

  const incQty = (productId: string) =>
    setQtyById((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));

  const decQty = (productId: string) =>
    setQtyById((prev) => {
      const next = { ...prev };
      const q = (next[productId] ?? 0) - 1;
      if (q <= 0) delete next[productId];
      else next[productId] = q;
      return next;
    });

  const lines = useMemo<CartLine[]>(
    () =>
      products
        .filter((p) => (qtyById[p.id] ?? 0) > 0)
        .map((product) => ({ product, qty: qtyById[product.id] })),
    [products, qtyById]
  );

  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const total = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0);

  return (
    <CartContext.Provider
      value={{
        lines,
        qtyFor: (productId) => qtyById[productId] ?? 0,
        addToCart,
        incQty,
        decQty,
        count,
        total,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        toggleCart: () => setIsOpen((o) => !o),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
