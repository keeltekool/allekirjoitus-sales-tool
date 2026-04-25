'use client'

import type { KBSection as KBSectionType } from '@/lib/types'
import { KBTable } from './KBTable'
import { StatusBadge } from './StatusBadge'

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export function KBSection({ section }: { section: KBSectionType }) {
  const hasTable = section.content.some(b => b.type === 'table')
  const hasParagraph = section.content.some(b => b.type === 'paragraph')

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.6px solid var(--brand-gray)',
        borderRadius: '20px',
        padding: '28px 32px',
        marginBottom: '24px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          color: 'var(--brand-text-black-pure)',
          marginBottom: hasTable || hasParagraph ? '12px' : '0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap' as const,
        }}
      >
        {section.title}
        {section.status && <StatusBadge label={section.status} />}
      </div>

      <div style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--brand-text)' }}>
        {section.content.map((block, i) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ margin: '0 0 10px' }}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(block.text) }}
                />
              )
            case 'table':
              return <KBTable key={i} table={block.table} />
            case 'subheading':
              return (
                <h3
                  key={i}
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    marginTop: '20px',
                    marginBottom: '8px',
                    color: 'var(--brand-primary)',
                    fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
                  }}
                >
                  {block.text}
                </h3>
              )
            case 'bullet':
              return (
                <ul key={i} className="included-list" style={{ marginTop: '12px' }}>
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      contentEditable
                      suppressContentEditableWarning
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(item) }}
                    />
                  ))}
                </ul>
              )
            case 'status':
              return (
                <p key={i} style={{ marginTop: '8px', marginBottom: '0' }}>
                  <StatusBadge label={block.label} />
                </p>
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
