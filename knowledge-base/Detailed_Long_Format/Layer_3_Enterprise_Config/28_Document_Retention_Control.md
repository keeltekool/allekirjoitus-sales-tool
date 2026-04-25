# Document Retention Control

Signed documents are stored on the platform as a temporary staging mechanism, not as permanent archival. Your organization controls the retention window and is responsible for downloading or automating the transfer of completed documents to your own long-term storage before the deadline.

- **Default retention period** - completed signed documents remain visible and accessible in the portal for 90 days. After the visible period, documents are held in the backend database for an additional period before permanent deletion, resulting in a total default system retention of approximately 180 days

- **Configurable range** - Enterprise customers can extend the retention period up to a maximum of 365 days. The configuration is primarily managed at the tenant level, establishing a baseline for your entire organization. Because the platform's configuration follows a hierarchical structure, retention rules can be overridden at the department level if different business units have different requirements

- **What happens when retention expires** - the system automatically and permanently deletes the documents and the associated signature request. Additionally, 14 days after deletion, all related event data and audit logs (login timestamps, viewing records, signing events) are purged from the audit database. This is irreversible

- **Your responsibility to archive** - the platform is explicitly not a long-term archiving service. Your team must download finalized documents before expiry, or - more commonly for Enterprise customers - automate the process via the REST API or webhooks, pushing completed documents to external archive systems like Zefort or your own internal storage the moment signing is finished

- **GDPR interaction** - the rigid deletion schedule supports GDPR compliance. Your organization acts as the Data Controller and determines retention requirements under applicable law. The platform, as Data Processor, enforces automatic destruction of personal data (including embedded SSNs in the XML metadata) once the configured window closes, supporting your data minimization obligations
