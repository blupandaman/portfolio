const projects = [
  { label: "Mochi Circle", href: "https://www.mochicircle.xyz" },
  { label: "Autistic Waterfowl Group", href: "https://www.ducks.capital" },
  { label: "Speak NFT", href: "https://www.playspeak.xyz" },
  { label: "Saintbot", href: "https://app.saintbot.io" },
  { label: "Isekai" },
  { label: "Blacky", href: "https://dapp.fantomblacky.io" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-3">
      {projects.map((project) => {
        if (!!project?.href) {
          return (
            <a key={project.label} href={project.href} target="_blank">
              {project.label}
            </a>
          );
        }

        return <p key={project.label}>{project.label}</p>;
      })}
    </div>
  );
}
