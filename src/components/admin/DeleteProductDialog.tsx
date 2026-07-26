"use client";

import { ConfirmDialog } from "../ui/ConfirmDialog";
import { useAdminProducts } from "./AdminProductsProvider";

export function DeleteProductDialog() {
  const { deleteTarget, confirmDelete, cancelDelete } = useAdminProducts();

  return (
    <ConfirmDialog
      open={deleteTarget !== null}
      title="Remove Listing"
      message={
        deleteTarget
          ? `Remove "${deleteTarget.name}" from the storefront? This can't be undone.`
          : ""
      }
      confirmLabel="Remove"
      onConfirm={confirmDelete}
      onCancel={cancelDelete}
    />
  );
}
