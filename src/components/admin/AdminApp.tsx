"use client";

import { ThemeProvider } from "../theme/ThemeProvider";
import { AdminProductsProvider, useAdminProducts } from "./AdminProductsProvider";
import { Sidebar } from "./Sidebar";
import { AdminHeader } from "./AdminHeader";
import { StatsGrid } from "./StatsGrid";
import { ProductsTable } from "./ProductsTable";
import { ProductFormModal } from "./ProductFormModal";
import type { Product } from "@/lib/types";

function AdminContent() {
  const { products } = useAdminProducts();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-8">
        <AdminHeader />
        <StatsGrid products={products} />
        <ProductsTable />
      </main>
      <ProductFormModal />
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
