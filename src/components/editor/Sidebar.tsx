'use client'

import { useBrand } from '@/lib/brand-context'
import type { EditorState, LayerConfig, PricingConfig, TemplateType, PrintFormat } from '@/lib/types'

type SidebarProps = {
  state: EditorState
  onToggleLayer: (layer: keyof LayerConfig) => void
  onSetDepth: (depth: 'overview' | 'detail') => void
  onTogglePricing: (key: keyof PricingConfig) => void
  onToggleCustomBlock: (block: 'customerContext' | 'whatsIncluded') => void
  onToggleTerms: () => void
  onSetTemplateType: (type: TemplateType) => void
  onBackToOnboarding?: () => void
  onPrint?: () => void
  printFormat?: PrintFormat
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

const TEMPLATE_TYPES: TemplateType[] = [
  'enterprise_offer',
  'feature_introduction',
  'pricing_proposal',
  'price_list',
]

export function Sidebar({ state, onToggleLayer, onSetDepth, onTogglePricing, onToggleCustomBlock, onToggleTerms, onSetTemplateType, onBackToOnboarding, onPrint, printFormat }: SidebarProps) {
  const { locale } = useBrand()
  const s = locale.sidebar
  const showLayers = state.templateType !== 'price_list' && state.templateType !== 'pricing_proposal'
  const showCustomBlocks = state.templateType === 'enterprise_offer' || state.templateType === 'pricing_proposal'
  const showDepth = state.templateType !== 'price_list' && state.templateType !== 'pricing_proposal'

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
      {onBackToOnboarding && (
        <button
          onClick={onBackToOnboarding}
          className="sidebar-back-btn"
        >
          ‹ {locale.sidebar.overview === 'Yleiskatsaus' ? 'Asetukset' : 'Settings'}
        </button>
      )}

      <SectionLabel label="Template" />
      <select
        value={state.templateType}
        onChange={e => onSetTemplateType(e.target.value as TemplateType)}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '14px',
          border: '1.5px solid var(--brand-gray-border)',
          borderRadius: '6px',
          background: '#fff',
          color: 'var(--brand-text)',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {TEMPLATE_TYPES.map(type => (
          <option key={type} value={type}>
            {locale.eyebrow[type]}
          </option>
        ))}
      </select>

      {showLayers && (
        <>
          <SectionLabel label={s.contentLayers} />
          <Toggle checked={state.layers.defaults} onChange={() => onToggleLayer('defaults')} label={s.layers.defaults} />
          <Toggle checked={state.layers.core} onChange={() => onToggleLayer('core')} label={s.layers.core} />
          <Toggle checked={state.layers.workflows} onChange={() => onToggleLayer('workflows')} label={s.layers.workflows} />
          <Toggle checked={state.layers.config} onChange={() => onToggleLayer('config')} label={s.layers.config} />
          <Toggle checked={state.layers.addons} onChange={() => onToggleLayer('addons')} label={s.layers.addons} />
          <Toggle checked={state.layers.patterns} onChange={() => onToggleLayer('patterns')} label={s.layers.patterns} />
        </>
      )}

      {showCustomBlocks && (
        <>
          <SectionLabel label={s.customBlocks} />
          <Toggle checked={state.customBlocks.customerContext} onChange={() => onToggleCustomBlock('customerContext')} label={s.customerContext} />
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

      {showDepth && (
        <>
          <SectionLabel label={s.depth} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <DepthButton active={state.depth === 'overview'} onClick={() => onSetDepth('overview')} label={s.overview} />
            <DepthButton active={state.depth === 'detail'} onClick={() => onSetDepth('detail')} label={s.detail} />
          </div>
        </>
      )}

      {onPrint && (
        <>
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--brand-gray-border)' }}>
            <button
              onClick={onPrint}
              className="sidebar-print-btn"
            >
              {locale.sidebar.overview === 'Yleiskatsaus' ? 'Tulosta / PDF' : 'Print / Export PDF'}
            </button>
            <div style={{ fontSize: '11px', color: 'var(--brand-gray-500)', marginTop: '6px', lineHeight: 1.4 }}>
              {printFormat === 'continuous'
                ? (locale.sidebar.overview === 'Yleiskatsaus' ? 'Jatkuva sivu' : 'Continuous page')
                : 'A4'
              }
            </div>
          </div>
        </>
      )}
    </aside>
  )
}
