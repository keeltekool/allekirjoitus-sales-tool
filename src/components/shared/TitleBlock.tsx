'use client'

export function TitleBlock({
  eyebrow,
  heading,
  customer,
}: {
  eyebrow: string
  heading: string
  customer?: string
}) {
  return (
    <div className="title-block">
      <div className="title-block__eyebrow">{eyebrow}</div>
      <h1 className="title-block__heading" contentEditable suppressContentEditableWarning>
        {heading}
      </h1>
      {customer && (
        <div className="title-block__customer" contentEditable suppressContentEditableWarning>
          {customer}
        </div>
      )}
    </div>
  )
}
