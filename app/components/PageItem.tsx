const PageItem = (props: {
  title: string
  description?: string
  children: JSX.Element | JSX.Element[]
}) => {
  const { title, children, description } = props
  const childrenContent = (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto pt-10 w-4/5">
      {children}
    </div>
  )
  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        {title}
      </h1>
      {description && (
        <div className="flex flex-col mx-auto pt-10 w-4/5">
          <p>{description}</p>
          {childrenContent}
        </div>
      )}
      {!description && childrenContent}
    </>
  )
}

export default PageItem
