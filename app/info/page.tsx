import { Metadata } from 'next'
import meta from '../meta.json'

const title = `Info - ${meta.siteName} - Information about this website`
const description =
  'You can find here additional information that can help you navigate through sawan.io website.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://sawan.io/info',
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
        Information
      </h1>
      <div className="flex flex-col mx-auto pt-10 w-4/5">
        <p>
          Sawan.io is a website that provides free information for the users, on
          a few topics:
        </p>
        <ul>
          <li>
            Fortune
            <ol>
              <li>Fortune telling with tarot card reading</li>
              <li>Flip a coin</li>
              <li>Magic 8 ball</li>
            </ol>
          </li>
          <li>More coming soon!</li>
        </ul>
        <p>
          Please don&apos;t hesitate to suggest more topics you would like to
          see.
        </p>
      </div>
    </>
  )
}

export default Page
