import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Information about sawan.io',
  description: 'Find all the information about us here.',
}

const Page = () => {
  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Information
      </h1>
      <div className="flex mx-auto pt-10 w-4/5">Coming soon.</div>
    </>
  )
}

export default Page
