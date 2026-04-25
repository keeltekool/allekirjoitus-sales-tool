# Post-Sign Redirect

After your signer completes the signature, the platform can automatically redirect them back to your own application - eliminating the dead-end "thank you" page and creating a seamless end-to-end digital journey.

- **What the signer experiences** - the signer authenticates, reviews the document, and executes the signature through the standard Allekirjoitus.fi ceremony. Upon completion, instead of landing on a generic platform confirmation page, they are automatically forwarded to your designated URL - whether that is an onboarding portal, a CRM next-step page, a policy issuance confirmation, or any other web application in your workflow

- **How this creates seamless integration** - post-sign redirect solves the "broken handoff" problem. In standard e-signature flows, the signer finishes signing and is stranded on the signing platform with no clear path forward. With redirect configured, the signing step becomes an invisible part of your larger digital process - the signer moves from your application to the signing ceremony and back to your application without ever feeling they left

- **Configuration** - post-sign redirect is an Enterprise-tier workflow option, configured as part of the signature request setup. The redirect destination URL is specified when the request is created, typically via the API for automated workflows. This allows your integration to dynamically set the return URL based on the specific transaction context

- **Deployment example** - investment firm Springvest actively uses post-sign redirect to route signers back into their client onboarding flow immediately after contract execution, enabling the next step in account setup to begin without delay

- **Use cases** - returning customers to an onboarding portal for next steps, triggering policy issuance workflows in insurance, routing back to a CRM opportunity page for sales teams, or directing to a payment or activation page after service agreement signing
