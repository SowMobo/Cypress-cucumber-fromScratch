// Cypress.config({
//     baseUrl: 'https://example.cypress.io'
// })

describe('My First Test',
() => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('/')
      const expectedHomePageBackgroundImage_src = "//practice.automationtesting.in/wp-content/"+
                                "uploads/2017/01/Shop-For-Selenium-Books.png"
        
       cy.get('img.n2-ss-slide-background-image')
            .invoke('attr', 'src')
            .should('eq',expectedHomePageBackgroundImage_src)
    })
  })