import { createProduct, deleteProduct, getProducts, editProduct } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card';
import ProductsFormToggle from './components/ProductsFormToggle'
import ProductEditForm from './components/ProductEditForm';
import ProductDeleteForm from './components/ProductDeleteForm';


export default async function ProductsTest() {
    const products = await getProducts();


    return (
        <main className="flex flex-col gap-5 sm:flex-row">
            <div>
                <ProductsFormToggle createProductAction={createProduct} />
            </div>
            <ul>
                {products?.map(({id, Name, description, price }) =>
                
                <Card className="m-5 flex" key={id}>
                    <CardContent className="m-2">
                    <li key={id}>
                        <h2>{Name}</h2>
                        <p>{description}</p>
                        <p>€ {price}</p>
                    </li>
                    <div className="flex gap-5">
                        <ProductDeleteForm
                            id={id}
                            name={Name}
                            deleteProductAction={deleteProduct}
                        />
                    </div>
                    <ProductEditForm
                        id={id}
                        name={Name}
                        description={description}
                        price={price}
                        editProductAction={editProduct}
                    />
                    </CardContent>
                </Card>
            )}
            </ul>
        </main>
    )
}
