import {createProduct, deleteProduct, getProducts} from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card';
import ProductsFormToggle from './components/ProductsFormToggle'
import { Trash } from 'lucide-react';
import type {LucideProps} from 'lucide-react/types'

export default async function ProductsTest() {
    const products = await getProducts();


    return (
        <main className="flex gap-5">
            <div>
                <ProductsFormToggle createProductAction={createProduct} />
            </div>
            <ul>
                {products?.map(({id, Name, description,price }) =>
                
                <Card className="m-5 flex" key={id}>
                    <CardContent className="m-2">
                    <li key={id}>
                        <h2>{Name}</h2>
                        <p>{description}</p>
                        <p>€ {price}</p>
                    </li>

                    <form action={deleteProduct}>
                        <input type="hidden" name='id' value={id} />
                        <button type="submit"><Trash/></button>
                    </form>
                    </CardContent>
                </Card>
            )}
            </ul>
        </main>
    )
}
