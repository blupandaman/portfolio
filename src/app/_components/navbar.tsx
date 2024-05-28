"use client";

import { motion } from "framer-motion";
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
    <div className="absolute left-4 top-4 z-30 flex space-x-4 sm:space-x-3">
      {navigation.map((nav) => (
        <div key={nav.label} className="relative flex flex-col">
          <Link href={nav.href} className="pb-2.5">
            {nav.label}
          </Link>

          {pathname === nav.href && (
            <motion.span
              layoutId="underline"
              className="absolute bottom-0 h-1 w-full rounded-full bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
