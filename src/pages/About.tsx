import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import parasPortrait from "@/assets/paras-desai.jpg";

const values = [
  { title: "Candor", desc: "You'll hear the truth about your case — the strengths and the risks — so you can make informed decisions." },
  { title: "Preparation", desc: "Every case is built from the ground up with thorough research, documentation, and anticipation of opposing arguments." },
  { title: "Documentation", desc: "We maintain meticulous records so that nothing falls through the cracks and your position is always well-supported." },
  { title: "Client Communication", desc: "You'll know the status of your case, next steps, and timeline expectations. We return calls and emails promptly." },
];

const process = [
  { step: "01", title: "Intake & Evaluation", desc: "We start with a thorough review of your situation to understand the facts, your goals, and the realistic options available." },
  { step: "02", title: "Strategy Development", desc: "We create a tailored legal strategy focused on efficiency and your desired outcome — litigation, negotiation, or both." },
  { step: "03", title: "Execution", desc: "We implement the strategy with precision — filings, motions, depositions, negotiations — always keeping your objectives front and center." },
  { step: "04", title: "Regular Updates", desc: "You'll receive consistent case updates and have direct access to your attorney. No surprises, no information gaps." },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Paras J. Desai | The Desai Firm | Saint Augustine Attorney"
        description="Learn about attorney Paras J. Desai, Esq. and The Desai Firm's approach to practical, client-focused legal representation in Saint Augustine, Florida."
        canonical="https://desaifirm.com/about"
      />

      <PageHero
        title="About The Desai Firm"
        subtitle="Practical legal counsel built on preparation, candor, and clear communication."
        breadcrumb="About"
      />

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Attorney Profile</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Paras J. Desai, Esq.
              </h2>
              <div className="gold-divider mb-6" />
              <div className="prose text-foreground/80 space-y-4">
                <p>
                  Paras J. Desai is the founder and managing attorney of The Desai Law Firm LLC, based in Saint Augustine, Florida. He represents individuals, families, and businesses across Northeast Florida in matters ranging from family law and civil litigation to land use disputes and personal injury claims.
                </p>
                <p>
                  Paras brings a straightforward, practical approach to the law. He believes that effective legal representation starts with honest communication — clients deserve to understand the strengths and weaknesses of their case so they can make informed decisions about how to proceed.
                </p>
                <p>
                  Before founding The Desai Firm, Paras developed a broad litigation background that spans courtroom advocacy, negotiation, and transactional matters. This breadth of experience allows him to approach each case with a comprehensive perspective, identifying both risks and opportunities that might otherwise go unnoticed.
                </p>
                <p>
                  Licensed by the Florida Bar (No. 030827), Paras is committed to serving the communities of St. Johns, Flagler, Duval, Clay, Putnam, and Volusia Counties with integrity and dedication.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <img
                src={parasPortrait}
                alt="Paras J. Desai, Esq. — The Desai Law Firm"
                className="w-full h-[520px] object-cover object-[center_20%]"
                width={600}
                height={600}
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-primary-foreground text-sm font-medium">Florida Bar No. 030827</p>
                <p className="text-primary-foreground/70 text-xs">The Desai Law Firm LLC · Saint Augustine, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-legal">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">What Guides Our Practice</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Process</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-heading font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
