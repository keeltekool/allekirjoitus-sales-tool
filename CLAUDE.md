# Allekirjoitus Sales Template Tool

## What this is
A multi-brand sales enablement tool. KA managers assemble branded, professional proposals and feature introductions for Enterprise customers via an onboarding flow + sidebar + live preview editor. Output is print-to-PDF via browser. Brand-driven (multi-tenant) architecture — Allekirjoitus.fi is the first brand, Smart-ID and SK Corporate can be added by creating a new tenant folder.

## Read first
- `PRD_Sales_Template_Tool_v2.md` — CURRENT PRD (v2). All architecture decisions, specs, and build plan.
- `reference/` — style reference HTML templates. Define exact output quality. NOT content blueprints — the tool produces flexible combinations.
- `knowledge-base/MASTER_KB_v2.md` — canonical English KB (pricing separated from content)

## Tech stack
- **Next.js** (latest) + **Tailwind CSS**
- **Neon** (PostgreSQL) + **Drizzle ORM** — brand config, presets
- **Vercel** deployment with shared password auth
- Fonts: Metropolis (self-hosted via `next/font/local`) + Barlow Condensed (`next/font/google`)

## Architecture
- **Tenant = Brand.** Each brand is a self-contained folder: fonts, logos, KB files.
- **KB in repo** (not Google Drive). Depth toggle swaps between Overview and Detail KB files.
- **Pricing separated from content.** EUR amounts only in Part 6 / pricing block. Content sections have status labels only.
- **4 templates:** Enterprise Offer, Feature Introduction, Pricing Proposal, Price List
- **Pricing block** has 4 tiered sub-blocks: Transaction / Monthly / Setup / Add-ons — each independently toggleable.
- **Sidebar:** 6 layer toggles + custom blocks + pricing sub-blocks + depth toggle. NOT 42 checkboxes.
- **Subtractive model:** Start with complete layers, remove unwanted sections in edit mode.
- **Section numbers stripped:** KB uses `## X.Y Title` internally. Rendered output shows title only.

## Folder structure
```
/public/tenants/allekirjoitus/
  logos/           — SVG logos
  fonts/           — Metropolis .otf files (5 weights)
  kb/              — MASTER_KB_OVERVIEW_EN.md, MASTER_KB_v2.md (detail), FI versions
/reference/        — style reference HTML per template type (EN only, design guide)
/knowledge-base/   — working KB files (copied to tenant folder for deployment)
/design-system/    — source brand assets, guidelines, portal rebrand materials
```

## KB files (4 per brand — 2 depths × 2 languages)
| File | Depth | Language |
|------|-------|---------|
| `MASTER_KB_OVERVIEW_EN.md` | Overview | English |
| `MASTER_KB_v2.md` | Detail | English |
| `MASTER_KB_OVERVIEW_FI.md` | Overview | Finnish |
| `MASTER_KB_DETAIL_FI.md` | Detail | Finnish |

## Design system rules (non-negotiable)
- Body font: Metropolis (local .otf), Heading font: Barlow Condensed (Google Fonts)
- Brand orange: #ef4224, CTA orange: #e23013, Dark sections: #170703
- Cards: white bg, 1.6px gray border (#bebdbd), 20px radius
- List markers: orange › character (Unicode \203A), NOT dots
- Body: 17px, line-height 1.65
- Reference HTML files are the DEFINITIVE design spec — pixel-match required

## Key decisions (PRD v2)
- Onboarding flow: Language → Customer name → Template type → Create
- Presets in sidebar (not onboarding gate) — built-in + user-saved in Neon
- Custom blocks: Customer Context (empty paste area), What's Included (auto-populated: Included / Configurable / Add-ons)
- CTA band: default contact from brand config (Terhi Roll, KAM), contenteditable
- Date auto-inserted (locale-formatted), editable
- AI-powered customer context = NEXT ITERATION (not MVP). Build must prepare: API routes, KB as plain text, streaming-ready UI, reserved DB schema. Pattern: CV-tailor-plus workspace.

## Previous PRD
- `PRD_Sales_Template_Tool_MVP.md` — original v1 PRD (preserved, superseded by v2)
