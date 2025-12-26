
"use client";

import { useEffect } from "react";
import Script from "next/script";

export type BreadcrumbItem = {
  position: number;
  name: string;
  item?: string; // absolute URL (optional for last item)
};

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * SEO component — injects meta tags + LocalBusiness schema + optional BreadcrumbList JSON-LD
 * Compatible with Next.js App Router
 */
export default function SEO({ title, description, url, image = "https://www.dsllimoservice.com/og-image.jpg", breadcrumbs }: SeoProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DSL Limo Services",
    url: "https://www.dsllimoservice.com",
    description: "Premier luxury limousine and chauffeur services for airport transfers, weddings, and corporate travel in NYC & NJ.",
    image: "https://www.dsllimoservice.com/Logo.png",
    telephone: "+1-800-679-3415",
    email: "info@dsllimoservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3193 Washington Rd",
      addressLocality: "Parlin",
      addressRegion: "NJ",
      postalCode: "08859",
      addressCountry: "US",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: ["New York", "New Jersey", "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    },
    serviceType: "Luxury Transportation Service",
  };

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b) => {
            const li: any = {
              "@type": "ListItem",
              position: b.position,
              name: b.name,
            };
            if (b.item) li.item = b.item;
            return li;
          }),
        }
      : null;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update standard meta tags
    updateMetaTag("description", description);
    
    // Update Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:site_name", "DSL Limo Services", true);

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", url);
  }, [title, description, url, image]);

  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumb JSON-LD (if provided) */}
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}

