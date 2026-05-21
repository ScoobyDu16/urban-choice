import { SITE_URL } from "../constants/config";

export function buildPageTitle(pageTitle: string, siteName: string): string {
  return `${pageTitle} | ${siteName}`;
}

export function buildCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

export function buildLocalBusinessSchema(company: {
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  googleMapsLink: string;
  workingHours: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressCountry: company.country,
    },
    openingHours: "Sa-Th 09:00-21:00, Fr 14:00-21:00",
    hasMap: company.googleMapsLink,
    priceRange: "$$",
    sameAs: [company.googleMapsLink],
  };
}
