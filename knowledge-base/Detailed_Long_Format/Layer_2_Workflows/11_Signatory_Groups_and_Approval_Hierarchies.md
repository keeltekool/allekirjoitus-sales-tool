# Signatory Groups & Approval Hierarchies

Signatory groups transform simple sequential signing into multi-level organizational approval flows. Instead of routing documents through a linear chain of individuals, you define collective approval gates where entire tiers must complete before the document escalates to the next management level.

- **How groups are structured** - signatories are assigned to numbered tiers, with multiple people placed on the same tier. There is no fixed limit on the number of tiers, and each tier can contain as many signers as needed. The platform was originally developed to accommodate organizations with many management levels, making it flexible enough for complex corporate hierarchies

- **Document progression between levels** - the document is strictly gated by the hierarchy. When multiple signers share a tier, they all receive the invitation simultaneously and can sign in any order within their group. However, the document only advances to the next tier after every required signer at the current level has completed. Level 2 signers remain entirely unaware of the document until level 1 is 100% finished

- **Cascade rejection** - if any signer at a lower level rejects the document, the entire workflow halts immediately. Upper-level executives in subsequent tiers are never notified and never receive the request. This prevents senior management from wasting time reviewing a document that has already been flagged as invalid by a closer-to-the-ground reviewer

- **Practical examples** - a contract requiring dual product manager approval before CEO sign-off: both managers are placed on tier 1 (sign simultaneously), CEO on tier 2 (invited only after both approve). A multi-department procurement flow: department heads on tier 1, finance director on tier 2, VP on tier 3. If any department head rejects, the finance director and VP never see it

- **Difference from simple sequential signing** - simple sequential mode assigns each individual a unique number (person 1, then person 2, then person 3) creating a strict linear chain. Signatory groups allow multiple individuals to share a tier, creating collective approval gates rather than a one-by-one queue
