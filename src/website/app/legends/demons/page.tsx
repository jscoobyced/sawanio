import { Metadata } from 'next'
import meta from '../../meta.json'
import PageItem from '../../components/PageItem'

const title = `Demons - ${meta.siteName} - Creatures from Hell and other realms.`
const description =
  'This is the source for myths and legends across the world. Discover a new world for your imagination.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'demons',
    'fairy',
    'legends',
    'myths',
    'fairytales',
    'monsters',
    'creatures',
  ],
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/legends/demons',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  return (
    <PageItem title="Demons">
      <>Coming soon.</>
    </PageItem>
  )
}

export default Page
