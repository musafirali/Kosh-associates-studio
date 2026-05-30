import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-editorial py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl md:text-4xl leading-[1.1] text-foreground max-w-md">
            A practice of architecture and interiors, working quietly across Kerala.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7 space-y-2 text-sm text-muted-foreground">
          <div className="eyebrow mb-3">Studio</div>
          <p className="text-foreground">Kosh &amp; Associates</p>
          <p>14/2238-A, Mamangalam</p>
          <p>Kochi 682025, Kerala</p>
          <p className="pt-3">+91 484 246 8810</p>
          <p>studio@koshassociates.in</p>
        </div>

        <div className="md:col-span-2 space-y-2 text-sm">
          <div className="eyebrow mb-3">Index</div>
          {[
            { to: "/studio", label: "Studio" },
            { to: "/projects", label: "Projects" },
            { to: "/journal", label: "Journal" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <div key={l.to}>
              <Link to={l.to} className="text-foreground hover:text-accent transition-colors">
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container-editorial pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Kosh &amp; Associates</span>
        <span>Council of Architecture · CA/2011/52188</span>
      </div>
    </footer>
  );
}
