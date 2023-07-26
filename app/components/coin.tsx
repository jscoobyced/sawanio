'use client'
import { useState } from 'react'
import '../../styles/coin.css'

const FlippingCoin = () => {
  const [flipClass, setFlipClass] = useState('')
  const [flipping, setFlipping] = useState(false)

  const flipCoin = () => {
    if (flipping) return
    setFlipping(true)
    setFlipClass('flip')
    setTimeout(() => {
      const result = Math.floor(Math.random() * 2)
      setFlipClass(result == 0 ? 'head' : 'tail')
      setFlipping(false)
    }, 5000)
  }

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Flip a coin here
      </h1>
      <div
        className="flex mx-auto pt-20 w-4/5 justify-center"
        onClick={flipCoin}
      >
        <div className={`coin ${flipClass} mx-auto w-1/5`}></div>
      </div>
    </>
  )
}

export default FlippingCoin
