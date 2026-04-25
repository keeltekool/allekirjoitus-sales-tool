'use client'

import type { KBSection as KBSectionType } from '@/lib/types'
import { StatusBadge } from './StatusBadge'

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export function KBSection({ section }: { section: KBSectionType }) {
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
        {section.content.some(b => b.type === 'status') && (
          <StatusBadge
            label={
              section.content.find(b => b.type === 'status')?.type === 'status'
                ? (section.content.find(b => b.type === 'status') as { type: 'status'; label: string }).label
                : ''
            }
          />
        )}
      </div>

      <div
        contentEditable
        suppressContentEditableWarning
        style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--brand-text)' }}
      >
        {section.content
          .filter(b => b.type === 'paragraph')
          .map((block, i) => (
            <p
              key={i}
              style={{ margin: '0 0 10px' }}
              dangerouslySetInnerHTML={{ __html: renderMarkdown((block as { type: 'paragraph'; text: string }).text) }}
            />
          ))}
      </div>
    </div>
  )
}
