'use client'

import { Header } from '@/components/shared/Header'
import { TitleBlock } from '@/components/shared/TitleBlock'
import { CTABand } from '@/components/shared/CTABand'
import { Footer } from '@/components/shared/Footer'
import { EditToggle } from '@/components/shared/EditToggle'
import { LayerHeader } from '@/components/content/LayerHeader'
import { KBSection } from '@/components/content/KBSection'
import { PricingBlock } from '@/components/pricing/PricingBlock'
import { TermsBlock } from '@/components/content/TermsBlock'
import type { BrandContact } from '@/lib/brand-config'
import type { KBDocument, LayerConfig, PricingConfig } from '@/lib/types'
import { PART_TO_LAYER } from '@/lib/types'

export function FeatureIntroduction({
  kb,
  customerName,
  date,
  eyebrow,
  heading,
  layers,
  pricing,
  termsKB,
  sender,
  lang = 'en',
}: {
  kb: KBDocument
  customerName: string
  date: string
  eyebrow: string
  heading: string
  layers: LayerConfig
  pricing?: PricingConfig
  termsKB?: KBDocument
  sender?: BrandContact
  lang?: string
}) {
  const activeParts = kb.parts.filter(part => {
    const layerKey = PART_TO_LAYER[part.number]
    if (!layerKey) return false
    return layers[layerKey]
  })

  const isPatterns = (partNumber: number) => partNumber === 8

  return (
    <>
      <EditToggle />
      <div className="page">
        <Header date={date} />
        <TitleBlock eyebrow={eyebrow} heading={heading} customer={customerName} />

        {activeParts.map(part => (
          <div key={part.number}>
            <LayerHeader
              partNumber={part.number}
              title={part.title}
              description={part.description}
              lang={lang}
            />

            {isPatterns(part.number) ? (
              <div className="patterns-highlight">
                {part.sections.map(section => (
                  <KBSection key={section.id} section={section} />
                ))}
              </div>
            ) : (
              <div className="feature-blocks">
                {part.sections.map(section => (
                  <div key={section.id} className="feature-block">
                    <KBSection section={section} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {pricing && <PricingBlock config={pricing} />}

        {termsKB && <TermsBlock terms={termsKB} lang={lang} />}

        <CTABand sender={sender} />
        <Footer />
      </div>
    </>
  )
}
