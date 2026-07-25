"use client";

import { IconButton } from "../ui/IconButton";
import { CloseIcon } from "../icons";
import { ImageSlot } from "../ui/ImageSlot";
import { FormField, fieldControlClass } from "../ui/FormField";
import { useAdminProducts } from "./AdminProductsProvider";
import { CONDITIONS, PRODUCT_STATUSES, SIZES } from "@/lib/types";

export function ProductFormModal() {
  const { modalOpen, modalTitle, saveLabel, photoId, form, setField, saveProduct, closeModal } =
    useAdminProducts();

  return (
    <>
      <div
        onClick={closeModal}
        aria-hidden="true"
        className={`fixed inset-0 z-[70] bg-black/50 transition-opacity duration-300 ${
          modalOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-label={modalTitle}
        className={`fixed top-0 right-0 bottom-0 z-[71] w-[min(440px,92vw)] overflow-y-auto border-l border-line bg-surface p-7 transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="font-display text-[22px] uppercase">{modalTitle}</div>
          <IconButton onClick={closeModal} size={32} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </div>

        <div className="flex flex-col gap-4">
          <div className="aspect-video overflow-hidden rounded-[14px]">
            <ImageSlot key={photoId} label="Drop shoe photo" />
          </div>

          <FormField label="Name">
            <input
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="e.g. Air Runner '02"
              className={fieldControlClass}
            />
          </FormField>

          <div className="grid grid-cols-2 gap-4">
            <FormField label="Size (UK)">
              <select
                value={form.size}
                onChange={(e) => setField("size", e.target.value as typeof form.size)}
                className={fieldControlClass}
              >
                {SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Condition">
              <select
                value={form.condition}
                onChange={(e) => setField("condition", e.target.value as typeof form.condition)}
                className={fieldControlClass}
              >
                {CONDITIONS.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField label="Color">
              <input
                value={form.color}
                onChange={(e) => setField("color", e.target.value)}
                placeholder="e.g. Grey/Black"
                className={fieldControlClass}
              />
            </FormField>
            <FormField label="Price (Rs.)">
              <input
                value={form.price}
                onChange={(e) => setField("price", e.target.value)}
                placeholder="e.g. 3500"
                inputMode="numeric"
                className={fieldControlClass}
              />
            </FormField>
          </div>

          <FormField label="Status">
            <select
              value={form.status}
              onChange={(e) => setField("status", e.target.value as typeof form.status)}
              className={fieldControlClass}
            >
              {PRODUCT_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </FormField>

          <button
            onClick={saveProduct}
            className="bg-fg text-bg-solid mt-2 cursor-pointer rounded-full border-none p-4 text-sm font-bold tracking-wide uppercase"
          >
            {saveLabel}
          </button>
        </div>
      </div>
    </>
  );
}
