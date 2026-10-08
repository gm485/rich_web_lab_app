import Image from "next/image";
import BackButton from "../components/BackButton";

export default function LinusPage() {
  return (
    <section className="page" aria-labelledby="linus-title">
      <BackButton />
      <p className="eyebrow">PEOPLE IN TECHNOLOGY</p>
      <h1 id="linus-title">Who is Linus Torvalds?</h1>
      <p className="description">
        Linus Torvalds is a Finnish-American software engineer best known for
        creating the Linux kernel and the Git version control system.
      </p>

      <figure className="linusFigure">
        <Image
          className="linusPortrait"
          src="https://tudublin12.b-cdn.net/linus.jpg"
          alt="Linus Torvalds wearing glasses and a black sweater, with his arms folded."
          width={2560}
          height={1622}
          sizes="(max-width: 600px) 100vw, 556px"
          priority
        />
        <figcaption>Linus Torvalds</figcaption>
      </figure>

      <article className="card" aria-labelledby="linux-heading">
        <h2 id="linux-heading">The Linux kernel</h2>
        <p>
          In 1991, while studying at the University of Helsinki, Torvalds began
          work on a free computer operating system kernel. That project grew
          into Linux, which now runs on computers ranging from phones and
          servers to many of the world’s fastest supercomputers.
        </p>
      </article>

      <article className="card infoCard" aria-labelledby="git-heading">
        <h2 id="git-heading">Git</h2>
        <p>
          Torvalds created Git in 2005 to help manage Linux kernel development.
          Git is now widely used by software teams to track changes and work on
          code together.
        </p>
      </article>

      <p className="pageNote">
        Torvalds continues to lead development of the Linux kernel.
      </p>
    </section>
  );
}
