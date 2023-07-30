import { Metadata } from 'next'
import FlippingCoin from '../../components/FlippingCoin'

export const metadata: Metadata = {
  title: 'Coin flip',
  description:
    "You can flip a coin and find out the answer you can't make by yourself",
}

const Page = () => {
  return <FlippingCoin></FlippingCoin>
}

export default Page
