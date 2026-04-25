# Watchers / Observers

Watchers (also called Followers in the portal) are passive participants who receive full visibility into a signing request's lifecycle without being a party to the agreement. They monitor progress and receive the final signed document, but they never sign.

- **How watchers are added** - senders add watchers during request creation, alongside the signatories. The feature must be enabled on the Signature Request Template for the option to appear. Watchers are added by name and email, similar to signatories, but they are never assigned a signing tier or presented with a Sign button

- **What notifications they receive** - watchers are kept informed throughout the transaction. They receive progress notifications as the document moves through the signing workflow, and once all required signers complete, they receive a final completion notification with the ability to download the sealed PAdES document for their own records

- **What they can and cannot do** - watchers can track progress and download the finalized signed document. They cannot sign, modify the document, alter recipients, or extend the expiration date. Their name does not appear in the cryptographic audit trail as a signing party

- **Difference from optional signatory** - an optional signatory is added to the signing ceremony with the "Signature is required" box unchecked. They are invited to authenticate and can choose to append their signature (e.g., as a witness), but the document completes without them. A watcher is never invited to the signing ceremony and has no ability to sign

- **When organizations use this** - compliance officers and legal departments are added as watchers to automatically receive executed contracts for archival. Managers monitor high-value team agreements without inserting themselves into the approval chain. Account management or provisioning teams receive immediate notification when a client signs, enabling them to start onboarding without waiting for manual status updates
