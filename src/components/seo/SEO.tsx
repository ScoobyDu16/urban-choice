import { Helmet } from "react-helmet-async";
import { SEOProps } from "../../types";
import { SITE_NAME, SITE_DESCRIPTION } from "../../constants";

interface SEOComponentProps extends SEOProps {
  pathname?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  canonicalUrl,
  pathname,
}: SEOComponentProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const metaDescription = description || SITE_DESCRIPTION;
  const url = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
}
