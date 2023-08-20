import { Metadata } from 'next'
import BoxItem from '../components/BoxItem'
import meta from '../meta.json'
import PageItem from '../components/PageItem'

const title = `Fortune - ${meta.siteName} - Fortune, myths and legends.`
const description =
  'This page is about fortune telling and answering the questions you have. Do you need a full tarot reading? Do you need a quick answer? Or maybe just a flip of coin?'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/fortune',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  const boxItems = [
    <BoxItem
      key="box-item-fortune-tarot"
      link="/fortune/tarot"
      title="Tarot Fortune"
      description="Have a question about the future? Ask the cards!"
      backgroundColor="bg-yellow-400"
      backgroundImage="box-item-cards"
    />,
    <BoxItem
      key="box-item-fortune-8ball"
      link="/fortune/8ball"
      title="8 Ball"
      description='Can"t decide? Ask the 8-ball all mighty decision power.'
      backgroundColor="bg-yellow-400"
      backgroundImage="box-item-balls"
    />,
    <BoxItem
      key="box-item-fortune-coin"
      link="/fortune/coin"
      title="Flip a coin"
      description="Need a Yes/No answer? Just flip a coin!"
      backgroundColor="bg-yellow-400"
      backgroundImage="box-item-coin"
    />,
  ]
  return <PageItem title="Find your fortune here">{boxItems}</PageItem>
}

export default Page
