'use client'

import { useState } from 'react'
import { useBrand } from '@/lib/brand-context'
import { AllekirjoitusLogo } from '@/components/shared/AllekirjoitusLogo'
import type { TemplateType } from '@/lib/types'

const TEMPLATE_CARDS: { type: TemplateType; descEn: string; descFi: string }[] = [
  {
    type: 'enterprise_offer',
    descEn: 'Full enterprise proposal with feature layers, pricing, and terms',
    descFi: 'Täydellinen yritystarjous ominaisuustasoilla, hinnoittelulla ja ehdoilla',
  },
  {
    type: 'feature_introduction',
    descEn: 'Feature overview for stakeholder presentations',
    descFi: 'Ominaisuuksien esittely sidosryhmille',
  },
  {
    type: 'pricing_proposal',
    descEn: 'Tailored pricing with customer context and included services',
    descFi: 'Räätälöity hinnoittelu asiakaskontekstilla ja sisällytetyillä palveluilla',
  },
  {
    type: 'price_list',
    descEn: 'Complete price list — all transaction and subscription fees',
    descFi: 'Täydellinen hinnasto — kaikki tapahtuma- ja tilausmaksut',
  },
]

export function OnboardingForm({
  onStart,
}: {
  onStart: (lang: 'en' | 'fi', customerName: string, templateType: TemplateType) => void
}) {
  const { brand } = useBrand()
  const [lang, setLang] = useState<'en' | 'fi'>(brand.defaultLanguage as 'en' | 'fi')
  const [customerName, setCustomerName] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('enterprise_offer')

  const localeStrings = brand.locale[lang]

  const today = new Date()
  const dateStr = lang === 'fi'
    ? `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
    : today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="page" style={{ maxWidth: '820px', margin: '0 auto', padding: '48px' }}>
      {/* Header — same as template output */}
      <header className="header">
        <AllekirjoitusLogo height={brand.logos.headerHeight} />
        <div className="header__meta">
          {lang === 'fi' ? 'Myyntityökalu' : 'Sales Template Tool'} · {dateStr}
        </div>
      </header>

      {/* Title block — Barlow Condensed heading */}
      <div className="title-block">
        <div className="title-block__eyebrow">
          {lang === 'fi' ? 'Uusi asiakirja' : 'New Document'}
        </div>
        <h1 className="title-block__heading" style={{ fontSize: '42px' }}>
          {lang === 'fi' ? 'Luo myyntidokumentti' : 'Create Sales Document'}
        </h1>
      </div>

      {/* Language selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
        {brand.languages.map(l => (
          <button
            key={l}
            onClick={() => setLang(l as 'en' | 'fi')}
            className={lang === l ? 'onboarding-lang-btn--active' : 'onboarding-lang-btn'}
          >
            {l === 'fi' ? 'Suomi' : 'English'}
          </button>
        ))}
      </div>

      {/* Customer name — brand card style */}
      <div className="section" style={{ marginBottom: '32px' }}>
        <h2 className="section__heading" style={{ fontSize: '24px' }}>
          {lang === 'fi' ? 'Asiakkaan nimi' : 'Customer Name'}
        </h2>
        <input
          type="text"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          placeholder={lang === 'fi' ? 'esim. Yritys Oy' : 'e.g. Company Ltd'}
          className="onboarding-input"
        />
      </div>

      {/* Template selector — brand card style */}
      <div className="section">
        <h2 className="section__heading" style={{ fontSize: '24px' }}>
          {lang === 'fi' ? 'Asiakirjan tyyppi' : 'Template Type'}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {TEMPLATE_CARDS.map(card => {
            const isSelected = selectedTemplate === card.type
            return (
              <button
                key={card.type}
                onClick={() => setSelectedTemplate(card.type)}
                className={isSelected ? 'onboarding-template-card--active' : 'onboarding-template-card'}
              >
                <div style={{
                  fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: isSelected ? 'var(--brand-primary)' : 'var(--brand-text-black-pure)',
                  marginBottom: '4px',
                }}>
                  {localeStrings.eyebrow[card.type]}
                </div>
                <div style={{
                  fontSize: '15px',
                  color: 'var(--brand-gray-500)',
                  lineHeight: 1.5,
                }}>
                  {lang === 'fi' ? card.descFi : card.descEn}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* CTA — brand dark band style */}
      <div
        className="cta-band"
        style={{ cursor: 'pointer' }}
        onClick={() => onStart(lang, customerName || '[Customer Name]', selectedTemplate)}
      >
        <div className="cta-band__text">
          <h2 className="cta-band__heading" style={{ fontSize: '28px' }}>
            {lang === 'fi' ? 'Luo asiakirja' : 'Create Document'}
          </h2>
          <p className="cta-band__sub">
            {lang === 'fi'
              ? 'Avaa editori valituilla asetuksilla. Voit muokata kaikkea myöhemmin.'
              : 'Opens the editor with your selected settings. Everything is editable.'}
          </p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '36px',
          color: 'var(--brand-primary)',
        }}>
          ›
        </div>
      </div>
    </div>
  )
}
