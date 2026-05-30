import { createFileRoute } from "@tanstack/react-router";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import projectImg from "@/assets/project-2-b.jpg";
import studio2 from "@/assets/studio-2.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Kosh & Associates" },
      { name: "description", content: "Essays and field notes on tropical architecture, materiality and climate-responsive design in Kerala." },
      { property: "og:title", content: "Journal — Kosh & Associates" },
      { property: "og:description", content: "Essays and field notes on tropical architecture." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const entries = [
  {
    img: journal1,
    eyebrow: "Field note · 04",
    title: "On the deep overhang",
    excerpt: "A reading of how shade — not glass — has historically structured the tropical Kerala home, and what that means for the way we draw a section today.",
    author: "Kavya Menon",
    date: "March 2025",
    read: "6 min",
  },
  {
    img: journal2,
    eyebrow: "Material · 09",
    title: "Lime, oxide and the patience of plaster",
    excerpt: "Notes from a year of working with three lime craftsmen in Thrissur — what they know, what we forgot, and why the walls take twelve days to finish.",
    author: "Studio",
    date: "January 2025",
    read: "8 min",
  },
  {
    img: journal3,
    eyebrow: "Landscape · 02",
    title: "A garden that begins with rain",
    excerpt: "On planting design for the Kerala monsoon, where the question is rarely irrigation and almost always drainage, light, and rooting.",
    author: "Ananya Pillai",
    date: "October 2024",
    read: "5 min",
  },
  {
    img: projectImg,
    eyebrow: "Project diary · 02",
    title: "Ridge House, ten months in",
    excerpt: "A long visit back to Wayanad. How a tea-ridge climate has changed our specification for steel, glazing, and the underside of the roof.",
    author: "Ahmed Riyaz",
    date: "August 2024",
    read: "7 min",
  },
  {
    img: studio2,
    eyebrow: "Material · 08",
    title: "A drawer of stones",
    excerpt: "An accidental archive of cut samples — kota, kadappa, laterite, granite — and what each of them does to the foot of a room.",
    author: "Studio",
    date: "May 2024",
    read: "4 min",
  },
];

function Journal() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="eyebrow">Journal</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">Notes from the studio.</h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Essays, material studies and project diaries — written by the studio and a small group of collaborators.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="img-hover aspect-[16/10]">
              <img src={entries[0].img} alt={entries[0].title} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">{entries[0].eyebrow}</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] text-foreground">{entries[0].title}</h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{entries[0].excerpt}</p>
            <p className="mt-6 text-xs text-muted-foreground">{entries[0].author} · {entries[0].date} · {entries[0].read} read</p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="rule mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {entries.slice(1).map((e) => (
            <article key={e.title} className="group">
              <div className="img-hover aspect-[4/5]">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5">
                <div className="eyebrow">{e.eyebrow}</div>
                <h3 className="mt-3 font-serif text-2xl text-foreground group-hover:text-accent transition-colors">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{e.author} · {e.date} · {e.read} read</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
