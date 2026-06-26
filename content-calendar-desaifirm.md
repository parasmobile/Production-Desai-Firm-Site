# Content Calendar: Q3 2026 Blog Coverage Gap

Staging plan for the 4 briefed posts in [content-briefs-desaifirm.md](content-briefs-desaifirm.md), staggered per that brief's own implementation note so they don't read as a single bulk launch to Google. Dates assume work starts the week of 2026-06-29.

| # | Publish Date | Slug | Title | Practice Area | Status |
|---|---|---|---|---|---|
| 1 | 2026-07-07 | `/blog/land-use-zoning-florida` | Land Use and Zoning Disputes in Florida: Vested Rights, Permitting, and What Property Owners Need to Know | Land Use & Zoning | Not started |
| 2 | 2026-07-21 | `/blog/probate-administration-florida` | Probate in Florida: Summary vs. Formal Administration and What Families Should Expect | Probate & Estate Administration | Not started |
| 3 | 2026-08-04 | `/blog/llc-business-disputes-florida` | LLC Member Disputes in Florida: Dissolution, Buyouts, and Resolving Business Conflicts | Business & LLC Disputes | Not started |
| 4 | 2026-08-18 | `/blog/civil-litigation-florida-guide` | Civil Litigation in Florida: How Contract and Consumer Disputes Move Through Court | Civil Litigation | Not started |

**Sequencing logic:**
- **Land use first** — per the brief, it's the lowest-competition term with the least local content, so it's the fastest realistic ranking win.
- **Probate second** — high-volume informational queries, no local competition, builds momentum.
- **Business/LLC third** — narrower audience but high-conversion; benefits from being published after the first two establish topical breadth.
- **Civil litigation last** — it's the connective-tissue post that links out to all three prior posts (land use, probate, business disputes) plus the existing personal injury/family law content, so it should publish once the others exist to link to.
- **~2-week spacing** between each gives Google time to crawl and index each post individually rather than seeing a batch of same-day publishes.

## Per-Post Checklist

Each post, when written:
- [ ] Built with `BlogPost.astro` component (matches existing 6 posts' pattern) — `Article` + `BreadcrumbList` JSON-LD generate automatically, no manual schema work needed
- [ ] `relatedLinks` prop points to its matching practice-area page + at least one other post in this batch (per brief's cross-linking note)
- [ ] Title tag under 60 characters where possible (the working titles above are descriptive but should be checked against the 50-60 char guideline before publish — several run long and may need trimming for the `<Layout title>` prop, similar to the trims already applied to probate/business-llc-disputes/land-use-zoning practice pages)
- [ ] FAQ block included with 3-4 questions, matching the outline in the brief
- [ ] Add the new post's link to the `relatedLinks` arrays of the existing 6 posts where topically adjacent (e.g., link the probate post from `divorce-florida-guide.astro` for estate/divorce overlap)
- [ ] After publish, confirm it appears in `dist/sitemap-0.xml` (automatic via `@astrojs/sitemap`, but worth a spot check)

## After This Batch

Once all 4 are live (target: 2026-08-18), revisit the SEO audit's other open items:
- Auto accident landing page (see brief above)
- HOA/foreclosure scope decision (see brief above) — resolve before adding any new practice-area content beyond this batch
