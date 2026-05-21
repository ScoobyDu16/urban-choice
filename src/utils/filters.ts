import type { Product } from "../types/product.types";
import type { Category } from "../types/category.types";

export function filterProductsByCategory(
  products: Product[],
  categorySlug: string | null
): Product[] {
  if (!categorySlug) return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function filterProductsBySearch(
  products: Product[],
  query: string
): Product[] {
  if (!query.trim()) return products;
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q))
  );
}

export function getFeaturedProducts(
  products: Product[],
  count: number
): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.length >= count
    ? featured.slice(0, count)
    : products.slice(0, count);
}

export function getFeaturedCategories(
  categories: Category[],
  count: number
): Category[] {
  const featured = categories.filter((c) => c.featured);
  return featured.length >= count
    ? featured.slice(0, count)
    : categories.slice(0, count);
}
