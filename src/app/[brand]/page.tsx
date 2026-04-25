import { getBrandConfig } from '@/lib/brand-config'
import { loadKB } from '@/lib/kb-loader'
import { notFound } from 'next/navigation'
import { AppShell } from '@/components/AppShell'

export default async function BrandHomePage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand: brandId } = await params
  const brand = await getBrandConfig(brandId)
  if (!brand) notFound()

  const kbs = {
    overviewEN: loadKB(brand.kb.overview.en),
    overviewFI: loadKB(brand.kb.overview.fi),
    detailEN: loadKB(brand.kb.detail.en),
    detailFI: loadKB(brand.kb.detail.fi),
    termsOverviewEN: loadKB(brand.terms.overview.en),
    termsOverviewFI: loadKB(brand.terms.overview.fi),
    termsDetailEN: loadKB(brand.terms.detail.en),
    termsDetailFI: loadKB(brand.terms.detail.fi),
  }

  return <AppShell brand={brand} kbs={kbs} />
}
