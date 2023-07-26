const checkPageMandatoryElements = () => {

  cy.get('nav').should('exist')
  cy.get('main').should('exist')
  cy.get('footer').should('exist')
  cy.get('footer').should('contain.text', 'Sawan.io')
}

export default checkPageMandatoryElements
