import { createFileRoute } from "@tanstack/react-router";

import { ProductsShowcase } from "@/components/products-showcase";
import { PageHero } from "@/components/site-chrome";
import { useLang } from "@/lib/lang";
import { content } from "@/lib/site-content";
import { productImageMap } from "@/lib/images";

const siteUrl = "https://toptrustco.com";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "المنتجات | Products — Top Trust Metal Products" },
      {
        name: "description",
        content:
          "Top Trust product catalogue: ferro alloys, carburisers, virgin metals, minerals, ores, refractories, steel products, cement and industrial materials.",
      },
      { property: "og:title", content: "Products — Top Trust Metal Products" },
      {
        property: "og:description",
        content: "Industrial materials for steelmaking, foundries and metal production.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Top Trust Products",
          url: `${siteUrl}/products`,
          itemListElement: content.en.products.map((product, position) => ({
            "@type": "ListItem",
            position: position + 1,
            url: `${siteUrl}/products/${product.slug}`,
            item: {
              "@type": "Product",
              name: product.name,
              description: product.desc,
              image: productImageMap[product.slug],
            },
          })),
        }),
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
