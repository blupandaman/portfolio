import Link from "next/link";

const repos = [
  { label: "Blu Portfolio", href: "https://github.com/blupandaman/portfolio" },
  {
    label: "Tapioca Genesis Countdown",
    href: "https://github.com/blupandaman/tapioca-countdown",
    liveHref: "https://tapioca.blupm.dev",
  },
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
        <p>Soon&trade;</p>
        {/* {repos.map((repo) => ( */}
        {/*   <a key={repo.label} href={repo.href} target="_blank"> */}
        {/*     {repo.label} */}
        {/*   </a> */}
        {/* ))} */}
      </div>
    </div>
  );
}
