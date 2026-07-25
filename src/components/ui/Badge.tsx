import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "muted";
}

export function Badge({ children, className = "", tone = "accent" }: BadgeProps) {
  const tones =
    tone === "accent"
      ? "bg-accent text-[#0b0b0d]"
      : "bg-line text-fg opacity-60";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-[11px] font-bold tracking-wide uppercase ${tones} ${className}`}
    >
      {children}
    </span>
  );
}
