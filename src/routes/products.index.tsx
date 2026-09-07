import { createFileRoute } from "@tanstack/react-router";

import { ProductsShowcase } from "@/components/products-showcase";
import { PageHero } from "@/components/site-chrome";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "المنتجات | Products — Top Trust Metal Products" },
      {
        name: "description",
        content:
          "Top Trust product catalogue: ferro alloys, carburisers, nodulizers, virgin metals, minerals, ores and refractories.",
      },
      { property: "og:title", content: "Products — Top Trust Metal Products" },
      {
        property: "og:description",
        content: "Industrial materials for steelmaking, foundries and metal production.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLang();

  return (
    <div>
      <PageHero
        eyebrow={t.productsSection.eyebrow}
        title={t.productsSection.title}
        body={t.productsSection.body}
      />
      <ProductsShowcase showHeader={false} />
    </div>
  );
}
