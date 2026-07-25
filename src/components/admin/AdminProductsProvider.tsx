"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product, ProductFormValues } from "@/lib/types";
import { PRODUCTS } from "@/lib/data";

const EMPTY_FORM: ProductFormValues = {
  name: "",
  size: "9",
  condition: "Like New",
  color: "",
  price: "",
  status: "Active",
};

interface AdminProductsContextValue {
  products: Product[];
  modalOpen: boolean;
  editingId: string | null;
  photoId: string;
  form: ProductFormValues;
  saveLabel: string;
  modalTitle: string;
  openAddModal: () => void;
  openEditModal: (product: Product) => void;
  closeModal: () => void;
  setField: <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) => void;
  saveProduct: () => void;
  deleteProduct: (id: string) => void;
}

const AdminProductsContext = createContext<AdminProductsContextValue | null>(null);

export function AdminProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [photoSeed, setPhotoSeed] = useState(0);
  const [form, setForm] = useState<ProductFormValues>(EMPTY_FORM);

  const openAddModal = () => {
    setEditingId(null);
    setPhotoSeed((s) => s + 1);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      size: product.size,
      condition: product.condition,
      color: product.color,
      status: product.status,
      price: String(product.price),
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const setField = <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const saveProduct = () => {
    if (!form.name.trim() || !form.price.trim()) return;
    const price = Number(form.price.replace(/,/g, "")) || 0;

    if (editingId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? { ...p, ...form, price, id: editingId } : p))
      );
    } else {
      const id = "p" + Date.now();
      setProducts((prev) => [{ ...form, price, id }, ...prev]);
    }
    setModalOpen(false);
  };

  const deleteProduct = (id: string) => {
    if (typeof window !== "undefined" && !window.confirm("Remove this listing?")) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const value = useMemo<AdminProductsContextValue>(
    () => ({
      products,
      modalOpen,
      editingId,
      photoId: `admin-photo-${editingId ?? photoSeed}`,
      form,
      saveLabel: editingId ? "Save Changes" : "Add Listing",
      modalTitle: editingId ? "Edit Listing" : "Add Listing",
      openAddModal,
      openEditModal,
      closeModal,
      setField,
      saveProduct,
      deleteProduct,
    }),
    [products, modalOpen, editingId, photoSeed, form]
  );

  return <AdminProductsContext.Provider value={value}>{children}</AdminProductsContext.Provider>;
}

export function useAdminProducts(): AdminProductsContextValue {
  const ctx = useContext(AdminProductsContext);
  if (!ctx) throw new Error("useAdminProducts must be used within an AdminProductsProvider");
  return ctx;
}
