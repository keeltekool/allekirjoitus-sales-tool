'use client'

import { useState, useCallback } from 'react'
import type { EditorState, TemplateType, LayerConfig, PricingConfig } from '@/lib/types'

const DEFAULT_LAYERS: Record<TemplateType, LayerConfig> = {
  enterprise_offer: { defaults: true, core: true, workflows: true, config: false, addons: false, patterns: false },
  feature_introduction: { defaults: false, core: true, workflows: true, config: false, addons: false, patterns: false },
  pricing_proposal: { defaults: true, core: false, workflows: false, config: false, addons: false, patterns: false },
  price_list: { defaults: false, core: false, workflows: false, config: false, addons: false, patterns: false },
}

const DEFAULT_PRICING: Record<TemplateType, PricingConfig> = {
  enterprise_offer: { attached: false, transaction: true, monthly: true, setup: false, addons: false },
  feature_introduction: { attached: false, transaction: true, monthly: true, setup: false, addons: false },
  pricing_proposal: { attached: true, transaction: true, monthly: true, setup: true, addons: false },
  price_list: { attached: true, transaction: true, monthly: true, setup: true, addons: true },
}

export function createInitialState(
  templateType: TemplateType,
  language: 'en' | 'fi' = 'en',
  customerName: string = '[Customer Name]',
): EditorState {
  return {
    templateType,
    language,
    customerName,
    depth: 'overview',
    layers: { ...DEFAULT_LAYERS[templateType] },
    customBlocks: {
      customerContext: false,
      whatsIncluded: templateType === 'enterprise_offer' || templateType === 'pricing_proposal',
    },
    pricing: { ...DEFAULT_PRICING[templateType] },
    termsAttached: false,
  }
}

export function useEditorState(initial: EditorState) {
  const [state, setState] = useState<EditorState>(initial)

  const toggleLayer = useCallback((layer: keyof LayerConfig) => {
    setState(prev => ({
      ...prev,
      layers: { ...prev.layers, [layer]: !prev.layers[layer] },
    }))
  }, [])

  const setDepth = useCallback((depth: 'overview' | 'detail') => {
    setState(prev => ({ ...prev, depth }))
  }, [])

  const togglePricing = useCallback((key: keyof PricingConfig) => {
    setState(prev => ({
      ...prev,
      pricing: { ...prev.pricing, [key]: !prev.pricing[key] },
    }))
  }, [])

  const toggleCustomBlock = useCallback((block: 'customerContext' | 'whatsIncluded') => {
    setState(prev => ({
      ...prev,
      customBlocks: { ...prev.customBlocks, [block]: !prev.customBlocks[block] },
    }))
  }, [])

  const toggleTerms = useCallback(() => {
    setState(prev => ({ ...prev, termsAttached: !prev.termsAttached }))
  }, [])

  const setLanguage = useCallback((language: 'en' | 'fi') => {
    setState(prev => ({ ...prev, language }))
  }, [])

  const setCustomerName = useCallback((customerName: string) => {
    setState(prev => ({ ...prev, customerName }))
  }, [])

  const setTemplateType = useCallback((templateType: TemplateType) => {
    setState(prev => ({
      ...prev,
      templateType,
      layers: { ...DEFAULT_LAYERS[templateType] },
      pricing: { ...DEFAULT_PRICING[templateType] },
    }))
  }, [])

  return {
    state,
    toggleLayer,
    setDepth,
    togglePricing,
    toggleCustomBlock,
    toggleTerms,
    setLanguage,
    setCustomerName,
    setTemplateType,
  }
}
