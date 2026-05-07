import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "Counties Served", path: "/counties-served" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/[0.97] backdrop-blur-sm border-b border-primary">
      <div className="container-legal">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-primary-foreground/10">
          <span className="text-primary-foreground/70">
            2200 North Ponce De Leon, Ste 7, Saint Augustine, FL 32084
          </span>
          <a
            href="tel:9045636952"
            className="flex items-center gap-2 text-accent hover:text-gold-light transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            (904) 563-6952
          </a>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-3 px-4 lg:px-0">
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-xl lg:text-2xl font-bold text-primary-foreground tracking-wide">
              The Desai Firm
            </span>
            <span className="text-[10px] lg:text-xs text-primary-foreground/60 tracking-[0.2em] uppercase">
              Attorneys at Law
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-3 bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-sm">
                Free Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:9045636952"
              className="flex items-center gap-1.5 px-3 py-2 rounded bg-accent text-accent-foreground text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-primary-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 px-4 border-t border-primary-foreground/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-primary-foreground/10 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
                Request a Consultation
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
