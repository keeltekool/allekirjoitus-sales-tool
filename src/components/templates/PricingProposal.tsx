'use client'

import { Header } from '@/components/shared/Header'
import { TitleBlock } from '@/components/shared/TitleBlock'
import { Section } from '@/components/shared/Section'
import { PricingCard } from '@/components/shared/PricingCard'
import { IncludedList } from '@/components/shared/IncludedList'
import { TermsList } from '@/components/shared/TermsList'
import { CTABand } from '@/components/shared/CTABand'
import { Footer } from '@/components/shared/Footer'
import { EditToggle } from '@/components/shared/EditToggle'

export function PricingProposal() {
  return (
    <>
      <EditToggle />
      <div className="page">
        <Header date="22 April 2026" />

        <TitleBlock
          eyebrow="Pricing Proposal"
          heading="Tailored Transaction Pricing"
          customer="Varsinais-Suomen Auto-Center Oy"
        />

        <Section heading="Current Situation">
          <p contentEditable suppressContentEditableWarning>
            Your organization has been a valued Allekirjoitus.fi customer, using our Portal signing solution for your document workflows. Over recent months, your signing volumes have grown significantly beyond your current package allocation, resulting in escalating overage costs.
          </p>
          <p contentEditable suppressContentEditableWarning>
            To better align pricing with your actual usage, we propose transitioning to a transparent, per-transaction billing model with no fixed monthly fee.
          </p>
        </Section>

        <PricingCard
          title="Proposed Pricing"
          subtitle="Transaction-based billing. Pay only for what you use."
          items={[
            {
              name: 'Monthly platform fee',
              description: 'Access to Allekirjoitus.fi signing portal',
              price: '0',
              unit: 'EUR',
              highlight: true,
            },
            {
              name: 'Signature Request - Strong Authentication (AES)',
              description: 'Per signatory. Includes strong identification and document sealing with qualified timestamp.',
              price: '0.80',
              unit: 'EUR',
            },
            {
              name: 'SMS Message',
              description: 'Per message. Document retrieval notifications.',
              price: '0.10',
              unit: 'EUR',
            },
          ]}
        />

        <div className="comparison-note" contentEditable suppressContentEditableWarning>
          This transaction-based model replaces the fixed package structure. At your current monthly volumes, the per-transaction rate of 0.90 EUR (signature + SMS) represents a lower effective cost per signing compared to package overage billing, and scales predictably as your usage grows.
        </div>

        <Section heading="What's Included">
          <IncludedList
            items={[
              'Full Allekirjoitus.fi Portal access',
              'Unlimited user accounts',
              'Strong Authentication via Finnish Trust Network',
              'Swedish BankID support',
              'eIDAS-compliant document sealing',
              'Qualified timestamps on all signatures',
              'Email-based signing invitations',
              'Seamless transition from current setup',
            ]}
          />
        </Section>

        <Section heading="General Terms">
          <TermsList
            items={[
              'All transaction prices are per the current Allekirjoitus.fi official price list (VAT 0%).',
              'Billing is monthly, based on actual usage during the calendar month.',
              'A signature request is charged per signatory when a document is dispatched for signing.',
              'Enterprise-tier features (API access, SSO, custom branding, multi-tenant) are available upon request at standard pricing.',
            ]}
          />
        </Section>

        <CTABand />
        <Footer />
      </div>
    </>
  )
}
