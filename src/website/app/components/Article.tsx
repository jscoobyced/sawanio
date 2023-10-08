import Image from 'next/image'

const Article = (props: {
  content: JSX.Element
  image?: string
  title?: string
  right?: boolean
}) => {
  const { content, image, title, right } = props
  const float = !!right ? 'float-right' : 'float-left'
  const imageElement = image && (
    <Image
      alt={`${title}`}
      className={`${float} rounded-full circle-shape`}
      src={image}
      width={150}
      height={150}
    />
  )
  return (
    <>
      <p className="pt-5">
        {imageElement}
        {content}
      </p>
    </>
  )
}

export default Article
