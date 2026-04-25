'use client'

import { Header } from '@/components/shared/Header'
import { TitleBlock } from '@/components/shared/TitleBlock'
import { Section } from '@/components/shared/Section'
import { IncludedList } from '@/components/shared/IncludedList'
import { CTABand } from '@/components/shared/CTABand'
import { Footer } from '@/components/shared/Footer'
import { EditToggle } from '@/components/shared/EditToggle'
import { PricingBlock } from '@/components/pricing/PricingBlock'
import { TermsBlock } from '@/components/content/TermsBlock'
import { Deletable } from '@/components/shared/Deletable'
import type { KBDocument, LayerConfig, PricingConfig } from '@/lib/types'
import { PART_TO_LAYER } from '@/lib/types'

const INTRO = {
  en: 'Based on your organization\'s signing requirements, we propose transitioning to Allekirjoitus.fi Enterprise — a flexible, usage-based electronic signing platform that scales with your business. This proposal outlines the recommended configuration and transparent pricing for your evaluation.',
  fi: 'Organisaationne allekirjoitustarpeiden perusteella ehdotamme siirtymistä Allekirjoitus.fi Enterprise -palveluun — joustavaan, käyttöpohjaiseen sähköiseen allekirjoitusalustaan, joka skaalautuu liiketoimintanne mukana. Tämä tarjous sisältää suositellun konfiguraation ja läpinäkyvän hinnoittelun arviointianne varten.',
}

const SOLUTION_ITEMS = {
  en: [
    'Unlimited user accounts with Single Sign-On via Azure AD',
    'Advanced Electronic Signatures (AES) — eIDAS-compliant, legally binding across the EU',
    'Full REST API and Webhook integration for system automation',
    'Custom company branding across all signer-facing touchpoints',
    'Configurable signing workflows and multi-template setup',
    'Strong authentication via Finnish Trust Network + Swedish BankID',
    'PAdES signed documents with qualified timestamps — independently verifiable in Adobe Reader',
    'Dedicated onboarding and Mon–Fri technical support (09:00–17:00 EET)',
  ],
  fi: [
    'Rajaton määrä käyttäjätilejä SSO-kirjautumisella Azure AD:n kautta',
    'Kehittyneet sähköiset allekirjoitukset (AES) — eIDAS-yhteensopivat, oikeudellisesti sitovat EU:ssa',
    'Täysi REST API- ja Webhook-integraatiotuki järjestelmäautomaatioon',
    'Yrityksen oma brändäys kaikissa allekirjoittajan näkymissä',
    'Mukautettavat allekirjoitustyönkulut ja monimallinen konfiguraatio',
    'Vahva tunnistautuminen Suomen luottamusverkoston ja Ruotsin BankID:n kautta',
    'PAdES-allekirjoitetut asiakirjat kvalifioiduilla aikaleimoilla — todennettavissa Adobe Readerilla',
    'Oma käyttöönottoprojekti ja ma–pe tekninen tuki (09:00–17:00 EET)',
  ],
}

const VALUE_NOTE = {
  en: 'This transaction-based model replaces fixed package billing. You pay only for what you use — no volume caps, no overage surprises. As your signing volumes grow, the per-transaction rate remains the same, giving you predictable and transparent costs.',
  fi: 'Tämä tapahtumapohjainen malli korvaa kiinteät pakettihinnat. Maksat vain käytöstä — ei volyymikattoja, ei yllätyksiä ylitysmaksuista. Allekirjoitusvolyymien kasvaessa tapahtumahinta pysyy samana, mikä takaa ennakoitavat ja läpinäkyvät kustannukset.',
}

function getIncludedItems(kb: KBDocument, layers: LayerConfig): string[] {
  const items: string[] = []
  for (const part of kb.parts) {
    const layerKey = PART_TO_LAYER[part.number]
    if (!layerKey || !layers[layerKey]) continue
    for (const section of part.sections) {
      items.push(section.title)
    }
  }
  return items
}

export function PricingProposal({
  kb,
  customerName,
  date,
  eyebrow,
  heading,
  layers,
  pricing,
  showCustomerContext = false,
  showWhatsIncluded = true,
  termsKB,
  lang = 'en',
}: {
  kb: KBDocument
  customerName: string
  date: string
  eyebrow: string
  heading: string
  layers: LayerConfig
  pricing: PricingConfig
  showCustomerContext?: boolean
  showWhatsIncluded?: boolean
  termsKB?: KBDocument
  lang?: string
}) {
  const l = lang as 'en' | 'fi'
  const includedItems = getIncludedItems(kb, layers)
  const solutionHeading = l === 'fi' ? 'Enterprise-ratkaisunne' : 'Your Enterprise Solution'
  const valueHeading = l === 'fi' ? 'Miksi tämä malli toimii' : 'Why This Model Works'

  return (
    <>
      <EditToggle />
      <div className="page">
        <Header date={date} />
        <TitleBlock eyebrow={eyebrow} heading={heading} customer={customerName} />

        {/* Intro paragraph */}
        <div className="section">
          <div className="section__body" contentEditable suppressContentEditableWarning>
            <p>{INTRO[l]}</p>
          </div>
        </div>

        {/* Customer Situation */}
        {showCustomerContext && (
          <div className="section">
            <h2 className="section__heading" style={{ fontSize: '24px' }}>
              {l === 'fi' ? 'Nykytilanne' : 'Current Situation'}
            </h2>
            <div
              className="section__body"
              contentEditable
              suppressContentEditableWarning
              style={{
                minHeight: '80px',
                padding: '16px',
                background: 'var(--brand-gray-light)',
                borderRadius: '8px',
                color: 'var(--brand-gray-500)',
              }}
            >
              <p>{l === 'fi'
                ? 'Kuvaa asiakkaan nykytilanne tähän — nykyinen allekirjoitusratkaisu, volyymit, haasteet...'
                : 'Describe the customer\'s current situation — existing signing solution, volumes, pain points...'
              }</p>
            </div>
          </div>
        )}

        {/* Your Enterprise Solution — curated value props */}
        <Section heading={solutionHeading}>
          <ul className="included-list" style={{ gridTemplateColumns: '1fr' }}>
            {SOLUTION_ITEMS[l].map((item, i) => (
              <Deletable key={i} as="li">
                <span contentEditable suppressContentEditableWarning>{item}</span>
              </Deletable>
            ))}
          </ul>
        </Section>

        {/* Pricing — hero */}
        <PricingBlock config={pricing} />

        {/* Value note */}
        <Deletable>
          <div className="comparison-note" contentEditable suppressContentEditableWarning>
            <strong>{valueHeading}:</strong> {VALUE_NOTE[l]}
          </div>
        </Deletable>

        {/* What's Included — from toggled layers */}
        {showWhatsIncluded && includedItems.length > 0 && (
          <Section heading={l === 'fi' ? 'Palveluun sisältyy' : "What's Included"}>
            <IncludedList items={includedItems} />
          </Section>
        )}

        {/* Service Terms */}
        {termsKB && <TermsBlock terms={termsKB} lang={lang} />}

        <CTABand />
        <Footer />
      </div>
    </>
  )
}
