import { Metadata } from 'next'
import meta from '../../meta.json'
import PageItem from '../../components/PageItem'

const title = `Witches - ${meta.siteName} - Evil or good witches from around the world.`
const description =
  'This is the source for myths and legends across the world. Discover a new world for your imagination.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'witches',
    'fairy',
    'legends',
    'myths',
    'fairytales',
    'monsters',
    'creatures',
  ],
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/legends/witches',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  return (
    <PageItem title="Witches">
      <>Coming soon.</>
    </PageItem>
  )
}

export default Page
