'use client'

export function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className="included-list">
      {items.map((item, i) => (
        <li key={i} contentEditable suppressContentEditableWarning>
          {item}
        </li>
      ))}
    </ul>
  )
}
