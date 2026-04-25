# Custom Branding

Your organization's visual identity carries through every touchpoint of the signing experience - from the internal portal your team uses daily, to the signing pages your customers see, to the final sealed PDF that lives in your archive. Branding is applied as a one-time setup, after which every interaction reflects your corporate look and feel.

- **What can be branded** - the sender portal interface (colors, logos, fonts, background images), the signer-facing signing pages where your customers review and execute documents, the PAdES cover page on finalized signed PDFs (your logo replaces default platform branding), and all email and SMS notification templates (custom text, colors, logos, legal disclaimers). Custom domains are also available so the URL itself carries your brand

- **How branding is applied** - this is a one-time setup performed by the service provider's development team based on your graphic guidelines or CSS Bootstrap file. The team creates a custom theme within the platform's code repository and deploys it to the CDN. PAdES cover page templates are configured separately in backend storage. This is not currently self-service, but it is a one-time effort

- **What the signer sees** - when your customer clicks the signing link, they land on an interface featuring your colors, fonts, and logo. Unless they inspect the underlying certificates, the signer may not realize a third-party platform is involved - the experience presents seamlessly under your brand

- **What the sender sees** - your employees navigate a company-branded portal, typically accessed via your custom URL with SSO login. The internal experience matches your corporate identity

- **Branded documents in Adobe** - when anyone opens the final signed PDF, the cover page displays your corporate logo with structured signature metadata (signatory names, authentication methods, timestamps) below it. Adobe Reader shows its standard blue validation bar confirming cryptographic integrity

- **Department-level branding** - large organizations with multiple sub-brands can apply different branding per department. Your HR department's employment contracts can use a different PAdES cover page template than your Sales department's commercial agreements
