"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { insertProduct, editProduct, removeProduct } from "@/lib/products";
import type { Product, ProductFormValues } from "@/lib/types";

export async function createProduct(form: ProductFormValues): Promise<Product> {
  const product = await insertProduct(form);
  revalidatePath("/admin");
  revalidatePath("/");
  return product;
}

export async function updateProduct(id: string, form: ProductFormValues): Promise<void> {
  await editProduct(id, form);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteProduct(id: string): Promise<void> {
  await removeProduct(id);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function signOutAdmin(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
