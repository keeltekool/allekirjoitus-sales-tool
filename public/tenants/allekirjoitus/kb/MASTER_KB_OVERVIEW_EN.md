# Allekirjoitus.fi Enterprise - Master Knowledge Base (Overview)

Overview-depth content for the Sales Template Tool. Concise, benefit-oriented descriptions for each section. No tables, no sub-sections. For executive-level meetings and quick-read proposals.

**Product:** Allekirjoitus.fi - cloud-based electronic signing platform by SK ID Solutions
**Scope:** Enterprise tier only.
**URL:** allekirjoitus.fi

---

## TOOL EXTRACTION GUIDE

This is the **overview** version of the knowledge base. Section headings match the detail version (`MASTER_KB_DETAIL_EN.md`) exactly. The depth toggle swaps between these files — same layer toggles, same sidebar behavior, different content depth.

---

# PART 1: YOUR ENTERPRISE DEFAULT SETUP

What you get on day one as an Enterprise customer. Your dedicated tenant is configured with your organization's branding and access settings as part of the standard onboarding.

## 1.1 Signing & Authentication Defaults

Your Enterprise subscription includes everything you need to start signing from day one.

**Signature level:** eIDAS-compliant Advanced Electronic Signatures (AES) — legally binding across the EU.

**Authentication:** Finnish Trust Network (all major banks + Mobile Certificate) and Swedish BankID included.

**Invitations:** Email-based signing links to each signatory.

**Signing order:** Simultaneous or sequential — configurable per request.

**Users:** Unlimited accounts included.

**Status:** All included.

## 1.2 Portal, Access & Branding Defaults

Your portal is branded and connected to your organization from the start.

**Login:** Corporate SSO via Azure AD / Entra ID — no separate passwords.

**Branding:** Your logo, colors, and fonts on portal, signer pages, and signed PDFs.

**Sender identity:** Your domain for emails, your company name for SMS.

**Organization:** Department hierarchy synced from AD with role-based access.

**Status:** All included. Branding is a one-time setup.

## 1.3 Workflow Feature Defaults

Sensible workflow defaults active from day one. Advanced features available via configuration.

**Active:** Default signing template, automatic reminders, configurable expiry (7-90 days), signatory forwarding.

**Available via configuration:** Multiple templates, watchers, document upload, reflection periods, bundle signing, custom metadata, automated archiving.

**Status:** Base features active. Advanced features configurable.

---

# PART 2: CORE SIGNING SERVICE [INCLUDED]

Included in your Enterprise subscription. Transaction fees apply per use — see the pricing block for current rates.

## 2.1 Qualified & Advanced Electronic Signatures

eIDAS-compliant digital signing across the EU — legally binding, tamper-proof, independently verifiable.

**Standard:** eIDAS Advanced Electronic Signature (AES) — covers ~99% of Finnish business transactions.

**Verification:** Recipients see a trusted validation indicator (blue banner, green checkmark) in Adobe Acrobat. No plugins needed.

**Tamper protection:** Any modification after signing breaks the seal. Adobe flags it immediately.

**Long-term validity:** PAdES-LTV format — independently verifiable offline for decades.

**Status:** Included (per-transaction billing).

## 2.2 Authentication Methods

Your signers use their own bank credentials or national eID. No account creation, no software needed.

**Finland:** All major banks via Trust Network (OP, Nordea, Danske, Aktia, S-Pankki, and more) + Mobile Certificate. Included.

**Sweden:** Swedish BankID, Freja eID. Included.

**Nordic-Baltic:** Norwegian BankID, Vipps, Danish MitID, Baltic Smart-ID, Mobile-ID. Available as add-on.

**Status:** Finland + Sweden included. Nordic-Baltic: Add-on.

## 2.3 QES - Qualified Electronic Signatures

The highest legal tier under EU law. A QES is equivalent to a handwritten signature and cannot be challenged in court on electronic form grounds. Available via national ID cards (Finland, Estonia, Latvia, Lithuania, Croatia, Czech Republic, Belgium) and Smart-ID QES mode. Used for government filings, notarized contracts, real estate, and high-value financial agreements.

**Status:** Included.

## 2.4 Light Signing Methods (SES)

SMS OTP, Email OTP, and hand-drawn signature (InkSign) for lower-risk scenarios where strong identity verification is not required or not available. Typical uses: international signatories without Nordic/Baltic eID, internal approvals, supplier confirmations, and face-to-face signing at service counters.

**Status:** Add-on (per signatory).

## 2.5 Delivery & Notifications

How signing requests reach your signers and how everyone stays informed.

**Invitations:** Email with secure signing link. SMS available as add-on.

**Reminders:** Automatic at configurable intervals. Manual on-demand from portal.

**Completion:** All parties receive email with OTP-protected download link.

**Branding:** All notification templates carry your organization's branding.

**Status:** Email included. SMS: Add-on (per message).

## 2.6 Audit Trail & Compliance

Every signed document is self-proving — the complete evidence record is embedded inside the PDF.

**Per signatory:** Identity, authentication method, precise timestamps, IP address.

**Document integrity:** Qualified timestamps + PAdES-LTV format — verifiable offline for decades.

**GDPR:** You are Data Controller, SK is Data Processor. SSN can be cryptographically hashed.

**Status:** Included.

## 2.7 Portal Access

Browser-based — no software installation needed.

**Create & send:** Upload documents, add signatories, configure settings, dispatch.

**Track:** Real-time status dashboard with per-signatory progress and event logs.

**Manage:** Cancel, correct, resend, or copy requests with all settings pre-filled.

**Status:** Included.

## 2.8 REST API Access

Full REST API included — embed signing directly into your business systems.

**Integration:** Multi-step flow for granular control, or OneStep endpoint for single-call dispatch.

**Real-time events:** Webhooks notify your system when documents are signed, rejected, or expired.

**Embedded signing:** Signers complete the process within your own application.

**Archiving:** Automated retrieval of signed PDFs upon completion.

**Status:** Included.

---

# PART 3: WORKFLOWS & ORCHESTRATION [INCLUDED / CONFIGURABLE]

How you control the signing process. Base workflow capabilities are included and active. Advanced orchestration features can be enabled per template or per tenant.

## 3.1 Signature Request Templates

Predefined workflow blueprints that standardize business processes across the organization. Each template pre-configures authentication strength, delivery methods, signing order, reminder schedules, and compliance rules. Different templates for different use cases — one for employment contracts, another for NDAs, a third for loan agreements — all under one tenant.

**Status:** Included. Multiple templates: Configuration work.

## 3.2 Signing Order

Simultaneous signing (all at once, any order) for straightforward agreements. Sequential signing (strict order, tier by tier) for approval chains. Mixed mode for complex hierarchies — multiple signers at the same tier, sequential between tiers. If any signer rejects, the entire workflow halts immediately.

**Status:** Included. Configurable per request.

## 3.3 Signatory Groups & Approval Hierarchies

Multi-level organizational approval flows. Group signatories by management tier so documents progress through the hierarchy in order. If a lower-level signer rejects, upper levels are never notified — the workflow stops at the rejection point.

**Status:** Configurable. Enabled per template.

## 3.4 Signatory Forwarding

A designated signer can delegate the signing task to an authorized colleague when they lack appropriate signing rights (e.g., contract value exceeds their mandate). The workflow continues without restarting. The full delegation chain is recorded in the audit trail.

**Status:** Included. Active by default.

## 3.5 Review Request (Reflection Period)

Regulatory compliance workflow that enforces a mandatory waiting period before signing is permitted. The recipient can read the full document immediately, but the Sign button remains disabled until the configured period expires (overnight, 7 days, 14 days). Designed for financial sector compliance — actively deployed with banking customers for consumer loan agreements.

**Status:** Configurable. Enabled per template.

## 3.6 Authentication Strength Control

Granular per-request control over identity verification, split between document viewing and signing. Reading authentication can be set from high (bank ID required to open) to none (open freely via link). Signing authentication must be equal to or higher than reading strength.

**Status:** Included. Configurable per request and per template.

## 3.7 Expiry & Reminders

Every request carries a hard expiration deadline (7, 14, 30, or 90 days — configurable maximum per tenant). Automatic reminders chase pending signatories at configurable intervals via email or SMS. Manual reminders available on-demand from the portal.

**Status:** Included. Schedule configurable.

## 3.8 Attachments & Reference Documents

Attach supporting files (terms and conditions, reference materials, appendices) that signatories can view during the signing ceremony but are not cryptographically signed. Keeps the signed document clean while providing full context.

**Status:** Included.

## 3.9 Signer Document Upload

Require signatories to upload supporting documents (ID copy, diploma, driving license) during the signing ceremony before they can proceed to sign. Collected documents are stored alongside the signed agreement.

**Status:** Configurable. Enabled per template.

## 3.10 Post-Sign Redirect

Automatically redirect signatories to an external URL after completing their signature — back to the customer's CRM, onboarding portal, or confirmation page. Seamless digital journey with no broken handoff.

**Status:** Included. Configurable per request.

## 3.11 Watchers / Observers

Add non-signing stakeholders who receive progress notifications and can download the finalized document. Used for compliance oversight, management visibility, or keeping legal counsel in the loop without adding them as signatories.

**Status:** Configurable. Enabled per template.

## 3.12 Custom Metadata

Tag signature requests with structured metadata fields for downstream processing. Enables automatic routing of completed documents to the right archive, CRM record, or business process via API/webhooks.

**Status:** Configurable. Enabled per tenant.

## 3.13 Bundle Signing

Signatories approve multiple documents in a single authenticated session. Authenticate once, sign a queue of pending documents in one go. Built for managers, executives, or HR staff who regularly process high volumes. Up to 50 documents per session.

**Status:** Configurable. Enabled per tenant.

---

# PART 4: ENTERPRISE CONFIGURATION [CONFIGURABLE]

These capabilities are configured during your Enterprise onboarding. Your organization provides the inputs and the service team handles the technical setup.

## 4.1 Custom Branding

Apply your organization's logo, colors, fonts, and background images to both the sender portal and the signer-facing interface. Branded PAdES cover page on finalized documents replaces default platform branding. Per-department branding variations available. Signers may not realize a third-party platform is involved.

**Status:** One-time setup.

## 4.2 Custom Domain

Host the signing experience on your own branded URL — either a standard subdomain (companyname.allekirjoitus.fi, included) or a fully custom domain (e.g., signing.yourcompany.fi) with dedicated SSL certificate.

**Status:** Subdomain included. Custom domain: Configuration work.

## 4.3 SSO / Active Directory Integration

OIDC integration with Azure AD / Entra ID for single sign-on. Employees click AD Login and are redirected to your organization's login — if already signed into Microsoft, no password entry needed. New employees are auto-provisioned on first login. Role changes in AD automatically update portal permissions. Removing from AD group revokes access immediately.

**Status:** Configuration work.

## 4.4 SMS & Email Customization

Custom SMS sender name (up to 11 characters). Custom sender email domain. Full control over email subject, body, HTML layout, footer, and legal disclaimers. Dynamic placeholders auto-inject recipient data, document names, and signing links. Multiple notification templates for different contract types. Option to suppress platform notifications entirely for API-driven flows.

**Status:** Included in branding setup. Additional templates: Configuration work.

## 4.5 Organizational Structure & Roles

Your dedicated tenant mirrors your organization's structure: Tenant → Department → Group → User. Role-based access control with Organization Admin (full visibility), Department Admin (department scope), and Department User (own requests only). Mapped from Active Directory automatically.

**Status:** Included.

## 4.6 Document Retention Control

Configurable storage period from default 90 days up to 365 days. Documents are permanently deleted after expiry — not recoverable. Automatic archiving can be configured to push completed documents to your archive system (Zefort, Arkinet, or custom) via API before the retention window closes.

**Status:** Configuration work.

## 4.7 Identity Code Handling

Configurable SSN/HETU collection — disable, make optional, make mandatory, or hash cryptographically in the final signature for GDPR data minimization. Settings can be locked at template level so individual senders cannot override your organization's privacy policy.

**Status:** Included (toggle). Enforcement: Configuration work.

## 4.8 Signatory Suggestions

Auto-complete for previously used contacts when adding signatories to new requests. Includes SSN-based lookup. Speeds up repeat workflows — no manual re-entry of recurring signer details.

**Status:** Included.

---

# PART 5: PRODUCTIZED ADD-ONS [ADD-ON]

Capabilities you activate on top of your Enterprise subscription, each with its own pricing — see the pricing block for current rates.

## 5.1 E-Forms: Form Orders

Replace static PDF filling with interactive web forms. Your employee selects a pre-built form in the portal, sends a private link to the recipient. The recipient authenticates, fills a dynamic web form with cascading logic (fields appear based on previous answers, supports 180+ fields), submits, and the platform generates a populated PDF and routes directly to signing. Form field values are extractable as structured metadata to your CRM/archive via API.

**Status:** Add-on (monthly per form + development work).

## 5.2 E-Forms: Open Forms

Public-facing, self-service forms with a unique URL you embed on your website. The visitor clicks, authenticates with strong bank ID (mandatory), fills the form, and is redirected straight to signing in one continuous flow. No invitation email, no waiting. Supports your branded domain.

**Status:** Add-on (monthly per form + development work).

## 5.3 E-Forms: Acroforms

If you already have fillable PDFs (standard Acroform format), attach them to a signature request. The signer fills in the fields directly during the signing ceremony. No custom development needed, no monthly form fee. Currently supports single-signatory requests only.

**Status:** Included in transaction cost.

## 5.4 Document Templating (API-driven)

Automated PDF generation from JSON data via the API. Your backend system sends key/value data with a template ID, the platform merges it into a predefined PDF template, generates a finalized document, and dispatches for signing — zero manual steps, zero portal interaction.

**Status:** Add-on (per transaction + development work for setup).

## 5.5 Mass Requests (CSV Import)

Dispatch hundreds or thousands of signing requests at once via ZIP + CSV upload. The platform matches documents to recipients and dispatches all requests automatically. Built for annual contract renewals, employee handbook distribution, supplier agreement rollouts, and policy acknowledgements.

**Status:** Standard transaction fees per request.

## 5.6 Document Sealing (Standalone)

Apply your organization's official digital seal to PDF documents without any human signatory — the digital equivalent of a company stamp. Every sealed document receives a qualified timestamp proving integrity and origin. API-driven for automated bulk processing of invoices, payslips, certificates, and official correspondence.

**Status:** Add-on (per document).

## 5.7 File Conversion

Your team uploads Office files (Word, Excel) or images — the platform automatically converts them to archival-grade PDF/A format before the signing process begins. No manual conversion step.

**Status:** Add-on (per document).

## 5.8 File Sharing

Securely distribute documents to recipients who need to view but not sign. The document is delivered via a link — the recipient verifies identity with SMS OTP before accessing. A controlled alternative to email attachments for sensitive materials.

**Status:** Add-on (per recipient).

## 5.9 API-driven Workflow Automation

Full end-to-end signing automation. Your CRM, ERP, or HR system creates requests, receives real-time status events via webhooks, and archives signed documents — all system-to-system, without anyone touching the portal. Existing integrations built for Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort, and Arkinet.

**Status:** Included (API access). Configuration work for custom integrations.

## 5.10 Professional Services

Development and configuration services for custom integrations, custom e-form creation, workflow template setup, and tenant configuration. Specialist consultation available for architecture, project management, and solution design. Workload estimate presented and approved before any work begins.

**Status:** Hourly rate — see pricing block.

---

# PART 8: WORKFLOW PATTERNS BY INDUSTRY

How different industries use the platform's capabilities.

## Banking & Finance
Sequential signing with review/reflection periods for regulatory compliance. Dynamic metadata tracking signatory roles (Applicant, Guarantor). Automated archiving to secure vaults upon completion. Open forms for public-facing loan applications with mandatory strong authentication.

## Human Resources
Sequential approval chains (HR initiates — candidate signs — manager countersigns). Signer document upload for collecting diplomas and ID copies during onboarding. Mass requests for distributing annual policy updates or handbook acknowledgments across the organization.

## Legal & Compliance
Signatory status views for legal counsel to verify all other parties have signed before adding final signature. Watchers for compliance oversight. Attachments for terms and conditions that accompany but do not form part of the signed document.

## Procurement & Sales
Simultaneous signing for rapid NDAs and straightforward agreements. Mass requests for supplier contract rollouts. Signatory forwarding when the designated signer needs to delegate to a colleague with appropriate authority.

## Operations & Administration
Standalone document sealing for bulk processing of invoices, certificates, and official correspondence. Bundle signing for executives processing high-volume approval queues. Document templating for automated generation of standardized documents from backend systems.

---

*Master KB Overview v1.0 - 2026-04-25*
*Overview depth: concise paragraphs, no tables, no sub-sections. Section headings match MASTER_KB_v2.md (detail depth) for consistent tool behavior across depth levels.*
*Parts 6, 7, 9 excluded from overview — pricing lives in the pricing block, terms and setup reference are separate attachments.*
