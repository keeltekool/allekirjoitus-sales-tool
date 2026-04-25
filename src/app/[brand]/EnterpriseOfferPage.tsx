'use client'

import { EnterpriseOffer } from '@/components/templates/EnterpriseOffer'
import { useBrand } from '@/lib/brand-context'
import type { KBDocument } from '@/lib/types'

export function EnterpriseOfferPage({
  kb,
  brandName,
  lang: pageLang,
}: {
  kb: KBDocument
  brandName: string
  lang: string
}) {
  const { brand } = useBrand()
  const locale = brand.locale[pageLang as keyof typeof brand.locale] ?? brand.locale.en
  const lang = pageLang

  const today = new Date()
  const date = lang === 'fi'
    ? `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
    : today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const intro = lang === 'fi'
    ? 'Allekirjoitus.fi on SK ID Solutionsin pilvipohjainen sähköinen allekirjoitusalusta, joka on suunniteltu suomalaisille ja pohjoismaisille yrityksille. Tämä tarjous kuvaa, mitä Enterprise-tilauksesi sisältää ensimmäisestä päivästä alkaen, miten allekirjoitustyönkulut voidaan konfiguroida liiketoimintaprosesseillesi ja mitä lisäominaisuuksia on saatavilla tarpeidesi kehittyessä.'
    : 'Allekirjoitus.fi is a cloud-based electronic signing platform by SK ID Solutions, purpose-built for enterprise organizations in Finland and the Nordics. This proposal outlines what your Enterprise subscription includes from day one, how signing workflows can be configured for your specific business processes, and what additional capabilities are available as your needs evolve.'

  return (
    <EnterpriseOffer
      kb={kb}
      customerName="[Customer Name]"
      date={date}
      eyebrow={locale.eyebrow.enterprise_offer}
      heading={`${brandName} Enterprise`}
      intro={intro}
      layers={{
        defaults: false,
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
