import { readFileSync } from 'fs'
import { join } from 'path'
import { parseKBMarkdown } from './kb-parser'
import type { KBDocument } from './types'

export function loadKB(relativePath: string): KBDocument {
  const fullPath = join(process.cwd(), 'public', relativePath)
  const content = readFileSync(fullPath, 'utf-8')
  return parseKBMarkdown(content)
}

export function loadKBRaw(relativePath: string): string {
  const fullPath = join(process.cwd(), 'public', relativePath)
  return readFileSync(fullPath, 'utf-8')
}
