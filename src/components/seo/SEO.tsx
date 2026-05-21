import { Helmet } from "react-helmet-async";
import { type SEOProps } from "../../types";
import { SITE_NAME, SITE_DESCRIPTION } from "../../constants";
import { SITE_URL } from "../../constants/config";

interface SEOComponentProps extends SEOProps {
  pathname?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  canonicalUrl,
  pathname,
  structuredData,
}: SEOComponentProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const metaDescription = description || SITE_DESCRIPTION;
  const canonical = canonicalUrl || (pathname ? `${SITE_URL}${pathname}` : "");
  const ogUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
