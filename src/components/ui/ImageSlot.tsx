import Image from "next/image";
import { ShoeIcon } from "../icons";

interface ImageSlotProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Use for small thumbnails (table rows, cart lines) — icon only, no label. */
  compact?: boolean;
}

export function ImageSlot({
  src,
  alt = "",
  label = "Add photo",
  className = "",
  priority,
  sizes = "(min-width: 768px) 40vw, 90vw",
  compact = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }

  if (compact) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center border border-dashed border-line bg-card text-fg/40 ${className}`}
      >
        <ShoeIcon className="opacity-60" size={16} />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-line bg-card text-fg/40 ${className}`}
    >
      <ShoeIcon className="opacity-60" />
      <span className="px-4 text-center text-xs font-semibold tracking-wide uppercase opacity-70">{label}</span>
    </div>
  );
}
