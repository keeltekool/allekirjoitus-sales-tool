import type { Metadata } from 'next'
import { metropolis, barlowCondensed } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sales Template Tool',
  description: 'Multi-brand sales enablement tool by SK ID Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${metropolis.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
