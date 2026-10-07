import Image from 'next/image'
// app/page.tsx
export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Home</h1>
      <p className="description">
        
      </p>

      <div className="card">
        <h2>Welcome!</h2>
        <p>Welcome to the app.</p>

        <Image 
          src="/beastie.png"
          alt="BSD logo image, mascot of the BSD operating system"
          width={200}
          height={200}
        />
        <Image
          src="https://tudublin12.b-cdn.net/tux.png"
          alt="Next.js logo image"
          width={200}
          height={200}
        />

        
      </div>
     

    </section>
  );
}
