import Menu from './Menu'

describe('<Menu />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Menu />)

    cy.get('nav').find('ul').should('have.length', 1)
    cy.get('ul[data-id="menu-top"]').find('li').should('have.length', 4)

  })
})

export {}
