# QES via National ID Cards

When your transactions demand the highest legal tier, Qualified Electronic Signatures provide maximum assurance - legally equivalent to a handwritten signature across the entire EU and cannot be challenged in court on electronic form grounds. The fundamental difference from AES: the signer's own personal cryptographic certificate signs the document directly, not an organizational seal applied on their behalf.

- **How QES differs from AES technically** - in AES, the Telia ID Broker verifies the signer's identity, then the platform seals the document on their behalf using the organizational AATL certificate. In QES, the platform sends the document hash directly to the signer's personal certificate (on their smart card or in Smart-ID), and the signer's own qualified certificate creates the cryptographic signature. This bypasses the ID Broker entirely, using a direct integration with the identity provider

- **Supported national ID cards** - Latvia, Lithuania, Finland, Croatia, Czech Republic, and Belgium are supported via Web eID, a browser-based solution that reads the personal certificate from the signer's physical smart card. Finnish healthcare and organization (ORG) cards are also supported through the same Web eID integration

- **Smart-ID QES mode** - for Baltic markets, Smart-ID in QES mode provides the same top-tier legal standing without a physical card reader. The signer's personal certificate stored in the Smart-ID ecosystem signs the document hash directly, using a direct integration that also bypasses the standard authentication broker

- **The QES signing flow step by step** - only one signer can process the document at a time, because each QES signature must be cryptographically placed on top of the previous one. The signer authenticates with PIN1 via the direct integration, the system calculates the document hash, and the signer authorizes the cryptographic signature with PIN2. If the request contains multiple documents, PIN2 must be entered separately for each document hash

- **When QES is needed** - in Finland, AES is sufficient for the vast majority of business and public sector transactions. QES is required for real estate transactions, official government filings, high-value financial agreements, and notarized contracts. In the Baltic countries - Estonia, Latvia, Lithuania - QES is the expected everyday standard for both business and government interactions, making QES support essential for any organization operating across Finnish and Baltic markets
