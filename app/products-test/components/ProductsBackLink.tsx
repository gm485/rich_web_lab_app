import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";

export default function ProductsBackLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      className={`${buttonVariants({ variant: "outline", size: "lg" })} productDetailBackLink`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
