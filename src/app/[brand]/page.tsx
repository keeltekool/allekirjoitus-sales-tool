import { getBrandConfig } from '@/lib/brand-config'
import { loadKB } from '@/lib/kb-loader'
import { notFound } from 'next/navigation'
import { EnterpriseOfferPage } from './EnterpriseOfferPage'

export default async function BrandHomePage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand: brandId } = await params
  const brand = await getBrandConfig(brandId)
  if (!brand) notFound()

  const lang = 'en'
  const kb = loadKB(brand.kb.overview[lang as keyof typeof brand.kb.overview])

  return (
    <EnterpriseOfferPage
      kb={kb}
      brandName={brand.name}
      lang={lang}
    />
  )
}
