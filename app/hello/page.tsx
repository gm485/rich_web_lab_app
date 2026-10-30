import BackButton from '@/app/components/BackButton'
export default function Page() {
    return (
        <div>  
            <h1>This is a blog post</h1>
            <hr className='m-5'></hr>
            <p>Lorem ipsum <em>dolor</em>, sit amet consectetur adipisicing elit. Blanditiis omnis quo eius est in accusamus, commodi dicta velit nesciunt ipsa animi, rerum ipsam <strong>culpa</strong>. Quas, ipsa? Aperiam ducimus similique commodi?</p>
            <div className='mt-5'>
                <h2>How i travelled through space</h2>
                <hr className='m-5'></hr>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nisi rerum at esse, laboriosam dolore ad facere quis? Saepe voluptas mollitia provident error ad earum id aut similique aspernatur maiores.</p>
            </div>
            <div className='flex-1 mb-8'>
                <figure className="mt-5 rounded-2xl">
                    <figcaption className="text-2xl">Shopping List</figcaption>
                    <ul className="text-2xl text-sky-500">
                        <li className="ml-1">Milk</li>
                        <li className="ml-2">Break</li>
                        <li className="ml-3">Eggs</li>
                    </ul>
                </figure>
            </div>
            <div>
                <BackButton />
            </div>
        </div>
    )
}