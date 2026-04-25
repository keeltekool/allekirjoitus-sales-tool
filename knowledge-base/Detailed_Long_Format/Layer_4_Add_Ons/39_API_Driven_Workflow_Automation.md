# API-driven Workflow Automation

Full end-to-end signing automation transforms the platform from a portal-based tool into an invisible backend service. Your CRM, ERP, or HR system creates requests, receives real-time status events, and archives signed documents - all programmatically, with zero portal interaction by any human.

- **How this differs from basic API access** - the Basic/Portal tier has no API access whatsoever. Users must log into the portal, manually upload documents, and type in recipient details. Enterprise API automation means your internal systems handle the entire lifecycle system-to-system. Many Enterprise customers achieve zero portal interaction - their employees never see the signing platform; it operates entirely in the background of their own tools

- **The system-to-system lifecycle** - (1) your backend makes a POST request to create the signature request, injecting signatories, authentication rules, and the document binary. Alternatively, using Document Templating, your system sends JSON data and the platform generates the PDF automatically. (2) Instead of polling for status, your system subscribes to webhooks. The platform pushes real-time event notifications (signatory signed, request completed, expired, rejected) to your endpoint as they occur. (3) When the completion webhook fires, your backend calls the API to retrieve the signed PAdES document and structured metadata, closing the loop automatically

- **Integration with CRM/ERP/HR** - Salesforce: generate contracts from opportunity records, track status directly in the CRM dashboard. Sympa (HR): automate generation, dispatch, and secure return of employment contracts and HR policies. Zefort (archiving): upon completion, signed documents and metadata are automatically pushed to Zefort for long-term legal preservation without anyone clicking download or archive

- **What this enables** - embedding signing as an invisible step in larger business processes, eliminating manual handoffs between systems, achieving real-time visibility into contract status from within your own applications, and ensuring every signed document is archived the moment it completes
