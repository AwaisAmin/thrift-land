interface MarqueeBarProps {
  text: string;
}

export function MarqueeBar({ text }: MarqueeBarProps) {
  return (
    <div className="relative z-10 overflow-hidden border-y border-line py-4.5">
      <div className="animate-marquee flex font-display text-[22px] whitespace-nowrap tracking-wide uppercase">
        <span className="pr-10">{text}</span>
        <span className="pr-10" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
