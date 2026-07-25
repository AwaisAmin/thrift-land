"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: number;
}

export function IconButton({ children, size = 42, className = "", ...rest }: IconButtonProps) {
  return (
    <button
      {...rest}
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-transparent text-fg transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </button>
  );
}
