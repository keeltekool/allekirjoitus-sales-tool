# Review Request (Reflection Period)

The Review Request workflow enforces a mandatory waiting period between document delivery and signing availability, ensuring your signers have legally mandated time to consider the agreement before committing. This is a regulatory compliance feature actively deployed with banking customers for consumer loan agreements.

- **Step-by-step signer experience** - the signer receives an email with a secure link and can open and read the full document immediately after authenticating. However, the Sign button is disabled and greyed out. The signer's status in the portal updates to "Reviewed" once they have read the document, marking the start of the reflection phase. They can return and re-read the document as many times as they wish during the waiting period. Once the configured timer expires, the platform automatically sends a second email containing the actual signing link. Only then can the signer authenticate and execute the agreement

- **What happens if the signer tries to sign early** - if they click their original link before the timer expires, they are redirected to a view-only page where they can re-read the document but cannot sign. The interface does not present a Sign button until the period has fully elapsed and the system releases the signing link

- **Configurable periods** - the reflection duration is hardcoded into the Signature Request Template. Available configurations include overnight (signer can sign the next morning at 8:00 AM), 7 days (standard for consumer agreements), and 14 days (for major financial commitments). Custom durations can be configured for specific regulatory requirements

- **Regulatory purpose** - Finnish consumer protection law mandates that individuals must be given thinking time before binding themselves to certain high-stakes financial agreements. This applies to consumer credit, personal loans, mortgages, and certain insurance products

- **Banking deployment** - Aktia Bank uses specialized templates with reflection periods hardcoded by product type: 7-day review for personal loans, 14-day review for mortgages, and tailored reflection workflows for corporate lending. The template enforces the waiting period automatically, eliminating the risk of human error in compliance
