import { createProduct, refreshProducts } from "@/lib/actions";
import ProductsPageShell from "./ProductsPageShell";

export default async function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProductsPageShell
      createProductAction={createProduct}
      refreshProductsAction={refreshProducts}
    >
      {children}
    </ProductsPageShell>
  );
}
