import { useState } from "react";

// Florida F.S. 61.30 income shares schedule (approximate monthly amounts)
// [combined_net_income, 1_child, 2_children, 3_children, 4_children, 5_children, 6_children]
const SCHEDULE: [number, number, number, number, number, number, number][] = [
  [800,   74,   97,  110,  122,  136,  148],
  [1000,  164,  216,  244,  271,  302,  330],
  [1200,  193,  255,  288,  320,  356,  389],
  [1400,  221,  292,  330,  366,  408,  446],
  [1600,  247,  326,  368,  409,  455,  498],
  [1800,  272,  359,  406,  451,  502,  549],
  [2000,  297,  393,  444,  493,  549,  601],
  [2500,  352,  466,  526,  584,  650,  712],
  [3000,  408,  539,  609,  676,  752,  823],
  [3500,  462,  611,  690,  766,  852,  933],
  [4000,  516,  682,  771,  856,  952, 1043],
  [4500,  570,  754,  852,  946, 1052, 1152],
  [5000,  624,  825,  932, 1035, 1151, 1261],
  [6000,  730,  965, 1090, 1210, 1346, 1474],
  [7000,  836, 1105, 1249, 1386, 1542, 1688],
  [8000,  942, 1246, 1408, 1562, 1737, 1902],
  [10000, 1092, 1444, 1631, 1811, 2014, 2205],
  [12000, 1172, 1550, 1752, 1945, 2162, 2368],
  [15000, 1282, 1695, 1916, 2126, 2364, 2590],
];

function getBaseSupport(combinedIncome: number, numChildren: number): number {
  const col = Math.min(numChildren, 6) - 1;
  if (combinedIncome <= SCHEDULE[0][0]) return SCHEDULE[0][col + 1];
  const last = SCHEDULE[SCHEDULE.length - 1];
  if (combinedIncome >= last[0]) {
    // Above max: extrapolate using last two rows
    const prev = SCHEDULE[SCHEDULE.length - 2];
    const slope = (last[col + 1] - prev[col + 1]) / (last[0] - prev[0]);
    return last[col + 1] + slope * (combinedIncome - last[0]);
  }
  for (let i = 1; i < SCHEDULE.length; i++) {
    if (combinedIncome <= SCHEDULE[i][0]) {
      const lo = SCHEDULE[i - 1];
      const hi = SCHEDULE[i];
      const t = (combinedIncome - lo[0]) / (hi[0] - lo[0]);
      return lo[col + 1] + t * (hi[col + 1] - lo[col + 1]);
    }
  }
  return 0;
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function Field({ label, hint, value, onChange, prefix = "$" }: {
  label: string; hint?: string; value: string; onChange: (v: string) => void; prefix?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1">{label}</label>
      {hint && <p className="text-xs text-muted-foreground mb-1.5">{hint}</p>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">{prefix}</span>
        <input
          type="number"
          min="0"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full pl-7 pr-3 py-2.5 border border-border rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
      </div>
    </div>
  );
}

export default function ChildSupportCalculator() {
  const [p1Income, setP1Income] = useState("");
  const [p2Income, setP2Income] = useState("");
  const [children, setChildren] = useState("1");
  const [childcare, setChildcare] = useState("");
  const [insurance, setInsurance] = useState("");
  const [p1Nights, setP1Nights] = useState("");
  const [result, setResult] = useState<null | {
    base: number;
    p1Share: number;
    p2Share: number;
    totalObligation: number;
    p1Obligation: number;
    p2Obligation: number;
    netPayer: "Parent 1" | "Parent 2" | "Neither";
    netAmount: number;
    timesharingApplied: boolean;
  }>(null);

  function calculate() {
    const p1 = parseFloat(p1Income) || 0;
    const p2 = parseFloat(p2Income) || 0;
    const n = parseInt(children) || 1;
    const cc = parseFloat(childcare) || 0;
    const ins = parseFloat(insurance) || 0;
    const nights1 = parseFloat(p1Nights) || 0;
    const nights2 = 365 - nights1;

    if (p1 + p2 === 0) return;

    const combined = p1 + p2;
    const p1Pct = p1 / combined;
    const p2Pct = p2 / combined;

    // Base support from schedule
    const base = getBaseSupport(combined, n);

    // Add childcare and insurance proportionally
    const totalObligation = base + cc + ins;
    const p1Obligation = totalObligation * p1Pct;
    const p2Obligation = totalObligation * p2Pct;

    // Timesharing adjustment (F.S. 61.30(11)(b)) if >= 73 overnights (20%)
    const timesharingApplied = nights1 >= 73;
    let p1Net = p1Obligation;
    let p2Net = p2Obligation;

    if (timesharingApplied) {
      const adjusted = totalObligation * 1.5;
      p1Net = adjusted * (nights2 / 365) * p1Pct;
      p2Net = adjusted * (nights1 / 365) * p2Pct;
    }

    const diff = p1Net - p2Net;
    let netPayer: "Parent 1" | "Parent 2" | "Neither";
    let netAmount: number;
    if (Math.abs(diff) < 1) {
      netPayer = "Neither";
      netAmount = 0;
    } else if (diff > 0) {
      netPayer = "Parent 1";
      netAmount = diff;
    } else {
      netPayer = "Parent 2";
      netAmount = Math.abs(diff);
    }

    setResult({
      base,
      p1Share: p1Pct,
      p2Share: p2Pct,
      totalObligation,
      p1Obligation: p1Net,
      p2Obligation: p2Net,
      netPayer,
      netAmount,
      timesharingApplied,
    });
  }

  return (
    <div className="not-prose my-8 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="bg-primary px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground">Florida Child Support Estimator</h3>
            <p className="text-primary-foreground/60 text-xs">Based on F.S. 61.30 income shares model</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <Field label="Parent 1 Net Monthly Income" hint="After taxes & mandatory deductions" value={p1Income} onChange={setP1Income} />
          <Field label="Parent 2 Net Monthly Income" hint="After taxes & mandatory deductions" value={p2Income} onChange={setP2Income} />
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Number of Children</label>
            <select
              value={children}
              onChange={e => setChildren(e.target.value)}
              className="w-full px-3 py-2.5 border border-border rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            >
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <Field label="Parent 1 Overnights Per Year" hint="Out of 365 total (e.g. 182 = ~50/50)" value={p1Nights} onChange={setP1Nights} prefix="#" />
          <Field label="Monthly Childcare Costs" hint="Work-related only; shared proportionally" value={childcare} onChange={setChildcare} />
          <Field label="Child Health Insurance Premium" hint="Monthly cost for child's coverage only" value={insurance} onChange={setInsurance} />
        </div>

        <button
          onClick={calculate}
          className="w-full inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground hover:bg-gold-light font-semibold px-6 py-3 text-sm transition-colors"
        >
          Calculate Estimate
        </button>

        {result && (
          <div className="mt-6 space-y-4">
            {/* Main result */}
            <div className={`rounded-lg p-5 ${result.netPayer === "Neither" ? "bg-muted" : "bg-primary/5 border border-primary/20"}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Estimated Monthly Payment</p>
              {result.netPayer === "Neither" ? (
                <p className="font-heading text-2xl font-bold text-foreground">Approximately equal obligations</p>
              ) : (
                <>
                  <p className="font-heading text-3xl font-bold text-foreground">{fmt(result.netAmount)}<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                  <p className="text-sm text-muted-foreground mt-1">paid by <strong className="text-foreground">{result.netPayer}</strong> to the other parent</p>
                </>
              )}
            </div>

            {/* Breakdown */}
            <div className="bg-muted/50 rounded-lg p-5 space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Breakdown</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div className="text-muted-foreground">Base support (schedule)</div>
                <div className="text-foreground font-medium text-right">{fmt(result.base)}</div>
                <div className="text-muted-foreground">Total obligation (with add-ons)</div>
                <div className="text-foreground font-medium text-right">{fmt(result.totalObligation)}</div>
                <div className="text-muted-foreground">Parent 1 income share</div>
                <div className="text-foreground font-medium text-right">{(result.p1Share * 100).toFixed(1)}%</div>
                <div className="text-muted-foreground">Parent 2 income share</div>
                <div className="text-foreground font-medium text-right">{(result.p2Share * 100).toFixed(1)}%</div>
                {result.timesharingApplied && (
                  <>
                    <div className="text-muted-foreground col-span-2 pt-1 border-t border-border mt-1 text-xs">Timesharing adjustment applied (≥73 overnights)</div>
                  </>
                )}
                <div className="text-muted-foreground">Parent 1 net obligation</div>
                <div className="text-foreground font-medium text-right">{fmt(result.p1Obligation)}</div>
                <div className="text-muted-foreground">Parent 2 net obligation</div>
                <div className="text-foreground font-medium text-right">{fmt(result.p2Obligation)}</div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground italic leading-relaxed border-t border-border pt-4">
              <strong className="not-italic text-foreground">Estimate only.</strong> This calculator approximates Florida's guideline amount under F.S. 61.30 and does not account for all statutory factors, deviations, or case-specific circumstances. Actual court-ordered support may differ. Consult a licensed Florida attorney for advice on your specific situation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
