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
}: {
  date: string
  eyebrow: string
  heading: string
  pricing: PricingConfig
  termsKB?: KBDocument
  lang?: string
}) {
  return (
    <>
      <EditToggle />
      <div className="page">
        <Header date={date} />
        <TitleBlock eyebrow={eyebrow} heading={heading} />

        <PricingBlock config={pricing} />

        {termsKB && <TermsBlock terms={termsKB} lang={lang} />}

        <Footer />
      </div>
    </>
  )
}
