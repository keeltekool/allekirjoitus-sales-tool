# Allekirjoitus.fi - Enterprise Feature Overview

Content inventory for enterprise introduction material and the Proposals/Offers tool. Structured around what an enterprise customer gets, how they can configure it, what workflows they can build, and what additional capabilities they can activate.

---

## Core Signing Service

**Qualified & Advanced Electronic Signatures**
eIDAS-compliant digital signing across the EU. Every signed document receives a qualified timestamp and integrity seal via an AATL-certified certificate, ensuring long-term legal validity and tamper-proof evidence.

**Broad Authentication Coverage**
Strong authentication (AES) via Finnish Trust Network banks (OP, Nordea, Danske, Aktia, S-Pankki, and more), Finnish Mobile Certificate, Swedish BankID, Norwegian BankID, Vipps, Danish MitID, Baltic Smart-ID, Mobile-ID, and Estonian e-Residency. Qualified signatures (QES) via national ID cards (Finland, Estonia, Latvia, Lithuania, Croatia, Czech Republic, Belgium) and Smart-ID QES mode.

**Light Signing Methods (SES)**
SMS OTP, Email OTP, and hand-drawn signature (InkSign) for lower-risk scenarios where strong identity verification is not required. Enterprise-only add-on.

**Portal & REST API**
Full-featured web portal for document management plus a REST API for end-to-end workflow automation. Webhook subscriptions deliver real-time lifecycle events (request created, status updated, signatory signed, request completed) with privacy-safe payloads - no polling required.

**Audit Trail & Compliance**
Complete evidence record per transaction. PAdES-sealed PDF output with qualified timestamps. Document integrity guaranteed from signing through long-term archival.

---

## Workflows & Workflow Configuration

**Signature Request Templates**
Predefined workflow blueprints that standardize business processes across the organization. Each template pre-configures authentication strength, delivery methods, signing order, reminder schedules, and document formatting rules. Different templates for different use cases - one for employment contracts, another for procurement NDAs, a third for loan agreements - all under one tenant.

**Signing Order**
- **Simultaneous** - all signatories receive invitations at once and sign in any order. Fast turnaround for straightforward agreements.
- **Sequential** - signatories are assigned a strict order (1, 2, 3...). The next signer is only invited after the previous one completes. Built for approval chains where sequence matters.

**Signatory Groups & Approval Hierarchies**
Multi-level organizational approval flows. Group signatories by management tier so documents progress through the hierarchy in order. If a lower-level signer rejects, the workflow halts - upper levels are never notified unnecessarily.

**Signatory Forwarding**
A designated signer can delegate the signing task to an authorized colleague when they lack appropriate signing rights (e.g., contract value exceeds their mandate). The workflow continues without restarting.

**Review Request (Reflection Period)**
Regulatory compliance workflow that enforces a mandatory waiting period before signing is permitted. The recipient can read the full document immediately, but the Sign button remains disabled until the configured period expires (overnight, 7 days, 14 days). Designed for financial sector compliance - actively deployed with banking customers for consumer loan agreements.

**Authentication Strength Control**
Granular per-request control over identity verification, split between document viewing and signing:
- **Reading authentication** - set to high (bank ID required to open), medium, low, or none (open freely via link)
- **Signing authentication** - set to high, medium, or low. Must be equal to or higher than reading strength.

**Expiry & Automatic Reminders**
Every request carries a hard expiration deadline (7, 14, 30, or 90 days - configurable maximum per tenant). Automatic reminders chase pending signatories at configurable intervals (e.g., 2 days after dispatch, 1 day before expiry) via email or SMS. Manual reminders available on-demand from the portal.

**Attachments & Reference Documents**
Attach supporting files (terms and conditions, reference materials, appendices) that signatories can view during the signing ceremony but are not cryptographically signed. Keeps the signed document clean while providing full context.

**Signer Document Upload**
Require signatories to upload supporting documents (ID copy, diploma, driving license) during the signing ceremony before they can proceed to sign. Collected documents are stored alongside the signed agreement.

**Post-Sign Redirect**
Automatically redirect signatories to an external URL after completing their signature - back to the customer's CRM, onboarding portal, or confirmation page. Seamless digital journey with no broken handoff.

**Watchers / Observers**
Add non-signing stakeholders who receive progress notifications and can download the finalized document. Used for compliance oversight, management visibility, or keeping legal counsel in the loop without adding them as signatories.

**Custom Metadata**
Tag signature requests with structured metadata fields for downstream processing. Enables automatic routing of completed documents to the right archive, CRM record, or business process.

---

## Enterprise Platform Features

**Custom Branding**
Apply your organization's logo, colors, fonts, and background images to both the sender portal and the signer-facing interface. Branded PAdES cover page on finalized documents replaces default platform branding.

**Custom Domain**
Host the signing experience on your own branded URL - either a subdomain or a fully custom domain with dedicated SSL certificate.

**SMS & Email Customization**
Custom SMS sender name (up to 11 characters). Custom sender email domain. Full control over email and SMS template content, HTML layout, and footer. Dynamic placeholders auto-inject recipient data, document names, and signing links. Option to suppress platform notifications entirely for API-driven flows.

**SSO / Active Directory Integration**
OIDC integration with Azure AD / Entra ID for single sign-on. Automated user provisioning and role assignment based on AD group claims. Employees log in with corporate credentials - no separate account needed.

**Organizational Structure & Roles**
Deep hierarchy support: Tenant - Department - Group - User. Role-based access control with Organization Admin (sees everything), Department Admin (sees department), and Department User (sees own requests only).

**Language Support**
Finnish, Swedish, and English across the portal, signing flows, and notification templates.

**Document Retention Control**
Configurable storage period from default 90 days up to 365 days.

**Identity Code Handling**
Configurable SSN/HETU collection - enable, make mandatory, or hash cryptographically in the final signature for privacy compliance.

**Signatory Suggestions**
Auto-complete for previously used contacts, including SSN-based lookup, to accelerate request creation for repeat workflows.

---

## Billable Features (Transactional)

**Signing Request - Strong Authentication (AES)**
Per-signatory fee for document signing using strong electronic identification. Includes identity verification, the signing ceremony, and document sealing with qualified timestamp.

**Signing Request - Light Authentication (SES)**
Per-signatory fee for signing via SMS OTP, email OTP, or hand-drawn signature. Includes document sealing.

**SMS Notification**
Per-message fee for every SMS sent by the platform - signing invitations, OTP codes, and document download notifications.

**Document Sealing (Standalone)**
Per-document fee for applying an organizational e-seal and qualified timestamp without routing to a human signatory. Used for automated bulk sealing of invoices, payslips, certificates, and official correspondence via API.

**File Conversion**
Per-document fee for automatic conversion of non-PDF uploads (Office files, images) to PDF/A format prior to signing.

**File Sharing**
Per-recipient fee for secure document delivery without a signing step. Recipients access files via an SMS OTP-protected link. Designed for distributing finalized or reference documents to parties who only need to view, not sign.

---

## Add-on Capabilities

**E-Forms (Dynamic Online Forms)**
Replace static PDFs with interactive HTML web forms that feed directly into the signing workflow. Three modes available:
- **Form Orders** - private form links sent to specific recipients, with cascading logic and automatic metadata extraction to CRM/archive systems
- **Open Forms** - public-facing forms with unique URLs for embedding on websites (e.g., loan applications, insurance claims), with mandatory strong authentication before data entry. Visitor completes the form and is redirected straight to signing - no email invitation wait.
- **Acroforms** - standard fillable PDF fields completed during the signing flow, no custom development required

**Document Templating (API-driven)**
Automated PDF generation from JSON data via the API. The customer's backend sends key/value data, the platform merges it into a predefined PDF template, prepares the workflow, and dispatches for signature - zero manual steps, zero portal interaction.

**Bundle Signing**
Signatories approve multiple documents in a single authenticated session. Authenticate once, sign a queue of pending documents in one go. Built for managers, executives, or HR staff who regularly process high volumes.

**Mass Requests (CSV Import)**
Dispatch hundreds or thousands of signing requests at once via ZIP + CSV upload. Built for bulk operations like annual contract renewals, employee handbook distribution, or supplier agreement rollouts.

**API-driven Workflow Automation**
Full end-to-end automation for enterprise backend systems:
- Programmatic request creation from CRM/ERP systems
- Webhook-driven status updates pushed to customer endpoints in real-time
- Automated retrieval and archiving of signed documents upon completion
- No portal interaction required - the entire lifecycle runs system-to-system

**Professional Services**
Development and configuration services for custom integrations, custom e-form creation, workflow template setup, and tenant configuration.

---

## Workflow Patterns by Industry

**Banking & Finance**
Sequential signing with review/reflection periods for regulatory compliance. Dynamic metadata tracking signatory roles (Applicant, Guarantor). Automated archiving to secure vaults upon completion. Open forms for public-facing loan applications with mandatory strong authentication.

**Human Resources**
Sequential approval chains (HR initiates - candidate signs - manager countersigns). Signer document upload for collecting diplomas and ID copies during onboarding. Mass requests for distributing annual policy updates or handbook acknowledgments across the organization.

**Legal & Compliance**
Signatory status views for legal counsel to verify all other parties have signed before adding final signature. Watchers for compliance oversight. Attachments for terms and conditions that accompany but do not form part of the signed document.

**Procurement & Sales**
Simultaneous signing for rapid NDAs and straightforward agreements. Mass requests for supplier contract rollouts. Signatory forwarding when the designated signer needs to delegate to a colleague with appropriate authority.

**Operations & Administration**
Standalone document sealing for bulk processing of invoices, certificates, and official correspondence. Bundle signing for executives processing high-volume approval queues. Document templating for automated generation of standardized documents from backend systems.
