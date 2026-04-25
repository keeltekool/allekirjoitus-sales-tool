'use client'

const STATUS_STYLES: Record<string, string> = {
  'Included': 'background: #e8f5e9; color: #2e7d32;',
  'Sisältyy': 'background: #e8f5e9; color: #2e7d32;',
  'Configurable': 'background: #fff3e0; color: #e65100;',
  'Konfiguroitavissa': 'background: #fff3e0; color: #e65100;',
  'Configuration': 'background: #fff3e0; color: #e65100;',
  'Konfigurointityö': 'background: #fff3e0; color: #e65100;',
  'One-time setup': 'background: #fff3e0; color: #e65100;',
  'Kertakonfigurointi': 'background: #fff3e0; color: #e65100;',
  'Add-on': 'background: #fce4ec; color: #c62828;',
  'Lisäpalvelu': 'background: #fce4ec; color: #c62828;',
  'Per transaction': 'background: #e3f2fd; color: #1565c0;',
  'Per tapahtuma': 'background: #e3f2fd; color: #1565c0;',
}

function getStyle(label: string): string {
  for (const [key, style] of Object.entries(STATUS_STYLES)) {
    if (label.toLowerCase().includes(key.toLowerCase())) return style
  }
  return 'background: #f3f4f6; color: #374151;'
}

export function StatusBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontWeight: 600,
        fontSize: '11px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase' as const,
        padding: '3px 10px',
        borderRadius: '4px',
        ...Object.fromEntries(
          getStyle(label).split(';').filter(Boolean).map(s => {
            const [k, v] = s.split(':').map(x => x.trim())
            return [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v]
          })
        ),
      }}
    >
      {label}
    </span>
  )
}
