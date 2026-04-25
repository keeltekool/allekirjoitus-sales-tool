'use client'

import { useState } from 'react'
import { BrandProvider } from '@/lib/brand-context'
import { OnboardingForm } from '@/components/onboarding/OnboardingForm'
import { EditorLayout } from '@/components/editor/EditorLayout'
import type { BrandConfig } from '@/lib/brand-config'
import type { KBDocument, TemplateType } from '@/lib/types'

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
}

export function AppShell({
  brand,
  kbs,
}: {
  brand: BrandConfig
  kbs: KBSet
}) {
  const [session, setSession] = useState<OnboardingResult | null>(null)

  if (!session) {
    return (
      <BrandProvider brand={brand} lang={brand.defaultLanguage}>
        <OnboardingForm
          onStart={(lang, customerName, templateType) =>
            setSession({ lang, customerName, templateType })
          }
        />
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
      />
    </BrandProvider>
  )
}
