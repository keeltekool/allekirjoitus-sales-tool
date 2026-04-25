'use client'

const LAYER_EYEBROWS: Record<number, { en: string; fi: string }> = {
  1: { en: 'Your Enterprise Foundation', fi: 'Enterprise-perustasi' },
  2: { en: 'Platform Foundation', fi: 'Alustan perusta' },
  3: { en: 'Process Control', fi: 'Prosessinhallinta' },
  4: { en: 'Tailored To Your Organization', fi: 'Räätälöity organisaatiollesi' },
  5: { en: 'Extend Your Platform', fi: 'Laajenna alustaa' },
  8: { en: 'Industry Insights', fi: 'Toimialanäkymät' },
}

export function LayerHeader({
  partNumber,
  title,
  description,
  lang = 'en',
}: {
  partNumber: number
  title: string
  description?: string
  lang?: string
}) {
  const eyebrow = LAYER_EYEBROWS[partNumber]?.[lang as 'en' | 'fi'] || ''

  return (
    <div
      style={{
        marginBottom: '32px',
        marginTop: '56px',
        paddingBottom: '16px',
        borderBottom: '2px solid var(--brand-gray-border)',
      }}
    >
      {eyebrow && (
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
          {eyebrow}
        </div>
      )}
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
        {title}
      </h2>
      {description && (
        <div
          style={{
            fontSize: '14px',
            color: 'var(--brand-gray-500)',
            marginTop: '4px',
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      )}
    </div>
  )
}
