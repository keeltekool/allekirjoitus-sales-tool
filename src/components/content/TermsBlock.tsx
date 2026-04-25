'use client'

import type { KBDocument } from '@/lib/types'
import { Deletable } from '@/components/shared/Deletable'

export function TermsBlock({ terms, lang }: { terms: KBDocument; lang: string }) {
  const heading = lang === 'fi' ? 'Palveluehdot' : 'Service Terms'

  return (
    <div style={{ marginTop: '56px' }}>
      <div
        style={{
          paddingBottom: '16px',
          borderBottom: '2px solid var(--brand-gray-border)',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: 'var(--brand-primary)',
            marginBottom: '4px',
          }}
        >
          {lang === 'fi' ? 'Liite' : 'Attachment'}
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: 1.2,
            color: 'var(--brand-text-black-pure)',
            margin: 0,
          }}
        >
          {heading}
        </h2>
      </div>

      {terms.parts.map((part, pi) => (
        <Deletable
          key={pi}
          style={{
            background: '#ffffff',
            border: '1.6px solid var(--brand-gray)',
            borderRadius: '20px',
            padding: '28px 32px',
            marginBottom: '24px',
            breakInside: 'avoid',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading), Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              color: 'var(--brand-text-black-pure)',
              marginBottom: '16px',
            }}
          >
            {part.title}
          </div>

          {part.sections.map((section, si) => (
            <Deletable
              key={si}
              style={{
                padding: '10px 0',
                borderBottom: si < part.sections.length - 1 ? '1px solid var(--brand-gray-border)' : 'none',
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  color: 'var(--brand-text-black-pure)',
                  marginBottom: '3px',
                }}
              >
                {section.title}
              </div>
              {section.content
                .filter(b => b.type === 'paragraph')
                .map((block, bi) => (
                  <div
                    key={bi}
                    contentEditable
                    suppressContentEditableWarning
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: 'var(--brand-gray-500)',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: (block as { type: 'paragraph'; text: string }).text
                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        .replace(/`(.+?)`/g, '<code>$1</code>'),
                    }}
                  />
                ))}
            </Deletable>
          ))}
        </Deletable>
      ))}
    </div>
  )
}
