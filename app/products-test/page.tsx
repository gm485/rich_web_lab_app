import { deleteProduct, getProducts } from '@/lib/actions'
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import ProductDeleteForm from './components/ProductDeleteForm';
import { ProductsViewState } from './ProductsPageShell';


export default async function ProductsTest() {
    const products = await getProducts();


    return (
        <ProductsViewState isEmpty={products.length === 0}>
        <section className="productsPage" aria-label="Product list">
            <ul className="productsList">
                {products.length === 0 ? (
                    <li className="productsListItem productsEmptyListItem">
                        <section className="productsEmptyState">
                            <p>No products yet.</p>
                        </section>
                    </li>
                ) : products.map(({ id, Name, description, price }) => (
                    <li className="productsListItem" key={id}>
                        <Card className="productCard">
                            <CardContent>
                                <Link className="productDetailsLink" href={`/products-test/${id}`}>
                                    <div className="productDetails">
                                        <h2>{Name}</h2>
                                        <p>{description}</p>
                                        <p>€ {price}</p>
                                        <span className="productOpenHint">View product details →</span>
                                    </div>
                                </Link>
                                <div className="productItemActions">
                                    <ProductDeleteForm
                                        id={id}
                                        name={Name}
                                        deleteProductAction={deleteProduct}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
        </ProductsViewState>
    )
}
