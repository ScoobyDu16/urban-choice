import { useMemo } from "react";
import { products } from "../data/products";
import { getFeaturedProducts, filterProductsByCategory } from "../utils/filters";
import type { Product } from "../types/product.types";

export function useProducts(): Product[] {
  return products;
}

export function useFeaturedProducts(count: number): Product[] {
  return useMemo(() => getFeaturedProducts(products, count), [count]);
}

export function useProductsByCategory(categorySlug: string | undefined): Product[] {
  return useMemo(
    () => (categorySlug ? filterProductsByCategory(products, categorySlug) : []),
    [categorySlug]
  );
}
