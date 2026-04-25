# Signatory Forwarding

When a signing request reaches someone who lacks the authority or mandate to execute the agreement, signatory forwarding lets them delegate the task to the right person without restarting the workflow or involving the original sender.

- **When and why forwarding is used** - the most common scenario is when an employee receives a contract but does not hold signing rights for agreements above a certain value threshold (e.g., contracts exceeding 5,000 EUR). Rather than halting the process, they delegate directly to an authorized executive. Also useful when a signer is on leave or has changed roles

- **What the original signer does** - after clicking the signing link and reviewing the document, the signer is presented with three options: Sign, Reject, or Forward. Choosing Forward opens a simple form where they enter the new signer's first name, last name, email address, and mobile phone number. The delegation is submitted immediately

- **What the new signer experiences** - the platform dynamically updates the active request and dispatches the same signing invitation to the delegated person via email. The new signer follows the standard flow: click the link, review the document, strongly authenticate with their own eID, and sign. No account creation needed, no awareness of the original delegation unless they check the audit trail

- **Workflow continuity** - the request continues seamlessly without restarting from scratch and without requiring the original sender to intervene. The signing order, expiry deadline, and all other workflow settings remain intact

- **Audit trail** - the full delegation chain is recorded in the timestamped event log and embedded XAdES evidence. The audit trail captures that the original signer opened the document and executed a forwarding action, followed by the new signer's authentication, IP address, and signature events

- **Restrictions** - forwarding availability is controlled per template via a backend configuration flag. If your organization disables forwarding for a specific contract type, the Forward button does not appear. When enabled, the signer can forward to any person capable of passing the required authentication - there is no restriction to internal email domains
