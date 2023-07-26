const check8Ball = () => {
  cy.get('img[data-id="8ball-image"]').should('be.visible')
  cy.get('span[data-id="fortune-answer"]').should('not.contain.text')
  cy.get('img[data-id="8ball-image"]').click().then(() => {
    cy.wait(3000).then(() => {
      cy.get('span[data-id="fortune-answer"]').invoke('text').should('not.be.empty')
    })
  })
}

export default check8Ball
