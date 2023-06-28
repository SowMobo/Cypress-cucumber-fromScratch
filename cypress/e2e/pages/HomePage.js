export class HomePage {
    static searchTextBoxBy = '#twotabsearchtextbox'
    static loopSearchBy = '#nav-search-submit-button'
    static resultList = 'div.s-card-container'
    static articleTitle = '.sg-col-inner h2 span'
    static cookiesBy = '#sp-cc-accept'

    static openAmazon(urlSUT) {
        cy.visit(urlSUT)
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
            const firstItem = cy.get(this.resultList).first()
                cy.debug()
                const title = firstItem.get(this.articleTitle, { timeout: 10000 })
                title.debug()
                title.should('contain.text', keyword)
    }

    static checkLenght(length) {
        cy.get(this.resultList).debug()
            .should('have.length.at.least', length)
    }
}