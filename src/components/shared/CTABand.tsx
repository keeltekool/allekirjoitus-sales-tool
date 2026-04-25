'use client'

import { useBrand } from '@/lib/brand-context'

export function CTABand() {
  const { brand, locale } = useBrand()

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
          {brand.contact.name}
        </div>
        <div className="cta-band__title-role">{brand.contact.title}</div>
        <div className="cta-band__detail">
          <span contentEditable suppressContentEditableWarning>{brand.contact.phone}</span>
          <br />
          <a href={`mailto:${brand.contact.email}`}>
            <span contentEditable suppressContentEditableWarning>{brand.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
