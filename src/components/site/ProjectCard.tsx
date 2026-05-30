import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div className="img-hover aspect-[4/5] bg-muted">
        <img
          src={project.cover}
          alt={`${project.name} — ${project.location}`}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-foreground">{project.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.location} · {project.year}
          </p>
        </div>
        <span className="eyebrow shrink-0 pt-2">{project.category}</span>
      </div>
    </Link>
  );
}
