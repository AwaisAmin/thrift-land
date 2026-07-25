"use client";

import { useAdminProducts } from "./AdminProductsProvider";
import { ProductRow, GRID_COLS } from "./ProductRow";

const COLUMN_LABELS = ["Item", "Size", "Condition", "Price", "Status"];

export function ProductsTable() {
  const { products, openEditModal, deleteProduct } = useAdminProducts();

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div
        className={`grid ${GRID_COLS} gap-3 border-b border-line px-5 py-3.5 text-xs tracking-wide opacity-50 uppercase`}
      >
        <div />
        {COLUMN_LABELS.map((label) => (
          <div key={label}>{label}</div>
        ))}
        <div />
      </div>

      {products.map((product) => (
        <ProductRow key={product.id} product={product} onEdit={openEditModal} onDelete={deleteProduct} />
      ))}

      {products.length === 0 && (
        <div className="p-12.5 text-center text-sm opacity-50">No listings yet. Add your first pair.</div>
      )}
    </div>
  );
}
