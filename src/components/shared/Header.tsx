'use client'

import { useBrand } from '@/lib/brand-context'
import { AllekirjoitusLogo } from './AllekirjoitusLogo'

export function Header({ date }: { date: string }) {
  const { brand } = useBrand()

  return (
    <header className="header">
      <AllekirjoitusLogo height={brand.logos.headerHeight} />
      <div className="header__meta">
        <span contentEditable suppressContentEditableWarning>{date}</span>
      </div>
    </header>
  )
}
