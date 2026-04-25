# REST API Access

The REST API gives your organization full programmatic control over the entire signing lifecycle - from request creation through document retrieval - enabling system-to-system automation with zero portal interaction.

- **JWT authentication** - your system authenticates by sending credentials and tenant ID (a GUID representing your isolated environment) to the identity endpoint, receiving a JSON Web Token. This token is included as a Bearer token in all subsequent requests, alongside an Ocp-Apim-Subscription-Key header for the Azure API Management gateway

- **Two integration patterns** - the multi-step flow provides granular control: create an empty signature request container with recipient details and workflow rules, upload the Base64-encoded document to get a document ID, attach it to the container, then update the status from Draft to Open to dispatch. For simpler implementations, the OneStep endpoint creates, uploads, attaches, and dispatches in a single API call - designed for integrations like Salesforce where orchestrating sequential calls is difficult

- **Webhooks with privacy-safe payloads** - subscribe to real-time event notifications: signaturerequestcompleted, signatorysigned, signaturerequeststatusupdated, signaturerequestexpired. When an event fires, the webhook pushes a JSON payload to your endpoint containing only system identifiers (SignatureRequestId, SignatoryId, TenantId) - never personal data. Your system uses those IDs to make an authenticated callback to fetch the actual metadata and download the signed document

- **Embeddable signing links and post-sign redirect** - suppress the platform's default email invitations and retrieve the signing link directly via API, presenting it within your own application (CRM, HR portal, onboarding flow). After signing, redirect the signer automatically back to your application for a seamless end-to-end journey

- **Automated retrieval and archiving** - when the completion webhook fires, your backend immediately calls the metadata and document APIs to pull the signed PAdES file and structured key-value metadata, transferring them to your archive (e.g., Zefort) without human intervention

- **Batch operations** - for high-volume scenarios like annual contract renewals, dispatch hundreds or thousands of requests via ZIP file (documents) plus CSV file (signatory mapping), with automatic matching of documents to recipients using unique identifiers
