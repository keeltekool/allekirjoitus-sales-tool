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
  return (
    <div className="section">
      <h2 className="section__heading">
        {section.title}
        {section.status && (
          <>
            {' '}
            <StatusBadge label={section.status} />
          </>
        )}
      </h2>
      <div className="section__body">
        {section.content.map((block, i) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
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
                    fontSize: '18px',
                    marginTop: '24px',
                    marginBottom: '12px',
                    color: 'var(--brand-text-black-pure)',
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
                <p key={i} style={{ marginTop: '12px' }}>
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
