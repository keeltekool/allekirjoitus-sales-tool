# Custom Metadata

Custom metadata transforms your signed contracts from static PDF files into intelligent, routable data objects. By attaching structured key-value pairs to each signing request, your downstream systems can automatically file, tag, and process completed documents without human intervention.

- **What metadata fields look like** - metadata is structured as dynamic key-value pairs that you define to match your internal taxonomy. Common examples include invoice numbers, cost center codes, CRM opportunity IDs, insurance policy numbers, or contract category tags. These are not fixed system fields - your organization defines whatever keys are relevant to your business processes

- **Three levels of metadata** - fields can be attached at the signature request level (e.g., a Salesforce Opportunity ID applying to the whole transaction), at the signatory level (e.g., assigning a role like "Applicant" or "Guarantor" to a specific person), or at the document level (e.g., tagging a specific attached file with a document category)

- **How metadata is defined** - via API, your systems inject metadata by calling the metadata endpoint with key-value pairs in the JSON payload. In the portal, the interface can be customized to display required metadata input fields on the request creation screen, ensuring employees fill in critical identifiers (like an insurance policy ID) before dispatch. When using Online Forms, all form data filled by the signer is automatically extracted into key-value metadata, eliminating manual data entry

- **Downstream consumption** - when all parties sign, the platform fires a completion webhook. Your downstream system receives the notification, calls the metadata API to pull the full set of key-value pairs alongside the signed PDF, and processes accordingly. Metadata travels with the document, making finalized contracts searchable and routable by business criteria

- **Integration examples** - Aktia Bank maps metadata fields to Zefort archive taxonomy, enabling automatic filing into the correct customer folder without human intervention. Fennia Insurance extracts form-filled metadata and pushes it directly into their CRM and archiving systems, linking signed policies to the correct customer record. Metadata can also be injected into the visual PAdES cover page, dynamically populating fields on the final signed PDF
