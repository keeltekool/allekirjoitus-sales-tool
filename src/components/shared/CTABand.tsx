'use client'

import { useBrand } from '@/lib/brand-context'
import type { BrandContact } from '@/lib/brand-config'

export function CTABand({ sender }: { sender?: BrandContact }) {
  const { brand, locale } = useBrand()
  const contact = sender || brand.contact

  return (
    <div className="cta-band">
      <div className="cta-band__text">
        <h2 className="cta-band__heading" contentEditable suppressContentEditableWarning>
          {locale.cta.heading}
        </h2>
        <p className="cta-band__sub" contentEditable suppressContentEditableWarning>
          {locale.cta.subtext}
        </p>
      </div>
      <div className="cta-band__contact">
        <div className="cta-band__name" contentEditable suppressContentEditableWarning>
          {contact.name}
        </div>
        <div className="cta-band__title-role">{contact.title}</div>
        <div className="cta-band__detail">
          <span contentEditable suppressContentEditableWarning>{contact.phone}</span>
          <br />
          <a href={`mailto:${contact.email}`}>
            <span contentEditable suppressContentEditableWarning>{contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
