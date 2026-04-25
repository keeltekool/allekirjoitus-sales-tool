'use client'

import { createContext, useContext } from 'react'
import type { BrandConfig, BrandLocaleStrings } from '@/lib/brand-config'

type BrandContextValue = {
  brand: BrandConfig
  lang: string
  locale: BrandLocaleStrings
}

const BrandContext = createContext<BrandContextValue | null>(null)

export function BrandProvider({
  brand,
  lang,
  children,
}: {
  brand: BrandConfig
  lang: string
  children: React.ReactNode
}) {
  const locale = brand.locale[lang as keyof typeof brand.locale] ?? brand.locale.en

  return (
    <BrandContext.Provider value={{ brand, lang, locale }}>
      {children}
    </BrandContext.Provider>
  )
}

export function useBrand(): BrandContextValue {
  const ctx = useContext(BrandContext)
  if (!ctx) throw new Error('useBrand must be used within BrandProvider')
  return ctx
}
