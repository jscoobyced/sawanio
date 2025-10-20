import { Metadata } from 'next'
import meta from '../meta.json'
import BiorythmGenerator from '../components/BiorythmGenerator'

const title = `Biorythm - ${meta.siteName} - Generate your biorythm.`
const description =
  'This page is about generating your biorythm in order to understand the cycle of your physical, emotional, and intellectual cycles.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/biorythm',
    description,
    siteName: meta.siteName,
    title,
    images: [meta.logo],
  },
}

const Page = () => {
  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Generate your biorythm
      </h1>
      <BiorythmGenerator></BiorythmGenerator>
    </>
  )
}

export default Page
