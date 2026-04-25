'use client'

import type { KBTable as KBTableType } from '@/lib/types'

function renderCell(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export function KBTable({ table }: { table: KBTableType }) {
  if (table.headers.length <= 2) {
    return (
      <div style={{ marginTop: '12px' }}>
        {table.rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '10px 0',
              borderBottom: ri < table.rows.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
              gap: '16px',
            }}
          >
            <span
              contentEditable
              suppressContentEditableWarning
              style={{ fontWeight: 600, flex: 1 }}
              dangerouslySetInnerHTML={{ __html: renderCell(row.cells[0] || '') }}
            />
            {row.cells[1] && (
              <span
                contentEditable
                suppressContentEditableWarning
                style={{ color: 'var(--brand-gray-500)', fontSize: '14px', textAlign: 'right' as const }}
                dangerouslySetInnerHTML={{ __html: renderCell(row.cells[1]) }}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  if (table.headers.length >= 3) {
    return (
      <div style={{ marginTop: '12px' }}>
        {table.rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              padding: '14px 0',
              borderBottom: ri < table.rows.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
            }}
          >
            <div
              style={{ fontWeight: 600, color: 'var(--brand-text-black-pure)', marginBottom: '4px' }}
              contentEditable
              suppressContentEditableWarning
              dangerouslySetInnerHTML={{ __html: renderCell(row.cells[0] || '') }}
            />
            {row.cells.slice(1).map((cell, ci) => (
              cell && (
                <div
                  key={ci}
                  style={{
                    fontSize: '14px',
                    color: 'var(--brand-gray-500)',
                    lineHeight: 1.55,
                    marginTop: '2px',
                  }}
                  contentEditable
                  suppressContentEditableWarning
                  dangerouslySetInnerHTML={{ __html: renderCell(cell) }}
                />
              )
            ))}
          </div>
        ))}
      </div>
    )
  }

  return null
}
