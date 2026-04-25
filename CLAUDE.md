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
- Dynamic Enterprise Offer template rendering from KB data
- Sidebar with layer toggles (6 layers), depth switch (Overview/Detail), pricing sub-blocks (4), custom blocks
- Pricing block component with 4 tiered sub-blocks (Transaction/Monthly/Setup/Add-ons)
- Customer Context block (empty paste area)
- Edit mode toggle with contenteditable on all text
- CTA band with Terhi Roll contact from brand config
- All content in English (language fixed to EN for now)

### What's NOT built yet:
- Feature Introduction, Pricing Proposal, Price List templates (only Enterprise Offer works)
- Template selector / router
- Onboarding flow (language, customer name, template type)
- Language switching (FI/EN) — KB files exist but app hardcoded to EN
- Neon DB integration — brand config is static TypeScript, not DB
- Presets (save/load from Neon)
- What's Included auto-population
- Password auth
- Print optimization verification

### KB files (render-optimized):
- `MASTER_KB_OVERVIEW_EN.md` — Overview depth, structured key points (ALL parts rewritten)
- `MASTER_KB_RENDER_EN.md` — Detail depth, structured labeled items (Part 1 rewritten, Parts 2-5 done)
- Finnish versions exist but not yet render-optimized

### Known issues:
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
src/components/shared/           — Header, TitleBlock, PricingCard, CTABand, Footer, EditToggle
src/components/content/          — KBSection, StatusBadge, LayerHeader
src/components/pricing/          — PricingBlock
src/components/editor/           — Sidebar, EditorLayout
src/components/templates/        — EnterpriseOffer, PricingProposal (static)
src/app/[brand]/layout.tsx       — brand routing + CSS var injection
src/app/[brand]/page.tsx         — loads KB, renders EditorLayout
```
