import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/home-hero.jpg";
import studio1 from "@/assets/studio-1.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kosh & Associates — Architecture & Interiors, Kerala" },
      {
        name: "description",
        content:
          "Contemporary tropical architecture from Kochi. Selected residences, retreats and interiors across Kerala.",
      },
      { property: "og:title", content: "Kosh & Associates" },
      { property: "og:description", content: "Contemporary tropical architecture from Kochi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="House of Quiet Courts — Panangad, Kochi"
            className="absolute inset-0 h-full w-full object-cover fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <div className="absolute inset-x-0 bottom-0 container-editorial pb-12 md:pb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-[color:var(--paper)]">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.02]">
                Architecture for the
                <br className="hidden md:block" /> tropical everyday.
              </h1>
              <div className="md:max-w-xs text-sm/relaxed opacity-90">
                <p>
                  A practice of architecture and interiors, working quietly across Kerala since 2011.
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 hidden md:block text-[color:var(--paper)]/70 eyebrow"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Selected work · 001
          </div>
        </div>
      </section>

      {/* Studio note */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="eyebrow">Studio note</div>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="font-serif text-2xl md:text-4xl leading-[1.2] text-foreground">
              We design houses and interiors that hold the weather. Long shadows, slow rooms, materials that age in monsoon light — the work is restrained, located, and made to last.
            </p>
            <div className="mt-10 flex items-center gap-8 text-sm">
              <Link to="/studio" className="border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
                About the studio
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Selected projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">Selected projects</div>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">Recent work</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-block text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
            Index of projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          <div className="md:col-span-7">
            <ProjectCard project={featured[0]} priority />
          </div>
          <div className="md:col-span-5 md:pt-24">
            <ProjectCard project={featured[1]} />
          </div>
          <div className="md:col-span-5 md:col-start-2">
            <ProjectCard project={featured[2]} />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="img-hover aspect-[4/5]">
              <img src={studio1} alt="Studio interior, Kochi" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <div className="eyebrow">Approach</div>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05]">
              A quieter way of building in the tropics.
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-prose">
              Our work begins with site and weather. We design for cross-ventilation before air-conditioning, for shade before glass, for ground-cooled stone before climate machinery. The architecture is shaped by what is already there.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-10 max-w-md">
              {[
                ["Architecture", "Residences, retreats, cultural"],
                ["Interiors", "Material-led, restrained"],
                ["Landscape", "Native, climate-aware"],
                ["Research", "Tropical typologies"],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="text-sm text-foreground">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
            <Link to="/studio" className="mt-12 self-start text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
              Studio &amp; method
            </Link>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">From the journal</div>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">Notes &amp; essays</h2>
          </div>
          <Link to="/journal" className="hidden md:inline-block text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
            All entries
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { img: journal1, eyebrow: "Field note · 04", title: "On the deep overhang", meta: "K. Menon · 6 min" },
            { img: journal2, eyebrow: "Material · 09", title: "Lime, oxide and the patience of plaster", meta: "Studio · 8 min" },
            { img: journal3, eyebrow: "Landscape · 02", title: "A garden that begins with rain", meta: "A. Pillai · 5 min" },
          ].map((j) => (
            <article key={j.title} className="group">
              <div className="img-hover aspect-[4/3]">
                <img src={j.img} alt={j.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5">
                <div className="eyebrow">{j.eyebrow}</div>
                <h3 className="mt-3 font-serif text-2xl text-foreground group-hover:text-accent transition-colors">{j.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{j.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="border-t border-border pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Considering a project? We take on a small number of commissions each year.
            </h2>
          </div>
          <div className="md:col-span-4 flex md:items-end md:justify-end">
            <Link
              to="/contact"
              className="text-sm border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Begin a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
