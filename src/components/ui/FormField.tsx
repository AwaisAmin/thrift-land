import type { ReactNode } from "react";

export function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs tracking-wide opacity-55 uppercase">{label}</label>
      {children}
    </div>
  );
}

export const fieldControlClass =
  "w-full rounded-[10px] border border-line bg-card px-3.5 py-3 text-sm text-fg";
