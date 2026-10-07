// app/page.tsx

import Image from 'next/image'

export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow">Welcome to the app</p>
      <h1>Home</h1>
      <p className="description">
        
      </p>

      <div className="card">
        <h2>Welcome!</h2>
        <p>Welcome to the app.</p>
      </div>

      <Image 
        src="https://tudublin12.b-cdn.net/tux.png"
        alt="Hero Image"
        width={200}
        height={200}
      />
      <Image
        src="/beastie.png"
        alt="Hero Image 2"
        width={200}
        height={200}
      />
     

    </section>
  );
}
