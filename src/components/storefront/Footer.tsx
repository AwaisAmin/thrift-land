import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");

  return (
    <footer id="contact" className="relative z-10 border-t border-line px-[5vw] pt-15 pb-10">
      <div className="mb-10 flex flex-wrap justify-between gap-10">
        <div>
          <div className="mb-3 font-display text-[26px]">
            THRIFT<span className="text-accent-ink">LAND</span>
          </div>
          <div className="max-w-70 text-sm leading-relaxed opacity-60">
            Men&rsquo;s pre-loved sneakers, inspected and cleaned. Direct to your WhatsApp.
          </div>
        </div>
        <div className="flex flex-wrap gap-15">
          <div>
            <div className="mb-3.5 text-xs font-bold tracking-wide uppercase opacity-50">Contact</div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-[15px] transition-opacity duration-200 hover:opacity-60"
            >
              WhatsApp: +92 329 4487266
            </a>
            <a href="#" className="block text-[15px] transition-opacity duration-200 hover:opacity-60">
              @thriftland on Instagram
            </a>
          </div>
          <div>
            <div className="mb-3.5 text-xs font-bold tracking-wide uppercase opacity-50">Explore</div>
            <a
              href="#shop"
              className="mb-2 block text-[15px] transition-opacity duration-200 hover:opacity-60"
            >
              Shop
            </a>
            <a href="#story" className="block text-[15px] transition-opacity duration-200 hover:opacity-60">
              Story
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line pt-6 text-[13px] opacity-45">
        © 2026 Thrift Land. All shoes previously loved.
      </div>
    </footer>
  );
}
