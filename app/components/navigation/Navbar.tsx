import Link from "next/link"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Show } from "@clerk/nextjs"
export default function Navbar() {
    return (
        <>
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

                <Link href="/products-test" aria-label="products page">
                <span aria-hidden="true">🕵🏻‍♂️</span>
                Products
                </Link>
                recipe
            </nav>
          </>
    )
}