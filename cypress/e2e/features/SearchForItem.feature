Feature: Search 
    Scenario: Search for iphone 14 pro
        Given I am on amazon home page "/"
        When I enter the keyword "iphone 14 pro" into search field
        And I click on search button
        Then the search result has at least 50 items
        And the first item from the search has title "Apple iPhone 14 Pro (128 Go) - Noir sidéral" 
        And price "1 105,00€"