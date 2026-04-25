import localFont from 'next/font/local'
import { Barlow_Condensed } from 'next/font/google'

export const metropolis = localFont({
  src: [
    { path: '../../public/tenants/allekirjoitus/fonts/Metropolis-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/tenants/allekirjoitus/fonts/Metropolis-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/tenants/allekirjoitus/fonts/Metropolis-Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/tenants/allekirjoitus/fonts/Metropolis-SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../../public/tenants/allekirjoitus/fonts/Metropolis-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
