'use client'

import { DeletableRow } from './Deletable'

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
  headerComponent = 'Component',
  headerPrice = 'Price',
}: {
  title: string
  subtitle: string
  items: PricingItem[]
  headerComponent?: string
  headerPrice?: string
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
            <th>{headerComponent}</th>
            <th style={{ textAlign: 'right' }}>{headerPrice}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <DeletableRow key={i}>
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
            </DeletableRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}
