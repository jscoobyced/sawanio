import Menu from './Menu'

describe('<Home />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Menu />)

    cy.get('nav').find('ul').should('have.length', 3)
    cy.get('ul[data-id="menu-top"]').find('li').should('have.length', 8)

  })
})

export {}
