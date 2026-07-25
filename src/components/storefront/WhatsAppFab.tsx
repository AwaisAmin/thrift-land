import { WhatsAppIcon } from "../icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed right-7 bottom-7 z-[60] flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
    >
      <WhatsAppIcon />
    </a>
  );
}
