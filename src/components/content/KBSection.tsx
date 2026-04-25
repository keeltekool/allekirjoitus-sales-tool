'use client'

import type { KBSection as KBSectionType, KBTable as KBTableType } from '@/lib/types'
import { StatusBadge } from './StatusBadge'

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

function CompactTable({ table }: { table: KBTableType }) {
  return (
    <div style={{ marginTop: '16px' }}>
      {table.rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            padding: '10px 0',
            borderBottom: ri < table.rows.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
          }}
        >
          <div
            style={{ fontWeight: 600, fontSize: '15px', color: 'var(--brand-text-black-pure)', marginBottom: '3px' }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(row.cells[0] || '') }}
          />
          {row.cells.slice(1).filter(Boolean).filter(c => c !== '-').map((cell, ci) => (
            <div
              key={ci}
              style={{ fontSize: '14px', color: 'var(--brand-gray-500)', lineHeight: 1.5 }}
              contentEditable
              suppressContentEditableWarning
              dangerouslySetInnerHTML={{ __html: renderMarkdown(cell) }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export function KBSection({ section }: { section: KBSectionType }) {
  const statusBlock = section.content.find(b => b.type === 'status')
  const statusLabel = statusBlock?.type === 'status' ? statusBlock.label : undefined

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.6px solid var(--brand-gray)',
        borderRadius: '20px',
        padding: '28px 32px',
        marginBottom: '24px',
        breakInside: 'avoid',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          color: 'var(--brand-text-black-pure)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap' as const,
        }}
      >
        {section.title}
        {statusLabel && <StatusBadge label={statusLabel} />}
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
              return <CompactTable key={i} table={block.table} />
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
              return null
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
