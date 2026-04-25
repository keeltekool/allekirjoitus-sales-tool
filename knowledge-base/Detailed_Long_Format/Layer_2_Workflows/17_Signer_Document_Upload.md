# Signer Document Upload

You can require your signers to upload supporting documents - such as ID copies, diplomas, or licenses - as a mandatory step during the signing ceremony, consolidating document collection and contract execution into a single event.

- **The signer's experience** - after authenticating and reviewing the main contract, the interface presents an additional step prompting the signer to upload the specifically requested files. This is a mandatory workflow gate: the signer must complete the upload before the system permits them to execute their digital signature. If they attempt to skip the upload, the Sign button remains blocked

- **Where uploaded files are stored** - uploaded documents are stored securely within the signature request container alongside the main agreement. However, they are treated as attachments and are not cryptographically signed - they are not merged or sealed into the final PAdES PDF package. They travel with the request as associated files

- **How the sender retrieves them** - once the signing is complete, your team can retrieve uploaded files from the signature request's detail view in the web portal. For automated workflows, backend systems can pull the attachments programmatically via the REST API, enabling immediate processing without manual intervention

- **Practical use cases** - HR onboarding: require a new employee to upload a copy of their passport, professional certificates, or educational diplomas right before signing their employment contract. Insurance: collect health certificates, medical evidence, or doctor's notes during application signing. Vehicle leasing: require a copy of the signer's driving license before they execute the lease agreement. In every case, the documents are captured in context, at the moment of signing, eliminating follow-up emails and lost attachments

- **Enterprise feature** - signer document upload is controlled per template via the backend configuration flag and is available exclusively to Enterprise tier customers
