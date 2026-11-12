import { deleteProduct, getProduct } from "@/lib/actions";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ProductDeleteForm from "../components/ProductDeleteForm";
import ProductsBackLink from "../components/ProductsBackLink";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <section className="productDetailPage" aria-label="Product details">
      <ProductsBackLink href="/products-test">Back to products</ProductsBackLink>
      <article className="productDetailCard">
        <p className="eyebrow">PRODUCT DETAILS</p>
        <h1>{product.Name}</h1>
        <p className="productDetailDescription">{product.description}</p>
        <dl className="productDetailFacts">
          <div>
            <dt>Price</dt>
            <dd>€ {product.price}</dd>
          </div>
          <div>
            <dt>Added</dt>
            <dd>
              <time dateTime={product.created}>
                {new Date(product.created).toLocaleDateString()}
              </time>
            </dd>
          </div>
        </dl>
        <div className="productDetailActions" role="group" aria-label="Product actions">
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={`/products-test/${product.id}/edit`}
          >
            Edit product
          </Link>
          <ProductDeleteForm
            id={product.id}
            name={product.Name}
            deleteProductAction={deleteProduct}
            redirectAfterDelete="/products-test"
          />
        </div>
      </article>
    </section>
  );
}
