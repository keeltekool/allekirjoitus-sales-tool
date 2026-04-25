'use client'

import { Deletable } from './Deletable'

export function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="terms-list">
      {items.map((item, i) => (
        <Deletable key={i} as="li">
          <span contentEditable suppressContentEditableWarning>{item}</span>
        </Deletable>
      ))}
    </ul>
  )
}
