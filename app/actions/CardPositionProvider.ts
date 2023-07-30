'use client'

import { NUMBER_OF_CARDS } from '../models/Card'

const getCardPositions = (numberOfCards: number): number[] => {
  const cardPositions: number[] = []
  for (let i = 0; i < numberOfCards; i++) {
    const position = findNextNumber(cardPositions)
    cardPositions.push(position)
  }
  return cardPositions
}

const findNextNumber = (picked: number[]): number => {
  const num = 1 + Math.floor(Math.random() * NUMBER_OF_CARDS)
  if (picked.find((value) => value === num)) {
    return findNextNumber(picked)
  } else return num
}

export default getCardPositions
