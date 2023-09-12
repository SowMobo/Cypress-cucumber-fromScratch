const { When, Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

import { HomePage } from "../pages/HomePage";

Given('I am on amazon home page {string}', (sutUrl)=> {
    HomePage.openAmazon(sutUrl)
    HomePage.closeCookies()
})

When('I enter the keyword {string} into search field',(keyword)=> {
    HomePage.enterKeyword(keyword)
})

When('I click on search button', ()=> {
    HomePage.search()
})

Then('the first item from the search has title {string}', (keyword)=> {
    HomePage.checkArticleTtile(keyword)
})

Then('the search result has at least {int} items', (length)=> {
    HomePage.checkLenght(length)
}) 

Then('price {string}', (price) => {
    HomePage.checkPrice(price)
})