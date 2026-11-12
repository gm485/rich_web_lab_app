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

      <div className="homeImageRow" aria-label="Open-source mascots">
        <Image
          className="homeImage"
          src="https://tudublin12.b-cdn.net/tux.png"
          alt="Tux, the Linux penguin"
          width={200}
          height={200}
        />
        <Image
          className="homeImage"
          src="/beastie.png"
          alt="Beastie, the BSD mascot"
          width={200}
          height={200}
        />
      </div>
     

    </section>
  );
}
