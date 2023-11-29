import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const cutoutFont = localFont({ src: '../fonts/cutout-font.ttf' })

export const p5Font = localFont({ src: '../fonts/expose-regular.otf' })

export const tooDrunkFont = localFont({ src: '../fonts/too-drunk-to-fuck.ttf' })

export const humanErrorFont = localFont({src: '../fonts/human-error.ttf'})

export const humanErrorFlagFont = localFont({src: '../fonts/human-error-flag.ttf'})