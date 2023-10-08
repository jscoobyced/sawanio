import { Metadata } from 'next'
import meta from '../../meta.json'
import PageItem from '../../components/PageItem'

const title = `Ghosts - ${meta.siteName} - Etheral creatures, neither dead or alive haunting places or people.`
const description =
  'This is the source for myths and legends across the world. Discover a new world for your imagination.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ghosts',
    'fairy',
    'legends',
    'myths',
    'fairytales',
    'monsters',
    'creatures',
  ],
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/legends/ghosts',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  return (
    <PageItem title="Ghosts">
      <>Coming soon.</>
    </PageItem>
  )
}

export default Page
