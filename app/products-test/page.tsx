import { deleteProduct, getProducts, editProduct } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card';
import ProductEditForm from './components/ProductEditForm';
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
                                <div className="productDetails">
                                    <h2>{Name}</h2>
                                    <p>{description}</p>
                                    <p>€ {price}</p>
                                </div>
                                <div className="productItemActions">
                                    <ProductEditForm
                                        id={id}
                                        name={Name}
                                        description={description}
                                        price={price}
                                        editProductAction={editProduct}
                                    />
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
