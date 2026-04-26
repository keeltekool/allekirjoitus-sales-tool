'use client'

import type { PricingConfig } from '@/lib/types'
import { PricingCard } from '@/components/shared/PricingCard'
import { TRANSACTION, MONTHLY, SETUP, ADDONS, TABLE_HEADERS, getLocalizedItems } from '@/lib/pricing-data'

export function PricingBlock({ config, lang = 'en' }: { config: PricingConfig; lang?: string }) {
  if (!config.attached) return null

  const l = (lang === 'fi' ? 'fi' : 'en') as 'en' | 'fi'
  const headers = { headerComponent: TABLE_HEADERS.component[l], headerPrice: TABLE_HEADERS.price[l] }

  return (
    <div style={{ marginTop: '48px' }}>
      {config.transaction && (() => {
        const s = getLocalizedItems(TRANSACTION, l)
        return <PricingCard title={s.title} subtitle={s.subtitle} items={s.items} {...headers} />
      })()}

      {config.monthly && (() => {
        const s = getLocalizedItems(MONTHLY, l)
        return <PricingCard title={s.title} subtitle={s.subtitle} items={s.items} {...headers} />
      })()}

      {config.setup && (() => {
        const s = getLocalizedItems(SETUP, l)
        return <PricingCard title={s.title} subtitle={s.subtitle} items={s.items} {...headers} />
      })()}

      {config.addons && (() => {
        const s = getLocalizedItems(ADDONS, l)
        return <PricingCard title={s.title} subtitle={s.subtitle} items={s.items} {...headers} />
      })()}
    </div>
  )
}
