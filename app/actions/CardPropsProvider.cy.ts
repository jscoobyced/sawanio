import getCardProps from './CardPropsProvider'

describe('CardPropsProvider', () => {
  it('Can generate 0 cards', () => {
    const cards = getCardProps(0)
    expect(cards).to.have.lengthOf(0)
  })

  it('Can generate 4 cards', () => {
    const cards = getCardProps(4)
    expect(cards).to.have.lengthOf(4)
  })

  it('Card generated has title, name and description', () => {
    const cards = getCardProps(1)
    expect(cards[0].title).to.not.be.empty
    expect(cards[0].cardName).to.not.be.empty
    expect(cards[0].cardText).to.not.be.empty
  })

  it('Card generated is not visible', () => {
    const cards = getCardProps(1)
    expect(cards[0].isVisible).to.be.false
  })

  /*
  it('First card is clickable, subsequent cards are not clickable', () => {
    const cards = getCardProps(10)
    expect(cards[0].canClick).to.be.true
    cards.shift()
    cards.forEach((card) => {
      expect(card.canClick).to.be.false
    })
  })
  */
})
