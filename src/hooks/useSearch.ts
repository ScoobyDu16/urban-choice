import { useState, useMemo } from "react";
import {
  filterProductsBySearch,
  filterProductsByCategory,
} from "../utils/filters";
import type { Product } from "../types/product.types";

export function useSearch(initialProducts: Product[]) {
  const [query, setQuery] = useState("");
  const [categorySlug, setCategorySlug] = useState<string | null>(null);

  const results = useMemo(() => {
    let filtered = initialProducts;
    if (categorySlug) {
      filtered = filterProductsByCategory(filtered, categorySlug);
    }
    if (query) {
      filtered = filterProductsBySearch(filtered, query);
    }
    return filtered;
  }, [initialProducts, query, categorySlug]);

  return { query, setQuery, categorySlug, setCategorySlug, results };
}
