"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`btn mx-1 ${active ? "btn-primary" : "btn-ghost"}`}
    >
      {children}
    </Link>
  );
}
