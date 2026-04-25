# Custom Domain

Your signing experience can run on your own branded URL, so your signers see your domain in the browser bar throughout the entire signing ceremony - reinforcing trust and eliminating any perception of being redirected to an unfamiliar third-party service.

- **Domain options** - the standard configuration places your organization name as a path on the platform domain (e.g., teliasign.com/companyname). Alternatively, you can operate on a custom subdomain (e.g., companyname.teliasign.com). As a premium option, you can run the portal, signing pages, and online forms on a fully custom domain under your own URL (e.g., signing.kpmg.fi, allekirjoitus.kuntarahoitus.fi, signingportal.aktia.fi)

- **What the signer sees** - when your customer clicks the signing link, the browser URL bar shows your configured domain. With a fully custom domain, the signer interacts exclusively with your web address and branding, creating a seamless white-labeled experience

- **SSL certificate handling** - for standard platform domains, SSL certificates are managed automatically by the platform. For fully custom domains, your organization provides the SSL certificate: the platform team generates a Certificate Signing Request (CSR), you purchase the certificate from your preferred provider, and it is integrated into the platform's Azure environment

- **Trust perception** - a custom domain significantly enhances signer confidence. Because the end user sees your organization's address, branding, and SSL certificate, the signing process appears as a proprietary corporate service rather than a redirect to an external platform. This is also an anti-phishing measure - branded domains are kept permanently active to prevent malicious registration of abandoned URLs that could target signers clicking links in older contracts

- **Setup process** - custom domain configuration is a project-based setup involving DNS record configuration, SSL certificate exchange, Azure Front Door routing setup, and CORS configuration for the single-page application
