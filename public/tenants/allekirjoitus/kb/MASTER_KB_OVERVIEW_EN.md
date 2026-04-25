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

Pre-configured workflow blueprints for each business process.

**What they do:** Lock in authentication strength, delivery method, signing order, reminders, and compliance rules per process type.

**Example:** One template for employment contracts (sequential, SSN mandatory), another for NDAs (simultaneous, standard), a third for loan agreements (reflection period, strong auth).

**Default:** One generic template included. Multiple templates via configuration work.

## 3.2 Signing Order

Control the sequence of signatures.

**Simultaneous:** All signatories sign in any order. For NDAs, standard agreements.

**Sequential:** Tier by tier — employee first, then manager, then director. For approval chains.

**Mixed:** Multiple signers per tier (any order within), sequential between tiers.

**On rejection:** Entire workflow halts. Upper tiers never notified.

**Status:** Included. Configurable per request.

## 3.3 Signatory Groups & Approval Hierarchies

Multi-level approval flows grouped by management tier.

**How it works:** Documents progress through the hierarchy in order. Lower-level rejection stops the flow — upper levels never notified.

**Status:** Configurable. Enabled per template.

## 3.4 Signatory Forwarding

Delegation when a signer lacks authority.

**How it works:** Signer exits, enters delegate's details, workflow continues without restart. Full delegation chain recorded in audit trail.

**Status:** Included. Active by default.

## 3.5 Review Request (Reflection Period)

Mandatory waiting period before signing — for regulatory compliance.

**Periods:** Overnight (next morning 8:00 AM), 7 days, 14 days, custom.

**How it works:** Signer reads immediately, but Sign button disabled until period expires.

**Used for:** Banking loan compliance — Finnish consumer protection law mandates thinking time for credit products.

**Status:** Configurable. Enabled per template.

## 3.6 Authentication Strength Control

Separate identity requirements for viewing vs signing.

**High:** Bank ID required to both view and sign.

**Medium:** SMS OTP for viewing and signing.

**Low:** Email link to view, email verification to sign.

**None (viewing only):** Open freely. Signing always requires at least low.

**Status:** Included. Configurable per request.

## 3.7 Expiry & Reminders

Hard deadlines and automatic follow-up on every request.

**Expiry:** Sender selects 7, 14, 30, or 90 days.

**Auto reminders:** 2 days after dispatch + 1 day before expiry (default). Custom intervals available.

**Manual reminders:** On-demand from portal.

**Status:** Included. Schedule configurable.

## 3.8 Attachments & Reference Documents

Supporting files alongside the signed document.

**What:** Terms, appendices, reference materials. Viewable during signing ceremony.

**Not signed:** Attachments are NOT cryptographically signed — keeps the main document clean.

**Status:** Included.

## 3.9 Signer Document Upload

Require signers to upload documents before they can sign.

**Use case:** ID copies, diplomas, driving licenses, certificates — collected and stored alongside the signed agreement.

**Status:** Configurable. Enabled per template.

## 3.10 Post-Sign Redirect

Automatic redirect after signing completes.

**Where:** Back to your CRM, onboarding portal, confirmation page, or next process step.

**Status:** Included. Configurable per request.

## 3.11 Watchers / Observers

Non-signing stakeholders who stay informed.

**What they get:** Progress notifications at each stage + final document download.

**Use case:** Compliance oversight, management visibility, keeping legal counsel informed.

**Status:** Configurable. Enabled per template.

## 3.12 Custom Metadata

Structured tags for downstream routing.

**What:** Key-value fields per request (e.g., policy number, HR case ID, contract reference).

**Where it flows:** API/webhooks → automatic routing to archive, CRM, or business process.

**Status:** Configurable. Enabled per tenant.

## 3.13 Bundle Signing

Sign multiple documents in one authenticated session.

**How it works:** Authenticate once, sign a queue of up to 50 documents. Each gets its own seal and timestamp.

**Built for:** Managers, executives, HR staff with high-volume approval queues.

**Status:** Configurable. Enabled per tenant.

---

# PART 4: ENTERPRISE CONFIGURATION [CONFIGURABLE]

These capabilities are configured during your Enterprise onboarding. Your organization provides the inputs and the service team handles the technical setup.

## 4.1 Custom Branding

Your visual identity across every touchpoint.

**Portal:** Your logo, colors, fonts, background on the sender interface.

**Signer pages:** Your branding on every page the signer sees. Signers may not realize a third-party platform is involved.

**Signed PDFs:** Your company logo on the PAdES cover page with signatory metadata.

**Per-department:** Different branding per business unit if needed.

**Status:** One-time setup.

## 4.2 Custom Domain

Your branded URL for the signing experience.

**Standard:** companyname.allekirjoitus.fi — included.

**Custom:** signing.yourcompany.fi — your own domain with dedicated SSL.

**Status:** Subdomain included. Custom domain: Configuration work.

## 4.3 SSO / Active Directory Integration

Seamless identity management through Azure AD / Entra ID.

**Login:** Employees click AD Login — instant if already signed into Microsoft.

**Provisioning:** New employees auto-created on first login with correct role and department.

**Updates:** Role changes in AD sync automatically to portal permissions.

**Offboarding:** Remove from AD group → portal access revoked immediately.

**Status:** Configuration work.

## 4.4 SMS & Email Customization

Full control over every communication your signers receive.

**Sender identity:** Your company name for SMS, your domain for email.

**Content:** Full control over subject, body, HTML layout, footer, legal disclaimers.

**Dynamic fields:** Auto-inject recipient name, document title, signing link, expiry date.

**Multiple templates:** Different content for different contract types.

**API flows:** Option to suppress platform notifications entirely.

**Status:** Included in branding setup.

## 4.5 Organizational Structure & Roles

Your tenant mirrors your organization.

**Hierarchy:** Tenant → Department → Group → User. Synced from AD.

**Organization Admin:** Full visibility, user management, configuration.

**Department Admin:** Department scope, manages department users.

**Department User:** Own requests only.

**Status:** Included.

## 4.6 Document Retention Control

How long signed documents are stored.

**Default:** 90 days from completion.

**Maximum:** 365 days.

**After expiry:** Permanently deleted — not recoverable.

**Auto-archiving:** Push to Zefort, Arkinet, or custom system via API.

**Status:** Configuration work.

## 4.7 Identity Code Handling

Four modes for SSN/HETU collection.

**Disabled:** SSN field hidden. No identity code collected.

**Optional:** Sender decides per signatory. Strict match enforced if provided.

**Mandatory:** Cannot dispatch without SSN for every signatory.

**Hashed:** Cryptographic hash in PDF instead of plain-text SSN.

**Status:** Included (toggle). Enforcement: Configuration work.

## 4.8 Signatory Suggestions

Auto-complete for repeat contacts.

**How it works:** Previously used contacts suggested when adding signatories. Includes SSN-based lookup.

**Status:** Included.

---

# PART 5: PRODUCTIZED ADD-ONS [ADD-ON]

Capabilities you activate on top of your Enterprise subscription, each with its own pricing — see the pricing block for current rates.

## 5.1 E-Forms: Form Orders

Interactive web forms that replace static PDFs and route directly to signing.

**Flow:** Employee sends form link → recipient authenticates → fills dynamic form (cascading logic, 180+ fields) → PDF generated → signing ceremony.

**Data extraction:** All field values available as structured metadata to CRM/archive via API.

**Status:** Add-on (monthly per form + development work).

## 5.2 E-Forms: Open Forms

Public-facing self-service forms for your website.

**Flow:** Visitor clicks link → authenticates with strong bank ID → fills form → redirected straight to signing. No email wait.

**Use case:** Loan applications, insurance claims, public-facing onboarding.

**Status:** Add-on (monthly per form + development work).

## 5.3 E-Forms: Acroforms

Use your existing fillable PDFs directly in the signing flow.

**How:** Attach fillable PDF to a request. Signer fills fields during the ceremony.

**No development needed.** No monthly fee. Single-signatory only.

**Status:** Included in transaction cost.

## 5.4 Document Templating (API-driven)

Automated PDF generation from your backend systems.

**Flow:** Your system sends JSON data + template ID via API → platform merges into PDF → dispatches for signing.

**Zero manual steps.** Zero portal interaction.

**Status:** Add-on (per transaction + development work for setup).

## 5.5 Mass Requests (CSV Import)

Bulk dispatch — hundreds or thousands of requests at once.

**How:** Upload ZIP of documents + CSV mapping each to its signatory.

**Use case:** Annual contract renewals, handbook distribution, supplier rollouts.

**Status:** Standard transaction fees per request.

## 5.6 Document Sealing (Standalone)

Digital company stamp — no human signatory needed.

**What:** Organizational e-seal + qualified timestamp on PDF documents.

**Use case:** Bulk sealing of invoices, payslips, certificates. API-driven.

**Status:** Add-on (per document).

## 5.7 File Conversion

Automatic conversion of non-PDF uploads to PDF/A.

**Supports:** Office files (Word, Excel) and images.

**Status:** Add-on (per document).

## 5.8 File Sharing

Secure document delivery without a signing step.

**Access:** Link + SMS OTP verification (two-factor).

**Use case:** Distributing finalized or reference documents to view-only parties.

**Status:** Add-on (per recipient).

## 5.9 API-driven Workflow Automation

Full end-to-end signing automation — system-to-system.

**Enables:** Programmatic request creation, webhook status updates, automated archiving.

**Existing integrations:** Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort, Arkinet.

**Status:** API access included. Custom integrations: Configuration work.

## 5.10 Professional Services

Expert assistance for your implementation.

**Development:** Custom integrations, form development, template setup. Min 0.5h.

**Consultation:** Architecture, project management, solution design.

**Status:** Hourly rate — see pricing block.

---

# PART 8: WORKFLOW PATTERNS BY INDUSTRY

How different industries use the platform's capabilities.

## Banking & Finance

**Signing:** Sequential with review/reflection periods for regulatory compliance.

**Tracking:** Dynamic metadata for signatory roles (Applicant, Guarantor).

**Archiving:** Automated push to secure vaults upon completion.

**Public-facing:** Open forms for loan applications with mandatory strong authentication.

## Human Resources

**Onboarding:** Sequential chains — HR initiates → candidate signs → manager countersigns.

**Document collection:** Signer uploads diplomas and ID copies during signing ceremony.

**Bulk operations:** Mass requests for annual policy updates and handbook acknowledgments.

## Legal & Compliance

**Oversight:** Signatory status views for legal counsel to verify completion before final signature.

**Monitoring:** Watchers for compliance visibility without signing rights.

**Context:** Attachments for T&C that accompany but aren't part of the signed document.

## Procurement & Sales

**Speed:** Simultaneous signing for rapid NDAs and straightforward agreements.

**Scale:** Mass requests for supplier contract rollouts.

**Flexibility:** Signatory forwarding when delegates are needed.

## Operations & Administration

**Automation:** Document sealing for bulk invoices, certificates, official correspondence.

**Efficiency:** Bundle signing for executives with high-volume approval queues.

**Integration:** Document templating for automated generation from backend systems.

---

*Master KB Overview v1.0 - 2026-04-25*
*Overview depth: concise paragraphs, no tables, no sub-sections. Section headings match MASTER_KB_v2.md (detail depth) for consistent tool behavior across depth levels.*
*Parts 6, 7, 9 excluded from overview — pricing lives in the pricing block, terms and setup reference are separate attachments.*
