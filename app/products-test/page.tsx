import {getProducts} from '@/lib/actions'

export default async function ProductsTest() {
    const products = await getProducts();


    return (
        <main>
            <h1>Products: {products?.length}</h1>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </main>
    )
}