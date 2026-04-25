# Qualified & Advanced Electronic Signatures

Every document signed through the platform produces an eIDAS Article 26 compliant Advanced Electronic Signature (AES) - the signature level that is legally sufficient for over 95% of Finnish business contracts, employment agreements, and administrative decisions. The signing process is fully automated: once your signer authenticates, the platform handles sealing, timestamping, and packaging without manual steps.

- **How AES signing works technically** - after the signer completes strong identity verification (e.g., via bank ID), the platform's Packaging Service assembles the document payload: the original PDF, a cover page with signatory metadata in structured columns, and a unique hidden XAdES XML evidence file per signer. This assembled package is routed to the PrimeKey signing engine, which applies the organizational digital seal using an AATL-certified certificate and embeds an eIDAS-qualified timestamp from SK ID Solutions' timestamping service

- **AATL certificate and Adobe Acrobat** - because the seal uses an Adobe Approved Trust List certificate, recipients opening the signed PDF in standard Adobe Acrobat or Reader immediately see a blue signature validation banner and green checkmark confirming the document is cryptographically sealed and untampered. No plugins, no proprietary viewer, no active internet connection required for verification

- **Qualified timestamp** - the eIDAS-qualified timestamp mathematically binds all signatures to the exact second they were executed. This proves the document has not been altered, backdated, or forged after signing. Any modification - even a single pixel - breaks the seal, and Adobe immediately flags the document as invalid

- **PAdES-LTV for long-term verification** - the final document uses PAdES Long-Term Validation format, embedding all certificate chains, revocation statuses, and audit data directly inside the file. Your documents remain independently verifiable offline for decades, with zero dependency on the platform's servers remaining online

- **What the final PDF contains** - a single file holding the original document, a cover/closing page displaying signatory names, authentication methods, and timestamps in structured columns, the cryptographic organizational seal, the qualified timestamp, and hidden XAdES XML attachments containing the complete individual audit trail per signer (including their verified SSN in plain text or hashed form)
