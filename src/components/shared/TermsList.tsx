'use client'

export function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="terms-list">
      {items.map((item, i) => (
        <li key={i} contentEditable suppressContentEditableWarning>
          {item}
        </li>
      ))}
    </ul>
  )
}
