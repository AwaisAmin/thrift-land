import { StorefrontApp } from "@/components/storefront/StorefrontApp";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();
  return <StorefrontApp products={products} />;
}
