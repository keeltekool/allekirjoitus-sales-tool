'use client'

import { Sidebar } from './Sidebar'
import { useEditorState, createInitialState } from '@/hooks/useEditorState'
import { useBrand } from '@/lib/brand-context'
import { EnterpriseOffer } from '@/components/templates/EnterpriseOffer'
import { FeatureIntroduction } from '@/components/templates/FeatureIntroduction'
import { PricingProposal } from '@/components/templates/PricingProposal'
import { PriceList } from '@/components/templates/PriceList'
import type { BrandContact } from '@/lib/brand-config'
import type { KBDocument, PrintFormat } from '@/lib/types'
import { useEffect, useState, useCallback, useRef } from 'react'
import type { EditorState } from '@/lib/types'

const DRAFT_KEY = 'allekirjoitus-draft'

export function EditorLayout({
  overviewKB,
  detailKB,
  termsOverviewKB,
  termsDetailKB,
  initialTemplateType = 'enterprise_offer',
  initialCustomerName = '[Customer Name]',
  initialLang = 'en',
  sender,
  printFormat = 'continuous',
  onBackToOnboarding,
  savedEditorState,
}: {
  overviewKB: KBDocument
  detailKB: KBDocument
  termsOverviewKB: KBDocument
  termsDetailKB: KBDocument
  initialTemplateType?: import('@/lib/types').TemplateType
  initialCustomerName?: string
  initialLang?: 'en' | 'fi'
  sender?: BrandContact
  printFormat?: PrintFormat
  onBackToOnboarding?: () => void
  savedEditorState?: EditorState
}) {
  const { brand, locale, lang } = useBrand()

  useEffect(() => {
    document.body.classList.remove('print-continuous', 'print-a4')
    document.body.classList.add(printFormat === 'a4' ? 'print-a4' : 'print-continuous')

    let styleEl = document.getElementById('print-format-style') as HTMLStyleElement | null
    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = 'print-format-style'
      document.head.appendChild(styleEl)
    }
    styleEl.textContent = printFormat === 'a4'
      ? '@media print { @page { size: A4; margin: 16mm 18mm; } }'
      : '@media print { @page { size: 210mm 14000mm; margin: 16mm 18mm 0 18mm; } }'

    return () => {
      document.body.classList.remove('print-continuous', 'print-a4')
      styleEl?.remove()
    }
  }, [printFormat])
  const editor = useEditorState(
    savedEditorState ?? createInitialState(initialTemplateType, initialLang, initialCustomerName)
  )

  const [editing, setEditing] = useState(false)
  const toggleEditing = useCallback(() => setEditing(prev => !prev), [])
  const [isDirty, setIsDirty] = useState(!!savedEditorState)
  const mainRef = useRef<HTMLElement>(null)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    document.body.classList.toggle('editing', editing)
    return () => { document.body.classList.remove('editing') }
  }, [editing])

  useEffect(() => {
    setEditing(false)
    window.scrollTo(0, 0)
  }, [editor.state.templateType])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [editor.state.depth])

  useEffect(() => {
    const main = mainRef.current
    if (!main) return
    function onInput() { setIsDirty(true) }
    main.addEventListener('input', onInput)
    return () => main.removeEventListener('input', onInput)
  }, [])

  useEffect(() => {
    if (!isDirty) return
    clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      const draft = {
        session: { lang: initialLang, customerName: initialCustomerName, templateType: initialTemplateType, sender, printFormat },
        editorState: editor.state,
        savedAt: Date.now(),
      }
      try { localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)) } catch {}
    }, 1000)
    return () => clearTimeout(saveTimerRef.current)
  }, [isDirty, editor.state, initialLang, initialCustomerName, initialTemplateType, sender, printFormat])

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
            sender={sender}
            lang={lang}
            editing={editing}
            onToggleEditing={toggleEditing}
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
            sender={sender}
            lang={lang}
            editing={editing}
            onToggleEditing={toggleEditing}
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
            sender={sender}
            lang={lang}
            editing={editing}
            onToggleEditing={toggleEditing}
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
            editing={editing}
            onToggleEditing={toggleEditing}
          />
        )
    }
  }

  return (
    <>
      <div className="mobile-block" style={{
        display: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#fff',
        padding: '48px 24px',
        textAlign: 'center' as const,
      }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>🖥️</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', marginBottom: '16px', color: 'var(--brand-dark)' }}>
            {lang === 'fi' ? 'Työpöytänäkymä vaaditaan' : 'Desktop View Required'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--brand-gray-600)' }}>
            {lang === 'fi'
              ? 'Tämä työkalu on suunniteltu A4/PDF-asiakirjojen tuottamiseen ja vaatii vähintään 900px leveän näytön. Avaa tietokoneella.'
              : 'This tool is designed for producing A4/PDF documents and requires a screen width of at least 900px. Please open on a desktop computer.'}
          </p>
          {onBackToOnboarding && (
            <button
              onClick={onBackToOnboarding}
              style={{
                marginTop: '24px',
                padding: '12px 24px',
                background: 'var(--brand-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ‹ {lang === 'fi' ? 'Takaisin' : 'Go Back'}
            </button>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar
          state={editor.state}
          onToggleLayer={editor.toggleLayer}
          onSetDepth={editor.setDepth}
          onTogglePricing={editor.togglePricing}
          onToggleCustomBlock={editor.toggleCustomBlock}
          onToggleTerms={editor.toggleTerms}
          onSetTemplateType={editor.setTemplateType}
          onBackToOnboarding={onBackToOnboarding}
          onPrint={() => {
            const original = document.title
            const templateLabel = locale.eyebrow[editor.state.templateType].replace(/\s+/g, '_')
            const customer = editor.state.customerName.replace(/\s+/g, '_')
            const dateStr = new Date().toISOString().slice(0, 10)
            document.title = `${brand.name.replace(/\./g, '')}_${templateLabel}_${customer}_${dateStr}`
            window.print()
            setTimeout(() => { document.title = original }, 500)
          }}
          printFormat={printFormat}
        />
        <main ref={mainRef} style={{ flex: 1, overflow: 'auto' }}>
          {renderTemplate()}
        </main>
      </div>
    </>
  )
}
