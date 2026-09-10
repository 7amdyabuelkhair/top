import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site-chrome";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات | Services — Top Trust Metal Products" },
      {
        name: "description",
        content:
          "Product matching, sourcing, import and export coordination for ferro alloys, industrial minerals, virgin metals and refractories.",
      },
      { property: "og:title", content: "Services — Top Trust Metal Products" },
      {
        property: "og:description",
        content: "From product selection and specifications to packing and shipment coordination.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <div>
      <PageHero
        eyebrow={t.servicesSection.eyebrow}
        title={t.servicesSection.title}
        body={t.servicesSection.body}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s) => (
            <div
              key={s.n}
              className="shadow-card group rounded-sm border border-border bg-card p-8 transition-transform hover:-translate-y-1"
            >
              <span className="bg-gradient-ember grid size-10 place-items-center rounded-sm font-display text-sm font-black text-primary-foreground">
                {s.n}
              </span>
              <h2 className="mt-5 font-display text-lg font-bold">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-graphite mt-14 flex flex-col items-center justify-between gap-5 rounded-sm px-8 py-10 text-center lg:flex-row lg:text-start">
          <p className="font-display text-xl font-bold text-graphite-foreground">
            {t.contact.body}
          </p>
          <Link
            to="/contact"
            className="cta-brand rounded-sm px-6 py-3 text-sm font-bold"
          >
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
