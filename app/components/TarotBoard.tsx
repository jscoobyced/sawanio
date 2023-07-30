'use client'

import { useEffect, useState } from 'react'
import getCardProps from '../actions/CardPropsProvider'
import CardItem from './CardItem'

const TarotBoard = () => {
  const [cardItems, setCardItems] = useState([] as JSX.Element[])

  useEffect(() => {
    const cards = getCardProps(4)
    const _cardItems = cards.map((card) => {
      return (
        <CardItem
          index={card.index}
          size={card.size}
          card={card.card}
          cardText={card.cardText}
          cardName={card.cardName}
          isReversed={card.isReversed}
          title={card.title}
          canClick={card.canClick}
          click={card.click}
          isVisible={card.isVisible}
        />
      )
    })
    setCardItems(_cardItems)
  }, [])

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-5xl font-bold">
        Read your tarot
      </h1>
      <div className="w-1/2 mx-auto text-center pt-5">This is a single reading version. An improved version will be back soon.</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto pt-10 w-4/5">
        {cardItems}
      </div>
    </>
  )
}

export default TarotBoard
