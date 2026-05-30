import { createFileRoute, Link } from "@tanstack/react-router";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import project1 from "@/assets/project-1-b.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Kosh & Associates" },
      { name: "description", content: "An architecture and interiors studio in Kochi, working on tropical residences, retreats and cultural projects across Kerala." },
      { property: "og:title", content: "Studio — Kosh & Associates" },
      { property: "og:description", content: "An architecture and interiors studio in Kochi." },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: Studio,
});

const timeline = [
  ["2011", "Studio founded by Kavya Menon in a converted godown in Mattancherry, Kochi."],
  ["2014", "First completed residence — House on the Embankment, Aluva — published in Indian Architect & Builder."],
  ["2017", "Studio expands to a permanent address at Mamangalam; team grows to nine."],
  ["2020", "Research collaboration with CEPT on coastal residential typologies for Kerala."],
  ["2023", "Ridge House, Wayanad, shortlisted at the Tropical Architecture Awards, Singapore."],
  ["2025", "Two projects in construction in Kannur and Thrissur; first cultural commission underway."],
];

const recognitions = [
  ["Architectural Digest India", "Top 50 Design Studios — 2024"],
  ["Domus India", "Featured Practice — Issue 117, 2023"],
  ["IIA Kerala", "Honourable Mention, Residential — 2022"],
  ["Tropical Architecture Awards", "Shortlist, Single Residence — 2023"],
];

function Studio() {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="eyebrow">Studio</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-foreground">
              A small practice, deliberately so.
            </h1>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Kosh &amp; Associates is an architecture and interiors studio based in Kochi. We work primarily across Kerala on residences, retreats, interiors and the occasional cultural project. The practice is led by Kavya Menon and supported by a permanent team of eleven architects, designers and landscape thinkers.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="img-hover aspect-[16/9]">
          <img src={studio1} alt="The studio, Mamangalam, Kochi" className="h-full w-full object-cover" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">The studio, Mamangalam, Kochi — 2024</p>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Philosophy</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">What the work is for.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg text-foreground leading-relaxed">
            <p>
              We are interested in buildings that are easy to live in, slow to age, and quiet about themselves. The houses we make tend to be low and long, with deep verandahs, planted courts, and rooms ordered around the path of the sun.
            </p>
            <p>
              Kerala is a place of unusual weather — torrential rain for months, soft humidity for the rest of the year, and a kind of vegetal pressure that climbs every surface. We try to design with that, not against it.
            </p>
            <p className="text-muted-foreground">
              The studio avoids signature gestures. Each project is the consequence of its site, its climate, and the lives of the people who will use it.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="img-hover aspect-[4/5]">
            <img src={studio2} alt="Material samples — studio archive" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <div className="eyebrow">Principal</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Kavya Menon</h2>
          <p className="mt-6 text-base md:text-lg text-foreground leading-relaxed">
            Kavya trained at the School of Architecture, CEPT Ahmedabad, and worked with Bijoy Jain’s Studio Mumbai before returning to Kerala in 2010. She founded the practice the following year. Her work has been published in Domus, AD India and Architectural Review Asia Pacific, and she teaches a residential design studio at the Avani Institute of Design, Calicut.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Associate Architects — Ahmed Riyaz, Niranjana Sasidharan. Landscape Lead — Ananya Pillai.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="eyebrow">Method</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">A measured process.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Each project moves through four deliberate phases. We take on a limited number of commissions each year so that this rhythm can hold.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              ["01", "Site & brief", "Slow walking. Drawing the climate, the trees, the way the family already moves through the day."],
              ["02", "Concept", "Hand drawings and physical models. The building takes its first shape in the studio, not the screen."],
              ["03", "Material", "Sampling lime, oxide, stone, timber on site, in the actual light of the project."],
              ["04", "Construction", "Weekly site presence. Detail drawings made in dialogue with master masons and carpenters."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-foreground/80 pt-6">
                <div className="eyebrow !text-foreground">{n}</div>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-editorial py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Material</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">What we tend to use, and why.</h2>
            <div className="img-hover mt-12 aspect-[4/3]">
              <img src={project1} alt="Material detail — teak louver and concrete column" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            {[
              ["Board-formed concrete", "Cast with site-pressed teak boards; the timber grain remains as a record of how the wall was made."],
              ["Burma teak", "Mostly reclaimed. Used for louvers, joinery and structural columns where the section is honest."],
              ["Kota & laterite stone", "Cool underfoot through April; honest enough to weather without finish."],
              ["Lime plaster, oxide floors", "Slow to apply, expensive in skill, generous in age. We prefer them to paint or tile in almost every room."],
            ].map(([t, d]) => (
              <div key={t} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-serif text-xl text-foreground">{t}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="eyebrow">Practice</div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Milestones</h2>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <ul className="divide-y divide-border">
              {timeline.map(([y, t]) => (
                <li key={y} className="py-6 grid grid-cols-12 gap-6 items-baseline">
                  <span className="col-span-3 md:col-span-2 font-serif text-xl text-foreground">{y}</span>
                  <span className="col-span-9 md:col-span-10 text-sm md:text-base text-muted-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <div className="eyebrow">Selected recognitions</div>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <ul className="divide-y divide-border">
              {recognitions.map(([p, d]) => (
                <li key={p} className="py-5 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <span className="text-foreground">{p}</span>
                  <span className="text-sm text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
            <Link to="/projects" className="mt-12 inline-block text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
              View selected projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
