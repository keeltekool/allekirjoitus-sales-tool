# Bundle Signing

Bundle signing lets your signers authenticate once and approve multiple documents in a single session, eliminating the friction of repeated authentication for high-volume signing scenarios.

- **How bundles are created** - the sender does not upload multiple documents into one request. Instead, multiple individual signature requests are created and grouped programmatically. Via the API, the sender sets the bundle flag to true for a specific signatory, and the system dynamically gathers all open requests assigned to that person into a single bundled session. Strict grouping criteria apply: all requests must belong to the same enterprise tenant, share the same authentication strength requirement, and the signatory's details (name, email, phone, SSN) must be identical across all requests

- **The signer's experience** - the signer receives one unified notification for the bundled request. After performing strong authentication once, they can review the queued documents and execute a bulk sign to approve all grouped documents simultaneously. Each document still receives its own individual organizational seal, eIDAS timestamp, and certificate in the background. The signer also retains the option to review and sign documents individually within the bundle if preferred

- **Handling exceptions within a bundle** - if the signer individually signs, cancels, or rejects a single document within the bundle, the current bundle is dissolved and the system automatically generates a new bundled request for the remaining open documents. This ensures no documents are lost or orphaned

- **Volume capacity** - the documented benchmark for bundle signing is 50 documents in a single authenticated session, enabling high-volume approvers to clear substantial queues efficiently

- **Practical use cases** - a school principal signing 50 student contracts in one sitting. An HR manager countersigning dozens of employment agreements at quarter-end. A director processing mass supplier renewals or standard NDAs. An executive clearing a backlog of approval requests that accumulated during travel. In each case, the signer authenticates once and processes the entire queue without repeated bank ID prompts
