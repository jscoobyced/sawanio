import BoxItem from './BoxItem'

describe('<BoxItem />', () => {
  it('should render and display expected content', () => {
    const link = '/test/example'
    const title = 'Title'
    const description = 'This is a description for the test.'
    cy.mount(<BoxItem link={link} title={title} description={description} backgroundColor='#000'/>)
    cy.get('a').should('have.length', 1)
    cy.get('span').should('have.length', 2)
  })
})

export {}
