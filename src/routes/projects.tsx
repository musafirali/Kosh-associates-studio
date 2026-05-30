import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kosh & Associates" },
      { name: "description", content: "Selected architecture and interiors projects across Kerala — residences, retreats and interiors." },
      { property: "og:title", content: "Projects — Kosh & Associates" },
      { property: "og:description", content: "Selected work across Kerala." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const categories = ["All", "Residence", "Retreat", "Interior", "Cultural"] as const;
type Cat = (typeof categories)[number];

function Projects() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="eyebrow">Index of projects</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">Selected work, 2011 — 2025.</h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Residences, retreats and interiors completed across Kerala, with a small body of cultural and research work in between.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-12">
        <div className="rule mb-6" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`pb-1 transition-colors border-b ${
                cat === c
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {c}
              <span className="ml-2 text-[10px] tracking-widest text-muted-foreground">
                {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
        <div className="rule mt-6" />
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {filtered.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:pt-24" : ""}>
              <ProjectCard project={p} priority={i < 2} />
              <p className="mt-4 text-sm text-muted-foreground max-w-md">{p.descriptor}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-24">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
