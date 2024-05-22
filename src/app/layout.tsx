import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./_components/navbar";
import { MeshBackground } from "./_components/mesh-background";
import imageBluLogo from "@/images/blupanda-logo.png";

export const metadata = {
  title: "Blu | Web3 fullstack dev",
  description: "Portfolio for Blu | @Blupandaman.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      <body>
        <main className="relative flex h-[100svh] flex-col p-4 leading-none text-gray-700">
          <MeshBackground />

          <div className="absolute right-4 top-4 z-50 space-x-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank">
                {social.label}
              </a>
            ))}
          </div>

          <div className="container z-50 flex flex-1 items-center justify-center">
            <Image
              src={imageBluLogo}
              alt="Blu panda logo"
              className="max-w-[200px]"
            />
          </div>

          <div className="absolute bottom-4 left-4 z-50 text-primary-foreground">
            <p>Blu | @blupandaman</p>
          </div>

          <div className="absolute bottom-4 right-4 z-50 space-y-3 text-right text-primary-foreground">
            <Link href="mailto:blupandaman@pm.me">blupandaman@pm.me</Link>
            <p>Web3 fullstack dev</p>
          </div>

          <Navbar />

          <div className="absolute left-4 top-11 z-50 space-y-3">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
