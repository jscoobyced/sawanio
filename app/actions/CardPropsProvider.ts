'use client'

import { CardProps, CardSize } from '../models/Card'
import getCardPositions from './CardPositionProvider'
import description from './descriptions.json'
import names from './names.json'

const getCardProps = (
  numberOfCards,
  size: CardSize = 'full_size'
): CardProps[] => {
  const cards: CardProps[] = []
  let canClick = true
  const titles = ['Past', 'Present', 'Future', 'Advice']
  const DESCRIPTION_PAST = 0
  const DESCRIPTION_PRESENT = 1
  const DESCRIPTION_FUTURE = 2
  const DESCRIPTION_ADVICE = 3
  const DESCRIPTION_POSITION_REVERSED = 4
  const DESCRIPTION_POSITION = [
    DESCRIPTION_PAST,
    DESCRIPTION_PRESENT,
    DESCRIPTION_FUTURE,
    DESCRIPTION_ADVICE,
  ]
  const positions = getCardPositions(numberOfCards)
  for (let i = 0; i < numberOfCards; i++) {
    const position = positions[i]
    const isReversed = findIsReversed()
    const cardText = isReversed
      ? description[DESCRIPTION_POSITION_REVERSED][position]
      : description[DESCRIPTION_POSITION[i % DESCRIPTION_POSITION.length]][
          position
        ]
    const cardName = names[position]
    const card: CardProps = {
      index: i,
      size,
      card: String(position).padStart(2, '0'),
      cardText,
      cardName,
      isReversed,
      title: titles[i % titles.length],
      canClick,
      click: (cardIndex: number) => void cardIndex,
      isVisible: true,
    }
    cards.push(card)
    canClick = false
  }
  return cards
}

const findIsReversed = () => {
  return Math.floor(Math.random() * 2) === 0
}

export default getCardProps
