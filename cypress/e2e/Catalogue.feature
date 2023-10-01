Feature: Catalogue Account
Background:
    Given I visit EBAC Store products page

    Scenario: Click on product
        When I click on a product
        Then The product page should appear
    
    Scenario: Save product
        When I like a product
        Then The product should be saved in my favorites

    Scenario: See options product
        When I click on see options
        Then The product page should appear

    Scenario: Compare products
        When I click on compare products
        Then The product comparison page should appear
    
    Scenario: Visualize products
        When I click on visualize products
        Then The product pop up page should appear

