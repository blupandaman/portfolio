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
    <div className="ml-[50px] flex flex-col gap-2">
      <p>Soon&trade;</p>
      {/* {repos.map((repo) => ( */}
      {/*   <a key={repo.label} href={repo.href} target="_blank"> */}
      {/*     {repo.label} */}
      {/*   </a> */}
      {/* ))} */}
    </div>
  );
}
