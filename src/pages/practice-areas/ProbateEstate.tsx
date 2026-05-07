import PracticeAreaLayout from "@/components/PracticeAreaLayout";

const ProbateEstate = () => (
  <PracticeAreaLayout
    title="Probate & Estate Administration"
    seoTitle="Probate Attorney | Estate Administration | The Desai Firm | Saint Augustine"
    seoDescription="Saint Augustine probate attorney handling summary and formal estate administration, creditor claims, and guardianship referrals in Northeast Florida."
    breadcrumb="Practice Areas / Probate & Estate Administration"
    heroSubtitle="Guiding families through the probate process with clarity, efficiency, and attention to detail."
    overview={
      <>
        <p>Losing a loved one is difficult enough without the added complexity of navigating the legal system. Probate and estate administration involve managing the deceased's assets, paying creditors, and distributing property to beneficiaries — all under court supervision and within specific legal timelines.</p>
        <p>The Desai Firm helps personal representatives (executors) and families navigate both summary and formal administration proceedings. We also assist with creditor claims, disputes among beneficiaries, and related matters. For guardianship needs, we can provide referrals to attorneys who focus in that specialized area.</p>
      </>
    }
    commonIssues={[
      "Summary administration (estates under statutory threshold)",
      "Formal administration",
      "Personal representative duties and obligations",
      "Creditor claims and disputes",
      "Will contests and challenges",
      "Beneficiary disputes",
      "Real property transfers through probate",
      "Guardianship referrals",
    ]}
    whatWeDo={[
      "Determine whether summary or formal administration is appropriate for the estate",
      "Prepare and file all required probate petitions and court documents",
      "Guide personal representatives through their fiduciary duties and legal obligations",
      "Manage creditor notifications, claims, and objections",
      "Resolve disputes among beneficiaries through negotiation or litigation",
      "Facilitate the transfer of real property and other assets through the probate process",
    ]}
    whatToExpect={[
      "An initial consultation to review the estate, existing documents, and family circumstances",
      "A clear explanation of the probate process, costs, and expected timeline",
      "Step-by-step guidance through court filings, notices, and accounting requirements",
      "Help navigating sensitive family dynamics with professionalism and discretion",
      "Coordination with accountants, appraisers, and other professionals as needed",
    ]}
    faqs={[
      { q: "What is the difference between summary and formal administration?", a: "Summary administration is a simplified process available for smaller estates (generally those with non-exempt assets valued under $75,000, or where the decedent has been dead for more than two years). Formal administration is required for larger or more complex estates and involves appointing a personal representative and a more detailed court process." },
      { q: "How long does probate take in Florida?", a: "Summary administration can be completed in a matter of weeks. Formal administration typically takes 6 to 12 months, though contested estates or those with complex assets may take longer." },
      { q: "Is probate required if there's a will?", a: "Generally, yes. A will must be admitted to probate to be effective. However, certain assets — such as those held in trust, jointly titled property, or accounts with designated beneficiaries — may pass outside of probate." },
    ]}
  />
);

export default ProbateEstate;
