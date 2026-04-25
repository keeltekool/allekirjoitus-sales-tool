'use client'

export type PricingItem = {
  name: string
  description: string
  price: string
  unit: string
  highlight?: boolean
}

export function PricingCard({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: PricingItem[]
}) {
  return (
    <div className="pricing-card">
      <div className="pricing-card__title">{title}</div>
      <div className="pricing-card__highlight" contentEditable suppressContentEditableWarning>
        {subtitle}
      </div>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Component</th>
            <th style={{ textAlign: 'right' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>
                <div className="component-name" contentEditable suppressContentEditableWarning>
                  {item.name}
                </div>
                <div className="component-desc" contentEditable suppressContentEditableWarning>
                  {item.description}
                </div>
              </td>
              <td className={item.highlight ? 'price-col--highlight' : 'price-col'} contentEditable suppressContentEditableWarning>
                {item.price}
                <span className="price-unit"> {item.unit}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
