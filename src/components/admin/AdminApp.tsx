"use client";

import { useState } from "react";
import { ThemeProvider } from "../theme/ThemeProvider";
import { AdminProductsProvider, useAdminProducts } from "./AdminProductsProvider";
import { Sidebar } from "./Sidebar";
import { AdminHeader } from "./AdminHeader";
import { StatsGrid } from "./StatsGrid";
import { ProductsTable } from "./ProductsTable";
import { ProductFormModal } from "./ProductFormModal";
import { DeleteProductDialog } from "./DeleteProductDialog";
import { MenuIcon } from "../icons";
import type { Product } from "@/lib/types";

function AdminContent() {
  const { products } = useAdminProducts();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-line px-4 py-4 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line bg-transparent text-fg"
          >
            <MenuIcon />
          </button>
          <div className="font-display text-lg tracking-wide">
            THRIFT<span className="text-accent-ink">LAND</span>
          </div>
        </div>
        <main className="flex-1 px-4 py-6 md:px-10 md:py-8">
          <AdminHeader />
          <StatsGrid products={products} />
          <ProductsTable />
        </main>
      </div>
      <ProductFormModal />
      <DeleteProductDialog />
    </div>
  );
}

export function AdminApp({ initialProducts }: { initialProducts: Product[] }) {
  return (
    <ThemeProvider>
      <AdminProductsProvider initialProducts={initialProducts}>
        <AdminContent />
      </AdminProductsProvider>
    </ThemeProvider>
  );
}
