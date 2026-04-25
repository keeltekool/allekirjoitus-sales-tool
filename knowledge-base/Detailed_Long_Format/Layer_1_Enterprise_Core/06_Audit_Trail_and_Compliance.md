# Audit Trail & Compliance

Every signed document carries a complete, tamper-proof evidence record embedded directly inside the PDF. The platform's auditing architecture logs every lifecycle action, packages the evidence per signatory, and seals everything with a qualified timestamp - producing a self-proving document that requires no external system to verify.

- **What is captured per signatory** - for each signer, the platform records: full name, email address, mobile phone number, the exact authentication method used, IP address, verified personal identity code (SSN/HETU) retrieved during strong authentication, and precise timestamps for every lifecycle event - when the invitation was sent, when the signer opened it, when they authenticated, when they signed or rejected, and when the document was downloaded

- **XAdES evidence files embedded inside the PDF** - a distinct XAdES (XML Advanced Electronic Signatures) document is generated for each individual signatory, containing their complete personal audit trail including their SSN in plain text (or hashed, if configured). These individual XML files are embedded as hidden attachments inside the final PDF, alongside a Base64-encoded copy of the original unsigned document. The result: a single file that carries its own complete chain of proof

- **Qualified timestamp and organizational seal** - after the individual audit files and cover pages are assembled, the PrimeKey signing engine seals the entire package with the organizational AATL certificate and embeds an eIDAS-qualified timestamp. This binds all signatures to the exact date and time, making the package tamper-evident and protecting against forgery or backdating

- **PAdES-LTV for long-term archival** - the final output uses PAdES-LTV format, embedding all certificate chains, revocation statuses, and audit data within the file. Your documents remain independently verifiable offline for decades using standard Adobe Reader, free from vendor lock-in or platform dependency

- **GDPR framework** - your organization acts as Data Controller with full legal responsibility for data processing decisions. SK ID Solutions operates as Data Processor. The configurable SSN hashing option encrypts identity codes in the circulating PDF, with the original SSN stored in the ID Broker's logs for five years and retrievable only via court order - supporting data minimization without sacrificing legal defensibility

- **Document retention** - signed documents are retained for 90 days by default, extendable to 365 days for Enterprise. After expiry, the system permanently and automatically deletes all documents, signature requests, and associated audit logs. Your organization is responsible for downloading or automating the transfer to your own archive before the deadline
