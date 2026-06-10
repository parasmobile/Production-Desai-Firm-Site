import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Use | The Desai Firm"
        description="Terms of use for The Desai Law Firm LLC website."
        canonical="https://desaifirm.com/terms"
      />

      <PageHero title="Terms of Use" breadcrumb="Terms" />

      <section className="section-padding bg-background">
        <div className="container-legal max-w-3xl prose text-foreground/80 space-y-6">
          <p><strong>Effective Date:</strong> {new Date().getFullYear()}</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Acceptance of Terms</h2>
          <p>By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">No Attorney-Client Relationship</h2>
          <p>Use of this website, including submission of the contact form, does not create an attorney-client relationship between you and The Desai Law Firm LLC or Paras J. Desai, Esq. An attorney-client relationship is established only through a signed engagement letter.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Informational Purposes Only</h2>
          <p>The content on this website is provided for general informational purposes only and does not constitute legal advice. The information may not reflect the most current legal developments and should not be relied upon as a substitute for consultation with a qualified attorney.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">No Guarantees</h2>
          <p>Past results do not guarantee future outcomes. Every legal matter depends on its specific facts and circumstances. The Desai Firm makes no guarantees or warranties regarding the outcome of any legal matter.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Advertising Disclaimer</h2>
          <p>The hiring of a lawyer is an important decision that should not be based solely upon advertisements. The information on this website is not intended as advertising in any jurisdiction where such advertising would violate applicable rules of professional conduct.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Limitation of Liability</h2>
          <p>The Desai Law Firm LLC shall not be liable for any damages arising from the use of or inability to use this website or the information contained herein.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of the State of Florida.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>Questions about these Terms of Use may be directed to pd@desaifirm.com or (904) 563-6952.</p>
        </div>
      </section>
    </>
  );
};

export default Terms;
