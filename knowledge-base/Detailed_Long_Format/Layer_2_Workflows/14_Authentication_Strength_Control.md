# Authentication Strength Control

Authentication is separated into two independent phases - reading the document and signing it - giving you granular control over who can view confidential content and what identity assurance level is required to execute the signature.

- **The reading vs. signing split** - you set the authentication strength independently for document access and for signature execution. A strict system rule applies: signing authentication can never be lower than reading authentication. If you require strong authentication to read, you cannot allow weak authentication to sign

- **What the strength levels mean** - **High** routes the signer to the Telia ID Broker for strong eID authentication (bank IDs, Mobile Certificate, Smart-ID), producing an AES or QES signature. **Medium/Low** routes to lighter methods (SMS OTP, Email OTP, InkSign), producing an SES signature. **None** (reading only) allows the signer to view the document instantly by clicking the email link without any identity check

- **Practical scenarios** - a confidential M&A agreement sets both reading and signing to High: the recipient must authenticate with their bank ID before the PDF content is even revealed, then authenticate again to sign. A routine HR policy acknowledgement sets reading to None and signing to High: the employee clicks the link and reads the policy instantly without friction, but must use their bank ID to formally accept it. An internal approval with lower stakes sets reading to None and signing to Medium, allowing SMS OTP for the signature

- **Configuration granularity** - the baseline authentication strengths (reading and signing) are set at the request level, applying to all signatories by default. Within that baseline, you can configure per-signatory authentication requirements: assign Finnish eIDs to one signer and Swedish BankID to another on the same request. You can also enforce strict identity matching by pre-entering a signer's personal identity code (SSN) - the system blocks them from signing if the SSN returned during authentication does not match
