import Link from "next/link";

const repos = [
  { label: "Repo 1", href: "#" },
  { label: "Repo 2", href: "#" },
];

export default function ReposPage() {
  return (
    <div className="absolute left-4 top-4 space-y-3">
      <div className="flex space-x-3">
        <Link href="/">Work</Link>
        <p className="font-semibold text-primary">Repos</p>
        <Link href="/articles">Articles</Link>
      </div>

      <div className="ml-[50px] flex flex-col gap-2">
        {repos.map((repo) => (
          <a key={repo.label} href={repo.href} target="_blank">
            {repo.label}
          </a>
        ))}
      </div>
    </div>
  );
}
