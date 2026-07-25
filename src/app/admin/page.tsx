import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";

export const metadata: Metadata = {
  title: "Inventory — Thrift Land Admin",
  description: "Manage the sneaker listings shown on the Thrift Land storefront.",
};

export default function AdminPage() {
  return <AdminApp />;
}
