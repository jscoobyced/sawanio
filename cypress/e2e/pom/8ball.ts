const check8Ball = () => {
  cy.get('img[data-id="8ball-image"]').should('be.visible')
  cy.get('span[data-id="fortune-answer"]').should('not.contain.text')
  cy.get('img[data-id="8ball-image"]')
    .click()
    .then(() => {
      cy.get('span[data-id="fortune-answer"]')
        .invoke('text')
        .should('not.be.empty',{ timeout: 12000 })
    })
}

export default check8Ball
