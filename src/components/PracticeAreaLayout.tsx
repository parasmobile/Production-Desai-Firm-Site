import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

interface FAQ {
  q: string;
  a: string;
}

interface PracticeAreaLayoutProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  canonical?: string;
  breadcrumb: string;
  heroSubtitle: string;
  overview: ReactNode;
  commonIssues: string[];
  whatWeDo: string[];
  whatToExpect: string[];
  faqs: FAQ[];
}

const PracticeAreaLayout = ({
  title, seoTitle, seoDescription, canonical, breadcrumb, heroSubtitle,
  overview, commonIssues, whatWeDo, whatToExpect, faqs
}: PracticeAreaLayoutProps) => {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonical} />
      <PageHero title={title} subtitle={heroSubtitle} breadcrumb={breadcrumb} />

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-legal max-w-4xl">
          <div className="prose text-foreground/80 space-y-4 text-lg leading-relaxed">
            {overview}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-cream">
        <div className="container-legal max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">Common Issues We Handle</h2>
          <div className="gold-divider mb-8" />
          <ul className="grid md:grid-cols-2 gap-3">
            {commonIssues.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container-legal max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">What We Do</h2>
          <div className="gold-divider mb-8" />
          <ul className="space-y-3">
            {whatWeDo.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-cream">
        <div className="container-legal max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">What to Expect</h2>
          <div className="gold-divider mb-8" />
          <ul className="space-y-3">
            {whatToExpect.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-legal max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="gold-divider mb-8" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-8 italic">
            This information is for general educational purposes only and does not constitute legal advice. Consult with an attorney for advice specific to your situation.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default PracticeAreaLayout;
