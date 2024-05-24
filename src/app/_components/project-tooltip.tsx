"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { type projects } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function ProjectTooltip(props: { project: (typeof projects)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <Link
          href={props.project?.href ?? "#"}
          target={props.project?.href ? "_blank" : "_self"}
          className="w-fit"
        >
          {props.project.label}
        </Link>
      </TooltipTrigger>
      {(props.project?.skills ?? props.project?.image) && (
        <TooltipContent side="right" className="z-50 space-y-2 p-2">
          <Link
            href={props.project?.href ?? "#"}
            target={props.project?.href ? "_blank" : "_self"}
            className="font-semibold"
          >
            {props.project.label}
          </Link>
          {props.project?.image && (
            <Image
              src={props.project.image}
              alt={props.project.label}
              className="h-auto w-72"
            />
          )}
          {props.project?.skills && props.project.skills.length > 0 && (
            <div className="flex w-72 flex-wrap items-center gap-2">
              <p className="font-semibold">Skills used: </p>
              {props.project.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          )}
        </TooltipContent>
      )}
    </Tooltip>
  );
}
