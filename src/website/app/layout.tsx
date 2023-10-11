import { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/montserrat.css'
import '../styles/menu.css'
import RootLayout from './base_layout'
import meta from './meta.json'

const title = `Home - ${meta.siteName} - Fortune, myths and legends.`
const description =
  'This website is about fortune telling, myths and legends. Feel free to browse for the content and learn about the mysteries of the past.'

export const metadata: Metadata = {
  metadataBase: new URL('https://sawan.io.com'),
  title,
  description,
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
    url: 'https://sawan.io',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

export default RootLayout
