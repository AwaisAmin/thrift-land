"use client";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <>
      <div
        onClick={onCancel}
        aria-hidden="true"
        className={`fixed inset-0 z-80 bg-black/50 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        className={`bg-surface fixed top-1/2 left-1/2 z-81 w-[min(360px,92vw)] -translate-x-1/2 rounded-2xl border border-line p-6 transition-all duration-300 ${
          open
            ? "pointer-events-auto -translate-y-1/2 opacity-100"
            : "pointer-events-none translate-y-[calc(-50%+8px)] opacity-0"
        }`}
      >
        <div className="mb-2 font-display text-lg uppercase">{title}</div>
        <p className="mb-6 text-sm opacity-70">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="text-fg cursor-pointer rounded-full border border-line bg-transparent px-5 py-2.5 text-[13px] font-bold tracking-wide uppercase"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="cursor-pointer rounded-full border-none bg-red-500 px-5 py-2.5 text-[13px] font-bold tracking-wide text-white uppercase"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </>
  );
}
