'use client'

export function Section({
  heading,
  children,
}: {
  heading?: string
  children: React.ReactNode
}) {
  return (
    <div className="section">
      {heading && <h2 className="section__heading">{heading}</h2>}
      <div className="section__body">{children}</div>
    </div>
  )
}
