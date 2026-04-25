'use client'

import { useBrand } from '@/lib/brand-context'

export function Footer() {
  const { brand } = useBrand()

  return (
    <footer className="footer">
      <span>{brand.footer.company}</span>
      <span>{brand.footer.url}</span>
    </footer>
  )
}
