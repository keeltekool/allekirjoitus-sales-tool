# Enterprise Default vs. Customizable Reference

## 1. Signing & Authentication Defaults

| Component | Default | Modifiable to | Cost type |
| :--- | :--- | :--- | :--- |
| **Signature Level** | Advanced Electronic Signature (AES) | Qualified Electronic Signature (QES) or Simple Electronic Signature (SES) | QES: Included in strong auth / SES: €0.65 per transaction |
| **Authentication Methods** | FI/SE methods: Finnish Bank IDs, Mobile Certificate, Swedish BankID, Freja eID | Nordic-Baltic methods (Norway BankID, Vipps, MitID, Smart-ID, Mobile-ID, e-Residency) or Light Auth (SMS/Email OTP, drawn signature) | Nordic-Baltic: €125.00/month add-on / Light Auth: €0.65 per transaction |
| **Invitation Delivery** | Email ONLY | SMS delivery or combined Email + SMS delivery | €0.10 per SMS message |
| **Document Retrieval** | OTP-protected download via SMS | Direct system retrieval and archiving via API/Webhooks (e.g., Zefort, Arkinet) | API Integration: Development work / SMS OTP: €0.10 per SMS |
| **Signing Order** | Sequential (1, 2, 3...) or Simultaneous (Order = 0) | Custom multi-level signatory groups and organizational hierarchies | Development work |
| **Required Document Format** | PDF/A format (maximum 100 MB) | Office files (Word, Excel) and common image formats | €0.25 per document (File Conversion) |
| **User Limits** | Unlimited users | N/A (Included for all Enterprise tenants) | Included in base platform fee |

## 2. Portal, Access & Branding Defaults

| Component | Default | Modifiable to | Cost type |
| :--- | :--- | :--- | :--- |
| **Login Method** | Email and password | Single Sign-On (SSO) with organizational credentials (e.g., Azure AD / Entra ID) | Included (Complex AD mapping is Development work) |
| **Portal Appearance** | Telia logos, colors, and default system theme | Custom company branding (colors, logos, fonts, background image) | €980.00 one-time fee |
| **PAdES Cover Page** | Telia logo and standard signatory metadata columns (Name, Authentication Method, Timestamp) | Customer logo, custom headers, and specific dynamic metadata columns (e.g., SSN, IP address) | €980.00 one-time fee (Part of Customization & Branding) |
| **Portal URL Format** | Subdomain format `companyname.teliasign.com` | Custom branded domain (e.g., `signing.kpmg.fi`) | Development work (€145.00/hour) |
| **Notification Email Domain** | `noreply+TenantName@teliasign.com` | Customer's own corporate email domain | Development work (€145.00/hour) |
| **SMS Sender Name** | Tenant Name (maximum 11 characters) | Custom short name | Included / Development work |
| **Message Templates** | Generic system default message texts | Customized message copy, specific HTML layouts, and legal disclaimers | €980.00 one-time fee (Part of Customization & Branding) / Development work |
| **Organization Structure** | Single default department under the tenant | Hierarchical departments (Tenant - Department - Group - User) mapped to Active Directory | Development work (€145.00/hour) |

## 3. Workflow Feature Defaults

| Component | Default (ACTIVE or DISABLED) | Modifiable to | Cost type |
| :--- | :--- | :--- | :--- |
| **Signature request templates** | **ACTIVE** (Single generic default template) | Multiple pre-configured templates enforcing specific rules for different business cases | Development work |
| **Reminders** | **ACTIVE** (2 days after dispatch + 1 day before expiry) | Custom automated schedules (specific hours/days) or manual on-demand reminders | Custom automated: Development work / Manual: Included |
| **Expiry options** | **ACTIVE** (7, 14, 30, or 90 days; Sender selects manually, max 90) | Custom maximum expiration limits | Development work |
| **Document retention period** | **ACTIVE** (90 days for closed documents) | Configurable extended retention up to 365 days maximum | Development work |
| **Signatory forwarding** | **ACTIVE** (Standard forwarding allowed) | Forwarding disabled, or post-sign redirect to external URL | Development work |
| **Signatory document upload** | **DISABLED** (`IsSignatoryDocumentUploadEnabled` = false) | Enabled (Signer must upload required attachments during signing) | Development work |
| **Watchers** | **DISABLED** (`IsWatchersEnabled` = 0) | Enabled (Non-signing followers receive status notifications and final document) | Development work |
| **Signatory status view** | **DISABLED** (`MyViewSelection` = false) | Enabled (Signers can see identity and signing status of other participants) | Development work |
| **Review/reflection period** | **DISABLED** (No mandatory waiting time) | Enabled (Mandatory time lock before signing, e.g., 7 or 14 days for loan compliance) | Development work |
| **Bundle signing** | **DISABLED** (`BundleSigning.Enabled` = false) | Enabled (Signer authenticates once to execute multiple signature requests in batch) | Development work |
| **SSN/identity code handling** | **ACTIVE** (Stored in plain text in hidden XAdES XML metadata) | Cryptographically hashed in signature (`IsPersonalIdentifierHashedInSignature` = true) | Included (Sender toggle) / Development work (to lock/enforce) |
| **Archiving** | **DISABLED** (Manual download by user; automatic archiving disabled) | Automatic push of signed PDF and JSON metadata to external archive (e.g., Zefort, Sympa) | Development work |
| **Metadata** | **DISABLED** (No custom fields captured) | Enabled (Dynamic key-value pairs configured and extracted to downstream systems) | Development work |
| **Manual workflow steps** | **DISABLED** (Standard Open, Closed, Expired, Archived statuses) | Enabled (Custom portal statuses such as "In progress" or "Processed") | Development work |

## 4. Transaction & Add-on Pricing

| Component | Price | Billing type |
| :--- | :--- | :--- |
| **Platform Access Fee** | €275.00 | Monthly |
| **Additional Environment (Tenant)** | €75.00 | Monthly |
| **Online Forms** | €25.00 | Monthly (per active form) |
| **Nordic-Baltic Authentication** | €125.00 | Monthly |
| **Signing Request (Strong Auth / AES)** | €0.80 | Per transaction |
| **Signing Request (Light Auth / SES)** | €0.65 | Per transaction |
| **Document Sealing** | €0.30 | Per transaction (per document) |
| **File Conversion** | €0.25 | Per transaction (per document) |
| **File Sharing** | €0.15 | Per transaction (per recipient) |
| **SMS Message** | €0.10 | Per transaction (per message) |
| **Customization & Branding Fee** | €980.00 | One-time fee |
| **Development & Configuration** | €145.00 | Hourly (minimum 0.5h) |
| **Specialist Consultation** | €190.00 | Hourly (minimum 0.5h) |

## 5. Configuration Capabilities Requiring Setup

| Component | What customer provides | What service team does | Typical timeline |
| :--- | :--- | :--- | :--- |
| **SSO/AD Integration** | Azure AD/Entra ID tenant details, security groups, and claims structure | Configures identity provisioning workflow and maps AD groups to portal roles | A few days |
| **Custom Branding** | Brand guidelines, logos, specific brand colors, or Bootstrap files | Applies custom CSS/theme, configures branded UI, and sets up branded PAdES document cover | 1 to 2 days |
| **Custom Domain** | SSL certificate (from third-party provider) and updated DNS records | Registers custom domain, sets up Azure Front Door, and configures routing | 1 to 2 days |
| **Custom Message Templates** | Translated text copy, specific legal disclaimers, and desired HTML layouts | Configures email/SMS HTML layouts and maps dynamic placeholders for system injection | Hours to 1 day |
| **E-form Development** | Static PDF forms and exact requirements for validation or cascading logic | Codes HTML/CSS models, maps fields, and builds strict validation rules into the platform | 1 to 2 days per form |
| **Document Templating** | JSON payload schema and Acroform PDF template with defined hidden placeholder fields | Uploads template to Azure storage and configures mapping between API JSON keys and PDF fields | 0.5 to 2 hours |
| **Archiving Integration** | Target API endpoint details, authentication keys, and specific webhook event requirements | Builds automated connector to push structured JSON metadata and sealed PAdES PDF to target system | Project-based (days to weeks) |
