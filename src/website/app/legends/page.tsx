import { Metadata } from 'next'
import meta from '../meta.json'
import BoxItem from '../components/BoxItem'
import PageItem from '../components/PageItem'

const title = `Legends - ${meta.siteName} - Myths and legends across the world.`
const description =
  'This is the source for myths and legends across the world. Discover a new world for your imagination.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'fairy',
    'legends',
    'myths',
    'fairytales',
    'monsters',
    'creatures',
  ],
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/legends',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  const boxItems = [
    <BoxItem
      key="box-item-legends-ghosts"
      link="/legends"
      title="Ghosts"
      description="Ghosts around the world. Coming soon!"
      foregroundColor="text-white"
      arrowColor="white"
      backgroundColor="bg-sky-700"
      backgroundImage="box-item-ghost"
    />,
    <BoxItem
      key="box-item-legends-witches"
      link="/legends"
      title="Witches"
      description="Witches around the world. Coming soon!"
      foregroundColor="text-white"
      arrowColor="white"
      backgroundColor="bg-lime-700"
      backgroundImage="box-item-witch"
    />,
    <BoxItem
      key="box-item-legends-dragons"
      link="/legends"
      title="Dragons"
      description="Dragons around the world. Coming soon!"
      foregroundColor="text-white"
      arrowColor="white"
      backgroundColor="bg-lime-900"
      backgroundImage="box-item-balls"
    />,
    <BoxItem
      key="box-item-legends-demons"
      link="/legends"
      title="Demons"
      description="Demons around the world. Coming soon!"
      foregroundColor="text-white"
      arrowColor="white"
      backgroundColor="bg-rose-900"
      backgroundImage="box-item-balls"
    />,
  ]
  return <PageItem title="Myths and legends">{boxItems}</PageItem>
}

export default Page
