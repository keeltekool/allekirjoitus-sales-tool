'use client'

import { Sidebar } from './Sidebar'
import { useEditorState, createInitialState } from '@/hooks/useEditorState'
import { useBrand } from '@/lib/brand-context'
import { EnterpriseOffer } from '@/components/templates/EnterpriseOffer'
import { FeatureIntroduction } from '@/components/templates/FeatureIntroduction'
import { PricingProposal } from '@/components/templates/PricingProposal'
import { PriceList } from '@/components/templates/PriceList'
import type { KBDocument } from '@/lib/types'

export function EditorLayout({
  overviewKB,
  detailKB,
  termsOverviewKB,
  termsDetailKB,
  initialTemplateType = 'enterprise_offer',
  initialCustomerName = '[Customer Name]',
  initialLang = 'en',
}: {
  overviewKB: KBDocument
  detailKB: KBDocument
  termsOverviewKB: KBDocument
  termsDetailKB: KBDocument
  initialTemplateType?: import('@/lib/types').TemplateType
  initialCustomerName?: string
  initialLang?: 'en' | 'fi'
}) {
  const { brand, locale, lang } = useBrand()
  const editor = useEditorState(createInitialState(initialTemplateType, initialLang, initialCustomerName))

  const kb = editor.state.depth === 'overview' ? overviewKB : detailKB
  const termsKB = editor.state.depth === 'overview' ? termsOverviewKB : termsDetailKB

  const today = new Date()
  const date = lang === 'fi'
    ? `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
    : today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const intro = lang === 'fi'
    ? 'Allekirjoitus.fi on SK ID Solutionsin pilvipohjainen sähköinen allekirjoitusalusta, joka on suunniteltu suomalaisille ja pohjoismaisille yrityksille. Tämä tarjous kuvaa, mitä Enterprise-tilauksesi sisältää ensimmäisestä päivästä alkaen, miten allekirjoitustyönkulut voidaan konfiguroida liiketoimintaprosesseillesi ja mitä lisäominaisuuksia on saatavilla tarpeidesi kehittyessä.'
    : 'Allekirjoitus.fi is a cloud-based electronic signing platform by SK ID Solutions, purpose-built for enterprise organizations in Finland and the Nordics. This proposal outlines what your Enterprise subscription includes from day one, how signing workflows can be configured for your specific business processes, and what additional capabilities are available as your needs evolve.'

  const eyebrow = locale.eyebrow[editor.state.templateType]
  const templateType = editor.state.templateType
  const showTerms = editor.state.termsAttached

  function renderTemplate() {
    switch (templateType) {
      case 'enterprise_offer':
        return (
          <EnterpriseOffer
            kb={kb}
            customerName={editor.state.customerName}
            date={date}
            eyebrow={eyebrow}
            heading={`${brand.name} Enterprise`}
            intro={intro}
            layers={editor.state.layers}
            pricing={editor.state.pricing}
            showCustomerContext={editor.state.customBlocks.customerContext}
            termsKB={showTerms ? termsKB : undefined}
            lang={lang}
          />
        )
      case 'feature_introduction':
        return (
          <FeatureIntroduction
            kb={kb}
            customerName={editor.state.customerName}
            date={date}
            eyebrow={eyebrow}
            heading={`${brand.name} Features`}
            layers={editor.state.layers}
            pricing={editor.state.pricing}
            termsKB={showTerms ? termsKB : undefined}
            lang={lang}
          />
        )
      case 'pricing_proposal':
        return (
          <PricingProposal
            customerName={editor.state.customerName}
            date={date}
            eyebrow={eyebrow}
            heading={lang === 'fi' ? 'Räätälöity tapahtumahinnoittelu' : 'Tailored Transaction Pricing'}
            pricing={editor.state.pricing}
            showCustomerContext={editor.state.customBlocks.customerContext}
            termsKB={showTerms ? termsKB : undefined}
            lang={lang}
          />
        )
      case 'price_list':
        return (
          <PriceList
            date={date}
            eyebrow={eyebrow}
            heading={`${brand.name} ${lang === 'fi' ? 'Hinnasto' : 'Price List'}`}
            pricing={editor.state.pricing}
            termsKB={showTerms ? termsKB : undefined}
            lang={lang}
          />
        )
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        state={editor.state}
        onToggleLayer={editor.toggleLayer}
        onSetDepth={editor.setDepth}
        onTogglePricing={editor.togglePricing}
        onToggleCustomBlock={editor.toggleCustomBlock}
        onToggleTerms={editor.toggleTerms}
        onSetTemplateType={editor.setTemplateType}
      />
      <main style={{ flex: 1, overflow: 'auto' }}>
        {renderTemplate()}
      </main>
    </div>
  )
}
