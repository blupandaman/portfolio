import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gifSpeak from "@/images/projects/speak.gif";
import imageMochi from "@/images/projects/mochi.png";
import imageAwg from "@/images/projects/awg.png";
import imageTekka from "@/images/projects/tekka.png";
import imageSaintbot from "@/images/projects/saintbot.png";
import imageArena from "@/images/projects/arena.png";
import imageIsekai from "@/images/projects/isekai.png";
import imageBlacky from "@/images/projects/blacky.png";

type Project = {
  label: string;
  href: string;
  image?: StaticImageData;
  tech?: Array<string>;
  description?: string;
};

const projects: Array<Project> = [
  {
    label: "Speak NFT",
    href: "https://www.playspeak.xyz",
    image: gifSpeak,
    tech: ["Three.js", "Phaser", "Socket.IO", "Next.js", "Websocket Server"],
    description:
      "Made a scroll based animation for the landing page, a deck builder that saved user made decks to a database, and a browser based game so users could play against eachother using websockets.",
  },
  {
    label: "Mochi Circle",
    href: "https://www.mochicircle.xyz",
    image: imageMochi,
    tech: ["Next.js", "Tailwindcss", "Turso", "Flask Server", "Upstash"],
    description:
      "Mochi Circle focuses on bringing people together and connecting them with their niche. I am the main developer for the project and have additionaly built out a weekly points system.",
  },
  {
    label: "Autistic Waterfowl Group",
    href: "https://www.ducks.capital",
    image: imageAwg,
    tech: ["Next.js", "Tailwindcss", "Wagmi.sh", "ConnectKit", "howler.js"],
    description:
      "Made a site where users could connect their wallet, check if they were whitelisted, and mint an AWG NFT.",
  },
  {
    label: "Tekka",
    href: "https://www.friendtekka.xyz",
    image: imageTekka,
    tech: ["Subgraph", "Goldsky", "MongoDB", "Tremor"],
    description:
      "Set up a subgraph to keep track of transactions made on the Tekka friend.tech account. A cron job was used to pull the data from the subgraph and store it into the database.",
  },
  {
    label: "Saintbot",
    href: "https://app.saintbot.io",
    image: imageSaintbot,
    tech: ["SIWE", "Thirdweb", "tRPC", "Postgres", "shadcn/ui"],
    description:
      "Initially built a dashboard for the project revenue per wallet, but later built the web based token deployer.",
  },
  {
    label: "Arena Deathmatch",
    href: "https://www.arenadm.io",
    image: imageArena,
    tech: [
      "Subgraph",
      "TanStack Query",
      "Tailwindcss",
      "DEX Screener API",
      "Jotai",
    ],
    description:
      "Pulled live data from a subgraph to show which wallets had the highest profit on a specific token pair.",
  },
  {
    label: "Isekai",
    href: "https://www.isekai.money",
    image: imageIsekai,
    tech: ["tRPC", "Viem", "shadcn/ui", "Tailwindcss", "Jotai"],
    description:
      "Developed a design system so that the frontend team working on the dashboard could move faster and have a consistent look accross all components.",
  },
  {
    label: "Blacky",
    href: "https://dapp.fantomblacky.io",
    image: imageBlacky,
    tech: ["Wagmi.sh", "TanStack Query", "DEX Screener API", "ConnectKit"],
    description:
      "Built a dashboard for the meme coin Blacky that kept track of token burns and other metrics. Additionaly, built a NFT minting page for their collection.",
  },
];

function ProjectContent(props: { project: Project }) {
  return (
    <>
      <div className="flex items-center">
        <Link
          href={props.project?.href ?? "#"}
          target={props.project?.href ? "_blank" : "_self"}
        >
          {props.project.label}
        </Link>
        <ArrowTopRightIcon className="ml-2 size-4" />
      </div>

      {props.project?.image && (
        <Image
          src={props.project.image}
          alt={props.project.label}
          className="h-auto w-72 sm:w-[450px]"
          priority
        />
      )}

      {props.project?.tech && props.project.tech.length > 0 && (
        <div className="flex max-w-72 flex-wrap items-center gap-2 sm:max-w-[450px]">
          <p className="text-xs font-semibold">Tech: </p>
          {props.project.tech.map((skill) => (
            <Badge className="bg-sky-700/70" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {props.project?.description && (
        <p className="max-w-72 leading-tight sm:max-w-[450px]">
          {props.project.description}
        </p>
      )}
    </>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
      {projects.map((project) => (
        <>
          <div className="hidden sm:block">
            <Popover>
              <PopoverTrigger>{project.label}</PopoverTrigger>
              <PopoverContent
                sideOffset={16}
                side="right"
                className="space-y-3 p-3"
              >
                <ProjectContent project={project} />
              </PopoverContent>
            </Popover>
          </div>

          <div className="block sm:hidden">
            <Popover>
              <PopoverTrigger>{project.label}</PopoverTrigger>
              <PopoverContent
                sideOffset={16}
                side="bottom"
                className="space-y-2 p-2"
              >
                <ProjectContent project={project} />
              </PopoverContent>
            </Popover>
          </div>
        </>
      ))}
    </div>
  );
}
