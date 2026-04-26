# Allekirjoitus Sales Tool - Full Product Teardown, Benchmark, and Roadmap

Date: 2026-04-26  
App evaluated: https://allekirjoitus-sales-tool.vercel.app/allekirjoitus  
Workspace: `C:\Users\Kasutaja\Claude_Projects\Allekirjoitus_Sales_Tool`

## 1. Scope And Evidence

This report evaluates the live tool from four angles:

1. What functionality is actually built and usable today.
2. UI/UX quality for KA managers assembling Enterprise offers.
3. Template/content quality for sales, pricing, feature-introduction, and price-list use cases.
4. Benchmarking against analogous tools in proposal automation, CPQ, digital sales rooms, CRM quotes, and CLM.

Live-browser evidence captured in:

`C:\Users\Kasutaja\AppData\Local\Temp\allekirjoitus-full-redo`

Important captured states:

- `audit_01_onboarding_fi.png`
- `audit_02_onboarding_en.png`
- `audit_03_enterprise_default.png`
- `audit_05_enterprise_detail_all_on.png`
- `audit_07_pricing_proposal.png`
- `audit_08_price_list.png`
- `audit_09_mobile_price_list.png`
- `audit_10_mobile_onboarding_fi.png`
- `audit-states.json`

Build verification:

- `npm run lint`: pass
- `npm run build`: pass
- Browser console errors during automated walkthrough: none

Important runtime measurements from `audit-states.json`:

- After clicking Create Document, live app landed at `scrollY=663`, not at the top of the created document.
- Enterprise default document: 94 editable nodes.
- Enterprise detail with all toggles: 300 editable nodes, 80 visible delete buttons in edit mode.
- Mobile price-list/editor view: document page width becomes 110px next to fixed 280px sidebar.
- Mobile onboarding: page fits viewport width but form fields clip due desktop two-column layout.

## 2. Executive Verdict

This is not trash. It is a useful first internal sales-enablement MVP. But it is currently a branded document composer, not yet a proposal platform, CPQ tool, digital sales room, or serious sales operating system.

The strongest thing built is not the UI. The strongest thing is the Allekirjoitus Enterprise product model and the KB-to-template structure. The tool forces sales material into a coherent model:

- Enterprise defaults
- Core signing service
- Workflows and orchestration
- Enterprise configuration
- Productized add-ons
- Industry patterns
- Pricing and service terms

That is exactly the kind of structure KA managers need when customers do not understand the breadth of the product.

The biggest weakness is that the app stops at "assemble and print PDF." Market tools have moved beyond that. Serious proposal and CPQ platforms now handle CRM data, guided selling, pricing rules, approvals, buyer engagement analytics, e-signature, payment, versioning, and AI-generated deal-specific content.

## 3. Overall Ratings

| Area | Score | Verdict |
|---|---:|---|
| Internal KA usefulness today | 7.5/10 | A KA can create a credible branded doc quickly on desktop. |
| Desktop UX | 6.5/10 | Clean but has serious state, scroll, and edit-mode issues. |
| Mobile/tablet UX | 2/10 | Broken editor; onboarding clips fields. |
| Template strategy | 7/10 | Strong base taxonomy, but too generic and not buyer-context driven enough. |
| Pricing proposal quality | 4/10 | Static editable pricing, not guided pricing or quote automation. |
| Content governance | 5.5/10 | KB-driven foundation is good; legal/pricing/content locking is missing. |
| Technical foundation | 6.5/10 | Clean Next build, but no persistence/auth/presets/DB yet. |
| Market competitiveness | 3.5/10 | Not competitive with PandaDoc/Qwilr/DealHub/GetAccept yet. |
| V2 potential | 8.5/10 | Very high if repositioned as a guided Enterprise offer engine. |

## 4. What Is Actually Built

### Built And Working

- Multi-brand shape exists through `BrandConfig` and `/[brand]` route.
- Allekirjoitus brand config exists.
- Local logo/font/KB assets are mounted under `public/tenants/allekirjoitus`.
- FI/EN onboarding exists.
- Customer name entry exists.
- Sender/contact editing exists.
- Four template choices exist:
  - Enterprise Offer
  - Feature Introduction
  - Pricing Proposal
  - Price List
- PDF format choice exists:
  - Continuous page
  - A4
- Sidebar exists with template switcher, layer toggles, pricing toggles, terms toggle, depth toggle.
- Overview/detail KB rendering works.
- Pricing block renders transaction/monthly/setup/add-on groups.
- Edit mode exists through `contentEditable`.
- Delete buttons exist in edit mode.
- Print button calls `window.print()`.
- Production build works.

### Claimed/Planned But Not Really Built Yet

- Presets: labels exist in config, no UI/data flow.
- User-saved presets: not implemented.
- Shared password auth: in PRD, not implemented in app route.
- Neon/Drizzle persistence: dependencies exist, no actual schema/use.
- Brand config in DB: not implemented.
- Pricing from KB/price list: not implemented; prices are hardcoded.
- "What's Included" block: toggle exists, no rendered structured block matching PRD.
- AI customer-context generation: PRD references future AI, not implemented.
- CRM integration: not implemented.
- Quote approvals: not implemented.
- Buyer-facing link/tracking: not implemented.
- E-sign handoff: not implemented.
- Version history/drafts: not implemented.
- Lockable approved/legal content: not implemented.

## 5. Live UX Analysis

### 5.1 Onboarding

What works:

- The onboarding screen is understandable.
- It asks for the right first inputs: language, customer, sender, template, PDF format.
- The layout feels like an Allekirjoitus-branded document, not a generic SaaS admin page.
- Template cards are readable and easy to click on desktop.

Problems:

- The screen is too document-like and not enough tool-like. For internal KA use, the first screen should optimize speed and clarity.
- Sender details take too much vertical space for repeat users.
- There is no "remember last sender."
- There is no customer/account lookup.
- There is no preset shortcut on onboarding.
- There is no quick explanation of when to choose each template.
- Mobile onboarding clips sender input values.
- Mobile header metadata collides visually with logo area.

Recommendation:

Move to a compact creation workspace:

- Left: "New offer" form.
- Right: live mini-preview of chosen template.
- Add preset row: `Enterprise new customer`, `Existing customer upsell`, `API integration`, `Pricing renewal`, `Feature intro`, `Price list`.
- Collapse sender by default after first use.
- Add "Use last sender" and "Default sender per KA."

### 5.2 Document Creation And Scroll

Critical issue:

After clicking Create Document, the app can land mid-document (`scrollY=663`) instead of the document top. This is a first-impression failure because the user does not see the title, customer, and intro after creation.

Likely cause:

The page retains previous scroll position from onboarding into editor because state changes inside the same route and no explicit scroll reset happens.

Recommendation:

On session start, template change, depth change, and back-to-onboarding, reset the scroll container to top.

### 5.3 Sidebar

What works:

- The sidebar gives immediate control over the document.
- Layer toggles map well to the product model.
- The pricing sub-toggles are useful.
- Continuous/A4 feedback appears under print button.

Problems:

- "What's Included" is checked but has no visible output.
- There is no explanation of layer consequences.
- No section count, document length, estimated page length, or "too long" warning.
- No presets.
- No save state.
- No undo after section delete.
- No preview navigation/minimap.
- No document outline.
- Sidebar is fixed 280px and breaks mobile.

Recommendation:

Make sidebar a real document cockpit:

- Top: customer/template/status.
- Preset selector.
- Build assistant/guided questionnaire.
- Layer toggles with counts and impact: "Core Signing Service - 7 sections."
- Document health: "Estimated 11 pages, 4 add-ons, pricing attached, terms attached."
- Save draft, duplicate, export, share.
- Mobile: drawer or full-screen settings step, not fixed side-by-side.

### 5.4 Edit Mode

What works:

- Direct text editing is the right model for a KA.
- Dashed outlines make editable content obvious.
- Delete buttons support the subtractive model.

Critical issue:

Edit mode desyncs when switching templates. The global `body.editing` class can remain active while the newly mounted button says "Edit mode." Evidence: screenshots show red dashed edit outlines with the button label reset.

Code cause:

- `src/components/shared/EditToggle.tsx` uses local component state.
- It also toggles global `document.body.classList`.
- When template changes, the component remounts and local state resets, but body class can remain.

Recommendation:

Lift edit mode state into `EditorLayout`, pass it to templates, and use an effect that always syncs body class from state and cleans up on unmount.

Also add:

- Undo for deletions.
- Reset section.
- Lock approved/legal text.
- Visual difference between editable sales copy and locked legal/pricing governance.
- Clear "editing active" banner or toolbar instead of floating pill only.

### 5.5 Mobile

Mobile is currently not usable.

Evidence:

- Editor has viewport 390px.
- Sidebar width is 280px.
- Main starts at x=280.
- Page width becomes 110px.
- Text renders vertically/clipped.

Recommendation:

For v1, either:

1. Explicitly block mobile editor with "Desktop required for document assembly."
2. Or implement responsive editor:
   - settings drawer
   - preview full-width
   - sticky bottom action bar
   - no fixed side-by-side layout below 900px

Do not leave the current mobile editor as-is.

## 6. Template Analysis

### 6.1 Enterprise Offer

Score: 7.5/10

Strengths:

- Best current template.
- Explains the platform in coherent product layers.
- Strong for enterprise upsell and new enterprise customer education.
- Overview/detail depth is valuable.
- Status badges help clarify included/configurable/add-on.

Weaknesses:

- Still too feature-led.
- Needs a deal-specific executive summary.
- Customer Context is just a placeholder box, not synthesized into the offer.
- "What's Included" should be a prominent buyer summary but is not implemented.
- No "recommended configuration" section.
- No implementation plan/timeline.
- No commercial summary near the top.

Recommended structure:

1. Cover/title.
2. Executive summary for this customer.
3. Recommended Enterprise configuration.
4. What is included from day one.
5. What needs setup/configuration.
6. Optional add-ons and expansion path.
7. Pricing summary.
8. Implementation plan.
9. Terms.
10. CTA/contact.

### 6.2 Feature Introduction

Score: 6.5/10

Strengths:

- Useful for awareness and education.
- Good for existing customers who only know one workflow.
- Detail mode can support technical workshops.

Weaknesses:

- Too much like a KB export.
- Missing scenario packaging.
- No vertical/use-case entry point.
- No customer role framing.

Recommended feature packs:

- HR onboarding and employment contracts.
- Loan/reflection-period workflows.
- Insurance forms and claims.
- Procurement and supplier contracts.
- Board approvals and high-value financial agreements.
- API-first automation.
- Public/open forms.
- Multi-country Nordic/Baltic authentication.

Each pack should generate a short, buyer-friendly "why this matters" explanation plus relevant features.

### 6.3 Pricing Proposal

Score: 4/10

This is the biggest strategic gap.

Current pricing proposal is an editable static pricing document. It is not yet a quote tool.

Market expectation:

- Pull deal/account data from CRM.
- Configure products/add-ons.
- Apply rules and discounts.
- Show volume assumptions.
- Show monthly/one-time/usage-based totals.
- Trigger approval thresholds.
- Present the buyer with a clean quote.
- Capture acceptance/signature/payment or at least next step.

Needed improvements:

- Pricing calculator.
- Volume scenarios: low/base/high.
- Customer-specific discount fields.
- Margin/discount guardrails.
- Validity date.
- Payment terms.
- Contract term.
- Setup scope.
- One-time vs recurring vs usage summary.
- Internal-only approval notes.
- Buyer-visible pricing summary.
- "Compared to current process" value case.

### 6.4 Price List

Score: 6/10

Strengths:

- Useful as a standard reference.
- Clean structure.
- Good meeting handout.

Weaknesses:

- Not enough governance.
- Needs validity date, price-list version, owner, legal caveat.
- Should not depend on customer name.
- Should include currency/VAT/tax assumptions.
- Prices hardcoded in React instead of source-of-truth pricing data.

Recommendation:

Turn Price List into a governed rate-card generator:

- Standard price list.
- Partner/reseller price list.
- Enterprise custom rate card.
- Internal list with floor/target/standard prices.
- Customer-facing list with only approved prices.

## 7. Technical And Repo Critique

### 7.1 Good Foundation

- Next.js app router is fine.
- Build/lint pass.
- Brand config is a good abstraction.
- KB parser exists.
- Template composition is understandable.
- Public tenant asset structure is good.
- PRD is detailed and useful.

### 7.2 Main Technical Gaps

1. In-memory session only.
   - `AppShell` uses local React state.
   - Refresh loses everything.
   - No draft recovery.

2. Edit mode uses global body mutation.
   - Causes state bugs across template switches.

3. Pricing is hardcoded.
   - `PricingBlock.tsx` has static arrays.
   - No source-of-truth price list.
   - No FI localization.

4. Terms FI map to EN files.
   - `allekirjoitus.ts` maps FI terms to English markdown paths.

5. "What's Included" exists in state/sidebar but not as a rendered block.

6. Mobile layout is unhandled.
   - Fixed sidebar width.
   - Document page width collapses.

7. No route/query state.
   - Cannot deep-link to a configured document.

8. No database/presets despite PRD.

9. No access control.
   - Internal tool should not be open without auth.

10. No tests around parser/rendering or UI state.

## 8. Market Benchmark

### 8.1 Direct Proposal Tools

#### PandaDoc

Relevant benchmark:

- CPQ and proposal creation from CRM.
- Pricing rules.
- Approval workflows.
- Product catalog.
- Built-in e-signature.
- Tracking/analytics.
- Smart content.

Implication:

Allekirjoitus tool currently has branded document assembly, but not CPQ automation, CRM pull-in, approvals, analytics, or e-signature.

#### Proposify

Relevant benchmark:

- Template editor.
- Content library.
- Permissions.
- Reports and analytics.
- E-signatures.
- Lockable content and approval flows.

Implication:

Your KB content is a primitive content library, but it is not manageable by sales/marketing/legal yet. Approved content vs editable content is missing.

#### Qwilr

Relevant benchmark:

- Interactive proposals.
- Quotes.
- Signatures and payments.
- Document analytics.
- CRM integrations.
- AI Creator.
- Web proposal pages instead of only PDFs.

Implication:

Your current continuous PDF output is good for sharing, but the market is moving toward live proposal links with buyer analytics and interactive pricing.

#### Better Proposals

Relevant benchmark:

- Designed templates.
- E-signature at the moment of decision.
- Step-by-step onboarding after signing.
- Team management/permissions.
- Tracking and notifications.

Implication:

Your tool should not end at export. It can create the next step: onboarding kickoff, signature workflow, or customer implementation checklist.

### 8.2 Digital Sales Room Tools

#### GetAccept

Relevant benchmark:

- Deal room as a single buyer collaboration space.
- AI-generated summaries and business cases from deal context.
- Mutual action plans.
- Stakeholder visibility.
- Proposal/e-sign/contract flow in one place.
- CRM buyer engagement insights.

Implication:

For enterprise deals, the better future is not only "send PDF." It is "give the customer one link containing proposal, price, terms, implementation plan, API docs, FAQ, and next steps."

### 8.3 CPQ And Quote-To-Cash Tools

#### Salesforce Revenue Cloud / CPQ

Relevant benchmark:

- Unified product catalog.
- Pricing engine.
- Discounts and approval chains.
- Product configurator.
- CRM-native quote generation.
- AI quote summaries.

Implication:

Your pricing proposal needs at least light CPQ logic: product catalog, add-on rules, usage assumptions, discount thresholds, approvals.

#### DealHub CPQ

Relevant benchmark:

- Guided quote configuration.
- Adaptive pricebook.
- Bundles and discounts.
- Automated approvals.
- Deal desk dashboard.
- Partner/channel quoting.
- Headless API quoting.

Implication:

Allekirjoitus has a complex Enterprise feature set. A guided playbook would be more valuable than a manual layer checklist.

#### HubSpot Quotes

Relevant benchmark:

- AI-powered quotes from CRM deal records.
- E-signatures and payments.
- Approvals based on pricing/discount thresholds.
- Buyer engagement and forecasting status.

Implication:

The practical MVP direction is: CRM deal data -> branded proposal -> quote -> approval -> acceptance.

### 8.4 CLM And Agreement Tools

#### Docusign CLM

Relevant benchmark:

- Agreement generation.
- Workflows.
- Legal review.
- Central repository.
- Salesforce integration.
- Metrics around where legal handoffs happen.

Implication:

If pricing/terms become legally meaningful, the app must separate sales-editable content from legal-governed content and track versions.

## 9. Competitive Positioning

### Where This Tool Is Strong

1. Domain specificity.
   Generic tools do not understand Allekirjoitus Enterprise layers, Nordic authentication, QES/AES/SES distinctions, forms, PAdES, API, workflow orchestration, or SK-specific pricing.

2. Product education.
   The tool helps KAs explain capabilities customers do not know exist.

3. Branded output.
   The current document output looks credible.

4. Speed potential.
   A KA can get from blank to a presentable draft quickly on desktop.

5. Multi-language basis.
   FI/EN architecture exists.

### Where It Is Weak

1. No buyer intelligence.
   No open tracking, section engagement, stakeholder visibility, or follow-up signals.

2. No CRM data.
   Customer/deal context is manually typed or pasted.

3. No real pricing logic.
   Prices are editable text, not structured quote data.

4. No governance.
   Legal terms, approved product descriptions, and pricing can be edited without control.

5. No persistence.
   Refresh loses work.

6. No workflow.
   No save, approval, send, sign, archive, duplicate, or compare.

7. Weak mobile.
   Breaks badly.

8. No customer-specific intelligence.
   Customer context is not transformed into recommendations.

## 10. What To Do Next: Priority Roadmap

### P0 - Fix Current MVP So It Is Trustworthy

These should happen before adding big features.

1. Reset scroll on create/template/depth change.
2. Fix edit mode state sync.
3. Add desktop-only guard or responsive mobile editor.
4. Implement "What's Included" or remove the toggle.
5. Move pricing into structured data.
6. Add FI terms or hide FI terms until available.
7. Add save draft to localStorage at minimum.
8. Add undo for section deletion.
9. Add auth/password gate if this is live.
10. Add document version/date/validity controls.

### P1 - Make It A Proper Internal Sales Enablement Tool

1. Built-in presets:
   - New Enterprise customer
   - Existing Enterprise upsell
   - API integration offer
   - Online forms offer
   - Nordic-Baltic expansion
   - Pricing renewal
   - Partner/reseller pack

2. Saved presets:
   - Shared per brand.
   - Named by use case.
   - Visible to all KAs.

3. Drafts:
   - Save current document state.
   - Duplicate proposal.
   - Resume later.

4. Content governance:
   - Locked legal blocks.
   - Locked approved product claims.
   - Editable sales/context blocks.
   - Internal-only notes hidden from export.

5. Proposal outline:
   - Jump to section.
   - Show page length.
   - Warn if too long.

6. Export improvements:
   - PDF naming: `Allekirjoitus_Enterprise_Offer_Customer_Date.pdf`.
   - Export status.
   - A4 page-break preview.

### P2 - Build The "Enterprise Offer Engine"

This is the real product opportunity.

Replace manual layer toggles as the primary workflow with a guided sales playbook:

Inputs:

- Customer type: new / existing / reseller / enterprise renewal.
- Industry/use case.
- Countries/signers.
- Authentication requirements.
- Portal vs API vs forms.
- Expected monthly volume.
- Need SSO?
- Need branding/custom domain?
- Need open forms/e-forms?
- Need bulk/mass requests?
- Contract term.
- Discount/price sensitivity.

Outputs:

- Recommended configuration.
- Selected document layers.
- What is included/configurable/add-on.
- Pricing scenario.
- Implementation plan.
- Terms package.
- Buyer-facing summary.
- Internal approval flags.

This would make the tool meaningfully better than generic proposal tools for SK.

### P3 - Quote/CPQ Lite

Build a structured pricing engine:

- Product catalog:
  - Strong signing request
  - Light signing request
  - SMS
  - Platform fee
  - Additional environment
  - Nordic-Baltic add-on
  - Online forms
  - Setup/customization
  - Professional services

- Quote model:
  - Quantity
  - Unit
  - Standard price
  - Proposed price
  - Discount
  - Minimum/floor
  - Approval required yes/no
  - Notes

- Quote views:
  - Customer summary
  - Detailed price list
  - Internal margin/discount view

- Approval rules:
  - Price below floor.
  - Discount above threshold.
  - Custom terms.
  - Free setup.

### P4 - AI That Is Actually Useful

Do not add generic chat. Add narrow, sales-useful AI.

Recommended AI flows:

1. Paste customer notes -> generate customer context.
2. Paste RFP -> map requirements to Allekirjoitus features.
3. Paste email thread -> summarize pains, stakeholders, objections.
4. Select industry -> generate tailored executive summary.
5. Generate "why this configuration" section.
6. Generate objection-handling sidebar for KA.
7. Generate follow-up email with proposal link.
8. Generate competitor comparison paragraph.
9. Generate implementation plan from chosen features.

AI should be grounded in the KB and should cite which KB sections it used internally.

### P5 - Buyer-Facing Link / Digital Sales Room

This is how to benchmark against GetAccept/Qwilr.

Add a shareable proposal room:

- Proposal.
- Pricing.
- Terms.
- Implementation plan.
- Relevant API docs.
- FAQ.
- Customer-specific next steps.
- Contact person.
- Optional video/intro.
- View tracking.
- Stakeholder tracking.
- Comments/questions.
- Accept/sign handoff.

For Allekirjoitus, the killer feature would be "send this proposal to signature using our own signing product."

## 11. Recommended V2 Product Concept

Name:

Allekirjoitus Enterprise Offer Engine

Positioning:

An internal KA workspace that turns customer context into a governed, branded Enterprise proposal, quote, and implementation plan in under 5 minutes.

Core promise:

"Paste what the customer told you. The tool recommends the right Enterprise configuration, creates the offer, calculates pricing, flags approval issues, and outputs a buyer-ready PDF or link."

Main screens:

1. Dashboard:
   - Recent drafts.
   - Built-in presets.
   - Customer proposals.
   - Price-list version status.

2. Guided setup:
   - Customer/deal inputs.
   - Use-case selection.
   - Feature requirements.
   - Volume/pricing assumptions.

3. Composer:
   - Left: settings and outline.
   - Center: proposal preview.
   - Right: assistant/health/checks.

4. Pricing:
   - Structured quote table.
   - Scenario calculator.
   - Approval flags.

5. Export/share:
   - PDF continuous/A4.
   - Buyer link.
   - Internal approval.
   - Handoff to signing.

## 12. Feature Backlog

| Priority | Feature | Impact | Effort | Notes |
|---|---|---:|---:|---|
| P0 | Scroll reset on create/template switch | High | Low | Fix first impression. |
| P0 | Edit mode global state fix | High | Low | Current state is visibly buggy. |
| P0 | Desktop-only guard or responsive editor | High | Medium | Current mobile editor is broken. |
| P0 | Implement What's Included | High | Medium | PRD promise, key buyer summary. |
| P0 | Local draft autosave | High | Medium | Prevent losing work. |
| P0 | Auth gate | High | Medium | Internal live app should be protected. |
| P1 | Built-in presets | High | Medium | Biggest KA speed improvement. |
| P1 | Save/load shared presets | High | Medium/High | Needs DB. |
| P1 | Structured pricing data | High | Medium | Foundation for CPQ. |
| P1 | FI terms and pricing localization | Medium | Medium | Needed for FI customer docs. |
| P1 | Document outline/minimap | Medium | Medium | Helps with long documents. |
| P1 | Locked approved content | High | Medium | Prevent accidental legal/product changes. |
| P2 | Guided sales playbook | Very high | High | Differentiates from PDF builder. |
| P2 | Pricing calculator | Very high | High | Critical for enterprise offers. |
| P2 | Discount approval flags | High | Medium | Protects margin. |
| P2 | CRM import | High | High | Reduces manual entry. |
| P3 | AI customer summary | High | Medium | Use KB + pasted notes. |
| P3 | RFP requirement mapping | High | High | Strong enterprise value. |
| P3 | Buyer-facing link tracking | High | High | Moves toward sales room. |
| P4 | E-sign handoff | Very high | High | Strong Allekirjoitus-specific close loop. |

## 13. Specific Bugs And Code References

### Scroll starts mid-document

Observed:

- `scrollY=663` immediately after create.

Fix:

- After `setSession(...)`, reset window/main scroll.
- After template/depth changes, reset main preview scroll to top.

### Edit mode desync

Code:

- `src/components/shared/EditToggle.tsx`

Problem:

- Component-local state plus global `document.body.classList.toggle('editing')`.
- Template switch remounts component but does not reliably clear body class.

Fix:

- Move `editing` state to `EditorLayout`.
- Pass `editing` and `setEditing`.
- Use effect to sync and cleanup body class.

### Mobile editor broken

Code:

- `src/components/editor/Sidebar.tsx`

Problem:

- `width: '280px'`
- `minWidth: '280px'`
- Main content remains beside sidebar on 390px viewport.

Fix:

- Media query below 900px.
- Sidebar becomes drawer.
- Preview full-width.

### Mobile onboarding clipping

Code:

- `src/components/onboarding/OnboardingForm.tsx`

Problem:

- Desktop padding.
- Two-column sender grid.

Fix:

- One-column grid under 720px.
- Reduce heading sizes and padding.
- Header stacks cleanly.

### Pricing hardcoded

Code:

- `src/components/pricing/PricingBlock.tsx`

Problem:

- Static English arrays.
- No structured source-of-truth pricing.
- No quote calculations.

Fix:

- Move to structured pricing config/JSON/DB.
- Add language labels.
- Add editable structured values.

### FI terms missing

Code:

- `src/lib/brand-configs/allekirjoitus.ts`

Problem:

- FI terms point to EN markdown.
- Public tenant KB directory has only `TERMS_DETAIL_EN.md` and `TERMS_OVERVIEW_EN.md`.

Fix:

- Add FI terms markdown or disable terms in FI until source exists.

### What's Included missing

Code:

- State and sidebar include `whatsIncluded`.
- Templates do not render a matching block.

Fix:

- Add `WhatsIncludedBlock`.
- Derive included/configurable/add-on groups from selected KB parts and status labels.

## 14. What You Are Doing Better Than Market Tools

The market tools win on workflow, analytics, and CPQ. But they do not have SK's product brain.

Your strengths:

- Deep Allekirjoitus-specific product content.
- Nordic/Baltic trust-service language.
- Enterprise feature breakdown.
- Status semantics: included/configurable/add-on.
- Ability to educate customers about capabilities they already own or could add.
- Internal sales focus, not generic agency proposal workflow.

This means the right strategy is not to clone PandaDoc. The right strategy is to build a narrow, domain-specific offer engine on top of the product KB, then selectively add the market features that matter:

- presets,
- guided selling,
- structured pricing,
- approvals,
- buyer link/tracking,
- e-sign handoff.

## 15. Final Recommendation

Do not spend the next sprint on visual polish first.

Spend it on making the tool trustworthy and operational:

1. Fix scroll/edit/mobile bugs.
2. Implement What's Included.
3. Add draft autosave.
4. Add presets.
5. Move pricing into structured data.
6. Add auth.

Then build the "guided Enterprise offer engine":

1. Guided questionnaire.
2. Recommended configuration.
3. Pricing calculator.
4. Customer-specific summary from pasted notes.
5. Approval flags.
6. Export/share.

This turns the product from a static document builder into a KA sales weapon.

## 16. Sources Used For Benchmarking

- PandaDoc CPQ: https://www.pandadoc.com/cpq-software/
- Proposify proposal software: https://www.proposify.com/proposal-software
- Qwilr proposal software: https://qwilr.com/
- Better Proposals: https://betterproposals.io/
- GetAccept Digital Sales Room: https://www.getaccept.com/product/digital-sales-room
- DealHub CPQ: https://dealhub.io/platform/cpq/
- Salesforce Revenue Cloud / CPQ: https://www.salesforce.com/sales/cpq/
- HubSpot Quote Software: https://www.hubspot.com/products/commerce/quotes
- Docusign CLM: https://www.docusign.com/products/clm

