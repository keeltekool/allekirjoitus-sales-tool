'use client'

import { useState, useEffect } from 'react'
import { BrandProvider } from '@/lib/brand-context'
import { OnboardingForm } from '@/components/onboarding/OnboardingForm'
import { EditorLayout } from '@/components/editor/EditorLayout'
import type { BrandConfig, BrandContact } from '@/lib/brand-config'
import type { KBDocument, TemplateType, PrintFormat, EditorState } from '@/lib/types'

const DRAFT_KEY = 'allekirjoitus-draft'

type KBSet = {
  overviewEN: KBDocument
  overviewFI: KBDocument
  detailEN: KBDocument
  detailFI: KBDocument
  termsOverviewEN: KBDocument
  termsOverviewFI: KBDocument
  termsDetailEN: KBDocument
  termsDetailFI: KBDocument
}

type OnboardingResult = {
  lang: 'en' | 'fi'
  customerName: string
  templateType: TemplateType
  sender: BrandContact
  printFormat: PrintFormat
}

type SavedDraft = {
  session: OnboardingResult
  editorState: EditorState
  savedAt: number
}

function ResumeBanner({ draft, onResume, onDiscard, lang }: {
  draft: SavedDraft
  onResume: () => void
  onDiscard: () => void
  lang: string
}) {
  const date = new Date(draft.savedAt)
  const timeStr = date.toLocaleTimeString(lang === 'fi' ? 'fi-FI' : 'en-GB', { hour: '2-digit', minute: '2-digit' })
  const dateStr = date.toLocaleDateString(lang === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'short' })

  return (
    <div className="resume-banner" style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      background: '#170703',
      color: '#fff',
      borderRadius: '12px',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      maxWidth: '520px',
      width: 'calc(100% - 48px)',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>
          {lang === 'fi' ? 'Keskeneräinen asiakirja' : 'Unsaved document found'}
        </div>
        <div style={{ fontSize: '13px', opacity: 0.7 }}>
          {draft.session.customerName} — {dateStr} {timeStr}
        </div>
      </div>
      <button
        onClick={onResume}
        style={{
          padding: '8px 20px',
          background: 'var(--brand-primary, #ef4224)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        {lang === 'fi' ? 'Jatka' : 'Resume'}
      </button>
      <button
        onClick={onDiscard}
        style={{
          padding: '8px 16px',
          background: 'transparent',
          color: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        {lang === 'fi' ? 'Hylkää' : 'Discard'}
      </button>
    </div>
  )
}

export function AppShell({
  brand,
  kbs,
}: {
  brand: BrandConfig
  kbs: KBSet
}) {
  const [session, setSession] = useState<OnboardingResult | null>(null)
  const [savedEditorState, setSavedEditorState] = useState<EditorState | undefined>()
  const [draft, setDraft] = useState<SavedDraft | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as SavedDraft
        if (parsed.session && parsed.editorState && parsed.savedAt) {
          setDraft(parsed)
        }
      }
    } catch {}
  }, [])

  function startSession(lang: 'en' | 'fi', customerName: string, templateType: TemplateType, sender: BrandContact, printFormat: PrintFormat) {
    setSession({ lang, customerName, templateType, sender, printFormat })
    setSavedEditorState(undefined)
    window.scrollTo(0, 0)
  }

  function resumeDraft() {
    if (!draft) return
    setSession(draft.session)
    setSavedEditorState(draft.editorState)
    setDraft(null)
    window.scrollTo(0, 0)
  }

  function discardDraft() {
    try { localStorage.removeItem(DRAFT_KEY) } catch {}
    setDraft(null)
  }

  if (!session) {
    return (
      <BrandProvider brand={brand} lang={brand.defaultLanguage}>
        <OnboardingForm onStart={startSession} />
        {draft && (
          <ResumeBanner
            draft={draft}
            onResume={resumeDraft}
            onDiscard={discardDraft}
            lang={brand.defaultLanguage}
          />
        )}
      </BrandProvider>
    )
  }

  const overviewKB = session.lang === 'fi' ? kbs.overviewFI : kbs.overviewEN
  const detailKB = session.lang === 'fi' ? kbs.detailFI : kbs.detailEN
  const termsOverviewKB = session.lang === 'fi' ? kbs.termsOverviewFI : kbs.termsOverviewEN
  const termsDetailKB = session.lang === 'fi' ? kbs.termsDetailFI : kbs.termsDetailEN

  return (
    <BrandProvider brand={brand} lang={session.lang}>
      <EditorLayout
        overviewKB={overviewKB}
        detailKB={detailKB}
        termsOverviewKB={termsOverviewKB}
        termsDetailKB={termsDetailKB}
        initialTemplateType={session.templateType}
        initialCustomerName={session.customerName}
        initialLang={session.lang}
        sender={session.sender}
        printFormat={session.printFormat}
        onBackToOnboarding={() => {
          setSession(null)
          setSavedEditorState(undefined)
          try { localStorage.removeItem(DRAFT_KEY) } catch {}
        }}
        savedEditorState={savedEditorState}
      />
    </BrandProvider>
  )
}
