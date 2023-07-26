import Link from 'next/link'
import '../../styles/boxitem.css'

const BoxItem = (props: {
  link: string
  title: string
  description: string
  backgroundColor: string
  backgroundImage?: string
}) => {
  const { link, title, description, backgroundColor, backgroundImage } = props
  return (
    <Link
      href={link}
      className={`box-item w-1/3 mx-5 text-center ${backgroundColor} ${backgroundImage} py-5 px-10 rounded-t-md hover:rounded-t-3xl`}
    >
      <span className="block text-secondary-color text-2xl font-bold pb-8">{title}</span>
      <span className="text-secondary-color pr-2">{description}</span>
      <svg
        fill="currentColor"
        color="black"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        className='inline'
      >
        <path d="M43.41 22.59 28.12 7.29a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 0 0 0 1.41L37.17 22H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h32.17L25.3 37.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l15.3-15.3a2 2 0 0 0 0-2.82Z"></path>
      </svg>
    </Link>
  )
}

export default BoxItem
