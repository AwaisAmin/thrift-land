import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Inventory — Thrift Land Admin",
  description: "Manage the sneaker listings shown on the Thrift Land storefront.",
};

export default async function AdminPage() {
  const products = await getProducts();
  return <AdminApp initialProducts={products} />;
}
