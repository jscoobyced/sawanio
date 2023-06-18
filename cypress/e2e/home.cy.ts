// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000')

    cy.get('nav').should('exist')
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
    cy.get('footer').should('contain.text', 'Sawan.io')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
