# Portal Access

The web portal provides your team with a complete browser-based interface for creating, managing, and tracking all signature requests. Enterprise customers typically access it via a custom branded URL with SSO login - no software installation required.

- **Full creation workflow** - upload documents in PDF/A format (up to 100 MB per file), add signatories by name, email, and optionally phone number. Configure signing order: simultaneous (all at once, order = 0) or sequential (tier-by-tier, order = 1, 2, 3 - next tier invited only after the previous completes). Set authentication strength (strong AES or light SES), and optionally enforce strong authentication just to view the document before signing. Attach unsigned reference documents (terms and conditions, appendices) that are visible to the signer but not cryptographically signed. Set an expiry deadline, and add non-signing watchers who receive progress notifications and can download the final signed document

- **Predefined request templates** - instead of configuring every rule manually, senders select a template from a dropdown (e.g., "Loan Application", "Employment Contract"). Templates automatically enforce authentication requirements, signing order, reminder schedules, reflection periods, branded cover pages, and all other workflow settings. Templates can lock specific settings so senders cannot override them

- **Real-time dashboard** - track every request by status: Open, Closed, Expired, Cancelled, or Rejected. Click into any request to see per-signatory progress and a timestamped event log recording every action - email sent, email bounced, signer opened the portal, signer authenticated, signature applied

- **Sender actions** - cancel requests before completion, correct bounced email addresses and immediately resend, trigger manual ad-hoc reminders to individual signers, or duplicate a completed request for reuse with the Copy function

- **User roles and document organization** - Organization Admin has full visibility across the entire tenant and manages users. Department Admin sees all requests within their department. Department User sees only their own requests. Documents are organized by department structure (not free-form folders), with strict visibility scoping - users in Department A cannot see Department B's requests
