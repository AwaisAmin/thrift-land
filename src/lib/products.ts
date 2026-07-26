import { createClient } from "./supabase/server";
import type { Product, ProductFormValues } from "./types";

interface ProductRow {
  id: string;
  name: string;
  size: string;
  condition: string;
  price: number;
  status: string;
  photo_url: string | null;
}

function fromRow(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    size: row.size as Product["size"],
    condition: row.condition as Product["condition"],
    price: row.price,
    status: row.status as Product["status"],
    photoUrl: row.photo_url ?? undefined,
  };
}

function toRow(form: ProductFormValues) {
  return {
    name: form.name.trim(),
    size: form.size,
    condition: form.condition,
    price: Number(form.price.replace(/,/g, "")) || 0,
    status: form.status,
    photo_url: form.photoUrl ?? null,
  };
}

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as ProductRow[]).map(fromRow);
}

export async function insertProduct(form: ProductFormValues): Promise<Product> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").insert(toRow(form)).select().single();

  if (error) throw new Error(error.message);
  return fromRow(data as ProductRow);
}

export async function editProduct(id: string, form: ProductFormValues): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from("products").update(toRow(form)).eq("id", id);
  if (error) throw new Error(error.message);
}

export async function removeProduct(id: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
