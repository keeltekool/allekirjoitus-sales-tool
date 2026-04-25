'use client'

import { Sidebar } from './Sidebar'
import { useEditorState, createInitialState } from '@/hooks/useEditorState'
import { useBrand } from '@/lib/brand-context'
import { EnterpriseOffer } from '@/components/templates/EnterpriseOffer'
import type { KBDocument } from '@/lib/types'

export function EditorLayout({
  overviewKB,
  detailKB,
}: {
  overviewKB: KBDocument
  detailKB: KBDocument
}) {
  const { brand, locale, lang } = useBrand()
  const editor = useEditorState(createInitialState('enterprise_offer', lang as 'en' | 'fi'))

  const kb = editor.state.depth === 'overview' ? overviewKB : detailKB

  const today = new Date()
  const date = lang === 'fi'
    ? `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
    : today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const intro = lang === 'fi'
    ? 'Allekirjoitus.fi on SK ID Solutionsin pilvipohjainen sähköinen allekirjoitusalusta, joka on suunniteltu suomalaisille ja pohjoismaisille yrityksille. Tämä tarjous kuvaa, mitä Enterprise-tilauksesi sisältää ensimmäisestä päivästä alkaen, miten allekirjoitustyönkulut voidaan konfiguroida liiketoimintaprosesseillesi ja mitä lisäominaisuuksia on saatavilla tarpeidesi kehittyessä.'
    : 'Allekirjoitus.fi is a cloud-based electronic signing platform by SK ID Solutions, purpose-built for enterprise organizations in Finland and the Nordics. This proposal outlines what your Enterprise subscription includes from day one, how signing workflows can be configured for your specific business processes, and what additional capabilities are available as your needs evolve.'

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        state={editor.state}
        onToggleLayer={editor.toggleLayer}
        onSetDepth={editor.setDepth}
        onTogglePricing={editor.togglePricing}
        onToggleCustomBlock={editor.toggleCustomBlock}
        onToggleTerms={editor.toggleTerms}
      />
      <main style={{ flex: 1, overflow: 'auto' }}>
        <EnterpriseOffer
          kb={kb}
          customerName={editor.state.customerName}
          date={date}
          eyebrow={locale.eyebrow.enterprise_offer}
          heading={`${brand.name} Enterprise`}
          intro={intro}
          layers={editor.state.layers}
          pricing={editor.state.pricing}
          showCustomerContext={editor.state.customBlocks.customerContext}
          lang={lang}
        />
      </main>
    </div>
  )
}
