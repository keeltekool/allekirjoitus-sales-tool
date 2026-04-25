'use client'

import { Header } from '@/components/shared/Header'
import { TitleBlock } from '@/components/shared/TitleBlock'
import { CTABand } from '@/components/shared/CTABand'
import { Footer } from '@/components/shared/Footer'
import { EditToggle } from '@/components/shared/EditToggle'
import { LayerHeader } from '@/components/content/LayerHeader'
import { KBSection } from '@/components/content/KBSection'
import type { KBDocument, LayerConfig } from '@/lib/types'
import { PART_TO_LAYER } from '@/lib/types'

export function EnterpriseOffer({
  kb,
  customerName,
  date,
  eyebrow,
  heading,
  intro,
  layers,
  lang = 'en',
}: {
  kb: KBDocument
  customerName: string
  date: string
  eyebrow: string
  heading: string
  intro?: string
  layers: LayerConfig
  lang?: string
}) {
  const activeParts = kb.parts.filter(part => {
    const layerKey = PART_TO_LAYER[part.number]
    if (!layerKey) return false
    return layers[layerKey]
  })

  return (
    <>
      <EditToggle />
      <div className="page">
        <Header date={date} />
        <TitleBlock eyebrow={eyebrow} heading={heading} customer={customerName} />

        {intro && (
          <div className="section">
            <div className="section__body" contentEditable suppressContentEditableWarning>
              <p>{intro}</p>
            </div>
          </div>
        )}

        {activeParts.map(part => (
          <div key={part.number}>
            <LayerHeader
              partNumber={part.number}
              title={part.title}
              description={part.description}
              lang={lang}
            />
            {part.sections.map(section => (
              <KBSection key={section.id} section={section} />
            ))}
          </div>
        ))}

        <CTABand />
        <Footer />
      </div>
    </>
  )
}
