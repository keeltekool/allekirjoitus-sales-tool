'use client'

import type { PricingConfig } from '@/lib/types'
import { PricingCard, type PricingItem } from '@/components/shared/PricingCard'

const TRANSACTION_ITEMS: PricingItem[] = [
  { name: 'Signing Request — Strong Authentication (AES)', description: 'Per signatory dispatched. Includes sealing with qualified timestamp.', price: '0.80', unit: 'EUR', highlight: false },
  { name: 'Signing Request — Light Authentication (SES)', description: 'Per signatory. SMS OTP, Email OTP, or drawn signature.', price: '0.65', unit: 'EUR' },
  { name: 'SMS Message', description: 'Per message. Signing invitations and document retrieval.', price: '0.10', unit: 'EUR' },
  { name: 'Document Sealing', description: 'Per document. Organizational e-seal with qualified timestamp.', price: '0.30', unit: 'EUR' },
  { name: 'File Conversion', description: 'Per document. Non-PDF to PDF/A format conversion.', price: '0.25', unit: 'EUR' },
  { name: 'File Sharing', description: 'Per recipient. Secure document delivery via SMS OTP link.', price: '0.15', unit: 'EUR' },
]

const MONTHLY_ITEMS: PricingItem[] = [
  { name: 'Platform Access Fee', description: 'Enterprise tier access, portal, API, SSO, branding.', price: '275.00', unit: 'EUR/mo', highlight: true },
  { name: 'Additional Environment', description: 'Per additional tenant (subsidiary, separate business unit).', price: '75.00', unit: 'EUR/mo' },
  { name: 'Online Form Template', description: 'Per active form template per month.', price: '25.00', unit: 'EUR/mo' },
  { name: 'Nordic-Baltic Authentication', description: 'Cross-border eID authentication methods add-on.', price: '125.00', unit: 'EUR/mo' },
]

const SETUP_ITEMS: PricingItem[] = [
  { name: 'Customization & Branding', description: 'One-time. Portal UI, signer view, message templates, PAdES cover.', price: '980.00', unit: 'EUR' },
  { name: 'Development & Configuration', description: 'Per hour (min 0.5h). Custom integrations, form development, support.', price: '145.00', unit: 'EUR/h' },
  { name: 'Specialist Consultation', description: 'Per hour. Architecture, project management, solution design.', price: '190.00', unit: 'EUR/h' },
]

const ADDON_ITEMS: PricingItem[] = [
  { name: 'E-Form Template', description: 'Per active form. Monthly fee + development work for creation.', price: '25.00', unit: 'EUR/mo' },
  { name: 'Document Templating', description: 'API-driven PDF generation. Per transaction + setup work.', price: 'Per use', unit: '' },
  { name: 'Mass Requests', description: 'Bulk dispatch via CSV. Standard transaction fees per request.', price: 'Per use', unit: '' },
]

export function PricingBlock({ config }: { config: PricingConfig }) {
  if (!config.attached) return null

  return (
    <div style={{ marginTop: '48px' }}>
      {config.transaction && (
        <PricingCard
          title="Transaction Pricing"
          subtitle="Per-use fees applied when documents are dispatched for signing."
          items={TRANSACTION_ITEMS}
        />
      )}

      {config.monthly && (
        <PricingCard
          title="Monthly Subscriptions"
          subtitle="Recurring platform and service fees."
          items={MONTHLY_ITEMS}
        />
      )}

      {config.setup && (
        <PricingCard
          title="One-Time & Setup Fees"
          subtitle="Initial configuration and customization."
          items={SETUP_ITEMS}
        />
      )}

      {config.addons && (
        <PricingCard
          title="Add-on Pricing"
          subtitle="Additional capabilities activated on top of your subscription."
          items={ADDON_ITEMS}
        />
      )}
    </div>
  )
}
