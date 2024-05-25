import { TooltipProvider } from "@/components/ui/tooltip";
import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
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
      {props.project?.skills && props.project.skills.length > 0 && (
        <div className="flex w-72 flex-wrap items-center gap-2">
          <p className="text-xs font-semibold">Skills used: </p>
          {props.project.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      )}
    </>
  );
}

export default function HomePage() {
  return (
    <TooltipProvider delayDuration={100}>
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
