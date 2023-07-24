'use client'

import Image from 'next/image'
import { useState } from 'react'
import '../../styles/8ball.css'

const Page = () => {
  const [shakeClass, setShakeClass] = useState('')
  const [answer, setAnswer] = useState('')
  const answers = [
    'It is certain',
    'It is decidely so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, ask again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'Me reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'No',
    "I'm afraid not",
    "That's a no",
    'Negative',
    'Not at this time'
  ]

  const shake = () => {
    setAnswer('')
    setShakeClass('image--shake')
    setTimeout(() => {
      const chosen = Math.floor(Math.random() * answers.length)
      setAnswer(answers[chosen])
      setShakeClass('')
    }, 2500)
  }

  return (
    <>
      <Image
        alt="8 ball fortune teller"
        className={`mx-auto pt-20 ${shakeClass}`}
        data-id="8ball-image"
        src={'/images/8ball.gif'}
        width={450}
        height={450}
        onClick={shake}
      />
      <span
        data-id="fortune-answer"
        className="absolute top-1/3 xs:top-1/4 sm:top-ball-1/5 left-1/2 -translate-x-1/2 w-28 font-bold text-xl text-center text-tertiary-color"
      >
        {answer}
      </span>
    </>
  )
}

export default Page
