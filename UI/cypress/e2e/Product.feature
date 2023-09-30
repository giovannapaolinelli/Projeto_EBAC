Feature: Cart
Background: 
    Given I visit a product page
    
    Scenario: Add numbers of product
        When I add "<amount>" product to the cart
        Then The product "<should>" be added

    Examples:
        | amount     | should      |
        | 1          | should      |
        | 10         | should      |
        | 11         | should not  |

    Scenario: Add 10 + 1 product to card
        When I add one more product to the cart
        Then The product should be added

    Scenario: Add different products
        When I add diffent products to the cart
        Then The products should be added