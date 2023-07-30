import { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/montserrat.css'
import '../styles/menu.css'
import RootLayout from './base_layout'

export const metadata: Metadata = {
  title: 'Home - Sawan.io - Fortune, myths and legends.',
  description:
    'This website is about fortune telling, myths and legends. Feel free to browse for the content and learn about the mysteries of the past.',
  authors: [{ url: 'https://narok.io' }],
  keywords: [
    'fortune teller',
    'tarot',
    'tarot reading',
    'myths',
    'legends',
    'mysteries',
  ],
  publisher: 'Cédric Rochefolle',
  openGraph: {
    type: 'website',
    description:
      'This website is about fortune telling, myths and legends. Feel free to browse for the content and learn about the mysteries of the past.',
    siteName: 'Sawan.io',
    title: 'Home - Sawan.io',
    images: ['https://sawan.io/public/images/background.webp'],
  },
}

export default RootLayout
