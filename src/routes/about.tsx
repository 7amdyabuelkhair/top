import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site-chrome";
import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | About — Top Trust Metal Products" },
      {
        name: "description",
        content:
          "Top Trust supplies ferro alloys, industrial minerals, virgin metals and refractories to steel, foundry and manufacturing customers.",
      },
      { property: "og:title", content: "About — Top Trust Metal Products" },
      {
        property: "og:description",
        content: "A supply partner for metals, foundries and industrial production.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <div>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} body={t.about.body} />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <img
            src={images.facility}
            alt={t.about.title}
            loading="lazy"
            width={1280}
            height={853}
            className="shadow-card w-full rounded-sm border border-border object-cover"
          />
          <ul className="space-y-4">
            {t.about.points.map((p) => (
              <li
                key={p}
                className="shadow-card flex items-start gap-3 rounded-sm border border-border bg-card p-5 text-sm"
              >
                <span className="bg-gradient-ember mt-1.5 size-2 shrink-0 rounded-full" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="bg-background px-4 py-8 text-center">
              <div className="font-display text-3xl font-black text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
