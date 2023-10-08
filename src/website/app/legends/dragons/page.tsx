import { Metadata } from 'next'
import meta from '../../meta.json'
import PageItem from '../../components/PageItem'

const title = `Dragons - ${meta.siteName} - The most fantastic creatures in the fantasy worlds`
const description =
  'This is the source for myths and legends across the world. Discover a new world for your imagination.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'dragons',
    'fairy',
    'legends',
    'myths',
    'fairytales',
    'monsters',
    'creatures',
  ],
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/legends/dragons',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  return (
    <PageItem title="Dragons">
      <>Coming soon.</>
    </PageItem>
  )
}

export default Page
