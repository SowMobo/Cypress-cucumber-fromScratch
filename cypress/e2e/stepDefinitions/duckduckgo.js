const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  )
  .type('franceinfo').should('have.value', 'franceinfo');
  cy.get("button[aria-label='Search']").click();

  assert.deepEqual({}, {});
});