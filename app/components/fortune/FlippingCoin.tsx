'use client'
import { useState } from 'react'
import '../../../styles/coin.css'

const FlippingCoin = () => {
  const [flipClass, setFlipClass] = useState('')
  const [flipping, setFlipping] = useState(false)
  const [result, setResult] = useState('')

  const flipCoin = () => {
    if (flipping) return
    setFlipping(true)
    setResult('')
    setFlipClass('flip')
    setTimeout(() => {
      const coinResult = Math.floor(Math.random() * 2)
      setFlipClass(coinResult == 0 ? 'head' : 'tail')
      setResult(coinResult == 0 ? "It' head!" : "It's tail")
      setFlipping(false)
    }, 3000)
  }

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-3xl font-bold">
        Flip a coin by clicking the coin
      </h1>
      <div
        className="flex mx-auto pt-20 w-4/5 flex-col items-center"
        onClick={flipCoin}
      >
        <div className={`coin ${flipClass}`}></div>
        <span>{result}</span>
      </div>
    </>
  )
}

export default FlippingCoin
