# SMS & Email Customization

Every notification your signers receive - invitations, reminders, completion messages - can be fully branded and tailored to your organization's communication standards. From the sender name on the signer's phone to the HTML layout of the email, you control the entire messaging experience.

- **Custom SMS sender name** - when your signer receives a signing invitation via SMS, the message appears under your organization's name rather than a generic phone number. The sender name supports up to 11 characters, so longer company names require a shortened version or abbreviation

- **Custom sender email domain** - by default, notification emails are sent from noreply+YourTenantName@teliasign.com. If your organization requires emails to originate from your own domain (e.g., @yourcompany.com), this can be configured with additional technical setup including domain verification in the email delivery service, ensuring invitations are recognized by recipients and avoid spam filters

- **Template editing** - your administrators define the HTML body and structural layout of notification emails to match your corporate branding. The core text for each lifecycle event (invitation, reminder, completion) can be customized and localized into different languages. Dedicated footer blocks can be configured with standardized sign-offs, legal disclaimers, or compliance statements. Dynamic placeholders automatically inject transaction-specific data into each message - including the tenant or customer name, signing links, and relevant document details - so every notification is personalized without manual effort

- **Notification suppression for API flows** - if your organization runs fully automated, API-driven signing workflows through your own portal or CRM, you can turn off the platform's default notifications entirely. Your system retrieves the signing link and delivers it through your own communication channels, maintaining absolute control over the customer journey. This is configured per Signature Request Template, so you can suppress notifications for automated workflows while keeping them active for manual portal use
