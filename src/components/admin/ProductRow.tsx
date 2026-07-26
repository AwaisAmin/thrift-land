import type { Product } from "@/lib/types";
import { formatRs } from "@/lib/format";
import { Badge } from "../ui/Badge";
import { EditIcon, TrashIcon } from "../icons";

const GRID_COLS = "grid-cols-[56px_2fr_0.8fr_0.9fr_1fr_0.9fr_90px]";

interface ProductRowProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductRow({ product, onEdit, onDelete }: ProductRowProps) {
  return (
    <div className={`grid ${GRID_COLS} items-center gap-3 border-b border-line px-5 py-3.5 text-sm`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-card font-display text-[11px]">
        {product.condition}
      </div>
      <div className="font-bold">{product.name}</div>
      <div>EU {product.size}</div>
      <div>{product.condition}</div>
      <div className="font-display text-[15px]">Rs. {formatRs(product.price)}</div>
      <div>
        <Badge tone={product.status === "Active" ? "accent" : "muted"}>{product.status}</Badge>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          title="Edit"
          className="flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-lg border border-line bg-transparent text-fg transition-colors duration-200 hover:bg-card"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          title="Delete"
          className="flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-lg border border-line bg-transparent text-fg transition-colors duration-200 hover:border-red-500 hover:text-red-500"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export { GRID_COLS };
