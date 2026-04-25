'use client'

import { useBrand } from '@/lib/brand-context'

export default function BrandHomePage() {
  const { brand } = useBrand()

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '48px' }}>
      <h1>{brand.name}</h1>
      <p>Brand config loaded: {brand.id}</p>
      <p>Company: {brand.company}</p>
      <p>Primary color: {brand.colors.primary}</p>
      <p>Contact: {brand.contact.name}, {brand.contact.title}</p>
    </div>
  )
}
