interface MarqueeBarProps {
  text: string;
}

const REPEAT = 4;

export function MarqueeBar({ text }: MarqueeBarProps) {
  const block = text.repeat(REPEAT);

  return (
    <div className="relative z-10 overflow-hidden border-y border-line py-4.5">
      <span className="sr-only">{text}</span>
      <div
        aria-hidden="true"
        className="animate-marquee flex font-display text-[22px] whitespace-nowrap tracking-wide uppercase"
      >
        <span>{block}</span>
        <span>{block}</span>
      </div>
    </div>
  );
}
