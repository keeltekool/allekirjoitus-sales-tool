import { notFound } from 'next/navigation'
import { getBrandConfig } from '@/lib/brand-config'

export default async function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ brand: string }>
}) {
  const { brand: brandId } = await params
  const brand = await getBrandConfig(brandId)

  if (!brand) notFound()

  const cssVars = {
    '--brand-primary': brand.colors.primary,
    '--brand-primary-alt': brand.colors.primaryAlt,
    '--brand-primary-hover': brand.colors.primaryHover,
    '--brand-text-black': brand.colors.textBlack,
    '--brand-text': brand.colors.textBody,
    '--brand-dark': brand.colors.dark,
    '--brand-gray': brand.colors.gray,
    '--brand-gray-light': brand.colors.grayLight,
    '--brand-gray-border': brand.colors.grayBorder,
    '--brand-gray-500': brand.colors.gray500,
    '--brand-gray-600': brand.colors.gray600,
    '--brand-white': '#ffffff',
    '--brand-text-black-pure': '#000000',
  } as React.CSSProperties

  return (
    <div style={cssVars}>
      {children}
    </div>
  )
}
