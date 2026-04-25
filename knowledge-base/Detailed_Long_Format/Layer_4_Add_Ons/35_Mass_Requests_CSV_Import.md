# Mass Requests (CSV Import)

When you need to dispatch hundreds or thousands of signing requests at once, the mass request feature lets you upload a single ZIP file of documents and a CSV file mapping each document to its signatory - replacing hours of manual data entry with a one-step bulk operation.

- **How CSV import works** - you select the Mass Signature Request template when creating a new request in the portal. Instead of manually configuring each request, you upload two files: a ZIP archive containing all the PDF documents to be signed, and a CSV file containing the signatory data. The system processes both files, automatically matching documents to recipients

- **What the CSV contains** - the CSV includes standard signatory information (names, email addresses, phone numbers) alongside a unique identifier per row that maps each signatory to their specific document within the ZIP archive. This identifier-based matching ensures the platform routes the exact right document to the correct person during automated dispatch

- **Dispatch and tracking** - once the CSV and ZIP are uploaded and processed, the system generates individual signature requests for each document-signatory pair and dispatches them. You track progress through the standard portal dashboard, where each generated request appears with its own status indicator (Open, Closed, Expired, Rejected) and individual signatory progress

- **Volume capacity** - the feature is built for enterprise scale, supporting hundreds to thousands of recipients in a single batch operation

- **Use cases** - annual contract renewals across a large customer base where the same agreement structure is sent to every client with personalized details. Employee handbook distribution requiring every employee to acknowledge and sign updated company policies. Supplier NDA rollouts where identical non-disclosure agreements must reach an entire vendor list. In each case, what would otherwise take days of manual work is reduced to a single upload action
