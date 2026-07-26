import { ImageSlot } from "../ui/ImageSlot";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

export function Hero({ products }: { products: Product[] }) {
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");
  const heroPhoto = products.find((p) => p.photoUrl)?.photoUrl ?? "/images/hero-sneakers.jpg";

  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-center px-[5vw] pt-35 pb-15">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="text-accent-ink mb-4.5 text-[13px] font-bold tracking-[3px] uppercase">
            Men&rsquo;s Pre-Loved Sneakers
          </div>
          <h1 className="font-display text-[clamp(56px,9vw,128px)] leading-[0.94] uppercase">
            SECOND
            <br />
            HAND.
            <br />
            <span className="text-accent-ink">FIRST</span> CLASS.
          </h1>
          <p className="mt-7 mb-9 max-w-120 text-lg leading-relaxed opacity-75">
            Every pair inspected, cleaned, and condition-rated before it reaches you. Real kicks, real
            stories, half the price — cop your next pair straight off WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="bg-fg text-bg-solid rounded-full px-8 py-4.5 text-[15px] font-bold tracking-wide uppercase"
            >
              Shop The Drop
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-fg px-8 py-4 text-[15px] font-bold tracking-wide uppercase"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="border-accent-ink animate-spin-slow absolute top-[-30px] right-0 z-[2] flex h-27.5 w-27.5 items-center justify-center rounded-full border-2 border-dashed text-center font-display text-xs tracking-wide uppercase">
            100% AUTHENTIC CHECKED
          </div>
          <div className="aspect-4/5 overflow-hidden rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]">
            <ImageSlot src={heroPhoto} alt="Hero sneaker" label="Drop hero shoe photo" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
