import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
}

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (jsonLd) {
      let script = document.getElementById("json-ld") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default SEOHead;

export const firmJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  "name": "The Desai Law Firm LLC",
  "alternateName": "The Desai Firm",
  "url": "https://desaifirm.com",
  "telephone": "+1-904-563-6952",
  "email": "pd@desaifirm.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2200 North Ponce De Leon Blvd, Suite 7",
    "addressLocality": "Saint Augustine",
    "addressRegion": "FL",
    "postalCode": "32084",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.9012,
    "longitude": -81.3124
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "St. Johns County, FL" },
    { "@type": "AdministrativeArea", "name": "Flagler County, FL" },
    { "@type": "AdministrativeArea", "name": "Duval County, FL" },
    { "@type": "AdministrativeArea", "name": "Clay County, FL" },
    { "@type": "AdministrativeArea", "name": "Putnam County, FL" },
    { "@type": "AdministrativeArea", "name": "Volusia County, FL" }
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.floridabar.org/directories/find-mbr/profile/?num=030827",
    "https://www.avvo.com/attorneys/32084-fl-paras-desai.html",
    "https://justia.com/lawyers/florida/saint-augustine"
  ]
};
