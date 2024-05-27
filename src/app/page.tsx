import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gifSpeak from "@/images/projects/speak-nft.gif";
import imageMochi from "@/images/projects/mochi.png";
import imageAwg from "@/images/projects/awg.png";
import imageTekka from "@/images/projects/tekka.png";

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
    tech: ["Next.js", "Tailwindcss", "Wagmi", "ConnectKit", "howler.js"],
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
  { label: "Saintbot", href: "https://app.saintbot.io" },
  { label: "Arena Deathmatch", href: "https://www.arenadm.io" },
  { label: "Isekai", href: "https://www.isekai.money" },
  { label: "Blacky", href: "https://dapp.fantomblacky.io" },
];

function ProjectContent(props: { project: (typeof projects)[0] }) {
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
          className="h-auto w-72"
          priority
        />
      )}

      {props.project?.tech && props.project.tech.length > 0 && (
        <div className="flex max-w-72 flex-wrap items-center gap-2">
          <p className="text-xs font-semibold">Tech used: </p>
          {props.project.tech.map((skill) => (
            <Badge className="bg-sky-700/70" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {props.project?.description && (
        <p className="max-w-72 leading-tight">{props.project.description}</p>
      )}
    </>
  );
}

export default function HomePage() {
  return (
    <TooltipProvider delayDuration={50}>
      <div className="flex flex-1 flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
        {projects.map((project) => (
          <>
            <div className="hidden sm:block">
              <Tooltip>
                <TooltipTrigger>{project.label}</TooltipTrigger>
                <TooltipContent side="right" className="space-y-2 p-2">
                  <ProjectContent project={project} />
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="block sm:hidden">
              <Popover>
                <PopoverTrigger>{project.label}</PopoverTrigger>
                <PopoverContent side="bottom" className="space-y-2 p-2">
                  <ProjectContent project={project} />
                </PopoverContent>
              </Popover>
            </div>
          </>
        ))}
      </div>
    </TooltipProvider>
  );
}
