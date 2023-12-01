const navMenuItemsGet = '#nav-xshop a'
const categoryGet = 'div[role="group"]>div'


describe('Search for the top sell item in the high-tesch category', 
    ()=> {
    beforeEach('Visit amazon france and select MEILLEURES VENTES from header menu', () => {
        cy.log('Open amazon home page')
        cy.visit('/')
        cy.get('.a-button-primary').click()
        cy.log('Select Meilleures vente item at position 1 (0-based index) form menu')
        cy.get(navMenuItemsGet).eq(1).click()
    })

    it('Check the top sell item title and price in high-tesch category', () => {
        
        cy.log('select high-tesch category from the left menu')
        cy.get(categoryGet).eq(19).click()

        cy.log('check its title')
        const expectedTtitle = "INIU Batterie Externe, 22.5W Power Bank 10500mAh, Batterie Portable " +
                                "(USB C Input&Output) PD3.0 QC4.0 Charge Rapide LED Power Bank, Compatible avec iPhone 14 13 12 " +
                                "11 X Samsung Xiaomi Huawei iPad etc."
        
    })
})