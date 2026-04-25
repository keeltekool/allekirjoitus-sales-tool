# Allekirjoitus Sales Template Tool

## What this is
Multi-brand sales enablement tool for SK ID Solutions KA managers. Generates branded Enterprise proposals via onboarding flow + sidebar toggles + live preview editor. Output is print-to-PDF. Brand-driven (multi-tenant) architecture — Allekirjoitus.fi is first brand.

## Read first
- `PRD_Sales_Template_Tool_v2.md` — FULL PRD with every decision and spec
- `docs/plans/2026-04-25-sales-template-tool-implementation.md` — 28-task build plan
- `reference/` — style reference HTML templates (pixel-match required)

## Current build state (2026-04-25)
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
- **Print CSS** — proper margins (`12mm 14mm`), all editor UI hidden, `break-inside: avoid` on all blocks

### What's NOT built yet:
- Neon DB integration — brand config migration from static TypeScript to DB (NEXT)
- Finnish render-optimized terms files (EN used for both languages currently)

### FROZEN (documented, not building now):
- **Password auth** — Task 26 from plan. Simple middleware: check cookie → redirect to `/login`. `SITE_PASSWORD` env var. Global protection. Ready to implement when needed.
- **Presets save/load** — Tasks 22(partial)+25 from plan. Drizzle `presets` table (id, brand_id, name, template_type, layer_config JSONB, depth, pricing_config JSONB, is_builtin). Sidebar dropdown "Load preset..." + "Save as preset..." scoped per brand. Built-in presets from PRD Section 11. Requires Neon DB connection first.
- **Finnish render-optimized terms** — TERMS_OVERVIEW_FI.md + TERMS_DETAIL_FI.md. Translate from EN versions. Currently EN files used for both languages.

### KB files (render-optimized):
- `MASTER_KB_OVERVIEW_EN.md` — Overview depth, structured key points (ALL parts rewritten)
- `MASTER_KB_RENDER_EN.md` — Detail depth, structured labeled items (Part 1 rewritten, Parts 2-5 done)
- `TERMS_OVERVIEW_EN.md` — 10 key service terms (overview depth)
- `TERMS_DETAIL_EN.md` — 5 grouped sections with comprehensive sub-items (detail depth)
- Finnish KB versions exist but not yet render-optimized

### Known issues:
- **Print continuous mode needs verification** — `@page { size: 210mm 14000mm }` set via dynamic style tag, but static `@page` in globals.css may conflict. The static rule has `margin: 16mm 18mm` without `size`. Need to test that continuous actually produces one page in Chrome print-to-PDF. May need to remove the static `@page` and handle everything via dynamic injection.
- Overview KB Parts 2-5 content quality improved but may need further refinement per user feedback
- Detail KB (MASTER_KB_RENDER_EN.md) Parts 2-5 still need same treatment as Part 1 (default-only focus)
- `.gitignore` must include `node_modules/`, `.next/`, `.vercel/`

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
