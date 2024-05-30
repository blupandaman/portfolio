import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Fragment } from "react";
import gifPortfolio from "@/images/repos/portfolio.gif";
import gifTapiocaCountdown from "@/images/repos/tapioca-countdown.gif";
import gifWeb3AuthStarter from "@/images/repos/web3-auth-starter.gif";

type Repo = {
  label: string;
  repoHref: string;
  image?: StaticImageData;
  tech?: Array<string>;
  description?: string;
  href?: string;
};

const repos: Array<Repo> = [
  {
    label: "Tapioca Genesis Countdown",
    repoHref: "https://github.com/blupandaman/tapioca-countdown",
    image: gifTapiocaCountdown,
    tech: ["Framer Motion", "Next.js", "Tailwindcss"],
    description:
      "Little project that shows the exact time that the Tapioca DAO project is launching.",
    href: "https://tapioca.blupm.dev",
  },
  {
    label: "This Portfolio",
    repoHref: "https://github.com/blupandaman/portfolio",
    image: gifPortfolio,
    tech: ["Next.js", "Tailwindcss", "whatamesh"],
    description:
      "Simple yet straightforward layout shows what I have done and who I am.",
  },
  {
    label: "Web3 Auth Starter",
    repoHref: "https://github.com/blupandaman/web3-auth-starter",
    image: gifWeb3AuthStarter,
    tech: [
      "SIWE",
      "NextAuth",
      "ConnectKit",
      "tRPC",
      "Drizzle",
      "Postgres",
      "shadcn/ui",
    ],
    description:
      "A Next.js starter repo that is set up with Drizzle + Postgres, NextAuth + SIWE, tRPC, and shadnc/ui.",
    href: "https://web3-auth-starter.vercel.app",
  },
];

function RepoContent(props: { repo: Repo }) {
  return (
    <>
      <div className="flex items-center">
        <Link
          href={props.repo?.href ?? "#"}
          target={props.repo?.href ? "_blank" : "_self"}
        >
          {props.repo.label}
        </Link>

        {props.repo?.href && <ArrowTopRightIcon className="ml-2 size-4" />}
      </div>

      {props.repo?.image && (
        <Image
          src={props.repo.image}
          alt={props.repo.label}
          className="h-auto w-72 sm:w-[450px]"
          priority
        />
      )}

      <div className="flex items-center">
        <Link
          href={props.repo.repoHref}
          target={props.repo.repoHref ? "_blank" : "_self"}
        >
          View repository
        </Link>
        <ArrowTopRightIcon className="ml-2 size-4" />
      </div>

      {props.repo?.tech && props.repo.tech.length > 0 && (
        <div className="flex max-w-72 flex-wrap items-center gap-2 sm:max-w-[450px]">
          <p className="text-xs font-semibold">Tech: </p>
          {props.repo.tech.map((skill) => (
            <Badge className="bg-sky-700/70" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {props.repo?.description && (
        <p className="max-w-72 leading-tight sm:max-w-[450px]">
          {props.repo.description}
        </p>
      )}
    </>
  );
}

export default function RepoPage() {
  return (
    <div className="w-full pl-[53px] sm:pl-[50px]">
      <div className="flex flex-1 flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
        {repos.map((repo) => (
          <Fragment key={repo.label}>
            <div className="hidden sm:block">
              <Popover>
                <PopoverTrigger>{repo.label}</PopoverTrigger>
                <PopoverContent
                  sideOffset={16}
                  side="right"
                  className="space-y-3 p-3"
                >
                  <RepoContent repo={repo} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="block sm:hidden">
              <Popover>
                <PopoverTrigger>{repo.label}</PopoverTrigger>
                <PopoverContent
                  sideOffset={16}
                  side="bottom"
                  className="space-y-2 p-2"
                >
                  <RepoContent repo={repo} />
                </PopoverContent>
              </Popover>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
