Feature: Cart
Background: 
    Given I visit a product page
    
    Scenario Outline: Add numbers of product
        When I add "<amount>" product to the cart
        Then "<added>" product should be added

    Examples:
        | amount     | added  | 
        | 1          | 1      |
        | 10         | 10     |
        | 11         | 0      |

    Scenario Outline: Add 10 + 1 product to card
        When I add "<amount1>" and "<amount2>" of product to the cart
        Then "<added>" product should be added
    Examples:
        | amount1     | amount2  | added  | 
        | 10          | 1        | 10     |


    Scenario Outline: Add different products
        When I add "<amount1>" of a product and "<amount2>" of another product to the cart
        Then "<added>" product should be added
    Examples:
        | amount1     | amount2  | added  | 
        | 10          | 1        | 10     |