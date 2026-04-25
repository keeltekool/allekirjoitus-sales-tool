import type { KBDocument, KBPart, KBSection, KBContentBlock, KBTable } from './types'

function parseTable(lines: string[]): KBTable {
  const headerLine = lines[0]
  const dataLines = lines.slice(2)

  const headers = headerLine
    .split('|')
    .map(h => h.trim())
    .filter(Boolean)

  const rows = dataLines
    .filter(line => line.includes('|'))
    .map(line => ({
      cells: line
        .split('|')
        .map(c => c.trim())
        .filter((_, i, arr) => i > 0 && i < arr.length),
    }))

  return { headers, rows }
}

function extractStatus(text: string): string | undefined {
  const match = text.match(/\[([A-Z\s\/]+)\]/)
  return match ? match[1].trim() : undefined
}

function stripNumbering(title: string): { numbering: string; title: string } {
  const match = title.match(/^(\d+\.\d+)\s+(.+)$/)
  if (match) {
    return { numbering: match[1], title: match[2] }
  }
  return { numbering: '', title }
}

function parseContentBlocks(lines: string[]): KBContentBlock[] {
  const blocks: KBContentBlock[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('### ')) {
      blocks.push({ type: 'subheading', text: line.replace('### ', '') })
      i++
      continue
    }

    if (line.startsWith('**Status:**') || line.startsWith('**Tila:**')) {
      const label = line.replace(/\*\*(Status|Tila):\*\*\s*/, '')
      blocks.push({ type: 'status', label })
      i++
      continue
    }

    if (line.startsWith('| ') && i + 1 < lines.length && lines[i + 1]?.includes('---')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      blocks.push({ type: 'table', table: parseTable(tableLines) })
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace(/^- /, ''))
        i++
      }
      blocks.push({ type: 'bullet', items })
      continue
    }

    if (line.trim() && !line.startsWith('#') && !line.startsWith('---')) {
      let paragraph = line
      i++
      while (i < lines.length && lines[i].trim() && !lines[i].startsWith('#') && !lines[i].startsWith('|') && !lines[i].startsWith('- ') && !lines[i].startsWith('**Status:') && !lines[i].startsWith('**Tila:') && !lines[i].startsWith('---') && !lines[i].startsWith('### ')) {
        paragraph += ' ' + lines[i]
        i++
      }
      blocks.push({ type: 'paragraph', text: paragraph })
      continue
    }

    i++
  }

  return blocks
}

export function parseKBMarkdown(content: string): KBDocument {
  const lines = content.split('\n')
  const document: KBDocument = { title: '', parts: [] }

  let currentPart: KBPart | null = null
  let currentSection: KBSection | null = null
  let sectionLines: string[] = []

  function flushSection() {
    if (currentSection && sectionLines.length > 0) {
      currentSection.content = parseContentBlocks(sectionLines)
      sectionLines = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('# ') && !line.startsWith('# PART') && !line.startsWith('# OSA') && document.title === '') {
      document.title = line.replace('# ', '')
      continue
    }

    const partMatch = line.match(/^# (?:PART|OSA)\s+(\d+):\s*(.+)$/)
    if (partMatch) {
      flushSection()
      if (currentSection && currentPart) {
        currentPart.sections.push(currentSection)
        currentSection = null
      }

      const partNumber = parseInt(partMatch[1])
      const titleWithStatus = partMatch[2]
      const status = extractStatus(titleWithStatus)
      const title = titleWithStatus.replace(/\s*\[.*?\]\s*/, '').trim()

      currentPart = { number: partNumber, title, status, sections: [] }
      document.parts.push(currentPart)
      continue
    }

    const sectionMatch = line.match(/^## (\d+\.\d+\s+.+|[A-Z].+)$/)
    if (sectionMatch && currentPart) {
      flushSection()
      if (currentSection) {
        currentPart.sections.push(currentSection)
      }

      const raw = sectionMatch[1]
      const { numbering, title } = stripNumbering(raw)
      const status = extractStatus(raw)

      currentSection = {
        id: numbering || raw.toLowerCase().replace(/\s+/g, '-'),
        numbering,
        title: title.replace(/\s*\[.*?\]\s*/, '').trim(),
        status,
        content: [],
      }
      sectionLines = []
      continue
    }

    if (line.startsWith('## ') && !currentPart) {
      continue
    }

    if (currentSection) {
      sectionLines.push(line)
    } else if (currentPart && line.trim() && !line.startsWith('#') && !line.startsWith('---') && !line.startsWith('*Master') && !line.startsWith('*Tietopankki')) {
      if (!currentPart.description) {
        currentPart.description = line
      } else {
        currentPart.description += ' ' + line
      }
    }
  }

  flushSection()
  if (currentSection && currentPart) {
    currentPart.sections.push(currentSection)
  }

  return document
}

export function getKBAsPlainText(content: string): string {
  return content
}
