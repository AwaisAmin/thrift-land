export const CONDITIONS = ["Like New", "9/10", "8/10", "Gently Worn"] as const;
export type Condition = (typeof CONDITIONS)[number];

export const SIZES = ["6", "7", "8", "9", "10", "11", "12"] as const;
export type Size = (typeof SIZES)[number];

export const PRODUCT_STATUSES = ["Active", "Sold"] as const;
export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

export interface Product {
  id: string;
  name: string;
  size: Size;
  color: string;
  condition: Condition;
  /** Price in whole Rupees, e.g. 3500. */
  price: number;
  status: ProductStatus;
  photoUrl?: string;
}

export interface Feature {
  num: string;
  title: string;
  desc: string;
}

export interface CartLine {
  product: Product;
  qty: number;
}

export interface Stat {
  label: string;
  value: string;
}

export type ProductFormValues = Pick<
  Product,
  "name" | "size" | "condition" | "color" | "status" | "photoUrl"
> & {
  /** Kept as free text while the field is being edited. */
  price: string;
};
