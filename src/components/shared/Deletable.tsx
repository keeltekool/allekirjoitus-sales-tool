'use client'

import { useState } from 'react'

export function Deletable({
  children,
  as: Tag = 'div',
  className,
  style,
}: {
  children: React.ReactNode
  as?: 'div' | 'li'
  className?: string
  style?: React.CSSProperties
}) {
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

  return (
    <Tag className={`deletable ${className || ''}`} style={{ position: 'relative', ...style }}>
      {children}
      <button
        className="delete-btn"
        onClick={e => {
          e.stopPropagation()
          setDeleted(true)
        }}
        title="Remove"
      >
        ×
      </button>
    </Tag>
  )
}

export function DeletableRow({ children }: { children: React.ReactNode }) {
  const [deleted, setDeleted] = useState(false)

  if (deleted) return null

  return (
    <tr className="deletable" style={{ position: 'relative' }}>
      {children}
      <td style={{ width: 0, padding: 0, border: 'none', position: 'relative' }}>
        <button
          className="delete-btn-row"
          onClick={e => {
            e.stopPropagation()
            setDeleted(true)
          }}
          title="Remove row"
        >
          ×
        </button>
      </td>
    </tr>
  )
}
