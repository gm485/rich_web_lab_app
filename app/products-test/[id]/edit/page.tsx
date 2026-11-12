import { editProduct, getProduct } from "@/lib/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductEditForm from "../../components/ProductEditForm";
import ProductsBackLink from "../../components/ProductsBackLink";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  const productPage = `/products-test/${product.id}`;

  return (
    <section className="productEditPage" aria-label="Edit product">
      <ProductsBackLink href={productPage}>Back to product</ProductsBackLink>
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <p className="eyebrow">EDIT PRODUCT</p>
          <CardTitle className="text-2xl font-bold">{product.Name}</CardTitle>
          <CardDescription>Update the product details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductEditForm
            id={product.id}
            name={product.Name}
            description={product.description}
            price={product.price}
            editProductAction={editProduct}
            returnTo={productPage}
          />
        </CardContent>
      </Card>
    </section>
  );
}
