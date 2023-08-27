import check8Ball from "./pom/8ball"
import checkPageMandatoryElements from "./pom/main"

// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000')
    checkPageMandatoryElements()
  })

  it('should navigate to the 8ball page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/fortune/8ball')
    checkPageMandatoryElements()
    check8Ball()
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
