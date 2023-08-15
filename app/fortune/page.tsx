import { Metadata } from 'next'
import BoxItem from '../components/BoxItem'
import meta from '../meta.json'

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
  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-3xl font-bold">
        Find your fortune here
      </h1>
      <div className="flex flex-col md:flex-row mx-auto pt-10 w-4/5">
        <BoxItem
          link="/fortune/tarot"
          title="Tarot Fortune"
          description="Have a question about the future? Ask the cards!"
          backgroundColor="bg-yellow-400"
          backgroundImage="box-item-cards"
        />
        <BoxItem
          link="/fortune/8ball"
          title="8 Ball"
          description='Can"t decide? Ask the 8-ball all mighty decision power.'
          backgroundColor="bg-yellow-400"
          backgroundImage="box-item-balls"
        />
        <BoxItem
          link="/fortune/coin"
          title="Flip a coin"
          description="Need a Yes/No answer? Just flip a coin!"
          backgroundColor="bg-yellow-400"
          backgroundImage="box-item-coin"
        />
      </div>
    </>
  )
}

export default Page
