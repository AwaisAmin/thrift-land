"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product, ProductFormValues } from "@/lib/types";
import {
  createProduct,
  updateProduct,
  deleteProduct as deleteProductAction,
} from "@/app/admin/actions";
import { uploadProductPhoto } from "@/lib/uploadProductPhoto";

const EMPTY_FORM: ProductFormValues = {
  name: "",
  size: "9",
  condition: "Like New",
  color: "",
  price: "",
  status: "Active",
  photoUrl: undefined,
};

interface AdminProductsContextValue {
  products: Product[];
  modalOpen: boolean;
  editingId: string | null;
  photoId: string;
  photoPreview: string | undefined;
  form: ProductFormValues;
  saveLabel: string;
  modalTitle: string;
  saving: boolean;
  openAddModal: () => void;
  openEditModal: (product: Product) => void;
  closeModal: () => void;
  setField: <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) => void;
  setPhotoFile: (file: File) => void;
  saveProduct: () => void;
  deleteProduct: (id: string) => void;
  deleteTarget: Product | null;
  confirmDelete: () => void;
  cancelDelete: () => void;
}

const AdminProductsContext = createContext<AdminProductsContextValue | null>(null);

export function AdminProductsProvider({
  initialProducts,
  children,
}: {
  initialProducts: Product[];
  children: ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [photoSeed, setPhotoSeed] = useState(0);
  const [form, setForm] = useState<ProductFormValues>(EMPTY_FORM);
  const [photoFile, setPhotoFileState] = useState<File | null>(null);
  const [photoObjectUrl, setPhotoObjectUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  // Revoke the previous blob URL whenever it's replaced or the provider unmounts.
  useEffect(() => {
    return () => {
      if (photoObjectUrl) URL.revokeObjectURL(photoObjectUrl);
    };
  }, [photoObjectUrl]);

  const setPhotoFile = (file: File) => {
    setPhotoFileState(file);
    setPhotoObjectUrl(URL.createObjectURL(file));
  };

  const openAddModal = () => {
    setEditingId(null);
    setPhotoSeed((s) => s + 1);
    setForm(EMPTY_FORM);
    setPhotoFileState(null);
    setPhotoObjectUrl(null);
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
      photoUrl: product.photoUrl,
    });
    setPhotoFileState(null);
    setPhotoObjectUrl(null);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const setField = <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const saveProduct = useCallback(async () => {
    if (!form.name.trim() || !form.price.trim()) return;
    const price = Number(form.price.replace(/,/g, "")) || 0;

    setSaving(true);
    try {
      const photoUrl = photoFile ? await uploadProductPhoto(photoFile) : form.photoUrl;
      const payload: ProductFormValues = { ...form, photoUrl };

      if (editingId) {
        await updateProduct(editingId, payload);
        setProducts((prev) =>
          prev.map((p) => (p.id === editingId ? { ...p, ...payload, price, id: editingId } : p))
        );
      } else {
        const saved = await createProduct(payload);
        setProducts((prev) => [saved, ...prev]);
      }
      setModalOpen(false);
    } finally {
      setSaving(false);
    }
  }, [form, editingId, photoFile]);

  const deleteProduct = (id: string) => setDeleteTargetId(id);

  const cancelDelete = () => setDeleteTargetId(null);

  const confirmDelete = useCallback(async () => {
    const id = deleteTargetId;
    if (!id) return;
    setDeleteTargetId(null);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    await deleteProductAction(id);
  }, [deleteTargetId]);

  const value = useMemo<AdminProductsContextValue>(
    () => ({
      products,
      modalOpen,
      editingId,
      photoId: `admin-photo-${editingId ?? photoSeed}`,
      photoPreview: photoObjectUrl ?? form.photoUrl,
      form,
      saveLabel: editingId ? "Save Changes" : "Add Listing",
      modalTitle: editingId ? "Edit Listing" : "Add Listing",
      saving,
      openAddModal,
      openEditModal,
      closeModal,
      setField,
      setPhotoFile,
      saveProduct,
      deleteProduct,
      deleteTarget: products.find((p) => p.id === deleteTargetId) ?? null,
      confirmDelete,
      cancelDelete,
    }),
    [
      products,
      modalOpen,
      editingId,
      photoSeed,
      form,
      photoObjectUrl,
      saving,
      saveProduct,
      deleteTargetId,
      confirmDelete,
    ]
  );

  return <AdminProductsContext.Provider value={value}>{children}</AdminProductsContext.Provider>;
}

export function useAdminProducts(): AdminProductsContextValue {
  const ctx = useContext(AdminProductsContext);
  if (!ctx) throw new Error("useAdminProducts must be used within an AdminProductsProvider");
  return ctx;
}
