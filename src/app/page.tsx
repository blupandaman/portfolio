import Link from "next/link";

const projects = [
  { label: "Project 1", href: "#" },
  { label: "Project 2", href: "#" },
];

export default function HomePage() {
  return (
    <div className="absolute left-4 top-4 space-y-3">
      <div className="flex space-x-3">
        <p className="font-semibold text-primary">Work</p>
        <Link href="/repos">Repos</Link>
        <Link href="/articles">Articles</Link>
      </div>

      <div className="flex flex-col space-y-3">
        {projects.map((project) => (
          <a key={project.label} href={project.href} target="_blank">
            {project.label}
          </a>
        ))}
      </div>
    </div>
  );
}
