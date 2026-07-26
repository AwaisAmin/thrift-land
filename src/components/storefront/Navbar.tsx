"use client";

import { ThemeToggleButton } from "../ui/ThemeToggleButton";
import { IconButton } from "../ui/IconButton";
import { CartIcon } from "../icons";
import { useTheme } from "../theme/ThemeProvider";
import { useCart } from "../cart/CartProvider";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { count, toggleCart } = useCart();
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");

  return (
    <nav className="bg-nav-surface fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line px-[5vw] py-5 backdrop-blur-md">
      <div className="font-display text-[22px] tracking-wide">
        THRIFT<span className="text-accent-ink">LAND</span>
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
            {link.label}
          </a>
        ))}
        <ThemeToggleButton darkMode={darkMode} onToggle={toggleTheme} />
        <IconButton onClick={toggleCart} aria-label="Toggle cart">
          <CartIcon />
          {count > 0 && (
            <span className="bg-accent absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-[#0b0b0d]">
              {count}
            </span>
          )}
        </IconButton>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent flex shrink-0 items-center gap-1.5 rounded-full px-4.5 py-2.5 whitespace-nowrap text-[#0b0b0d] transition-opacity duration-200 hover:opacity-85"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
