import Link from 'next/link'
import Article from './components/Article'

const Home = () => {
  const titleContent = (
    <>
      This website is about fortune telling, myths and legends. Feel free to
      browse for the content and learn about the mysteries of the past.
    </>
  )
  const fortuneArticleContent = (
    <>
      You will find here different ways to read your fortune. If you are
      interested in a full reading of your future, you might want to go with a{' '}
      <Link className="text-primary-link" href={'/fortune/tarot'}>
        Tarot reading
      </Link>
      . Or maybe you have a simple Yes/No question and you can ask it to the{' '}
      <Link className="text-primary-link" href={'/fortune/8ball'}>
        Magic 8 Ball
      </Link>
      . Or you even prefer a much simpler flip of a{' '}
      <Link className="text-primary-link" href={'/fortune/coin'}>
        coin
      </Link>
      .
    </>
  )

  const legendsArticleContent = (
    <>
    Continue your journey with discovering creatures and legendary beings. You can read more about{' '}
      <Link className="text-primary-link" href={'/legends/ghosts'}>
        ghosts
      </Link> around the world. Also from all countries, we have a section to tell the tales of{' '}
      <Link className="text-primary-link" href={'/legends/witches'}>
        witches
      </Link>. If you are more of a{' '}
      <Link className="text-primary-link" href={'/legends/demons'}>
        demons
      </Link> person, we&apos;ve got you covered. And last but not least, if{' '}
      <Link className="text-primary-link" href={'/legends/dragons'}>
        dragons
      </Link> is what you are looking for, then we have them as well.
    </>
  )

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Welcome to Sawan.io
      </h1>
      <div className="flex flex-col mx-auto text-xl pt-10 md:w-3/5 w-4/5">
        <Article content={titleContent}></Article>
        <Article
          content={fortuneArticleContent}
          title="A fortune teller preparing to tell fortune with tarot cards."
          image="/images/fortune-teller-small.jpg"
        ></Article>
        <Article
          content={legendsArticleContent}
          title="A fortune teller preparing to tell fortune with tarot cards."
          image="/images/red-dragon-small.jpg"
          right={true}
        ></Article>
      </div>
    </>
  )
}

export default Home
