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
    <div className="w-full pl-[53px] sm:pl-[50px]">
      <div className="flex w-full flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
        {repos.map((repo) => (
          <a key={repo.label} href={repo.href} target="_blank">
            {repo.label}
          </a>
        ))}
      </div>
    </div>
  );
}
