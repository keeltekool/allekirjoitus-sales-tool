# Allekirjoitus Sales Template Tool

## What this is
Multi-brand sales enablement tool for SK ID Solutions KA managers. Generates branded Enterprise proposals via onboarding flow + sidebar toggles + live preview editor. Output is print-to-PDF. Brand-driven (multi-tenant) architecture — Allekirjoitus.fi is first brand.

## Read first
- `PRD_Sales_Template_Tool_v2.md` — FULL PRD with every decision and spec
- `docs/plans/2026-04-25-sales-template-tool-implementation.md` — 28-task build plan
- `reference/` — style reference HTML templates (pixel-match required)

## Current build state (2026-04-26)
**DEPLOYED:** allekirjoitus-sales-tool.vercel.app
**GitHub:** keeltekool/allekirjoitus-sales-tool
**Neon:** allekirjoitus-sales-tool (EU Frankfurt)

### What works RIGHT NOW:
- Brand-driven architecture (BrandProvider, `[brand]` routing, CSS vars from config)
- Fonts verified (Metropolis via next/font/local, Barlow Condensed via next/font/google)
- KB parser reads all sections from markdown files
- **All 4 templates working:** Enterprise Offer, Feature Introduction, Pricing Proposal, Price List
- Template selector dropdown in sidebar + template router in EditorLayout
- **Onboarding flow** — language selector (FI/EN), customer name input, template type cards → creates editor session
- **Language switching** — FI/EN flows through BrandProvider to all UI strings, KB files, date formatting
- AppShell manages onboarding → editor transition, loads all 8 KB files server-side
- Sidebar with layer toggles (6 layers), depth switch (Overview/Detail), pricing sub-blocks (4), custom blocks
- Sidebar adapts per template: depth hidden for Price List + Pricing Proposal, layers hidden for Price List
- Pricing block component with 4 tiered sub-blocks (Transaction/Monthly/Setup/Add-ons)
- **Service Terms** — two-tier (overview 10 items / detail 5 grouped sections), depth-toggleable, from T&C PDF
- **Deletable rows** — edit mode hover shows X button on pricing rows, KB cards, list items, terms sections
- **Pricing Proposal** — proper sales proposal flow: intro, "Your Enterprise Solution" value props, pricing hero, value note. No content layers/depth — proposal-grade fixed copy.
- Customer Context block (empty paste area, toggle-controlled)
- Edit mode toggle with contenteditable on all text
- CTA band with configurable sender contact (set in onboarding, defaults to Terhi Roll)
- **Onboarding sender fields** — name, title, phone, email, pre-filled from brand config, editable per document
- **"‹ Settings" back button** — top of sidebar, returns to onboarding to change defaults
- **Print / Export PDF button** — sidebar, triggers browser print dialog
- **PDF Format selector** — Continuous (one long page, `210mm x 14000mm`) or A4 (paginated). Set in onboarding.
- **Print CSS** — proper margins, all editor UI hidden, `break-inside: avoid` on all blocks. All `@page` rules via dynamic style tag (no static conflict).
- **Scroll reset** — on document create, template switch, and depth change
- **Edit mode state** — lifted to EditorLayout, syncs body class, resets on template switch (no desync)
- **Desktop-only guard** — blocks editor below 900px with branded "Desktop View Required" message
- **localStorage autosave** — persists session + editor state after content is edited (input on contentEditable). Resume banner on reload with customer name + timestamp. Clears on "Back to Settings".
- **PDF filename** — dynamic `document.title` before print: `Brand_Template_Customer_Date`
- **Localized pricing** — all pricing labels, descriptions, table headers in EN/FI via `pricing-data.ts`. EUR amounts shared, only text localized.
- **English default language** — EN selected by default on onboarding

### What's NOT built yet:
- Neon DB integration — brand config migration from static TypeScript to DB (do together with presets/drafts)
- Password auth gate (SITE_PASSWORD env var, cookie-based)
- Price List validity date + version number
- Detail KB Parts 2-5 rewrite (match Part 1 quality)

### FROZEN (documented, not building now):
- **Password auth** — Simple middleware: check cookie → redirect to `/login`. `SITE_PASSWORD` env var.
- **Presets save/load** — Drizzle `presets` table. Start with hardcoded built-in presets (no DB needed), then add save/load when DB exists.

### KB files (render-optimized):
- `MASTER_KB_OVERVIEW_EN.md` — Overview depth, structured key points (ALL parts rewritten)
- `MASTER_KB_RENDER_EN.md` — Detail depth, structured labeled items (Part 1 rewritten, Parts 2-5 done)
- `TERMS_OVERVIEW_EN.md` — 10 key service terms (overview depth)
- `TERMS_DETAIL_EN.md` — 5 grouped sections with comprehensive sub-items (detail depth)
- `TERMS_OVERVIEW_FI.md` — 10 key service terms in Finnish (overview depth)
- `TERMS_DETAIL_FI.md` — 5 grouped sections with comprehensive sub-items in Finnish (detail depth)
- Finnish KB versions exist but not yet render-optimized

### Known issues:
- Detail KB Parts 2-5 content quality uneven — needs same rewrite treatment as Part 1 (default-only focus)
- Print output not yet validated by real KA — page breaks, fonts, spacing in actual PDF need real-world testing
- `.gitignore` must include `node_modules/`, `.next/`, `.vercel/`

### Future vision (from external analysis + discussion):
- **Enterprise Offer Engine** — guided questionnaire (8-10 questions about customer) auto-selects layers, pricing, add-ons. Replaces manual sidebar toggling for most use cases.
- **Customer-facing subset** — interactive read-only version via shareable link. Customer explores features, toggles interest areas, KA gets engagement analytics. Near-term: "Customer View" export as clean HTML page with unique URL + scroll tracking.
- **Hardcoded presets** — "New Enterprise customer", "Pricing renewal", "API integration offer" etc. No DB needed.
- **Sender persistence** — localStorage for sender defaults separate from draft autosave.
- See `docs/analysis/2026-04-26-sales-tool-teardown-and-roadmap.md` for full external analysis.

## Tech stack
- **Next.js** (latest) + **Tailwind CSS**
- **Neon** (PostgreSQL) + **Drizzle ORM** — brand config, presets (NOT YET CONNECTED)
- **Vercel** deployment
- Fonts: Metropolis (self-hosted next/font/local) + Barlow Condensed (next/font/google)

## Architecture rules
- **Tenant = Brand.** No hardcoded brand values. Everything from BrandProvider.
- **KB in repo** not Google Drive. Depth toggle = file swap.
- **Pricing separate from content.** EUR amounts only in pricing block.
- **Section numbers stripped.** KB uses `## X.Y Title` internally, rendered output shows title only.
- **Reference HTMLs = style references,** not content blueprints. Tool produces flexible combinations.

## Design system (non-negotiable)
- Body: Metropolis 17px/1.65, Heading: Barlow Condensed
- Brand orange: #ef4224, CTA: #e23013, Dark: #170703
- Cards: white bg, 1.6px gray border (#bebdbd), 20px radius
- List markers: orange › (\203A), NOT dots
- Print: @media print with exact specs from reference HTML

## Key files
```
src/lib/brand-config.ts          — BrandConfig type + getBrandConfig()
src/lib/brand-configs/allekirjoitus.ts — static Allekirjoitus config
src/lib/brand-context.tsx        — BrandProvider + useBrand() hook
src/lib/kb-parser.ts             — markdown → KBDocument parser
src/lib/kb-loader.ts             — file loader
src/lib/types.ts                 — all TypeScript types
src/lib/fonts.ts                 — Metropolis + Barlow Condensed setup
src/hooks/useEditorState.ts      — editor state management
src/components/AppShell.tsx       — onboarding → editor transition, language state
src/components/onboarding/       — OnboardingForm (language, customer, template selector)
src/components/shared/           — Header, TitleBlock, PricingCard, CTABand, Footer, EditToggle, Deletable
src/components/content/          — KBSection, StatusBadge, LayerHeader, TermsBlock
src/components/pricing/          — PricingBlock
src/components/editor/           — Sidebar (template selector + adaptive controls), EditorLayout (template router)
src/components/templates/        — EnterpriseOffer, FeatureIntroduction, PricingProposal, PriceList
src/app/[brand]/layout.tsx       — brand routing + CSS var injection (no BrandProvider — AppShell handles it)
src/app/[brand]/page.tsx         — loads all 8 KB files, renders AppShell
```
