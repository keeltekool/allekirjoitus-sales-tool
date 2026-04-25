'use client'

import type { KBSection as KBSectionType } from '@/lib/types'
import { StatusBadge } from './StatusBadge'
import { Deletable } from '@/components/shared/Deletable'

function isLabeledItem(text: string): boolean {
  return /^\*\*[^*]+:\*\*/.test(text)
}

function renderLabeledItem(text: string) {
  const match = text.match(/^\*\*([^*]+):\*\*\s*(.+)$/)
  if (!match) return { label: '', desc: text }
  return { label: match[1], desc: match[2] }
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export function KBSection({ section }: { section: KBSectionType }) {
  const statusBlock = section.content.find(b => b.type === 'status')
  const statusLabel = statusBlock?.type === 'status' ? statusBlock.label : undefined

  const paragraphs = section.content.filter(b => b.type === 'paragraph') as { type: 'paragraph'; text: string }[]
  const hasLabeled = paragraphs.some(p => isLabeledItem(p.text))

  const leadParagraphs = hasLabeled
    ? paragraphs.filter(p => !isLabeledItem(p.text))
    : paragraphs
  const labeledItems = hasLabeled
    ? paragraphs.filter(p => isLabeledItem(p.text))
    : []

  return (
    <Deletable
      style={{
        background: '#ffffff',
        border: '1.6px solid var(--brand-gray)',
        borderRadius: '20px',
        padding: '28px 32px',
        marginBottom: '24px',
        breakInside: 'avoid',
      }}
    >
      {/* Title + status */}
      <div
        style={{
          fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          color: 'var(--brand-text-black-pure)',
          marginBottom: leadParagraphs.length > 0 || labeledItems.length > 0 ? '12px' : '0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap' as const,
        }}
      >
        {section.title}
        {statusLabel && <StatusBadge label={statusLabel} />}
      </div>

      {/* Lead paragraphs (intro text before labeled items) */}
      {leadParagraphs.map((block, i) => (
        <p
          key={`lead-${i}`}
          contentEditable
          suppressContentEditableWarning
          style={{
            margin: '0 0 12px',
            fontSize: '17px',
            lineHeight: 1.65,
            color: 'var(--brand-text)',
          }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(block.text) }}
        />
      ))}

      {/* Labeled items as structured specs */}
      {labeledItems.length > 0 && (
        <div style={{ marginTop: leadParagraphs.length > 0 ? '16px' : '0' }}>
          {labeledItems.map((block, i) => {
            const { label, desc } = renderLabeledItem(block.text)
            return (
              <div
                key={`item-${i}`}
                style={{
                  padding: '10px 0',
                  borderBottom: i < labeledItems.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '15px',
                    color: 'var(--brand-text-black-pure)',
                    marginBottom: '3px',
                  }}
                >
                  {label}
                </div>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: 'var(--brand-gray-500)',
                  }}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(desc) }}
                />
              </div>
            )
          })}
        </div>
      )}

      {/* Subheadings + tables + bullets (non-paragraph content) */}
      {section.content
        .filter(b => b.type !== 'paragraph' && b.type !== 'status')
        .map((block, i) => {
          switch (block.type) {
            case 'subheading':
              return (
                <h3
                  key={`sub-${i}`}
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
                <ul key={`bull-${i}`} className="included-list" style={{ marginTop: '12px' }}>
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
            case 'table':
              return (
                <div key={`tbl-${i}`} style={{ marginTop: '12px' }}>
                  {block.table.rows.map((row, ri) => (
                    <div
                      key={ri}
                      style={{
                        padding: '10px 0',
                        borderBottom: ri < block.table.rows.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
                      }}
                    >
                      <div
                        style={{ fontWeight: 600, fontSize: '15px', color: 'var(--brand-text-black-pure)', marginBottom: '3px' }}
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(row.cells[0] || '') }}
                      />
                      {row.cells.slice(1).filter(Boolean).filter(c => c !== '-').map((cell, ci) => (
                        <div
                          key={ci}
                          contentEditable
                          suppressContentEditableWarning
                          style={{ fontSize: '14px', color: 'var(--brand-gray-500)', lineHeight: 1.5 }}
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(cell) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )
            default:
              return null
          }
        })}
    </Deletable>
  )
}
