import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import studio1 from "@/assets/studio-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kosh & Associates" },
      { name: "description", content: "Begin a conversation with the studio. Kochi-based architecture and interiors practice." },
      { property: "og:title", content: "Contact — Kosh & Associates" },
      { property: "og:description", content: "Begin a conversation with the studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="eyebrow">Contact</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
              Begin a conversation.
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We take on a small number of residential and interiors commissions each year, alongside the occasional cultural project. New enquiries are read by Kavya and the senior team.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-border p-10 md:p-14">
                <div className="eyebrow">Thank you</div>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl text-foreground">Your enquiry has been received.</h2>
                <p className="mt-4 text-muted-foreground">
                  We typically respond within five working days. For time-sensitive matters please call the studio directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-10"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telephone" name="phone" />
                <Field label="Location of project" name="location" placeholder="e.g. Kochi, Wayanad, outside Kerala" />
                <Field label="Project type" name="type" placeholder="Residence, retreat, interiors, other" />
                <div>
                  <label className="eyebrow block mb-3" htmlFor="brief">Brief description</label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Send enquiry →
                </button>
              </form>
            )}
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-10">
            <div>
              <div className="eyebrow mb-3">Studio</div>
              <p className="text-foreground">Kosh &amp; Associates</p>
              <p className="text-muted-foreground">14/2238-A, Mamangalam</p>
              <p className="text-muted-foreground">Kochi 682025, Kerala</p>
            </div>
            <div>
              <div className="eyebrow mb-3">Correspondence</div>
              <p className="text-foreground">studio@koshassociates.in</p>
              <p className="text-foreground">+91 484 246 8810</p>
            </div>
            <div>
              <div className="eyebrow mb-3">Hours</div>
              <p className="text-muted-foreground">Monday — Friday, 10:00 — 18:30 IST</p>
              <p className="text-muted-foreground">Visits by appointment</p>
            </div>
            <div>
              <div className="eyebrow mb-3">Elsewhere</div>
              <div className="flex gap-6 text-foreground">
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent transition-colors">Are.na</a>
                <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="rule mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow">Location</div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-foreground">Mamangalam, Kochi</h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              The studio occupies the upper floor of a 1960s commercial building near the Mamangalam junction, ten minutes from MG Road.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="img-hover aspect-[16/9]">
              <img src={studio1} alt="Studio, Mamangalam, Kochi" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3" htmlFor={name}>
        {label}{required && <span className="text-accent ml-1">·</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base transition-colors"
      />
    </div>
  );
}
