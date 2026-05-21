export interface Product {
  id: string;
  name: string;
  image: string;
  categorySlug: string;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export interface Company {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  country: string;
  postalBox: string;
  phone: string;
  mobile: string;
  email: string;
  whatsapp: string;
  workingHours: string;
  googleMapsEmbedUrl: string;
  googleMapsLink: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}
