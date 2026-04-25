# Allekirjoitus Sales Template Tool - PRD v2

## 1. What This Is

A web-based, multi-brand sales enablement tool. KA managers assemble branded, professional proposals and feature introductions for Enterprise customers via a simple onboarding flow + live preview editor. Output is print-to-PDF via the browser.

The tool is **brand-driven (multi-tenant) by architecture**. Each brand (tenant) is a self-contained package: design system, knowledge base, templates, presets. Allekirjoitus.fi is the first brand. Smart-ID, SK Corporate, or external clients can be added by creating a new brand folder — zero code changes.

## 2. The Problem

Today, KA managers create sales materials ad hoc. There is no standardized, branded template system. This means:

- Inconsistent branding and messaging across customer touchpoints
- Time wasted recreating similar documents from scratch
- Features and capabilities poorly communicated (most enterprise customers only know the one workflow they were onboarded for)
- No structured upsell/cross-sell materials
- Pricing proposals are manual calculations with no reusable format
- No clear way to show customers what's included vs. configurable vs. extra cost

## 3. Who Uses It

**Primary:** KA managers (Terhi Roll, Egert Vainaste) who interact directly with Enterprise customers.

**Secondary:** Partners/resellers (e.g., Telia Sweden) who need standardized product materials.

**Access model for MVP:** Vercel-deployed with shared password authentication.

**Key constraint:** Non-technical users must be able to operate the tool without training. If Terhi can't produce a professional document in under 5 minutes on first use, the UX has failed.

## 4. The Four-Layer Product Model

This is the foundational structure of the tool. Every template maps to this model. The four layers answer the enterprise buyer's question: *"What do I get, how can I orchestrate it, how can I tailor it, and what can I add on top?"*

### Layer 1: Enterprise Core Signing Service
**Status: INCLUDED** - what every Enterprise customer gets as the base product.

| Section | Content |
|---------|---------|
| Qualified & Advanced Signatures (AES) | eIDAS signing, document sealing, qualified timestamps, AATL certificate |
| Light Signing Methods (SES) | SMS OTP, Email OTP, InkSign |
| Authentication - Finnish Trust Network | OP, Nordea, Danske, Aktia, S-Pankki, Finnish Mobile Certificate |
| Authentication - Swedish BankID | Swedish BankID, Freja eID |
| Authentication - Nordic-Baltic | Norwegian BankID, Vipps, Danish MitID, Smart-ID, Mobile-ID, Estonian e-Residency |
| Authentication - QES via ID cards | National ID cards (7 countries), Smart-ID QES mode |
| Delivery & Notifications | Email/SMS signing invitations, document retrieval links |
| Audit Trail & Compliance | Evidence record, PAdES output, qualified timestamps, document integrity |
| Portal Access | Web portal for document management |
| REST API Access | API for automated workflows, webhook subscriptions |

### Layer 2: Workflows & Orchestration
**Status: INCLUDED** (base capabilities) / **CONFIGURABLE** (advanced features enabled per template)

| Section | Status | Content |
|---------|--------|---------|
| Signature Request Templates | Included | Pre-configured workflow blueprints per business process |
| Signing Order (Sequential / Parallel / Mixed) | Included | Documents progress through signatories in defined or flexible order |
| Signatory Groups & Approval Hierarchies | Configurable | Multi-level organizational approval flows |
| Signatory Forwarding | Included | Delegation to authorized colleague |
| Review Request (Reflection Period) | Configurable | Mandatory waiting period before signing (regulatory) |
| Authentication Strength Control | Included | Granular reading vs signing auth levels |
| Expiry & Reminders | Included | Configurable deadlines and automatic chase |
| Attachments & Reference Documents | Included | Non-signed supporting files alongside the document |
| Signer Document Upload | Configurable | Require signers to upload ID/diplomas before signing |
| Post-Sign Redirect | Included | Automatic redirect to customer's URL after signing |
| Watchers / Observers | Configurable | Non-signing stakeholders with progress notifications |
| Custom Metadata | Configurable | Key-value tags for downstream routing |
| Bundle Signing | Configurable | Authenticate once, sign multiple documents |

### Layer 3: Enterprise Configuration
**Status: CONFIGURABLE** - available to Enterprise customers, requires setup.

| Section | Status | Content |
|---------|--------|---------|
| Custom Branding | One-time setup | Logo, colors, fonts, background on portal + signer interface + PAdES cover |
| Custom Domain | Configuration | Branded URL with dedicated SSL |
| SSO / Azure AD Integration | Configuration | OIDC with Entra ID, automated user provisioning |
| SMS & Email Customization | Configuration | Custom sender name, email domain, template content, notification suppression |
| Organizational Structure & Roles | Configuration | Tenant/Department/Group/User hierarchy, RBAC |
| Language Support | Configuration | Finnish, Swedish, English across portal and signing flows |
| Document Retention Control | Configuration | Configurable storage period (90-365 days) |
| Identity Code Handling | Configuration | SSN/HETU collection: enable, mandatory, or cryptographic hashing |
| Signatory Suggestions | Included | Auto-complete for previously used contacts |

### Layer 4: Productized Add-ons
**Status: ADD-ON** - extra capability at additional cost.

| Section | Billing | Content |
|---------|---------|---------|
| E-Forms: Form Orders | Monthly per form | Private form links with cascading logic, CRM metadata extraction |
| E-Forms: Open Forms | Monthly per form | Public-facing forms with strong auth, embeddable URLs |
| E-Forms: Acroforms | Per transaction | Fillable PDF fields in the signing flow |
| Document Templating | Per transaction (API) | Automated PDF generation from JSON data |
| Mass Requests (CSV Import) | Per transaction | Bulk dispatch via ZIP + CSV upload |
| Document Sealing (Standalone) | Per document | Organizational e-seal without human signatory |
| File Conversion | Per document | Non-PDF to PDF/A conversion |
| File Sharing | Per recipient | Secure document delivery without signing step |
| Professional Services | Hourly | Custom integrations, form creation, maintenance |

### Status Indicators in Template Output

Each content section carries a visual status label:
- **INCLUDED** - part of the Enterprise subscription
- **CONFIGURABLE** - available, requires setup work
- **ADD-ON** - additional capability (pricing in the pricing block)

Pricing details (EUR amounts) are **never shown inline** in content sections. They live exclusively in the pricing block (see Section 7).

## 5. Core UX

### Onboarding Flow (before editor)

When the user opens the tool, they see a clean onboarding screen — not the editor. This screen collects the minimum context to produce a document:

```
1. LANGUAGE:        [Suomi] [English]
2. CUSTOMER NAME:   [________________________]
3. TEMPLATE TYPE:   [Enterprise Offer]  [Feature Introduction]  [Pricing Proposal]  [Price List]

                    [Create →]
```

- **Language** is selected first — it determines the KB source file and all UI/content language.
- **Customer name** is a free text field. Populates the title block in the document. (Not required for Price List template.)
- **Date** is auto-inserted (today's date, locale-formatted) but editable in the document.
- **Template type** selects the document structure (see Section 6). Each template type has sensible layer defaults (e.g., Enterprise Offer starts with Layers 1-3 on, Overview depth).

Three inputs. One button. After clicking "Create", the user lands in the editor with a fully rendered document.

**Presets** are accessible from the sidebar (not the onboarding flow) via a "Load preset..." option. Optional shortcut, not a gate.

### Editor Layout: Sidebar + Live Preview

**Left sidebar (compact controls):**
```
CONTENT LAYERS:
  [x] Your Enterprise Defaults        (Part 1)
  [x] Core Signing Service            (Part 2)
  [x] Workflows & Orchestration       (Part 3)
  [ ] Enterprise Configuration        (Part 4)
  [ ] Productized Add-ons             (Part 5)
  [ ] Industry Patterns               (Part 8)

ATTACHMENTS:
  [ ] Pricing Block
  [ ] Service Terms                   (Part 7)

DEPTH:        [Overview] [Deep-dive]
CUSTOM BLOCKS:                           (availability depends on template type)
  [ ] Customer Context                   (empty free-text area for pasting prospect info)
  [x] What's Included                    (auto-populated from toggled layers, editable)

ATTACHMENTS:
  [ ] Pricing Block
  [ ] Service Terms                   (Part 7)

DEPTH:        [Overview] [Detail]
```

**6 layer toggles + up to 3 custom blocks + 2 attachments + 1 depth toggle.**

No individual section checkboxes. Layers toggle as complete, coherent blocks.

### Custom Blocks

Template-specific content blocks that are NOT sourced from the KB. They appear in the preview when toggled on.

| Block | Available in | When toggled on |
|-------|-------------|----------------|
| **Customer Context** | Enterprise Offer, Pricing Proposal | Empty free-text area in the preview. User pastes in context from email, CRM notes, call transcript — whatever they have about the prospect's situation or needs. |
| **What's Included** | Enterprise Offer, Pricing Proposal | Auto-populated structured summary from the toggled-on layers. Three groups: **Included** (standard Enterprise defaults — two-column list with orange › markers), **Configurable** (features available via setup), **Add-ons** (capabilities with additional pricing). User can edit, add, or remove items from each group. This block gives the prospect a clear at-a-glance view of what their Enterprise setup covers and what's available beyond it. |

Custom blocks that aren't relevant to the selected template type are hidden from the sidebar.

**Right panel (live preview):**
- The assembled document renders in real-time as layers are toggled
- All text is contenteditable — click and modify any content directly
- Sections within a rendered layer can be **removed by selecting and deleting in edit mode** (subtractive model)
- Styled exactly as the final PDF output
- Edit mode toggle button shows dashed outlines around editable elements
- Print to PDF via Ctrl+P

### User Workflow

1. Open tool URL, enter shared password
2. Select language (FI/EN)
3. Enter customer name
4. Pick template type
5. Land in editor — see complete rendered document with sensible layer defaults
6. Optionally load a preset from sidebar, or toggle layers on/off manually
7. Toggle on custom blocks if needed (Customer Context)
8. Review preview — delete individual sections that aren't relevant
9. Click into text to edit any content (headings, descriptions, custom blocks)
10. If pricing block is attached, edit prices for this customer's deal
11. Ctrl+P → Save as PDF
12. Send to customer

**Target: Under 5 minutes from open to PDF.**

## 6. Templates

**Important:** The reference HTML files in `reference/` are **style references** — they establish the visual design, typography, spacing, component patterns, and branding. They each show ONE possible configuration of that template type. The tool produces flexible documents where layers, custom blocks, and pricing sub-blocks are independently toggled. Templates are containers with toggleable components, not rigid page layouts.

### 6.1 Enterprise Offer

**Purpose:** Full proposal/offer for a new Enterprise customer OR upsell for existing customer.

**Use case:** "Here's what Allekirjoitus.fi does for your organization, here's what's included, here's what you can configure, here's what you can add."

**Content:** Parts 1-5 available via layer toggles. Parts 7-9 available as attachments.

**Pricing block:** Optional attachment. Pre-filled from Part 6 with editable amounts.

**Depth toggle:** Overview (description paragraphs only) / Deep-dive (full tables + sub-sections).

**Fixed elements:** Header (logo + date), title block (eyebrow: "Enterprise Offer" / customer name), CTA band (KA contact details), footer.

### 6.2 Feature Introduction

**Purpose:** Awareness and education material for existing or prospective customers.

**Use case:** "Here's what our platform can do for your industry / use case."

**Content:** Parts 2-5 available via layer toggles. Part 8 (Industry Patterns) optional.

**Pricing block:** Optional attachment (typically off for feature intros, but available).

**Depth toggle:**
- **Overview:** Concise, benefit-oriented descriptions. For CTO-level first meetings.
- **Deep-dive:** Full descriptions with configuration options, use cases, technical context. For leave-behind documents and technical workshops.

**Fixed elements:** Same as Enterprise Offer but eyebrow reads "Feature Introduction".

### 6.3 Pricing Proposal

**Purpose:** Custom pricing for existing customer renegotiation or new Enterprise deal.

**Use case:** "Here's YOUR deal — what you're paying for, what's included, how it compares."

**Content:** Part 1 (Enterprise Defaults as "what's included" summary). Optional cherry-picked sections from Parts 2-5. Part 7 (Service Terms) optional.

**Pricing block:** Always attached. This is the hero element. Amounts are editable — the KA manager adjusts prices to the negotiated deal. Pre-filled from Part 6 as starting point.

**Custom blocks available:** Customer Context (paste prospect situation from email/CRM), What's Included (auto-populated: defaults / configurable / add-ons breakdown). See Section 5 for custom block details.

**Depth toggle:** Not applicable (single depth).

**Fixed elements:** Same structure. Eyebrow reads "Pricing Proposal" / "Hintatarjous".

**Reference implementation:** `reference/Proposal_V1_Design_EN.html` and `reference/Proposal_V1_Design_FI.html` — these files ARE the definitive spec for this template's output quality.

### 6.4 Price List

**Purpose:** Standalone branded price sheet. Not customer-specific.

**Use case:** Generic reference document handed out at meetings or attached to emails. "Here's our standard Enterprise pricing."

**Content:** None (no feature descriptions). This document is purely pricing.

**Pricing block:** The entire document IS the pricing block — full Part 6 rendered, all line items, editable. The KA manager can modify prices to create custom rate cards.

**Fixed elements:** Header (logo + date), title block (eyebrow: "Price List" / "Hinnasto"), footer. No CTA band (not customer-specific). No customer name.

## 7. Pricing Block Architecture

Pricing is a **separate, self-contained component** — never embedded inline within content sections. This keeps content sections clean (they describe capabilities and status) while pricing details live in their own block.

### How it works

- Pre-filled from `MASTER_KB_v2.md` Part 6 (the pricing reference)
- Renders as a distinct visual block: the pricing card component from the reference HTML
- **Every price field is contenteditable** — the KA manager can change any amount for a custom deal
- Can be attached to any template (Enterprise Offer, Feature Introduction, Pricing Proposal)
- In the Pricing Proposal template, it's the hero element
- In the Price List template, it IS the document

### Pricing card structure (from reference HTML)

```
┌─────────────────────────────────────────────────────┐
│  [Pricing card title - orange, Barlow Condensed]    │
│  [Highlight text - 30px, Barlow Condensed]          │
│                                                     │
│  COMPONENT                              PRICE       │
│  ───────────────────────────────────────────────    │
│  Component Name (bold)                  0.80 EUR    │
│  Description text (14px gray)                       │
│  ───────────────────────────────────────────────    │
│  Component Name                         0.10 EUR    │
│  Description text                                   │
└─────────────────────────────────────────────────────┘
```

All text within the card is contenteditable: title, highlight, component names, descriptions, and prices.

### Pricing block internal structure — tiered sub-blocks

The pricing block is NOT a flat list of all Part 6 items. It is composed of **four independently toggleable sub-blocks**, each rendered as its own visual section within the pricing attachment. The sidebar shows these as sub-toggles when the Pricing Block attachment is enabled:

```
ATTACHMENTS:
  [x] Pricing Block
      [x] Transaction Pricing        (core deal — typically always on)
      [x] Monthly Subscriptions       (platform fee, environments, forms, auth)
      [ ] One-Time & Setup Fees       (branding, configuration)
      [ ] Add-on Pricing              (appears when add-on layers are toggled on)
  [ ] Service Terms
```

#### Sub-block 1: Transaction Pricing
**The core deal.** This is what customers negotiate most. Rendered as the hero pricing card (same visual treatment as the reference HTML — highlight price in 48px orange for the primary item).

| Line item | Source (Part 6) |
|-----------|----------------|
| Signing Request — Strong Auth (AES) | §6.2 — 0.80 EUR per signatory |
| Signing Request — Light Auth (SES) | §6.2 — 0.65 EUR per signatory |
| SMS Message | §6.2 — 0.10 EUR per message |
| Document Sealing | §6.2 — 0.30 EUR per document |
| File Conversion | §6.2 — 0.25 EUR per document |
| File Sharing | §6.2 — 0.15 EUR per recipient |

**Typical use:** Always on for Pricing Proposals. For existing customer renegotiation (like the Auto-Center reference), this might be the ONLY block shown — customer already has the platform, just adjusting transaction rates.

#### Sub-block 2: Monthly Subscriptions
**The recurring platform costs.** Rendered as a separate pricing card below the transaction block.

| Line item | Source (Part 6) |
|-----------|----------------|
| Platform Access Fee | §6.1 — 275.00 EUR/month |
| Additional Environment (tenant) | §6.1 — 75.00 EUR/month |
| Online Form Template | §6.1 — 25.00 EUR per active form/month |
| Nordic-Baltic Authentication | §6.1 — 125.00 EUR/month |

**Typical use:** On for new customer proposals. Off for existing customers who already pay the platform fee and are just renegotiating transaction rates.

#### Sub-block 3: One-Time & Setup Fees
**Initial configuration costs.** Rendered as a smaller, less prominent pricing card.

| Line item | Source (Part 6) |
|-----------|----------------|
| Customization & Branding | §6.3 — 980.00 EUR one-time |
| Development & Configuration | §6.3 — 145.00 EUR/hour (min 0.5h) |
| Specialist Consultation | §6.3 — 190.00 EUR/hour |

**Typical use:** On for new customer onboarding proposals where setup work is part of the deal. Off for existing customers who completed setup long ago.

#### Sub-block 4: Add-on Pricing
**Pricing for capabilities from Layer 4 (Productized Add-ons).** This sub-block **automatically appears when add-on content layers are toggled on** in the sidebar. If the user has toggled on "Productized Add-ons" in the content layers, the corresponding pricing items surface here.

Rendered as a separate card with a distinct visual treatment (lighter emphasis — these are extras, not the core deal).

| Line item | Linked to content |
|-----------|-------------------|
| E-Forms pricing | Appears when E-Forms sections are in the content |
| Document Templating pricing | Appears when Document Templating is in the content |
| Mass Requests pricing | Appears when Mass Requests is in the content |
| etc. | Follows toggled add-on content |

**Typical use:** Rarely on for existing customer renegotiations (they usually don't add features during a pricing discussion). On for new enterprise deals where specific add-ons are part of the proposal.

### Visual hierarchy within the pricing block

The sub-blocks render in order of importance:

1. **Transaction Pricing** — hero card, largest type, most prominent. This is what the eye lands on first.
2. **Monthly Subscriptions** — standard pricing card below.
3. **One-Time & Setup** — smaller, less prominent.
4. **Add-on Pricing** — last, lightest emphasis. Clearly separated as "additional."

Each sub-block is its own pricing card component (white bg, 1.6px gray border, 20px radius). All prices within every sub-block are contenteditable — the KA manager can adjust any amount for a custom deal.

### Example configurations

| Scenario | Transaction | Monthly | Setup | Add-ons |
|----------|------------|---------|-------|---------|
| **Existing customer — rate adjustment** | ON (modified prices) | OFF | OFF | OFF |
| **New enterprise customer — full deal** | ON | ON | ON | OFF |
| **New customer with e-forms** | ON | ON | ON | ON (e-forms pricing) |
| **Upsell add-ons to existing** | OFF | OFF | OFF | ON (specific add-on pricing) |
| **Standalone price list** | ON | ON | ON | ON (all) |

### Reference HTML note

The reference templates (`reference/Proposal_V1_Design_*.html`) are **style references** — they demonstrate the visual design, typography, spacing, and branding for pricing cards. They show ONE possible configuration (transaction-only for Auto-Center). The tool produces flexible combinations of sub-blocks based on user selections.

### CTA Band

Every template (except Price List) includes a CTA band at the bottom — the dark (#170703) section from the reference HTML. It contains:
- Heading + subtext (contenteditable — user can change the call-to-action message)
- KA manager contact details: pre-filled from brand config default contact (Terhi Roll for Allekirjoitus). **Contenteditable** — if Egert is sending the proposal, he clicks into the name/phone/email and changes them.

The Price List template omits the CTA band (not customer-specific).

### Section removal and undo

When a user deletes a section or pricing line item in edit mode, it's removed from the current document session. To restore:
- **Re-toggle the layer off/on** in the sidebar — this reloads all sections for that layer from the KB, restoring any deleted sections.
- For pricing block: detach and re-attach restores all Part 6 line items.

No separate undo button needed. The toggle is the undo mechanism.

## 8. Knowledge Base

### Single master document per brand

All content lives in ONE file per language: `MASTER_KB_v2.md` (English) with a parallel `MASTER_KB_FI.md` (Finnish).

**MASTER_KB_v2.md** is the current canonical version. Key architecture change from v1: pricing (EUR amounts) removed from Parts 1-5 content sections, replaced with status labels. Part 6 is the sole pricing authority.

The master document contains:
- **Part 1:** Enterprise Default Setup (defaults vs customizable tables with status labels)
- **Parts 2-5:** Four product layers with descriptions + tables per feature (no pricing inline)
- **Part 6:** Full pricing reference (the pricing block data source)
- **Part 7:** Key service terms
- **Part 8:** Industry workflow patterns
- **Part 9:** Configuration setup reference

### How the tool reads it

Content is toggled at the **layer level** (7 toggles), not at individual section level. Each layer renders as a complete, coherent block.

- **Layer toggle:** Turns an entire Part on/off. When on, all sections within that Part render.
- **Section removal:** Users remove individual sections they don't need by selecting and deleting in edit mode (subtractive model — start with everything, remove what's not relevant).
- **Depth toggle:** Swaps the KB source file. Overview loads `MASTER_KB_OVERVIEW_EN.md` (concise paragraphs, no tables). Detail loads `MASTER_KB_v2.md` (full tables + sub-sections). Both files use identical `## X.Y` section headings so layer toggles work the same regardless of depth.
- **Language toggle:** Set during onboarding. Switches between EN and FI versions of the active depth file.
- **Section number stripping:** KB headings use `## X.Y Title` format (e.g., `## 3.1 Signature Request Templates`) as internal keys for matching sections between overview and detail files. The rendering engine **strips the number prefix** — the customer-facing document shows only the title text (e.g., "Signature Request Templates"). The output is a sales document, not a legal amendment.

### Status indicators

Each section carries a status label from the KB:
- `[INCLUDED]` - no additional feature cost
- `[CONFIGURABLE]` - available, requires setup
- `[ADD-ON]` - additional capability (pricing in pricing block)

### KB markdown → branded HTML rendering

The KB is markdown. The app transforms it into branded HTML matching the reference design system. The rendering rules:

| KB Markdown | Rendered HTML | CSS Class |
|-------------|--------------|-----------|
| `# PART X: Title` | Layer group heading (not rendered in document — used for sidebar grouping only) | — |
| `## X.Y Section Title` | Section block with heading. Number prefix stripped. | `.section` + `.section__heading` |
| Paragraph text | Body text within section | `.section__body p` |
| `\| table \|` (pipe table) | Styled table matching reference HTML | `.pricing-table` (in pricing block) or content table styles |
| `### Sub-heading` | Sub-section heading within a section | Rendered as bold text or smaller heading |
| `**Status:** Label` | Status badge rendered inline or as tag | Status indicator component |
| `- bullet` | Styled list item | Orange `›` markers for included lists, standard for others |

Tables in content sections (Parts 1-5) use a clean table style with gray header borders and row separators matching the reference HTML's `.pricing-table` structure but without the pricing card wrapper.

### Depth file structure

Two KB files per language provide the depth toggle:

| Depth | EN file | FI file | Content |
|-------|---------|---------|---------|
| **Overview** | `MASTER_KB_OVERVIEW_EN.md` | `MASTER_KB_OVERVIEW_FI.md` | Concise paragraphs, no tables |
| **Detail** | `MASTER_KB_v2.md` (→ `MASTER_KB_DETAIL_EN.md`) | `MASTER_KB_DETAIL_FI.md` | Full tables + sub-sections |

Depth toggle swaps the source file. Same `## X.Y` headings in both → same sidebar behavior.

### Finnish KB (REQUIRED FOR MVP)

`MASTER_KB_FI.md` must be created as a complete, pitch-perfect Finnish translation of `MASTER_KB_v2.md`. This is not machine translation — it must read naturally for Finnish enterprise buyers. All section headings, descriptions, tables, and status labels translated. Part 6 pricing values remain in EUR (numbers don't change, but column headers and labels are in Finnish).

### KB location

KB files live in the repository under the brand's tenant folder (see Section 10). Not fetched from Google Drive.

### Supporting materials (reference only, not rendered)

| File | Purpose |
|------|---------|
| `Enterprise_Feature_Overview_Mid.md` | Mid-level feature reference used when writing KB content |
| `Allekirjoitus.fi - Enterprise Features_High_level.txt` | Executive-level feature reference |
| `Price List of Allekirjoitus.fi digi.txt` | Official price list reference |
| `Allekirjoitus_fi_Service_Terms_and_Conditions.pdf` | Legal T&C source |
| `Benchmark_against/` | Competitor comparisons used to build KB |
| `Detailed_Long_Format/` | Earlier per-feature extractions (superseded by master KB) |

## 9. Design System — Output Specification

### CRITICAL: The reference HTML files are the definitive design spec

`reference/Proposal_V1_Design_EN.html` and `reference/Proposal_V1_Design_FI.html` define the **exact output quality standard**. Every element in the deployed tool's template output must match these files pixel-for-pixel. If the deployed output differs from the reference in any way — font rendering, spacing, colors, border widths, print behavior — it is a bug.

### Typography

| Role | Font | Source | Weights |
|------|------|--------|---------|
| Body text | Metropolis | Self-hosted .otf files (5 weights) | 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) |
| Headings | Barlow Condensed | Google Fonts | 400, 500, 600, 700 |
| Fallback stack (body) | 'Helvetica Neue', Helvetica, Arial, sans-serif | System | — |
| Fallback stack (heading) | Helvetica, Arial, sans-serif | System | — |

### Font Serving (CRITICAL — deployment risk)

**Metropolis (body):** Self-hosted .otf files. Served via `next/font/local` in Next.js, which handles:
- Automatic self-hosting with correct MIME types
- Font preloading (no network waterfall)
- Zero layout shift (font-display: optional)
- Fonts compiled into the build — no runtime fetch failures

**Source files:** The 5 Metropolis .otf files in `design-system/assets/brand_assets/../website/assets/fonts/` are THE canonical source. These exact files are copied to the tenant folder and loaded by the app. They are the same files used in the reference HTML.

**Barlow Condensed (headings):** Served via `next/font/google` in Next.js, which downloads and self-hosts at build time — no runtime dependency on Google Fonts CDN.

**What can go wrong and how we prevent it:**

| Risk | Prevention |
|------|-----------|
| OTF files not in Vercel build output | `next/font/local` bundles them automatically |
| Wrong MIME type for .otf | `next/font/local` handles MIME types |
| FOUT — content renders before fonts load | `next/font` injects preload links + applies font-display |
| Print/PDF falls back to system fonts | Fonts are already loaded in DOM before print — verify in Checkpoint 1 |
| Weight mapping mismatch (500 renders as 400) | Each weight explicitly declared in `next/font/local` config with exact weight value |
| Different rendering vs reference HTML | Same .otf files, same weight values, same fallback stack — verified in Checkpoint 1 |

**Font verification in Checkpoint 1 (MANDATORY):**
1. Open deployed app in Chrome DevTools → Elements → Computed → font-family
2. Confirm "Metropolis" (not fallback) is the resolved font for body text
3. Confirm "Barlow Condensed" is the resolved font for headings
4. Open reference HTML locally, compare text rendering side-by-side
5. Print both to PDF, compare font rendering in output
6. Check all 5 Metropolis weights render distinctly (Light 300 for customer name, Regular 400 for body, Medium 500 for date, SemiBold 600 for buttons/component names, Bold 700 where used)

### Type Scale (from reference HTML)

| Element | Font | Size | Weight | Line-height | Other |
|---------|------|------|--------|-------------|-------|
| Body text | Metropolis | 17px | 400 | 1.65 | color: #010101 |
| Title eyebrow | Barlow Condensed | 14px | 600 | — | uppercase, letter-spacing: 0.08em, color: #ef4224 |
| Title heading | Barlow Condensed | 51px | 500 | 1.1 | color: #000000 |
| Customer name | Metropolis | 22px | 300 | 1.5 | color: #4b5563 |
| Section heading | Barlow Condensed | 36px | 500 | 1.2 | color: #000000 |
| Pricing card title | Barlow Condensed | 20px | 600 | — | color: #ef4224 |
| Pricing highlight | Barlow Condensed | 30px | 500 | 1.2 | color: #000000 |
| Table header | Metropolis | 12px | 600 | — | uppercase, letter-spacing: 0.08em, color: #6b7280 |
| Table body | Metropolis | 17px | 400/600 | — | name: #000, desc: 14px #6b7280 |
| Price (regular) | Barlow Condensed | 24px | 400 | — | right-aligned, color: #000000 |
| Price (highlight) | Barlow Condensed | 48px | 500 | 1 | right-aligned, color: #ef4224 |
| Price unit | Metropolis | 17px | — | — | color: #4b5563 |
| Terms list | Metropolis | 14px | 400 | 1.65 | color: #6b7280 |
| Header meta (date) | Metropolis | 14px | 500 | 1.6 | right-aligned, color: #4b5563 |
| CTA heading | Barlow Condensed | 36px | 500 | 1.2 | color: #ffffff |
| CTA contact name | Metropolis | 18px | 600 | — | color: #ffffff |
| CTA contact detail | Metropolis | 14px | — | 1.8 | color: #bebdbd |
| Footer | Metropolis | 14px | — | — | color: #000000 |
| Edit toggle button | Metropolis | 14px | 600 | — | pill shape, 30px radius |

### Color Palette (from reference HTML CSS custom properties)

| Token | Value | Usage |
|-------|-------|-------|
| `--ak-orange` | `#ef4224` | Brand primary, eyebrow text, list markers, highlight prices |
| `--ak-orange-alt` | `#e23013` | Buttons, CTAs, edit toggle border |
| `--ak-orange-hover` | `#bd2605` | Button hover state |
| `--ak-black` | `#231f20` | Logo text color |
| `--ak-text` | `#010101` | Body text |
| `--ak-text-black` | `#000000` | Headings, component names |
| `--ak-white` | `#ffffff` | Backgrounds |
| `--ak-gray` | `#bebdbd` | Card borders (1.6px), ".fi" text, CTA contact detail |
| `--ak-gray-light` | `#f2f2f2` | Comparison note background |
| `--ak-gray-border` | `#e5e5e5` | Table row borders (1px), header/footer separators |
| `--ak-gray-500` | `#6b7280` | Table headers, component descriptions |
| `--ak-gray-600` | `#4b5563` | Date text, customer name, price units |
| `--ak-dark` | `#170703` | CTA band background (NOT pure black) |

### Layout Specifications (from reference HTML)

| Element | CSS |
|---------|-----|
| Page container | `max-width: 820px; margin: 0 auto; padding: 48px` |
| Header | `display: flex; align-items: center; justify-content: space-between; padding-bottom: 24px; border-bottom: 1px solid #e5e5e5; margin-bottom: 48px` |
| Logo | `height: 39px; width: auto` — rendered as **inline SVG** (not img tag — critical for PDF quality) |
| Title block | `margin-bottom: 48px` |
| Section | `margin-bottom: 48px` |
| Pricing card | `background: #fff; border: 1.6px solid #bebdbd; border-radius: 20px; padding: 2rem` |
| Pricing table | `width: 100%; border-collapse: collapse` — header border: 1.6px, row border: 1px |
| Comparison note | `background: #f2f2f2; border-radius: 8px; padding: 24px 32px` |
| Included list | `display: grid; grid-template-columns: 1fr 1fr; gap: 10px 32px` — markers: orange `›` (Unicode `\203A`), NOT dots/checkmarks |
| Terms list | No bullets, `border-bottom: 1px` separators |
| CTA band | `background: #170703; border-radius: 20px; padding: 32px 40px; display: flex` |
| Footer | `display: flex; justify-content: space-between; border-top: 1px solid #e5e5e5; padding: 32px 0 16px; margin-top: 32px` |

### Edit Mode (from reference HTML)

| Element | CSS |
|---------|-----|
| Toggle button | `position: fixed; top: 16px; right: 16px; border-radius: 30px; border: 2px solid #e23013; background: #fff; color: #e23013` |
| Active state | `background: #e23013; color: #fff` |
| Editable outlines | `outline: 2px dashed #ef4224; outline-offset: 3px; border-radius: 4px` |
| Dark section outlines | `outline-color: rgba(255,255,255,0.4)` |

### Print Styles (from reference HTML — MUST match exactly)

```css
@media print {
  * { print-color-adjust: exact !important; }
  .edit-toggle { display: none !important; }
  body.editing [contenteditable="true"] { outline: none !important; }
  @page { margin: 14mm 16mm; size: A4; }
  html, body { font-size: 15px; }
  .page { padding: 0; max-width: 100%; }
  .header { margin-bottom: 32px; padding-bottom: 16px; }
  .title-block { margin-bottom: 32px; }
  .title-block__heading { font-size: 42px; }
  .section { margin-bottom: 28px; }
  .section__heading { font-size: 30px; }
  .pricing-card { margin-bottom: 28px; }
  .comparison-note { margin-bottom: 28px; }
  .cta-band { margin-top: 28px; padding: 24px 32px; }
  .included-list { gap: 6px 24px; }

  .section, .pricing-card, .comparison-note, .cta-band, .title-block {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .section__heading, .pricing-card__title {
    break-after: avoid;
    page-break-after: avoid;
  }
}
```

### Locale-Specific Rendering

| Element | English (EN) | Finnish (FI) |
|---------|-------------|-------------|
| Date format | 22 April 2026 | 22.4.2026 |
| Decimal separator | 0.80 | 0,80 |
| Edit button | "Edit mode" / "Editing - click to lock" | "Muokkaustila" / "Muokkaus - lukitse" |
| Eyebrow labels | "Enterprise Offer", "Feature Introduction", "Pricing Proposal", "Price List" | "Yritysratkaisu", "Ominaisuudet", "Hintatarjous", "Hinnasto" |
| CTA heading | "Ready to get started?" | "Kiinnostuitko?" |
| Content | From `MASTER_KB_v2.md` | From `MASTER_KB_FI.md` |

## 10. Brand Architecture (Multi-Tenant)

### Tenant = Brand

Each brand is a self-contained package. Adding a new brand = adding a folder + database config. No code changes.

### Folder structure

```
/tenants/allekirjoitus/
  fonts/
    Metropolis-Light.otf
    Metropolis-Regular.otf
    Metropolis-Medium.otf
    Metropolis-SemiBold.otf
    Metropolis-Bold.otf
  logo.svg
  logo-white.svg              (for dark backgrounds)
  kb/
    MASTER_KB_v2.md            (English)
    MASTER_KB_FI.md            (Finnish)

/tenants/smart-id/             (future — same structure)
/tenants/sk-corporate/         (future — same structure)
```

### Brand configuration (stored in Neon database)

Each brand has a configuration record containing:

```
Brand Config:
  id: "allekirjoitus"
  name: "Allekirjoitus.fi"
  company: "SK ID Solutions"

  Colors:
    primary: "#ef4224"
    primaryAlt: "#e23013"
    primaryHover: "#bd2605"
    textBlack: "#231f20"
    textBody: "#010101"
    dark: "#170703"
    gray: "#bebdbd"
    grayLight: "#f2f2f2"
    grayBorder: "#e5e5e5"
    gray500: "#6b7280"
    gray600: "#4b5563"

  Typography:
    bodyFont: "Metropolis"
    bodyFontSource: "local"     (files in tenant folder)
    headingFont: "Barlow Condensed"
    headingFontSource: "google-fonts"
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap"

  Fixed Elements:
    logoPath: "/tenants/allekirjoitus/logo.svg"
    logoWhitePath: "/tenants/allekirjoitus/logo-white.svg"
    logoHeight: "39px"
    footerCompany: "Allekirjoitus.fi - SK ID Solutions"
    footerUrl: "allekirjoitus.fi"

  Defaults:
    defaultContact:
      name: "Terhi Roll"
      title: "Key Account Manager"
      phone: "+372 538 00017"
      email: "Terhi.Roll@sk.ee"
    languages: ["fi", "en"]
    defaultLanguage: "fi"

  KB Paths:
    en: "/tenants/allekirjoitus/kb/MASTER_KB_v2.md"
    fi: "/tenants/allekirjoitus/kb/MASTER_KB_FI.md"
```

### How the app uses brand config

1. App loads brand config from Neon on startup / tenant selection
2. CSS custom properties are injected from the color palette
3. `@font-face` declarations are generated from the typography config
4. Logo SVG is loaded from the specified path
5. KB content is parsed from the tenant's markdown files
6. Fixed elements (footer, CTA contact) are populated from config
7. All template rendering uses these injected values — never hardcoded

### Brand selection (MVP)

URL path determines the brand: `/allekirjoitus/` loads Allekirjoitus config. Only one brand exists for MVP, but the routing is in place.

- Root `/` redirects to `/allekirjoitus/` for MVP (single brand).
- When a second brand is added (e.g., `/smart-id/`), root `/` shows a brand selector page.
- The brand path prefix is stripped from internal routing — the editor, onboarding, and all app pages work identically regardless of which brand is loaded.
- Password protection applies globally (not per-brand for MVP).

## 11. Presets

### What a preset is

A preset is a saved configuration that pre-fills the editor state:
- Which layers are toggled on/off
- Depth setting (overview/deep-dive)
- Whether pricing block is attached
- Template type

### Built-in presets (shipped with the brand)

| Preset | Template | Layers On | Depth | Pricing |
|--------|----------|-----------|-------|---------|
| **Standard** | Enterprise Offer | Defaults, Core, Workflows | Overview | Off |
| **Full Overview** | Enterprise Offer | Defaults, Core, Workflows, Config, Add-ons | Overview | Off |
| **Banking & Finance** | Enterprise Offer | Defaults, Core, Workflows, Config + Industry Patterns | Deep-dive | On |
| **HR Package** | Enterprise Offer | Defaults, Core, Workflows | Deep-dive | Off |
| **Technical / API** | Feature Introduction | Core, Workflows, Add-ons | Deep-dive | Off |
| **Executive Summary** | Feature Introduction | Core, Workflows | Overview | Off |
| **Standard Pricing** | Pricing Proposal | Defaults | — | On (always) |

### User-saved presets (MVP)

Users can save their current editor configuration as a named preset. Stored in Neon. Shared across all users of the same brand (when Terhi saves a preset, Egert sees it).

Saved preset contains:
- Name (user-defined)
- Template type
- Layer toggle states
- Depth setting
- Pricing block attached (yes/no)

**Does NOT save:** Customer name, edited text content, modified prices. Those are per-document, not per-preset.

## 12. Tech Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| **Framework** | Next.js (latest) | App framework, SSR, API routes |
| **Database** | Neon (PostgreSQL) + Drizzle ORM | Brand config, presets, shared persistence. Separate Neon instance for this project. |
| **Auth** | Shared password | Middleware-based password gate for MVP |
| **Styling** | Tailwind CSS + design system CSS tokens | Utility classes + brand tokens injected as CSS custom properties |
| **Fonts** | Self-hosted (Metropolis .otf in tenant folder) + Google Fonts (Barlow Condensed) | Body + heading fonts |
| **Deployment** | Vercel | Standard deployment |
| **Repository** | GitHub (keeltekool) | Version control, KB files stored in repo |

### Database schema (MVP)

```
brands
  id              TEXT PRIMARY KEY
  name            TEXT
  config          JSONB         (full brand config as described in Section 10)
  created_at      TIMESTAMP
  updated_at      TIMESTAMP

presets
  id              UUID PRIMARY KEY
  brand_id        TEXT REFERENCES brands(id)
  name            TEXT
  template_type   TEXT          (enterprise_offer | feature_introduction | pricing_proposal | price_list)
  layer_config    JSONB         (which layers on/off)
  depth           TEXT          (overview | deep_dive)
  pricing_attached BOOLEAN
  is_builtin      BOOLEAN       (true for shipped presets, false for user-created)
  created_at      TIMESTAMP
  updated_at      TIMESTAMP
```

## 13. Language Support

- FI and EN for MVP
- Language selected during onboarding (before editor)
- Selection switches:
  - KB source file (`MASTER_KB_v2.md` vs `MASTER_KB_FI.md`)
  - All UI chrome (sidebar labels, buttons, edit mode text)
  - Document fixed elements (eyebrow labels, CTA text, footer)
  - Date format: "22.4.2026" (FI) vs "22 April 2026" (EN)
  - Decimal separator: "0,80" (FI) vs "0.80" (EN)

### Required deliverable: MASTER_KB_FI.md

A complete, pitch-perfect Finnish translation of `MASTER_KB_v2.md`. This is professional sales material for Finnish enterprise buyers — it must read naturally, not like machine translation. All section headings, descriptions, table content, and status labels translated. Part 6 pricing values remain in EUR (numbers unchanged, labels in Finnish).

## 14. Print / PDF Output

- All templates print-optimized with `@media print` CSS (exact spec in Section 9)
- `print-color-adjust: exact` on all elements — colors must render in PDF
- `break-inside: avoid` on all content blocks — no broken sections across pages
- Edit toggle and sidebar hidden in print
- Font size reduces from 17px to 15px for print density
- Page margins: 14mm top/bottom, 16mm left/right
- Page size: A4
- User prints via Ctrl+P → Save as PDF in Chrome/Edge
- **Output quality must match the reference templates exactly**

## 15. MVP Scope

### IN

- Four templates: Enterprise Offer, Feature Introduction, Pricing Proposal, Price List
- Onboarding flow: language selection, customer name, template type, preset selection
- Date auto-inserted (locale-formatted), editable
- Layer-level sidebar toggles (7 content layers + 2 attachments)
- Depth toggle (Overview / Deep-dive)
- Pricing as separate attachable block with editable prices
- Subtractive section removal in edit mode
- Contenteditable text throughout preview panel
- Built-in presets (Banking, HR, Technical, Standard, etc.)
- User-saved presets (stored in Neon, shared across users)
- FI/EN language support with full Finnish KB
- Print to PDF with exact brand styling
- Brand-driven architecture (Allekirjoitus as first brand)
- Brand config stored in Neon
- Vercel deployment with shared password auth
- KB files in repository

### OUT (post-MVP) — but architecture must prepare for these

- **AI-powered customer context (NEXT ITERATION — see Section 18)**
- Additional brands configured (Smart-ID, SK Corporate)
- User accounts / role-based access
- Saved proposals / version history
- Auto-generated email copy or cover letters
- CRM integration
- Template export to other formats (DOCX, PPTX)
- Analytics (which templates are used, by whom)
- Google Drive as KB source

## 18. Next Iteration: AI-Powered Customer Context

### The problem this solves

In MVP, the Customer Context block is an empty text area where the KA manager types or pastes manually. The intro/background paragraph must be written from scratch for every proposal. This is slow and the quality depends on the KA manager's writing skill.

The real power comes when the tool **understands the customer's context** and generates tailored content automatically.

### How it works

1. During onboarding (or via a sidebar panel), the KA manager **pastes raw customer context**: email threads, call notes, CRM data, requirements mentioned in meetings — unstructured text, whatever they have.
2. The tool sends this context + the Allekirjoitus KB (overview depth) to the **Claude API**.
3. AI generates:
   - A tailored intro/background paragraph referencing the customer's actual situation, needs, and industry
   - Optionally: suggested feature emphasis (which layers/sections are most relevant to this customer)
4. Generated content streams into the preview as **contenteditable text** — the KA manager refines, edits, or replaces.
5. The rest of the document (KB content sections, pricing block, CTA) remains template-driven — AI only handles the contextual parts.

### Architecture pattern: CV-tailor-plus workspace

This follows the exact pattern built in **ApplyKit (cv-tailor-plus)** at `cv-tailor-plus.vercel.app`:
- User provides context (job description → customer context)
- AI generates tailored content (CV sections → intro paragraph + feature recommendations)
- Streaming via Server-Sent Events from `/api/chat` endpoint
- Claude API with system prompt containing the knowledge base
- Admin-configurable AI settings (model, temperature, guardrails) via `admin_ai_configs` table
- Generated content is editable, not final

### MVP build prerequisites (MUST account for this now)

The MVP architecture must prepare for AI integration even though it ships without it:

1. **Customer context field in onboarding** — already present as the Customer Context custom block. In the next iteration, this becomes the AI input source.
2. **API route structure** — the Next.js app must have a clean `/api/` route pattern that can accommodate a `/api/generate` endpoint later.
3. **KB content accessible as plain text** — the parsed KB must be available as a string (not just rendered HTML) so it can be injected into Claude API system prompts.
4. **Anthropic SDK dependency** — can be added in the next iteration, but `package.json` should not have conflicting patterns that make it difficult.
5. **Streaming-ready UI** — the contenteditable preview must handle text being streamed in (inserted progressively), not just static rendering. This is a consideration for the component architecture.
6. **Admin AI config table in Neon schema** — reserve space in the database schema for AI configuration (model, system prompt, temperature, guardrails) even if the table is empty in MVP.

### Database schema addition (reserved for next iteration)

```
ai_configs
  id              UUID PRIMARY KEY
  brand_id        TEXT REFERENCES brands(id)
  feature         TEXT          (customer_context | feature_recommendations)
  system_prompt   TEXT
  model           TEXT          (default: claude-sonnet-4-6)
  max_tokens      INTEGER
  temperature     FLOAT
  guardrails      JSONB
  created_at      TIMESTAMP
  updated_at      TIMESTAMP
```

### What changes for the user

| MVP (current) | Next iteration (AI) |
|---------------|-------------------|
| Customer Context = empty text area, user writes manually | Customer Context = paste raw notes, AI generates tailored paragraph |
| Generic Allekirjoitus intro as default background text | AI-written intro referencing customer's actual situation |
| User decides which features to emphasize manually | AI suggests relevant layers/features based on customer context |
| Writing quality depends on KA manager | Consistent, professional output regardless of who creates it |

## 16. Success Criteria

- KA manager can produce a branded, professional Enterprise proposal in under 5 minutes
- Output PDF is **visually identical** to the reference templates (`reference/Proposal_V1_Design_*.html`)
- All fonts render correctly in both browser preview and printed PDF (Metropolis body, Barlow Condensed headings)
- Pricing block works as independent, attachable component with fully editable prices
- Layer toggles produce complete, coherent content blocks
- Changing a price in the KB Part 6 reflects in all templates without code changes
- Finnish and English versions produce equally polished, natural-reading documents
- A non-technical user (Terhi) can operate the tool without instructions beyond "pick, toggle, edit, print"
- Adding a second brand requires only: a tenant folder (fonts, logo, KB) + a database config record

## 17. Build Plan — Design Verification Checkpoints

**The build MUST frontload design fidelity.** Template rendering is verified against reference HTML before any feature work proceeds.

### Gate 0: Reference HTML for each template (BEFORE ANY CODING)

Each template type requires a **hand-crafted reference HTML file** — same quality as `reference/Proposal_V1_Design_EN.html`. This reference defines the exact visual structure, content hierarchy, section ordering, emphasis treatment, and layout for that template. It is created with real content, reviewed and approved, THEN used as the build target.

| Template | Reference HTML | Status |
|----------|---------------|--------|
| Pricing Proposal | `reference/Proposal_V1_Design_EN.html` + `_FI.html` | DONE |
| Enterprise Offer | `reference/Enterprise_Offer_EN.html` + `_FI.html` | TO BE CREATED |
| Feature Introduction | `reference/Feature_Introduction_EN.html` + `_FI.html` | TO BE CREATED |
| Price List | `reference/Price_List_EN.html` + `_FI.html` | TO BE CREATED |

**Nothing gets coded from vague descriptions.** Every template has a concrete, approved reference to match.

### Checkpoint 1: Static template rendering (FIRST)
- Render the Pricing Proposal template with hardcoded content
- Open reference HTML side-by-side in browser
- Verify: fonts, colors, spacing, borders, list markers, CTA band, footer — every element
- Print both to PDF, compare output
- **This checkpoint blocks all other work.** If the template doesn't match, nothing else matters.

### Checkpoint 2: Dynamic content rendering
- Parse MASTER_KB_v2.md, render sections from KB data
- Toggle layers on/off, verify content appears/disappears cleanly
- Verify depth toggle (overview vs deep-dive)
- Check contenteditable works on all text elements
- Verify edit mode outlines match reference

### Checkpoint 3: Pricing block
- Render pricing block as standalone component
- Verify it matches the pricing card from reference HTML exactly
- Test editable prices (modify, verify rendering)
- Attach/detach from Enterprise Offer template

### Checkpoint 4: Print verification
- Print every template type to PDF
- Compare against reference PDF output
- Verify: page breaks, color preservation, font rendering, margins
- Test in both Chrome and Edge

### Checkpoint 5: Finnish version
- Load MASTER_KB_FI.md
- Verify all Finnish content renders correctly
- Check locale formatting (dates, decimals)
- Print Finnish PDF, verify quality

### Checkpoint 6: Full flow
- Complete onboarding → editor → print workflow
- Time the process — must be under 5 minutes
- Test with preset selection
- Test user-saved preset (save, reload, verify)

## 18. Reference Materials

| File | Purpose |
|------|---------|
| `reference/Proposal_V1_Design_EN.html` | **DEFINITIVE** output spec — English pricing proposal |
| `reference/Proposal_V1_Design_FI.html` | **DEFINITIVE** output spec — Finnish pricing proposal |
| `knowledge-base/MASTER_KB_v2.md` | Current canonical KB (English, pricing separated) |
| `knowledge-base/MASTER_KB.md` | Original KB (preserved, not used by tool) |
| `design-system/` | Complete Allekirjoitus design system assets |
| `design-system/assets/brand_assets/colors.css` | Official brand color definitions |
| `design-system/assets/brand_assets/typography.md` | Font specifications and type scale |

---

*PRD v2.0 - 2026-04-25*
*Changes from v1: Pricing separated from content. Simplified sidebar (7 layer toggles, not 42 checkboxes). Subtractive section model. Presets (built-in + user-saved, MVP). Customer onboarding flow. Price List as 4th template. Brand-driven multi-tenant architecture. Neon + Drizzle stack. Design verification checkpoints. Full design spec extracted from reference HTML. Finnish KB required for MVP.*
