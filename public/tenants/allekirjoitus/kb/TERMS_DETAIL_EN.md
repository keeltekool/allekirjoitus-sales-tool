# Allekirjoitus.fi Service Terms and Conditions

# PART 1: Service & Billing

## 1.1 Service Provider
**Provider:** SK ID Solutions AS ("SK") provides Allekirjoitus.fi as a cloud-based electronic signing service for PDF documents.

**Effective Date:** These Service Terms (Version 1.0) are effective from 14 January 2026 and apply alongside the General Terms of Subscriber Agreement.

**Service Tiers:** The Service is offered under two models — Basic Tier (standardized, package-based) and Enterprise Tier (flexible, integration-capable with advanced workflows and customization).

## 1.2 Billing Unit — Signature Request
**Definition:** One Signature Request (SR) is charged per signatory when a document is dispatched for signing, regardless of whether the signatory completes or declines the signing process. A document sent to four signatories consumes four Signature Requests.

## 1.3 Enterprise Billing Model
**Structure:** Monthly Platform Base Fee + per-transaction fees + SMS charges. No fixed packages or volume caps.

**Basic Tier:** Fixed Monthly Packages with overages billed per the Price List.

**Price List:** All fees in accordance with the current Allekirjoitus.fi Price List or as agreed separately in the Subscriber Agreement. All prices VAT 0%.

**Billing Cycle:** Monthly, based on actual usage during the calendar month.

## 1.4 Signature Types
**Advanced Electronic Signature (AES):** Created using Finnish Trust Network and Nordic-Baltic high-assurance eID methods. Meets eIDAS requirements for advanced electronic signatures. Default for both tiers.

**Simple Electronic Signature (SES):** Uses lower-assurance methods — SMS OTP, email OTP, or drawn signature (InkSign). Enterprise Tier only, optional.

# PART 2: Documents & Signing Process

## 2.1 Document Requirements
**Format:** All documents must be provided in PDF-A format for long-term archival compatibility.

**Restrictions:** Documents must not be password-protected or otherwise restricted. Maximum file size: 100 MB per document.

## 2.2 Signing Workflow
**Process:** Sender uploads PDF → defines signatories (name, email, mobile) → Service sends signing requests via email → signer authenticates, reviews, and confirms.

**Finalization:** Signed document delivered in PAdES format, automatically sealed with AATL-compatible certificate. XML audit trail attached detailing the signing event.

**Retrieval:** Signer receives download link via email, protected by SMS OTP to signatory's mobile phone.

**Verification:** Integrity and validity verifiable in Adobe Reader without external service connection.

## 2.3 Modification Restrictions
**After dispatch:** No additional signers may be added and the validity period cannot be changed.

## 2.4 Document Retention
**Period:** 90 days from request completion (default).

**Subscriber responsibility:** All signed documents must be transferred to the Subscriber's own long-term storage before the retention period expires.

**No archival:** SK does not provide permanent document storage.

# PART 3: Data Processing & Compliance

## 3.1 Data Processing Roles
**Controller:** The Subscriber is the data controller.

**Processor:** SK is the data processor; SK's subcontractors are sub-processors, processing data only per Subscriber's instructions.

## 3.2 Processed Personal Data
**Data types:** Signer's given name(s) and surname, email address, mobile phone number, personal identity code (HETU), IP addresses, and authentication data.

**HETU handling:** Stored in plain text in the XML metadata section of the PAdES file only — not displayed on visible document pages. Subscriber is responsible for implementing strict access controls.

## 3.3 Subscriber Obligations
**Lawful processing:** Processing personal data per applicable regulations.

**Consent:** Obtaining all required rights, permissions, and consents.

**Authorization:** Authorizing SK as processor.

**Liability:** If claims or legal actions arise from Subscriber's failure to comply with data processing responsibilities or unlawful use, Subscriber compensates SK for all resulting damages and costs, including litigation and legal expenses.

# PART 4: Enterprise Features & Access

## 4.1 User Management
**Enterprise:** Unlimited user accounts. SSO via Azure AD / Active Directory and/or email + password. Auto-provisioning on first SSO login. Access removal via AD group management.

**Basic:** Email + password only. Basic roles with limited visibility. User count per package.

## 4.2 Advanced Rights & Configuration
**Department structures:** Sourced from Active Directory. Configurable organizational hierarchy.

**Workflows:** Configurable workflows and multi-template setup (Enterprise only). Basic Tier has single standardized workflow.

## 4.3 API & Integration
**Enterprise:** Full REST API and Webhook support.

**Basic:** Not supported.

## 4.4 Branding & Advanced Features
**Enterprise:** Custom company branding across all signer-facing touchpoints. Online forms, review periods, file conversion, document templating, mass requests.

**Basic:** Standard branding only. No advanced features.

# PART 5: Support & Service Levels

## 5.1 Contact Persons
**Enterprise:** Both Contractual Contact Person and Technical Contact Person are mandatory.

**Basic:** Contractual Contact Person mandatory, Technical Contact Person optional.

## 5.2 Support Channel
**All requests:** Service requests and incident reports via support@allekirjoitus.fi.

**Hours:** Technical support Mon–Fri, 09:00–17:00 EET.

## 5.3 Service Level Agreement
**Best-effort basis:** Due to reliance on third-party authentication providers. SK responds to incidents during business hours according to severity.

**SLA exclusions:** Standard SLA clauses (Section 9 of General Terms) and outage-related penalties (Section 14 of General Terms) do not apply to this Service.
