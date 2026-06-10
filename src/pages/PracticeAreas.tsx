import { Link } from "react-router-dom";
import { Users, Scale, Shield, Building, FileText, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const areas = [
  { title: "Family Law", icon: Users, path: "/practice-areas/family-law", desc: "Divorce, paternity, child support, timesharing modifications, and custody matters. We emphasize de-escalation when possible and litigation readiness when necessary." },
  { title: "Civil Litigation", icon: Scale, path: "/practice-areas/civil-litigation", desc: "Contract disputes, consumer claims, injunctions, and business conflicts. We emphasize early case assessment to identify the most efficient path forward." },
  { title: "Personal Injury", icon: Shield, path: "/practice-areas/personal-injury", desc: "Auto accidents, premises liability, slip and fall injuries. We focus on thorough investigation, documentation, and aggressive negotiation." },
  { title: "Land Use & Zoning", icon: Building, path: "/practice-areas/land-use-zoning", desc: "Vested rights, permitting disputes, and local government matters. Regional experience across Northeast Florida including the Flagler County area." },
  { title: "Probate & Estate Administration", icon: FileText, path: "/practice-areas/probate-estate-administration", desc: "Summary and formal administration, creditor disputes, and guardianship-adjacent referrals. We guide families through the probate process with care." },
  { title: "Business & LLC Disputes", icon: Building, path: "/practice-areas/business-llc-disputes", desc: "Member disputes, dissolution, collections, and FDUTPA-adjacent consumer and business claims. We protect your business interests." },
];

const PracticeAreas = () => {
  return (
    <>
      <SEOHead
        title="Practice Areas | The Desai Firm | Saint Augustine Attorney"
        description="The Desai Firm provides legal representation in family law, civil litigation, personal injury, land use, probate, and business disputes across Northeast Florida."
        canonical="https://desaifirm.com/practice-areas"
      />

      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive legal representation across six core practice areas, serving individuals and businesses throughout Northeast Florida."
        breadcrumb="Practice Areas"
      />

      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="group p-8 rounded-lg border border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <area.icon className="w-12 h-12 text-accent mb-6" />
                <h2 className="font-heading text-2xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PracticeAreas;
