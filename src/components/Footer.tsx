import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-legal section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">The Desai Firm</h3>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Practical, results-driven legal representation in Saint Augustine, Florida and across Northeast Florida.
            </p>
            <div className="gold-divider mb-4" />
            <p className="text-xs text-primary-foreground/50">
              Paras J. Desai, Esq.<br />
              Florida Bar No. 030827
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About the Firm", path: "/about" },
                { label: "Practice Areas", path: "/practice-areas" },
                { label: "Counties Served", path: "/counties-served" },
                { label: "Resources & FAQs", path: "/resources" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Family Law", path: "/practice-areas/family-law" },
                { label: "Civil Litigation", path: "/practice-areas/civil-litigation" },
                { label: "Personal Injury", path: "/practice-areas/personal-injury" },
                { label: "Land Use & Zoning", path: "/practice-areas/land-use-zoning" },
                { label: "Probate & Estates", path: "/practice-areas/probate-estate-administration" },
                { label: "Business Disputes", path: "/practice-areas/business-llc-disputes" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:9045636952" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                (904) 563-6952
              </a>
              <a href="mailto:pd@desaifirm.com" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                pd@desaifirm.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  2200 N. Ponce De Leon Blvd<br />
                  Suite 7<br />
                  Saint Augustine, FL 32084
                </span>
              </div>
            </div>
            <div className="mt-4 text-xs text-primary-foreground/50">
              Office Hours: Mon–Fri, 9 AM – 5 PM
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="text-xs text-primary-foreground/40 space-y-2 max-w-4xl">
            <p>
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Past results do not guarantee future outcomes.
            </p>
            <p>
              This website is for informational purposes only and does not create an attorney-client relationship. No legal advice is provided until a signed engagement letter is in place.
            </p>
            <p>
              © {new Date().getFullYear()} The Desai Law Firm LLC. All rights reserved. |{" "}
              <Link to="/privacy-policy" className="underline hover:text-primary-foreground/60">Privacy Policy</Link>{" | "}
              <Link to="/terms" className="underline hover:text-primary-foreground/60">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
