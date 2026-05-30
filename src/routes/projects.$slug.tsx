import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Kosh & Associates` : "Project — Kosh & Associates";
    const desc = p?.overview ?? "A project by Kosh & Associates.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: p ? `/projects/${p.slug}` : "/projects" },
        ...(p?.cover ? [{ property: "og:image", content: p.cover }] : []),
      ],
      links: p ? [{ rel: "canonical", href: `/projects/${p.slug}` }] : [],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img src={project.cover} alt={`${project.name}, ${project.location}`} className="absolute inset-0 h-full w-full object-cover fade-in" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45" />
        <div className="absolute inset-x-0 bottom-0 container-editorial pb-10 md:pb-14 text-[color:var(--paper)]">
          <div className="eyebrow !text-[color:var(--paper)]/75">{project.category} · {project.year}</div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl">{project.name}</h1>
          <p className="mt-3 text-sm md:text-base opacity-90">{project.location}</p>
        </div>
      </div>

      <section className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-8">
          {[
            ["Location", project.location],
            ["Year", String(project.year)],
            ["Scope", project.scope],
            ["Area", project.area],
            ["Status", project.status],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-border pt-4">
              <div className="eyebrow">{k}</div>
              <div className="mt-2 text-foreground">{v}</div>
            </div>
          ))}
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="eyebrow">Overview</div>
          <p className="mt-4 font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">
            {project.overview}
          </p>
          <div className="mt-12 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.narrative.map((n: string, i: number) => (
              <p key={i}>{n}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 md:space-y-10 pb-24">
        {project.gallery.map((src: string, i: number) => {
          const isWide = i % 3 === 0;
          return (
            <figure key={i} className={isWide ? "w-full" : "container-editorial"}>
              <div className={`img-hover ${isWide ? "aspect-[16/9]" : "aspect-[4/3] md:aspect-[16/10]"}`}>
                <img src={src} alt={`${project.name} — image ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </figure>
          );
        })}
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Material palette</div>
            <ul className="mt-6 divide-y divide-border">
              {project.materials.map((m: string) => (
                <li key={m} className="py-4 font-serif text-2xl text-foreground">{m}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="eyebrow">Landscape</div>
            <p className="mt-6 font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">{project.landscape}</p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">Related projects</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Continue reading</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-block text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
            All projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {related.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
