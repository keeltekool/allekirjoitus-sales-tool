# Allekirjoitus Sales Template Tool — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a multi-brand sales enablement web app where KA managers create branded Enterprise proposals via onboarding flow + sidebar toggles + live preview editor, outputting pixel-perfect print-to-PDF documents.

**Architecture:** Next.js App Router with brand-driven multi-tenant design. Every brand-specific value (colors, fonts, logos, KB paths, contact info, locale) flows from a BrandProvider context — no component ever hardcodes brand data. KB markdown files parsed at runtime into branded HTML. Neon DB stores brand config and presets. Tenant assets served from `/public/tenants/[brand]/`.

**Tech Stack:** Next.js (latest) · Neon PostgreSQL + Drizzle ORM · Tailwind CSS · `next/font` (local + google) · Vercel

**PRD:** `PRD_Sales_Template_Tool_v2.md` — the definitive spec.

**Reference HTML:** `reference/Proposal_V1_Design_EN.html` — the pixel-perfect output standard.

---

## BRAND-DRIVEN RULE (applies to EVERY task)

**No component, style, or config ever hardcodes brand-specific values.** This means:
- Colors come from `BrandProvider` → CSS custom properties injected at runtime
- Font paths come from brand config → `next/font` configured dynamically
- Logo SVG path comes from brand config → loaded as component
- KB file paths come from brand config → parser reads from config path
- Contact info comes from brand config → CTA band populated from context
- Eyebrow labels, CTA text, footer text come from brand config → i18n layer reads from context
- Adding a second brand (Smart-ID) = new tenant folder + new DB record. **Zero code changes.**

For Phase 1 (before Neon is connected), brand config is a **static TypeScript object** in `src/lib/brand-configs/allekirjoitus.ts`. In Phase 6, this migrates to Neon DB. The BrandProvider interface stays the same — components don't know where the config came from.

---

## Phase 1: Foundation — Scaffold, Brand System, Static Template Match

**Goal:** A deployed Next.js app on Vercel that renders the Pricing Proposal reference template EXACTLY, powered by the brand config system. Fonts correct, colors correct, print output correct. This phase BLOCKS everything else.

### Task 1: Project scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `drizzle.config.ts`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `.env.local` (Neon connection string)
- Create: `.gitignore`

**Steps:**
1. `npx create-next-app@latest allekirjoitus-sales-tool --typescript --tailwind --app --src-dir --eslint`
2. Install deps: `npm i drizzle-orm @neondatabase/serverless` + `npm i -D drizzle-kit`
3. Create Neon project (separate instance: "allekirjoitus-sales-tool") via Neon dashboard
4. Add `DATABASE_URL` to `.env.local`
5. Create GitHub repo: `gh repo create keeltekool/allekirjoitus-sales-tool --public --source=.`
6. Deploy to Vercel: `vercel` — confirm default page renders
7. Commit

### Task 2: Tenant assets folder

**Files:**
- Create: `public/tenants/allekirjoitus/fonts/` (copy 5 Metropolis .otf files from design-system)
- Create: `public/tenants/allekirjoitus/logos/logo.svg` (copy from design-system/assets/brand_assets)
- Create: `public/tenants/allekirjoitus/logos/icon.svg`
- Create: `public/tenants/allekirjoitus/kb/` (copy all 4 KB .md files)

**Steps:**
1. Copy assets from source locations to tenant folder structure
2. This folder pattern is what every future brand replicates: `public/tenants/[brand-id]/fonts/`, `logos/`, `kb/`
3. Commit

### Task 3: Brand config system + BrandProvider

**Files:**
- Create: `src/lib/brand-config.ts` (TypeScript type for BrandConfig)
- Create: `src/lib/brand-configs/allekirjoitus.ts` (static config for MVP — migrates to Neon in Phase 6)
- Create: `src/lib/brand-context.tsx` (BrandProvider React context)

**Steps:**
1. Define `BrandConfig` type — the FULL contract (from PRD Section 10):
   ```typescript
   type BrandConfig = {
     id: string
     name: string
     company: string
     colors: { primary, primaryAlt, primaryHover, textBlack, textBody, dark, gray, grayLight, grayBorder, gray500, gray600 }
     typography: {
       body: { family, source: 'local', basePath, weights, files }
       heading: { family, source: 'google-fonts', url }
     }
     logos: { header, headerHeight, favicon }
     contact: { name, title, phone, email }
     footer: { company, url }
     kb: {
       overview: { en, fi }
       detail: { en, fi }
     }
     languages: string[]
     defaultLanguage: string
     locale: {
       eyebrowLabels: { en: {...}, fi: {...} }
       ctaText: { en: {...}, fi: {...} }
       editButton: { en: {...}, fi: {...} }
     }
   }
   ```
2. Create `allekirjoitus.ts` with the full config — every value from PRD Section 10
3. `BrandProvider` context — provides `BrandConfig` to all child components via `useBrand()` hook
4. `getBrandConfig(brandId)` function — for MVP reads from static file. Interface ready for Neon lookup.
5. Commit

### Task 4: Dynamic `[brand]` routing

**Files:**
- Create: `src/app/[brand]/layout.tsx`
- Create: `src/app/[brand]/page.tsx` (placeholder)
- Modify: `src/app/page.tsx` (root redirect to `/allekirjoitus/`)

**Steps:**
1. `src/app/page.tsx` — redirects to `/allekirjoitus/` for MVP. Becomes brand selector when second brand exists.
2. `src/app/[brand]/layout.tsx`:
   - Server component reads `params.brand`
   - Calls `getBrandConfig(params.brand)` — returns 404 if brand not found
   - Injects brand colors as CSS custom properties on the root element (`:root { --brand-primary: ... }`)
   - Wraps children in `<BrandProvider config={brandConfig}>`
3. Visiting `/allekirjoitus/` loads the app. `/nonexistent/` shows 404.
4. Commit

### Task 5: Font setup — brand-driven

**Files:**
- Create: `src/lib/fonts.ts`
- Modify: `src/app/[brand]/layout.tsx`

**Steps:**
1. `fonts.ts` exports a function `loadBrandFonts(brandConfig)` that:
   - Reads body font config: if `source === 'local'`, configures `next/font/local` with paths from `brandConfig.typography.body`
   - Reads heading font config: if `source === 'google-fonts'`, configures `next/font/google`
   - Returns CSS variable classes to apply on the layout element
2. For MVP: Metropolis from `/tenants/allekirjoitus/fonts/` + Barlow Condensed from Google Fonts
3. For Smart-ID (future): different fonts from `/tenants/smart-id/fonts/` — same code, different config
4. Verify: DevTools → Computed → font-family shows "Metropolis" not fallback
5. Commit

### Task 6: Design tokens — injected from brand config, not static CSS

**Files:**
- Create: `src/styles/base.css` (reset + shared layout styles only — NO brand colors)
- Modify: `src/app/globals.css`
- Modify: `src/app/[brand]/layout.tsx`

**Steps:**
1. `base.css` — reset styles, box-sizing, font-smoothing, text-rendering. Uses `var(--brand-*)` variables, never hardcoded hex values.
2. Brand layout injects CSS custom properties:
   ```
   style={{
     '--brand-primary': brandConfig.colors.primary,
     '--brand-primary-alt': brandConfig.colors.primaryAlt,
     '--brand-text': brandConfig.colors.textBody,
     '--brand-dark': brandConfig.colors.dark,
     ... (all colors from config)
   }}
   ```
3. All component styles reference `var(--brand-primary)` etc. — never `#ef4224` directly.
4. When Smart-ID is added, their brand layout injects different color values. Same components, different look.
5. Commit

### Task 7: Shared template components — brand-context-driven

**Files:**
- Create: `src/components/shared/Header.tsx`
- Create: `src/components/shared/TitleBlock.tsx`
- Create: `src/components/shared/Section.tsx`
- Create: `src/components/shared/PricingCard.tsx`
- Create: `src/components/shared/IncludedList.tsx`
- Create: `src/components/shared/TermsList.tsx`
- Create: `src/components/shared/CTABand.tsx`
- Create: `src/components/shared/Footer.tsx`
- Create: `src/components/shared/EditToggle.tsx`

**Steps:**
1. Each component reads from `useBrand()` where needed:
   - `Header` — logo SVG path from `brandConfig.logos.header`, height from `brandConfig.logos.headerHeight`
   - `CTABand` — contact from `brandConfig.contact` (name, title, phone, email). Dark bg uses `var(--brand-dark)`.
   - `Footer` — text from `brandConfig.footer`
   - `IncludedList` — markers use `var(--brand-primary)` for orange ›
   - `EditToggle` — label text from brand locale config
2. All styling uses `var(--brand-*)` tokens — no hardcoded colors anywhere
3. All text elements have `contentEditable` prop
4. Logo rendered as inline SVG (loaded from brand asset path, critical for PDF)
5. Commit

### Task 8: Static Pricing Proposal — pixel-match reference

**Files:**
- Create: `src/components/templates/PricingProposal.tsx`
- Modify: `src/app/[brand]/page.tsx`

**Steps:**
1. Compose `PricingProposal` from shared components: Header, TitleBlock, Section, PricingCard, IncludedList, TermsList, CTABand, Footer, EditToggle
2. Content text is hardcoded for now (matching reference HTML) — this gets replaced by KB data in Phase 2
3. Brand values (colors, fonts, logo, contact) all come from BrandProvider — NOT hardcoded
4. Print styles in globals.css — `@media print` matching reference exactly
5. Deploy to Vercel
6. **CHECKPOINT 1:** Open side-by-side with `reference/Proposal_V1_Design_EN.html`. Compare pixel-by-pixel: fonts, colors, spacing, borders, list markers, CTA band, footer. Print both to PDF, compare. Check all 5 Metropolis weights render distinctly.
7. Commit

**GATE: Do NOT proceed to Phase 2 until Checkpoint 1 passes.**

---

## Phase 2: KB Parser + Dynamic Content Rendering

**Goal:** Parse KB markdown files into structured data. Render content dynamically from KB. KB file paths come from brand config.

### Task 9: KB markdown parser

**Files:**
- Create: `src/lib/kb-parser.ts`
- Create: `src/lib/types.ts`

**Steps:**
1. Define types: `KBDocument`, `KBPart`, `KBSection` (id, title, content blocks, status, tables)
2. Parser reads a markdown file path and returns structured `KBDocument`:
   - Split on `# PART X:` → Parts
   - Split on `## X.Y Title` → Sections. Strip number prefix from rendered title.
   - Parse markdown tables → structured row arrays
   - Parse `**Status:**` → status badges
   - Parse paragraphs, bullets, sub-headings
3. Export `getKBAsPlainText(filePath)` — returns raw markdown string (reserved for future AI system prompts)
4. Test with both MASTER_KB_v2.md and MASTER_KB_OVERVIEW_EN.md — same section keys, different content
5. Commit

### Task 10: KB content renderer components

**Files:**
- Create: `src/components/content/KBSection.tsx`
- Create: `src/components/content/KBTable.tsx`
- Create: `src/components/content/StatusBadge.tsx`
- Create: `src/components/content/LayerHeader.tsx`

**Steps:**
1. All styling uses `var(--brand-*)` tokens
2. `StatusBadge` color mapping: INCLUDED=green, CONFIGURABLE=orange, ADD-ON=red (not brand-specific — universal UX)
3. All text contenteditable
4. Commit

### Task 11: Dynamic Enterprise Offer with KB data

**Files:**
- Create: `src/components/templates/EnterpriseOffer.tsx`

**Steps:**
1. Load KB path from `useBrand()` → `brandConfig.kb.detail.en` (or fi based on language)
2. Parse KB, render sections grouped by Part/Layer
3. Hardcode layer toggles for now (Parts 1-3 on) — sidebar comes Phase 3
4. **CHECKPOINT 2:** Content renders from KB. Compare with Enterprise Offer reference HTML.
5. Commit

---

## Phase 3: Sidebar + Layer Toggles + Depth

**Goal:** Working sidebar with layer toggles, depth switch, pricing sub-block toggles. Live preview updates.

### Task 12: Editor state management

**Files:**
- Create: `src/lib/editor-state.ts`
- Create: `src/hooks/useEditorState.ts`

**Steps:**
1. Define editor state type (templateType, language, customerName, depth, layers, customBlocks, pricing sub-blocks, termsAttached)
2. Default states per template type from PRD Section 6
3. `useEditorState` hook — React state + updater functions
4. Commit

### Task 13: Sidebar component

**Files:**
- Create: `src/components/editor/Sidebar.tsx`
- Create: `src/components/editor/LayerToggle.tsx`
- Create: `src/components/editor/DepthToggle.tsx`
- Create: `src/components/editor/PricingToggles.tsx`
- Create: `src/components/editor/CustomBlockToggles.tsx`

**Steps:**
1. Sidebar reads UI labels from brand locale config (FI/EN)
2. `PricingToggles` — 4 sub-block toggles: Transaction / Monthly / Setup / Add-ons (from PRD Section 7)
3. `CustomBlockToggles` — visibility depends on template type
4. Hidden in `@media print`
5. Commit

### Task 14: Editor layout — sidebar + preview

**Files:**
- Create: `src/components/editor/EditorLayout.tsx`
- Create: `src/components/editor/Preview.tsx`
- Create: `src/app/[brand]/editor/page.tsx`

**Steps:**
1. Flex layout: sidebar (fixed left) + preview (scrollable right)
2. Preview renders active template with current editor state
3. Layer toggles control which Parts render
4. Depth toggle swaps KB file: `brandConfig.kb.overview[lang]` vs `brandConfig.kb.detail[lang]`
5. **CHECKPOINT 3:** Toggle layers, verify live updates. Switch depth. Contenteditable works.
6. Commit

---

## Phase 4: Pricing Block + All Templates

**Goal:** Tiered pricing block. All 4 template types working.

### Task 15: Pricing block — tiered sub-blocks

**Files:**
- Create: `src/components/pricing/PricingBlock.tsx`
- Create: `src/components/pricing/PricingSubBlock.tsx`
- Create: `src/lib/pricing-data.ts`

**Steps:**
1. Parse Part 6 from KB into 4 groups: transaction, monthly, setup, addons
2. `PricingSubBlock` — one pricing card per group. All prices contenteditable.
3. `PricingBlock` — renders active sub-blocks based on editor state. Visual hierarchy: transaction=hero (48px), monthly=standard, setup=smaller, addons=lightest.
4. Sub-blocks independently toggleable from sidebar
5. Commit

### Task 16: Feature Introduction template

**Files:**
- Create: `src/components/templates/FeatureIntroduction.tsx`

**Steps:**
1. Left-border feature blocks (`.feature-block` style from reference)
2. Layer dividers, industry patterns highlight box
3. All from brand context — no hardcoded values
4. Commit

### Task 17: Dynamic Pricing Proposal

**Files:**
- Modify: `src/components/templates/PricingProposal.tsx`

**Steps:**
1. Replace static content with KB-driven dynamic rendering
2. Customer Context block (empty contenteditable, toggle-controlled)
3. Pricing block as hero (always attached for this template)
4. What's Included auto-populated from toggled layers
5. Commit

### Task 18: Price List template

**Files:**
- Create: `src/components/templates/PriceList.tsx`

**Steps:**
1. Pricing block with all sub-blocks on. No content layers, no CTA band.
2. Header + title + all pricing sub-blocks + footer
3. Commit

### Task 19: Template router

**Files:**
- Modify: `src/components/editor/Preview.tsx`

**Steps:**
1. Switch template based on `editorState.templateType`
2. **CHECKPOINT 4:** All 4 templates render. Toggle between them. Print each to PDF.
3. Commit

---

## Phase 5: Onboarding + Language

**Goal:** Onboarding screen. FI/EN switching.

### Task 20: Onboarding page

**Files:**
- Modify: `src/app/[brand]/page.tsx`
- Create: `src/components/onboarding/OnboardingForm.tsx`

**Steps:**
1. Language selector (reads `brandConfig.languages`), customer name input, template type cards
2. "Create" routes to `[brand]/editor` with selected state
3. Date auto-inserted with locale from brand config
4. Styled using brand tokens (not hardcoded "Allekirjoitus orange")
5. Commit

### Task 21: Language switching

**Files:**
- Create: `src/lib/i18n.ts`
- Create: `src/lib/locale.ts`

**Steps:**
1. UI strings from `brandConfig.locale` (eyebrow labels, CTA text, edit button text)
2. Date/decimal formatting per locale
3. Language determines which KB file loads from `brandConfig.kb.[depth].[lang]`
4. **CHECKPOINT 5:** Finnish E2E — UI, content, dates, decimals, print.
5. Commit

---

## Phase 6: Database — Brand Config + Presets

**Goal:** Migrate brand config from static file to Neon. Presets stored in Neon.

### Task 22: Drizzle schema + migration

**Files:**
- Create: `src/db/schema.ts`
- Create: `src/db/index.ts`

**Steps:**
1. Schema: `brands` (id, name, config JSONB), `presets` (id, brand_id, name, template_type, layer_config JSONB, depth, pricing_config JSONB, is_builtin), `ai_configs` (reserved, empty)
2. `npx drizzle-kit push`
3. Seed Allekirjoitus brand config (migrate from static file to DB)
4. Seed built-in presets from PRD Section 11
5. Commit

### Task 23: API routes

**Files:**
- Create: `src/app/api/brands/[id]/route.ts`
- Create: `src/app/api/presets/route.ts`
- Create: `src/app/api/presets/[id]/route.ts`

**Steps:**
1. `GET /api/brands/[id]` — returns brand config. Works for ANY brand ID — not Allekirjoitus-specific.
2. `GET /api/presets?brand=[id]` — presets scoped by brand
3. `POST /api/presets` — save user preset (scoped to brand)
4. `DELETE /api/presets/[id]` — delete user preset only (not builtin)
5. Commit

### Task 24: Migrate getBrandConfig to Neon

**Files:**
- Modify: `src/lib/brand-config.ts`
- Modify: `src/app/[brand]/layout.tsx`

**Steps:**
1. `getBrandConfig(brandId)` now queries Neon instead of reading static file
2. Static config files kept as fallback/reference but DB is the source of truth
3. BrandProvider interface unchanged — components don't know the config source changed
4. Commit

### Task 25: Preset UI

**Files:**
- Create: `src/components/editor/PresetMenu.tsx`
- Modify: `src/components/editor/Sidebar.tsx`

**Steps:**
1. "Load preset..." dropdown — lists built-in + user-saved for current brand
2. "Save as preset..." — saves current editor state to Neon, scoped to brand
3. Commit

---

## Phase 7: Auth + Polish + Deploy

### Task 26: Password middleware

**Files:**
- Create: `src/middleware.ts`
- Create: `src/app/login/page.tsx`

**Steps:**
1. Check auth cookie → redirect to `/login` if missing
2. Login page: password input → sets cookie. `SITE_PASSWORD` env var.
3. Global protection (not per-brand for MVP)
4. Commit

### Task 27: What's Included auto-population

**Files:**
- Create: `src/lib/whats-included.ts`
- Create: `src/components/content/WhatsIncludedBlock.tsx`

**Steps:**
1. Parse toggled layers → extract section titles by status (Included / Configurable / Add-on)
2. Three-group structured list. Orange › markers for Included. All contenteditable.
3. Commit

### Task 28: Final verification + deploy

**Steps:**
1. Print all 4 templates (EN + FI) to PDF — verify pixel match
2. Test full flow: onboarding → toggles → edit → print. Under 5 minutes.
3. Test preset save/load
4. Set Vercel env vars: `DATABASE_URL`, `SITE_PASSWORD`
5. `vercel --prod`
6. Chrome DevTools MCP verification: fonts, layout, console errors
7. **CHECKPOINT 6:** Full E2E pass
8. Commit + tag `v1.0.0`

---

## Phase Summary

| Phase | Tasks | Goal | Gate |
|-------|-------|------|------|
| **1: Foundation** | 1-8 | Scaffold + brand system + static template pixel-match | **CP1: Output matches reference HTML** |
| **2: KB Parser** | 9-11 | Dynamic content from markdown, loaded via brand config | CP2: KB sections render correctly |
| **3: Sidebar** | 12-14 | Layer toggles + depth + pricing sub-blocks | CP3: Live toggle updates |
| **4: Templates** | 15-19 | All 4 templates + tiered pricing block | CP4: All templates render + print |
| **5: i18n** | 20-21 | Onboarding + FI/EN | CP5: Finnish E2E |
| **6: Database** | 22-25 | Brand config + presets in Neon | Config migrated to DB |
| **7: Deploy** | 26-28 | Auth, polish, production | CP6: Full E2E under 5 min |

**28 tasks. 7 phases. Brand-driven from Task 3 onward — no hardcoded brand values anywhere.**

---

## Architecture: AI Readiness (Next Iteration)

NOT built in MVP. Architecture must not block:

1. **API routes:** `/api/generate` reserved for Claude API endpoint
2. **KB as plain text:** `getKBAsPlainText()` exported from parser — for system prompts
3. **Streaming-ready UI:** contenteditable preview handles progressive text insertion
4. **DB schema:** `ai_configs` table created empty — ready for model, prompt, guardrails config
5. **No conflicting deps:** compatible with `@anthropic-ai/sdk`
6. **Pattern reference:** CV-tailor-plus (`cv-tailor-plus.vercel.app`) — same streaming chat + workspace architecture
