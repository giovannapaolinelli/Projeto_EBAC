Feature: Checkout
    Scenario: Checkout
        Given I visit EBAC Store products page 
        When I add product to the cart and complete shopping
        And I fill checkout
        Then a success screen must appear