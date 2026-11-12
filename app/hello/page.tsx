import BackButton from '@/app/components/BackButton'
export default function Page() {
    return (
        <section className="articlePage" aria-labelledby="blog-title">
            <BackButton />
            <p className="eyebrow">STORIES</p>
            <h1 id="blog-title">This is a blog post</h1>
            <p className="description">
                Lorem ipsum <em>dolor</em>, sit amet consectetur adipisicing elit. Blanditiis omnis quo eius est in accusamus, commodi dicta velit nesciunt ipsa animi, rerum ipsam <strong>culpa</strong>. Quas, ipsa? Aperiam ducimus similique commodi?
            </p>
            <article className="articleCard">
                <h2>How i travelled through space</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nisi rerum at esse, laboriosam dolore ad facere quis? Saepe voluptas mollitia provident error ad earum id aut similique aspernatur maiores.</p>
            </article>
            <section className="shoppingListCard" aria-labelledby="shopping-title">
                <h2 id="shopping-title">Shopping List</h2>
                <ul>
                    <li>Milk</li>
                    <li>Break</li>
                    <li>Eggs</li>
                </ul>
            </section>
        </section>
    )
}
