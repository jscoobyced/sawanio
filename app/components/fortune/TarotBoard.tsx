'use client'

import { useEffect, useState } from 'react'
import getCardProps from '../../actions/fortune/CardPropsProvider'
import CardItem from './CardItem'
import { CardProps } from '../../models/Card'

const TarotBoard = () => {
  const [cardItems, setCardItems] = useState([] as JSX.Element[])
  const [cardProps, setCardProps] = useState(getCardProps(4))

  useEffect(() => {
    const clickCard = (cardIndex: number) => {
      const lastVisibleIndex = cardProps.findLast((cardProp) => {
        return cardProp.isVisible
      })?.index
      const _cardProps: CardProps[] = []
      if (lastVisibleIndex === cardProps.length - 1) {
        getCardProps(4).forEach((cardProp) => {
          _cardProps.push(cardProp)
        })
      } else {
        cardProps.forEach((cardProp, index) => {
          const card: CardProps = { ...cardProp }
          if (index <= cardIndex) {
            card.isVisible = true
          }
          card.canClick =
            cardIndex === cardProps.length - 1 ||
            (index === cardIndex + 1 && index < cardProps.length)
          _cardProps.push(card)
        })
      }
      setCardProps(_cardProps)
    }
    const _cardItems = cardProps.map((card) => {
      return (
        <CardItem
          key={card.index}
          index={card.index}
          size={card.size}
          card={card.card}
          cardText={card.cardText}
          cardName={card.cardName}
          isReversed={card.isReversed}
          title={card.title}
          canClick={card.canClick}
          click={() => clickCard(card.index)}
          isVisible={card.isVisible}
        />
      )
    })
    setCardItems(_cardItems)
  }, [cardProps])

  return (
    <>
      <h1 className="w-1/2 mx-auto text-center text-2xl sm:text-3xl font-bold">
        Read your tarot
      </h1>
      <div className="w-1/2 lg:w-1/3 mx-auto text-center mt-3 p-2 text-tertiary-color bg-tertiary-bg rounded-md">
        Click on the cards to reveal them. When all cards are revealed, you can
        click any card to restart.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto pt-3 w-4/5">
        {cardItems}
      </div>
    </>
  )
}

export default TarotBoard
