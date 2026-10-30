import type { Metadata } from "next";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to the app",
  description: "Explore the app and manage your account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClerkProvider>
          <main className="content">{children}</main>
          

          <nav className="bottomNav" aria-label="Primary navigation">
            <Link href="/" aria-label="Home">
              <span aria-hidden="true">⌂</span>
              Home
            </Link>
            <Link href="/dashboard">
              Dashboard
            </Link>

            <Link href="/search" aria-label="Search">
              <span aria-hidden="true">⌕</span>
              Search
            </Link>

            <Link href="/profile" aria-label="Profile">
              <span aria-hidden="true">○</span>
              Profile
            </Link>

            <Show when="signed-out">
              <SignInButton mode="redirect">
                <button className="authNavButton" type="button">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <button className="authNavButton" type="button">
                  Register
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <div className="bottomNavUser" aria-label="Account menu">
                <UserButton />
              </div>
            </Show>

            <Link href="/linus" aria-label="Learn about Linus Torvalds">
              <span aria-hidden="true">ⓘ</span>
              Linus
            </Link>
            
            <Link href="/hello" aria-label="Hello world">
              <span aria-hidden="true">👋🏻</span>
              Hello
            </Link>

            <Link href="/recipe" aria-label="Hello world">
              <span aria-hidden="true">🍕</span>
              Recipe
            </Link>

            <Link href="/products-test" aria-label="products page">
              <span aria-hidden="true">🕵🏻‍♂️</span>
              Products
            </Link>
            recipe
          </nav>
          <Toaster position="bottom-right" richColors />
        </ClerkProvider>
      </body>
    </html>
  );
}
