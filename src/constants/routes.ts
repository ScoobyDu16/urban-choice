export const ROUTES = {
  HOME: "/",
  CATEGORIES: "/categories",
  PRODUCTS: "/products",
  CATEGORY_PRODUCTS: "/products/:categorySlug",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export const getCategoryProductsPath = (slug: string) => `/products/${slug}`;
