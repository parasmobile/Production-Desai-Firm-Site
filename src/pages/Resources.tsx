import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const faqs = [
  { q: "How do I know if I need an attorney?", a: "If you're facing a legal dispute, potential lawsuit, family law issue, or any situation where your rights or finances are at stake, consulting with an attorney is generally advisable. An initial consultation can help you understand your options and whether legal representation is appropriate.", category: "General" },
  { q: "What should I bring to my first consultation?", a: "Bring any relevant documents — contracts, court papers, correspondence, medical records, police reports, or photographs. The more information we have, the better we can evaluate your situation and provide practical guidance.", category: "General" },
  { q: "How much does a consultation cost?", a: "Contact our office to discuss consultation fees and arrangements. We believe in transparency about costs from the very first conversation.", category: "General" },
  { q: "How long does a divorce take in Florida?", a: "Uncontested divorces can be finalized in as few as 30 days. Contested divorces typically take 6 to 12 months or longer depending on the complexity of asset division, custody disputes, and other factors.", category: "Family Law" },
  { q: "What factors does a court consider for child custody?", a: "Florida courts evaluate the 'best interests of the child,' considering factors such as each parent's capacity to meet the child's needs, the stability of each home environment, the child's established routine, and the willingness of each parent to support the other's relationship with the child.", category: "Family Law" },
  { q: "What should I do after a car accident?", a: "Seek medical attention, report the accident to law enforcement, document the scene with photographs, exchange information with other parties, and contact an attorney before giving recorded statements to insurance companies.", category: "Personal Injury" },
  { q: "How long do I have to file a personal injury claim?", a: "Florida's statute of limitations for most personal injury claims is two years from the date of injury (subject to recent legislative modifications). Some situations have shorter or longer deadlines, so prompt consultation with an attorney is important.", category: "Personal Injury" },
  { q: "What is probate and do I need it?", a: "Probate is the court-supervised process of administering a deceased person's estate. If the decedent owned assets solely in their name without a designated beneficiary, probate is generally required to transfer those assets to heirs or beneficiaries.", category: "Probate" },
  { q: "Can I handle a business dispute without going to court?", a: "Many business disputes can be resolved through negotiation, mediation, or arbitration without a full trial. However, having an attorney involved early helps ensure your rights are protected and that any settlement is fair and enforceable.", category: "Business" },
  { q: "What is FDUTPA and how does it affect my business?", a: "The Florida Deceptive and Unfair Trade Practices Act (FDUTPA) protects consumers and businesses from unfair competition and deceptive practices. Violations can result in injunctions, actual damages, and attorney's fees. If you believe you've been the victim of deceptive business practices — or have been accused of them — legal counsel is essential.", category: "Business" },
  { q: "How do zoning disputes work?", a: "Zoning disputes typically arise when a property owner seeks to use land in a way that conflicts with current zoning regulations, or when a local government attempts to change zoning classifications. These disputes may be resolved through variance applications, appeals to local boards, or litigation in circuit court.", category: "Land Use" },
  { q: "Do you handle cases outside of Northeast Florida?", a: "Our primary service area covers St. Johns, Flagler, Duval, Clay, Putnam, and Volusia Counties. We may accept matters in other Florida counties depending on the circumstances. Contact us to discuss your situation.", category: "General" },
];

const Resources = () => {
  return (
    <>
      <SEOHead
        title="Legal Resources & FAQs | The Desai Firm | Saint Augustine"
        description="Frequently asked questions about family law, personal injury, civil litigation, probate, and more from The Desai Firm in Saint Augustine, Florida."
        canonical="https://desaifirm.com/resources"
      />

      <PageHero
        title="Resources & FAQs"
        subtitle="Answers to common legal questions across our practice areas."
        breadcrumb="Resources"
      />

      <section className="section-padding bg-background">
        <div className="container-legal max-w-4xl">
          <div className="bg-cream border border-border rounded-lg p-6 mb-12">
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong className="text-foreground">Important Disclaimer:</strong> The information provided on this page is for general educational and informational purposes only. It does not constitute legal advice, and reading this information does not create an attorney-client relationship between you and The Desai Law Firm LLC. Legal outcomes depend on the specific facts and circumstances of each case. Do not rely on this information as a substitute for consultation with a qualified attorney. No attorney-client relationship is established until a signed engagement letter is in place.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border pb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">{faq.category}</span>
                </div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-3">{faq.q}</h2>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Contact The Desai Firm to discuss your specific legal matter with an attorney."
      />
    </>
  );
};

export default Resources;
