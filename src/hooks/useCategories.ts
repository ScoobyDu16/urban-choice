import { useMemo } from "react";
import { categories } from "../data/categories";
import { getFeaturedCategories } from "../utils/filters";
import type { Category } from "../types/category.types";

export function useCategories() {
  return categories;
}

export function useFeaturedCategories(count: number): Category[] {
  return useMemo(() => getFeaturedCategories(categories, count), [count]);
}

export function useCategoryBySlug(slug: string | undefined): Category | undefined {
  return useMemo(
    () => categories.find((c) => c.slug === slug),
    [slug]
  );
}
