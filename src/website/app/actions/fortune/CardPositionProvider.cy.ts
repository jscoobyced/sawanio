import { NUMBER_OF_CARDS } from '../../models/Card'
import getCardPositions from './CardPositionProvider'

describe('CardPositionProvider', () => {
  it('Can generate 0 positions', () => {
    const positions = getCardPositions(0)
    expect(positions).to.have.lengthOf(0)
  })

  it('Can generate MAX different positions', () => {
    const positions = getCardPositions(NUMBER_OF_CARDS)
    expect(positions).to.have.lengthOf(NUMBER_OF_CARDS)
    const unique = new Set(positions)
    expect(positions.length).to.eq(unique.size)
  })
})
