export class HomePage {
    static searchTextBoxBy = '#twotabsearchtextbox'
    static loopSearchBy = '#nav-search-submit-button'
    static resultList = 'div.s-card-container'
    static articleTitle = '.sg-col-inner h2 span'
    static cookiesBy = '#sp-cc-accept'
    static priceBy = 'span.a-price-whole'

    static openAmazon(sutUrl) {
        cy.visit(sutUrl)
    }
    static closeCookies() {
        cy.get(this.cookiesBy).click()
    }
    static enterKeyword(keyword) {
        cy.get(this.searchTextBoxBy)
            .click()
            .type(keyword)
            .should('have.value', keyword)
    }

    static search() {
        cy.get(this.loopSearchBy).click()
    }

    static checkArticleTtile(keyword) {
            cy.get(this.resultList).as('items')
            cy.get('@items').get(this.articleTitle, { timeout: 10000 }).first().as('title')
            cy.get('@title').should('contain.text', keyword)
    }

    static checkLenght(length) {
        cy.get(this.resultList)
            .should('have.length.at.least', length)
    }

    static checkPrice(price) {
        const items = cy.get(this.resultList)
        items.get(this.priceBy).first().then(($priceElt) => {
            const price = $priceElt.text()
            expect(price).to.equal(price)
        })
    } 
}