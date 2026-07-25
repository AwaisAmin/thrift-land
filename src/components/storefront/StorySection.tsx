import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";

export function StorySection() {
  return (
    <section id="story" className="relative z-10 overflow-hidden px-[5vw] py-30">
      <Reveal className="grid items-center gap-15 md:grid-cols-[0.9fr_1.1fr]">
        <div className="aspect-4/5 overflow-hidden rounded-3xl">
          <ImageSlot label="Drop a shop/founder photo" alt="Thrift Land founder" />
        </div>
        <div>
          <div className="text-accent mb-4.5 text-[13px] font-bold tracking-[3px] uppercase">Our Story</div>
          <h2 className="mb-6 font-display text-[clamp(32px,4.5vw,54px)] leading-tight uppercase">
            Every Pair Has Already Lived A Life.
          </h2>
          <p className="mb-4 text-[17px] leading-loose opacity-75">
            Thrift Land started with a simple idea: great sneakers shouldn&rsquo;t end up in a landfill
            because the first owner moved on. We source, inspect, and grade every pair by hand before
            it&rsquo;s listed — no fakes, no guesswork.
          </p>
          <p className="text-[17px] leading-loose opacity-75">
            No storefront, no markup for rent. Just a straight WhatsApp line to the guy who checked your
            shoes himself.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
