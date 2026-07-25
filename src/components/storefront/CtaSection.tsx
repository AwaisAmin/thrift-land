import { Reveal } from "../ui/Reveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaSection() {
  const waLink = buildWhatsAppLink("Hi Thrift Land! I'm interested in your sneakers.");

  return (
    <section className="relative z-10 px-[5vw] pt-25 pb-35 text-center">
      <Reveal>
        <div className="mb-9 font-display text-[clamp(38px,7vw,96px)] leading-none uppercase">
          YOUR NEXT PAIR IS
          <br />
          <span className="text-accent">ALREADY WORN IN.</span>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent inline-flex items-center gap-2.5 rounded-full px-10 py-5 text-base font-bold tracking-wide text-[#0b0b0d] uppercase"
        >
          Message Us On WhatsApp →
        </a>
      </Reveal>
    </section>
  );
}
