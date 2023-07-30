'use client'

import Image from 'next/image'
import {
  CardProps,
  FULL_SIZE_HEIGHT,
  FULL_SIZE_WIDTH,
  MID_SIZE_HEIGHT,
  MID_SIZE_WIDTH,
} from '../models/Card'

const CardItem = (props: CardProps): JSX.Element => {
  const {
    index,
    size,
    card,
    cardText,
    cardName,
    isReversed,
    title,
    canClick,
    click,
    isVisible,
  } = props

  const cardUrl = `/images/cards/${size}/${card}.jpg`
  const hiddenCardUrl = `/images/cards/${size}/00.png`
  const cards = [hiddenCardUrl, cardUrl]
  const cardAltText = ['Tarot card background', 'Tarot card revealed']
  const cardNameText = cardName + (isReversed ? ' - Reversed' : '')
  const cardTitle = [
    'Click to reveal your card',
    `Your ${title} card is ${cardName}`,
  ]

  const handleClick = () => {
    if (!isVisible && canClick) {
      click(index)
    }
  }

  return (
    <div className="flex flex-col items-center mx-2 my-2">
      {card !== '' ? (
        <>
          <span className='pb-2'>{title}</span>
          <Image
            src={cards[isVisible ? 1 : 0]}
            width={size == 'full_size' ? FULL_SIZE_WIDTH : MID_SIZE_WIDTH}
            height={size == 'full_size' ? FULL_SIZE_HEIGHT : MID_SIZE_HEIGHT}
            alt={cardAltText[isVisible ? 1 : 0]}
            title={cardTitle[isVisible ? 1 : 0]}
            onClick={handleClick}
            className={`${isReversed ? 'rotate-180 pt-2' : 'pb-2'} ${
              size == 'full_size' ? 'min-w-card-w-full' : 'min-w-card-w-mid'
            }`}
          />
          {isVisible ? (
            <>
              <span className="pb-2 font-bold text-center">{cardNameText}</span>
              <span className="pb-5 w-2/3 sm:w-fit">{cardText}</span>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CardItem
