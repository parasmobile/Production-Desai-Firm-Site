import { useEffect } from "react";
import { firmJsonLd } from "@/components/SEOHead";

/**
 * Injects the firm's LegalService/Attorney JSON-LD on every page,
 * independent of the per-page SEOHead schema.
 */
const OrganizationSchema = () => {
  useEffect(() => {
    const scriptId = "json-ld-org";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(firmJsonLd);
  }, []);

  return null;
};

export default OrganizationSchema;
