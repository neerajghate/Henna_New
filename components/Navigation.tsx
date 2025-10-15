// components/Navigation.tsx
"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link href="/" aria-label="Home" className="flex items-center">
        <Logo className="h-8 w-auto" />
      </Link>

      <ul className="hidden md:flex items-center gap-6">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/booking"
        className="hidden md:inline-flex rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 transition-colors"
      >
        Book Now
      </Link>
    </nav>
  );
}
