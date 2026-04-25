export type BrandColors = {
  primary: string
  primaryAlt: string
  primaryHover: string
  textBlack: string
  textBody: string
  dark: string
  gray: string
  grayLight: string
  grayBorder: string
  gray500: string
  gray600: string
}

export type BrandTypography = {
  body: {
    family: string
    source: 'local' | 'google-fonts'
    basePath?: string
    weights: number[]
    files?: Record<number, string>
  }
  heading: {
    family: string
    source: 'local' | 'google-fonts'
    url?: string
    weights: number[]
  }
}

export type BrandContact = {
  name: string
  title: string
  phone: string
  email: string
}

export type BrandLocaleStrings = {
  eyebrow: {
    enterprise_offer: string
    feature_introduction: string
    pricing_proposal: string
    price_list: string
  }
  cta: {
    heading: string
    subtext: string
  }
  editButton: {
    inactive: string
    active: string
  }
  sidebar: {
    contentLayers: string
    attachments: string
    depth: string
    overview: string
    detail: string
    customBlocks: string
    customerContext: string
    whatsIncluded: string
    pricingBlock: string
    serviceTerms: string
    loadPreset: string
    savePreset: string
    layers: {
      defaults: string
      core: string
      workflows: string
      config: string
      addons: string
      patterns: string
    }
    pricingSubs: {
      transaction: string
      monthly: string
      setup: string
      addons: string
    }
  }
}

export type BrandConfig = {
  id: string
  name: string
  company: string
  colors: BrandColors
  typography: BrandTypography
  logos: {
    header: string
    headerHeight: string
    favicon: string
  }
  contact: BrandContact
  footer: {
    company: string
    url: string
  }
  kb: {
    overview: { en: string; fi: string }
    detail: { en: string; fi: string }
  }
  terms: {
    overview: { en: string; fi: string }
    detail: { en: string; fi: string }
  }
  languages: string[]
  defaultLanguage: string
  locale: {
    en: BrandLocaleStrings
    fi: BrandLocaleStrings
  }
}

export async function getBrandConfig(brandId: string): Promise<BrandConfig | null> {
  try {
    const config = await import(`@/lib/brand-configs/${brandId}`)
    return config.default as BrandConfig
  } catch {
    return null
  }
}
