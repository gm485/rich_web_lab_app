import { createProduct } from "@/lib/actions";
import ProductsPageShell from "./ProductsPageShell";

export default async function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProductsPageShell
      createProductAction={createProduct}
    >
      {children}
    </ProductsPageShell>
  );
}
