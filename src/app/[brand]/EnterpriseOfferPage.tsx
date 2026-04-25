'use client'

import { EnterpriseOffer } from '@/components/templates/EnterpriseOffer'
import { useBrand } from '@/lib/brand-context'
import type { KBDocument } from '@/lib/types'

export function EnterpriseOfferPage({
  kb,
  brandName,
}: {
  kb: KBDocument
  brandName: string
}) {
  const { locale, lang } = useBrand()

  const today = new Date()
  const date = lang === 'fi'
    ? `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
    : today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <EnterpriseOffer
      kb={kb}
      customerName="[Customer Name]"
      date={date}
      eyebrow={locale.eyebrow.enterprise_offer}
      heading={`${brandName} Enterprise`}
      layers={{
        defaults: true,
        core: true,
        workflows: true,
        config: false,
        addons: false,
        patterns: false,
      }}
      lang={lang}
    />
  )
}
