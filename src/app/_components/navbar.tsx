"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Work", href: "/" },
  { label: "Repos", href: "/repos" },
  { label: "Articles", href: "/articles" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute left-4 top-4 flex space-x-3">
      {navigation.map((nav) => {
        if (pathname === nav.href) {
          return (
            <p key={nav.label} className="underline underline-offset-4">
              {nav.label}
            </p>
          );
        }

        return (
          <Link key={nav.label} href={nav.href}>
            {nav.label}
          </Link>
        );
      })}
    </div>
  );
}
