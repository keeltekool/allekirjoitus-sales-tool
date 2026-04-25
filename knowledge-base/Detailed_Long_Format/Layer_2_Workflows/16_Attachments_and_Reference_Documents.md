# Attachments & Reference Documents

The platform makes a strict distinction between the documents your signers sign and the supporting materials they reference. This keeps your signed agreement clean and legally focused while still delivering all relevant context to the signer during the ceremony.

- **Documents vs. attachments** - primary documents (uploaded in PDF/A format, up to 100 MB per file) are cryptographically signed, sealed, timestamped, and packaged into the final PAdES output. Attachments are supplementary reference materials that travel alongside the signing request but are never cryptographically signed

- **File types and conversion** - primary documents must be unprotected PDF/A files. Enterprise customers can enable automatic file conversion, which converts uploaded Office files (Word, Excel) and common image formats into PDF upon upload. Attachments are uploaded as additional reference files alongside the primary documents

- **Signer experience during the ceremony** - attachments are presented clearly to the signer in connection with the main signing request. Your signers can open, read, and review all reference materials before they execute their signature on the primary document. This ensures informed consent without requiring the signer to track down supporting documents separately

- **What happens in the final package** - attachments are completely excluded from the cryptographic sealing process. The PrimeKey signing engine applies the organizational seal, eIDAS timestamps, and embedded XAdES audit trails only to the primary documents. Reference attachments are not merged into or embedded within the final PAdES PDF

- **Practical use cases** - attach general terms and conditions that the signer needs to read but that do not require a signature. Include product specifications, pricing appendices, or background documentation alongside a commercial agreement. Add regulatory disclosure documents or privacy notices as reference material without cluttering the signed contract itself
