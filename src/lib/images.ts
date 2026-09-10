const withBase = (path: string) =>
  path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

/** Central image URLs — local assets served from /public */
export const images = {
  logo: withBase("/logo.jpg"),
  logoFallback: withBase("/logo.svg"),
  hero: withBase(
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ),
  facility: withBase("/facility.jpg"),
  products: {
    "ferro-alloys": withBase(
      "https://plus.unsplash.com/premium_photo-1664300628088-bb2e317ea462?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ),
    carbourisers: withBase(
      "https://images.unsplash.com/photo-1560713269-4e9527797b8f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    ),
    "virgin-metals": withBase(
      "https://images.unsplash.com/photo-1726805868119-2520c00ab432?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ),
    "minerals-ores": withBase(
      "https://images.unsplash.com/photo-1711012604128-8339024a3e12?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ),
    refractories: withBase(
      "https://images.unsplash.com/photo-1613970351372-9804e380bd09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ),
    "steel-products": withBase(
      "https://images.unsplash.com/photo-1697698532634-ea59b636ccea?fm=jpg&q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
    ),
    cements: withBase(
      "https://plus.unsplash.com/premium_photo-1683121530725-e9ddd6c74ef1?fm=jpg&q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0",
    ),
  },
} as const;

export const productImageMap: Record<string, string> = { ...images.products };