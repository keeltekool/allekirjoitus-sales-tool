import { getBrandConfig } from '@/lib/brand-config'
import { loadKB } from '@/lib/kb-loader'
import { notFound } from 'next/navigation'
import { EditorLayout } from '@/components/editor/EditorLayout'

export default async function BrandHomePage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand: brandId } = await params
  const brand = await getBrandConfig(brandId)
  if (!brand) notFound()

  const lang = 'en'
  const overviewKB = loadKB(brand.kb.overview[lang as keyof typeof brand.kb.overview])
  const detailKB = loadKB(brand.kb.detail[lang as keyof typeof brand.kb.detail])

  return <EditorLayout overviewKB={overviewKB} detailKB={detailKB} />
}
