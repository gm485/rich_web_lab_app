// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main className="content">{children}</main>

        <nav className="bottomNav" aria-label="Primary navigation">
          <Link href="/" aria-label="Home">
            <span aria-hidden="true">⌂</span>
            Home
          </Link>

          <Link href="/search" aria-label="Search">
            <span aria-hidden="true">⌕</span>
            Search
          </Link>

          <Link href="/profile" aria-label="Profile">
            <span aria-hidden="true">○</span>
            Profile
          </Link>

          <Link href="/linus" aria-label="Learn about Linus Torvalds">
            <span aria-hidden="true">ⓘ</span>
            Linus
          </Link>
        </nav>
      </body>
    </html>
  );
}
