Feature: Cart
Background: 
    Given I add product to a cart and visit cart page
    
    Scenario: Edit Product
        When I edit the product in the cart
        Then The cart must be updated

    Scenario: Delete Product
        When I delete my product from the cart
        Then The cart must be empty

    