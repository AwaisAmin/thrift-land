"use client";

import { ThemeProvider } from "../theme/ThemeProvider";
import { AdminProductsProvider, useAdminProducts } from "./AdminProductsProvider";
import { Sidebar } from "./Sidebar";
import { AdminHeader } from "./AdminHeader";
import { StatsGrid } from "./StatsGrid";
import { ProductsTable } from "./ProductsTable";
import { ProductFormModal } from "./ProductFormModal";

function AdminContent() {
  const { products } = useAdminProducts();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="max-w-320 flex-1 px-10 py-8">
        <AdminHeader />
        <StatsGrid products={products} />
        <ProductsTable />
      </main>
      <ProductFormModal />
    </div>
  );
}

export function AdminApp() {
  return (
    <ThemeProvider>
      <AdminProductsProvider>
        <AdminContent />
      </AdminProductsProvider>
    </ThemeProvider>
  );
}
