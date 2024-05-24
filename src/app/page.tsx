import { TooltipProvider } from "@/components/ui/tooltip";
import { ProjectTooltip } from "./_components/project-tooltip";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-1 flex-wrap justify-between gap-4 sm:flex-col sm:justify-normal sm:gap-3">
        {projects.map((project) => (
          <ProjectTooltip key={project.label} project={project} />
        ))}
      </div>
    </TooltipProvider>
  );
}
