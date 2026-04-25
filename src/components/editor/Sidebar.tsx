'use client'

import { useBrand } from '@/lib/brand-context'
import type { EditorState, LayerConfig, PricingConfig } from '@/lib/types'

type SidebarProps = {
  state: EditorState
  onToggleLayer: (layer: keyof LayerConfig) => void
  onSetDepth: (depth: 'overview' | 'detail') => void
  onTogglePricing: (key: keyof PricingConfig) => void
  onToggleCustomBlock: (block: 'customerContext' | 'whatsIncluded') => void
  onToggleTerms: () => void
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '6px 0' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ width: '16px', height: '16px', accentColor: 'var(--brand-primary)', cursor: 'pointer' }}
      />
      <span style={{ fontSize: '14px', lineHeight: 1.4 }}>{label}</span>
    </label>
  )
}

function DepthButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: '6px 12px',
        fontSize: '13px',
        fontWeight: active ? 600 : 400,
        border: `1.5px solid ${active ? 'var(--brand-primary)' : 'var(--brand-gray-border)'}`,
        borderRadius: '6px',
        background: active ? 'var(--brand-primary)' : 'transparent',
        color: active ? '#fff' : 'var(--brand-text)',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </button>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--brand-gray-500)',
      marginTop: '20px',
      marginBottom: '8px',
      paddingBottom: '6px',
      borderBottom: '1px solid var(--brand-gray-border)',
    }}>
      {label}
    </div>
  )
}

export function Sidebar({ state, onToggleLayer, onSetDepth, onTogglePricing, onToggleCustomBlock, onToggleTerms }: SidebarProps) {
  const { locale } = useBrand()
  const s = locale.sidebar
  const showCustomBlocks = state.templateType === 'enterprise_offer' || state.templateType === 'pricing_proposal'

  return (
    <aside
      className="sidebar"
      style={{
        width: '280px',
        minWidth: '280px',
        height: '100vh',
        position: 'sticky' as const,
        top: 0,
        overflowY: 'auto' as const,
        padding: '24px 20px',
        borderRight: '1px solid var(--brand-gray-border)',
        background: '#fafafa',
        fontSize: '14px',
      }}
    >
      <SectionLabel label={s.contentLayers} />
      <Toggle checked={state.layers.defaults} onChange={() => onToggleLayer('defaults')} label={s.layers.defaults} />
      <Toggle checked={state.layers.core} onChange={() => onToggleLayer('core')} label={s.layers.core} />
      <Toggle checked={state.layers.workflows} onChange={() => onToggleLayer('workflows')} label={s.layers.workflows} />
      <Toggle checked={state.layers.config} onChange={() => onToggleLayer('config')} label={s.layers.config} />
      <Toggle checked={state.layers.addons} onChange={() => onToggleLayer('addons')} label={s.layers.addons} />
      <Toggle checked={state.layers.patterns} onChange={() => onToggleLayer('patterns')} label={s.layers.patterns} />

      {showCustomBlocks && (
        <>
          <SectionLabel label={s.customBlocks} />
          <Toggle checked={state.customBlocks.customerContext} onChange={() => onToggleCustomBlock('customerContext')} label={s.customerContext} />
          <Toggle checked={state.customBlocks.whatsIncluded} onChange={() => onToggleCustomBlock('whatsIncluded')} label={s.whatsIncluded} />
        </>
      )}

      <SectionLabel label={s.attachments} />
      <Toggle checked={state.pricing.attached} onChange={() => onTogglePricing('attached')} label={s.pricingBlock} />
      {state.pricing.attached && (
        <div style={{ paddingLeft: '26px' }}>
          <Toggle checked={state.pricing.transaction} onChange={() => onTogglePricing('transaction')} label={s.pricingSubs.transaction} />
          <Toggle checked={state.pricing.monthly} onChange={() => onTogglePricing('monthly')} label={s.pricingSubs.monthly} />
          <Toggle checked={state.pricing.setup} onChange={() => onTogglePricing('setup')} label={s.pricingSubs.setup} />
          <Toggle checked={state.pricing.addons} onChange={() => onTogglePricing('addons')} label={s.pricingSubs.addons} />
        </div>
      )}
      <Toggle checked={state.termsAttached} onChange={onToggleTerms} label={s.serviceTerms} />

      <SectionLabel label={s.depth} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <DepthButton active={state.depth === 'overview'} onClick={() => onSetDepth('overview')} label={s.overview} />
        <DepthButton active={state.depth === 'detail'} onClick={() => onSetDepth('detail')} label={s.detail} />
      </div>
    </aside>
  )
}
