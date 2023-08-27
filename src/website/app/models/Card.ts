export interface CardProps {
  index: number
  size: CardSize
  card: string
  cardText: string
  cardName: string
  isReversed: boolean
  title: string
  canClick: boolean
  click: (cardIndex: number) => void
  isVisible: boolean
}

export type CardSize = 'full_size' | 'mid_size'

export const FULL_SIZE_WIDTH = 192
export const FULL_SIZE_HEIGHT = 342
export const MID_SIZE_WIDTH = 104
export const MID_SIZE_HEIGHT = 180
export const NUMBER_OF_CARDS = 78
