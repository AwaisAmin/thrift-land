import { WHATSAPP_PHONE } from "./data";
import type { CartLine } from "./types";
import { formatRs } from "./format";

export function buildWhatsAppLink(message: string, phone: string = WHATSAPP_PHONE): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildCheckoutMessage(lines: CartLine[], total: number): string {
  const items = lines
    .map((l) => `• ${l.product.name} (size ${l.product.size}) x${l.qty} — Rs. ${formatRs(l.product.price * l.qty)}`)
    .join("\n");
  return `Hi Thrift Land! I'd like to order:\n${items}\n\nTotal: Rs. ${formatRs(total)}`;
}
