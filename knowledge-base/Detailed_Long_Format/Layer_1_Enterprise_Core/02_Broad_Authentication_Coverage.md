# Broad Authentication Coverage

Strong identity verification is covered across all Nordic and Baltic markets through a single platform. Your signers authenticate using their own familiar national eID method - no account creation, no software installation, no registration. Authentication is routed through the Telia ID Broker, which connects to national identity infrastructures and presents each signer with the appropriate options automatically.

- **Finland (included by default)** - all major banks via Finnish Trust Network: OP, Nordea, Danske Bank, Aktia, S-Pankki, Saastopankki, POP Pankki, Alandsbanken, OmaSP, and Hightrust.id. Finnish Mobile Certificate (Mobiilivarmenne) included. Certificate cards for healthcare and organizational use supported via Web eID direct integration

- **Sweden (included by default)** - Swedish BankID and Freja eID

- **Norway, Denmark, Baltics (premium add-on)** - Norwegian BankID and Vipps, Danish MitID, Smart-ID and Mobile-ID across Estonia, Latvia, and Lithuania, and Estonian e-Residency cards. Accessing these markets requires the Nordic-Baltic Authentication add-on

- **How the Telia ID Broker routes authentication** - the platform's internal Signing Auth microservice checks your tenant configuration (allowed methods, required strength) and routes the signer to the Telia ID Broker, which displays a visual grid of available eID methods. Exception: Web eID (certificate cards) and Smart-ID QES mode bypass the broker entirely, using direct integrations for cryptographic signing

- **The signer experience** - your signer clicks the secure link, sees a visual grid showing logos of their available banks and eIDs, picks their preferred method, and completes the familiar authentication flow on their own device. No account creation, no registration, no awareness of the underlying platform

- **Configuration at four levels** - authentication can be controlled per tenant (global baseline), per Signature Request Template (locked for specific contract types), per request (sender selects strength when dispatching), and per individual signatory (assign Finnish eIDs to one signer and Swedish BankID to another on the same document). Senders can also enforce strict SSN matching: if the identity code returned during authentication does not match the pre-entered value, signing is blocked
