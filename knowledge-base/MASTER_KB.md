# Allekirjoitus.fi Enterprise - Master Knowledge Base

Single source of truth for the Sales Template Tool. Every template pulls content from this document.

**Product:** Allekirjoitus.fi - cloud-based electronic signing platform by SK ID Solutions
**Scope:** Enterprise tier only. Portal/bulk packages are out of scope.
**Audience:** Enterprise buyers (CTOs, Heads of Legal, IT directors, procurement)
**URL:** allekirjoitus.fi
**Service provider:** SK ID Solutions AS (Parnu mnt 141, 11314 Tallinn, Estonia)

---

## TOOL EXTRACTION GUIDE

This document serves three template types. The tool reads section keys (## headings) and renders content based on user selections.

### Template mapping

| Template | Parts used | Pricing toggle | Depth toggle |
|----------|-----------|---------------|-------------|
| **Enterprise Offer** | Parts 1-5, optionally 6-7 | Yes (shows/hides prices inline + Part 6) | Overview (description paragraphs only) / Deep-dive (full tables + sub-sections) |
| **Feature Introduction** | Parts 2-5, optionally 8 | Optional | Overview / Deep-dive |
| **Pricing Proposal** | Parts 1, 6, 7, selected items from 2-5 | Always on | Single depth |

### Section toggle logic

Every `##` heading (e.g., `## 2.1 Qualified & Advanced Electronic Signatures`) is an independently toggleable section in the sidebar. The sidebar groups them by Part (Layer).

### Status indicators

Each Part header contains a status tag in brackets:
- `[INCLUDED]` - no additional feature cost, transaction fees apply
- `[CONFIGURABLE]` - available, requires setup (fee noted per section)
- `[ADDITIONAL COST]` - add-on with own pricing

### Language

This document is English. Finnish translations are maintained as a parallel document `MASTER_KB_FI.md`. The tool switches between them based on language toggle.

### Fixed elements (always rendered, not toggleable)

- Document header (logo, date, customer name)
- CTA band (KA contact details)
- Footer

---

# PART 1: YOUR ENTERPRISE DEFAULT SETUP

What you get on day one as an Enterprise customer. Your dedicated tenant is configured with your organization's branding and access settings as part of the standard onboarding.

## 1.1 Signing & Authentication Defaults

| Component | Your default | Can be extended to | Cost |
|-----------|-------------|-------------------|------|
| **Signature level** | Advanced Electronic Signature (AES) - eIDAS-compliant, legally binding across the EU | Qualified Electronic Signature (QES) via national ID cards and Smart-ID. Simple Electronic Signature (SES) via SMS OTP, Email OTP, drawn signature. | QES: included / SES: 0.65 EUR per transaction |
| **Authentication - Finland** | All Finnish banks via Trust Network (OP, Nordea, Danske, Aktia, S-Pankki, Saastopankki, POP, Alandsbanken, OmaSP), Finnish Mobile Certificate | - | Included |
| **Authentication - Sweden** | Swedish BankID, Freja eID | - | Included |
| **Authentication - Nordic-Baltic** | Not active by default | Norwegian BankID, Vipps, Danish MitID, Smart-ID and Mobile-ID (Estonia, Latvia, Lithuania), Estonian e-Residency | 125 EUR/month add-on |
| **Invitation delivery** | Email | SMS delivery or Email + SMS combined | 0.10 EUR per SMS |
| **Document retrieval** | OTP-protected download link via SMS | Automated retrieval and archiving via API/webhooks | Included (API) or development work (custom archive connector) |
| **Signing order** | Configurable per request: simultaneous or sequential | Multi-level signatory groups, hybrid modes, approval hierarchies | Included |
| **Document format** | PDF/A required (max 100 MB) | Office files and images accepted with auto-conversion | 0.25 EUR per document (file conversion) |
| **Users** | Unlimited | - | Included |

## 1.2 Portal, Access & Branding Defaults

| Component | Your default | Can be extended to | Cost |
|-----------|-------------|-------------------|------|
| **Login** | SSO via your Azure AD / Entra ID (employees log in with corporate credentials) | Username + password also available | Included (SSO setup as part of onboarding) |
| **Portal branding** | Your organization's branding (logo, colors, fonts, background) on both portal and signer-facing pages | Per-department branding variations | Included (980 EUR one-time setup) |
| **PAdES cover page** | Your company logo with signatory metadata (name, auth method, timestamp) | Custom columns (SSN, IP address), per-department variations | Included in branding setup |
| **Portal URL** | companyname.allekirjoitus.fi | Fully custom domain (e.g., signing.yourcompany.fi) with dedicated SSL | Development work |
| **Email sender domain** | yourcompany domain (configured during setup) | - | Included in branding setup |
| **SMS sender name** | Your company name (max 11 characters) | - | Included |
| **Message templates** | Customized to your brand (email content, HTML layout, footer, legal disclaimers) | Additional templates per business process, notification suppression for API flows | Included in branding setup |
| **Organization structure** | Your dedicated tenant with department hierarchy mapped from AD | Multi-department structure with scoped visibility | Included |
| **User roles** | Organization Admin (full visibility), Department Admin (department scope), Department User (own requests) | - | Included |
| **Language** | Finnish, Swedish, English - selectable per request | - | Included |

## 1.3 Workflow Feature Defaults

| Feature | Default state | Can be changed to | Cost |
|---------|--------------|-------------------|------|
| **Signature request templates** | One default template | Multiple templates per business process, each with locked rules (auth, signing order, reminders) | Configuration work |
| **Automatic reminders** | Active: 2 days after dispatch + 1 day before expiry | Custom schedules (specific intervals, SMS reminders) | Configuration work / SMS: 0.10 EUR |
| **Manual reminders** | Active: on-demand from portal | - | Included |
| **Request expiry** | Configurable per request: 7, 14, 30, or 90 days | Custom maximum per tenant | Configuration work |
| **Document retention** | 90 days | Extendable up to 365 days | Configuration work |
| **Signatory forwarding** | Active | Can be disabled per template | Included |
| **Signatory document upload** | Disabled | Enabled per template (signer must upload ID, diplomas, etc. before signing) | Configuration work |
| **Watchers/observers** | Disabled | Enabled per template (non-signing stakeholders receive notifications) | Configuration work |
| **Signatory status view** | Disabled | Enabled per template (signers see other signers' status) | Configuration work |
| **Review/reflection period** | Disabled | Enabled per template (mandatory waiting period: overnight, 7 days, 14 days) | Configuration work |
| **Bundle signing** | Disabled | Enabled per tenant (authenticate once, sign multiple documents) | Configuration work |
| **SSN/identity code handling** | Stored in XAdES XML metadata (plain text) | Cryptographic hashing for GDPR data minimization. Can be locked at template level. | Included (toggle) / Configuration work (to enforce) |
| **Archiving** | Manual download from portal | Automatic push to external archive (Zefort, Arkinet, custom) via API/webhooks | Development work |
| **Custom metadata** | Disabled | Enabled (key-value fields per request for downstream routing to CRM/archive) | Configuration work |
| **Manual workflow steps** | Disabled | Custom portal statuses ("In progress", "Processed") for internal coordination | Configuration work |

---

# PART 2: CORE SIGNING SERVICE [INCLUDED]

Included in your Enterprise subscription. Transaction fees (0.80 EUR per strong signature, 0.10 EUR per SMS) apply per use.

## 2.1 Qualified & Advanced Electronic Signatures

Your signed contracts are legally binding across the entire EU, independently verifiable in standard Adobe Acrobat, and remain tamper-proof for decades - without any dependency on the Allekirjoitus.fi platform.

| Aspect | Detail | Status |
|--------|--------|--------|
| **Signature standard** | eIDAS Advanced Electronic Signature (AES). Covers ~99% of Finnish business transactions. | Included |
| **What your recipient sees** | Trusted validation indicator (blue banner, green checkmark) in Adobe Acrobat. No plugins, no internet needed. | Included |
| **Tamper detection** | Any modification after signing - even a single pixel - breaks the seal. Adobe immediately flags the document as invalid. | Included |
| **Long-term validity** | PAdES-LTV format embeds all verification data inside the PDF. Your documents are independently verifiable offline for decades. | Included |
| **The signed PDF contains** | Original document + your branded cover page (signatory names, auth methods, timestamps in columns) + cryptographic seal + qualified timestamp + individual audit trail per signatory | Included |
| **Cost** | 0.80 EUR per signatory dispatched (regardless of whether they sign) | Per transaction |

## 2.2 Authentication Methods

Your signers use their own familiar bank credentials or national eID. No account creation, no software, no registration from the signer's side. You send a link - they authenticate and sign.

### Included (Finland + Sweden)

| Market | Methods | Cost |
|--------|---------|------|
| **Finland** | OP, Nordea, Danske Bank, Aktia, S-Pankki, Saastopankki, POP Pankki, Alandsbanken, OmaSP, Hightrust.id, Finnish Mobile Certificate | Included |
| **Sweden** | Swedish BankID, Freja eID | Included |

### Nordic-Baltic expansion

| Market | Methods | Cost |
|--------|---------|------|
| **Norway** | Norwegian BankID, Vipps | 125 EUR/month add-on |
| **Denmark** | MitID | 125 EUR/month add-on |
| **Baltics** | Smart-ID, Mobile-ID (Estonia, Latvia, Lithuania), Estonian e-Residency | 125 EUR/month add-on |

### What you can control

| Control | Detail |
|---------|--------|
| **Per-department method selection** | Show only specific auth methods per department (e.g., only Bank ID for external-facing, all methods for internal) |
| **Four configuration levels** | Tenant default - template rules (locked) - per request - per individual signatory |
| **Identity verification** | Require SSN match: if the identity code returned during authentication doesn't match what the sender pre-entered, signing is blocked |
| **Reading vs signing split** | Require strong auth to even open a confidential document, or allow open viewing with strong auth only at the signing step |
| **Mixed-country requests** | Send one signing request to a Finnish, Swedish, and Estonian signer - each authenticates with their own national eID |

## 2.3 QES - Qualified Electronic Signatures

The highest legal tier under EU law. A QES is equivalent to a handwritten signature and cannot be challenged in court on electronic form grounds. Unlike AES where the platform seals on the signer's behalf, with QES the signer's own personal certificate signs the document directly.

| Method | Markets | How it works | Cost |
|--------|---------|-------------|------|
| **National ID cards** | Finland, Estonia, Latvia, Lithuania, Croatia, Czech Republic, Belgium | Signer inserts card into reader, reviews document, signs each document individually | Included |
| **Smart-ID QES** | Estonia, Latvia, Lithuania | Same legal standing, no card reader needed. Signer confirms on mobile device. | Included |

**When QES applies:** Government filings, notarized contracts, real estate, high-value financial agreements. In Baltic markets QES is the everyday business standard.

## 2.4 Light Signing Methods (SES)

For scenarios where strong identification is not available or not proportionate to the risk. Your signer verifies via a one-time code or drawn signature instead of bank credentials.

| Method | How the signer experiences it | Typical use | Cost |
|--------|------------------------------|-------------|------|
| **SMS OTP** | Receives a code on their phone, enters it in the signing portal | International signatories without Nordic/Baltic eID, internal approvals, supplier confirmations | 0.65 EUR + 0.10 SMS |
| **Email OTP** | Receives a code in their email inbox | When phone number is unavailable | 0.65 EUR |
| **InkSign** | Draws signature on touchscreen/tablet in a face-to-face setting | Bank branches, insurance offices, service counters - your staff verifies physical ID on site | 0.65 EUR |

**Important:** SES does not collect a verified identity code (SSN). It confirms the signer's intent and access to a communication channel, not their cryptographic identity.

## 2.5 Delivery & Notifications

How signing requests reach your signers and how everyone stays informed.

| Aspect | Default | Configurable to | Cost |
|--------|---------|----------------|------|
| **Invitation delivery** | Email with secure signing link | SMS delivery, or email + SMS combined per recipient | SMS: 0.10 EUR/msg |
| **Notification language** | Finnish | Swedish or English, selectable per request | Included |
| **Automatic reminders** | 2 days after dispatch + 1 day before expiry | Custom schedule with configurable intervals | Config work / SMS extra |
| **Manual reminders** | Available from portal dashboard | Trigger to individual signers on-demand | Included |
| **Completion** | All parties receive email with OTP-protected download link | Automated retrieval via API/webhooks | Included |
| **Branding** | Your branded email templates | Custom sender domain, suppression for API flows | Part of branding setup |

## 2.6 Audit Trail & Compliance

Every signed document is self-proving. The complete evidence record is embedded inside the PDF - no external system needed to verify authenticity, now or decades from now.

| What's captured per signatory | Detail |
|------------------------------|--------|
| **Identity** | Full name, email, phone, verified SSN (when collected) |
| **Authentication** | Exact method used, displayed as readable label (e.g., "Strong Bank ID FI") |
| **Activity** | Precise timestamps: invitation sent, document opened, authenticated, signed or rejected. IP address recorded. |
| **Evidence format** | Individual audit file per signatory, embedded as hidden attachment inside the PDF |

| Document integrity | Detail |
|-------------------|--------|
| **Qualified timestamp** | eIDAS-qualified, proves exact signing moment, any post-signing change invalidates the document |
| **Long-term verification** | PAdES-LTV - all verification data embedded. Verifiable offline, independently, for decades. |
| **Cover page** | Your company logo + structured columns (name, auth method, timestamp). Customizable: add SSN, IP address columns. Per-department variations possible. |

| Compliance | Detail |
|-----------|--------|
| **GDPR** | You are Data Controller, SK ID Solutions is Data Processor. SSN in hidden metadata (not visible pages). Option to hash SSN cryptographically. |
| **Retention** | 90 days default, extendable to 365 days. Permanently deleted after expiry. Archive to your systems within this window. |

## 2.7 Portal Access

Browser-based interface. No software installation. Your team creates, sends, tracks, and downloads signing requests from the web portal.

| Step | What happens |
|------|-------------|
| 1 | Log in via corporate SSO or email+password |
| 2 | Select a signature request template (locks in the rules for this process type) |
| 3 | Upload documents (PDF/A, up to 100 MB) + optional reference attachments (not signed) |
| 4 | Add signatories (name, email, phone; optionally: SSN, signing tier, mandatory/optional) |
| 5 | Configure: notification language, expiry (7/14/30/90 days), auth strength, watchers |
| 6 | Send - or save as draft and return later |

| After dispatch | Detail |
|---------------|--------|
| **Dashboard** | Real-time status per request (Open, Closed, Expired, Cancelled, Rejected). Per-signatory progress. Timestamped event log. |
| **Actions available** | Cancel, correct bounced emails and resend, send manual reminders, copy request with all settings pre-filled |
| **Cannot modify** | Cannot add new signatories or change expiry after dispatch. Create a new request or use Copy. |
| **Archiving** | Manual archive button. Automatic archiving can be enabled. |

## 2.8 REST API Access

Embed signing directly into your business systems. Your CRM, ERP, or HR platform creates requests, receives real-time status events, and archives signed documents - all programmatically, without anyone touching the portal.

| Capability | Detail | Cost |
|-----------|--------|------|
| **API access** | Full REST API included in Enterprise subscription | Included |
| **Integration options** | Multi-step flow for granular control, or OneStep endpoint for single-call dispatch | Included |
| **Real-time events** | Webhooks push notifications to your system when documents are signed, rejected, or expired. Payloads contain only IDs (no personal data) - your system calls back to retrieve details. | Included |
| **Embedded signing** | Generate signing URLs within your own application - signers never leave your interface | Included |
| **Post-sign redirect** | Signer returns to your application automatically after signing | Included |
| **Automated archiving** | Retrieve signed PDFs + metadata upon completion, push to your archive (Zefort, Arkinet, or custom) | Included / dev work for custom |
| **Existing integrations** | Sympa HR (custom API), Salesforce Commerce Cloud (Kafka/Mulesoft + webhooks), Microsoft Dynamics CRM (REST API) | Development work |

---

# PART 3: WORKFLOWS & ORCHESTRATION [INCLUDED / CONFIGURABLE]

How you control the signing process. Base workflow capabilities are included and active. Advanced orchestration features can be enabled per template or per tenant.

## 3.1 Signature Request Templates

| Aspect | Detail | Status |
|--------|--------|--------|
| **What templates do** | Pre-configure authentication strength, delivery method, signing order, reminder schedule, document formatting, and compliance rules for a specific business process | Included |
| **How they're used** | One template for employment contracts (sequential, SSN mandatory), another for NDAs (simultaneous, standard settings), another for loan agreements (reflection period, strong auth for reading) | Configuration work |
| **Locked settings** | Compliance-critical rules can be locked so portal users cannot override them - they select the template and add recipients, the rules are enforced automatically | Configuration work |
| **Default** | One generic template | Configurable to multiple |

## 3.2 Signing Order

| Mode | How it works | When to use |
|------|-------------|-------------|
| **Simultaneous** | All signatories receive invitations at once, sign in any order | Standard agreements, NDAs, straightforward contracts |
| **Sequential** | Tier 1 signs first, tier 2 invited only after tier 1 completes, and so on | Approval chains: employee signs, then manager, then director |
| **Mixed** | Multiple signers at the same tier (simultaneous between them) + sequential between tiers | Two department heads at tier 1 (either order), CEO at tier 2 (only after both) |

**What happens on rejection:** If any signer rejects, the entire workflow halts immediately. Upper-tier signers are never notified. Reason for refusal is recorded.

**What happens on expiry:** When the deadline passes without all signatures, status changes to Expired. Cannot be completed after - create a new request or use Copy.

**Reminders target only active tier** - signers waiting for their turn don't receive premature reminder emails.

**Status:** Included. Configurable per request.

## 3.3 Signatory Groups & Approval Hierarchies

Multi-level organizational approval flows. Group signatories by management tier. If a lower-level signer rejects, upper levels are never notified - the workflow stops at the rejection point.

**Status:** Disabled by default. Enabled per template. Included.

## 3.4 Signatory Forwarding

A signer who lacks authority (e.g., contract value exceeds their signing mandate) can delegate to an authorized colleague. The signer clicks exit, enters the new signer's details, the workflow continues without restarting. The full delegation chain is recorded in the audit trail.

**Status:** Active by default. Can be disabled per template. Included.

## 3.5 Review Request (Reflection Period)

Enforces a mandatory waiting period before signing is permitted. The signer receives the document and can read it immediately, but the Sign button stays disabled until the period expires. After expiry, a second notification is sent with the actual signing link.

| Aspect | Detail |
|--------|--------|
| **Configurable periods** | Overnight (signing available next morning at 8:00 AM), 7 days, 14 days, custom durations |
| **If signer tries early** | Redirected to view-only page. No Sign button until the period has fully elapsed. |
| **Regulatory basis** | Finnish consumer protection law mandates thinking time for consumer credit, personal loans, mortgages, certain insurance products |
| **Deployed for** | Banking loan compliance - configured per product type (7 days personal loans, 14 days mortgages) |

**Status:** Disabled by default. Enabled per template. Included.

## 3.6 Authentication Strength Control

| Level | Reading (who can open the document) | Signing (who can sign) |
|-------|-------------------------------------|----------------------|
| **High** | Bank ID / strong auth required to view | Bank ID / strong auth required to sign |
| **Medium** | SMS OTP to view | SMS OTP to sign |
| **Low** | Email link to view | Email verification to sign |
| **None** | Open freely via link | N/A (signing always requires at least low) |

Signing auth must be equal to or higher than reading auth. Example: confidential document requires high for both. Routine acknowledgement requires none for reading, low for signing.

**Status:** Configurable per request and per template. Included.

## 3.7 Expiry & Reminders

| Aspect | Default | Configurable to |
|--------|---------|----------------|
| **Expiry deadline** | Sender selects: 7, 14, 30, or 90 days | Maximum configurable per tenant |
| **Automatic reminders** | 2 days after dispatch + 1 day before expiry | Custom intervals, SMS reminders (0.10 EUR/SMS) |
| **Manual reminders** | Available from portal to individual signers | - |

**Status:** Active by default. Schedule configurable. Included.

## 3.8 Attachments & Reference Documents

Attach terms and conditions, appendices, or reference materials alongside the document. Signatories can view them during the signing ceremony. Attachments are NOT cryptographically signed - the signed document stays clean while providing full context.

**Status:** Available. Included.

## 3.9 Signer Document Upload

Require signatories to upload supporting documents (ID copy, diploma, driving license, certificates) before they can proceed to sign. Uploaded files are stored alongside the signed agreement. Sender retrieves them from the portal.

**Status:** Disabled by default. Enabled per template. Included.

## 3.10 Post-Sign Redirect

After signing, the signer is automatically redirected to your specified URL - back to your CRM, onboarding portal, confirmation page, or next step in your digital process. No broken handoff.

**Status:** Configurable per request. Included.

## 3.11 Watchers / Observers

Non-signing stakeholders who receive progress notifications at each stage and can download the finalized document. They cannot sign, modify, or interfere with the workflow. Used for compliance oversight, management visibility, or keeping legal counsel informed.

**Status:** Disabled by default. Enabled per template. Included.

## 3.12 Custom Metadata

Tag each signature request with structured key-value fields (e.g., insurance policy number, HR case ID, contract reference). Metadata flows to downstream systems via API/webhooks, enabling automatic routing of completed documents to the correct archive folder, CRM record, or business process.

**Status:** Disabled by default. Enabled per tenant. Included.

## 3.13 Bundle Signing

Your signer authenticates once and signs multiple documents in a single session. The system groups all open requests for the same signer into one queue (same tenant, same auth level, matching signer details). Each document receives its own individual seal and timestamp. Benchmark: up to 50 documents in one session. If the signer rejects one document within the bundle, the system creates a new bundle for the remaining documents.

**Status:** Disabled by default. Enabled per tenant. Included.

---

# PART 4: ENTERPRISE CONFIGURATION [SETUP INCLUDED]

These capabilities are configured during your Enterprise onboarding. Your organization provides the inputs (brand guidelines, AD details, etc.) and the service team handles the technical setup.

## 4.1 Custom Branding

| What your customers and employees see | Before setup | After setup | Cost |
|--------------------------------------|-------------|-------------|------|
| **Portal (your employees)** | Allekirjoitus.fi default theme | Your logo, colors, fonts, background | 980 EUR one-time |
| **Signing pages (your customers/signers)** | Allekirjoitus.fi default | Your branding - signers may not realize a third-party platform is involved | Included in branding |
| **Signed PDF cover page** | Allekirjoitus.fi logo | Your company logo + structured signatory metadata columns | Included in branding |
| **Per-department variations** | N/A | Different branding per business unit if needed (e.g., HR vs Sales) | Configuration work |

**You provide:** Graphic guidelines or CSS Bootstrap file. **Service team:** Creates custom theme and deploys. **Timeline:** 1-2 days.

## 4.2 Custom Domain

| Option | URL format | What the signer sees | Cost |
|--------|-----------|---------------------|------|
| **Standard subdomain** | companyname.allekirjoitus.fi | Your company name in the URL | Included |
| **Fully custom domain** | e.g., signing.yourcompany.fi | Your own domain - no visible connection to Allekirjoitus.fi | Configuration work |

**You provide:** SSL certificate + DNS records. **Service team:** Registers domain and configures routing. **Timeline:** 1-2 days.

## 4.3 SSO / Active Directory Integration

| What happens | Detail |
|-------------|--------|
| **Employee logs in** | Clicks AD Login, redirected to your organization's Entra ID login. If already signed into Microsoft, the redirect is instant - no password entry. |
| **New employee joins** | IT adds them to the designated AD group. First portal login auto-creates their account with correct role and department. |
| **Employee changes role** | Promotion or department change in AD automatically updates their portal permissions on next login. |
| **Employee leaves** | IT removes from AD group. Portal access revoked immediately. No manual action in the signing portal. |

**You provide:** Entra ID tenant details, security groups, claims structure. **Service team:** Configures provisioning and role mapping. **Timeline:** A few days.

## 4.4 SMS & Email Customization

| What you control | Detail | Cost |
|-----------------|--------|------|
| **SMS sender name** | Your company name (max 11 characters) on the signer's phone | Included |
| **Email sender domain** | Notifications come from your domain, not allekirjoitus.fi | Included in branding |
| **Message content** | Full control: email subject, body, HTML layout, footer, legal disclaimers | Included in branding |
| **Dynamic placeholders** | Auto-inject: recipient name, document title, signing link, expiry date | Included |
| **Multiple templates** | Different notification content for different contract types | Configuration work |
| **Notification suppression** | Turn off platform notifications entirely for API-driven flows | Configuration work |

**You provide:** Text copy, legal disclaimers, HTML layout preferences. **Timeline:** Hours to 1 day.

## 4.5 Organizational Structure & Roles

Your dedicated tenant mirrors your organization's structure.

| Level | What it maps to | Purpose |
|-------|----------------|---------|
| **Tenant** | Your organization | All configuration, data, and users scoped to you |
| **Department** | Your business units (from AD) | Documents and users organized by department |
| **Group** | Sub-teams within a department | Fine-grained access control |
| **User** | Individual employee | Assigned role determines what they can see and do |

| Role | What they see | What they can do |
|------|--------------|-----------------|
| **Organization Admin** | All departments, all requests | User management, full configuration |
| **Department Admin** | All requests in their department | Manage department users |
| **Department User** | Own signature requests only | Create and track own requests |

## 4.6 Document Retention Control

| Aspect | Detail |
|--------|--------|
| **Default retention** | 90 days from completion |
| **Maximum extension** | 365 days |
| **After expiry** | Documents are permanently deleted - not recoverable |
| **Your responsibility** | Download and archive signed documents to your own systems before the retention period ends |
| **Automatic archiving** | Can be configured to push completed documents to your archive system (Zefort, Arkinet, or custom) automatically via API | 

**Status:** Configuration work to extend or set up auto-archiving.

## 4.7 Identity Code Handling

| Mode | What the sender sees | What happens | How to enforce |
|------|---------------------|-------------|---------------|
| **Disabled** | SSN field hidden | No identity code collected | Set at template level |
| **Optional** | SSN field visible, checkbox per signatory | Sender decides case-by-case. If SSN provided, strict match enforced during authentication - mismatch blocks signing. | Default |
| **Mandatory** | SSN field required | Cannot dispatch without SSN for every signatory | Lock at template level |
| **Hashed** | Hashing checkbox visible | Cryptographic hash in signed PDF instead of plain-text SSN. Actual SSN in broker logs for 5 years (court-retrievable). | Lock at template level |

Settings can be locked at template level so individual senders cannot override your organization's privacy policy.

## 4.8 Signatory Suggestions

Auto-complete for previously used contacts when adding signatories to new requests. Includes SSN-based lookup. Speeds up repeat workflows - no manual re-entry of recurring signer details.

**Status:** Active. Included.

---

# PART 5: PRODUCTIZED ADD-ONS [ADDITIONAL COST]

Capabilities you activate on top of your Enterprise subscription, each with its own pricing.

## 5.1 E-Forms: Form Orders

Replace static PDF filling with interactive web forms. Your employee selects a pre-built form in the portal, sends a private link to the recipient. The recipient authenticates, fills a dynamic web form (cascading logic - fields appear based on previous answers, supports 180+ fields), submits, and the platform generates a populated PDF and routes directly to signing.

| Aspect | Detail |
|--------|--------|
| **Who initiates** | Your employee selects the form and sends to a specific recipient |
| **Authentication** | Configurable: SMS OTP (default) or strong bank ID for sensitive forms |
| **Dynamic fields** | Cascading/conditional logic, custom validation rules, text fields, radio buttons, checkboxes, date fields, attachment uploads |
| **After submission** | Form data merged into PDF template in real-time, signer redirected to signing ceremony |
| **Data extraction** | Form field values extractable as structured metadata to your CRM/archive via API |
| **Data privacy** | Form data stored temporarily as JSON, deleted immediately after PDF merge - only exists in the signed document |
| **Form creation** | Service team builds each form based on your PDF template and requirements. Typically 1-2 days per form. |
| **Pricing** | 25 EUR/month per active form + development work (145 EUR/hour) for creation |

## 5.2 E-Forms: Open Forms

Public-facing, self-service forms with a unique URL you embed on your website (behind an "Apply Now" button or similar). The visitor clicks, authenticates with strong bank ID (mandatory - the form is public), fills the form, and is redirected straight to signing in one continuous flow. No invitation email, no waiting. Supports your branded domain.

| Aspect | Detail |
|--------|--------|
| **Who initiates** | The public visitor (your customer, applicant) - clicks a link on your website |
| **Authentication** | Mandatory strong authentication before any data is entered (form is publicly accessible) |
| **After submission** | Automatically redirected to signing - seamless, no email wait |
| **Multi-signatory** | Supported. Primary filler can also be a signatory, additional signatories invited separately. |
| **Form creation** | Same development process as Form Orders - service team builds from your PDF template |
| **Pricing** | 25 EUR/month per active form + development work |

## 5.3 E-Forms: Acroforms

If you already have fillable PDFs (standard Acroform format), attach them to a signature request. The signer fills in the fields directly during the signing ceremony. No custom development needed, no monthly form fee.

| Aspect | Detail |
|--------|--------|
| **Limitation** | Currently supports single-signatory requests only |
| **No development needed** | Works with your existing fillable PDFs as-is |
| **Pricing** | Included in transaction cost |

## 5.4 Document Templating (API-driven)

Your backend system sends JSON key-value data via the API along with a template ID. The platform merges the data into a predefined PDF template, generates a finalized document, and dispatches for signing - zero manual steps, zero portal interaction. Designed for systems that can transmit data but cannot generate their own formatted PDFs.

| Aspect | Detail |
|--------|--------|
| **How it works** | Your system makes a REST API call with JSON data + template ID. Platform fills in the PDF and dispatches. |
| **Template format** | Standard fillable PDF (Acroform) with placeholder fields. JSON keys must match field names in the template. |
| **Setup** | You provide the PDF template + JSON schema. Service team configures the mapping. Typically 0.5-2 hours. |
| **Pricing** | Included in transaction cost + development work for template setup |

## 5.5 Mass Requests (CSV Import)

Dispatch hundreds or thousands of signing requests at once. Upload a ZIP file of documents + a CSV file mapping each document to its signatory via a unique identifier. The platform matches documents to recipients and dispatches all requests automatically.

| Aspect | Detail |
|--------|--------|
| **CSV contains** | Signatory names, emails, phone numbers, unique identifier linking to the corresponding document in the ZIP |
| **Typical use** | Annual contract renewals, employee handbook distribution, supplier agreement rollouts, policy acknowledgements |
| **Tracking** | Each request tracked individually in the portal dashboard |
| **Pricing** | Standard transaction fees per request (0.80 EUR/signatory + 0.10 EUR/SMS) |

## 5.6 Document Sealing (Standalone)

Apply your organization's official digital seal to PDF documents without any human signatory - the digital equivalent of a company stamp. Every sealed document receives a qualified timestamp proving integrity and origin. No signer is invited, no authentication flow occurs.

| Aspect | Detail |
|--------|--------|
| **Use cases** | Automated bulk sealing of invoices, payslips, certificates, official correspondence |
| **How it works** | API-driven. Your system sends documents, platform applies seal + qualified timestamp, returns sealed PDFs. |
| **Pricing** | 0.30 EUR per document |

## 5.7 File Conversion

Your team uploads Office files (Word, Excel) or images - the platform automatically converts them to archival-grade PDF/A format before the signing process begins. No manual conversion step.

| Aspect | Detail |
|--------|--------|
| **Default** | PDF/A required. Without this add-on, only PDF uploads are accepted. |
| **Pricing** | 0.25 EUR per document converted |

## 5.8 File Sharing

Securely distribute documents to recipients who need to view but not sign. The document is delivered via a link - the recipient verifies identity with SMS OTP before accessing. A controlled alternative to email attachments for sensitive materials.

| Aspect | Detail |
|--------|--------|
| **Access protection** | Email link + SMS OTP verification (two-factor) |
| **Pricing** | 0.15 EUR per recipient |

## 5.9 API-driven Workflow Automation

Full end-to-end signing automation. Your CRM, ERP, or HR system creates requests, receives real-time status events via webhooks, and archives signed documents - all system-to-system, without anyone touching the portal. Some Enterprise customers operate entirely API-only - their employees never see the signing platform.

| Aspect | Detail |
|--------|--------|
| **What it enables** | Programmatic request creation, webhook-driven status updates, automated document retrieval and archiving |
| **Existing integrations built** | Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort archive, Arkinet archive |
| **Pricing** | API access included in Enterprise. Custom integration: development work (145 EUR/hour). |

## 5.10 Professional Services

| Service | Rate | Minimum | What it covers |
|---------|------|---------|---------------|
| **Development & Configuration** | 145 EUR/hour | 0.5 hours | Custom integrations, form development, template setup, tenant configuration, support/change requests |
| **Specialist Consultation** | 190 EUR/hour | 0.5 hours | Architecture consultation, project management, solution design |
| **Customization & Branding** | 980 EUR | One-time | Portal UI, signer view, message templates, PAdES cover page |

Before any work begins, a workload estimate is presented and approved. Work is billed on actual hours.

---

# PART 6: ENTERPRISE PRICING REFERENCE

All prices VAT exclusive.

## 6.1 Monthly Subscription Fees

| Component | Fee (EUR/month) |
|-----------|----------------|
| Platform Access Fee | 275.00 |
| Additional Environment (tenant) | 75.00 |
| Online Form Template | 25.00 per active form |
| Nordic-Baltic Authentication | 125.00 |

## 6.2 Transaction Fees

| Component | Fee (EUR/unit) | Unit |
|-----------|---------------|------|
| Signing Request - Strong Auth (AES) | 0.80 | Per signatory |
| Signing Request - Light Auth (SES) | 0.65 | Per signatory |
| SMS Message | 0.10 | Per message |
| Document Sealing | 0.30 | Per document |
| File Conversion | 0.25 | Per document |
| File Sharing | 0.15 | Per recipient |

## 6.3 One-Time & Professional Fees

| Component | Fee (EUR) |
|-----------|----------|
| Customization & Branding | 980.00 (one-time) |
| Development & Configuration | 145.00/hour (min 0.5h) |
| Specialist Consultation | 190.00/hour |

## 6.4 Billing Rules

- A Signature Request is charged **per signatory when a document is dispatched**, regardless of whether the signatory completes or declines the signing.
- A document sent to four signatories consumes four Signature Requests.
- SMS costs are billed separately for Enterprise customers (included in Basic tier packages).
- SK is entitled to charge 145 EUR/hour for resolving issues not attributable to SK or caused by the customer's equipment or network.

---

# PART 7: KEY SERVICE TERMS

Extracted from Allekirjoitus.fi Service Terms and Conditions v1.0 (effective 14.01.2026).

| Term | Detail |
|------|--------|
| **Service provider** | SK ID Solutions AS |
| **Service type** | Cloud-based SaaS for electronic signing of PDF documents |
| **Enterprise tier definition** | Flexible, integration-capable service supporting advanced workflows and customization. API access, SSO, custom branding, online forms. |
| **Access** | Web portal and API system integrations |
| **Users** | Unlimited |
| **Login** | SSO with organizational credentials and/or email + password |
| **Authentication** | AES default; optional SES and QES |
| **Billing** | Monthly platform base fee + per-transaction fees + SMS charges |
| **Support** | All requests via support@allekirjoitus.fi. Mon-Fri, 09:00-17:00 EET. |
| **Service level** | Best-effort basis. No contractual SLA with penalty clauses. |
| **Contact persons** | Enterprise customers must appoint both a Contractual Contact Person and a Technical Contact Person |
| **User administration** | Enterprise: automated via SSO/AD. First login auto-creates account. AD group removal revokes access. |
| **Data processing** | Customer is Data Controller. SK ID Solutions is Data Processor. |

---

# PART 8: WORKFLOW PATTERNS BY INDUSTRY

How different industries use the platform's capabilities.

## Banking & Finance
Sequential signing with review/reflection periods for regulatory compliance. Dynamic metadata tracking signatory roles (Applicant, Guarantor). Automated archiving to secure vaults upon completion. Open forms for public-facing loan applications with mandatory strong authentication.

## Human Resources
Sequential approval chains (HR initiates - candidate signs - manager countersigns). Signer document upload for collecting diplomas and ID copies during onboarding. Mass requests for distributing annual policy updates or handbook acknowledgments across the organization.

## Legal & Compliance
Signatory status views for legal counsel to verify all other parties have signed before adding final signature. Watchers for compliance oversight. Attachments for terms and conditions that accompany but do not form part of the signed document.

## Procurement & Sales
Simultaneous signing for rapid NDAs and straightforward agreements. Mass requests for supplier contract rollouts. Signatory forwarding when the designated signer needs to delegate to a colleague with appropriate authority.

## Operations & Administration
Standalone document sealing for bulk processing of invoices, certificates, and official correspondence. Bundle signing for executives processing high-volume approval queues. Document templating for automated generation of standardized documents from backend systems.

---

# PART 9: CONFIGURATION SETUP REFERENCE

What's needed from your organization to configure Enterprise capabilities.

| Capability | What you provide | What the service team does | Typical timeline |
|-----------|-----------------|---------------------------|-----------------|
| **SSO/AD Integration** | Azure AD/Entra ID tenant details, security groups, claims structure | Configure identity provisioning, map AD groups to portal roles | A few days |
| **Custom Branding** | Brand guidelines, logos, colors, or Bootstrap files | Apply custom theme, configure branded UI and PAdES cover | 1-2 days |
| **Custom Domain** | SSL certificate, updated DNS records | Register domain, configure routing | 1-2 days |
| **Message Templates** | Translated text copy, legal disclaimers, HTML preferences | Configure email/SMS layouts, map dynamic placeholders | Hours to 1 day |
| **E-Form Development** | Static PDF forms, validation/logic requirements | Code HTML form, build validation rules, deploy | 1-2 days per form |
| **Document Templating** | JSON payload schema, Acroform PDF template with placeholder fields | Upload template, configure JSON-to-PDF field mapping | 0.5-2 hours |
| **Archiving Integration** | Target API endpoint, authentication keys, webhook requirements | Build automated connector for signed PDF + metadata push | Project-based |

---

*Master KB v1.0 - 2026-04-24*
*Source: SK ID Solutions product documentation, service T&C v1.0, official pricelist, technical knowledge base*
