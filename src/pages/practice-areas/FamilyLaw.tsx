import { Link } from "react-router-dom";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

const FamilyLaw = () => (
  <PracticeAreaLayout
    title="Family Law"
    seoTitle="Family Law Attorney Saint Augustine FL | The Desai Firm"
    seoDescription="Saint Augustine family law attorney handling divorce, child custody, timesharing, paternity, child support, and modifications in St. Johns County and Northeast Florida."
    canonical="https://desaifirm.com/practice-areas/family-law"
    breadcrumb="Practice Areas / Family Law"
    heroSubtitle="Protecting families through divorce, custody disputes, and modifications with a focus on practical resolution."
    overview={
      <>
        <p>Family law matters are among the most personal and consequential legal issues a person can face. Whether you're navigating a divorce, a paternity case, or a dispute over child custody and timesharing, the stakes are high — and the process can be overwhelming.</p>
        <p>At The Desai Firm, we approach family law with the understanding that every situation is different. When possible, we pursue de-escalation and resolution through negotiation or mediation. When that isn't feasible, we are prepared to advocate aggressively in court. Our goal is always to achieve the best realistic outcome for you and your family.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6 not-prose">
          <Link to="/practice-areas/family-law/divorce" className="block p-5 rounded-lg border border-border bg-card hover:border-accent hover:shadow-md transition-all">
            <p className="font-heading font-semibold text-card-foreground text-lg mb-1">Divorce</p>
            <p className="text-muted-foreground text-sm">Contested and uncontested divorce, asset division, alimony, and marital property disputes.</p>
          </Link>
          <Link to="/practice-areas/family-law/child-custody" className="block p-5 rounded-lg border border-border bg-card hover:border-accent hover:shadow-md transition-all">
            <p className="font-heading font-semibold text-card-foreground text-lg mb-1">Child Custody & Timesharing</p>
            <p className="text-muted-foreground text-sm">Parenting plans, timesharing schedules, modifications, and relocation matters in Florida courts.</p>
          </Link>
        </div>
      </>
    }
    commonIssues={[
      "Contested and uncontested divorce",
      "Division of marital assets and debts",
      "Child custody and parental responsibility",
      "Timesharing schedules and disputes",
      "Paternity actions",
      "Child support establishment and enforcement",
      "Modification of existing orders",
      "Relocation cases",
      "Domestic violence injunctions",
      "Alimony (spousal support)",
    ]}
    whatWeDo={[
      "Evaluate your family situation and identify realistic legal options",
      "Prepare comprehensive financial disclosures and documentation",
      "Negotiate parenting plans and settlement agreements when appropriate",
      "Litigate contested matters with thorough preparation and courtroom advocacy",
      "Pursue or defend modification petitions based on substantial changes in circumstances",
      "Coordinate with mediators, guardians ad litem, and other professionals as needed",
    ]}
    whatToExpect={[
      "An initial consultation to understand your goals and the facts of your case",
      "A clear explanation of the legal process, timelines, and costs involved",
      "Regular case updates and responsive communication throughout your matter",
      "Honest assessments of strengths and risks — no false promises",
      "A strategy tailored to your priorities, whether that's settlement or trial",
    ]}
    faqs={[
      { q: "How long does a divorce take in Florida?", a: "An uncontested divorce can be finalized in as few as 30 days after filing. Contested divorces vary significantly depending on the complexity of the issues, but many are resolved within 6-12 months." },
      { q: "How is child custody determined in Florida?", a: "Florida uses the term 'parental responsibility' and 'timesharing' rather than custody. Courts consider the best interests of the child, evaluating factors such as each parent's ability to meet the child's needs, the child's established routine, and the willingness of each parent to facilitate the other's relationship with the child." },
      { q: "Can a parenting plan be modified?", a: "Yes, if there has been a substantial, material, and unanticipated change in circumstances since the last order was entered, and the modification serves the best interests of the child." },
    ]}
  />
);

export default FamilyLaw;
