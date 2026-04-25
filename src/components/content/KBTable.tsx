'use client'

import type { KBTable as KBTableType } from '@/lib/types'

export function KBTable({ table }: { table: KBTableType }) {
  return (
    <table className="pricing-table" style={{ marginTop: '16px' }}>
      <thead>
        <tr>
          {table.headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, ri) => (
          <tr key={ri}>
            {row.cells.map((cell, ci) => (
              <td
                key={ci}
                className={ci === 0 ? 'component-name' : ''}
                contentEditable
                suppressContentEditableWarning
                dangerouslySetInnerHTML={{
                  __html: cell
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/`(.+?)`/g, '<code>$1</code>'),
                }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
