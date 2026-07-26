"use client";

import Link from "next/link";
import { DashboardIcon, StorefrontIcon } from "../icons";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-70 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`bg-surface fixed top-0 bottom-0 left-0 z-71 flex w-57.5 shrink-0 flex-col gap-9 border-r border-line px-5 py-7 transition-transform duration-300 md:static md:z-auto md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-display text-xl tracking-wide">
          THRIFT<span className="text-accent-ink">LAND</span>
          <div className="mt-1 font-sans text-[11px] tracking-[2px] opacity-50">ADMIN</div>
        </div>
        <nav className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5 rounded-[10px] bg-card px-3 py-2.5 text-sm font-bold">
            <DashboardIcon />
            Dashboard
          </div>
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-sm opacity-60 hover:opacity-100"
          >
            <StorefrontIcon />
            View Storefront
          </Link>
        </nav>
        <div className="mt-auto text-xs opacity-40">Signed in as Owner</div>
      </aside>
    </>
  );
}
