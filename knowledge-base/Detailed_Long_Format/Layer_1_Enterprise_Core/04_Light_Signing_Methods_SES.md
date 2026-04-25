# Light Signing Methods (SES)

For scenarios where strong electronic identification is not available or not required, Simple Electronic Signature (SES) methods capture signing intent with lower friction. Unlike strong authentication requests routed through the Telia ID Broker, SES methods are handled natively by the platform's internal Identity Provider. This is an Enterprise-tier exclusive capability.

- **SMS OTP** - the platform generates a one-time password and delivers it to the signer's mobile phone via text message. The signer enters this code in the signing portal to authorize the signature. This confirms that the person controlling the registered phone number approved the document at that moment. Best for international signatories without Nordic or Baltic eID credentials, or for lower-risk agreements where bank-level authentication adds unnecessary friction

- **Email OTP** - delivers the one-time password to the signer's email inbox instead of their phone. Provides the lowest friction of any method, relying on the security of the signer's inbox. Use when phone-based verification is not practical or when email confirmation aligns with your existing processes

- **InkSign (hand-drawn signature)** - the signer draws their signature on a touchscreen, tablet, or with a mouse. Specifically designed for face-to-face signing at physical locations. In the deployed banking workflow (Aktia Bank), the branch employee physically checks the customer's passport, creates an identification event in the bank's system, opens the document on a branch tablet without requiring the customer to authenticate electronically, and the customer draws their signature on the screen

- **What SES does not provide** - because SES methods lack cryptographic identity verification, no verified personal identity code (SSN) is retrieved or embedded in the document's audit trail. The platform still applies the organizational seal to prove the document has not been tampered with, but the signer is not cryptographically identified to the same degree as with AES or QES

- **When to use SES vs AES** - use SES for internal HR acknowledgements, event registrations, low-value agreements, and scenarios involving foreign signers without supported Nordic or Baltic eID credentials. Use AES for any transaction where irrefutable proof of identity is legally required or commercially important
