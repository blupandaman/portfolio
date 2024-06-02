import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./_components/navbar";
import { MeshBackground } from "./_components/mesh-background";
import imageBluLogo from "@/images/blupanda-logo.png";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Blu | Web3 Fullstack Dev",
  description: "Portfolio for Blu - @blupandaman - Web3 Fullstack Dev.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://blupm.dev"),
};

const socials = [
  { label: "X", href: "https://x.com/blupandaman" },
  { label: "Github", href: "https://github.com/blupandaman" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning>
        <main className="relative flex h-[100svh] flex-col overflow-x-hidden p-4 leading-none tracking-tight text-gray-800 text-primary-foreground">
          <MeshBackground />

          <div className="absolute right-4 top-4 z-50 space-x-4 sm:space-x-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank">
                {social.label}
              </a>
            ))}
          </div>

          <div className="container z-10 flex flex-1 items-center justify-center">
            <Image
              src={imageBluLogo}
              alt="Blu panda logo"
              className="max-w-[200px]"
              priority
            />
          </div>

          <div className="absolute bottom-5 left-4 z-50">
            <p>Blu | @blupandaman</p>
          </div>

          <div className="absolute bottom-5 right-4 z-50 space-y-4 text-right sm:space-y-3">
            <Link href="mailto:blupandaman@pm.me">blupandaman@pm.me</Link>
            <p>Web3 Fullstack Dev</p>
          </div>

          <Navbar />

          <div className="absolute left-0 top-0 z-30 mt-8 w-full p-4">
            {children}
          </div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
