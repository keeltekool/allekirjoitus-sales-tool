'use client'

import { Deletable } from './Deletable'

export function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className="included-list">
      {items.map((item, i) => (
        <Deletable key={i} as="li">
          <span contentEditable suppressContentEditableWarning>{item}</span>
        </Deletable>
      ))}
    </ul>
  )
}
