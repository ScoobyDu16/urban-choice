export interface Product {
  id: string;
  name: string;
  image: string;
  categorySlug: string;
  brand?: string;
  featured?: boolean;
}
