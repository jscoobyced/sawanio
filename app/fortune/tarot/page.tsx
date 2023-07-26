import TarotBoard from "../../components/tarot"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarot Reading',
  description:
    "Get your free prediction to the tarot reading. This uses 3 cards reading, some cards are upside-up, some are upside-down.",
}

const Page = () => {
  return <TarotBoard></TarotBoard>
}

export default Page
