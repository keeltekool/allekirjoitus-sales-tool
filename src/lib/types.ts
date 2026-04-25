export type KBTableRow = {
  cells: string[]
}

export type KBTable = {
  headers: string[]
  rows: KBTableRow[]
}

export type KBContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'table'; table: KBTable }
  | { type: 'subheading'; text: string }
  | { type: 'bullet'; items: string[] }
  | { type: 'status'; label: string }

export type KBSection = {
  id: string
  numbering: string
  title: string
  status?: string
  content: KBContentBlock[]
}

export type KBPart = {
  number: number
  title: string
  status?: string
  description?: string
  sections: KBSection[]
}

export type KBDocument = {
  title: string
  parts: KBPart[]
}

export type TemplateType = 'enterprise_offer' | 'feature_introduction' | 'pricing_proposal' | 'price_list'

export type PrintFormat = 'continuous' | 'a4'

export type LayerConfig = {
  defaults: boolean
  core: boolean
  workflows: boolean
  config: boolean
  addons: boolean
  patterns: boolean
}

export type PricingConfig = {
  attached: boolean
  transaction: boolean
  monthly: boolean
  setup: boolean
  addons: boolean
}

export type EditorState = {
  templateType: TemplateType
  language: 'en' | 'fi'
  customerName: string
  depth: 'overview' | 'detail'
  layers: LayerConfig
  customBlocks: {
    customerContext: boolean
    whatsIncluded: boolean
  }
  pricing: PricingConfig
  termsAttached: boolean
}

export const PART_TO_LAYER: Record<number, keyof LayerConfig> = {
  1: 'defaults',
  2: 'core',
  3: 'workflows',
  4: 'config',
  5: 'addons',
  8: 'patterns',
}
