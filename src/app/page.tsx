import Link from "next/link";

const projects = [
  { label: "Speak NFT", href: "https://www.playspeak.xyz" },
  { label: "Mochi Circle", href: "https://www.mochicircle.xyz" },
  { label: "Autistic Waterfowl Group", href: "https://www.ducks.capital" },
  { label: "Tekka", href: "https://www.friendtekka.xyz" },
  { label: "Saintbot", href: "https://app.saintbot.io" },
  { label: "Arena Deathmatch", href: "https://www.arenadm.io" },
  { label: "Isekai" },
  { label: "Blacky", href: "https://dapp.fantomblacky.io" },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
      {projects.map((project) => (
        <Link
          key={project.label}
          href={project?.href ?? "#"}
          target={project?.href ? "_blank" : "_self"}
          className="w-fit"
        >
          {project.label}
        </Link>
      ))}
    </div>
  );
}
