import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aboutLayout">
      <header className="aboutHeader">
        <p className="eyebrow">PROJECT INFO</p>
        <h1>About</h1>
        <nav className="aboutTabs" aria-label="About pages">
          <Link href="/about">Git commits</Link>
          <Link href="/about/mission">Mission</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
