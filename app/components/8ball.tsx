'use client'

import Image from 'next/image'
import { useState } from 'react'
import '../../styles/8ball.css'

const Magic8Ball = () => {
  const [shakeClass, setShakeClass] = useState('')
  const [shaking, setShaking] = useState(false)
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
    'Not at this time',
  ]

  const shake = () => {
    if (shaking) return
    setShaking(true)
    setAnswer('')
    setShakeClass('image--shake')
    setTimeout(() => {
      const chosen = Math.floor(Math.random() * answers.length)
      setAnswer(answers[chosen])
      setShakeClass('')
      setShaking(false)
    }, 2500)
  }

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Tap on the magic 8 ball
      </h1>
      <div className="flex mx-auto pt-10 w-4/5">
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
          className="absolute top-1/2 xs:top-1/3 left-1/2 -translate-x-1/2 w-32 font-bold text-xl sm:text-3xl text-center text-secondary-color"
        >
          {answer}
        </span>
      </div>
    </>
  )
}

export default Magic8Ball
