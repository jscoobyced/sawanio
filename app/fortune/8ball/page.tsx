import { Metadata } from 'next'
import Magic8Ball from '../../components/fortune/8ball'

export const metadata: Metadata = {
  title: 'Magic 8 ball',
  description: 'This magic 8 ball will give you the answer you are seeking.',
}

const Page = () => {
  return <Magic8Ball></Magic8Ball>
}

export default Page
