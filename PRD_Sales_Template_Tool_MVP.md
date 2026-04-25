# Allekirjoitus Sales Template Tool - MVP PRD

## 1. What This Is

A web-based sales enablement tool for the Allekirjoitus.fi Key Account team. KA managers use it to assemble branded, professional proposals and feature introductions for **Enterprise customers only** (Portal/bulk package customers are out of scope).

The tool produces documents that communicate the Allekirjoitus.fi Enterprise product in four layers - what the customer gets by default, how signing workflows can be orchestrated, what can be configured to fit their organization, and what additional capabilities can be added on top. Each layer carries a clear status: included, configurable, or add-on with associated cost.

The tool is multi-tenant by architecture. Allekirjoitus.fi is the first tenant. The design system, knowledge base, and content are swappable.

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

**Access model for MVP:** Vercel-deployed static site with shared password authentication.

## 4. The Four-Layer Product Model

This is the foundational structure of the tool. Every template, every KB document, every sidebar toggle maps to this model. The four layers answer the enterprise buyer's question: *"What do I get, how can I orchestrate it, how can I tailor it, and what can I add on top?"*

### Layer 1: Enterprise Core Signing Service
**Status: INCLUDED** - what every Enterprise customer gets as the base product.

| Section | Content |
|---------|---------|
| Qualified & Advanced Signatures (AES) | eIDAS signing, document sealing, qualified timestamps, AATL certificate |
| Light Signing Methods (SES) | SMS OTP, Email OTP, InkSign |
| Authentication - Finnish Trust Network | OP, Nordea, Danske, Aktia, S-Pankki, Finnish Mobile Certificate |
| Authentication - Swedish BankID | Swedish BankID |
| Authentication - Norwegian | Norwegian BankID, Vipps |
| Authentication - Danish | Danish MitID |
| Authentication - Baltic | Smart-ID, Mobile-ID (Estonia, Latvia, Lithuania), Estonian e-Residency |
| Authentication - QES via ID cards | National ID cards (Finland, Estonia, Latvia, Lithuania, Croatia, Czech Republic, Belgium), Smart-ID QES mode |
| Delivery & Notifications | Email/SMS signing invitations, document retrieval links |
| Audit Trail & Compliance | Evidence record, PAdES output, qualified timestamps, document integrity |
| Portal Access | Web portal for document management |
| REST API Access | API for automated workflows, webhook subscriptions |

### Layer 2: Workflows & Orchestration
**Status: INCLUDED** (base capabilities) / **ADD-ON** (some items billed separately)

| Section | Status | Content |
|---------|--------|---------|
| Sequential Signing | Included | Documents progress through signatories in defined order |
| Parallel (Simultaneous) Signing | Included | All signatories can sign independently |
| Signatory Groups | Included | Multi-level approval hierarchies, organizational levels |
| Cascade Rejection | Included | Rejection at any level stops the flow |
| Watchers | Included | Non-signing observers with progress notifications |
| Bundle Signing | Billed per use | Multiple documents in a single authenticated session |
| Review Request (Reflection Period) | Billed per use | Mandatory waiting period before signing is permitted |

### Layer 3: Enterprise Configuration
**Status: CONFIGURABLE** - available to Enterprise customers, requires setup. Some items involve one-time fees.

| Section | Fee type | Content |
|---------|----------|---------|
| Custom Branding | One-time setup fee | Logo, colors, fonts, background on portal + signer interface + PAdES cover |
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
| E-Forms: Acroforms | Monthly per form | Fillable PDF fields in the signing flow |
| Document Templating | Per transaction (API) | Automated PDF generation from JSON data |
| Mass Requests (CSV Import) | Per transaction | Bulk dispatch via ZIP + CSV upload |
| Document Sealing (Standalone) | Per document | Organizational e-seal without human signatory |
| File Conversion | Per document | Non-PDF to PDF/A conversion |
| File Sharing | Per recipient | Secure document delivery without signing step |
| Professional Services | Hourly | Custom integrations, form creation, maintenance |

### How Layers Map to Templates

In every template output, sections carry visual status indicators that communicate what's included vs. what costs extra:

- **INCLUDED** (Layer 1, most of Layer 2): no special marking needed - this is the base
- **CONFIGURABLE** (Layer 3): marked as "setup required" or "configuration" - signals it's available but needs work
- **ADD-ON** (Layer 4, some Layer 2 items): marked as "additional" or shows pricing when pricing toggle is on

When the **pricing toggle is ON**, each section shows its associated cost from the pricelist KB. When OFF, sections show only the capability description without prices. This applies across all layers - a Layer 3 item might show its one-time setup fee, a Layer 4 item shows its per-transaction cost, Layer 1 items show nothing (included).

## 5. Core UX

### Layout: Sidebar + Live Preview

**Left sidebar (configuration):**
- Template type selector (Enterprise Offer / Feature Introduction / Pricing Proposal)
- Language toggle: FI / EN
- Detail level toggle: Overview / Deep-dive
- Four collapsible layer groups, each with toggleable sections (checkboxes)
- Pricing toggle: show/hide pricing for toggled sections
- Customer details fields (name, date)

**Right panel (live preview):**
- The assembled template renders in real-time as sections are toggled on/off
- Sections are visually grouped by layer with status indicators (Included / Configurable / Add-on)
- All text is contenteditable - click and modify any content directly
- Styled exactly as the final PDF output will look
- Print to PDF via Ctrl+P

### Workflow

1. Open the tool URL, enter shared password
2. Pick a template type
3. Toggle language (FI/EN), detail level (Overview/Deep-dive)
4. Toggle sections on/off within each layer - relevant for this customer
5. Toggle pricing on/off
6. Fill in customer name, date
7. Review live preview - edit any text directly
8. Ctrl+P -> Save as PDF
9. Send to customer

## 6. Templates

### 6.1 Enterprise Offer

**Purpose:** Full proposal/offer for a new Enterprise customer OR upsell for existing customer.

**Use case:** "Here's what Allekirjoitus.fi does for your organization, here's what's included, here's what you can configure, here's what you can add - and optionally, here's what it costs."

**Sidebar structure mirrors the four layers:**

```
LAYER 1: CORE SIGNING SERVICE [INCLUDED]
    [x] Qualified & Advanced Signatures (AES)
    [ ] Light Signing Methods (SES)
    [x] Authentication - Finnish Trust Network
    [x] Authentication - Swedish BankID
    [ ] Authentication - Norwegian
    [ ] Authentication - Danish
    [ ] Authentication - Baltic
    [ ] Authentication - QES via ID cards
    [x] Delivery & Notifications
    [x] Audit Trail & Compliance
    [x] Portal Access
    [ ] REST API Access

LAYER 2: WORKFLOWS & ORCHESTRATION [INCLUDED / ADD-ON]
    [x] Sequential Signing
    [x] Parallel Signing
    [ ] Signatory Groups
    [ ] Cascade Rejection
    [ ] Watchers
    [ ] Bundle Signing [add-on]
    [ ] Review Request [add-on]

LAYER 3: ENTERPRISE CONFIGURATION [CONFIGURABLE]
    [ ] Custom Branding
    [ ] Custom Domain
    [ ] SSO / Azure AD
    [ ] SMS & Email Customization
    [ ] Organizational Structure & Roles
    [ ] Language Support
    [ ] Document Retention Control
    [ ] Identity Code Handling

LAYER 4: PRODUCTIZED ADD-ONS [ADD-ON]
    [ ] E-Forms (Form Orders / Open Forms / Acroforms)
    [ ] Document Templating
    [ ] Mass Requests
    [ ] Document Sealing
    [ ] File Conversion
    [ ] File Sharing

[x] PRICING SECTION (on/off)
[ ] GENERAL TERMS
```

**Fixed elements (always present):** Header with logo + date, customer name block, CTA band with KA contact details, footer.

### 6.2 Feature Introduction

**Purpose:** Awareness and education material for existing or prospective customers.

**Two detail modes:**
- **Overview:** Concise, benefit-oriented descriptions. For CTO-level first meetings.
- **Deep-dive:** Full descriptions with configuration options, use cases, technical context. For leave-behind documents and technical workshops.

**Same four-layer sidebar structure** as Enterprise Offer. Pricing section optional (typically off for feature intros, but available).

### 6.3 Pricing Proposal

**Purpose:** Custom pricing for existing customer renegotiation or new Enterprise deal.

**Configurable elements:**
- Monthly platform fee (editable amount)
- Transaction fees per layer (which items to show, editable amounts)
- Layer status indicators show what's included vs. extra
- What's included list (toggleable)
- General terms
- CTA with KA contact

**Reference implementation:** See `reference/Proposal_V1_Design_FI.html` and `reference/Proposal_V1_Design_EN.html`.

## 7. Knowledge Base

### Single master document

All content lives in ONE file: `knowledge-base/MASTER_KB.md` (English) with a parallel `MASTER_KB_FI.md` (Finnish). No separate files per layer or per depth level.

The master document contains:
- **Part 1:** Enterprise Default Setup (defaults vs customizable tables)
- **Parts 2-5:** Four product layers with descriptions + tables per feature
- **Part 6:** Full pricing reference
- **Part 7:** Key service terms
- **Part 8:** Industry workflow patterns
- **Part 9:** Configuration setup reference

### How the tool reads it

Every `##` heading is an independently toggleable section. The tool parses the markdown and maps sections to sidebar checkboxes grouped by Part (Layer).

- **Depth toggle:** Overview shows description paragraphs only. Deep-dive shows full tables and sub-sections.
- **Pricing toggle:** Shows/hides inline prices and Part 6 pricing tables.
- **Language toggle:** Switches between `MASTER_KB.md` (EN) and `MASTER_KB_FI.md` (FI).

The Tool Extraction Guide at the top of the master document defines template mapping, section toggle logic, and status indicators.

### Supporting materials (reference only, not rendered in templates)

| File | Purpose |
|------|---------|
| `Benchmark_against/` | Source documents used to build and verify the master KB |
| `Detailed_Long_Format/` | Earlier detailed extractions (superseded by master KB, kept for reference) |

### Google Drive connection

- Master KB lives in a designated Google Drive folder
- App fetches content at build time or page load
- When the master KB is updated on Drive, templates reflect changes on next build/load

## 8. Design System

The tool renders all output using the **Allekirjoitus Original Design System**.

### Key specifications

| Element | Value |
|---------|-------|
| Body font | Metropolis (local .otf files) |
| Heading font | Barlow Condensed (Google Fonts) |
| Brand orange | #ef4224 |
| CTA/button orange | #e23013 |
| Text black | #231f20 |
| Body text | #010101 |
| Dark sections | #170703 |
| Light gray bg | #f2f2f2 |
| Gray border | #e5e5e5, 1.6px width |
| Card radius | 20px |
| Button style | Outline (border, transparent bg), pill shape (30px radius) |
| List markers | Orange `>` character |
| Body size | 17px, line-height 1.65 |

### Multi-tenant design system swapping

Design system is loaded from tenant config. Replace `design-system/` folder and update `config/[tenant].json` for a different product.

## 9. Language Support

- FI and EN for MVP
- Toggle in sidebar switches all template content between languages
- KB files contain both language versions
- UI chrome (sidebar labels, buttons) also bilingual
- Date format adapts: "22.4.2026" (FI) vs "22 April 2026" (EN)
- Decimal separator adapts: "0,80" (FI) vs "0.80" (EN)

## 10. Print / PDF Output

- All templates print-optimized with `@media print` CSS
- `print-color-adjust: exact` on all elements
- `break-inside: avoid` on all content blocks
- Edit toggle and sidebar hidden in print
- User prints via Ctrl+P -> Save as PDF in Chrome/Edge
- Output quality must match the reference templates in `reference/`

## 11. MVP Scope

### IN

- Three base templates (Enterprise Offer, Feature Introduction, Pricing Proposal)
- Four-layer sidebar with toggleable content sections
- Layer status indicators (Included / Configurable / Add-on) in template output
- Pricing toggle (show/hide costs per section across all layers)
- FI/EN language toggle
- Detail level toggle (Overview / Deep-dive)
- Contenteditable text throughout preview panel
- Print to PDF with full brand styling
- Allekirjoitus design system + KB as first tenant
- Google Drive as KB content source
- Vercel deployment with shared password auth
- Multi-tenant architecture (one tenant configured)

### OUT (post-MVP)

- Additional tenants configured
- User accounts / role-based access
- Saved proposals / version history
- Auto-generated email copy or cover letters
- CRM integration
- Template export to other formats (DOCX, PPTX)
- Analytics (which templates are used, by whom)

## 12. Success Criteria

- KA manager can produce a branded, professional Enterprise proposal in under 10 minutes
- Output PDF clearly communicates what's included vs. configurable vs. add-on
- Pricing toggle works across all layers - on shows costs, off hides them
- Changing a price in the KB pricelist file reflects in all templates without code changes
- A non-technical user (Terhi) can operate the tool without instructions beyond "pick, toggle, edit, print"

## 13. Reference Materials

- `reference/Proposal_V1_Design_EN.html` - working pricing proposal (English)
- `reference/Proposal_V1_Design_FI.html` - working pricing proposal (Finnish)
- `design-system/` - complete Allekirjoitus original design system
- `knowledge-base/` - structured content files (being populated)

## 14. Existing Source Materials for KB Population

| Material | Location | Use for |
|----------|----------|---------|
| Enterprise Feature Overview | `knowledge-base/enterprise-feature-overview.md` (already in KB) | High-level content for all layers |
| Current official pricelist | `knowledge-base/pricelist.md` (already in KB) | Pricing data |
| Terms of Service | `knowledge-base/terms-of-service.md` (already in KB) | Terms content |
| Allekirjoitus Product Knowledge Base | `G:\My Drive\SK_RE\Ad_Hoc\Allekirjoitus_topics\Allekirjoitus_Benchmarking_LM\ALLEKIRJOITUS_PRODUCT_KNOWLEDGE_BASE.md` | Detailed layer extraction |
| Allekirjoitus Service Knowledge Base | `G:\My Drive\SK_RE\Allekirjoitus_knowledge_base\Allekirjoitus_Service_Knowledge_Base_Confluence.md` | Detailed layer extraction |

---

*PRD prepared: 2026-04-24*
*Version: MVP v1.1 - Four-layer product model with status indicators*
