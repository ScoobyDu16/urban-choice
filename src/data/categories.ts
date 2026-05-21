import type { Category } from "../types/category.types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Electrical",
    slug: "electrical",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Electrical items, switches, and lighting solutions",
    featured: true,
  },
  {
    id: "2",
    name: "Hardware",
    slug: "hardware",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    description: "Quality hardware tools and construction materials",
  },
  {
    id: "3",
    name: "Paint",
    slug: "paint",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    description: "Premium quality paints for interior and exterior surfaces",
    featured: true,
  },
  {
    id: "4",
    name: "Plumbing",
    slug: "plumbing",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    description: "Pipes, fittings, and plumbing accessories",
  },
  {
    id: "5",
    name: "Sanitary",
    slug: "sanitary",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Complete sanitary ware and bathroom fittings",
    featured: true,
  },
  {
    id: "6",
    name: "Tiles",
    slug: "tiles",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description: "Ceramic and porcelain tiles for all spaces",
  },
].sort((a, b) => a.name.localeCompare(b.name));
