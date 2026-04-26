'use client'

import { Header } from '@/components/shared/Header'
import { TitleBlock } from '@/components/shared/TitleBlock'
import { Footer } from '@/components/shared/Footer'
import { EditToggle } from '@/components/shared/EditToggle'
import { PricingBlock } from '@/components/pricing/PricingBlock'
import { TermsBlock } from '@/components/content/TermsBlock'
import type { KBDocument, PricingConfig } from '@/lib/types'

export function PriceList({
  date,
  eyebrow,
  heading,
  pricing,
  termsKB,
  lang = 'en',
  editing = false,
  onToggleEditing,
}: {
  date: string
  eyebrow: string
  heading: string
  pricing: PricingConfig
  termsKB?: KBDocument
  lang?: string
  editing?: boolean
  onToggleEditing?: () => void
}) {
  return (
    <>
      <EditToggle editing={editing} onToggle={onToggleEditing ?? (() => {})} />
      <div className="page">
        <Header date={date} />
        <TitleBlock eyebrow={eyebrow} heading={heading} />

        <PricingBlock config={pricing} lang={lang} />

        {termsKB && <TermsBlock terms={termsKB} lang={lang} />}

        <Footer />
      </div>
    </>
  )
}
