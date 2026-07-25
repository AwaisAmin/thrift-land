"use client";

import { ThemeToggleButton } from "../ui/ThemeToggleButton";
import { PlusIcon } from "../icons";
import { useTheme } from "../theme/ThemeProvider";
import { useAdminProducts } from "./AdminProductsProvider";

export function AdminHeader() {
  const { darkMode, toggleTheme } = useTheme();
  const { openAddModal } = useAdminProducts();

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl uppercase">Inventory</h1>
        <div className="mt-1 text-sm opacity-55">Manage listings shown on the storefront</div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggleButton darkMode={darkMode} onToggle={toggleTheme} size={40} />
        <button
          onClick={openAddModal}
          className="bg-accent flex cursor-pointer items-center gap-1.5 rounded-full border-none px-5 py-3 text-[13px] font-bold tracking-wide whitespace-nowrap text-[#0b0b0d] uppercase"
        >
          <PlusIcon /> Add Listing
        </button>
      </div>
    </div>
  );
}
