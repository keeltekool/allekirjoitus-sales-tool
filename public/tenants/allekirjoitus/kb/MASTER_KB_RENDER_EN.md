# Allekirjoitus.fi Enterprise - Knowledge Base (Render-Optimized)

Render-optimized content for the Sales Template Tool. Every section is structured for feature card rendering: lead paragraph + labeled detail items + status. No raw tables.

**Product:** Allekirjoitus.fi - cloud-based electronic signing platform by SK ID Solutions
**URL:** allekirjoitus.fi

---

## TOOL EXTRACTION GUIDE

This is the **detail** render-optimized version. Section headings match all other KB versions. Each section uses a consistent structure: introductory paragraph, structured detail items (bold label + description), and status line.

---

# PART 1: YOUR ENTERPRISE DEFAULT SETUP

What you get on day one as an Enterprise customer. Your dedicated tenant is configured with your organization's branding and access settings as part of the standard onboarding.

## 1.1 Signing & Authentication Defaults

Your Enterprise subscription includes eIDAS-compliant signing and strong authentication across Finland and Sweden from day one. These are your defaults — no additional setup, no extra cost.

**Signature level:** Advanced Electronic Signature (AES) — eIDAS-compliant, legally binding across the entire EU. Covers ~99% of Finnish business transactions.

**Authentication — Finland:** All major Finnish banks via Trust Network (OP, Nordea, Danske, Aktia, S-Pankki, Säästöpankki, POP, Ålandsbanken, OmaSP) and Finnish Mobile Certificate.

**Authentication — Sweden:** Swedish BankID and Freja eID.

**Signing invitations:** Email-based signing links sent to each signatory.

**Document retrieval:** OTP-protected download link via SMS after signing is complete.

**Signing order:** Configurable per request — simultaneous (all at once) or sequential (one after another).

**Document format:** PDF/A (max 100 MB).

**Users:** Unlimited user accounts.

**Status:** All included in your Enterprise subscription.

## 1.2 Portal, Access & Branding Defaults

Your employees log in with corporate credentials. Your portal carries your brand. Everything is configured during onboarding.

**Login:** SSO via Azure AD / Entra ID — employees use corporate credentials. No separate accounts or passwords.

**Portal branding:** Your logo, colors, fonts, and background on both the sender portal and all signer-facing pages. Branded PAdES cover page on every signed document.

**Portal URL:** companyname.allekirjoitus.fi — your company name in the signing URL.

**Email sender:** Notifications come from your corporate domain.

**SMS sender:** Your company name (max 11 characters) displayed on signers' phones.

**Message templates:** Email content, HTML layout, footer, and legal disclaimers customized to your brand.

**Organization structure:** Dedicated tenant with department hierarchy synced from Active Directory. Three roles — Organization Admin, Department Admin, Department User.

**Language:** Finnish, Swedish, and English — selectable per request.

**Status:** All included. Branding configured as a one-time setup during onboarding.

## 1.3 Workflow Feature Defaults

Your tenant ships with sensible workflow defaults. Advanced features can be activated per template or per tenant when needed.

### Active by default

**Signature request template:** One generic template ready for immediate use.

**Automatic reminders:** 2 days after dispatch + 1 day before expiry.

**Manual reminders:** On-demand from the portal to individual signers.

**Request expiry:** Sender selects per request — 7, 14, 30, or 90 days.

**Document retention:** 90 days from completion.

**Signatory forwarding:** Signers can delegate to authorized colleagues when they lack signing authority.

### Available via configuration

The following advanced capabilities are disabled by default but can be activated per template or per tenant through configuration work:

- Multiple signature request templates with locked compliance rules
- Watchers/observers for compliance oversight
- Signer document upload requirements (ID, diplomas)
- Review/reflection periods for regulatory compliance (banking)
- Bundle signing — authenticate once, sign up to 50 documents
- Custom metadata for CRM/archive routing
- Automatic archiving to external systems (Zefort, Arkinet)
- Cryptographic SSN hashing for GDPR compliance

**Status:** Base features active. Advanced features configurable.

---

# PART 2: CORE SIGNING SERVICE [INCLUDED]

Included in your Enterprise subscription. Transaction fees apply per use — see the pricing block for current rates.

## 2.1 Qualified & Advanced Electronic Signatures

Your signed contracts are legally binding across the entire EU, independently verifiable in standard Adobe Acrobat, and remain tamper-proof for decades — without any dependency on the Allekirjoitus.fi platform.

**Signature standard:** eIDAS Advanced Electronic Signature (AES). Covers ~99% of Finnish business transactions. Included.

**What your recipient sees:** Trusted validation indicator (blue banner, green checkmark) in Adobe Acrobat. No plugins, no internet connection needed for verification. Included.

**Tamper detection:** Any modification after signing — even a single pixel — breaks the seal. Adobe immediately flags the document as invalid. Included.

**Long-term validity:** PAdES-LTV format embeds all verification data inside the PDF. Your documents are independently verifiable offline for decades, with zero dependency on the platform. Included.

**The signed PDF contains:** Original document + your branded cover page (signatory names, auth methods, timestamps in columns) + cryptographic seal + qualified timestamp + individual audit trail per signatory. Included.

**Billing:** Per signatory dispatched, regardless of whether they sign. Per transaction.

## 2.2 Authentication Methods

Your signers use their own familiar bank credentials or national eID. No account creation, no software, no registration from the signer's side. You send a link — they authenticate and sign.

### Included (Finland + Sweden)

**Finland:** OP, Nordea, Danske Bank, Aktia, S-Pankki, Säästöpankki, POP Pankki, Ålandsbanken, OmaSP, Hightrust.id, Finnish Mobile Certificate. Included.

**Sweden:** Swedish BankID, Freja eID. Included.

### Nordic-Baltic Expansion

**Norway:** Norwegian BankID, Vipps. Add-on.

**Denmark:** MitID. Add-on.

**Baltics:** Smart-ID, Mobile-ID (Estonia, Latvia, Lithuania), Estonian e-Residency. Add-on.

### What You Can Control

**Per-department method selection:** Show only specific auth methods per department — e.g., only Bank ID for external-facing processes, all methods for internal.

**Four configuration levels:** Tenant default → template rules (locked) → per request → per individual signatory.

**Identity verification:** Require SSN match — if the identity code returned during authentication doesn't match what the sender pre-entered, signing is blocked.

**Reading vs signing split:** Require strong auth to even open a confidential document, or allow open viewing with strong auth only at the signing step.

**Mixed-country requests:** Send one signing request to a Finnish, Swedish, and Estonian signer — each authenticates with their own national eID.

## 2.3 QES - Qualified Electronic Signatures

The highest legal tier under EU law. A QES is equivalent to a handwritten signature and cannot be challenged in court on electronic form grounds. Unlike AES where the platform seals on the signer's behalf, with QES the signer's own personal certificate signs the document directly.

**National ID cards:** Available in Finland, Estonia, Latvia, Lithuania, Croatia, Czech Republic, Belgium. Signer inserts card into reader, reviews document, signs individually. Included.

**Smart-ID QES:** Available in Estonia, Latvia, Lithuania. Same legal standing, no card reader needed — signer confirms on mobile device. Included.

**When QES applies:** Government filings, notarized contracts, real estate, high-value financial agreements. In Baltic markets QES is the everyday business standard.

## 2.4 Light Signing Methods (SES)

For scenarios where strong identification is not available or not proportionate to the risk. Your signer verifies via a one-time code or drawn signature instead of bank credentials.

**SMS OTP:** Signer receives a code on their phone, enters it in the signing portal. Typical use: international signatories without Nordic/Baltic eID, internal approvals, supplier confirmations. Add-on (per signatory + per SMS).

**Email OTP:** Signer receives a code in their email inbox. Used when phone number is unavailable. Add-on (per signatory).

**InkSign:** Signer draws signature on touchscreen/tablet in a face-to-face setting. Typical use: bank branches, insurance offices, service counters — your staff verifies physical ID on site. Add-on (per signatory).

**Important:** SES does not collect a verified identity code (SSN). It confirms the signer's intent and access to a communication channel, not their cryptographic identity.

## 2.5 Delivery & Notifications

How signing requests reach your signers and how everyone stays informed.

**Invitation delivery:** Email with secure signing link by default. SMS delivery or combined Email + SMS available per recipient. SMS is an add-on per message.

**Notification language:** Finnish by default. Swedish or English selectable per request. Included.

**Automatic reminders:** 2 days after dispatch + 1 day before expiry. Custom schedule with configurable intervals available. Configuration work.

**Manual reminders:** Available from portal dashboard — trigger to individual signers on-demand. Included.

**Completion:** All parties receive email with OTP-protected download link. Automated retrieval via API/webhooks also available. Included.

**Branding:** Your branded email templates with custom sender domain. Notification suppression available for API-driven flows. Part of branding setup.

## 2.6 Audit Trail & Compliance

Every signed document is self-proving. The complete evidence record is embedded inside the PDF — no external system needed to verify authenticity, now or decades from now.

**Identity:** Full name, email, phone, verified SSN (when collected) captured per signatory.

**Authentication:** Exact method used, displayed as readable label (e.g., "Strong Bank ID FI").

**Activity:** Precise timestamps — invitation sent, document opened, authenticated, signed or rejected. IP address recorded.

**Evidence format:** Individual audit file per signatory, embedded as hidden attachment inside the PDF.

**Qualified timestamp:** eIDAS-qualified, proves exact signing moment. Any post-signing change invalidates the document.

**Long-term verification:** PAdES-LTV — all verification data embedded. Verifiable offline, independently, for decades.

**Cover page:** Your company logo + structured columns (name, auth method, timestamp). Customizable — add SSN, IP address columns. Per-department variations possible.

**GDPR:** You are Data Controller, SK ID Solutions is Data Processor. SSN in hidden metadata (not visible pages). Option to hash SSN cryptographically.

**Retention:** 90 days default, extendable to 365 days. Permanently deleted after expiry. Archive to your systems within this window.

## 2.7 Portal Access

Browser-based interface. No software installation. Your team creates, sends, tracks, and downloads signing requests from the web portal.

**How it works:** Log in via corporate SSO or email+password. Select a signature request template. Upload documents (PDF/A, up to 100 MB) + optional reference attachments. Add signatories with name, email, phone, and optionally SSN and signing tier. Configure notification language, expiry, auth strength, and watchers. Send — or save as draft.

**Dashboard:** Real-time status per request (Open, Closed, Expired, Cancelled, Rejected). Per-signatory progress. Timestamped event log.

**Actions:** Cancel, correct bounced emails and resend, send manual reminders, copy request with all settings pre-filled.

**Limitations:** Cannot add new signatories or change expiry after dispatch. Create a new request or use Copy.

**Archiving:** Manual archive button. Automatic archiving can be enabled.

**Status:** Included.

## 2.8 REST API Access

Embed signing directly into your business systems. Your CRM, ERP, or HR platform creates requests, receives real-time status events, and archives signed documents — all programmatically, without anyone touching the portal.

**API access:** Full REST API included in Enterprise subscription. Included.

**Integration options:** Multi-step flow for granular control, or OneStep endpoint for single-call dispatch. Included.

**Real-time events:** Webhooks push notifications to your system when documents are signed, rejected, or expired. Payloads contain only IDs (no personal data) — your system calls back to retrieve details. Included.

**Embedded signing:** Generate signing URLs within your own application — signers never leave your interface. Included.

**Post-sign redirect:** Signer returns to your application automatically after signing. Included.

**Automated archiving:** Retrieve signed PDFs + metadata upon completion, push to your archive (Zefort, Arkinet, or custom). Included / Configuration work for custom.

**Existing integrations:** Sympa HR (custom API), Salesforce Commerce Cloud (Kafka/Mulesoft + webhooks), Microsoft Dynamics CRM (REST API). Configuration work.

---

# PART 3: WORKFLOWS & ORCHESTRATION [INCLUDED / CONFIGURABLE]

How you control the signing process. Base workflow capabilities are included and active. Advanced orchestration features can be enabled per template or per tenant.

## 3.1 Signature Request Templates

Predefined workflow blueprints that standardize business processes across your organization. Each template pre-configures authentication strength, delivery method, signing order, reminder schedule, document formatting, and compliance rules for a specific process type.

**How they're used:** One template for employment contracts (sequential, SSN mandatory), another for NDAs (simultaneous, standard settings), another for loan agreements (reflection period, strong auth for reading). All under one tenant.

**Locked settings:** Compliance-critical rules can be locked so portal users cannot override them — they select the template and add recipients, the rules are enforced automatically.

**Default:** One generic template. Configurable to multiple.

**Status:** Included. Multiple templates: Configuration work.

## 3.2 Signing Order

Control the sequence in which signatories receive and execute their signatures.

**Simultaneous:** All signatories receive invitations at once, sign in any order. For standard agreements, NDAs, straightforward contracts.

**Sequential:** Tier 1 signs first, tier 2 invited only after tier 1 completes. For approval chains — employee signs, then manager, then director.

**Mixed:** Multiple signers at the same tier (simultaneous between them) + sequential between tiers. Two department heads at tier 1 (either order), CEO at tier 2 (only after both).

**On rejection:** If any signer rejects, the entire workflow halts immediately. Upper-tier signers are never notified. Reason for refusal is recorded.

**On expiry:** When the deadline passes without all signatures, status changes to Expired. Cannot be completed — create a new request or use Copy.

**Reminders:** Target only the active tier — signers waiting for their turn don't receive premature emails.

**Status:** Included. Configurable per request.

## 3.3 Signatory Groups & Approval Hierarchies

Multi-level organizational approval flows. Group signatories by management tier so documents progress through the hierarchy in order. If a lower-level signer rejects, upper levels are never notified — the workflow stops at the rejection point.

**Status:** Disabled by default. Enabled per template. Included.

## 3.4 Signatory Forwarding

A signer who lacks authority (e.g., contract value exceeds their signing mandate) can delegate to an authorized colleague. The signer clicks exit, enters the new signer's details, the workflow continues without restarting. The full delegation chain is recorded in the audit trail.

**Status:** Active by default. Can be disabled per template. Included.

## 3.5 Review Request (Reflection Period)

Enforces a mandatory waiting period before signing is permitted. The signer receives the document and can read it immediately, but the Sign button stays disabled until the period expires. After expiry, a second notification is sent with the actual signing link.

**Configurable periods:** Overnight (signing available next morning at 8:00 AM), 7 days, 14 days, custom durations.

**If signer tries early:** Redirected to view-only page. No Sign button until the period has fully elapsed.

**Regulatory basis:** Finnish consumer protection law mandates thinking time for consumer credit, personal loans, mortgages, and certain insurance products.

**Deployed for:** Banking loan compliance — configured per product type (7 days personal loans, 14 days mortgages).

**Status:** Disabled by default. Enabled per template. Configurable.

## 3.6 Authentication Strength Control

Granular per-request control over identity verification, split between document viewing and signing.

**High:** Bank ID / strong auth required to both view and sign. For confidential contracts.

**Medium:** SMS OTP to view and sign.

**Low:** Email link to view, email verification to sign.

**None (reading only):** Document opens freely via link. Signing always requires at least low-level auth.

**Rule:** Signing auth must be equal to or higher than reading auth.

**Status:** Configurable per request and per template. Included.

## 3.7 Expiry & Reminders

Every signing request carries a hard deadline and automatic follow-up.

**Expiry deadline:** Sender selects 7, 14, 30, or 90 days. Maximum configurable per tenant.

**Automatic reminders:** 2 days after dispatch + 1 day before expiry by default. Custom intervals and SMS reminders available.

**Manual reminders:** Available from portal to individual signers on-demand.

**Status:** Active by default. Schedule configurable. Included.

## 3.8 Attachments & Reference Documents

Attach terms and conditions, appendices, or reference materials alongside the document. Signatories can view them during the signing ceremony. Attachments are NOT cryptographically signed — the signed document stays clean while providing full context.

**Status:** Available. Included.

## 3.9 Signer Document Upload

Require signatories to upload supporting documents (ID copy, diploma, driving license, certificates) before they can proceed to sign. Uploaded files are stored alongside the signed agreement. Sender retrieves them from the portal.

**Status:** Disabled by default. Enabled per template. Configurable.

## 3.10 Post-Sign Redirect

After signing, the signer is automatically redirected to your specified URL — back to your CRM, onboarding portal, confirmation page, or next step in your digital process. No broken handoff.

**Status:** Configurable per request. Included.

## 3.11 Watchers / Observers

Non-signing stakeholders who receive progress notifications at each stage and can download the finalized document. They cannot sign, modify, or interfere with the workflow. Used for compliance oversight, management visibility, or keeping legal counsel informed.

**Status:** Disabled by default. Enabled per template. Configurable.

## 3.12 Custom Metadata

Tag each signature request with structured key-value fields (e.g., insurance policy number, HR case ID, contract reference). Metadata flows to downstream systems via API/webhooks, enabling automatic routing of completed documents to the correct archive folder, CRM record, or business process.

**Status:** Disabled by default. Enabled per tenant. Configurable.

## 3.13 Bundle Signing

Your signer authenticates once and signs multiple documents in a single session. The system groups all open requests for the same signer into one queue (same tenant, same auth level, matching signer details). Each document receives its own individual seal and timestamp. Up to 50 documents in one session. If the signer rejects one document within the bundle, the system creates a new bundle for the remaining documents.

**Status:** Disabled by default. Enabled per tenant. Configurable.

---

# PART 4: ENTERPRISE CONFIGURATION [CONFIGURABLE]

These capabilities are configured during your Enterprise onboarding. Your organization provides the inputs (brand guidelines, AD details, etc.) and the service team handles the technical setup.

## 4.1 Custom Branding

Apply your organization's visual identity across every touchpoint — the sender portal, signer-facing pages, and finalized PDF documents. Signers may not realize a third-party platform is involved.

**Portal (your employees):** Your logo, colors, fonts, and background replace the Allekirjoitus.fi default theme. One-time setup.

**Signing pages (your customers/signers):** Your full branding on every page the signer sees. Included in branding setup.

**Signed PDF cover page:** Your company logo + structured signatory metadata columns. Included in branding setup.

**Per-department variations:** Different branding per business unit if needed (e.g., HR vs Sales). Configuration work.

**You provide:** Graphic guidelines or CSS Bootstrap file. **Service team:** Creates custom theme and deploys. **Timeline:** 1-2 days.

**Status:** One-time setup.

## 4.2 Custom Domain

Host the signing experience on your own branded URL — reinforcing trust with every signing link your customers receive.

**Standard subdomain:** companyname.allekirjoitus.fi — your company name in the URL. Included.

**Fully custom domain:** e.g., signing.yourcompany.fi — your own domain, no visible connection to Allekirjoitus.fi. Configuration work.

**You provide:** SSL certificate + DNS records. **Service team:** Registers domain and configures routing. **Timeline:** 1-2 days.

## 4.3 SSO / Active Directory Integration

Seamless identity management through your existing Azure AD / Entra ID. No separate accounts, no password management, no manual provisioning.

**Employee logs in:** Clicks AD Login, redirected to your Entra ID. If already signed into Microsoft, the redirect is instant — no password entry.

**New employee joins:** IT adds them to the designated AD group. First portal login auto-creates their account with correct role and department.

**Employee changes role:** Promotion or department change in AD automatically updates their portal permissions on next login.

**Employee leaves:** IT removes from AD group. Portal access revoked immediately. No manual action in the signing portal.

**You provide:** Entra ID tenant details, security groups, claims structure. **Timeline:** A few days.

**Status:** Configuration work.

## 4.4 SMS & Email Customization

Full control over every communication your signers receive — from sender identity to message content.

**SMS sender name:** Your company name (max 11 characters) on the signer's phone. Included.

**Email sender domain:** Notifications come from your domain, not allekirjoitus.fi. Included in branding setup.

**Message content:** Full control over email subject, body, HTML layout, footer, and legal disclaimers. Included in branding setup.

**Dynamic placeholders:** Auto-inject recipient name, document title, signing link, expiry date. Included.

**Multiple templates:** Different notification content for different contract types. Configuration work.

**Notification suppression:** Turn off platform notifications entirely for API-driven flows where your system handles communication. Configuration work.

**You provide:** Text copy, legal disclaimers, HTML layout preferences. **Timeline:** Hours to 1 day.

## 4.5 Organizational Structure & Roles

Your dedicated tenant mirrors your organization's hierarchy with role-based access control.

**Tenant:** Your organization — all configuration, data, and users scoped to you.

**Department:** Your business units (synced from AD) — documents and users organized by department.

**Group:** Sub-teams within a department — fine-grained access control.

**User:** Individual employee — assigned role determines visibility and permissions.

**Organization Admin:** Sees all departments, all requests. Full user management and configuration.

**Department Admin:** Sees all requests in their department. Manages department users.

**Department User:** Sees own signature requests only. Creates and tracks own requests.

**Status:** Included.

## 4.6 Document Retention Control

Control how long signed documents are stored on the platform before permanent deletion.

**Default retention:** 90 days from completion.

**Maximum extension:** 365 days.

**After expiry:** Documents are permanently deleted — not recoverable.

**Your responsibility:** Download and archive signed documents to your own systems before the retention period ends.

**Automatic archiving:** Can be configured to push completed documents to your archive system (Zefort, Arkinet, or custom) automatically via API.

**Status:** Configuration work to extend or set up auto-archiving.

## 4.7 Identity Code Handling

Configurable SSN/HETU collection with four distinct modes to match your organization's privacy requirements.

**Disabled:** SSN field hidden. No identity code collected. Set at template level.

**Optional:** SSN field visible with per-signatory checkbox. Sender decides case-by-case. If SSN provided, strict match enforced during authentication — mismatch blocks signing. Default mode.

**Mandatory:** SSN field required. Cannot dispatch without SSN for every signatory. Lock at template level.

**Hashed:** Cryptographic hash in signed PDF instead of plain-text SSN. Actual SSN in broker logs for 5 years (court-retrievable). Lock at template level.

Settings can be locked at template level so individual senders cannot override your organization's privacy policy.

## 4.8 Signatory Suggestions

Auto-complete for previously used contacts when adding signatories to new requests. Includes SSN-based lookup. Speeds up repeat workflows — no manual re-entry of recurring signer details.

**Status:** Active. Included.

---

# PART 5: PRODUCTIZED ADD-ONS [ADD-ON]

Capabilities you activate on top of your Enterprise subscription, each with its own pricing — see the pricing block for current rates.

## 5.1 E-Forms: Form Orders

Replace static PDF filling with interactive web forms that capture structured data, generate a clean PDF, and route directly to signing — with every field value flowing automatically to your downstream systems.

**Who initiates:** Your employee selects a pre-built form in the portal and sends a private link to the recipient.

**Authentication:** Configurable — SMS OTP (default) or strong bank ID for sensitive forms.

**Dynamic fields:** Cascading/conditional logic (fields appear based on previous answers), custom validation rules, text fields, radio buttons, checkboxes, date fields, attachment uploads. Supports 180+ fields per form.

**After submission:** Form data merged into PDF template in real-time, signer redirected to signing ceremony.

**Data extraction:** Form field values extractable as structured metadata to your CRM/archive via API.

**Data privacy:** Form data stored temporarily as JSON, deleted immediately after PDF merge — only exists in the signed document.

**Form creation:** Service team builds each form based on your PDF template and requirements. Typically 1-2 days per form.

**Status:** Add-on (monthly per form + development work).

## 5.2 E-Forms: Open Forms

Public-facing, self-service forms with a unique URL you embed on your website. The visitor clicks, authenticates with strong bank ID (mandatory — the form is public), fills the form, and is redirected straight to signing in one continuous flow. No invitation email, no waiting.

**Who initiates:** The public visitor (your customer, applicant) — clicks a link on your website.

**Authentication:** Mandatory strong authentication before any data is entered.

**After submission:** Automatically redirected to signing — seamless, no email wait.

**Multi-signatory:** Supported. Primary filler can also be a signatory, additional signatories invited separately.

**Supports your branded domain.**

**Status:** Add-on (monthly per form + development work).

## 5.3 E-Forms: Acroforms

If you already have fillable PDFs (standard Acroform format), attach them to a signature request. The signer fills in the fields directly during the signing ceremony. No custom development needed, no monthly form fee.

**Limitation:** Currently supports single-signatory requests only.

**No development needed:** Works with your existing fillable PDFs as-is.

**Status:** Included in transaction cost.

## 5.4 Document Templating (API-driven)

Your backend system sends JSON key-value data via the API along with a template ID. The platform merges the data into a predefined PDF template, generates a finalized document, and dispatches for signing — zero manual steps, zero portal interaction.

**How it works:** Your system makes a REST API call with JSON data + template ID. Platform fills in the PDF and dispatches.

**Template format:** Standard fillable PDF (Acroform) with placeholder fields. JSON keys must match field names in the template.

**Setup:** You provide the PDF template + JSON schema. Service team configures the mapping. Typically 0.5-2 hours.

**Status:** Add-on (per transaction + development work for setup).

## 5.5 Mass Requests (CSV Import)

Dispatch hundreds or thousands of signing requests at once. Upload a ZIP file of documents + a CSV file mapping each document to its signatory via a unique identifier. The platform matches documents to recipients and dispatches all requests automatically.

**CSV contains:** Signatory names, emails, phone numbers, unique identifier linking to the corresponding document in the ZIP.

**Typical use:** Annual contract renewals, employee handbook distribution, supplier agreement rollouts, policy acknowledgements.

**Tracking:** Each request tracked individually in the portal dashboard.

**Status:** Standard transaction fees per request.

## 5.6 Document Sealing (Standalone)

Apply your organization's official digital seal to PDF documents without any human signatory — the digital equivalent of a company stamp. Every sealed document receives a qualified timestamp proving integrity and origin.

**Use cases:** Automated bulk sealing of invoices, payslips, certificates, official correspondence.

**How it works:** API-driven. Your system sends documents, platform applies seal + qualified timestamp, returns sealed PDFs.

**Status:** Add-on (per document).

## 5.7 File Conversion

Your team uploads Office files (Word, Excel) or images — the platform automatically converts them to archival-grade PDF/A format before the signing process begins. No manual conversion step.

**Default:** PDF/A required. Without this add-on, only PDF uploads are accepted.

**Status:** Add-on (per document).

## 5.8 File Sharing

Securely distribute documents to recipients who need to view but not sign. The document is delivered via a link — the recipient verifies identity with SMS OTP before accessing. A controlled alternative to email attachments for sensitive materials.

**Access protection:** Email link + SMS OTP verification (two-factor).

**Status:** Add-on (per recipient).

## 5.9 API-driven Workflow Automation

Full end-to-end signing automation. Your CRM, ERP, or HR system creates requests, receives real-time status events via webhooks, and archives signed documents — all system-to-system, without anyone touching the portal. Some Enterprise customers operate entirely API-only.

**What it enables:** Programmatic request creation, webhook-driven status updates, automated document retrieval and archiving.

**Existing integrations built:** Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort archive, Arkinet archive.

**Status:** Included (API access). Configuration work for custom integrations.

## 5.10 Professional Services

Expert assistance for custom integrations, form development, and platform configuration.

**Development & Configuration:** Custom integrations, form development, template setup, tenant configuration, support/change requests. Minimum 0.5 hours. Hourly rate — see pricing block.

**Specialist Consultation:** Architecture consultation, project management, solution design. Minimum 0.5 hours. Hourly rate — see pricing block.

**Customization & Branding:** Portal UI, signer view, message templates, PAdES cover page. One-time fee — see pricing block.

Before any work begins, a workload estimate is presented and approved. Work is billed on actual hours.

---

# PART 6: ENTERPRISE PRICING REFERENCE

All prices VAT exclusive. This part serves as the data source for the pricing block and standalone price list template.

## 6.1 Monthly Subscription Fees

**Platform Access Fee:** 275.00 EUR/month — mandatory base fee for Enterprise tier access.

**Additional Environment:** 75.00 EUR/month — per additional tenant (subsidiary, separate business unit).

**Online Form Template:** 25.00 EUR/month — per active form template.

**Nordic-Baltic Authentication:** 125.00 EUR/month — cross-border eID authentication methods.

## 6.2 Transaction Fees

**Signing Request — Strong Auth (AES):** 0.80 EUR per signatory. Includes strong identification, signing ceremony, and document sealing with qualified timestamp.

**Signing Request — Light Auth (SES):** 0.65 EUR per signatory. SMS OTP, Email OTP, or drawn signature.

**SMS Message:** 0.10 EUR per message. Signing invitations and document retrieval notifications.

**Document Sealing:** 0.30 EUR per document. Organizational e-seal with qualified timestamp.

**File Conversion:** 0.25 EUR per document. Non-PDF to PDF/A format conversion.

**File Sharing:** 0.15 EUR per recipient. Secure document delivery via SMS OTP link.

## 6.3 One-Time & Professional Fees

**Customization & Branding:** 980.00 EUR one-time. Portal UI, signer view, message templates, PAdES cover.

**Development & Configuration:** 145.00 EUR/hour (min 0.5h). Custom integrations, form work, support requests.

**Specialist Consultation:** 190.00 EUR/hour. Architecture, project management, solution design.

## 6.4 Billing Rules

- A Signature Request is charged **per signatory when a document is dispatched**, regardless of whether the signatory completes or declines.
- A document sent to four signatories consumes four Signature Requests.
- SMS costs are billed separately for Enterprise customers.
- SK is entitled to charge 145 EUR/hour for resolving issues not attributable to SK or caused by the customer's equipment or network.

---

# PART 7: KEY SERVICE TERMS

Extracted from Allekirjoitus.fi Service Terms and Conditions v1.0 (effective 14.01.2026).

**Service provider:** SK ID Solutions AS.

**Service type:** Cloud-based SaaS for electronic signing of PDF documents.

**Enterprise tier:** Flexible, integration-capable service supporting advanced workflows and customization. API access, SSO, custom branding, online forms.

**Access:** Web portal and API system integrations.

**Users:** Unlimited.

**Login:** SSO with organizational credentials and/or email + password.

**Authentication:** AES default; optional SES and QES.

**Billing:** Monthly platform base fee + per-transaction fees + SMS charges.

**Support:** All requests via support@allekirjoitus.fi. Mon-Fri, 09:00-17:00 EET.

**Service level:** Best-effort basis. No contractual SLA with penalty clauses.

**Contact persons:** Enterprise customers must appoint both a Contractual Contact Person and a Technical Contact Person.

**User administration:** Automated via SSO/AD. First login auto-creates account. AD group removal revokes access.

**Data processing:** Customer is Data Controller. SK ID Solutions is Data Processor.

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

# PART 9: CONFIGURATION SETUP REFERENCE

What's needed from your organization to configure Enterprise capabilities.

**SSO/AD Integration:** You provide Azure AD/Entra ID tenant details, security groups, claims structure. Service team configures identity provisioning, maps AD groups to portal roles. Timeline: a few days.

**Custom Branding:** You provide brand guidelines, logos, colors, or Bootstrap files. Service team applies custom theme, configures branded UI and PAdES cover. Timeline: 1-2 days.

**Custom Domain:** You provide SSL certificate, updated DNS records. Service team registers domain, configures routing. Timeline: 1-2 days.

**Message Templates:** You provide translated text copy, legal disclaimers, HTML preferences. Service team configures email/SMS layouts, maps dynamic placeholders. Timeline: hours to 1 day.

**E-Form Development:** You provide static PDF forms, validation/logic requirements. Service team codes HTML form, builds validation rules, deploys. Timeline: 1-2 days per form.

**Document Templating:** You provide JSON payload schema, Acroform PDF template with placeholder fields. Service team uploads template, configures JSON-to-PDF field mapping. Timeline: 0.5-2 hours.

**Archiving Integration:** You provide target API endpoint, authentication keys, webhook requirements. Service team builds automated connector for signed PDF + metadata push. Timeline: project-based.

---

*Master KB Render-Optimized v1.0 - 2026-04-25*
*Format: Structured prose with labeled detail items. No raw markdown tables. Optimized for feature card rendering in the Sales Template Tool.*
