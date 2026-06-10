import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const counties = [
  {
    name: "St. Johns County",
    seat: "Saint Augustine",
    desc: "As our home base, The Desai Firm is deeply familiar with the St. Johns County Courthouse and the local legal community. We regularly handle matters in circuit and county court proceedings throughout St. Johns County, serving clients in Saint Augustine, Ponte Vedra Beach, St. Augustine Beach, and surrounding areas."
  },
  {
    name: "Flagler County",
    seat: "Palm Coast / Bunnell",
    desc: "We represent clients throughout Flagler County including Palm Coast and Bunnell. Our regional experience includes familiarity with the Flagler County Courthouse and local proceedings, and we have handled land use and litigation matters in the area."
  },
  {
    name: "Duval County",
    seat: "Jacksonville",
    desc: "The Desai Firm serves clients in Jacksonville and greater Duval County. As the largest city in Northeast Florida, Duval County matters are heard at the Duval County Courthouse, and we maintain active familiarity with its procedures and local rules."
  },
  {
    name: "Clay County",
    seat: "Green Cove Springs",
    desc: "We handle matters in Clay County, including cases filed at the Clay County Courthouse in Green Cove Springs. Our representation extends to clients in Orange Park, Fleming Island, Middleburg, and surrounding communities."
  },
  {
    name: "Putnam County",
    seat: "Palatka",
    desc: "The Desai Firm represents clients in Putnam County with matters heard at the Putnam County Courthouse in Palatka. We handle a range of civil, family, and litigation matters in this jurisdiction."
  },
  {
    name: "Volusia County",
    seat: "Daytona Beach / DeLand",
    desc: "Our practice extends to Volusia County, including the Daytona Beach and DeLand courthouses. We represent clients across the county in civil litigation, family law, and other practice areas."
  },
];

const CountiesServed = () => {
  return (
    <>
      <SEOHead
        title="Counties Served | Northeast Florida | The Desai Firm"
        description="The Desai Firm serves St. Johns, Flagler, Duval, Clay, Putnam, and Volusia Counties. Attorney Paras J. Desai represents clients across Northeast Florida."
        canonical="https://desaifirm.com/counties-served"
      />

      <PageHero
        title="Counties We Serve"
        subtitle="Representing clients across six Northeast Florida counties — plus statewide representation where permitted."
        breadcrumb="Counties Served"
      />

      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid md:grid-cols-2 gap-8">
            {counties.map((county) => (
              <div key={county.name} className="p-8 rounded-lg border border-border bg-card hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <h2 className="font-heading text-xl font-bold text-card-foreground">{county.name}</h2>
                    <p className="text-sm text-muted-foreground">{county.seat}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm">{county.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-cream rounded-lg text-center">
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Statewide Representation</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              In addition to our core Northeast Florida service area, The Desai Firm may accept matters in other Florida counties where circumstances warrant. Contact us to discuss your situation.
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CountiesServed;
