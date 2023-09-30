Feature: Cart
Background: 
    Given I visit a product page
    
    Scenario: Add 1 product
        When I edit the product in the cart
        Then The cart must be updated

    Scenario: Add 10 products
        When I edit the product in the cart
        Then The cart must be updated

    Scenario: Add 11 elevent products
        When I delete my product from the cart
        Then The

    Scenario: Add 10 + 1 product to card
        When I edit the product in the cart
        Then The cart must be updated

    Scenario: Add different products
        When I delete my product from the cart
        Then The