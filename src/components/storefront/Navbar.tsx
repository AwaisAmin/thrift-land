"use client";

import { useState } from "react";
import { ThemeToggleButton } from "../ui/ThemeToggleButton";
import { IconButton } from "../ui/IconButton";
import { CartIcon, CloseIcon, MenuIcon } from "../icons";
import { useTheme } from "../theme/ThemeProvider";
import { useCart } from "../cart/CartProvider";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

function CartButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <IconButton onClick={onClick} aria-label="Toggle cart">
      <CartIcon />
      {count > 0 && (
        <span className="bg-accent absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-[#0b0b0d]">
          {count}
        </span>
      )}
    </IconButton>
  );
}

export function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { count, toggleCart } = useCart();
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-nav-surface fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line px-[5vw] py-5 backdrop-blur-md">
        <div className="font-display text-[22px] tracking-wide">
          THRIFT<span className="text-accent-ink">LAND</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold tracking-wide uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </a>
          ))}
          <ThemeToggleButton darkMode={darkMode} onToggle={toggleTheme} />
          <CartButton count={count} onClick={toggleCart} />
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent flex shrink-0 items-center gap-1.5 rounded-full px-4.5 py-2.5 whitespace-nowrap text-[#0b0b0d] transition-opacity duration-200 hover:opacity-85"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <CartButton count={count} onClick={toggleCart} />
          <IconButton onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-70 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-label="Menu"
        className={`bg-surface fixed top-0 right-0 bottom-0 z-71 flex w-[min(300px,80vw)] flex-col border-l border-line p-7 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="font-display text-lg tracking-wide">
            THRIFT<span className="text-accent-ink">LAND</span>
          </div>
          <IconButton onClick={() => setMenuOpen(false)} size={32} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </div>

        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-card"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-lg px-3 py-2">
          <span className="text-sm font-semibold tracking-wide uppercase opacity-60">Theme</span>
          <ThemeToggleButton darkMode={darkMode} onToggle={toggleTheme} />
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="bg-accent mt-4 flex items-center justify-center gap-1.5 rounded-full px-4.5 py-3 text-sm font-bold tracking-wide whitespace-nowrap text-[#0b0b0d] uppercase transition-opacity duration-200 hover:opacity-85"
        >
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
