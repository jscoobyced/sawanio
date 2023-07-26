import { Metadata } from 'next'
import Link from 'next/link'
import BoxItem from '../components/BoxItem'

export const metadata: Metadata = {
  title: 'Fortune',
  description: 'Find your fortune here.',
}

const Page = () => {
  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-5xl font-bold">
        Find your fortune here
      </h1>
      <div className="flex mx-auto pt-10 w-4/5">
        <BoxItem
          link="/fortune/8ball"
          title="8 Ball"
          description='Can"t decide? Ask the 8-ball all mighty decision power.'
          backgroundColor='bg-yellow-400'
          backgroundImage='box-item-balls'
        />
        <BoxItem
          link="/fortune/coin"
          title="Flip a coin"
          description="Need a Yes/No answer? Just flip a coin!"
          backgroundColor='bg-yellow-400'
          backgroundImage='box-item-coin'
        />
        <BoxItem
          link="/fortune/tarot"
          title="Tarot Fortune"
          description="Have a question about the future? Ask the cards!"
          backgroundColor='bg-yellow-400'
          backgroundImage='box-item-cards'
        />
      </div>
    </>
  )
}

export default Page
