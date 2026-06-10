import { Link } from "react-router-dom";
import { Phone, Scale, Shield, Users, FileText, Building, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-staugustine.jpg";

const practiceAreas = [
  { title: "Family Law", icon: Users, path: "/practice-areas/family-law", desc: "Divorce, child custody, timesharing, paternity, and modifications." },
  { title: "Civil Litigation", icon: Scale, path: "/practice-areas/civil-litigation", desc: "Contract disputes, consumer claims, injunctions, and business conflicts." },
  { title: "Personal Injury", icon: Shield, path: "/practice-areas/personal-injury", desc: "Auto accidents, premises liability, investigation, and negotiation." },
  { title: "Land Use & Zoning", icon: Building, path: "/practice-areas/land-use-zoning", desc: "Vested rights, permitting disputes, and local government matters." },
  { title: "Probate & Estates", icon: FileText, path: "/practice-areas/probate-estate-administration", desc: "Summary and formal administration, creditor issues, and guardianship referrals." },
  { title: "Business Disputes", icon: Building, path: "/practice-areas/business-llc-disputes", desc: "LLC member disputes, dissolution, collections, and consumer claims." },
];

const whyChooseUs = [
  "Responsive communication — you'll hear from us, not an answering service",
  "Clear legal strategy explained in plain terms",
  "Deep Florida-specific experience across multiple practice areas",
  "Courtroom readiness backed by thorough preparation",
  "Negotiation strength rooted in documentation and evidence",
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="The Desai Firm | Saint Augustine Attorney | Florida Lawyer"
        description="Saint Augustine attorney Paras J. Desai provides results-driven legal representation in family law, civil litigation, personal injury, and more across Northeast Florida."
        canonical="https://desaifirm.com/"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Saint Augustine, Florida historic downtown and Bridge of Lions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container-legal px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="gold-divider mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Saint Augustine Attorney Focused on Practical, Results-Driven Representation.
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl mb-8 leading-relaxed">
              Clarity, responsiveness, and a well-defined legal strategy — because your case deserves more than guesswork. Paras J. Desai represents clients across Northeast Florida with candor and conviction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold px-8 text-base w-full sm:w-auto">
                  Request a Free Consultation
                </Button>
              </Link>
              <a href="tel:9045636952">
                <Button size="lg" variant="outline" className="border-white/80 bg-white/15 text-white hover:bg-white/25 font-semibold px-8 text-base w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  (904) 563-6952
                </Button>
              </a>
            </div>
            <p className="text-primary-foreground/50 text-xs mt-6">
              Florida Bar Licensed · Results and outcomes vary; no guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Practice Areas</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="group p-8 rounded-lg border border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <area.icon className="w-10 h-10 text-accent mb-5" />
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.desc}</p>
                <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="section-padding bg-cream">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why The Desai Firm</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Clients Choose Us
              </h2>
              <div className="gold-divider mb-8" />
              <ul className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-lg p-10 text-center">
              <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Practical Legal Counsel
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                We focus on real solutions — not billable complexity. Every strategy is built to move your matter forward efficiently and effectively.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-white/80 bg-white/15 text-white hover:bg-white/25">
                  About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Served */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Service Area</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Serving Northeast Florida</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["St. Johns County", "Flagler County", "Duval County", "Clay County", "Putnam County", "Volusia County"].map((c) => (
              <div key={c} className="flex items-center gap-2 bg-muted px-5 py-3 rounded-lg">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/counties-served" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-cream">
        <div className="container-legal text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Browse our frequently asked questions covering family law, civil disputes, personal injury, and more.
          </p>
          <Link to="/resources">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
              View FAQs & Resources
            </Button>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
