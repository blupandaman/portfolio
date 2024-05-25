import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./_components/navbar";
import { MeshBackground } from "./_components/mesh-background";
import imageBluLogo from "@/images/blupanda-logo.png";

export const metadata = {
  title: "Blu | @blupandaman",
  description: "Portfolio for Blu - @blupandaman - Web3 fullstack dev.",
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
        <main className="relative flex h-[100svh] flex-col overflow-x-hidden p-4 leading-none text-gray-800">
          <MeshBackground />

          <div className="absolute right-4 top-4 z-30 space-x-4 sm:space-x-3">
            {socials.map((social) => (
              <Link key={social.label} href={social.href} target="_blank">
                {social.label}
              </Link>
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

          <div className="absolute bottom-4 left-4 z-40 text-primary-foreground">
            <p>Blu | @blupandaman</p>
          </div>

          <div className="absolute bottom-4 right-4 z-40 space-y-4 text-right text-primary-foreground sm:space-y-3">
            <Link href="mailto:blupandaman@pm.me">blupandaman@pm.me</Link>
            <p>Web3 fullstack dev</p>
          </div>

          <Navbar />

          <div className="absolute left-0 top-0 z-30 mt-8 w-full p-4 sm:mt-7">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
