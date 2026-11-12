"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

const pages = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/products-test", label: "Products" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
  { href: "/linus", label: "Linus" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link className="siteBrand" href="/" onClick={() => setMenuOpen(false)}>
          Demo<span>App</span>
        </Link>

        <button
          className="mobileMenuButton"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div id="site-navigation" className={`siteHeaderContent${menuOpen ? " isOpen" : ""}`}>
          <nav className="sitePageLinks" aria-label="Pages">
            {pages.map(({ href, label }) => {
              const active = href === "/" ? pathname === href : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? "siteNavLink active" : "siteNavLink"}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/profile"
              className={pathname.startsWith("/profile") ? "siteNavLink active" : "siteNavLink"}
              aria-current={pathname.startsWith("/profile") ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>

          <div className="siteAccountArea" aria-label="Account">
            <Show when="signed-out">
              <div className="signedOutActions">
                <SignInButton mode="redirect">
                  <button className="accountLoginButton" type="button" onClick={() => setMenuOpen(false)}>
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="redirect">
                  <button className="accountRegisterButton" type="button" onClick={() => setMenuOpen(false)}>
                    Create account
                  </button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <div className="signedInActions">
                <span className="accountLabel">Your account</span>
                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
}
